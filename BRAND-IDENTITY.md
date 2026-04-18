# Lisa Galea Brand Identity

## Overview

This page captures the active brand color system used in the site and supporting ZiggyZap touchpoints.

Source of truth for implementation lives in [src/app/globals.css](src/app/globals.css).

## Core Palette

| Token | Value | Purpose |
|---|---|---|
| `--color-ink` | `#272626` | Primary text and border color |
| `--color-ink-strong` | `#262626` | Higher-contrast text variant |
| `--color-ink-muted` | `rgba(38,38,38,0.65)` | Secondary text and placeholder copy |
| `--color-gold` | `#F5B51A` | Signature accent, highlights, hover states |
| `--color-grey-light` | `#f7f7f7` | Soft background surfaces |
| `--color-canvas` | `#f7f7f7` | Main page background |
| `--color-brand-black` | `#0a0a0b` | Deep black base for contrast-heavy sections |
| `--color-brand-paper` | `#f7f7f7` | Paper-toned light surface |
| `--color-vivid-cyan` | `#00f5ff` | Electric accent for high-energy moments |
| `--color-vivid-magenta` | `#ff00ff` | Glitch-pop accent |
| `--color-vivid-blue` | `#2d5bff` | Saturated digital blue accent |

## Brand Read

The palette balances grounded editorial neutrals with high-voltage digital accents:

- Ink and brand black create clarity, contrast, and authority.
- Gold adds warmth, confidence, and premium emphasis.
- Off-white canvas keeps the site light, spacious, and human.
- Cyan, magenta, and vivid blue push the ZiggyZap and future-facing AI layer into a more electric visual register.

## Practical Usage

- Use `ink`, `ink-strong`, and `ink-muted` for typography and UI structure.
- Use `gold` as the primary accent, CTA emphasis, and interaction highlight.
- Use `canvas` and `brand-paper` for main backgrounds.
- Use `brand-black` for contrast sections, overlays, and premium framing.
- Use `vivid-cyan`, `vivid-magenta`, and `vivid-blue` sparingly as energy colors rather than base UI colors.

## Tailwind Token Mapping

These tokens are defined in [src/app/globals.css](src/app/globals.css) via Tailwind v4 `@theme`, so they map directly to utilities such as:

- `bg-gold`
- `text-ink`
- `border-brand-black`
- `bg-canvas`

## ZiggyZap Application

ZiggyZap uses the same brand system with a slightly more theatrical expression:

- `#F5B51A` for emphasis, labels, and CTA moments
- `#0a0a0b` for dark grounding panels
- `#f7f7f7` for readable contrast on dark surfaces
- Vivid accents reserved for glitch-coded or high-energy visual moments

## Reference

- Design tokens: [src/app/globals.css](src/app/globals.css)
- Email styling example: [src/app/api/chat-lead/route.ts](src/app/api/chat-lead/route.ts)