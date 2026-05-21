# website-template

A reusable, static-first Next.js website template. Forked per client; each fork rebrands by editing `config/site.config.ts`, `content/`, and `config/theme.css` — not by editing components.

## Quick start

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open http://localhost:3000.

## Scripts

| Script | Purpose |
|---|---|
| `pnpm dev` | Next.js dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript check (no emit) |
| `pnpm format` | Prettier write |

Pre-commit runs Prettier + ESLint on staged files via Husky + lint-staged.

## Reading order for new contributors

1. This file — what the project is + how to run it.
2. `CLAUDE.md` — recurring rules and conventions for every change.
3. `ARCHITECTURE.md` — deep context, decisions log, facade structure.
4. `config/site.config.ts` — the per-fork customization surface.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · React Hook Form + Zod · Pino logger · next-themes · Framer Motion · MDX content.

## What lives where

```
app/            Routes, error boundaries, sitemap, robots
components/
  ui/           shadcn primitives (owned by repo)
  blocks/       Composed sections (Hero, Header, Footer, ...)
  seo/          JsonLd helper
  providers/    ThemeProvider
config/
  site.config.ts  Brand, nav, SEO defaults, provider choices
  theme.css       CSS variables (per-fork rebrand surface)
content/        Markdown/MDX content per-fork
lib/
  logger/       Facade: console / pino
  analytics/    Facade: none / plausible / umami / posthog / ga4
  email/        Facade: none / resend / smtp / web3forms / formspree
  cms/          Facade: local MDX / sanity / payload
  errors/       Facade: console / sentry
  search/       Facade: pagefind / algolia / meilisearch
  env.ts        Zod-validated env vars
middleware.ts   Security headers
```
