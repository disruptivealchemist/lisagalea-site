import { notFound } from "next/navigation";
import BuilderPage from "@/components/BuilderPage";
import {
  BUILDER_MODEL,
  fetchBuilderPageContent,
  getBuilderApiKey,
  isBuilderPreview,
} from "@/lib/builder";

type PageProps = {
  params: Promise<{ builderPath: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BuilderCatchAllPage({
  params,
  searchParams,
}: PageProps) {
  const { builderPath } = await params;
  const resolvedSearchParams = await searchParams;
  const path = `/${builderPath.join("/")}`;
  const apiKey = getBuilderApiKey();

  if (!apiKey) {
    notFound();
  }

  const content = await fetchBuilderPageContent(path, resolvedSearchParams);
  const previewing = isBuilderPreview(resolvedSearchParams);

  if (!content && !previewing) {
    notFound();
  }

  return (
    <BuilderPage
      apiKey={apiKey}
      content={content}
      model={BUILDER_MODEL}
      path={path}
    />
  );
}