/**
 * ZiggyZap Chat API — Streaming endpoint
 *
 * Public route — no API key required for site visitors.
 * Calls OpenRouter (Claude) using the OpenAI-compatible SDK with a custom baseURL.
 * ZiggyZap persona + full KB injected as system message.
 */

import OpenAI from "openai";
import { ZIGGYZAP_SYSTEM_PROMPT } from "@/lib/ziggyzap/persona";
import { checkRateLimit, getClientIp } from "@/lib/ratelimit";
import { env } from "@/lib/env";

export const runtime = "nodejs";

// 20 requests per minute per IP — generous for genuine users, painful for scrapers
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

const MODEL = process.env.OPENROUTER_MODEL ?? "anthropic/claude-haiku-4-5-20251001";
const MAX_TOKENS = 1200;
const MAX_HISTORY_MESSAGES = 20;

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const { allowed } = checkRateLimit(ip, RATE_LIMIT, RATE_WINDOW_MS);
  if (!allowed) {
    return new Response("Too many requests. Please slow down.", {
      status: 429,
      headers: { "Retry-After": "60" },
    });
  }

  const client = new OpenAI({
    apiKey: env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
    defaultHeaders: {
      "HTTP-Referer": "https://lisagalea.com",
      "X-Title": "ZiggyZap — Lisa Galea AI Concierge",
    },
  });

  try {
    const body = await req.json();
    const { messages } = body as { messages: OpenAI.Chat.ChatCompletionMessageParam[] };

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response("Invalid messages", { status: 400 });
    }

    const trimmed = messages.slice(-MAX_HISTORY_MESSAGES);

    const stream = await client.chat.completions.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      temperature: 0.85,
      messages: [
        { role: "system", content: ZIGGYZAP_SYSTEM_PROMPT },
        ...trimmed,
      ],
      stream: true,
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const delta = chunk.choices[0]?.delta?.content ?? "";
            if (delta) {
              controller.enqueue(new TextEncoder().encode(delta));
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[/api/chat] Error:", err);
    return new Response("ZiggyZap is temporarily offline. Try again shortly.", {
      status: 500,
    });
  }
}
