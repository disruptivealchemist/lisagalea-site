# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run lint     # ESLint (flat config, eslint.config.mjs)
npm run start    # serve the production build
```

No test suite is configured. There is no `test` script.

## Environment variables

Create `.env.local` (not committed):

| Variable | Required | Purpose |
|---|---|---|
| `OPENAI_API_KEY` | Yes | ZiggyZap chat widget + multi-agent runner |
| `OPENAI_MODEL` | No | Defaults to `gpt-4o-mini` |
| `RESEND_API_KEY` | Yes | Contact form email via Resend |
| `NEXT_PUBLIC_SITE_URL` | No | Defaults to `https://lisagalea.com` |
| `NEXT_PUBLIC_ADOBE_KIT_ID` | No | Adobe Fonts (Typekit) kit ID — fonts won't load without it |

## Architecture

**Stack:** Next.js 16.2.1 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · OpenAI SDK · Resend

### Route map

| Route | Type | Purpose |
|---|---|---|
| `/` `/about` `/services` `/contact` | Pages | Public marketing pages |
| `/agents` | Page | Multi-agent team runner UI |
| `/api/chat` | Route handler | Streaming SSE endpoint for ZiggyZap widget |
| `/api/chat-lead` | Route handler | Lead capture when ZiggyZap collects a visitor email |
| `/api/agents/run` | Route handler | `POST { prompt, mode }` → runs the default agent team |

### ZiggyZap — AI Concierge widget

`src/components/ZiggyZap.tsx` is a `"use client"` floating chat widget rendered on every page via `src/app/layout.tsx`. It streams responses from `/api/chat`. All widget CSS is scoped under `.zz-*` classes in `globals.css`. Persona logic and greetings live in `src/lib/ziggyzap/` (check there for system prompts before modifying the widget's tone).

### Multi-agent runner

`src/lib/agents/runTeam.ts` — pure TypeScript, no framework coupling.

- **Sequential mode:** each agent receives prior agents' outputs.
- **Parallel mode:** all agents except the last run concurrently; the last agent synthesizes.

Team definition: `src/lib/agents/defaultTeam.ts`. To add an agent, add an `AgentConfig` to that array.

### Contact form

`src/app/contact/actions.ts` is a Next.js Server Action (`"use server"`). It validates, then sends email via Resend to `curious@lisagalea.com`. The `from` address must be a verified Resend domain.

### Design system

**Tailwind v4** — tokens are defined as CSS custom properties inside `@theme {}` in `src/app/globals.css`, not in a `tailwind.config`. They become utility classes automatically (e.g. `bg-gold`, `font-display`, `text-btn`).

**CSS component classes** (not Tailwind utilities) — defined in `globals.css`:

| Class | Purpose |
|---|---|
| `.btn` | Base button — outline, wipe-fill hover animation |
| `.btn-filled` | Primary/dark-background button |
| `.btn-ghost` | Button on dark/ink backgrounds |
| `.field` | Form input / textarea (pill-shaped, 50px radius) |
| `.section-shell` | Section wrapper with atmospheric pseudo-element |
| `.concept-panel` | Frosted glass card |
| `.card-lift` | Hover lift animation |
| `.reveal-rise` | Entry animation |
| `.futurist-label` | Small gold uppercase label |
| `.surreal-frame` | Image with clipping path hover effect |
| `.noise-overlay` | Fixed full-screen film-grain texture |

**Fonts** — loaded via Adobe Typekit (`NEXT_PUBLIC_ADOBE_KIT_ID`). Families: `playfair-display` (display/hero), `futura-pt-bold` (headings), `futura-pt` (sub-headings), `futura-100-book` (body/UI), `museo-sans-condensed` (labels). Reference by Tailwind class: `font-display`, `font-heading`, `font-body`, `font-ui`, `font-condensed`.

### Redirects

`next.config.ts` contains WordPress → Next.js 301 redirects for SEO continuity. Both trailing-slash and non-trailing-slash variants are included for each old URL.
