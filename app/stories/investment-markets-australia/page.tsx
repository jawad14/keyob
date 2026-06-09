/* eslint-disable no-restricted-syntax --
 * Bespoke client-story page. The visual design (typographic scale, families,
 * per-section em accents) is pixel-faithful to im_launch.html and is owned by
 * this file's CSS module rather than the shared typography primitives. The
 * lint rule that mandates <H1>/<Text>/etc. is intentionally bypassed here. */

import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { RevealOnScroll } from '@/components/util/RevealOnScroll';
import { siteConfig } from '@/config/site.config';
import styles from './page.module.css';

const SLUG = 'investment-markets-australia';
const TITLE = 'Investment Markets Australia Client Story';
const DESCRIPTION =
  'How KEYOB helped Investment Markets Australia stabilize, modernize, and prepare its investor portal for launch through QA, Redux analysis, dependency upgrades, issue resolution, and UX improvements.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Investment Markets Australia',
    'launch readiness',
    'QA',
    'Redux',
    'dependency upgrades',
    'portal stabilization',
    'investor platform',
    'AI consulting Australia',
    'KEYOB client story',
  ],
  alternates: { canonical: `${siteConfig.url}/stories/${SLUG}` },
  openGraph: {
    type: 'article',
    title: `${TITLE} | KEYOB`,
    description:
      'From launch risk to launch-ready: QA, Redux analysis, dependency upgrades, issue resolution and UX improvements for an investor platform.',
    url: `${siteConfig.url}/stories/${SLUG}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | KEYOB`,
    description:
      'From launch risk to launch-ready for an investor platform — QA, Redux analysis, dependency upgrades.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d1b2a',
};

const PROBLEMS = [
  'Thousands of unresolved portal issues close to launch',
  'Broken or incomplete user flows',
  'Redux / state management issues affecting consistency',
  'Missing links and disconnected areas of the portal',
  'Outdated or unstable dependencies',
  'Usability problems making the platform harder to use',
  'Admin and manageability challenges',
  'A launch timeline that could not keep moving indefinitely',
];

const WORK: [string, string, string][] = [
  [
    '01',
    'Structured QA',
    'We tested the portal across user journeys, screens, flows, and expected behaviors to identify the issues that could block launch or reduce user confidence.',
  ],
  [
    '02',
    'Redux analysis',
    'We reviewed state management issues that were causing inconsistent behavior and improved how the portal handled data, UI state, and user interactions.',
  ],
  [
    '03',
    'Issue resolution',
    'We prioritized and resolved defects across the portal, focusing first on problems that affected launch readiness, user experience, and platform stability.',
  ],
  [
    '04',
    'Dependency upgrades',
    'We upgraded and stabilized key dependencies to reduce technical risk and improve maintainability.',
  ],
  [
    '05',
    'Missing link & flow fixes',
    'We connected incomplete journeys, repaired broken links, and improved navigation so users could move through the portal more naturally.',
  ],
  [
    '06',
    'Portal modernization',
    'We improved the overall usability and manageability of the portal, making it easier for users to interact with and easier for the client team to operate.',
  ],
];

const OUTCOMES = [
  'Launch readiness improved within the required timeline',
  'Critical portal issues were identified, prioritized, and resolved',
  'User journeys became clearer and easier to follow',
  'Missing links and broken flows were connected',
  'Dependencies were upgraded and stabilized',
  'Redux / state management issues were analyzed and improved',
  'The portal became easier for users and administrators to manage',
  'The client gained confidence moving into launch',
];

const READY: [string, number, number][] = [
  ['Stability',         32, 92],
  ['Usability',         40, 88],
  ['Flow integrity',    28, 90],
  ['Dependencies',      45, 94],
  ['State management',  38, 86],
  ['Manageability',     42, 89],
];

const CAPS = [
  'QA & Regression Testing',
  'Redux Analysis',
  'Frontend Stabilization',
  'Dependency Upgrades',
  'Portal Modernization',
  'User Journey Fixes',
  'Broken Link Resolution',
  'Launch Readiness',
  'UX Improvements',
  'Financial Platform Support',
];

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Making launch possible for an investment platform that could not afford to miss its moment.',
  description:
    'How KEYOB helped Investment Markets Australia stabilize, modernize, and prepare its investor portal for launch.',
  about: {
    '@type': 'Organization',
    name: 'Investment Markets Australia',
    url: 'https://www.investmentmarkets.com.au/',
  },
  author: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  publisher: {
    '@type': 'Organization',
    name: 'KEYOB',
    logo: { '@type': 'ImageObject', url: `${siteConfig.url}/keyob-mark.png` },
  },
  mainEntityOfPage: `${siteConfig.url}/stories/${SLUG}`,
  articleSection: 'Financial Services',
  keywords:
    'portal modernization, QA testing, Redux analysis, dependency upgrades, launch readiness',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Client Stories',
      item: `${siteConfig.url}/stories`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Investment Markets Australia',
      item: `${siteConfig.url}/stories/${SLUG}`,
    },
  ],
};

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

export default function InvestmentMarketsAustraliaPage() {
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
                Investment Markets Australia
              </div>
              <div
                className={cx(styles.eyebrow, styles.red, styles.nobar)}
                style={{ marginBottom: 0 }}
              >
                Client Story · Financial Services
              </div>
              <h1>
                Making launch possible for an investment platform that{' '}
                <em>could not afford to miss its moment.</em>
              </h1>
              <p className={styles.sub}>
                Investment Markets Australia was preparing to bring its investor platform to
                market. The idea was strong, the launch window was near, but the portal was
                carrying thousands of unresolved issues across usability, state management,
                broken flows, missing links, dependencies, and overall stability.
              </p>
              <p className={styles.sub}>
                KEYOB was brought in to help turn the platform from launch risk into launch
                readiness.
              </p>
            </div>
            <div className={styles.mock}>
              <svg
                viewBox="0 0 520 416"
                aria-label="An investor portal shown on laptop and mobile, with search and comparison cards"
              >
                <defs>
                  <linearGradient id="ima-scr" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#11263b" />
                    <stop offset="100%" stopColor="#0d1b2a" />
                  </linearGradient>
                </defs>
                {/* laptop */}
                <rect x="40" y="40" width="380" height="240" rx="12" fill="#0a1623" stroke="rgba(255,255,255,.12)" />
                <rect x="54" y="54" width="352" height="212" rx="6" fill="url(#ima-scr)" />
                <rect x="54" y="54" width="352" height="30" rx="6" fill="#0a1623" />
                <circle cx="72" cy="69" r="4" fill="var(--keyob-red)" />
                <rect x="86" y="65" width="70" height="8" rx="4" fill="rgba(255,255,255,.4)" />
                <rect x="330" y="63" width="60" height="12" rx="6" fill="var(--keyob-red)" opacity=".85" />
                <rect x="70" y="98" width="320" height="22" rx="11" fill="rgba(255,255,255,.08)" stroke="rgba(25,198,232,.4)" />
                <circle cx="84" cy="109" r="5" fill="none" stroke="#5EE0FF" strokeWidth="1.5" />
                <line x1="88" y1="113" x2="92" y2="117" stroke="#5EE0FF" strokeWidth="1.5" />
                <rect x="100" y="105" width="120" height="8" rx="4" fill="rgba(255,255,255,.35)" />
                <g>
                  <rect x="70" y="132" width="100" height="120" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" />
                  <rect x="180" y="132" width="100" height="120" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" />
                  <rect x="290" y="132" width="100" height="120" rx="8" fill="rgba(25,198,232,.08)" stroke="rgba(25,198,232,.35)" />
                  <g fill="rgba(255,255,255,.3)">
                    <rect x="82" y="146" width="50" height="7" rx="3.5" />
                    <rect x="82" y="160" width="74" height="6" rx="3" />
                    <rect x="192" y="146" width="50" height="7" rx="3.5" />
                    <rect x="192" y="160" width="74" height="6" rx="3" />
                    <rect x="302" y="146" width="50" height="7" rx="3.5" />
                    <rect x="302" y="160" width="74" height="6" rx="3" />
                  </g>
                  <g fill="var(--keyob-cyan)">
                    <rect x="82" y="210" width="10" height="28" rx="2" />
                    <rect x="98" y="198" width="10" height="40" rx="2" />
                    <rect x="114" y="220" width="10" height="18" rx="2" />
                  </g>
                  <g fill="rgba(255,255,255,.25)">
                    <rect x="192" y="214" width="10" height="24" rx="2" />
                    <rect x="208" y="204" width="10" height="34" rx="2" />
                    <rect x="224" y="218" width="10" height="20" rx="2" />
                  </g>
                  <g fill="var(--keyob-red)" opacity=".7">
                    <rect x="302" y="206" width="10" height="32" rx="2" />
                    <rect x="318" y="216" width="10" height="22" rx="2" />
                    <rect x="334" y="200" width="10" height="38" rx="2" />
                  </g>
                </g>
                <rect x="24" y="280" width="412" height="12" rx="6" fill="#0a1623" stroke="rgba(255,255,255,.1)" />
                {/* phone */}
                <rect x="380" y="190" width="120" height="210" rx="18" fill="#0a1623" stroke="rgba(255,255,255,.14)" />
                <rect x="392" y="206" width="96" height="178" rx="8" fill="url(#ima-scr)" />
                <rect x="392" y="206" width="96" height="26" rx="8" fill="#0a1623" />
                <circle cx="404" cy="219" r="3.5" fill="var(--keyob-red)" />
                <rect x="404" y="246" width="72" height="16" rx="8" fill="rgba(255,255,255,.08)" stroke="rgba(25,198,232,.4)" />
                <g fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.12)">
                  <rect x="404" y="272" width="72" height="34" rx="6" />
                  <rect x="404" y="314" width="72" height="34" rx="6" />
                </g>
                <rect x="404" y="356" width="72" height="16" rx="8" fill="var(--keyob-red)" opacity=".8" />
              </svg>
            </div>
          </div>
        </header>

        {/* 2. SNAPSHOT */}
        <section data-reveal className={styles.snapshot}>
          <div className={styles.snapGrid}>
            <div className={styles.snap}>
              <div className={styles.lab}>Situation</div>
              <div className={cx(styles.val, styles.red)}>Launch at risk</div>
              <p>The portal had thousands of unresolved issues close to go-live.</p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>KEYOB role</div>
              <div className={styles.val}>QA + Technical stabilization</div>
              <p>
                Structured QA, Redux analysis, dependency upgrades, issue resolution, and UX
                improvements.
              </p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Outcome</div>
              <div className={styles.val}>Launch-ready</div>
              <p>
                The platform became usable, manageable, and ready for users within the required
                timeline.
              </p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Impact</div>
              <div className={styles.val}>Clearer user journey</div>
              <p>
                Search, compare, and investor flows became easier to use and easier to manage.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CHALLENGE */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={cx(styles.eyebrow, styles.red)}>The challenge</div>
              <h2 className={styles.h2}>
                A strong platform idea,{' '}
                <em className={styles.red}>blocked by technical complexity.</em>
              </h2>
            </div>
            <div className={styles.challengeGrid}>
              <div>
                <div className={styles.bodyCopy}>
                  <p>
                    Investment Markets Australia needed to launch a portal that helped users
                    find, compare, and explore Australian investment opportunities. But as the
                    launch approached, the system was not in the condition it needed to be.
                  </p>
                  <p>
                    The portal had thousands of issues across the user interface, workflows,
                    state management, broken or missing links, outdated dependencies,
                    inconsistent behavior, and usability gaps. The challenge was not simply to
                    “fix bugs.” The challenge was to create enough technical stability,
                    usability, and confidence for a time-sensitive launch.
                  </p>
                </div>
                <ul className={cx(styles.problems, styles.single)}>
                  {PROBLEMS.map((p) => (
                    <li key={p}>
                      <svg
                        className={styles.x}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* blocked workflow visual */}
              <div className={styles.blockvis} aria-hidden="true">
                <svg
                  viewBox="0 0 440 460"
                  role="img"
                  aria-label="A workflow diagram where several connections are cut, shown with red crosses, and data flow stalls at the blocked points"
                >
                  <defs>
                    <marker id="ima-okhead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                      <path d="M0 0 L9 5 L0 10 z" fill="rgba(25,198,232,.55)" />
                    </marker>
                  </defs>

                  <g fill="none" strokeWidth="2" strokeLinecap="round">
                    <path id="ima-bf1" className="flow ok" d="M70 90 L190 90" />
                    <path id="ima-bf2" className="flow ok" d="M70 90 L70 220" />
                    <path id="ima-bf3" className="flow ok" d="M250 90 L350 90" />
                    <path id="ima-bf4" className="flow ok" d="M70 280 L70 380" />
                    <path id="ima-bf5" className="flow ok" d="M130 410 L250 410" />

                    <path className="flow cut" d="M190 130 L190 178" />
                    <path className="flow cut" d="M214 220 L262 200" />
                    <path className="flow cut" d="M250 250 L320 250" />
                    <path className="flow cut" d="M350 130 L350 338" />
                    <path className="flow cut" d="M130 250 L178 250" />
                  </g>

                  <g className="nodes">
                    <g className="node"><rect x="42" y="68" width="56" height="44" rx="9" /><text x="70" y="94">Entry</text></g>
                    <g className="node"><rect x="190" y="68" width="60" height="44" rx="9" /><text x="220" y="94">Search</text></g>
                    <g className="node"><rect x="320" y="68" width="60" height="44" rx="9" /><text x="350" y="94">Filter</text></g>
                    <g className="node"><rect x="42" y="220" width="56" height="44" rx="9" /><text x="70" y="246">State</text></g>
                    <g className="node blk"><rect x="190" y="178" width="60" height="44" rx="9" /><text x="220" y="204">Compare</text></g>
                    <g className="node blk"><rect x="300" y="228" width="64" height="44" rx="9" /><text x="332" y="254">Detail</text></g>
                    <g className="node"><rect x="42" y="358" width="56" height="44" rx="9" /><text x="70" y="384">Auth</text></g>
                    <g className="node blk"><rect x="318" y="338" width="64" height="44" rx="9" /><text x="350" y="364">Connect</text></g>
                    <g className="node"><rect x="250" y="388" width="64" height="44" rx="9" /><text x="282" y="414">Invest</text></g>
                  </g>

                  <g className="cross">
                    <g transform="translate(190,154)"><circle r="11" /><path d="M-4 -4 L4 4 M4 -4 L-4 4" /></g>
                    <g transform="translate(238,210)"><circle r="11" /><path d="M-4 -4 L4 4 M4 -4 L-4 4" /></g>
                    <g transform="translate(285,250)"><circle r="11" /><path d="M-4 -4 L4 4 M4 -4 L-4 4" /></g>
                    <g transform="translate(350,238)"><circle r="11" /><path d="M-4 -4 L4 4 M4 -4 L-4 4" /></g>
                    <g transform="translate(154,250)"><circle r="11" /><path d="M-4 -4 L4 4 M4 -4 L-4 4" /></g>
                  </g>

                  <g className="dots">
                    <circle r="3.5"><animateMotion dur="2.6s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.55;1" calcMode="linear"><mpath href="#ima-bf1" /></animateMotion></circle>
                    <circle r="3.5"><animateMotion dur="3.0s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="linear"><mpath href="#ima-bf2" /></animateMotion></circle>
                    <circle r="3.5"><animateMotion dur="2.4s" begin="0.4s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.55;1" calcMode="linear"><mpath href="#ima-bf3" /></animateMotion></circle>
                    <circle r="3.5"><animateMotion dur="2.8s" begin="0.8s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.5;1" calcMode="linear"><mpath href="#ima-bf4" /></animateMotion></circle>
                    <circle r="3.5"><animateMotion dur="2.6s" begin="0.2s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.55;1" calcMode="linear"><mpath href="#ima-bf5" /></animateMotion></circle>
                  </g>

                  <g className="stalled">
                    <circle cx="190" cy="138" r="3.5" /><circle cx="190" cy="128" r="3.5" />
                    <circle cx="205" cy="214" r="3.5" /><circle cx="196" cy="218" r="3.5" />
                    <circle cx="262" cy="250" r="3.5" /><circle cx="252" cy="250" r="3.5" />
                    <circle cx="350" cy="138" r="3.5" /><circle cx="350" cy="128" r="3.5" />
                    <circle cx="170" cy="250" r="3.5" /><circle cx="160" cy="250" r="3.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT KEYOB DID */}
        <section data-reveal className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>What KEYOB did</div>
              <h2 className={styles.h2}>
                KEYOB moved quickly from <em>diagnosis to stabilization.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                KEYOB approached the engagement with structure. The first priority was to
                understand where the portal was breaking, which issues mattered most for launch,
                and how the system could be stabilized without losing time.
              </p>
              <p>
                The team performed detailed QA, reviewed Redux behavior, identified functional
                and UX gaps, upgraded required dependencies, resolved critical issues, connected
                missing links, improved broken flows, and modernized key parts of the portal
                experience. The work was practical, focused, and launch-driven.
              </p>
            </div>
            <div className={styles.work}>
              {WORK.map(([n, t, p]) => (
                <div key={n} className={styles.wcard}>
                  <div className={styles.wn}>{n}</div>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TURNING POINT */}
        <section data-reveal className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The turning point</div>
              <h2 className={styles.h2}>
                The work shifted the launch from <em>uncertain to possible.</em>
              </h2>
            </div>
            <div className={styles.turnTop}>
              <div className={styles.bodyCopy}>
                <p>
                  Before KEYOB&apos;s involvement, the launch was under pressure. There were too
                  many open issues, too many uncertain flows, and not enough confidence that the
                  system would be ready for users.
                </p>
                <p>
                  As QA, analysis, and fixes progressed, the portal became more stable. User
                  journeys became clearer. Missing connections were restored. Technical issues
                  were reduced. The platform started moving from a problem list toward a
                  usable, launch-ready product. This is where KEYOB&apos;s role mattered most:
                  not only writing code, but bringing structure, priority, and calm execution to
                  a critical stage of delivery.
                </p>
              </div>

              <figure data-reveal className={styles.burnvis} aria-hidden="true">
                <svg
                  viewBox="0 0 460 300"
                  role="img"
                  aria-label="A burndown chart: open issues fall steeply over time toward a launch-ready baseline"
                >
                  <defs>
                    <linearGradient id="ima-burnFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(224,50,45,.22)" />
                      <stop offset="100%" stopColor="rgba(224,50,45,0)" />
                    </linearGradient>
                  </defs>

                  <g stroke="rgba(7,22,45,.10)" strokeWidth="1">
                    <line x1="56" y1="40" x2="56" y2="232" />
                    <line x1="56" y1="232" x2="430" y2="232" />
                    <line x1="56" y1="184" x2="430" y2="184" />
                    <line x1="56" y1="136" x2="430" y2="136" />
                    <line x1="56" y1="88" x2="430" y2="88" />
                  </g>

                  <text className={styles.burnAx} x="56" y="34" textAnchor="start">Open issues</text>
                  <text className={styles.burnAx} x="48" y="236" textAnchor="end">0</text>
                  <text className={styles.burnAx} x="56" y="250" textAnchor="start">Engagement start</text>
                  <text className={styles.burnAx} x="422" y="250" textAnchor="end">Launch</text>

                  <line className={styles.burnBase} x1="56" y1="218" x2="430" y2="218" />
                  <text className={styles.burnBaselab} x="60" y="212" textAnchor="start">Launch-ready baseline</text>

                  <path
                    className={styles.burnArea}
                    d="M64 64 C150 70 150 150 232 168 C320 188 360 210 422 214 L422 232 L64 232 Z"
                    fill="url(#ima-burnFill)"
                  />
                  <path className={styles.burnLine} d="M64 64 C150 70 150 150 232 168 C320 188 360 210 422 214" />

                  <g className={styles.burnDots}>
                    <circle cx="64" cy="64" r="5" style={{ ['--d' as string]: '0.2s' } as React.CSSProperties} />
                    <circle cx="174" cy="120" r="5" style={{ ['--d' as string]: '0.55s' } as React.CSSProperties} />
                    <circle cx="262" cy="176" r="5" style={{ ['--d' as string]: '0.9s' } as React.CSSProperties} />
                    <circle className="end" cx="422" cy="214" r="6" style={{ ['--d' as string]: '1.25s' } as React.CSSProperties} />
                  </g>
                  <text className={styles.burnEnd} x="416" y="206" textAnchor="end">
                    Ready ✓
                  </text>
                </svg>
                <figcaption className={styles.burnCap}>
                  Open issues triaged and resolved down to a launch-ready baseline.
                </figcaption>
              </figure>
            </div>

            <div className={styles.turn}>
              <div className={cx(styles.tstate, styles.before)}>
                <div className={styles.tt}>Before</div>
                <h4>Issue-heavy portal</h4>
                <p>Open defects, uncertain flows, launch pressure.</p>
              </div>
              <div className={styles.tarrow} aria-hidden="true">→</div>
              <div className={cx(styles.tstate, styles.mid)}>
                <div className={styles.tt}>QA &amp; analysis</div>
                <h4>Structure &amp; priority</h4>
                <p>Testing, Redux review, and triage by launch impact.</p>
              </div>
              <div className={styles.tarrow} aria-hidden="true">→</div>
              <div className={cx(styles.tstate, styles.after)}>
                <div className={styles.tt}>After</div>
                <h4>Launch-ready platform</h4>
                <p>Stable, connected, usable within the timeline.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OUTCOME */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The outcome</div>
              <h2 className={styles.h2}>
                A more stable, usable, and{' '}
                <em>launch-ready investment portal.</em>
              </h2>
            </div>
            <div className={styles.outcomeGrid}>
              <div>
                <div className={styles.bodyCopy}>
                  <p>
                    KEYOB helped Investment Markets Australia make the portal available for
                    users within the required launch timeline. The platform became more
                    user-friendly, easier to manage, and more reliable across key journeys.
                  </p>
                  <p>
                    The client did not just receive bug fixes. They received a more stable
                    digital product that could support the launch and give users a clearer way
                    to search, compare, and explore investment opportunities.
                  </p>
                </div>
                <ul className={styles.outcomes}>
                  {OUTCOMES.map((o) => (
                    <li key={o}>
                      <svg
                        className={styles.c}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside data-reveal className={styles.readyvis} aria-hidden="true">
                <div className={styles.readyHead}>
                  <span className={styles.readyTitle}>Portal readiness</span>
                  <span className={styles.readyLegend}>
                    <i className={cx(styles.lg, styles.before)} />
                    Before
                    <i className={cx(styles.lg, styles.after)} />
                    Launch-ready
                  </span>
                </div>
                <div className={styles.readyBars}>
                  {READY.map(([t, b, a], i) => (
                    <div key={t} className={styles.rb}>
                      <div className={styles.rbLab}>
                        <span>{t}</span>
                        <span className={styles.rbVal}>
                          before → <b>launch-ready</b>
                        </span>
                      </div>
                      <div
                        className={styles.rbTrack}
                        style={
                          {
                            ['--aw' as string]: `${a}%`,
                            ['--bw' as string]: `${b}%`,
                            ['--d' as string]: `${0.15 + i * 0.12}s`,
                          } as React.CSSProperties
                        }
                      >
                        <div className={styles.rbAfter} />
                        <div className={styles.rbBefore} />
                        <div className={styles.rbMark} />
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* 7. HUMAN / TRUST */}
        <section data-reveal className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div
              className={styles.sctHead}
              style={{ textAlign: 'center', maxWidth: '54ch', margin: '0 auto 40px' }}
            >
              <div
                className={cx(styles.eyebrow, styles.center, styles.nobar)}
                style={{ justifyContent: 'center', color: 'var(--keyob-red-soft)' }}
              >
                Delivery under pressure
              </div>
              <h2 className={styles.h2} style={{ marginTop: 14 }}>
                Delivery under pressure <em>builds trust.</em>
              </h2>
            </div>
            <div
              className={styles.bodyCopy}
              style={{ maxWidth: '64ch', margin: '0 auto 40px', textAlign: 'center' }}
            >
              <p>
                This engagement reflected the kind of work KEYOB is built for: stepping into
                complex business-critical systems, understanding the pressure, identifying what
                matters, and moving quickly without losing professionalism. For Investment
                Markets Australia, the need was immediate. For KEYOB, the responsibility was
                clear: help the platform become ready for real users and support the client
                through a launch that mattered.
              </p>
            </div>
            <div className={styles.reflect}>
              <blockquote>
                “Some projects need more than development. They need structure, priority, and a
                team that can stay calm when the launch window is close.”
              </blockquote>
              <div className={styles.by}>KEYOB — internal reflection on the engagement</div>
            </div>
          </div>
        </section>

        {/* 8. CAPABILITIES */}
        <section data-reveal className={styles.sct} id="capabilities">
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>Capabilities involved</div>
              <h2 className={styles.h2}>
                Capabilities involved in <em>this engagement.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                The engagement combined technical analysis, QA discipline, frontend
                improvements, dependency management, and user experience thinking. This allowed
                KEYOB to support both the engineering side and the business launch side of the
                project.
              </p>
            </div>
            <div className={styles.caps}>
              {CAPS.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section data-reveal className={styles.final}>
          <div className={styles.finalMesh} aria-hidden="true" />
          <div className={cx(styles.wrap, styles.in)}>
            <h2>
              Is your platform close to launch <em>but not ready yet?</em>
            </h2>
            <p>
              KEYOB helps businesses stabilize, modernize, and launch digital platforms with
              confidence. Whether you are facing unresolved issues, disconnected workflows,
              outdated dependencies, or usability problems, we can help you find the right path
              to launch readiness.
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
