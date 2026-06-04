# Design System — KEYOB Web

Single source of truth for **colors, fonts, sizes, spacing, and section patterns**. Every new page and component must use the tokens and patterns documented here. The homepage is the reference — every other page (`/about`, `/stories`, `/stories/[slug]`, `/blog`, …) must read visually as part of the same site.

If you're tempted to invent a new value (font-size, hex, opacity, max-width), check this file first. If nothing fits, add a new token here before using it in code.

---

## 1. Color tokens

All colors come from `config/theme.css`. Never hard-code hex values in components or scoped CSS — go through the token.

### Brand palette

| Token | Value | Use |
|---|---|---|
| `--keyob-deep` | `#07101E` | Default dark background (hero, footer, dark sections, CTAs) |
| `--keyob-navy` | `#123C8C` | Mid-dark surfaces (dark card backgrounds within a hero, avatar fills) |
| `--keyob-blue` | `#2563D9` | Primary accent on light backgrounds (links, italic ems, primary CTAs) |
| `--keyob-cyan` | `#19C6E8` | Primary accent on dark backgrounds (italic ems on dark, glows, dots) |
| `--keyob-frost` | `#F5F8FA` | Default light surface |
| `--keyob-steel` | `#D8DEE6` | Borders on light surfaces |
| `--keyob-graphite` | `#4B5563` | Body text on light |

### Semantic — light context

| Token | Value | Use |
|---|---|---|
| `--ink` | `#07101E` | Headings, primary text |
| `--ink-dim` | `#4B5563` | **Body text** (default for paragraphs) |
| `--ink-mute` | `#8B95A3` | **Avoid for reading text** — borders / disabled / decorative labels only |
| `--bg` | `#F5F8FA` | Page default |
| `--bg-2` | `#FFFFFF` | Pure-white panels (alternating sections) |
| `--bg-soft` | `#EEF2F7` | Tinted panels (alternating sections) |
| `--line` | `rgba(7,16,30,.08)` | Hairlines on light |
| `--line-2` | `rgba(7,16,30,.16)` | Stronger borders on light |

### Semantic — dark context

| Token | Value | Use |
|---|---|---|
| `--ink-on-dark` | `#F5F8FA` (frost) | Headings, primary text on dark |
| `--ink-dim-on-dark` | `rgba(245,248,250,.72)` | **Body text on dark** |
| `--ink-mute-on-dark` | `rgba(245,248,250,.45)` | Borders, very subtle labels — **not for body** |
| `--line-on-dark` | `rgba(245,248,250,.10)` | Hairlines on dark |

### Accent rule

- Italic `<em>` inside headings:
  - Light section → `var(--keyob-blue)`
  - Dark section → `var(--keyob-cyan)`

---

## 2. Fonts

Two font families. Pick by tone, never aesthetic.

| Family | Token | Used for |
|---|---|---|
| **Sans** (Inter) | `var(--keyob-sans)` | All headings (H1–H6), body, UI, labels, buttons |
| **Serif** (Instrument Serif) | `var(--keyob-serif)` | Italic `<em>` accents inside headings · pullquotes · blockquotes · stat values (italic) · `prose` MDX rendering |

**Rule:** headings are sans + light, with optional serif italic em accent. Never set a whole heading in serif outside of an MDX article. Body text is always sans.

---

## 3. Type scale

These are the **canonical sizes used across the site**. Match a section to one of these slots; don't invent new clamps.

### Headings

| Slot | When | Size | Weight | LH | Tracking |
|---|---|---|---|---|---|
| Hero H1 | `<HeroSection>`, `.story-shero` | `clamp(48px, 7vw, 96px)` (homepage hero) or `clamp(36px, 5.6vw, 76px)` (story hero) | 300 | .95–1.02 | -0.035em |
| Section H2 | every section heading | `clamp(36px, 4.5vw, 64px)` *(short variant `clamp(32px, 4.6vw, 60px)` for dense sections like `.method`)* | 300 | 1.05 | -0.03em |
| Card H3 | card titles | `clamp(22px, 2.4vw, 30px)` (small) or `clamp(28px, 3.4vw, 42px)` (large) | 400–500 | 1.1–1.2 | -0.01em |
| Card H4 | phase / step / outcome card | 18–22px | 400–500 | 1.2 | -0.005em |
| Eyebrow H5 / kicker | section label / kicker | 11–12px | 600 | 1.4 | 0.12–0.22em UPPERCASE |

### Body

| Slot | Size | Color | LH |
|---|---|---|---|
| Lead paragraph (hero) | 18–19px | `--ink-dim` (light) / `rgba(245,248,250,.78)` (dark) | 1.6 |
| Article body | 17–18px | `--ink-dim` (or `--ink-dim-on-dark`) | 1.65–1.75 |
| Card body | 15–16px | `--ink-dim` | 1.55–1.65 |
| Small meta / caption | 13–14px | `--ink-dim` | 1.5 |
| **Never go below 14px for reading content.** Eyebrows can go down to 11px because tracking + caps preserve legibility. | | | |

### Em accents inside headings

```css
.section h2 em {
  font-family: var(--keyob-serif);
  font-style: italic;
  color: var(--keyob-blue);   /* on light */
  /* color: var(--keyob-cyan); */ /* on dark */
  font-weight: 400;
}
```

---

## 4. Layout

- **Container:** `.wrap` (`width: min(1320px, 100% - 48px)`) for all page-wide content.
- **Narrow column** (article / FAQ / detail body): `.story-narrow` (760px) or `.story-narrow--wide` (1080px).
- **Section padding:** vertical rhythm sits on 90 / 100 / 110 / 120 / 130px. Use the layout primitives' `spacing` prop when authoring new sections; reach for scoped CSS only when no primitive fits.
- **Card radii:** 14–16px (small cards), 18–20px (large cards / quote / banner).

---

## 5. Section background pattern

Every full-width section gets one of these treatments. **Never separate sections with a hairline border** — alternate backgrounds instead.

| Treatment | Token | Pattern |
|---|---|---|
| Light panel | `var(--bg-2)` (#fff) | Default content sections |
| Tinted panel | `var(--bg-soft)` (#EEF2F7) | Alternating section to create rhythm |
| Dark hero / CTA | `var(--keyob-deep)` | Page heroes, closing CTAs, footer |
| Dark editorial band | `var(--keyob-navy)` | Mid-page dark feature panel (e.g. outcomes cards) |
| Brand gradient | `var(--keyob-gradient)` | Marquee / accent strip only |

Rule of thumb on the homepage: white → tint → white → dark → white → tint → … The dark Method and gradient Marquee are the biggest visual breaks.

---

## 6. Component patterns

### Kicker / eyebrow

```html
<div class="kicker">The situation</div>
```
12px, UPPERCASE, tracking 0.22em, `--keyob-blue` (or `--keyob-cyan` on dark), with a 28×1px leading rule. Used to label every article block / section.

### Card

```html
<article class="cap-card">
  <span class="cap-num">01</span>
  <h3>Title</h3>
  <p>Body</p>
</article>
```

- Border: `1px solid var(--line)` (light) or `rgba(245,248,250,.14)` (dark)
- Radius: 14–18px
- Background: `--bg-2` light or `--keyob-navy` dark
- Hover: `translateY(-3 to -5px)` + soft shadow + border tint to `--keyob-blue`

### Button

- Primary on light: `background: var(--keyob-blue); color: #fff;`
- Primary on dark: `background: var(--keyob-cyan); color: var(--keyob-deep);`
- Padding: 17px 30px (default), 14px 24px (compact)
- Radius: 48px (pill)

### FAQ accordion

Reuse `.q` / `.q.is-open` pattern from homepage (see `IndustriesSection`). On story detail, the equivalent `.story-faq-item` follows the same visual rules.

### Blockquote / pullquote

```css
font-family: var(--keyob-serif);
font-style: italic;
font-size: clamp(22px, 3.4vw, 34px);
line-height: 1.3;
color: var(--ink);
border-left: 2-3px solid var(--keyob-cyan); /* optional */
```

---

## 7. Per-page checklist

Before shipping a new page or feature page (`/about`, `/stories`, `/blog`, etc.):

1. **Section backgrounds alternate** — no two same-bg sections back-to-back. No `border-top: 1px solid var(--line)` separators.
2. **Headings follow the scale** (§3). H2 = sans light clamp, with serif italic em (blue on light, cyan on dark).
3. **Body text ≥ 15px on cards / 17px in articles** with `--ink-dim` (light) or `--ink-dim-on-dark` (dark). Never `--ink-mute` for body content.
4. **Eyebrows use the kicker pattern** (12px tracked uppercase, blue/cyan).
5. **CTAs use the brand button style** (§6).
6. **No hex values in scoped CSS** — go through tokens.
7. **Test at 360px** mobile width.

When in doubt, **look at the homepage section that matches your context** and mirror it.

---

## 8. Per-page locations

| Page | Route | Primary blocks |
|---|---|---|
| Home | `/` | `HeroSection` · `ValueSection` · `RealitySection` · `WhatWeDoSection` · `MethodologySection` · `CapabilitiesSection` · `OutcomesSection` · `InsightsSection` · `FounderQuote` · `ClosingCTA` · `MarqueeBand` · `ContactSection` |
| About | `/about` | About-hero · about-stats · about-story · about-values · about-diff · about-locations · about-cta |
| Stories listing | `/stories` | `StoriesHero` · `StoriesGrid` · `StoriesCTA` |
| Story detail | `/stories/[slug]` | `StoryDetail` (shero + facts + article + outcomes + human + method recap + faq + related + cta) |
| Blog index / post | `/blog`, `/blog/[slug]` | Header · prose container (MDX) · Footer |

Each page lives in `app/<route>/page.tsx` and composes blocks from `components/blocks/`. CSS for each block is in `app/globals.css`, organized by section comment headers.
