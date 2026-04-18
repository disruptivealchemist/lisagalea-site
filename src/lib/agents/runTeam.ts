import OpenAI from "openai";

import type { AgentConfig, AgentRunResult, TeamRunOutput } from "./types";

export type TeamRunMode = "sequential" | "parallel";

function getClient(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Missing OPENAI_API_KEY. Add it to your environment (e.g. .env.local).",
    );
  }
  return new OpenAI({ apiKey });
}

function getModel(): string {
  return process.env.OPENAI_MODEL || "gpt-4o-mini";
}

function buildUserMessage(prompt: string, prior: AgentRunResult[]): string {
  if (prior.length === 0) return prompt;

  const history = prior
    .map((r) => `## ${r.agentName}\n\n${r.output}`)
    .join("\n\n---\n\n");

  return `${prompt}\n\n---\n\nPrevious agent outputs:\n\n${history}`;
}

async function runOneAgent(params: {
  client: OpenAI;
  model: string;
  agent: AgentConfig;
  prompt: string;
  prior: AgentRunResult[];
}): Promise<AgentRunResult> {
  const { client, model, agent, prompt, prior } = params;

  const completion = await client.chat.completions.create({
    model,
    temperature: 0.2,
    messages: [
      { role: "system", content: agent.system },
      { role: "user", content: buildUserMessage(prompt, prior) },
    ],
  });

  const output = completion.choices?.[0]?.message?.content?.trim() || "";

  return {
    agentId: agent.id,
    agentName: agent.name,
    output,
  };
}

export async function runTeam(params: {
  prompt: string;
  team: AgentConfig[];
  model?: string;
  mode?: TeamRunMode;
}): Promise<TeamRunOutput> {
  const prompt = params.prompt.trim();
  if (!prompt) {
    throw new Error("Prompt is required.");
  }

  const team = params.team;
  if (!Array.isArray(team) || team.length === 0) {
    throw new Error("Team must be a non-empty array.");
  }

  const client = getClient();
  const model = (params.model || getModel()).trim();

  const mode: TeamRunMode = params.mode || "sequential";
  if (mode !== "sequential" && mode !== "parallel") {
    throw new Error("Mode must be 'sequential' or 'parallel'.");
  }

  const results: AgentRunResult[] = [];

  if (mode === "sequential" || team.length === 1) {
    for (const agent of team) {
      results.push(
        await runOneAgent({
          client,
          model,
          agent,
          prompt,
          prior: results,
        }),
      );
    }
  } else {
    const specialists = team.slice(0, -1);
    const synthesizer = team.at(-1)!;

    const specialistResults = await Promise.all(
      specialists.map((agent) =>
        runOneAgent({
          client,
          model,
          agent,
          prompt,
          prior: [],
        }),
      ),
    );

    results.push(...specialistResults);
    results.push(
      await runOneAgent({
        client,
        model,
        agent: synthesizer,
        prompt,
        prior: results,
      }),
    );
  }

  const final = results.at(-1)?.output || "";

  return {
    model,
    prompt,
    results,
    final,
  };
}
