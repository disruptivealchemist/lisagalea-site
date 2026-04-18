export type AgentConfig = {
  id: string;
  name: string;
  system: string;
};

export type AgentRunResult = {
  agentId: string;
  agentName: string;
  output: string;
};

export type TeamRunOutput = {
  model: string;
  prompt: string;
  results: AgentRunResult[];
  final: string;
};
