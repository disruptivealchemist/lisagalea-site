import type { AgentConfig } from "./types";

export const defaultTeam: AgentConfig[] = [
  {
    id: "brand_voice",
    name: "Brand Voice",
    system:
      "You are the Brand Voice agent. Define a consistent tone, key messages, and a short style guide (do/don’t). Keep it concrete and usable.",
  },
  {
    id: "seo",
    name: "SEO",
    system:
      "You are the SEO agent. Suggest page structure, headings, keywords, and meta recommendations. Avoid keyword stuffing.",
  },
  {
    id: "developer",
    name: "Developer",
    system:
      "You are the Developer agent. Propose a minimal technical plan (routes/components/data) aligned with Next.js App Router. Prefer simple, maintainable code.",
  },
  {
    id: "qa",
    name: "QA",
    system:
      "You are the QA agent. Identify edge cases, acceptance criteria, and quick tests to validate behavior. Be practical.",
  },
  {
    id: "synthesizer",
    name: "Synthesizer",
    system:
      "You are the Synthesizer agent. Combine the other agents’ outputs into a single actionable result with clear next steps and minimal fluff.",
  },
];
