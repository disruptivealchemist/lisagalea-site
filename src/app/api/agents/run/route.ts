import { NextResponse } from "next/server";

import { defaultTeam } from "@/lib/agents/defaultTeam";
import { runTeam, type TeamRunMode } from "@/lib/agents/runTeam";
import type { AgentConfig } from "@/lib/agents/types";

export const runtime = "nodejs";

const AGENTS_API_KEY = process.env.AGENTS_API_KEY;

type RunRequestBody = {
  prompt?: unknown;
  model?: unknown;
  team?: unknown;
  mode?: unknown;
};

function isTeamRunMode(value: unknown): value is TeamRunMode {
  return value === "sequential" || value === "parallel";
}

function isAgentConfig(value: unknown): value is AgentConfig {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === "string" &&
    typeof v.name === "string" &&
    typeof v.system === "string"
  );
}

export async function POST(req: Request) {
  try {
    // In production, require API key for security
    if (process.env.NODE_ENV === "production") {
      if (!AGENTS_API_KEY) {
        return NextResponse.json(
          { error: "Agent builder is not configured for this environment." },
          { status: 503 },
        );
      }

      const requestApiKey = req.headers.get("x-api-key");
      if (requestApiKey !== AGENTS_API_KEY) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    }

    const body = (await req.json()) as RunRequestBody;

    const prompt = typeof body.prompt === "string" ? body.prompt : "";
    const model = typeof body.model === "string" ? body.model : undefined;
    const mode = isTeamRunMode(body.mode) ? body.mode : undefined;

    const team = Array.isArray(body.team)
      ? body.team.filter(isAgentConfig)
      : defaultTeam;

    const output = await runTeam({ prompt, team, model, mode });
    return NextResponse.json(output);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
