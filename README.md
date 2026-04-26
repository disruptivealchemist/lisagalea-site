This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Session Reports

| Date | Report |
|---|---|
| 2026-04-04 | [SESSION-COMPLETE-2026-04-04.md](SESSION-COMPLETE-2026-04-04.md) |
| 2026-04-24 | [SESSION-COMPLETE-2026-04-24.md](SESSION-COMPLETE-2026-04-24.md) — CMS-ready content architecture + Builder.io wiring |

## Getting Started

### Environment

Create `.env.local` based on `.env.example` and set:

- `OPENAI_API_KEY`
- (optional) `OPENAI_MODEL`

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Builder.io Visual Builder

This repo now supports Builder pages via App Router catch-all routing:

- Route: `src/app/[...builderPath]/page.tsx`
- Fetch helper: `src/lib/builder.ts`
- Renderer: `src/components/BuilderPage.tsx`

To use it:

1. Add `NEXT_PUBLIC_BUILDER_API_KEY` to `.env.local`.
2. In Builder.io, create/edit entries in the `page` model.
3. Set the Builder Preview URL to `http://localhost:3000` for local editing.
4. Publish and visit the matching URL path in your app.

Existing explicit Next.js routes (for example `/about`, `/services`, etc.) still take precedence over the catch-all route.

## Agents (multi-agent team)

- UI: [http://localhost:3000/agents](http://localhost:3000/agents)
- API: `POST /api/agents/run` with JSON `{ "prompt": "...", "mode": "parallel" | "sequential" }`

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
