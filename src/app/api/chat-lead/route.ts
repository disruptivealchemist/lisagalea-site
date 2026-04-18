/**
 * ZiggyZap Lead Capture API
 *
 * Called when a user provides their email after completing the quiz.
 * Sends quiz results + Behavioural Science Cheat Sheet intro via Resend.
 */

import { Resend } from "resend";
import { checkRateLimit, getClientIp } from "@/lib/ratelimit";
import { env } from "@/lib/env";

export const runtime = "nodejs";

// 5 lead captures per hour per IP — prevents email spam abuse
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60_000;

interface LeadPayload {
  email: string;
  score?: number;
  total?: number;
  interests?: string[];
}

export async function POST(req: Request) {
  const ip = getClientIp(req);
  const { allowed } = checkRateLimit(ip, RATE_LIMIT, RATE_WINDOW_MS);
  if (!allowed) {
    return Response.json({ error: "Too many requests" }, {
      status: 429,
      headers: { "Retry-After": "3600" },
    });
  }

  // Validate env at request time — throws with a clear message if key is missing
  const resend = new Resend(env.RESEND_API_KEY);

  try {
    const body = await req.json() as LeadPayload;
    const { email, score, total = 15, interests = [] } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    const scoreText = typeof score === "number"
      ? `Your ZiggyZap Quiz Score: **${score}/${total}**`
      : "";

    const interestsText = interests.length > 0
      ? `\n\nBased on your conversation, you seemed most interested in: ${interests.join(", ")}.`
      : "";

    const { error } = await resend.emails.send({
      from: "ZiggyZap via Lisa Galea <noreply@lisagalea.com>",
      to: email,
      replyTo: "curious@lisagalea.com",
      subject: "⚡ Your ZiggyZap Quiz Results + Behavioural Science Cheat Sheet",
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>Your ZiggyZap Results</title></head>
<body style="font-family: 'Futura', 'Century Gothic', Arial, sans-serif; background: #f7f7f7; margin: 0; padding: 40px 20px;">
  <div style="max-width: 580px; margin: 0 auto; background: #0a0a0b; border: 1px solid rgba(245,181,26,0.4); padding: 40px;">

    <div style="border-bottom: 1px solid #F5B51A; padding-bottom: 20px; margin-bottom: 30px;">
      <p style="color: #F5B51A; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; margin: 0 0 8px 0;">ZiggyZap // Lisa Galea</p>
      <h1 style="color: #f7f7f7; font-size: 28px; margin: 0; line-height: 1.2;">The Zap Has Landed. ⚡</h1>
    </div>

    <p style="color: rgba(247,247,247,0.8); font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
      You asked me to send this — so here I am. In your inbox. Like I promised.
    </p>

    ${scoreText ? `
    <div style="border-left: 2px solid #F5B51A; padding: 16px 20px; margin: 0 0 24px 0; background: rgba(245,181,26,0.08);">
      <p style="color: #F5B51A; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; margin: 0 0 6px 0;">Your Quiz Result</p>
      <p style="color: #f7f7f7; font-size: 22px; font-weight: bold; margin: 0;">${scoreText}</p>
    </div>
    ` : ""}

    <p style="color: rgba(247,247,247,0.8); font-size: 15px; line-height: 1.7; margin: 0 0 20px 0;">
      ${score !== undefined && score >= 10
        ? "That score tells me you already think like a behavioural scientist. Now let's put it to work."
        : score !== undefined && score >= 5
          ? "You're on the wavelength. A few more unlocked levels and you'll see why Lisa's clients describe her work as 'the leadership reset I didn't know I needed.'"
          : "Here's the thing about behavioural science — the most powerful insights are the ones that surprise you. That's the whole point. You've just started seeing the patterns."
      }${interestsText}
    </p>

    <div style="border: 1px solid rgba(245,181,26,0.3); padding: 24px; margin: 0 0 28px 0;">
      <p style="color: #F5B51A; font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; margin: 0 0 12px 0;">Your Behavioural Science Cheat Sheet</p>
      <p style="color: #f7f7f7; font-size: 14px; font-weight: bold; margin: 0 0 8px 0;">5 Principles Worth Remembering</p>
      <ol style="color: rgba(247,247,247,0.75); font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
        <li><strong style="color: #f7f7f7;">Loss Aversion</strong> — People feel losses ~2× more intensely than equivalent gains. Frame offers as "don't lose" not "you'll gain."</li>
        <li><strong style="color: #f7f7f7;">Default Bias</strong> — The pre-set option wins by default. Make the easy path the right path.</li>
        <li><strong style="color: #f7f7f7;">Social Proof</strong> — Descriptive norms ("75% of people like you do X") outperform principles ("you should do X").</li>
        <li><strong style="color: #f7f7f7;">Anchoring</strong> — The first number shapes all subsequent judgements. Go first in negotiations. Set the frame.</li>
        <li><strong style="color: #f7f7f7;">Narrative Transportation</strong> — Stories bypass critical defences. Facts in a story change minds; facts alone rarely do.</li>
      </ol>
    </div>

    <p style="color: rgba(247,247,247,0.7); font-size: 14px; line-height: 1.6; margin: 0 0 28px 0;">
      Want to go deeper? Lisa's work is exactly this — behavioural science applied to leadership, communication, and how teams think. Without the academic jargon.
    </p>

    <a href="https://lisagalea.com/services" style="display: inline-block; color: #0a0a0b; background: #F5B51A; font-size: 11px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; text-decoration: none; padding: 14px 28px; margin-bottom: 32px;">Explore Lisa&rsquo;s Services</a>

    <hr style="border: none; border-top: 1px solid rgba(245,181,26,0.2); margin: 0 0 24px 0;">

    <p style="color: rgba(247,247,247,0.35); font-size: 11px; line-height: 1.5; margin: 0;">
      ZiggyZap — AI Concierge for lisagalea.com<br>
      curious@lisagalea.com &nbsp;·&nbsp; Byron Bay Hinterland, Australia<br>
      You received this because you asked ZiggyZap to send it. No spam, just sparks.
    </p>
  </div>
</body>
</html>
      `.trim(),
    });

    if (error) {
      console.error("[/api/chat-lead] Resend error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[/api/chat-lead] Error:", err);
    return Response.json({ error: "Internal error" }, { status: 500 });
  }
}
