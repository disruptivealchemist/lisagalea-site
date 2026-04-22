'use client';

interface BuilderPageProps {
  path: string;
}

/**
 * Builder.io visual editor component.
 * TODO: Wire this up once Builder.io pages are created in dashboard.
 * For now, the SDK is installed but pages use their original code.
 */
export default function BuilderPage({ path }: BuilderPageProps) {
  // Builder.io content will be fetched and rendered here
  // when pages are created in the Builder.io dashboard
  return (
    <div
      data-builder-component="BuilderContent"
      data-builder-model="page"
      data-builder-entry={path}
    >
      {/* Builder content will render here */}
    </div>
  );
}
