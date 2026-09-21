/* eslint-disable no-restricted-syntax --
 * Bespoke client-story page modeled after formulyn.html. The section
 * structure is faithful to the source HTML; the visual language follows the
 * other KEYOB story pages and is owned by this file's CSS module rather than
 * the shared typography primitives. */

import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { siteConfig, defaultOgImages, defaultTwitterImages } from '@/config/site.config';
import { RevealOnScroll } from '@/components/util/RevealOnScroll';
import styles from './page.module.css';

const SLUG = 'formulyn';
const TITLE = 'Formulyn — branding, website and content for a formulation consultancy';
const DESCRIPTION =
  'How KEYOB built the brand, website and content for Formulyn, a Brisbane boutique nutraceutical and cosmetic formulation consultancy now presenting itself to clients across Australia, the EU, the UK and the Gulf.';
const SHORT_DESCRIPTION =
  'A scientific consultancy with real depth, given a brand and a website that show it.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Formulyn',
    'brand identity',
    'web design',
    'website development',
    'content writing',
    'nutraceutical formulation',
    'cosmetic formulation',
    'Brisbane consultancy branding',
    'KEYOB client story',
  ],
  alternates: { canonical: `${siteConfig.url}/stories/${SLUG}` },
  openGraph: {
    type: 'article',
    title: `${TITLE} | KEYOB`,
    description: SHORT_DESCRIPTION,
    url: `${siteConfig.url}/stories/${SLUG}`,
    images: defaultOgImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | KEYOB`,
    description: SHORT_DESCRIPTION,
    images: defaultTwitterImages,
  },
};

export const viewport: Viewport = {
  themeColor: '#0d1b2a',
};

// --- content -----------------------------------------------------------------

const SNAPSHOT: { lab: string; val: string; azure?: boolean; body: string }[] = [
  {
    lab: 'Client',
    val: 'Formulyn',
    body: 'Boutique nutraceutical and cosmetic formulation consultancy, Brisbane.',
  },
  {
    lab: 'Scope',
    val: 'Brand, website, content',
    body: 'Identity, web design and build, content writing, launch.',
  },
  {
    lab: 'Markets addressed',
    val: 'AU · EU · UK · Gulf',
    azure: true,
    body: 'Site speaks to TGA, ARTG, EU CPNP, UK SCPN and GCC pathways.',
  },
  {
    lab: 'Status',
    val: 'Live',
    azure: true,
    body: 'formulyn.com.au, taking briefs from founders worldwide.',
  },
];

const CHALLENGES: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'The audience is two audiences',
    body: 'A first-time founder with an idea and no technical vocabulary reads a page very differently from an established brand manager comparing consultancies. The site had to make sense to both without patronising either.',
  },
  {
    n: '02',
    title: 'Regulated language, tightly bounded',
    body: 'This is a field where words carry legal weight. Claims about therapeutic outcomes, compliance and market access have to be accurate and carefully framed. Marketing enthusiasm is a liability here, not an asset.',
  },
  {
    n: '03',
    title: 'Client work sits under NDA',
    body: 'The most persuasive proof, the actual projects, could not be named. The site had to convey depth of experience without identifying a single client.',
  },
  {
    n: '04',
    title: 'The buyer is often overseas',
    body: 'Enquiries arrive from founders in Europe, the UK and the Gulf who will likely never visit Brisbane. The website has to do the work an in-person meeting would otherwise do.',
  },
];

const PHASES: { k: string; title: string; body: string }[] = [
  {
    k: 'Stage 01',
    title: 'Understanding the practice',
    body: 'Sessions with the founder to learn how the consultancy actually works: what a client brings, what gets delivered, where the value sits, and which enquiries are a good fit. We were not collecting copy points. We were learning the business well enough to describe it accurately.',
  },
  {
    k: 'Stage 02',
    title: 'Positioning and naming the difference',
    body: 'Working out what to lead with. The consultancy operates without manufacturing conflicts, which is a genuine structural difference from much of the market, and the client keeps ownership of the reasoning behind their formula. Those became load-bearing ideas rather than footnotes.',
  },
  {
    k: 'Stage 03',
    title: 'Brand identity',
    body: 'Wordmark and badge, colour, type and a visual language built around laboratory materials rather than wellness stock imagery. Warm tones against dark slate, because the work is scientific but the products end up in people’s hands. Restraint throughout, since overdesign reads as compensation in a technical field.',
  },
  {
    k: 'Stage 04',
    title: 'Content and voice',
    body: 'Writing the site in the founder’s register. Plain sentences, the client’s real objections stated in their own words, and claims kept inside what the evidence and the regulators allow. Every service page answers the question a prospect is actually asking rather than describing a process for its own sake.',
  },
  {
    k: 'Stage 05',
    title: 'Design and build',
    body: 'A fast, responsive site structured around how enquiries arrive: what you do, how it works, who it is for, what it has produced, and how to begin. Case studies written to convey depth while keeping every client unnamed.',
  },
  {
    k: 'Stage 06',
    title: 'Launch and findability',
    body: 'Technical setup, structured data, social preview cards, analytics and the search foundations that let the site be found by someone typing a formulation question into Google at eleven at night in another time zone.',
  },
];

const OUTCOMES = [
  'A brand identity the practice owns and applies consistently across web, documents and social channels.',
  'A website that explains four service mandates, the phased methodology and the industries served, without a prospect needing to ask a single preliminary question.',
  'Five case studies demonstrating range across skincare, paediatric supplements, functional food, TGA listing and beverages, with confidentiality intact.',
  'Verified client reviews surfaced on the site, so credibility comes from clients rather than self description.',
  'Search and social foundations in place, with structured data and preview cards so every shared link presents properly.',
  'A clear first step for enquiries, which turns interest into a booked conversation instead of an unanswered contact form.',
];

const CAP_TAGS = [
  'Brand strategy',
  'Naming & positioning',
  'Visual identity',
  'Wordmark & badge',
  'Web design',
  'Website development',
  'Content writing',
  'Voice & messaging',
  'Information architecture',
  'Case study development',
  'SEO foundations',
  'Structured data',
  'Social preview & sharing',
  'Launch support',
];

const SITE_MAP_L1 = ['SERVICES', 'PROCESS', 'INDUSTRIES'];
const SITE_MAP_L2 = ['CASE STUDIES', 'JOURNAL', 'ABOUT'];

const BRAND_SURFACES: { label: string; y: number; accent?: boolean }[] = [
  { label: 'IDENTITY & WORDMARK', y: 52 },
  { label: 'WEBSITE', y: 96, accent: true },
  { label: 'VOICE & CONTENT', y: 140, accent: true },
  { label: 'SEARCH & SHARE', y: 184 },
];

const MONO = 'JetBrains Mono, ui-monospace, monospace';

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Formulyn: branding, website and content for a formulation consultancy',
  description: DESCRIPTION,
  author: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  about: { '@type': 'Organization', name: 'Formulyn', url: 'https://www.formulyn.com.au' },
  mainEntityOfPage: `${siteConfig.url}/stories/${SLUG}`,
  articleSection: 'Brand & Web',
  keywords: 'branding, web design, content, nutraceutical formulation, cosmetic formulation',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
    { '@type': 'ListItem', position: 2, name: 'Client Stories', item: `${siteConfig.url}/stories` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Formulyn',
      item: `${siteConfig.url}/stories/${SLUG}`,
    },
  ],
};

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export default function FormulynStoryPage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <RevealOnScroll rootSelector="main" />

      <main className={styles.page}>
        {/* 1. HERO */}
        <header data-reveal className={styles.hero}>
          <div className={styles.heroMesh} aria-hidden="true" />
          <div className={cx(styles.wrap, styles.heroGrid)}>
            <div>
              <div className={styles.crumb}>
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/stories">Stories</Link>
                <span>/</span>
                Formulyn
              </div>
              <div className={cx(styles.eyebrow, styles.nobar)}>
                Branding · Web design · Content · Launch
              </div>
              <h1>
                A science practice that needed the <em>world to see it.</em>
              </h1>
              <p className={styles.sub}>
                Formulyn is a boutique nutraceutical and cosmetic formulation consultancy in
                Brisbane, working with supplement, skincare and wellness brands across Australia,
                the EU, the UK and the Gulf.
              </p>
              <p className={styles.sub}>
                The science was already there. What the practice did not yet have was a name
                presented properly, a brand that carried its authority, or a website that let a
                founder anywhere in the world understand what it does and how to begin.
              </p>
              <div className={styles.heroCta}>
                <a
                  className={styles.btn}
                  href="https://www.formulyn.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit formulyn.com.au <span className={styles.arr}>→</span>
                </a>
                <a className={styles.btnGhost} href="#process">
                  See how it was built
                </a>
              </div>
            </div>

            {/* brief to brand: the practice's rigour, carried onto every surface */}
            <div className={styles.mock}>
              <svg
                viewBox="0 0 460 264"
                aria-label="The science of the practice carried across four brand surfaces: identity and wordmark, website, voice and content, and search and share"
              >
                <defs>
                  <linearGradient id="fm-g1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#5EE0FF" />
                    <stop offset="1" stopColor="#19C6E8" />
                  </linearGradient>
                </defs>
                {/* flask outline, abstract */}
                <g transform="translate(30,40)">
                  <path
                    d="M34 0 v42 L4 120 a14 14 0 0 0 13 20 h74 a14 14 0 0 0 13-20 L74 42 V0"
                    fill="none"
                    stroke="rgba(255,255,255,.34)"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 0 h60"
                    stroke="rgba(255,255,255,.34)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 104 h80 a14 14 0 0 1 5 16 a14 14 0 0 1 -13 20 h-64 a14 14 0 0 1 -13 -20 a14 14 0 0 1 5 -16 z"
                    fill="rgba(25,198,232,.24)"
                  />
                  <circle className="pulse" cx="40" cy="122" r="3" fill="#5EE0FF" />
                  <circle
                    className="pulse"
                    cx="58"
                    cy="128"
                    r="2.4"
                    fill="#5EE0FF"
                    style={{ animationDelay: '0.7s' }}
                  />
                  <circle
                    className="pulse"
                    cx="72"
                    cy="118"
                    r="2"
                    fill="#5EE0FF"
                    style={{ animationDelay: '1.4s' }}
                  />
                </g>
                <text
                  x="72"
                  y="212"
                  textAnchor="middle"
                  fontFamily={MONO}
                  fontSize="10"
                  fill="rgba(255,255,255,.55)"
                >
                  THE SCIENCE
                </text>

                {/* transfer line */}
                <path
                  className="travel"
                  d="M150 130 H236"
                  stroke="url(#fm-g1)"
                  strokeWidth="1.8"
                  fill="none"
                />

                {/* brand surfaces stack */}
                <g fontFamily={MONO} fontSize="9" fill="rgba(255,255,255,.8)">
                  {BRAND_SURFACES.map((s) => (
                    <g key={s.label}>
                      <rect
                        x="248"
                        y={s.y}
                        width="176"
                        height="34"
                        rx="8"
                        fill={s.accent ? 'rgba(25,198,232,.10)' : 'rgba(255,255,255,.06)'}
                        stroke={s.accent ? 'rgba(25,198,232,.5)' : 'rgba(255,255,255,.26)'}
                      />
                      <text
                        x="336"
                        y={s.y + 21}
                        textAnchor="middle"
                        fill={s.accent ? '#7FD8FB' : 'rgba(255,255,255,.8)'}
                      >
                        {s.label}
                      </text>
                    </g>
                  ))}
                </g>
                <g fill="none" strokeWidth="1.2">
                  <path
                    className="travel"
                    d="M236 130 C 240 130 240 69 248 69"
                    stroke="rgba(255,255,255,.3)"
                  />
                  <path className="travel" d="M236 130 H248" stroke="rgba(25,198,232,.55)" />
                  <path
                    className="travel"
                    d="M236 130 C 240 130 240 157 248 157"
                    stroke="rgba(25,198,232,.4)"
                  />
                  <path
                    className="travel"
                    d="M236 130 C 240 130 240 201 248 201"
                    stroke="rgba(255,255,255,.3)"
                  />
                </g>
                <text
                  x="336"
                  y="248"
                  textAnchor="middle"
                  fontFamily={MONO}
                  fontSize="10"
                  fill="rgba(255,255,255,.55)"
                >
                  THE PRESENCE
                </text>
              </svg>
              <div className={styles.heroCap}>
                RIGOUR ALREADY EXISTED. WE BUILT WHAT CARRIES IT.
              </div>
            </div>
          </div>
        </header>

        {/* 2. SNAPSHOT */}
        <section data-reveal className={styles.snapshot}>
          <div className={styles.wrap}>
            <div className={styles.snapGrid}>
              {SNAPSHOT.map((s) => (
                <div key={s.lab} className={styles.snap}>
                  <div className={styles.lab}>{s.lab}</div>
                  <div className={cx(styles.val, s.azure && styles.azure)}>{s.val}</div>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. THE SITUATION */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>How it began</div>
              <h2 className={styles.h2}>
                The expertise was real. The <em>presence</em> was not yet built.
              </h2>
            </div>
            <div className={styles.two}>
              <div className={styles.bodyCopy}>
                <p>
                  Formulyn came to KEYOB in the position a lot of specialist consultancies find
                  themselves in. The work was strong, the clients were real, and the reputation was
                  growing by word of mouth. What did not exist yet was anything a prospective client
                  could look at.
                </p>
                <p>
                  That matters more in formulation than in most fields. A founder handing over their
                  product idea is handing over the thing they have been thinking about for two
                  years. Before they send that first email, they want to know who they are dealing
                  with, whether the science is sound, and whether this is a practice that will still
                  be there at the end.
                </p>
                <p>
                  None of that can be judged from a phone call alone. It gets judged from a website,
                  in about forty seconds.
                </p>
                <p>
                  <b>The brief we agreed on was straightforward:</b> build a brand and a digital
                  presence that matches the standard of the science, and make it easy for the right
                  client to start a conversation.
                </p>
              </div>

              <div className={styles.vis}>
                <svg
                  viewBox="0 0 420 300"
                  aria-label="A dense cluster of capability on one side, a market of prospective clients on the other, with nothing connecting them"
                >
                  {/* left: capability, dense and real */}
                  <g transform="translate(20,40)">
                    <text
                      x="70"
                      y="-14"
                      textAnchor="middle"
                      fontFamily={MONO}
                      fontSize="9.5"
                      fill="var(--ink-dim)"
                    >
                      CAPABILITY
                    </text>
                    <circle cx="70" cy="90" r="62" fill="none" stroke="var(--line-2)" />
                    <g fill="var(--keyob-cyan)">
                      <circle cx="52" cy="58" r="4" />
                      <circle cx="86" cy="66" r="4" />
                      <circle cx="44" cy="96" r="4" />
                      <circle cx="74" cy="100" r="4" />
                      <circle cx="98" cy="104" r="4" />
                      <circle cx="60" cy="126" r="4" />
                      <circle cx="92" cy="132" r="4" />
                      <circle cx="70" cy="80" r="4" />
                    </g>
                    <g stroke="var(--keyob-cyan)" strokeWidth="1" opacity=".5">
                      <path d="M52 58 L70 80 L86 66 M70 80 L44 96 M70 80 L74 100 L98 104 M74 100 L60 126 M74 100 L92 132" />
                    </g>
                  </g>
                  {/* the gap */}
                  <text x="210" y="96" textAnchor="middle" fontFamily={MONO} fontSize="9" fill="#8A97A5">
                    NOT YET
                  </text>
                  <text x="210" y="110" textAnchor="middle" fontFamily={MONO} fontSize="9" fill="#8A97A5">
                    CONNECTED
                  </text>
                  <path className="travel" d="M162 130 H262" stroke="#8A97A5" strokeWidth="1.3" fill="none" />
                  {/* right: the market, waiting */}
                  <g transform="translate(268,40)">
                    <text
                      x="66"
                      y="-14"
                      textAnchor="middle"
                      fontFamily={MONO}
                      fontSize="9.5"
                      fill="var(--ink-dim)"
                    >
                      THE MARKET
                    </text>
                    <circle
                      cx="66"
                      cy="90"
                      r="62"
                      fill="none"
                      stroke="var(--line-2)"
                      strokeDasharray="4 5"
                    />
                    <g fill="none" stroke="#8A97A5" strokeWidth="1.2">
                      <circle cx="44" cy="62" r="7" />
                      <circle cx="86" cy="58" r="7" />
                      <circle cx="34" cy="102" r="7" />
                      <circle cx="70" cy="96" r="7" />
                      <circle cx="98" cy="108" r="7" />
                      <circle cx="56" cy="132" r="7" />
                    </g>
                  </g>
                  <text
                    x="210"
                    y="252"
                    textAnchor="middle"
                    fontFamily={MONO}
                    fontSize="9.5"
                    fill="#8A97A5"
                  >
                    A PRACTICE NOBODY COULD FIND YET
                  </text>
                </svg>
                <div className={styles.visCap}>
                  DEPTH ON ONE SIDE, DEMAND ON THE OTHER, NO BRIDGE BETWEEN
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE CHALLENGE */}
        <section data-reveal className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The challenge</div>
              <h2 className={styles.h2}>
                Scientific credibility is easy to claim and <em>hard to demonstrate.</em>
              </h2>
              <p className={styles.sub}>
                Three things made this project harder than a standard brand and website build, and
                all three shaped the outcome.
              </p>
            </div>
            <div className={styles.built}>
              {CHALLENGES.map((c) => (
                <div key={c.n} className={styles.bcard}>
                  <div className={styles.n}>{c.n}</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. THE PROCESS */}
        <section data-reveal className={cx(styles.sct, styles.dark)} id="process">
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>How we worked</div>
              <h2 className={styles.h2}>
                From first conversation <em>to launch.</em>
              </h2>
              <p className={styles.sub}>
                The same sequence we use on every brand and web engagement, adapted to a practice
                where accuracy matters more than flourish.
              </p>
            </div>
            <div className={styles.phaseRail}>
              {PHASES.map((p) => (
                <div key={p.k} className={styles.ph}>
                  <span className={styles.node} />
                  <span className={styles.k}>{p.k}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHAT WE BUILT */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>What we built</div>
              <h2 className={styles.h2}>
                A brand and a site that <em>do the explaining.</em>
              </h2>
            </div>
            <div className={styles.two}>
              <div className={styles.vis}>
                <svg
                  viewBox="0 0 420 320"
                  aria-label="Site architecture: a home page branching into services, process, industries, case studies, journal and about, with every path leading to a brief"
                >
                  <g fontFamily={MONO} fontSize="9">
                    <rect x="140" y="14" width="140" height="32" rx="8" fill="var(--keyob-deep)" />
                    <text x="210" y="34" textAnchor="middle" fill="#fff">
                      HOME
                    </text>

                    {SITE_MAP_L1.map((label, i) => (
                      <g key={label}>
                        <rect
                          x={16 + i * 136}
                          y="92"
                          width="116"
                          height="30"
                          rx="7"
                          fill="var(--bg-soft)"
                          stroke="var(--line-2)"
                        />
                        <text x={74 + i * 136} y="111" textAnchor="middle" fill="var(--ink)">
                          {label}
                        </text>
                      </g>
                    ))}

                    {SITE_MAP_L2.map((label, i) => (
                      <g key={label}>
                        <rect
                          x={16 + i * 136}
                          y="160"
                          width="116"
                          height="30"
                          rx="7"
                          fill="var(--bg-soft)"
                          stroke="var(--line-2)"
                        />
                        <text x={74 + i * 136} y="179" textAnchor="middle" fill="var(--ink)">
                          {label}
                        </text>
                      </g>
                    ))}

                    <rect x="140" y="238" width="140" height="36" rx="18" fill="var(--keyob-cyan)" />
                    <text x="210" y="260" textAnchor="middle" fill="#022">
                      INITIATE BRIEF
                    </text>
                  </g>
                  <g stroke="var(--line-2)" strokeWidth="1.2" fill="none">
                    <path d="M210 46 V70 M74 70 H346 M74 70 V92 M210 70 V92 M346 70 V92" />
                    <path d="M74 122 V160 M210 122 V160 M346 122 V160" />
                  </g>
                  <g className="travel" stroke="var(--keyob-cyan)" strokeWidth="1.5" fill="none">
                    <path d="M74 190 C 74 220 160 214 190 238" />
                    <path d="M210 190 V238" />
                    <path d="M346 190 C 346 220 260 214 230 238" />
                  </g>
                  <text
                    x="210"
                    y="300"
                    textAnchor="middle"
                    fontFamily={MONO}
                    fontSize="9.5"
                    fill="#8A97A5"
                  >
                    EVERY PATH ENDS IN A CONVERSATION
                  </text>
                </svg>
                <div className={styles.visCap}>
                  STRUCTURE BUILT AROUND HOW ENQUIRIES ACTUALLY ARRIVE
                </div>
              </div>

              <div className={styles.bodyCopy}>
                <p>
                  <b>A complete brand identity.</b> Wordmark and badge, palette, typography and
                  imagery direction, with rules for how the mark behaves across the site, documents
                  and social profiles.
                </p>
                <p>
                  <b>A website written to be understood.</b> Service pages for formulation
                  development, regulatory compliance and market registration, and manufacturer
                  sourcing, each explaining what a client receives rather than what the practice
                  does.
                </p>
                <p>
                  <b>A methodology made visible.</b> The practice works in defined phases with a
                  clear decision point at the end of each one. Publishing that openly, with the
                  scope stated up front, removes the fear a first-time founder has about signing
                  into something open-ended.
                </p>
                <p>
                  <b>Case studies that respect confidentiality.</b> Five pieces of work presented
                  with enough technical substance to demonstrate range, and no identifying detail at
                  all.
                </p>
                <p>
                  <b>A journal.</b> Somewhere for the practice to publish thinking, which builds
                  authority over time and gives search engines and AI assistants something
                  substantive to cite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. THE TURNING POINT */}
        <section data-reveal className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div className={cx(styles.sctHead, styles.center)}>
              <div className={cx(styles.eyebrow, styles.center)}>The turning point</div>
              <h2 className={styles.h2}>
                Saying the quiet part <em>out loud.</em>
              </h2>
            </div>
            <div className={cx(styles.bodyCopy, styles.center)}>
              <p>
                The moment the project clicked was a conversation about what founders are really
                afraid of. Not the science. They are afraid of sitting in a meeting with a
                manufacturer and being the least informed person in the room.
              </p>
              <p>
                Once that was named, the whole site had a spine. It stopped being a list of services
                and became a set of answers to things people were already thinking but would not say
                first. The consultancy&apos;s promise, that a client walks out owning the reasoning
                behind their own formula, went from a nice sentiment to the organising idea of the
                brand.
              </p>
            </div>
          </div>
        </section>

        {/* 8. OUTCOME */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>Where it stands</div>
              <h2 className={styles.h2}>
                Live, and <em>working for them.</em>
              </h2>
              <p className={styles.sub}>
                The site is public at formulyn.com.au and carries the practice into rooms it could
                not previously reach.
              </p>
            </div>
            <div className={styles.bodyCopy} style={{ maxWidth: '82ch' }}>
              <ul className={styles.outList}>
                {OUTCOMES.map((o) => (
                  <li key={o}>
                    <span className={styles.c}>{CheckIcon}</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 26 }}>
                A founder in Dublin or Dubai can now find the practice, understand what it does, see
                the shape of the work, read what previous clients said, and book a call. That was
                the entire point.
              </p>
            </div>
          </div>
        </section>

        {/* 9. PHILOSOPHY */}
        <section data-reveal className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div className={cx(styles.sctHead, styles.center)}>
              <div className={cx(styles.eyebrow, styles.center)}>What this work taught us</div>
              <h2 className={styles.h2}>
                Branding a specialist is mostly <em>an act of listening.</em>
              </h2>
            </div>
            <div className={cx(styles.bodyCopy, styles.center)}>
              <p>
                Technical practices are usually undersold by their own marketing, because the people
                doing the work find their expertise unremarkable. It is simply how they think. The
                job is rarely to invent a story. It is to notice which parts of the existing one a
                client outside the field would find remarkable, and then to say those parts plainly.
              </p>
              <p>
                Restraint does more work than persuasion here. In a field where claims are regulated
                and buyers are cautious, the most convincing thing a brand can do is be precise.
              </p>
            </div>
          </div>
        </section>

        {/* 10. REFLECTION */}
        <section data-reveal className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div className={styles.reflect}>
              <blockquote>
                &ldquo;The brief was never to make the practice look bigger than it is. It was to
                make it look exactly as capable as it already was, and then make that easy to
                find.&rdquo;
              </blockquote>
              <div className={styles.by}>KEYOB — internal reflection on the engagement</div>
            </div>
          </div>
        </section>

        {/* 11. CAPABILITIES */}
        <section data-reveal className={styles.sct} id="capabilities">
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>Capabilities involved</div>
              <h2 className={styles.h2}>
                What went into <em>building the presence.</em>
              </h2>
            </div>
            <div className={styles.caps}>
              {CAP_TAGS.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section data-reveal className={styles.final}>
          <div className={styles.finalMesh} aria-hidden="true" />
          <div className={cx(styles.wrap, styles.in)}>
            <h2>
              Have the expertise, but not the <em>presence?</em>
            </h2>
            <p>
              If your business is better than its website suggests, that gap is costing you work you
              never hear about. It is a fixable problem, and usually a quicker one than people
              expect.
            </p>
            <div className={styles.finalCta}>
              <Link href="/contact#contact" className={styles.btn}>
                Start a conversation <span className={styles.arr}>→</span>
              </Link>
              <Link href="/stories" className={styles.btnGhost}>
                Read more stories
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
