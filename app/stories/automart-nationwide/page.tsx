/* eslint-disable no-restricted-syntax --
 * Bespoke client-story page. The visual design (typographic scale, families,
 * per-section em accents) is pixel-faithful to automart-story.html and is
 * owned by this file's CSS module rather than the shared typography
 * primitives. */

import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { RevealOnScroll } from '@/components/util/RevealOnScroll';
import { siteConfig } from '@/config/site.config';
import styles from './page.module.css';

const SLUG = 'automart-nationwide';
const TITLE = 'Automart Nationwide Client Story';
const DESCRIPTION =
  "How KEYOB helped Automart Nationwide connect customer request channels into one intake and routing layer, improving SLA visibility, backlog control, and service capacity while extending an automotive ERP partnership.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Automart Nationwide',
    'customer request management',
    'workflow automation',
    'SLA tracking',
    'automotive ERP',
    'intake automation',
    'routing rules',
    'service operations',
    'KEYOB client story',
  ],
  alternates: { canonical: `${siteConfig.url}/stories/${SLUG}` },
  openGraph: {
    type: 'article',
    title: `${TITLE} | KEYOB`,
    description:
      'From scattered customer requests to a connected service operation — one intake and routing layer across five channels.',
    url: `${siteConfig.url}/stories/${SLUG}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | KEYOB`,
    description:
      'From scattered customer requests to a connected service operation across five channels.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d1b2a',
};

// --- challenge cards ----------------------------------------------------------

type IconKey =
  | 'channels'
  | 'triage'
  | 'rules'
  | 'sla'
  | 'backlog'
  | 'visibility'
  | 'erp';

const ICON: Record<IconKey, React.ReactNode> = {
  channels: <path d="M4 7h16M4 12h16M4 17h10" />,
  triage: <path d="M3 6h18M7 12h10M10 18h4" />,
  rules: <path d="M9 11l3 3L22 4M3 12a9 9 0 0018 0" />,
  sla: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  backlog: <path d="M4 6h16v4H4zM4 14h16v4H4z" />,
  visibility: (
    <>
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  erp: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
};

const ISSUES: [IconKey, string][] = [
  ['channels', 'Requests arriving across five separate channels, with no central queue.'],
  ['triage', 'Senior staff spending more time triaging than resolving.'],
  ['rules', "Routing rules living in people's heads, applied inconsistently under load."],
  ['sla', 'SLAs slipping because nothing measured them in one place.'],
  ['backlog', 'No visibility into the size or age of the backlog at any point in time.'],
  ['visibility', 'Customer service activity not fully connected to the wider ERP-driven operation.'],
  ['erp', 'Growth creating more coordination pressure instead of more clarity.'],
];

const FLOW: [string, string, string][] = [
  ['01', 'Capture', 'Bring requests from all major channels into one intake flow.'],
  ['02', 'Classify', 'Identify request type, source, urgency, and handling path.'],
  ['03', 'Route', 'Send the request to the right person or team based on business rules.'],
  ['04', 'Queue', 'Show every pending item on a shared operational board.'],
  ['05', 'Escalate', 'Trigger automatic escalation when a request ages past its target.'],
  ['06', 'Measure', 'Track request status, backlog, ownership, and SLA movement.'],
];

const BUILD: [string, string][] = [
  ['Unified intake layer', 'A single structure above email, forms, phone notes, third-party platforms, and shared inbox activity.'],
  ['Smart request classification', 'Rules to identify what each request is, where it came from, and how it should be handled.'],
  ['Business routing logic', 'Policies encoded into the system so work reaches the right owner consistently.'],
  ['Live operational board', 'A real-time view of queue size, request age, ownership, status, and next action.'],
  ['SLA & aging visibility', 'Clear visibility into which items are on track, aging, or requiring escalation.'],
  ['Automatic escalation', 'Aging requests trigger escalation without waiting for manual follow-up.'],
  ['ERP-aligned operation', "The service layer works alongside Automart's KEYOB-built automotive-parts ERP foundation."],
];

const OUTCOMES = [
  'One central intake layer across five channels',
  'Faster and more consistent request routing',
  'Less senior staff time spent on triage',
  'Live backlog visibility',
  'Request aging and SLA tracking',
  'Automatic escalation for delayed items',
  'Stronger connection between customer service and ERP-driven operations',
  '42% increase in customer request handling capacity without adding management overhead',
];

const STOPS = [
  'ERP foundation',
  'Intake automation',
  'Routing logic',
  'Live board',
  'SLA visibility',
  'Service capacity',
];

const AI_STEPS = ['Intake', 'Classification', 'Routing', 'Escalation', 'Dashboard'];

const CAPS = [
  'Automotive ERP',
  'Customer Request Management',
  'Workflow Automation',
  'Intake Layer Design',
  'Routing Rules',
  'SLA Tracking',
  'Live Operational Boards',
  'Backlog Visibility',
  'Escalation Logic',
  'ERP Integration',
  'Service Operations',
  'AI Operations Strategy',
  'Business Process Automation',
];

// --- structured data ---------------------------------------------------------

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'From scattered customer requests to a connected service operation.',
  description:
    'How KEYOB built an intake and routing layer for Automart Nationwide, unifying five request channels and improving SLA visibility and service capacity.',
  about: {
    '@type': 'Organization',
    name: 'Automart Nationwide',
  },
  author: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  publisher: {
    '@type': 'Organization',
    name: 'KEYOB',
    logo: { '@type': 'ImageObject', url: `${siteConfig.url}/keyob-mark.png` },
  },
  mainEntityOfPage: `${siteConfig.url}/stories/${SLUG}`,
  articleSection: 'Aftermarket Auto Parts',
  keywords:
    'customer request management, workflow automation, SLA tracking, automotive ERP, intake automation',
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
      name: 'Automart Nationwide',
      item: `${siteConfig.url}/stories/${SLUG}`,
    },
  ],
};

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

// --- precomputed geometry ---------------------------------------------------

// Situation channels: five chips flowing into a loose unowned hub (350,180).
type ChanItem = { label: string; x: number; y: number; w: number; lineSx: number };
const CHANNELS_DATA: ChanItem[] = (() => {
  const ch = ['Email', 'Web form', 'Phone note', '3rd-party', 'Shared inbox'];
  const pts: [number, number][] = [[40, 60], [40, 130], [40, 200], [40, 270], [150, 320]];
  return ch.map((label, i) => {
    const w = label.length * 6.2 + 22;
    const [x, y] = pts[i];
    return { label, x, y, w, lineSx: x + w };
  });
})();

// Partnership pathway: 6 stops evenly spaced from x=90 to x=990.
const PATH_X0 = 90;
const PATH_X1 = 990;
const PATH_GAP = (PATH_X1 - PATH_X0) / (STOPS.length - 1);

// AI ops spine: 5 nodes vertically at x=110, y stride = 56.
const AI_X = 110;
const AI_Y0 = 30;
const AI_STRIDE = 56;

export default function AutomartStoryPage() {
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
                Automart Nationwide
              </div>
              <div
                className={cx(styles.eyebrow, styles.amber, styles.nobar)}
                style={{ marginBottom: 0 }}
              >
                Client Story · Aftermarket Auto Parts · USA
              </div>
              <h1>
                From scattered requests to{' '}
                <em>a connected service operation.</em>
              </h1>
              <p className={styles.sub}>
                Automart Nationwide operates in a demanding aftermarket auto parts environment,
                where customers need fast answers, accurate part handling, reliable delivery
                coordination, and clear communication. The business already trusted KEYOB&apos;s
                industry-specific ERP foundation for automotive parts operations, but as
                customer activity grew, a new challenge appeared: inbound requests were arriving
                from too many places, and the team needed a smarter way to manage them.
              </p>
              <p className={styles.sub}>
                KEYOB helped Automart move beyond scattered communication by building a single
                intake and routing layer that brought requests, rules, queues, ownership, and
                escalation into one connected operational view.
              </p>
            </div>
            <div className={styles.mock}>
              <svg
                viewBox="0 0 520 416"
                aria-label="Five request channels routing into one intake layer and a live operational board"
              >
                <defs>
                  <linearGradient id="am-scr" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#11263b" />
                    <stop offset="100%" stopColor="#0d1b2a" />
                  </linearGradient>
                </defs>
                {/* channel chips */}
                <g fontFamily="monospace" fontSize="9">
                  <g>
                    <rect x="6" y="40" width="92" height="26" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.14)" />
                    <text x="52" y="57" fill="rgba(255,255,255,.7)" textAnchor="middle">Email</text>
                  </g>
                  <g>
                    <rect x="6" y="100" width="92" height="26" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.14)" />
                    <text x="52" y="117" fill="rgba(255,255,255,.7)" textAnchor="middle">Web form</text>
                  </g>
                  <g>
                    <rect x="6" y="160" width="92" height="26" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.14)" />
                    <text x="52" y="177" fill="rgba(255,255,255,.7)" textAnchor="middle">Phone note</text>
                  </g>
                  <g>
                    <rect x="6" y="220" width="92" height="26" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.14)" />
                    <text x="52" y="237" fill="rgba(255,255,255,.7)" textAnchor="middle">3rd-party</text>
                  </g>
                  <g>
                    <rect x="6" y="280" width="92" height="26" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.14)" />
                    <text x="52" y="297" fill="rgba(255,255,255,.7)" textAnchor="middle">Shared inbox</text>
                  </g>
                </g>
                {/* routing lines into the intake hub */}
                <g fill="none" stroke="var(--keyob-cyan)" strokeWidth="1.5" strokeDasharray="4 4" opacity=".6">
                  <path className="travel" d="M98 53 C150 53 150 175 196 175" />
                  <path className="travel" d="M98 113 C150 113 150 175 196 175" style={{ animationDelay: '.5s' }} />
                  <path className="travel" d="M98 173 L196 175" style={{ animationDelay: '1s' }} />
                  <path className="travel" d="M98 233 C150 233 150 175 196 175" style={{ animationDelay: '1.5s' }} />
                  <path className="travel" d="M98 293 C150 293 150 175 196 175" style={{ animationDelay: '2s' }} />
                </g>
                {/* intake hub */}
                <circle cx="214" cy="175" r="22" fill="var(--keyob-amber)" />
                <circle className="pulse" cx="214" cy="175" r="32" fill="none" stroke="#FF8A4C" strokeOpacity=".5" />
                <text x="214" y="172" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">INTAKE</text>
                <text x="214" y="183" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">LAYER</text>
                {/* arrow */}
                <path d="M236 175 L268 175" stroke="var(--keyob-cyan)" strokeWidth="1.5" />
                <path d="M264 170 L270 175 L264 180" fill="none" stroke="var(--keyob-cyan)" strokeWidth="1.5" />
                {/* operational board */}
                <rect x="278" y="60" width="234" height="296" rx="12" fill="#0a1623" stroke="rgba(255,255,255,.12)" />
                <rect x="278" y="60" width="234" height="30" rx="12" fill="rgba(255,255,255,.04)" />
                <text x="296" y="80" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,.8)">Operational board</text>
                <circle className="pulse" cx="498" cy="75" r="4" fill="var(--keyob-cyan)" />
                {/* queue rows */}
                <g>
                  <g>
                    <rect x="294" y="104" width="202" height="34" rx="7" fill="rgba(255,255,255,.05)" />
                    <circle cx="308" cy="121" r="4" fill="var(--keyob-cyan)" />
                    <rect x="322" y="113" width="90" height="6" rx="3" fill="rgba(255,255,255,.35)" />
                    <rect x="322" y="124" width="60" height="5" rx="2.5" fill="rgba(255,255,255,.2)" />
                    <rect x="452" y="114" width="34" height="14" rx="7" fill="rgba(25,198,232,.2)" />
                  </g>
                  <g>
                    <rect x="294" y="146" width="202" height="34" rx="7" fill="rgba(255,255,255,.05)" />
                    <circle cx="308" cy="163" r="4" fill="#5EE0FF" />
                    <rect x="322" y="155" width="80" height="6" rx="3" fill="rgba(255,255,255,.35)" />
                    <rect x="322" y="166" width="70" height="5" rx="2.5" fill="rgba(255,255,255,.2)" />
                    <rect x="452" y="156" width="34" height="14" rx="7" fill="rgba(25,198,232,.2)" />
                  </g>
                  <g>
                    <rect x="294" y="188" width="202" height="34" rx="7" fill="rgba(240,104,30,.08)" />
                    <circle cx="308" cy="205" r="4" fill="var(--keyob-amber)" />
                    <rect x="322" y="197" width="86" height="6" rx="3" fill="rgba(255,255,255,.35)" />
                    <rect x="322" y="208" width="54" height="5" rx="2.5" fill="rgba(255,255,255,.2)" />
                    <rect x="446" y="198" width="40" height="14" rx="7" fill="rgba(240,104,30,.25)" />
                    <text x="466" y="208" fontFamily="monospace" fontSize="7" fill="#FF8A4C" textAnchor="middle">SLA</text>
                  </g>
                  <g>
                    <rect x="294" y="230" width="202" height="34" rx="7" fill="rgba(255,255,255,.05)" />
                    <circle cx="308" cy="247" r="4" fill="var(--keyob-cyan)" />
                    <rect x="322" y="239" width="74" height="6" rx="3" fill="rgba(255,255,255,.35)" />
                    <rect x="322" y="250" width="64" height="5" rx="2.5" fill="rgba(255,255,255,.2)" />
                    <rect x="452" y="240" width="34" height="14" rx="7" fill="rgba(25,198,232,.2)" />
                  </g>
                  <g>
                    <rect x="294" y="272" width="202" height="34" rx="7" fill="rgba(255,255,255,.05)" />
                    <circle cx="308" cy="289" r="4" fill="#5EE0FF" />
                    <rect x="322" y="281" width="88" height="6" rx="3" fill="rgba(255,255,255,.35)" />
                    <rect x="322" y="292" width="58" height="5" rx="2.5" fill="rgba(255,255,255,.2)" />
                    <rect x="452" y="282" width="34" height="14" rx="7" fill="rgba(25,198,232,.2)" />
                  </g>
                </g>
                {/* footer mini-stats */}
                <g>
                  <rect x="294" y="318" width="62" height="26" rx="6" fill="rgba(25,198,232,.1)" />
                  <text x="325" y="335" fontFamily="monospace" fontSize="9" fill="#5EE0FF" textAnchor="middle">Queue 12</text>
                  <rect x="364" y="318" width="62" height="26" rx="6" fill="rgba(255,255,255,.05)" />
                  <text x="395" y="335" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,.6)" textAnchor="middle">Aging 2</text>
                  <rect x="434" y="318" width="62" height="26" rx="6" fill="rgba(240,104,30,.14)" />
                  <text x="465" y="335" fontFamily="monospace" fontSize="9" fill="#FF8A4C" textAnchor="middle">Esc 1</text>
                </g>
              </svg>
            </div>
          </div>
        </header>

        {/* 2. SNAPSHOT */}
        <section data-reveal className={styles.snapshot}>
          <div className={styles.snapGrid}>
            <div className={styles.snap}>
              <div className={styles.lab}>Industry</div>
              <div className={styles.val}>Aftermarket auto parts</div>
              <p>Large product variety, fast customer response expectations, and complex daily operations.</p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Starting point</div>
              <div className={styles.val}>Existing ERP partnership</div>
              <p>
                Automart already used KEYOB&apos;s automotive-parts ERP foundation to support
                core operations.
              </p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Challenge</div>
              <div className={cx(styles.val, styles.amber)}>Five request channels</div>
              <p>Requests arrived through email, web forms, phone notes, third-party platforms, and shared inboxes.</p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Outcome</div>
              <div className={cx(styles.val, styles.azure)}>42% more capacity</div>
              <p>Automart handled more customer requests without adding management overhead.</p>
            </div>
          </div>
        </section>

        {/* 3. THE SITUATION */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={cx(styles.eyebrow, styles.amber)}>The situation</div>
              <h2 className={styles.h2}>
                Where it started, and{' '}
                <em className={styles.amber}>what was not working.</em>
              </h2>
            </div>
            <div className={styles.two}>
              <div className={styles.bodyCopy}>
                <p>
                  Inbound requests were arriving in five different places: email, web forms,
                  phone notes, third-party platforms, and a shared inbox no one fully owned.
                  Each channel made sense on its own, but together they created operational
                  noise.
                </p>
                <p>
                  Senior staff spent more time triaging requests than resolving them. Routing
                  rules lived in people&apos;s heads. Under pressure, requests could be delayed,
                  duplicated, missed, or escalated too late. SLAs slipped quietly because
                  nothing was measuring them in one place.
                </p>
                <p>
                  The team did not need more effort. They needed one controlled way to see,
                  route, and manage the work.
                </p>
              </div>
              <div className={styles.chanvis}>
                <svg
                  viewBox="0 0 460 360"
                  aria-label="Five request channels flowing into a shared inbox with no central queue"
                >
                  <g>
                    {CHANNELS_DATA.map((c) => (
                      <g key={c.label}>
                        <rect
                          className={styles.chNode}
                          x={c.x}
                          y={c.y - 15}
                          width={c.w}
                          height="30"
                          rx="8"
                        />
                        <text
                          className={styles.chLab}
                          x={c.x + c.w / 2}
                          y={c.y + 4}
                          textAnchor="middle"
                        >
                          {c.label}
                        </text>
                      </g>
                    ))}
                  </g>
                  <g>
                    {CHANNELS_DATA.map((c) => (
                      <path
                        key={`line-${c.label}`}
                        className={styles.chLine}
                        d={`M${c.lineSx} ${c.y} C ${c.lineSx + 60} ${c.y} 280 180 290 180`}
                      />
                    ))}
                  </g>
                  <circle
                    className={styles.chHub}
                    cx="330"
                    cy="180"
                    r="46"
                    strokeDasharray="5 5"
                  />
                  <text className={styles.chHubLab} x="330" y="176" textAnchor="middle">
                    no central
                  </text>
                  <text className={styles.chHubLab} x="330" y="190" textAnchor="middle">
                    queue
                  </text>
                  <g className={styles.chWarn}>
                    <circle cx="300" cy="120" r="3" />
                    <circle cx="372" cy="150" r="3" />
                    <circle cx="356" cy="226" r="3" />
                  </g>
                </svg>
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
              {ISSUES.map(([key, text]) => (
                <div key={key} className={styles.icard}>
                  <div className={styles.ic}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      {ICON[key]}
                    </svg>
                  </div>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. THE APPROACH */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The approach</div>
              <h2 className={styles.h2}>
                One intake layer <em>above the existing channels.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                KEYOB did not ask Automart&apos;s team to simply work faster. The problem was
                not effort. It was coordination.
              </p>
              <p>
                We built one intake and routing layer above the existing channels. Every request
                was captured, classified, routed, queued, and made visible the moment it landed.
                The system allowed Automart to keep familiar intake sources while bringing
                control, ownership, and measurement into one operational layer. Routing rules
                now encode the business policies that used to live in someone&apos;s head.
                Escalations happen automatically when an item ages past its target.
              </p>
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
                The system started carrying <em>the coordination load.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                The new intake and routing layer gave Automart a controlled way to manage
                customer service activity without adding unnecessary management overhead. It
                turned scattered requests into structured work. It turned informal routing into
                system logic. It turned hidden backlog into visible operational data.
              </p>
            </div>
            <div className={styles.buildGrid}>
              {BUILD.map(([t, p]) => (
                <div key={t} className={styles.bcard}>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. OUTCOME */}
        <section data-reveal className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The outcome</div>
              <h2 className={styles.h2}>
                More capacity without <em>more management overhead.</em>
              </h2>
            </div>
            <div className={styles.outcomeGrid}>
              <div>
                <div className={styles.bodyCopy}>
                  <p>
                    The team did not have to work faster. They stopped losing time to
                    coordination — and that gave them back enough capacity to handle 42% more
                    customer requests without adding management overhead.
                  </p>
                  <p>
                    Senior staff no longer had to act as the routing engine. The queue became
                    visible. Ownership became clearer. Escalation became automatic. Service
                    activity became easier to manage.
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
              <aside className={styles.statcard}>
                <div className={styles.big}>
                  42<span className={styles.pct}>%</span>
                </div>
                <div className={styles.cap}>More request capacity</div>
                <div className={styles.sub}>
                  Automart handled 42% more customer requests without adding management
                  overhead.
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* 8. BIGGER PARTNERSHIP STORY */}
        <section data-reveal className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The bigger partnership story</div>
              <h2 className={styles.h2}>
                The partnership moved <em>where the business needed it.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                Automart already used KEYOB&apos;s ERP system designed specifically for
                automotive parts operations. That system supported the operational foundation:
                parts, inventory, sales, purchasing, warehouse workflows, delivery coordination,
                reporting, and business rules.
              </p>
              <p>
                As the business grew, the next need emerged in customer service operations.
                KEYOB helped extend the relationship from ERP foundation into request routing,
                queue visibility, SLA management, and service capacity. A client may enter
                through ERP, CRM, automation, AI workflows, website, branding, dashboards, or
                integration. Once the relationship begins, the work can move in any direction
                the business needs.
              </p>
            </div>
            <div className={styles.pathvis}>
              <svg
                viewBox="0 0 1080 130"
                aria-label="ERP foundation leading into intake automation, routing logic, live board, SLA visibility and service capacity"
              >
                <path className={styles.pathLine} d="M70 65 L1010 65" />
                <g>
                  {STOPS.map((s, i) => {
                    const x = PATH_X0 + i * PATH_GAP;
                    const entry = i === 0;
                    return (
                      <g key={s}>
                        <circle
                          cx={x}
                          cy="65"
                          r={entry ? 12 : 8}
                          fill={entry ? 'var(--keyob-amber)' : 'var(--bg-dark-2)'}
                          stroke={entry ? 'none' : 'var(--keyob-cyan)'}
                          strokeWidth="1.5"
                        />
                        <text
                          x={x}
                          y={i % 2 ? 100 : 42}
                          textAnchor="middle"
                          fontFamily="monospace"
                          fontSize="11"
                          fill="rgba(255,255,255,.85)"
                        >
                          {s}
                        </text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>
            <div className={styles.pathTag}>Enter at any stage. Move in any direction.</div>
          </div>
        </section>

        {/* 9. AI OPERATIONS PERSPECTIVE */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={cx(styles.eyebrow, styles.amber)}>AI operations perspective</div>
              <h2 className={styles.h2}>
                AI works best when{' '}
                <em className={styles.amber}>the process is clear.</em>
              </h2>
            </div>
            <div className={styles.two}>
              <div className={styles.bodyCopy}>
                <p>
                  Most business owners know AI could help them. What they are missing is someone
                  who can show them exactly where — and then build it properly.
                </p>
                <p>
                  For Automart, the opportunity was not to add AI for show. It was to identify
                  the part of the operation where coordination was consuming time, where rules
                  could be structured, and where automation could return capacity to the team.
                </p>
                <p>
                  This is the practical side of AI operations: making work visible, applying
                  rules consistently, escalating at the right time, and helping people focus on
                  the work that actually needs human judgment.
                </p>
              </div>
              <div className={styles.aivis}>
                <svg
                  viewBox="0 0 460 300"
                  aria-label="A grounded workflow: intake, classification, routing, escalation and dashboard visibility"
                >
                  <g>
                    {AI_STEPS.map((s, i) => {
                      if (i === AI_STEPS.length - 1) return null;
                      const y = AI_Y0 + i * AI_STRIDE;
                      return (
                        <path
                          key={`link-${s}`}
                          className={styles.aiLink}
                          d={`M${AI_X} ${y + 18} L${AI_X} ${y + 38}`}
                        />
                      );
                    })}
                  </g>
                  <g>
                    {AI_STEPS.map((s, i) => {
                      const y = AI_Y0 + i * AI_STRIDE;
                      const w = s.length * 7 + 40;
                      return (
                        <g key={s}>
                          <rect
                            className={styles.aiNode}
                            x={AI_X - w / 2}
                            y={y}
                            width={w}
                            height="34"
                            rx="9"
                          />
                          <text
                            className={styles.aiLab}
                            x={AI_X}
                            y={y + 22}
                            textAnchor="middle"
                          >
                            {s}
                          </text>
                        </g>
                      );
                    })}
                  </g>
                  <circle className={styles.aiDot} r="3.5" cx={AI_X} cy={AI_Y0}>
                    <animate
                      attributeName="cy"
                      values={`${AI_Y0};${AI_Y0 + (AI_STEPS.length - 1) * AI_STRIDE + 28};${AI_Y0}`}
                      dur="4s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="1;1;0;1"
                      keyTimes="0;0.45;0.5;1"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 10. CAPABILITIES */}
        <section data-reveal className={cx(styles.sct, styles.alt)} id="capabilities">
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>Capabilities involved</div>
              <h2 className={styles.h2}>
                Capabilities involved in <em>this engagement.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                The engagement combined KEYOB&apos;s automotive-parts ERP knowledge with
                workflow automation, service operations design, routing rules, live visibility,
                and practical AI operations thinking.
              </p>
            </div>
            <div className={styles.caps}>
              {CAPS.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 11. FINAL CTA */}
        <section data-reveal className={styles.final}>
          <div className={styles.finalMesh} aria-hidden="true" />
          <div className={cx(styles.wrap, styles.in)}>
            <h2>
              Are customer requests moving faster than{' '}
              <em>your systems can manage?</em>
            </h2>
            <p>
              KEYOB helps businesses turn scattered requests, manual routing, and hidden
              backlog into connected operational systems. Whether you need ERP, CRM, workflow
              automation, AI operations, or real-time dashboards, we can help you identify the
              right place to start.
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
