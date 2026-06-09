/* eslint-disable no-restricted-syntax --
 * Bespoke client-story page. The visual design (typographic scale, families,
 * per-section em accents) is pixel-faithful to ici.html and is owned by this
 * file's CSS module rather than the shared typography primitives. */

import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { RevealOnScroll } from '@/components/util/RevealOnScroll';
import { siteConfig } from '@/config/site.config';
import styles from './page.module.css';

const SLUG = 'international-coaching-institute';
const TITLE = 'International Coaching Institute Client Story';
const DESCRIPTION =
  'How KEYOB helped International Coaching Institute connect thirteen disconnected systems into one BI platform for trusted ROI, funnel health, sales performance, and live business visibility.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'International Coaching Institute',
    'BI platform',
    'business intelligence',
    'ROAS attribution',
    'funnel health',
    'CRM integration',
    'data consolidation',
    'KEYOB client story',
  ],
  alternates: { canonical: `${siteConfig.url}/stories/${SLUG}` },
  openGraph: {
    type: 'article',
    title: `${TITLE} | KEYOB`,
    description:
      'One source of truth across thirteen disconnected systems — a consolidated BI platform for ROI, funnel health, and sales performance.',
    url: `${siteConfig.url}/stories/${SLUG}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | KEYOB`,
    description:
      'One source of truth across thirteen disconnected systems — a consolidated BI platform.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d1b2a',
};

// --- content data ------------------------------------------------------------

const SOURCES = [
  'Meta Ads',
  'Unbounce',
  'GoHighLevel',
  'Thinkific',
  'Legacy CRM',
  'Xero',
  'Outlook',
  'Facebook',
  'Social',
  'Forms',
  'Calls',
  'Payments',
  'Pipeline',
];

const QUESTIONS = [
  'Is our ad spend really paying back?',
  'Which traffic source converts best?',
  'Who on the sales team is performing strongest?',
  'Where are leads getting stuck?',
  'What is the gap between deals marked as won and cash actually received?',
  'Which number should we trust?',
];

const ISSUES = [
  'Thirteen disconnected systems held different parts of the business picture.',
  'Platform dashboards disagreed with one another.',
  'Leadership had no single trusted KPI view.',
  'Real ROAS was hidden behind incomplete attribution.',
  'Funnel performance was scattered across landing pages, CRM, sales, and finance.',
  'Sales activity and performance were hard to compare objectively.',
  'Lead journeys were fragmented across forms, notes, opportunities, and won deals.',
  'Reporting required manual weekly reconciliation.',
  'Different roles needed different views, but everyone was working from scattered data.',
];

const FLOW: [string, string, string][] = [
  ['01', 'Map the full data picture', 'Catalogue every system, API surface, and metric leadership needed to see.'],
  ['02', 'Design the canonical model', 'Define what a lead, conversion, and revenue mean — and which system to trust for each.'],
  ['03', 'Build the connector layer', 'Engineer API connectors and automated syncs across every source.'],
  ['04', 'Surface what mattered', 'Turn the model into executive dashboards, funnels, and journeys.'],
  ["05", "Make it everyone's tool", 'Role-based access so each team sees the view that fits their work.'],
  ['06', 'Deploy and hand it over', 'Production deployment with scheduled syncs and sync-health visibility.'],
];

type IconKey = 'map' | 'model' | 'conn' | 'dash' | 'journey' | 'sales' | 'role' | 'deploy';

const ICON: Record<IconKey, React.ReactNode> = {
  map: (
    <>
      <path d="M9 4L3 7v13l6-3 6 3 6-3V4l-6 3-6-3z" />
      <path d="M9 4v13M15 7v13" />
    </>
  ),
  model: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="8" y="14" width="8" height="7" rx="1" />
      <path d="M6.5 10v2h11v-2M12 12v2" />
    </>
  ),
  conn: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M9 6h6a3 3 0 013 3v6" />
    </>
  ),
  dash: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </>
  ),
  journey: (
    <>
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
      <path d="M7 12h10M11 8l4 4-4 4" />
    </>
  ),
  sales: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  role: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </>
  ),
  deploy: <path d="M12 2l3 6 6 .8-4.5 4.3L18 20l-6-3.2L6 20l1.5-6.9L3 8.8 9 8z" />,
};

const BUILD: [IconKey, string, string][] = [
  ['map', 'Full Data Mapping', 'Every system, API surface, and metric catalogued before a single dashboard was drawn.'],
  ['model', 'Canonical Data Model', 'One shared definition of leads, conversions, and revenue across the whole business.'],
  ['conn', 'Connector Engineering', 'API connectors and automated syncs that keep every source current.'],
  ['dash', 'Executive BI Dashboards', 'Live KPIs, funnels, and ROI brought together in one executive view.'],
  ['journey', 'Contact Journey View', 'Per-contact timelines across forms, CRM activity, opportunities, and won deals.'],
  ['sales', 'Sales Performance Visibility', 'Leaderboards built on real outbound activity and pipeline data.'],
  ['role', 'Role-Based Access', 'Sales, marketing, operations, managers, and founders each see the right view.'],
  ['deploy', 'Production Deployment', 'Deployed with scheduled syncs and sync-health monitoring built in.'],
];

const OUTCOMES = [
  'One unified platform across thirteen disconnected systems',
  'Live executive overview with KPIs from every connected source',
  'True ROAS measured against CRM and revenue reality',
  'Per-contact journey timelines across forms, CRM activity, opportunities, and won deals',
  'Sales leaderboards based on real outbound activity',
  'Best-converting traffic sources surfaced and ranked',
  'Pipeline depth, average deal size, days-to-close, and funnel-stage visibility',
  'Role-based access for sales, marketing, operations, managers, and founders',
  'Automated data refresh through scheduled connector syncs',
  'Less manual reconciliation and more confidence in daily decision-making',
];

const BEFORE = [
  '13 disconnected data sources',
  'Manual weekly KPI reconciliation',
  'Pixel-only ROAS visibility',
  'Self-reported sales performance',
  'Lead journey scattered across systems',
  'Source attribution inferred and contested',
];
const AFTER = [
  '1 unified BI platform',
  'Live KPI visibility every day',
  'CRM-truth ROAS in real terms',
  'Measured outbound activity and pipeline data',
  'One timeline per contact',
  'Sources surfaced, compared, and ranked',
];

const CAPS = [
  'Data Architecture',
  'Canonical Model Design',
  'API Connector Engineering',
  'BI Platform Development',
  'Dashboard Design',
  'CRM Data Integration',
  'Marketing Attribution',
  'Sales Performance Reporting',
  'Role-Based Access Control',
  'Production Deployment',
  'Automated Sync Workflows',
  'Long-Term Platform Roadmap',
];

// --- structured data ---------------------------------------------------------

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Building one source of truth for a coaching business running on thirteen disconnected systems.',
  description:
    'How KEYOB built a consolidated BI platform for International Coaching Institute, connecting thirteen systems into one trusted view.',
  about: { '@type': 'Organization', name: 'International Coaching Institute' },
  author: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  publisher: {
    '@type': 'Organization',
    name: 'KEYOB',
    logo: { '@type': 'ImageObject', url: `${siteConfig.url}/keyob-mark.png` },
  },
  mainEntityOfPage: `${siteConfig.url}/stories/${SLUG}`,
  articleSection: 'Coaching & Education',
  keywords:
    'BI platform, data integration, marketing attribution, CRM integration, role-based dashboards',
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
      name: 'International Coaching Institute',
      item: `${siteConfig.url}/stories/${SLUG}`,
    },
  ],
};

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

// --- deterministic geometry --------------------------------------------------

// One-liner deterministic PRNG: same index -> same value in [0, 1).
const srand = (i: number) => {
  const v = Math.sin(i * 12.9898) * 43758.5453;
  return ((v - Math.floor(v)) + 1) % 1;
};

// Hero hub: 13 sources around a ring (cx=230, cy=230, r=196).
const HUB_CX = 230;
const HUB_CY = 230;
const HUB_R = 196;
const HUB_INNER = 96;
type HubItem = {
  label: string;
  x: number;
  y: number;
  ix: number;
  iy: number;
  chipW: number;
  delay: string;
};
const hubItems: HubItem[] = SOURCES.map((label, i) => {
  const a = ((-90 + i * (360 / SOURCES.length)) * Math.PI) / 180;
  const x = HUB_CX + HUB_R * Math.cos(a);
  const y = HUB_CY + HUB_R * Math.sin(a);
  return {
    label,
    x,
    y,
    ix: HUB_CX + HUB_INNER * Math.cos(a),
    iy: HUB_CY + HUB_INNER * Math.sin(a),
    chipW: label.length * 5.4 + 16,
    delay: `${(i * 0.12).toFixed(2)}s`,
  };
});

// Situation: 7 floating system cards with conflicting / ok connection paths.
type SitCard = { x: number; y: number; s: string; n: string; warn: boolean; w: number; delay: string };
const SIT_CARDS: SitCard[] = [
  { x: 60,  y: 40,  s: 'Meta Ads',     n: '2.1×',  warn: true,  w: 0, delay: '' },
  { x: 250, y: 30,  s: 'Xero',         n: '$ ?',   warn: false, w: 0, delay: '' },
  { x: 300, y: 150, s: 'GoHighLevel',  n: '318',   warn: false, w: 0, delay: '' },
  { x: 40,  y: 170, s: 'Unbounce',     n: '7.4%',  warn: true,  w: 0, delay: '' },
  { x: 170, y: 120, s: 'Legacy CRM',   n: '291',   warn: false, w: 0, delay: '' },
  { x: 90,  y: 300, s: 'Thinkific',    n: '64%',   warn: false, w: 0, delay: '' },
  { x: 280, y: 300, s: 'Outlook',      n: '—',     warn: true,  w: 0, delay: '' },
].map((c, i) => ({
  ...c,
  w: Math.max(c.s.length * 6 + 24, 70),
  delay: `${(i * 0.2).toFixed(1)}s`,
}));
const SIT_LINKS: [number, number, number, number, boolean][] = [
  [125,  80, 235, 150, false],
  [235, 150, 205, 160, true],
  [205, 160, 125, 210, false],
  [205, 160, 345, 190, false],
  [125, 340, 205, 200, true],
  [345, 340, 345, 190, false],
];

// Approach: 16 scatter lines + 4 concentric rings + 4 orbiting dots.
const ORD_CX = 220;
const ORD_CY = 220;
const ORD_RADII = [55, 95, 135, 175];
type ScatterLine = { x1: number; y1: number; x2: number; y2: number; delay: string; key: number };
const scatterLines: ScatterLine[] = Array.from({ length: 16 }, (_, i) => {
  const a1 = srand(i * 2)     * Math.PI * 2;
  const a2 = srand(i * 2 + 1) * Math.PI * 2;
  const r1 = 40 + srand(i * 2 + 5)  * 150;
  const r2 = 40 + srand(i * 2 + 11) * 150;
  return {
    x1: ORD_CX + r1 * Math.cos(a1),
    y1: ORD_CY + r1 * Math.sin(a1),
    x2: ORD_CX + r2 * Math.cos(a2),
    y2: ORD_CY + r2 * Math.sin(a2),
    delay: `${(i * 0.05).toFixed(2)}s`,
    key: i,
  };
});

// Turning point: 14 × 11 grid of jittered dots, cycling 8 palette colors.
const DOT_PALETTE = ['#01B0F4', '#4FC8F8', '#7ED4F7', '#E8B84B', '#F0681E', '#34D399', '#A78BFA', '#F472B6'];
type FocusDot = { x: number; y: number; color: string; key: string; delay: string };
const FOCUS_W = 440;
const FOCUS_H = 360;
const FOCUS_COLS = 14;
const FOCUS_ROWS = 11;
const focusDots: FocusDot[] = (() => {
  const gx = FOCUS_W / (FOCUS_COLS + 1);
  const gy = FOCUS_H / (FOCUS_ROWS + 1);
  const out: FocusDot[] = [];
  let i = 0;
  for (let r = 0; r < FOCUS_ROWS; r++) {
    for (let c = 0; c < FOCUS_COLS; c++) {
      const x = gx * (c + 1) + (srand(i * 3)     * 10 - 5);
      const y = gy * (r + 1) + (srand(i * 3 + 1) * 10 - 5);
      const color = DOT_PALETTE[Math.floor(srand(i * 3 + 2) * DOT_PALETTE.length)];
      out.push({
        x,
        y,
        color,
        key: `${r}-${c}`,
        delay: `${(srand(i * 5) * 6).toFixed(2)}s`,
      });
      i++;
    }
  }
  return out;
})();

export default function IciStoryPage() {
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
                <Link href="/stories">Client Stories</Link>
                <span>/</span>
                International Coaching Institute
              </div>
              <div
                className={cx(styles.eyebrow, styles.nobar)}
                style={{ marginBottom: 0 }}
              >
                Client Story · Coaching &amp; Education
              </div>
              <h1>
                Building one source of truth for a coaching business running on{' '}
                <em>thirteen disconnected systems.</em>
              </h1>
              <p className={styles.sub}>
                International Coaching Institute was scaling across paid acquisition, landing
                pages, CRM workflows, course delivery, finance, sales activity, and team
                communication. Each tool held part of the truth, but no single system showed
                the whole business clearly.
              </p>
              <p className={styles.sub}>
                KEYOB designed and built a consolidated BI platform that connected thirteen
                separate systems into one trusted view — giving ICI leadership live visibility
                into real ROI, funnel health, sales performance, source attribution, and the
                student journey.
              </p>
            </div>
            <div className={styles.mock}>
              <svg
                viewBox="0 0 460 460"
                aria-label="Thirteen disconnected data sources flowing into one central executive BI dashboard"
              >
                <defs>
                  <radialGradient id="ici-cglow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(25,198,232,.3)" />
                    <stop offset="100%" stopColor="rgba(25,198,232,0)" />
                  </radialGradient>
                </defs>
                <g fill="none" stroke="var(--keyob-cyan)" strokeWidth="1.2" opacity=".5">
                  {hubItems.map((h) => (
                    <path
                      key={`line-${h.label}`}
                      className="travel"
                      d={`M${h.x.toFixed(2)} ${h.y.toFixed(2)} L${h.ix.toFixed(2)} ${h.iy.toFixed(2)}`}
                      style={{ animationDelay: h.delay }}
                    />
                  ))}
                </g>
                <g>
                  {hubItems.map((h) => (
                    <g key={`chip-${h.label}`}>
                      <rect
                        x={h.x - h.chipW / 2}
                        y={h.y - 10}
                        width={h.chipW}
                        height="20"
                        rx="10"
                        fill="rgba(255,255,255,.05)"
                        stroke="rgba(255,255,255,.16)"
                      />
                      <text
                        x={h.x}
                        y={h.y + 4}
                        fontFamily="monospace"
                        fontSize="8"
                        fill="rgba(255,255,255,.72)"
                        textAnchor="middle"
                      >
                        {h.label}
                      </text>
                    </g>
                  ))}
                </g>
                <circle cx="230" cy="230" r="96" fill="url(#ici-cglow)" />
                <g>
                  <rect x="158" y="172" width="144" height="116" rx="12" fill="rgba(10,22,35,.92)" stroke="rgba(25,198,232,.4)" />
                  <rect x="158" y="172" width="144" height="22" rx="12" fill="rgba(255,255,255,.05)" />
                  <text x="170" y="187" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.8)">Executive view</text>
                  <circle className="pulse" cx="291" cy="183" r="3" fill="var(--keyob-cyan)" />
                  <rect x="168" y="202" width="58" height="30" rx="5" fill="rgba(25,198,232,.1)" />
                  <text x="176" y="214" fontFamily="monospace" fontSize="7" fill="#5EE0FF">ROAS</text>
                  <rect x="234" y="202" width="58" height="30" rx="5" fill="rgba(255,255,255,.05)" />
                  <text x="242" y="214" fontFamily="monospace" fontSize="7" fill="rgba(255,255,255,.6)">Funnel</text>
                  <polyline points="170,272 186,260 202,266 218,248 236,254 252,238 270,244 290,230" fill="none" stroke="var(--keyob-cyan)" strokeWidth="2" />
                  <rect x="168" y="240" width="124" height="40" rx="5" fill="none" stroke="rgba(255,255,255,.08)" />
                </g>
                <text x="230" y="316" fontFamily="serif" fontStyle="italic" fontSize="14" fill="#fff" textAnchor="middle">
                  One trusted view
                </text>
              </svg>
            </div>
          </div>
        </header>

        {/* 2. SNAPSHOT */}
        <section data-reveal className={styles.snapshot}>
          <div className={styles.snapGrid}>
            <div className={styles.snap}>
              <div className={styles.lab}>Situation</div>
              <div className={styles.val}>13 disconnected systems</div>
              <p>Every platform held part of the business picture, but none showed the whole.</p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>KEYOB role</div>
              <div className={styles.val}>BI platform design</div>
              <p>Canonical model, connector layer, dashboards, role-based access, and production deployment.</p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Turning point</div>
              <div className={cx(styles.val, styles.azure)}>True ROAS surfaced</div>
              <p>CRM-recorded revenue showed a very different picture from pixel-only attribution.</p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Outcome</div>
              <div className={styles.val}>One trusted view</div>
              <p>Leadership, sales, marketing, and operations could finally work from the same numbers.</p>
            </div>
          </div>
        </section>

        {/* 3. THE SITUATION */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The situation</div>
              <h2 className={styles.h2}>
                Where it started, and <em>what was not working.</em>
              </h2>
            </div>
            <div className={styles.two}>
              <div>
                <div className={styles.bodyCopy}>
                  <p>
                    ICI had built a sophisticated growth engine, but the data behind that growth
                    lived in too many places.
                  </p>
                  <p>
                    Meta Ads showed campaign performance. Unbounce captured landing page
                    activity. GoHighLevel managed lead nurture, calls, and pipeline progression.
                    Thinkific handled course delivery. A legacy CRM held enrolled-student
                    information. Xero carried the financial truth. Outlook, Facebook surfaces,
                    and social scheduling tools added more activity into the picture.
                  </p>
                  <p>
                    Every platform was useful. None of them showed the whole story. Leadership
                    was left trying to answer critical questions manually:
                  </p>
                </div>
                <ul className={styles.qlist}>
                  {QUESTIONS.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
                <div className={styles.bodyCopy}>
                  <p>
                    The dashboards inside each platform told different stories. Weekly
                    reconciliation became a leadership burden — and even then, the numbers were
                    not always trusted.
                  </p>
                </div>
              </div>

              <div className={styles.sitvis} aria-hidden="true">
                <svg
                  viewBox="0 0 440 440"
                  role="img"
                  aria-label="Disconnected systems each reporting a different number, with conflicting and broken links between them"
                >
                  <g fill="none" strokeLinecap="round">
                    {SIT_LINKS.map(([x1, y1, x2, y2, ok], i) => (
                      <path
                        key={`sit-link-${i}`}
                        className={cx(styles.sitLink, ok && styles.ok)}
                        d={`M${x1} ${y1} C ${(x1 + x2) / 2} ${y1} ${(x1 + x2) / 2} ${y2} ${x2} ${y2}`}
                        style={{ animationDelay: `${(i * 0.3).toFixed(1)}s` }}
                      />
                    ))}
                  </g>
                  <g>
                    {SIT_CARDS.map((c, i) => (
                      <g
                        key={c.s}
                        className={cx(styles.sitCard, styles.sitFloat)}
                        style={{
                          animationDelay: c.delay,
                          transformOrigin: `${c.x + c.w / 2}px ${c.y + 24}px`,
                        }}
                      >
                        <rect x={c.x} y={c.y} width={c.w} height="48" rx="10" />
                        <text className={styles.st} x={c.x + 12} y={c.y + 18}>{c.s}</text>
                        <text className={styles.num} x={c.x + 12} y={c.y + 38}>{c.n}</text>
                        <circle
                          cx={c.x + c.w - 14}
                          cy={c.y + 16}
                          r="3"
                          fill={i % 3 === 0 ? 'rgba(224,80,60,.8)' : 'rgba(25,198,232,.7)'}
                        />
                      </g>
                    ))}
                  </g>
                </svg>
                <p className={styles.sitcap}>Thirteen systems. Thirteen versions of the truth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. OPERATIONAL CHALLENGES */}
        <section data-reveal className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>Operational challenges</div>
              <h2 className={styles.h2}>
                Where the friction <em>actually lived.</em>
              </h2>
            </div>
            <div className={styles.icards}>
              {ISSUES.map((t, i) => (
                <div key={t} className={styles.icard}>
                  <div className={styles.n}>{String(i + 1).padStart(2, '0')}</div>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. KEYOB APPROACH */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>KEYOB approach</div>
              <h2 className={styles.h2}>
                KEYOB moved from fragmented systems to{' '}
                <em>a single trusted platform.</em>
              </h2>
            </div>
            <div className={styles.twoCenter}>
              <div className={styles.bodyCopy}>
                <p>
                  KEYOB did not simply build another report. The real problem was not lack of
                  dashboards. The problem was lack of a trusted data model.
                </p>
                <p>
                  The work started by mapping every system ICI depended on, every API surface,
                  and every metric leadership needed to see. Then KEYOB designed a canonical
                  business model: defining what a lead means, what a conversion means, what
                  revenue means, and which system should be trusted for each type of truth.
                </p>
                <p>
                  From there, KEYOB built the connector layer, BI dashboards, role-based
                  access, and production infrastructure needed to turn fragmented data into a
                  daily decision platform.
                </p>
              </div>
              <div data-reveal className={styles.ordervis} aria-hidden="true">
                <svg
                  viewBox="0 0 440 440"
                  role="img"
                  aria-label="Scattered lines resolving into concentric rings with data points moving smoothly around them"
                >
                  <g className={styles.ordScatter} stroke="rgba(25,198,232,.4)" strokeWidth="1" fill="none">
                    {scatterLines.map((l, i) => (
                      <line
                        key={l.key}
                        x1={l.x1.toFixed(0)}
                        y1={l.y1.toFixed(0)}
                        x2={l.x2.toFixed(0)}
                        y2={l.y2.toFixed(0)}
                        style={{ ['--rd' as string]: `${0.1 + (i % 8) * 0.1}s` } as React.CSSProperties}
                      />
                    ))}
                  </g>
                  <g fill="none">
                    {ORD_RADII.map((r, i) => {
                      const circumference = (2 * Math.PI * r).toFixed(2);
                      return (
                        <circle
                          key={`ring-${r}`}
                          className={styles.ordRing}
                          cx={ORD_CX}
                          cy={ORD_CY}
                          r={r}
                          stroke="rgba(25,198,232,.35)"
                          strokeWidth="1.4"
                          style={
                            {
                              ['--c' as string]: circumference,
                              ['--rd' as string]: `${i * 0.15}s`,
                            } as React.CSSProperties
                          }
                        />
                      );
                    })}
                  </g>
                  <circle className={styles.ordCore} cx={ORD_CX} cy={ORD_CY} r="9" fill="var(--keyob-cyan)" />
                  <g>
                    {ORD_RADII.map((r, i) => {
                      const dur = (7 + i * 2.5).toFixed(1);
                      return (
                        <g
                          key={`orbit-${r}`}
                          className={cx(styles.ordOrbit, i % 2 === 1 && styles.rev)}
                          style={{ ['--ord-dur' as string]: `${dur}s` } as React.CSSProperties}
                        >
                          <circle
                            className={styles.ordDot}
                            r={(4 - i * 0.3).toFixed(2)}
                            cx={ORD_CX}
                            cy={ORD_CY - r}
                          />
                        </g>
                      );
                    })}
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.flow}>
              {FLOW.map(([n, t, p]) => (
                <div key={n} className={styles.fstep}>
                  <div className={styles.fn}>{n}</div>
                  <h3>{t}</h3>
                  <p>{p}</p>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. WHAT KEYOB BUILT */}
        <section data-reveal className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>What KEYOB built</div>
              <h2 className={styles.h2}>
                A platform designed around the questions{' '}
                <em>leadership actually asks.</em>
              </h2>
            </div>
            <div className={styles.buildGrid}>
              {BUILD.map(([key, t, p]) => (
                <div key={t} className={styles.bcard}>
                  <div className={styles.ic}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      {ICON[key]}
                    </svg>
                  </div>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. TURNING POINT */}
        <section data-reveal className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The turning point</div>
              <h2 className={styles.h2}>
                The moment leadership saw the gap{' '}
                <em>nobody had been measuring.</em>
              </h2>
            </div>
            <div className={styles.twoCenter}>
              <div className={styles.bodyCopy}>
                <p>
                  The first major insight came when the platform surfaced the real return on
                  Meta ad spend measured against CRM-recorded revenue. Meta&apos;s pixel could
                  only see part of the journey. It could not fully account for what happened
                  off-platform: landing-page submissions, booked calls, CRM progression, won
                  deals, and collected payments.
                </p>
                <p>
                  That meant Meta&apos;s dashboard was undercounting the true result. Once
                  KEYOB connected the data, ICI could see that the real return was
                  significantly higher than what the ad platform had been reporting. This
                  changed the business conversation from uncertainty to confidence. It was not
                  new data. It was already there. KEYOB simply connected it into one view
                  leadership could trust.
                </p>
              </div>
              <div className={styles.focusvis} aria-hidden="true">
                <svg
                  viewBox="0 0 440 360"
                  role="img"
                  aria-label="A field of small coloured data points, where individual points are highlighted one at a time as the platform brings each into focus"
                >
                  <g>
                    {focusDots.map((d) => (
                      <circle
                        key={d.key}
                        className={styles.fdot}
                        cx={d.x.toFixed(1)}
                        cy={d.y.toFixed(1)}
                        r="3"
                        fill={d.color}
                        opacity="0.55"
                        style={{ ['--fd-delay' as string]: d.delay } as React.CSSProperties}
                      />
                    ))}
                  </g>
                </svg>
                <p className={styles.sitcap}>Every data point, finally visible — and brought into focus.</p>
              </div>
            </div>
            <div data-reveal className={styles.compare}>
              <div className={cx(styles.cmp, styles.pixel)}>
                <div className={styles.tag}>Pixel-only view</div>
                <h4>Partial attribution</h4>
                <p className={styles.desc}>
                  The ad platform could only see on-platform signals — not booked calls, CRM
                  progression, won deals, or collected payments.
                </p>
                <div className={styles.cmpbar}><i /></div>
                <div className={styles.barlab}>Reported return (incomplete)</div>
              </div>
              <div className={cx(styles.cmp, styles.truth)}>
                <div className={styles.tag}>CRM-truth view</div>
                <h4>Full-journey attribution</h4>
                <p className={styles.desc}>
                  Connecting ad spend to CRM-recorded revenue revealed a return significantly
                  higher than the pixel alone reported.
                </p>
                <div className={styles.cmpbar}><i /></div>
                <div className={styles.barlab}>True return (connected data)</div>
              </div>
            </div>
            <p className={styles.compareNote}>
              Illustrative — relative comparison, not actual figures.
            </p>
          </div>
        </section>

        {/* 8. OUTCOME */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The outcome</div>
              <h2 className={styles.h2}>
                One trusted view of <em>the entire business.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                ICI gained a consolidated BI platform that gives leadership and teams live
                access to the numbers that matter. Instead of reconciling reports manually, the
                team can log in and see the business clearly.
              </p>
            </div>
            <ul className={styles.outcomes}>
              {OUTCOMES.map((o) => (
                <li key={o}>
                  <svg className={styles.c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. BEFORE / AFTER */}
        <section data-reveal className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>Before &amp; after</div>
              <h2 className={styles.h2}>
                From scattered dashboards to <em>one operating view.</em>
              </h2>
            </div>
            <div className={styles.ba}>
              <div className={cx(styles.baCol, styles.before)}>
                <div className={styles.baHead}>Before</div>
                {BEFORE.map((b) => (
                  <div key={b} className={styles.baRow}>
                    <svg className={styles.m} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <div className={cx(styles.baCol, styles.after)}>
                <div className={styles.baHead}>After</div>
                {AFTER.map((a) => (
                  <div key={a} className={styles.baRow}>
                    <svg className={styles.m} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10. HUMAN TRUST */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div
              className={styles.sctHead}
              style={{ textAlign: 'center', maxWidth: '60ch', margin: '0 auto 40px' }}
            >
              <div
                className={cx(styles.eyebrow, styles.center, styles.nobar)}
                style={{ justifyContent: 'center' }}
              >
                Human trust
              </div>
              <h2 className={styles.h2} style={{ marginTop: 14 }}>
                Some businesses do not need another report. They need{' '}
                <em>one number they can trust.</em>
              </h2>
            </div>
            <div
              className={styles.bodyCopy}
              style={{ maxWidth: '64ch', margin: '0 auto 40px', textAlign: 'center' }}
            >
              <p>
                ICI was not short of tools. It was short of clarity. The value of the platform
                was not just technical integration. It gave leadership confidence. It turned
                scattered dashboards into one operating view. It gave every team member a
                clearer understanding of their part of the business. This is the kind of work
                KEYOB is built for: connecting systems, clarifying truth, and helping leadership
                make better decisions from the data already inside the business.
              </p>
            </div>
            <div className={styles.reflect}>
              <blockquote>
                “Some businesses do not need another report. They need to see one number they
                trust, on one screen, every day.”
              </blockquote>
              <div className={styles.by}>KEYOB — internal reflection on the engagement</div>
            </div>
          </div>
        </section>

        {/* 11. CAPABILITIES */}
        <section data-reveal className={cx(styles.sct, styles.alt)} id="capabilities">
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>Capabilities involved</div>
              <h2 className={styles.h2}>
                Capabilities involved in <em>this engagement.</em>
              </h2>
            </div>
            <div className={styles.caps}>
              {CAPS.map((c) => (
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
              Is your business making decisions <em>on the wrong number?</em>
            </h2>
            <p>
              If your data lives in a dozen places, your dashboards disagree with each other,
              and leadership is still reconciling spreadsheets to understand what is working,
              the cost of not knowing compounds every week. KEYOB designs and builds platforms
              that turn fragmented systems into one trusted view of the business.
            </p>
            <div className={styles.finalCta}>
              <Link href="/contact" className={styles.btn}>
                Talk to KEYOB <span className={styles.arr}>→</span>
              </Link>
              <Link href="/what-we-do" className={styles.btnGhost}>
                Explore what we do
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
