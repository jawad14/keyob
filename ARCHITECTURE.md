# Architecture

This document describes the architecture of the `website-template` repository: a **reusable, static-first website template** intended to be forked per client.

---

## 1. Goals & Non-Goals

### Goals
- One template → many sites. Each fork rebrands by editing **config + content + theme tokens**, not by editing components.
- **Static-first** for SEO and cheap hosting, with the ability to opt into dynamic features (forms, API proxies, ISR, auth) per route without migration.
- **Free tooling only.** No paid dependencies.
- Swap-friendly cross-cutting libs (logging, analytics, email, CMS, search) via the **facade pattern**.
- Battle-tested, long-supported dependencies — no single-maintainer or VC-fragile choices for load-bearing layers.

### Non-Goals
- Not a CMS-first or app-first framework. If a fork is primarily an app (logged-in dashboards, real-time, etc.), this template is the wrong starting point.
- Not a no-code/page-builder system. Editing content is a code/markdown task.

---

## 2. Tech Stack (Locked Decisions)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 16 (App Router, Turbopack)** + TypeScript | Static-first by default, opt-in dynamic per-route, huge ecosystem |
| Styling | **Tailwind CSS v4** + CSS variables for tokens | Per-fork rebrand = edit one CSS file; no runtime CSS-in-JS overhead |
| UI primitives | **shadcn/ui** (copy-paste) on **Radix** | You own the code; rebrand without fighting a theme system; Radix is WorkOS-backed |
| Marketing blocks | Hand-built in `components/blocks/` + free copy-paste libraries (Aceternity UI, Magic UI, shadcn blocks) | Free; matches shadcn philosophy |
| Forms | **React Hook Form** + **Zod** + Server Actions | Industry standard; shadcn Form integrates natively |
| Icons | **lucide-react** | shadcn default, MIT, exhaustive |
| Fonts | **next/font** (self-hosted) | No CLS, no external font requests, better privacy |
| Theming | **next-themes** (infrastructure only — no toggle UI shipped) | De-facto standard for Next.js dark mode; ~9k+ stars; trivial to enable per fork |
| Animation | **Framer Motion** (`motion`) | Most battle-tested React animation lib; used by Vercel, Linear, Notion |
| Content | **Markdown / MDX** in `content/` (CMS optional per fork) | Version-controlled, fast, no service dependency |
| Content validation | **Zod** schemas at build time | Catches missing alt text, broken refs before deploy |
| Logging | **Pino** (server) + **console** (browser), behind a facade | Free, MIT, structured |
| OG images | **Next.js `opengraph-image.tsx`** (dynamic per route) | Built-in, no service, SEO-impactful |
| Pre-commit | **Husky** + **lint-staged** + **Prettier** + **ESLint** | Sensible defaults; auto-format and lint staged files |
| Hosting | **Vercel / Netlify / Cloudflare Pages** | Supports both static + dynamic routes; static-only hosts ruled out |

---

## 3. Folder Structure

```
website-template/
├── app/
│   ├── (marketing)/              # Static, SEO-optimized public pages
│   │   ├── page.tsx              # Home
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   └── contact/page.tsx
│   ├── blog/                     # Scaffolded but unlinked from default nav
│   │   ├── page.tsx              # Index (ISR)
│   │   └── [slug]/page.tsx       # Posts (ISR or static)
│   ├── api/                      # Route handlers (added when needed)
│   ├── actions/                  # Server Actions (added when needed)
│   ├── layout.tsx
│   ├── not-found.tsx             # 404
│   ├── error.tsx                 # Runtime error boundary
│   ├── global-error.tsx          # Root-level error boundary
│   ├── loading.tsx               # Default loading UI
│   ├── sitemap.ts                # Auto-generated sitemap
│   ├── robots.ts                 # Auto-generated robots.txt
│   └── opengraph-image.tsx       # OG image generation
├── components/
│   ├── ui/                       # shadcn primitives (Button, Input, Form, ...)
│   ├── blocks/                   # Composed sections (Hero, Features, CTA, Pricing, Footer)
│   ├── layouts/                  # Page shells (MarketingLayout, BlogLayout)
│   └── seo/                      # JsonLd, MetaTags helpers
├── content/                      # MDX/markdown content (per-fork)
│   ├── pages/
│   ├── blog/
│   └── services/
├── config/
│   ├── site.config.ts            # Brand, nav, social, SEO defaults, provider choices
│   └── theme.css                 # CSS variables (per-fork rebrand surface)
├── lib/
│   ├── logger/                   # Facade: console / pino / (Sentry, Axiom optional)
│   ├── analytics/                # Facade: Plausible / Umami / PostHog / GA4
│   ├── email/                    # Facade: Resend / SMTP / Web3Forms / Formspree
│   ├── cms/                      # Facade: local MDX / Sanity / Payload
│   ├── errors/                   # Facade: console / Sentry
│   ├── search/                   # Facade: Pagefind (static) / Algolia / Meilisearch
│   ├── env.ts                    # Typed env vars (Zod)
│   └── utils/                    # Shared utilities (cn, formatDate, etc.)
├── public/                       # Static assets (favicons, OG image fallbacks)
├── styles/
│   └── globals.css               # Tailwind layers + imports theme.css
├── proxy.ts                 # Security headers, redirects, future auth gates
├── .env.example                  # Documents every env var a fork needs
├── ARCHITECTURE.md               # This file
├── CLAUDE.md                     # Conventions for AI-assisted edits (optional)
└── README.md
```

---

## 4. Rendering Strategy

**Default: static.** Every page is prerendered to HTML at build time unless explicitly opted out.

| Tier | When to use | How |
|---|---|---|
| **SSG (default)** | Marketing pages, about, services, pricing | Default behavior — no flag needed |
| **ISR** | Blog, CMS-driven content, product lists | `export const revalidate = 3600` |
| **Dynamic** | Authenticated pages, personalized content, real-time | `export const dynamic = 'force-dynamic'` |

**Server Components are the default.** Only mark `'use client'` when interactivity is required (forms with live validation, modals, animations on user input).

---

## 5. Customization Model — The Three Knobs

Each fork should be able to rebrand by touching only three surfaces:

1. **`config/site.config.ts`** — brand name, nav structure, social links, SEO defaults, provider choices (which logger, analytics, email provider this fork uses), feature toggles.
2. **`content/`** — all copy, blog posts, services, page-level MDX.
3. **`config/theme.css`** — CSS variables for colors, fonts, radii, spacing scales.

**Rule:** No hardcoded brand strings, colors, or copy in `components/`. If a fork needs to change a component's text or color, the component is doing too much.

---

## 6. Facade Pattern for Cross-Cutting Libraries

### The rule

Wrap a library behind a facade if **both** are true:
1. It's used in many places across the app.
2. There are real alternatives a future fork might want to swap to.

Do **not** facade for hypothetical needs. Wrap when ≥2 implementations exist or a swap is plausible in the near term.

### Concerns that get facades

| Concern | Default provider | Alternatives a fork can swap to |
|---|---|---|
| **Logger** | console (dev), Pino (prod) | Sentry, Axiom, Better Stack |
| **Analytics** | none / Plausible | Umami (self-host), PostHog, GA4 |
| **Email / form submission** | Resend (free tier) | SMTP, Web3Forms, Formspree, Postmark |
| **CMS / content source** | local MDX | Sanity, Payload (self-host), Contentful |
| **Error tracking** | console | Sentry (free tier), Highlight |
| **Search** | Pagefind (static, free, zero service) | Algolia, Meilisearch |
| **Newsletter** *(when added)* | none | Buttondown, Resend Audiences, ConvertKit |

### Concerns that do NOT get facades (keep direct imports)

- **Theme toggle** — `next-themes` is fine direct; no realistic alternative to swap.
- **Icons** — `lucide-react` direct; per-icon imports already tree-shake.
- **Animation** — `framer-motion` (or `motion`) direct unless a fork uses multiple animation libs.
- **Image** — `next/image` is framework-locked; no facade possible/useful.
- **Fonts** — `next/font` same reason.

### Facade shape (standard structure)

```
lib/<concern>/
├── types.ts                # interface — the facade contract
├── providers/
│   ├── <provider-a>.ts
│   └── <provider-b>.ts
└── index.ts                # factory: picks provider from config/env
```

App code imports **only** `lib/<concern>`. Never a specific provider.

Example — logger facade interface:
```ts
export interface Logger {
  debug(msg: string, ctx?: Record<string, unknown>): void;
  info(msg: string, ctx?: Record<string, unknown>): void;
  warn(msg: string, ctx?: Record<string, unknown>): void;
  error(msg: string, err?: unknown, ctx?: Record<string, unknown>): void;
  fatal(msg: string, err?: unknown, ctx?: Record<string, unknown>): void;
  child(bindings: Record<string, unknown>): Logger;
}
```

**Note on Next.js environments:** the server runtime, Edge runtime, and browser have different capabilities. The logger facade ships separate `logger.server.ts` and `logger.client.ts` files behind the same interface.

---

## 7. SEO

The template treats SEO as a first-class architectural concern, not a finishing touch.

- **Prerendered HTML** for all marketing pages (no client-rendered content for SEO-critical surfaces).
- **Metadata API** (`generateMetadata`) per route — title, description, OG, Twitter cards driven from `site.config.ts` + content frontmatter.
- **`app/sitemap.ts`** — auto-generated from routes + content.
- **`app/robots.ts`** — auto-generated, references sitemap.
- **JSON-LD structured data** via `components/seo/JsonLd.tsx`, fed by content frontmatter (Organization, Article, BreadcrumbList, FAQPage, Product as applicable).
- **Canonical URLs** derived from `siteConfig.url`.
- **`opengraph-image.tsx`** — dynamic OG image generation per route (Next.js built-in).
- **Per-page `<h1>` discipline** — exactly one, content-driven.
- **Image alt text** — required by content schema (Zod-validated at build).

---

## 8. Forms & Validation

- **React Hook Form + Zod**, integrated via shadcn's `Form` component.
- **Server Actions** are the default submission path. Each form's action lives next to the component or in `app/actions/`.
- The Server Action delegates to `lib/email` (the facade), so the same form works whether the fork uses Resend, SMTP, or a third-party endpoint like Formspree.
- All form schemas live next to the form component as `schema.ts`.

---

## 9. Environment & Secrets

- **`.env.example`** is checked in and documents every variable a fork might set.
- Real `.env` / `.env.local` are gitignored.
- **`lib/env.ts`** validates environment variables with Zod at startup using `@t3-oss/env-nextjs`. Missing/malformed env vars fail loudly at build, not at request time.
- Public vs server vars are explicitly separated (`NEXT_PUBLIC_*` for client-exposed).

---

## 10. Error Handling, Loading, 404

- `app/error.tsx` — segment-level error boundary.
- `app/global-error.tsx` — root error boundary (renders its own `<html>`).
- `app/not-found.tsx` — 404 page, branded.
- `app/loading.tsx` — default suspense fallback.
- Server errors are routed through `lib/logger` (`logger.error(...)`). If a fork enables Sentry, the error provider in `lib/errors` captures and forwards.

---

## 11. Security

- **`proxy.ts`** sets standard security headers: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`, and a baseline **Content-Security-Policy**.
- CSP is strict by default; per-fork additions (e.g., analytics domain) are added in `site.config.ts` and merged in middleware.
- Form endpoints validate with Zod **on the server** (never trust client validation alone).
- No secrets in `NEXT_PUBLIC_*` vars.

---

## 12. Performance Budget

Performance is a per-page contract, not aspirational.

- **Lighthouse / PageSpeed targets:** Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 100 for all marketing routes.
- **Core Web Vitals targets:** LCP < 2.0s, INP < 200ms, CLS < 0.1.
- **JS budget:** marketing pages ship < 80KB of first-party JS (gzipped). Track via `@next/bundle-analyzer`.
- **Images:** always `next/image`, AVIF/WebP automatic, explicit `width`/`height` to prevent CLS.
- **Fonts:** `next/font`, self-hosted, `display: swap`.

---

## 13. Accessibility

- shadcn/Radix primitives handle the hard parts (focus management, ARIA, keyboard nav). Don't bypass them.
- **All images** require `alt` (enforced by content schema).
- **Color contrast** must meet WCAG AA — checked via Lighthouse in CI.
- **Keyboard navigation** is tested on every interactive block before shipping.

---

## 14. Testing

- **Vitest** — unit tests for `lib/*` (facades, utils, validation schemas).
- **Playwright** — e2e for critical flows: homepage renders, navigation works, contact form submits.
- **No snapshot tests for UI** — they rot and don't catch real bugs in marketing sites.
- Each facade ships with a test that swaps providers to verify the interface contract.

---

## 15. CI/CD

GitHub Actions on every PR:
1. Install + cache deps.
2. Type-check (`tsc --noEmit`).
3. Lint (`eslint`).
4. Unit tests (`vitest run`).
5. Build (`next build`).
6. Optionally: Lighthouse CI for performance regressions, Playwright e2e on preview deployment.

Deploys are platform-native (Vercel/Netlify/Cloudflare Pages) — no custom deploy step.

---

## 16. Template Lifecycle (How Forks Work)

Two viable models — **pick one per fork at fork time:**

### A. Live fork (pulls template updates)
- Fork keeps `template` as a git remote.
- Client-specific changes are confined to: `config/`, `content/`, `public/`, and additive files outside template territory.
- Periodically: `git pull template main` and resolve conflicts (rare if the rule above is respected).
- **Best for:** templates expected to receive bug fixes and improvements that all forks should benefit from.

### B. Hard fork
- One-time copy. No upstream relationship.
- Free to edit anything; no upgrade pressure.
- **Best for:** clients with very divergent needs or long-running standalone projects.

Whatever the model, **never edit `components/blocks/` or `components/ui/` in a way that diverges per-fork** unless that fork has chosen the hard-fork model. Block-level changes should land in the template, not in a fork.

---

## 17. Decisions Log

Decisions made after the initial architecture pass (2026-05-11). Recorded here so future readers know what was considered and what was chosen.

| # | Question | Decision | Notes |
|---|---|---|---|
| 1 | i18n / multi-language | **No** | Single-language template. Not architecting `app/[locale]/...` routing. If a future fork needs i18n, retrofitting will be a real migration — accept that cost. |
| 2 | Dark mode | **Infrastructure yes, UI no** | Install `next-themes`, wire `ThemeProvider` in root layout, define dark CSS variables in `config/theme.css`. **Do not ship a toggle component or expose dark mode in nav.** A fork enables it by adding the toggle. |
| 3 | Cookie consent / GDPR | **No** | Not included. Add per-fork if the client targets EU/regulated markets. |
| 4 | Blog | **Scaffold, but hidden** | Build `app/blog/`, `content/blog/`, sample MDX post, ISR config. **Do not link from main nav** in default `site.config.ts`. A fork unhides it by adding the nav entry. |
| 5 | Animation library | **Framer Motion (`motion`)** | Most battle-tested React animation library — used by Vercel, Linear, Notion. Single maintainer (Matt Perry) but corporate backing via Framer; massive community. |
| 6 | OG image strategy | **Dynamic per route** via `opengraph-image.tsx` | Next.js built-in; no extra service; SEO-impactful. |
| 7 | Content frontmatter validation | **Yes, Zod-validated at build** | Build fails on invalid content (missing alt text, broken refs, etc.). |
| 8 | `CLAUDE.md` project conventions file | **Yes** | Add a project-level conventions file so AI-assisted edits stay aligned with this doc. |
| 9 | Template version tags | **Defer** | Add once a second fork exists. Not worth the overhead for one-template-one-consumer. |
| 10 | Pre-commit hooks | **Husky + lint-staged + Prettier + ESLint** | Sensible defaults: format + lint staged files on commit. Type-check runs in CI, not pre-commit (too slow). |

### Implementation notes for §17

- **Dark mode (infra only):** `app/layout.tsx` wraps children in `<ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>`. `config/theme.css` defines both `:root` and `.dark` variable sets. No toggle UI in `components/blocks/` by default.
- **Blog (hidden):** scaffolded routes and content live in the repo. `site.config.ts` exposes a `nav` array — the default config simply omits `/blog`. Listing exists at `/blog` (reachable by URL) but unlinked from nav.
- **Pre-commit defaults:** `lint-staged` config formats `*.{ts,tsx,md,mdx,json,css}` with Prettier and runs ESLint on `*.{ts,tsx}`. No tests on commit.

---

## 18. Typography & Form Primitives — The Three Lanes

Native HTML elements (`h1`–`h6`, `p`, `ul`, `code`, `blockquote`, etc.) and form elements (`input`, `textarea`, `select`, etc.) must look consistent across every page and fork. The system uses **three coordinated lanes**, each for a different content origin.

### Lane 1 — Base-layer defaults (the floor)

**File:** `config/typography.css` (imported by `app/globals.css`).

Tailwind `@layer base` styles for raw `h1`–`h6`, `p`, `ul`, `ol`, `blockquote`, `code`, `pre`, `hr`. Driven entirely by theme tokens (`--foreground`, `--muted-foreground`, `--border`, `--radius`). Any raw HTML — a stub page, an example, a third-party widget rendering markup — picks up consistent defaults without any developer effort.

**Why a layered base instead of just primitives:** safety net. Code that bypasses primitives still looks acceptable.

### Lane 2 — Typography primitives (the contract)

**File:** `components/ui/typography.tsx`.

Exports both a variant-driven API and convenience components:

```tsx
import { Heading, H1, H2, H3, H4, H5, H6, Text, P, Lead, Muted, Small, Caption } from '@/components/ui/typography';

// Convenience (90% of cases):
<H1>Page title</H1>
<H2>Section</H2>
<Lead>Hero subtitle.</Lead>
<Muted>Caption.</Muted>

// Full control when semantic level diverges from visual size:
<Heading level={1} variant="display">Hero</Heading>   // h1 tag, display-size styling
<Heading level={2} variant="h3">Smaller h2</Heading>
```

**Variants live in one file.** Changing the brand's heading style = edit `headingVariants` once; every page updates. This is the only place font-size/weight/tracking decisions for headings and body text are allowed to live.

**ESLint enforces this** via `no-restricted-syntax`: writing `<h1>`–`<h6>` or `<p>` directly in `app/**/*.tsx` or `components/**/*.tsx` errors with a clear message pointing to the primitives. Exceptions: `app/global-error.tsx` (renders its own `<html>`), `components/ui/typography.tsx` (the primitives themselves).

### Lane 3 — `prose` for long-form MDX content

**Plugin:** `@tailwindcss/typography` (loaded via `@plugin "@tailwindcss/typography"` in `app/globals.css`).

For MDX-rendered content (blog posts, terms pages, long-form marketing), wrap the rendered container in `prose prose-neutral dark:prose-invert max-w-none`. Authors write plain markdown; output styles automatically.

For tighter brand control, an MDX component map can rewrite `h1`/`h2`/`p` to the Lane 2 primitives — useful when you want MDX headings to behave identically to in-app headings.

### Form elements — same idea, shadcn already solved it

Form primitives live in `components/ui/`:
- `input.tsx`
- `label.tsx`
- `textarea.tsx`
- `select.tsx`
- `checkbox.tsx`
- `radio-group.tsx`
- `switch.tsx`

These are **owned code** (the shadcn copy-paste model). Edit them directly to change focus rings, error states (driven by `aria-invalid`), sizes, or disabled styles. Per the facade rule, they are *not* behind an abstraction — they are the design tokens themselves, not a swappable library.

**Never use raw `<input>`/`<textarea>`/`<select>` in feature code.** Validation is React Hook Form + Zod (`Form` integration is a standard small wrapper, added when the first form ships).

### Why the system exists

Without it, every developer (and AI) producing a page invents local Tailwind classes for headings and paragraphs. Result: every section in the app uses a slightly different scale, weight, or color. Rebranding becomes a global find/replace nightmare.

With the system:
- One file (`typography.tsx`) controls how every heading and body element looks.
- One file (`theme.css`) controls every color.
- One folder (`components/ui/`) controls every form input.
- Forks rebrand by editing those files. Nothing else.

---

## 19. Layout Primitives & Responsive System

Typography handles text. **Layout primitives handle everything around the text** — section spacing, container widths, gaps between children, responsive grids. They are the second half of the design system: without them, every page reinvents its own `mx-auto max-w-3xl px-6 py-16 space-y-8` combination and consistency rots.

### The primitives (`components/ui/layout.tsx`)

| Primitive | Role | Key variants |
|---|---|---|
| `<Section>` | Page row — controls vertical rhythm | `spacing`: `sm` (py-10/12), `md` (py-12/16), `lg` (py-16/24, default), `xl` (py-24/32), `none` |
| `<Container>` | Centered, max-width, responsive horizontal padding | `size`: `sm` (max-w-2xl), `md` (max-w-3xl), `lg` (max-w-5xl, default), `xl` (max-w-7xl), `full` |
| `<Stack>` | Vertical flex with consistent gap | `gap`: `xs` / `sm` / `md` / `lg` / `xl` / `2xl`; `align` |
| `<Cluster>` | Horizontal flex-wrap with consistent gap | `gap`; `align`; `justify` |
| `<Grid>` | Responsive grid (auto-collapses on small screens) | `cols`: `1` / `2` / `3` / `4`; `gap` |

All accept `as` for polymorphism (`<Container as="main">`, `<Cluster as="nav">`, etc.) so semantic HTML is preserved.

### The canonical page shape

```tsx
<Section spacing="lg">
  <Container size="md">
    <Stack gap="lg">
      <H1>Title</H1>
      <Lead>Subtitle.</Lead>
      <P>Body content…</P>
    </Stack>
  </Container>
</Section>
```

Every page in the template — home, blog, blog post, 404, error — composes from this shape. Change the page rhythm of the whole site by adjusting `<Section spacing>` defaults; change every container max-width by editing one CVA config.

### Responsive philosophy

- **Mobile-first.** Default classes target ~360px width. Add `sm:`/`md:`/`lg:`/`xl:` prefixes for larger.
- **Test at 360px.** Every page must work — no horizontal scroll, no overflowing text, no broken tap targets.
- **Five breakpoints only** (Tailwind v4 defaults): `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536. Don't introduce custom ones.
- **Container padding scales:** `px-4 sm:px-6 lg:px-8` — already baked into `<Container>`.
- **Heading scale is responsive** in the `display` variant (`text-5xl sm:text-6xl`); other variants are size-stable on purpose so body content reads consistently across devices.
- **Tap targets ≥ 44×44px** on touch surfaces. Use `<Button size="lg">` for primary CTAs.
- **Nav collapses** on mobile via `hidden md:flex`. A mobile menu drawer is a fork-level addition (not in default scaffold).

### Spacing discipline

- Tailwind's standard scale only — `2`, `4`, `6`, `8`, `12`, `16`, `24`. **No arbitrary values** (`p-[17px]`).
- Prefer the layout primitives' `gap` / `spacing` variants over raw `py-*` / `space-y-*`. The variants encode the brand's rhythm in one place; a fork can rebrand the rhythm by editing one CVA config.

### Why this matters for forks + AI assistance

When an AI agent (Claude, Cursor) or a new developer writes a page, the path of least resistance must produce consistent output. The layout primitives provide that path:
- Importing `Section`/`Container`/`Stack` is shorter than typing `<section className="py-16 sm:py-24">` + `<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">` + `<div className="space-y-6">`.
- The variant names (`spacing="lg"`, `size="md"`, `gap="lg"`) are self-documenting and discoverable via TS autocomplete.
- The result is automatically responsive, automatically aligned with the rest of the site, and automatically updates when the brand changes its rhythm.

---

## 20. Conventions Summary

- **Default to Server Components.** `'use client'` only when proven necessary.
- **Three knobs only:** `config/site.config.ts`, `content/`, `config/theme.css` (+ `config/typography.css` for typographic scale per fork). Anything else is template territory.
- **Facade the cross-cutting libs.** Direct-import the rest.
- **No hardcoded brand strings, colors, or copy in components.**
- **Use the typography primitives.** No raw `<h1>`–`<h6>`/`<p>` in app/component code. ESLint enforces.
- **Use the form primitives.** No raw `<input>`/`<textarea>`/`<select>` in feature code.
- **Use the layout primitives.** No ad-hoc `mx-auto max-w-* px-*` / `py-* space-y-*` in feature code.
- **Mobile-first responsive.** Test every page at 360px width. Tap targets ≥ 44px.
- **Tailwind standard spacing scale only.** No arbitrary values.
- **Server-side validation for every form.** Client validation is UX, not security.
- **Pre-rendered HTML for SEO surfaces.** No client-rendered marketing content.
- **`next/image` and `next/font` always.** Never raw `<img>` or external font links.
- **Typed env vars via Zod.** Build fails on missing/malformed env.
