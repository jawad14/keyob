/* eslint-disable no-restricted-syntax --
 * Bespoke client-story page modeled after esteem-constructions-story.html. The
 * section structure is faithful to the source HTML; the visual language follows
 * the other KEYOB story pages and is owned by this file's CSS module rather
 * than the shared typography primitives. */

import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { siteConfig } from '@/config/site.config';
import { RevealOnScroll } from '@/components/util/RevealOnScroll';
import styles from './page.module.css';

const SLUG = 'esteem-constructions';
const TITLE = 'Esteem Constructions — a custom construction platform built by KEYOB';
const DESCRIPTION =
  'How KEYOB designed and built Builtrax, a custom construction project management platform for Esteem Constructions, a Sydney home extension and renovation builder.';
const SHORT_DESCRIPTION =
  'Builtrax: one platform for a Sydney builder, from first enquiry to final handover.';

const OG_IMAGES = [
  {
    url: '/cases/esteem-constructions-og.jpg',
    width: 1200,
    height: 630,
    alt: 'Builtrax construction platform built for Esteem Constructions',
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Esteem Constructions',
    'Builtrax',
    'custom software',
    'construction CRM',
    'construction project management platform',
    'product design',
    'data modelling',
    'residential builder software',
    'KEYOB client story',
  ],
  alternates: { canonical: `${siteConfig.url}/stories/${SLUG}` },
  openGraph: {
    type: 'article',
    title: `${TITLE} | KEYOB`,
    description: SHORT_DESCRIPTION,
    url: `${siteConfig.url}/stories/${SLUG}`,
    images: OG_IMAGES,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | KEYOB`,
    description: SHORT_DESCRIPTION,
    images: [OG_IMAGES[0].url],
  },
};

export const viewport: Viewport = {
  themeColor: '#0d1b2a',
};

// --- content -----------------------------------------------------------------

const SNAPSHOT: { lab: string; val: string; azure?: boolean; body: string }[] = [
  {
    lab: 'Client',
    val: 'Esteem Constructions',
    body: 'Family-owned home extension, renovation and bespoke home builder, Sydney Hills.',
  },
  {
    lab: 'Scope',
    val: 'Custom platform',
    body: 'Discovery, product design, build and rollout of Builtrax.',
  },
  {
    lab: 'Scale behind it',
    val: '1,700+ projects',
    azure: true,
    body: "Across sixteen years, per the builder's own published figures.",
  },
  {
    lab: 'Status',
    val: 'In daily use',
    azure: true,
    body: 'Live at dashboard.builtrax.com for office and site teams.',
  },
];

const CHALLENGES: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'Two very different users',
    body: 'An office team works on a desktop with time to type. A site supervisor is on a phone, outdoors, often with one hand free. The same information has to serve both without either group feeling the software was written for the other.',
  },
  {
    n: '02',
    title: 'Long projects, slow-moving stages',
    body: 'A residential extension can run for months, and approvals can sit still for weeks through no fault of the builder. The system had to make the current state obvious at a glance, including when nothing is moving and why.',
  },
  {
    n: '03',
    title: 'The client is watching',
    body: 'Esteem promises clarity, and clients at home notice when updates go quiet. Keeping an accurate internal picture is the only reliable way to keep an honest external one.',
  },
  {
    n: '04',
    title: 'Adoption decides everything',
    body: 'A platform that is harder than the spreadsheet it replaces simply will not be used. Every screen had to be faster than the habit it was asking people to give up.',
  },
];

const PHASES: { k: string; title: string; body: string }[] = [
  {
    k: 'Stage 01',
    title: 'Discovery on their terms',
    body: 'Time with the people doing the work: how an enquiry becomes a quote, what happens when a design changes, who needs to know when a trade cannot get on site. The aim was to map the real process rather than the tidy version drawn on a whiteboard.',
  },
  {
    k: 'Stage 02',
    title: 'Designing the data model',
    body: 'Deciding what a project is, what hangs off it, and how stages, documents, people and conversations relate. This is the least visible part of a custom platform and the part that determines whether it still fits in five years.',
  },
  {
    k: 'Stage 03',
    title: 'Product and interface design',
    body: 'Builtrax was designed as a product with its own name and identity rather than an internal tool. A team that is proud to log in uses the system; a team that tolerates it works around it.',
  },
  {
    k: 'Stage 04',
    title: 'Build in short cycles',
    body: 'Iterative development with the client in the loop throughout, so corrections happened in days rather than after a six-month reveal. Features were validated against real projects, not hypothetical ones.',
  },
  {
    k: 'Stage 05',
    title: 'Rollout and training',
    body: 'Deployment at dashboard.builtrax.com, with onboarding shaped around roles so each person learned the part of the platform they actually use.',
  },
  {
    k: 'Stage 06',
    title: 'Support and evolution',
    body: 'A custom platform is never finished, because the business keeps moving. KEYOB stays close so Builtrax keeps matching how Esteem works rather than slowly drifting away from it.',
  },
];

const MODULES: { k: string; title: string; body: string }[] = [
  {
    k: 'Module 01',
    title: 'Enquiries and pipeline',
    body: 'Every enquiry captured in one place, from first contact through discovery call and quote, so nothing depends on who happened to answer the phone.',
  },
  {
    k: 'Module 02',
    title: 'Projects and stages',
    body: 'Each job as a single record moving through the real stages of a residential build, with the current position visible at a glance.',
  },
  {
    k: 'Module 03',
    title: 'Documents and approvals',
    body: 'Plans, quotes, variations and approval paperwork held against the project they belong to rather than in an inbox.',
  },
  {
    k: 'Module 04',
    title: 'Scheduling and trades',
    body: 'Who is on site and when, so the office and the supervisors are working from the same week rather than two versions of it.',
  },
  {
    k: 'Module 05',
    title: 'Site access on a phone',
    body: 'The parts a supervisor needs, usable outdoors on a handset in the time between two conversations.',
  },
  {
    k: 'Module 06',
    title: 'Reporting for the owners',
    body: 'A view across every active project, so leadership can see the whole business without asking six people for an update.',
  },
];

const OUTCOMES = [
  'A custom construction platform, branded as Builtrax and owned by Esteem Constructions.',
  'One record per project, carrying the job from first enquiry through to handover.',
  'A single operational picture for office and site teams instead of parallel versions.',
  "A platform built around a residential builder's real stages rather than a generic project template.",
  'Software the business owns and can extend as the way it works keeps changing.',
  'A partnership that continues past launch, with KEYOB supporting and evolving the platform.',
];

const CAP_TAGS = [
  'Custom software',
  'Construction CRM',
  'Product design',
  'Discovery & process mapping',
  'Data modelling',
  'UI/UX design',
  'Web application development',
  'Mobile-ready interfaces',
  'Role-based access',
  'Document management',
  'Scheduling',
  'Reporting dashboards',
  'Deployment',
  'Training & rollout',
  'Ongoing support',
];

const LIFECYCLE = [
  'ENQUIRY',
  'SITE VISIT',
  'QUOTE',
  'DESIGN',
  'APPROVALS',
  'BUILD',
  'HANDOVER',
  'WARRANTY',
];

/** Inbound curves converge on the platform block from each lifecycle label. */
const INBOUND = [
  'M96 40 C 150 40 160 156 200 156',
  'M96 72 C 150 72 164 156 200 156',
  'M96 104 C 150 104 170 156 200 156',
  'M96 136 C 150 136 176 156 200 156',
  'M96 168 C 150 168 176 156 200 156',
  'M96 200 C 150 200 170 156 200 156',
  'M96 232 C 150 232 164 156 200 156',
  'M96 264 C 150 264 160 156 200 156',
];

const AUDIENCES: { label: string; y: number }[] = [
  { label: 'OFFICE', y: 76 },
  { label: 'SITE', y: 140 },
  { label: 'CLIENT', y: 204 },
];

const SCATTERED: { label: string; x: number; y: number; w: number }[] = [
  { label: 'SPREADSHEETS', x: 18, y: 48, w: 78 },
  { label: 'EMAIL', x: 110, y: 44, w: 68 },
  { label: 'WHATSAPP', x: 30, y: 92, w: 70 },
  { label: 'PHONE CALLS', x: 116, y: 96, w: 74 },
  { label: 'PDF QUOTES', x: 24, y: 140, w: 76 },
  { label: 'SITE NOTES', x: 112, y: 144, w: 72 },
  { label: "SOMEONE'S HEAD", x: 52, y: 188, w: 92 },
];

const TIMELINE: { label: string; x: number; state: 'done' | 'now' | 'ahead' }[] = [
  { label: 'ENQUIRY', x: 40, state: 'done' },
  { label: 'QUOTE', x: 109, state: 'done' },
  { label: 'DESIGN', x: 178, state: 'done' },
  { label: 'APPROVALS', x: 248, state: 'now' },
  { label: 'BUILD', x: 317, state: 'ahead' },
  { label: 'HANDOVER', x: 380, state: 'ahead' },
];

const ATTACHED: { label: string; x: number; y: number }[] = [
  { label: 'DOCUMENTS', x: 34, y: 140 },
  { label: 'SCHEDULE', x: 158, y: 140 },
  { label: 'TRADES', x: 282, y: 140 },
  { label: 'UPDATES', x: 96, y: 194 },
  { label: 'COSTS', x: 220, y: 194 },
];

const MONO = 'JetBrains Mono, ui-monospace, monospace';

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Esteem Constructions: a custom construction platform built by KEYOB',
  description:
    'How KEYOB designed and built Builtrax, a custom construction project management platform for Sydney builder Esteem Constructions.',
  author: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  about: {
    '@type': 'Organization',
    name: 'Esteem Constructions',
    url: 'https://www.esteemconstructions.com.au',
  },
  mainEntityOfPage: `${siteConfig.url}/stories/${SLUG}`,
  articleSection: 'Custom Software',
  keywords: 'custom software, construction CRM, product design, data modelling, Builtrax',
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
      name: 'Esteem Constructions',
      item: `${siteConfig.url}/stories/${SLUG}`,
    },
  ],
};

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

/** Reveal stagger, matching the .d1/.d2/.d3 delay classes in the source HTML. */
const delay = (i: number) => [undefined, styles.d1, styles.d2, styles.d3][i];

const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export default function EsteemConstructionsStoryPage() {
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
                Esteem Constructions
              </div>
              <div className={cx(styles.eyebrow, styles.nobar)}>
                Custom software · Construction CRM · Builtrax
              </div>
              <h1>
                A builder&apos;s whole business, <em>on one screen.</em>
              </h1>
              <p className={styles.sub}>
                Esteem Constructions is a family-owned Sydney builder specialising in home
                extensions, renovations and bespoke homes. Their own figures tell the story of
                scale: more than 1,500 homes and 1,700 projects delivered across sixteen years.
              </p>
              <p className={styles.sub}>
                KEYOB built them Builtrax, a construction project management platform made for the
                way they actually work, from the first discovery call to the final handover.
              </p>
              <div className={styles.heroCta}>
                <a
                  className={styles.btn}
                  href="https://www.esteemconstructions.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Esteem Constructions <span className={styles.arr}>→</span>
                </a>
                <a className={styles.btnGhost} href="#built">
                  See what we built
                </a>
              </div>
            </div>

            {/* project lifecycle: many jobs, many stages, one platform */}
            <div className={styles.mock}>
              <svg
                viewBox="0 0 460 340"
                aria-label="Every stage of a build, from enquiry to warranty, flowing into the Builtrax platform and out to office, site and client"
              >
                <defs>
                  <linearGradient id="est-g1" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#5EE0FF" />
                    <stop offset="1" stopColor="#7BB4FF" />
                  </linearGradient>
                </defs>
                {/* inbound stages */}
                <g fontFamily={MONO} fontSize="9" fill="rgba(255,255,255,.72)">
                  {LIFECYCLE.map((label, i) => (
                    <text key={label} x="14" y={44 + i * 32}>
                      {label}
                    </text>
                  ))}
                </g>
                <g className="travel" stroke="rgba(25,198,232,.45)" strokeWidth="1.2" fill="none">
                  {INBOUND.map((d) => (
                    <path key={d} d={d} />
                  ))}
                </g>
                {/* the platform */}
                <rect
                  x="200"
                  y="118"
                  width="104"
                  height="76"
                  rx="14"
                  fill="rgba(37,99,217,.18)"
                  stroke="url(#est-g1)"
                  strokeWidth="1.9"
                />
                <text x="252" y="150" textAnchor="middle" fontFamily={MONO} fontSize="11" fill="#fff">
                  BUILTRAX
                </text>
                <text
                  x="252"
                  y="168"
                  textAnchor="middle"
                  fontFamily={MONO}
                  fontSize="8.5"
                  fill="rgba(255,255,255,.62)"
                >
                  ONE PLATFORM
                </text>
                {/* outputs */}
                <g className="travel" stroke="rgba(123,180,255,.6)" strokeWidth="1.3" fill="none">
                  <path d="M304 156 C 340 156 344 92 374 92" />
                  <path d="M304 156 H374" />
                  <path d="M304 156 C 340 156 344 220 374 220" />
                </g>
                <g fontFamily={MONO} fontSize="9" fill="#9FC4FF">
                  {AUDIENCES.map((a) => (
                    <g key={a.label}>
                      <rect
                        x="374"
                        y={a.y}
                        width="74"
                        height="30"
                        rx="8"
                        fill="rgba(123,180,255,.12)"
                        stroke="rgba(123,180,255,.45)"
                      />
                      <text x="411" y={a.y + 19} textAnchor="middle">
                        {a.label}
                      </text>
                    </g>
                  ))}
                </g>
                <text
                  x="230"
                  y="300"
                  textAnchor="middle"
                  fontFamily={MONO}
                  fontSize="9.5"
                  fill="rgba(255,255,255,.5)"
                >
                  EVERY STAGE, EVERY PROJECT, ONE RECORD
                </text>
              </svg>
              <div className={styles.heroCap}>
                BUILT FOR THE WAY A BUILDER ACTUALLY RUNS A JOB
              </div>
            </div>
          </div>
        </header>

        {/* 2. SNAPSHOT */}
        <section className={styles.snapshot}>
          <div className={styles.wrap}>
            <div className={styles.snapGrid}>
              {SNAPSHOT.map((s, i) => (
                <div key={s.lab} data-reveal className={cx(styles.snap, delay(i))}>
                  <div className={styles.lab}>{s.lab}</div>
                  <div className={cx(styles.val, s.azure && styles.azure)}>{s.val}</div>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. THE SITUATION */}
        <section className={styles.sct}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={styles.eyebrow}>How it began</div>
              <h2 className={styles.h2}>
                Residential building is a <em>coordination business.</em>
              </h2>
            </div>
            <div className={styles.two}>
              <div data-reveal className={styles.bodyCopy}>
                <p>
                  A home extension looks like a construction job. Run one properly and you discover
                  it is mostly coordination. A single project moves through a discovery call, a site
                  visit, a quote, design, council approvals, construction and handover, and each
                  stage involves different people, different documents and a client at home waiting
                  for news.
                </p>
                <p>
                  Esteem Constructions has done this well for sixteen years, and their reputation
                  reflects it. The published motto is simple: trust, clarity and quality. Clarity in
                  particular is a promise about information, which makes it a promise about systems.
                </p>
                <p>
                  Generic project tools are built for generic projects. They do not know what a
                  first-floor addition is, that approvals can stall for weeks, or that the same
                  client will ask three times when the frame goes up. Spreadsheets fill the gaps,
                  then quietly become the system of record.
                </p>
                <p>
                  <b>The brief:</b> one platform built around how this builder actually runs a job,
                  so the whole business can be seen in one place rather than reassembled from memory
                  each morning.
                </p>
              </div>

              <div data-reveal className={cx(styles.vis, styles.d1)}>
                <svg
                  viewBox="0 0 420 300"
                  aria-label="Information scattered across spreadsheets, email, WhatsApp, calls, PDFs and people's heads, consolidated into one record per project"
                >
                  <text
                    x="110"
                    y="26"
                    textAnchor="middle"
                    fontFamily={MONO}
                    fontSize="9.5"
                    fill="var(--ink-dim)"
                  >
                    INFORMATION SCATTERED
                  </text>
                  <g fontFamily={MONO} fontSize="8.5" fill="var(--ink-dim)">
                    {SCATTERED.map((b) => (
                      <g key={b.label}>
                        <rect
                          x={b.x}
                          y={b.y}
                          width={b.w}
                          height="26"
                          rx="6"
                          fill="var(--bg-soft)"
                          stroke="var(--line-2)"
                        />
                        <text x={b.x + b.w / 2} y={b.y + 17} textAnchor="middle">
                          {b.label}
                        </text>
                      </g>
                    ))}
                  </g>
                  <path
                    className="travel"
                    d="M200 130 H262"
                    stroke="var(--keyob-blue)"
                    strokeWidth="1.6"
                    fill="none"
                  />
                  <rect
                    x="266"
                    y="100"
                    width="130"
                    height="62"
                    rx="14"
                    fill="rgba(37,99,217,.08)"
                    stroke="var(--keyob-blue)"
                    strokeWidth="1.6"
                  />
                  <text
                    x="331"
                    y="128"
                    textAnchor="middle"
                    fontFamily={MONO}
                    fontSize="10"
                    fill="var(--keyob-blue)"
                  >
                    ONE RECORD
                  </text>
                  <text
                    x="331"
                    y="146"
                    textAnchor="middle"
                    fontFamily={MONO}
                    fontSize="8.5"
                    fill="var(--ink-dim)"
                  >
                    PER PROJECT
                  </text>
                  <text
                    x="331"
                    y="206"
                    textAnchor="middle"
                    fontFamily={MONO}
                    fontSize="9"
                    fill="#8A97A5"
                  >
                    BUILTRAX
                  </text>
                </svg>
                <div className={styles.visCap}>
                  THE PICTURE EXISTED. IT WAS JUST SPREAD ACROSS TOO MANY PLACES.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE CHALLENGE */}
        <section className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={styles.eyebrow}>What made it interesting</div>
              <h2 className={styles.h2}>
                Construction software fails when it ignores <em>the site.</em>
              </h2>
              <p className={styles.sub}>Four realities shaped the whole design.</p>
            </div>
            <div className={styles.built}>
              {CHALLENGES.map((c, i) => (
                <div key={c.n} data-reveal className={cx(styles.bcard, delay(i))}>
                  <div className={styles.n}>{c.n}</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. THE PROCESS */}
        <section className={cx(styles.sct, styles.dark)} id="process">
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={styles.eyebrow}>How we worked</div>
              <h2 className={styles.h2}>
                We learned the business <em>before writing code.</em>
              </h2>
            </div>
            <div className={styles.phaseRail}>
              {PHASES.map((p) => (
                <div key={p.k} data-reveal className={styles.ph}>
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
        <section className={styles.sct} id="built">
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={styles.eyebrow}>What we built</div>
              <h2 className={styles.h2}>
                Builtrax: their process, <em>turned into software.</em>
              </h2>
              <p className={styles.sub}>
                A platform named and branded for Esteem, covering the journey their own website
                describes: dream, plan, design and construct.
              </p>
            </div>

            <div className={styles.mods}>
              {MODULES.map((m, i) => (
                <div key={m.k} data-reveal className={cx(styles.mod, delay(i % 3))}>
                  <div className={styles.k}>{m.k}</div>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              ))}
            </div>

            <div className={styles.two}>
              <div data-reveal className={styles.bodyCopy}>
                <p>
                  <b>A product, not an internal tool.</b> Builtrax has its own name, its own
                  identity and its own login at dashboard.builtrax.com, carrying Esteem&apos;s
                  branding and the quiet line that matters to us: made by Team KEYOB.
                </p>
                <p>
                  <b>Built around their stages, not generic ones.</b> The platform speaks the
                  language of a residential builder, so training is mostly a matter of showing
                  people where things live.
                </p>
                <p>
                  <b>Designed for the phone as seriously as the desktop.</b> If the site team cannot
                  use it in the field, the office picture goes stale by lunchtime.
                </p>
                <p>
                  <b>Owned by the client.</b> This is custom software Esteem owns and can extend,
                  not a subscription that reshapes their process to suit a product roadmap set
                  somewhere else.
                </p>
              </div>

              <div data-reveal className={cx(styles.vis, styles.d1)}>
                <svg
                  viewBox="0 0 420 300"
                  aria-label="One project visible end to end: enquiry, quote and design complete, approvals current, build and handover ahead, with documents, schedule, trades, updates and costs attached"
                >
                  <text
                    x="210"
                    y="24"
                    textAnchor="middle"
                    fontFamily={MONO}
                    fontSize="9.5"
                    fill="var(--ink-dim)"
                  >
                    ONE PROJECT, VISIBLE END TO END
                  </text>
                  <line x1="40" y1="96" x2="380" y2="96" stroke="var(--line-2)" strokeWidth="2" />
                  <line
                    x1="40"
                    y1="96"
                    x2="248"
                    y2="96"
                    stroke="var(--keyob-blue)"
                    strokeWidth="2.6"
                  />
                  <g fontFamily={MONO} fontSize="8" fill="var(--ink-dim)">
                    {TIMELINE.map((t) => (
                      <g key={t.label}>
                        <circle
                          cx={t.x}
                          cy="96"
                          r={t.state === 'now' ? 8 : 7}
                          fill={
                            t.state === 'ahead'
                              ? '#fff'
                              : t.state === 'now'
                                ? 'var(--keyob-cyan)'
                                : 'var(--keyob-blue)'
                          }
                          stroke={t.state === 'ahead' ? '#C3CFDB' : undefined}
                          strokeWidth={t.state === 'ahead' ? 2 : undefined}
                        />
                        <text
                          x={t.x}
                          y={t.state === 'now' ? 76 : 78}
                          textAnchor="middle"
                          fill={
                            t.state === 'ahead'
                              ? 'var(--ink-dim)'
                              : t.state === 'now'
                                ? 'var(--keyob-cyan)'
                                : 'var(--keyob-blue)'
                          }
                        >
                          {t.label}
                        </text>
                      </g>
                    ))}
                  </g>
                  {/* attached things */}
                  <g fontFamily={MONO} fontSize="8.5" fill="var(--ink-dim)">
                    {ATTACHED.map((a) => (
                      <g key={a.label}>
                        <rect
                          x={a.x}
                          y={a.y}
                          width="104"
                          height="30"
                          rx="7"
                          fill="var(--bg-soft)"
                          stroke="var(--line-2)"
                        />
                        <text x={a.x + 52} y={a.y + 19} textAnchor="middle">
                          {a.label}
                        </text>
                      </g>
                    ))}
                  </g>
                  <g stroke="var(--line-2)" strokeWidth="1.2" fill="none">
                    <path d="M86 140 V112 M210 140 V112 M334 140 V112" />
                    <path d="M148 194 V176 M272 194 V176" />
                  </g>
                  <text
                    x="210"
                    y="258"
                    textAnchor="middle"
                    fontFamily={MONO}
                    fontSize="9"
                    fill="#8A97A5"
                  >
                    EVERYTHING HANGS OFF THE JOB IT BELONGS TO
                  </text>
                </svg>
                <div className={styles.visCap}>THE DATA MODEL IS THE PRODUCT</div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. THE TURNING POINT */}
        <section className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div data-reveal className={cx(styles.sctHead, styles.center)}>
              <div className={cx(styles.eyebrow, styles.center)}>The turning point</div>
              <h2 className={styles.h2}>
                Naming it <em>changed how it was treated.</em>
              </h2>
            </div>
            <div data-reveal className={cx(styles.bodyCopy, styles.center)}>
              <p>
                Internal systems usually get called &ldquo;the system&rdquo;. The decision to give
                this one a name, Builtrax, an identity and a proper login screen was not decoration.
                It changed how everyone spoke about it.
              </p>
              <p>
                A named product gets used deliberately, gets feedback, gets improved. An unnamed
                internal tool gets tolerated until someone quietly goes back to a spreadsheet.
                Treating the platform as a real product was the moment it stopped being an IT
                project and started being part of how the company works.
              </p>
            </div>
          </div>
        </section>

        {/* 8. OUTCOME */}
        <section className={styles.sct}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={styles.eyebrow}>Where it stands</div>
              <h2 className={styles.h2}>
                In daily use, and <em>still growing.</em>
              </h2>
            </div>
            <div data-reveal className={styles.bodyCopy} style={{ maxWidth: '82ch' }}>
              <ul className={styles.outList}>
                {OUTCOMES.map((o) => (
                  <li key={o}>
                    <span className={styles.c}>{CheckIcon}</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: 26 }}>
                Esteem promises its clients trust, clarity and quality. Clarity is the one that
                depends on information, and information needs somewhere to live. Builtrax is that
                place.
              </p>
            </div>
          </div>
        </section>

        {/* 9. PHILOSOPHY */}
        <section className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div data-reveal className={cx(styles.sctHead, styles.center)}>
              <div className={cx(styles.eyebrow, styles.center)}>What this work taught us</div>
              <h2 className={styles.h2}>
                Custom software earns its cost <em>in the fit.</em>
              </h2>
            </div>
            <div data-reveal className={cx(styles.bodyCopy, styles.center)}>
              <p>
                Off-the-shelf tools are cheaper on day one and often the right answer. They stop
                being the right answer when a business has a genuine operating method of its own and
                spends real money bending a generic product around it, or bending itself around the
                product.
              </p>
              <p>
                A builder who has run 1,700 projects has learned how to run a project. Software
                should encode that knowledge, not override it.
              </p>
            </div>
          </div>
        </section>

        {/* 10. REFLECTION */}
        <section className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.reflect}>
              <blockquote>
                &ldquo;The best measure of an internal platform is whether anyone still keeps a
                private spreadsheet on the side. That is the real adoption metric, and everyone in
                the business knows the honest answer.&rdquo;
              </blockquote>
              <div className={styles.by}>KEYOB — internal reflection on the engagement</div>
            </div>
          </div>
        </section>

        {/* 11. CAPABILITIES */}
        <section className={styles.sct} id="capabilities">
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={styles.eyebrow}>Capabilities involved</div>
              <h2 className={styles.h2}>
                What went into <em>building Builtrax.</em>
              </h2>
            </div>
            <div data-reveal className={styles.caps}>
              {CAP_TAGS.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section className={styles.final}>
          <div className={styles.finalMesh} aria-hidden="true" />
          <div data-reveal className={cx(styles.wrap, styles.in)}>
            <h2>
              Running the business out of <em>spreadsheets?</em>
            </h2>
            <p>
              If your operating method lives in people&apos;s heads and a dozen files, it is worth
              finding out what it would take to put it somewhere better. The conversation costs
              nothing.
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
