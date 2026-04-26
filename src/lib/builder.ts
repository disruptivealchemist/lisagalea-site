import {
  fetchOneEntry,
  getBuilderSearchParams,
  isPreviewing,
  type BuilderContent,
} from "@builder.io/sdk-react";

export const BUILDER_MODEL = "page";

type NextSearchParams = Record<string, string | string[] | undefined>;

function toUrlSearchParams(searchParams: NextSearchParams): URLSearchParams {
  const urlSearchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(searchParams)) {
    if (typeof value === "string") {
      urlSearchParams.set(key, value);
      continue;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        urlSearchParams.append(key, item);
      }
    }
  }

  return urlSearchParams;
}

export function getBuilderApiKey(): string | null {
  return process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? null;
}

export function isBuilderPreview(searchParams: NextSearchParams): boolean {
  return isPreviewing(toUrlSearchParams(searchParams));
}

export async function fetchBuilderPageContent(
  path: string,
  searchParams: NextSearchParams,
): Promise<BuilderContent | null> {
  const apiKey = getBuilderApiKey();
  if (!apiKey) {
    return null;
  }

  const builderSearchParams = toUrlSearchParams(searchParams);
  const previewing = isPreviewing(builderSearchParams);

  return fetchOneEntry({
    model: BUILDER_MODEL,
    apiKey,
    userAttributes: {
      urlPath: path,
    },
    options: getBuilderSearchParams(builderSearchParams),
    includeUnpublished: previewing,
    cacheSeconds: previewing ? 1 : 60,
    staleCacheSeconds: previewing ? 1 : 300,
  });
}