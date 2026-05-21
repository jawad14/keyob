# CLAUDE.md — Project Conventions

This file is loaded automatically by Claude Code at the start of every session, and serves as a quick reference for any developer joining the project. **Source of truth for deeper context is `ARCHITECTURE.md`** — read it once, then use this file as the recurring checklist.

---

## What this project is

A **reusable, static-first Next.js website template** that is forked per client. Each fork rebrands by editing config + content + theme — not by editing components.

## Stack at a glance

Next.js 16 App Router (Turbopack) · TypeScript (strict) · Tailwind CSS v4 · shadcn/ui (base-ui) · React Hook Form + Zod · MDX content · Pino (server) / console (browser) for logs · next-themes for theming · Framer Motion for animation · Husky + lint-staged + Prettier + ESLint.

---

## Top rules (apply to every change)

1. **Default to Server Components.** Only add `'use client'` when interactivity is actually required (forms with live state, modals, animations on user input). Marketing pages should be 100% server-rendered HTML.
2. **The three knobs.** Per-fork changes go only into:
   - `config/site.config.ts`
   - `content/`
   - `config/theme.css`
   Anything else is template territory and must not diverge between forks.
3. **No hardcoded brand strings, colors, or copy in components.** If a component contains the client's name or a hex code, it's wrong.
4. **Facade rule.** If a library is (a) used across the app **and** (b) has real alternatives a fork might want to swap to, wrap it in `lib/<concern>/` (interface + providers + factory). Currently faceted: logger, analytics, email, cms, errors, search. Do **not** facade single-purpose libs (next-themes, lucide, framer-motion).
5. **Server-side validation for every form.** Always Zod-validate on the server (Server Action or route handler), regardless of client validation.
6. **Always `next/image` and `next/font`.** Never raw `<img>` or external font links. Images need explicit `width`/`height` and `alt`.
7. **Typed env vars.** All env access goes through `lib/env.ts` (Zod-validated). Never `process.env.FOO` directly outside that file.
8. **Pre-rendered HTML for SEO surfaces.** No client-rendered marketing content.
9. **Content needs alt text.** Content frontmatter is Zod-validated at build. Build fails on missing alt or broken refs.
10. **Don't fight the formatter.** Pre-commit runs Prettier + ESLint on staged files. Let it.
11. **Use the typography primitives.** Never write raw `<h1>`–`<h6>` or `<p>` in `app/` or `components/`. Use `<Heading level={n}>` / `<H1>`–`<H6>` / `<Text>` / `<Lead>` / `<Muted>` / `<Small>` from `@/components/ui/typography`. ESLint enforces this.
12. **Use the form primitives.** Every form input must come from `@/components/ui/{input,label,textarea,select,checkbox,radio-group,switch}`. Never raw `<input>`/`<textarea>`/`<select>` in feature code. Validation: React Hook Form + Zod.
13. **Use the layout primitives.** Every page is composed of `<Section>` → `<Container>` → `<Stack>` / `<Cluster>` / `<Grid>` from `@/components/ui/layout`. Never invent local `mx-auto max-w-* px-*` or `py-* space-y-*` combinations.
14. **Mobile-first responsive.** Default styles are mobile. Use Tailwind breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`) for larger screens. Test at 360px width — every page must work there without horizontal scroll.

---

## Typography & form consistency (three lanes)

Native HTML elements are styled via three coordinated lanes — pick the right one for the situation:

| Lane | When | What to use |
|---|---|---|
| **1. Base-layer defaults** | Anywhere a raw `h1`/`h2`/`p`/`ul`/`code` slips in (utility pages, examples, generated HTML) | Already applied globally via `config/typography.css` (`@layer base`). Driven by theme tokens. No action needed — it just works as a floor. |
| **2. Typography primitives** | All hand-written app + block components (pages, blocks, layouts) | `import { Heading, H1, H2, Text, Lead, Muted, Small } from '@/components/ui/typography';` — variants live in one file. **Required** by ESLint in `app/` and `components/`. |
| **3. `prose` class** | MDX-rendered long-form content (blog posts, terms, etc.) | Wrap the MDX render container in `className="prose prose-neutral dark:prose-invert"`. Authors write plain markdown; output is consistent. |

**Forms** use shadcn primitives in `components/ui/` (`input`, `label`, `textarea`, `select`, `checkbox`, `radio-group`, `switch`). They are owned code — edit them directly to change focus rings, error states, sizes. Don't introduce a second form library.

---

## Layout & responsiveness (mobile-first, consistent)

Every page must be composed of layout primitives from `@/components/ui/layout`. Inventing local `mx-auto max-w-* px-*` combinations is how consistency rots.

| Primitive | Purpose | Key props |
|---|---|---|
| `<Section>` | Vertical rhythm wrapper (a "row" of the page) | `spacing`: `sm` / `md` / `lg` (default) / `xl` / `none`; `as` |
| `<Container>` | Centered max-width with responsive horizontal padding | `size`: `sm` / `md` / `lg` (default) / `xl` / `full`; `as` |
| `<Stack>` | Vertical flex with consistent gap | `gap`: `xs` / `sm` / `md` (default) / `lg` / `xl` / `2xl`; `align`; `as` |
| `<Cluster>` | Horizontal flex-wrap with consistent gap | `gap`; `align`; `justify`; `as` |
| `<Grid>` | Responsive grid (1 → 2 → 3/4 cols at breakpoints) | `cols`: `1` / `2` / `3` (default) / `4`; `gap`; `as` |

**The canonical page shell:**
```tsx
<Section spacing="lg">
  <Container size="md">
    <Stack gap="lg">
      <H1>Title</H1>
      <Lead>Subtitle</Lead>
      <P>Body…</P>
    </Stack>
  </Container>
</Section>
```

### Responsive rules (mobile-first, always)

1. **Default styles target mobile** (~360px). Add `sm:` / `md:` / `lg:` / `xl:` for larger.
2. **Test at 360px width.** Every page must work there with no horizontal scroll, no overflowing text, no broken tap targets.
3. **Tap targets ≥ 44×44px on mobile.** Use `size="lg"` on buttons in primary CTAs; pad icon-only buttons with `size-11` if used as touch targets.
4. **Nav** — on mobile, hide the desktop nav with `hidden md:flex` and show a menu button + drawer (TODO: add when the first fork needs it; not in default scaffold).
5. **Images** — always `next/image`; set explicit `width`/`height`; use `sizes` for responsive serving; aspect ratio via `aspect-*` utilities to prevent CLS.
6. **Heading scale is already responsive** in the `display` variant (`text-5xl sm:text-6xl`). Don't override per-page; if a fork needs bigger heroes, edit the variant once in `typography.tsx`.

### Tailwind breakpoints (Tailwind v4 defaults — use these names, not pixel values)

| Prefix | Min width | When |
|---|---|---|
| (none) | 0px | mobile baseline |
| `sm:` | 640px | large phones / small tablets |
| `md:` | 768px | tablets |
| `lg:` | 1024px | small laptops |
| `xl:` | 1280px | desktops |
| `2xl:` | 1536px | large desktops |

Don't introduce custom breakpoints unless absolutely necessary. The five defaults cover every realistic device.

### Spacing scale discipline

- Use Tailwind's standard spacing scale (`gap-2`, `gap-4`, `gap-6`, `gap-8`, `gap-12`…). **No arbitrary values** (`gap-[17px]`).
- Use the `gap`/`spacing` variants on layout primitives rather than raw classes when possible — they encode the brand's rhythm in one place.
- Vertical rhythm between sections is owned by `<Section spacing>`. Never write `py-20` ad-hoc.

**Why this matters:** the goal is that any developer (or AI agent) producing a page in this template arrives at the same visual result without inventing local font sizes. The primitives are the only place font-size/weight/tracking decisions live — change them once, every page updates.

**Examples — do this:**
```tsx
import { H1, Lead, P } from '@/components/ui/typography';

<H1>About us</H1>
<Lead>We help companies ship faster.</Lead>
<P>Our team has been doing this for a decade.</P>
```

**Don't do this:**
```tsx
<h1 className="text-4xl font-semibold tracking-tight">About us</h1>
<p className="text-lg text-muted-foreground">We help companies ship faster.</p>
```

---

## Where things go

| Path | Purpose |
|---|---|
| `app/` | Routes, layouts, error boundaries. Each segment owns its `page.tsx`, `loading.tsx`, `error.tsx`. |
| `app/api/` | Route handlers — only created when a dynamic feature requires them. |
| `app/actions/` | Server Actions — created on demand. |
| `components/ui/` | shadcn primitives. Add more with `pnpm dlx shadcn@latest add <component>`. |
| `components/blocks/` | Composed page sections (Hero, Features, CTA, Pricing, Footer). Read from `content/` + `config/`. |
| `components/layouts/` | Page shells. |
| `components/seo/` | `JsonLd`, structured-data helpers. |
| `content/` | Markdown/MDX content — per-fork territory. |
| `config/` | `site.config.ts` and `theme.css` — the per-fork customization surface. |
| `lib/` | Facades, env, shared utilities. |

---

## When in doubt

- **Match the existing pattern.** If two files do something similar, pick the more recent and copy its conventions.
- **Adding a new dependency?** Ask: "does this meet the facade rule?" before installing. If yes, scaffold the facade first; never reach for the library directly from app code.
- **Per-fork vs template territory?** Per-fork goes in `config/`, `content/`, or `theme.css`. Period.
- **Want to add a comment?** Default to no comment. Add one only when the WHY is non-obvious (hidden constraint, subtle invariant, workaround).

---

## What NOT to do

- Don't introduce a UI library besides shadcn/ui. The whole point of shadcn is per-fork customization without fighting defaults.
- Don't add backwards-compatibility shims or "just in case" error handling at internal boundaries.
- Don't pre-build features the spec doesn't ask for.
- Don't hardcode environment-specific values (URLs, keys) in components — route through `lib/env.ts` or `site.config.ts`.
- Don't write comments that narrate WHAT the code does. Names already do that.
- Don't commit `.env.local` or any real secret. `.env.example` is the only env file in version control.

---

## Commit style

Match recent commits (`git log --oneline -20`). Short, present-tense, focused on the why. Don't include "🤖 generated" lines unless the user asks.

## Reading order for new developers

1. `README.md` — what this is + setup.
2. `CLAUDE.md` (this file) — recurring rules.
3. `ARCHITECTURE.md` — deep context, decisions log, facade structure.
4. `config/site.config.ts` — the template's per-fork customization surface.
