'use client';

import { Content, type BuilderContent } from "@builder.io/sdk-react";

interface BuilderPageProps {
  apiKey: string;
  model: string;
  content: BuilderContent | null;
  path: string;
}

export default function BuilderPage({ apiKey, model, content, path }: BuilderPageProps) {
  return (
    <div
      data-builder-component="BuilderContent"
      data-builder-model={model}
      data-builder-entry={path}
    >
      <Content apiKey={apiKey} content={content} model={model} />
    </div>
  );
}
