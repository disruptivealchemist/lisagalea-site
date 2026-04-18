"use client";

import { useMemo, useState } from "react";

type AgentRunResult = {
  agentId: string;
  agentName: string;
  output: string;
};

type TeamRunOutput = {
  model: string;
  prompt: string;
  results: AgentRunResult[];
  final: string;
};

export default function AgentsPage() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState<"sequential" | "parallel">("parallel");
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<TeamRunOutput | null>(null);

  const canRun = useMemo(() => prompt.trim().length > 0 && !isRunning, [prompt, isRunning]);

  async function run() {
    setIsRunning(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch("/api/agents/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, mode }),
      });

      const json = (await res.json()) as TeamRunOutput | { error?: string };
      if (!res.ok) {
        throw new Error((json as { error?: string }).error || "Request failed");
      }

      setData(json as TeamRunOutput);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-start bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-6 py-16 px-6 bg-white dark:bg-black">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Agents
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Run a small multi-agent team (Planner → Critic → Builder).
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200" htmlFor="prompt">
            Prompt
          </label>
          <textarea
            id="prompt"
            className="min-h-32 w-full rounded-lg border border-black/[.08] bg-transparent p-3 text-zinc-900 outline-none focus:ring-2 focus:ring-black/[.10] dark:border-white/[.145] dark:text-zinc-50 dark:focus:ring-white/[.18]"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="What should the team work on?"
          />

          <div className="flex flex-row flex-wrap items-center gap-3">
            <label className="text-sm font-medium text-zinc-800 dark:text-zinc-200" htmlFor="mode">
              Mode
            </label>
            <select
              id="mode"
              className="h-12 rounded-full border border-solid border-black/[.08] bg-transparent px-4 text-sm text-zinc-900 outline-none dark:border-white/[.145] dark:text-zinc-50"
              value={mode}
              onChange={(e) => setMode(e.target.value as "sequential" | "parallel")}
              disabled={isRunning}
            >
              <option value="parallel">Parallel</option>
              <option value="sequential">Sequential</option>
            </select>
            <button
              type="button"
              onClick={run}
              disabled={!canRun}
              className="flex h-12 items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors disabled:opacity-60"
            >
              {isRunning ? "Running…" : "Run Team"}
            </button>
            {error ? (
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Error: {error}</p>
            ) : null}
          </div>
        </div>

        {data ? (
          <section className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-black dark:text-zinc-50">Results</h2>
            <div className="flex flex-col gap-3">
              {data.results.map((r) => (
                <article
                  key={r.agentId}
                  className="rounded-lg border border-black/[.08] p-4 dark:border-white/[.145]"
                >
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {r.agentName}
                  </h3>
                  <pre className="mt-2 whitespace-pre-wrap text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    {r.output}
                  </pre>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
