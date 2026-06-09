/* eslint-disable no-restricted-syntax --
 * Bespoke client-story page. The visual design (typographic scale, families,
 * per-section em accents) is pixel-faithful to best-value.html and is owned by
 * this file's CSS module rather than the shared typography primitives. */

import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { RevealOnScroll } from '@/components/util/RevealOnScroll';
import { siteConfig } from '@/config/site.config';
import styles from './page.module.css';

const SLUG = 'best-value-custom-erp';
const TITLE = 'Best Value Auto Body Supply Client Story';
const DESCRIPTION =
  'How KEYOB built a custom ERP for Best Value Auto Body Supply, supporting aftermarket auto parts operations, inventory, sales, purchasing, warehouse, delivery, reporting, and long-term modernization.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Best Value Auto Body Supply',
    'aftermarket auto parts ERP',
    'custom ERP development',
    'inventory management',
    'sales operations',
    'warehouse workflows',
    'long-term technology partnership',
    'KEYOB client story',
  ],
  alternates: { canonical: `${siteConfig.url}/stories/${SLUG}` },
  openGraph: {
    type: 'article',
    title: `${TITLE} | KEYOB`,
    description:
      'From off-the-shelf frustration to a custom ERP powering a decade of growth for an aftermarket auto parts business.',
    url: `${siteConfig.url}/stories/${SLUG}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | KEYOB`,
    description:
      'A custom ERP powering a decade of growth for an aftermarket auto parts business.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d1b2a',
};

const PROBLEMS = [
  'Off-the-shelf ERP solutions did not match aftermarket auto parts workflows',
  'Inventory complexity required industry-specific logic',
  'Sales, purchasing, warehouse, delivery, and accounting needed to work together',
  'Generic systems could not properly support operational rules and exceptions',
  'Reporting and visibility needed to reflect the real business, not generic templates',
  'The business needed a system that could evolve as requirements changed',
  'Best Value needed a technology partner, not just software installation',
];

const FOCUS = [
  'Inventory and part management',
  'Sales and customer workflows',
  'Purchasing and vendor processes',
  'Warehouse and scanning operations',
  'Delivery routes and fleet operations',
  'Pricing and reporting logic',
  'Returns and RMA handling',
  'Accounting and operational reports',
  'Management visibility and decision-making',
];

const ERP: [string, string][] = [
  ['Sales & Customer Management', 'Managing customer orders, customer history, pricing, sales workflows, and operational visibility across customer activity.'],
  ['Inventory & Parts Management', 'Supporting large-scale part records, stock visibility, interchange logic, part categories, and warehouse-level inventory control.'],
  ['Purchasing & Vendor Workflows', 'Handling international and local purchasing, vendor processes, purchase orders, receiving, and procurement-related reporting.'],
  ['Pricing & Business Rules', 'Supporting pricing logic, updates, exceptions, approvals, and business-specific rules that generic systems could not easily handle.'],
  ['Warehouse & Scanning Operations', 'Helping warehouse teams manage parts, route sheets, scanning workflows, labels, and operational accuracy.'],
  ['Delivery & Route Operations', 'Supporting delivery routes, fleet-related workflows, route sheets, and operational coordination.'],
  ['RMA & Returns', 'Managing returns, return authorization, process control, and related operational checks.'],
  ['Accounting & Reporting', 'Supporting accounting workflows, receivable and payable visibility, statements, end-of-day reporting, and management reports.'],
  ['Dashboards & Visibility', 'Providing leadership and teams with clearer insight into operational performance, sales, inventory, routes, and business activity.'],
];

const ORBIT = ['Sales', 'Inventory', 'Purchasing', 'Pricing', 'Warehouse', 'Routes', 'RMA', 'Accounting', 'Dashboards'];

const TL: [string, string, string, boolean][] = [
  ['Phase 01', 'Discovery', 'Understanding how the aftermarket auto parts business actually worked.', false],
  ['Phase 02', 'Analysis & Architecture', 'Turning operational complexity into a practical ERP blueprint.', false],
  ['Phase 03', 'Development', "Building a custom system around Best Value's workflows.", false],
  ['Phase 04', 'Production', 'Deploying the ERP into day-to-day business operations.', false],
  ['Phase 05', 'Continuous Improvement', 'Enhancing modules, reports, workflows, and system logic as the business grew.', false],
  ['Phase 06', 'Broader Modernization', 'Expanding the partnership into branding, web presence, and future-ready digital improvements.', true],
];

const OUTCOMES = [
  'Custom ERP designed around aftermarket auto parts operations',
  'Better fit than generic off-the-shelf software',
  'Core workflows connected into one operational platform',
  'Improved visibility across inventory, sales, purchasing, warehouse, delivery, and reporting',
  'System remained in production over the long term',
  'Continuous modifications as the business grew',
  'Relationship expanded beyond ERP into brand and web presence modernization',
  'KEYOB became a long-term technology partner',
];

const BRANCHES = [
  'Continuous improvement',
  'Reporting & dashboards',
  'Branding & web presence',
  'Future-ready modernization',
];
const BRANCH_Y = [40, 80, 120, 160];

const CAPS = [
  'Custom ERP Development',
  'Discovery & Process Analysis',
  'Business Workflow Design',
  'Inventory Management',
  'Purchasing & Vendor Workflows',
  'Sales Operations',
  'Pricing Logic',
  'Warehouse Scanning',
  'Route & Delivery Operations',
  'RMA / Returns Management',
  'Accounting & Reports',
  'Dashboards & Visibility',
  'System Modernization',
  'Long-Term Support',
  'Branding & Web Presence Upgrade',
];

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'From off-the-shelf frustration to a custom ERP powering a decade of growth.',
  description: 'How KEYOB built and continues to evolve a custom ERP for Best Value Auto Body Supply.',
  about: {
    '@type': 'Organization',
    name: 'Best Value Auto Body Supply',
    url: 'https://bestvaluepart.com/',
  },
  author: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  publisher: {
    '@type': 'Organization',
    name: 'KEYOB',
    logo: { '@type': 'ImageObject', url: `${siteConfig.url}/keyob-mark.png` },
  },
  mainEntityOfPage: `${siteConfig.url}/stories/${SLUG}`,
  articleSection: 'Aftermarket Auto Parts',
  keywords: 'custom ERP development, auto parts inventory system, warehouse ERP, ERP modernization',
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
      name: 'Best Value Auto Body Supply',
      item: `${siteConfig.url}/stories/${SLUG}`,
    },
  ],
};

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

// ERP orbit geometry — matches best-value.html (cx=230, cy=230, r=165).
const ORBIT_CX = 230;
const ORBIT_CY = 230;
const ORBIT_R = 165;
const ORBIT_INNER = 50;
type OrbitItem = {
  label: string;
  inner: { x: number; y: number };
  outer: { x: number; y: number };
  rectX: number;
  rectY: number;
  rectW: number;
  textY: number;
  spokeDelay: number;
};
const orbitItems: OrbitItem[] = ORBIT.map((label, i) => {
  const a = ((-90 + i * (360 / ORBIT.length)) * Math.PI) / 180;
  const inner = { x: ORBIT_CX + ORBIT_INNER * Math.cos(a), y: ORBIT_CY + ORBIT_INNER * Math.sin(a) };
  const outer = { x: ORBIT_CX + ORBIT_R * Math.cos(a), y: ORBIT_CY + ORBIT_R * Math.sin(a) };
  const w = label.length * 5.6 + 20;
  return {
    label,
    inner,
    outer,
    rectX: outer.x - w / 2,
    rectY: outer.y - 13,
    rectW: w,
    textY: outer.y + 4,
    spokeDelay: i * 0.1,
  };
});

export default function BestValueStoryPage() {
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
                Best Value Auto Body Supply
              </div>
              <div
                className={cx(styles.eyebrow, styles.amber, styles.nobar)}
                style={{ marginBottom: 0 }}
              >
                Client Story · Aftermarket Auto Parts · USA
              </div>
              <h1>
                From off-the-shelf frustration to a custom ERP{' '}
                <em>powering a decade of growth.</em>
              </h1>
              <p className={styles.sub}>
                Best Value Auto Body Supply was looking for an ERP system that could support the
                realities of the aftermarket auto parts industry. Off-the-shelf systems were not
                fitting their processes, and the business needed a platform that could handle the
                way they actually worked.
              </p>
              <p className={styles.sub}>
                KEYOB started with discovery, moved through analysis, design, and development,
                and built a custom ERP that became the operational backbone of the business.
                Nearly a decade later, the system is still in production — continuously improved
                as Best Value grows and modernizes.
              </p>
            </div>
            <div className={styles.mock}>
              <svg
                viewBox="0 0 520 416"
                aria-label="A custom ERP dashboard for an auto parts business: inventory, sales, warehouse and delivery routes"
              >
                <defs>
                  <linearGradient id="bv-scr" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#11263b" />
                    <stop offset="100%" stopColor="#0d1b2a" />
                  </linearGradient>
                </defs>
                <rect x="40" y="36" width="440" height="280" rx="12" fill="#0a1623" stroke="rgba(255,255,255,.12)" />
                <rect x="54" y="50" width="412" height="252" rx="6" fill="url(#bv-scr)" />
                <rect x="54" y="50" width="412" height="30" rx="6" fill="#0a1623" />
                <circle cx="72" cy="65" r="4" fill="var(--keyob-amber)" />
                <rect x="86" y="61" width="90" height="8" rx="4" fill="rgba(255,255,255,.4)" />
                <rect x="392" y="59" width="58" height="12" rx="6" fill="var(--keyob-cyan)" opacity=".75" />
                <g fill="rgba(255,255,255,.06)">
                  <rect x="68" y="92" width="92" height="200" rx="6" />
                </g>
                <g fill="rgba(255,255,255,.3)">
                  <rect x="80" y="106" width="66" height="7" rx="3.5" />
                  <rect x="80" y="124" width="54" height="7" rx="3.5" />
                  <rect x="80" y="142" width="62" height="7" rx="3.5" />
                  <rect x="80" y="160" width="48" height="7" rx="3.5" />
                  <rect x="80" y="178" width="58" height="7" rx="3.5" />
                </g>
                <rect x="74" y="120" width="80" height="16" rx="4" fill="rgba(25,198,232,.25)" />
                <g>
                  <rect x="176" y="92" width="86" height="54" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" />
                  <rect x="272" y="92" width="86" height="54" rx="8" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" />
                  <rect x="368" y="92" width="86" height="54" rx="8" fill="rgba(240,104,30,.12)" stroke="rgba(240,104,30,.4)" />
                  <text x="188" y="116" fontFamily="serif" fontSize="15" fill="#fff">Inventory</text>
                  <text x="284" y="116" fontFamily="serif" fontSize="15" fill="#fff">Sales</text>
                  <text x="380" y="116" fontFamily="serif" fontSize="15" fill="#FF8A4C">Routes</text>
                  <g fill="rgba(255,255,255,.3)">
                    <rect x="188" y="128" width="48" height="6" rx="3" />
                    <rect x="284" y="128" width="40" height="6" rx="3" />
                    <rect x="380" y="128" width="44" height="6" rx="3" />
                  </g>
                </g>
                <rect x="176" y="158" width="182" height="130" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" />
                <polyline points="190,256 220,236 250,244 280,212 310,222 342,188" fill="none" stroke="var(--keyob-cyan)" strokeWidth="2.5" />
                <g fill="var(--keyob-cyan)">
                  <circle cx="310" cy="222" r="3" />
                  <circle cx="342" cy="188" r="3" />
                </g>
                <rect x="368" y="158" width="86" height="130" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.1)" />
                <path d="M384 268 L398 230 L418 244 L434 200 L444 176" fill="none" stroke="#FF8A4C" strokeWidth="2" strokeDasharray="3 4" />
                <g fill="#FF8A4C">
                  <circle cx="384" cy="268" r="3.5" />
                  <circle cx="418" cy="244" r="3.5" />
                  <circle cx="444" cy="176" r="3.5" />
                </g>
                <rect x="232" y="316" width="56" height="34" fill="#0a1623" />
                <rect x="180" y="350" width="160" height="12" rx="6" fill="#0a1623" stroke="rgba(255,255,255,.1)" />
                <g opacity=".9">
                  <rect x="86" y="378" width="64" height="26" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.12)" />
                  <text x="118" y="395" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,.7)" textAnchor="middle">Bumpers</text>
                  <rect x="158" y="378" width="60" height="26" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.12)" />
                  <text x="188" y="395" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,.7)" textAnchor="middle">Lighting</text>
                  <rect x="226" y="378" width="74" height="26" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.12)" />
                  <text x="263" y="395" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,.7)" textAnchor="middle">Sheet metal</text>
                  <rect x="308" y="378" width="54" height="26" rx="6" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.12)" />
                  <text x="335" y="395" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,.7)" textAnchor="middle">Grills</text>
                  <rect x="370" y="378" width="64" height="26" rx="6" fill="rgba(240,104,30,.14)" stroke="rgba(240,104,30,.4)" />
                  <text x="402" y="395" fontFamily="monospace" fontSize="9" fill="#FF8A4C" textAnchor="middle">Paint</text>
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
              <p>
                A complex inventory and distribution business with large product variety and
                operational depth.
              </p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Original need</div>
              <div className={cx(styles.val, styles.amber)}>Custom ERP</div>
              <p>
                Off-the-shelf software could not properly support Best Value&apos;s real business
                workflows.
              </p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Partnership</div>
              <div className={styles.val}>Nearly a decade</div>
              <p>The ERP has remained in production and continues to evolve with the business.</p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Expansion</div>
              <div className={styles.val}>Beyond ERP</div>
              <p>The partnership now extends into modernization, branding, and web presence upgrades.</p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Inventory scale</div>
              <div className={styles.val}>110,000+ parts</div>
              <p>
                OEM replacement parts in stock.
                <span className={styles.cite}>Source: bestvaluepart.com</span>
              </p>
            </div>
          </div>
        </section>

        {/* 3. CHALLENGE */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={cx(styles.eyebrow, styles.amber)}>The challenge</div>
              <h2 className={styles.h2}>
                Generic ERP systems{' '}
                <em className={styles.amber}>could not fit the business.</em>
              </h2>
            </div>
            <div className={styles.two}>
              <div>
                <div className={styles.bodyCopy}>
                  <p>
                    Best Value Auto Body Supply operates in an industry where standard ERP
                    assumptions often break down. The aftermarket auto parts business is not
                    simple retail. It involves large inventory volumes, interchange parts,
                    purchasing, pricing logic, warehouse activity, delivery routes, returns,
                    accounting, reporting, customer history, and operational workflows that
                    must work together every day.
                  </p>
                  <p>
                    Best Value had explored over-the-counter software solutions, but those
                    systems were not helping the business operate the way it needed to. The
                    software did not fit the process. The business needed a system designed
                    around the industry, the team, and the operational reality.
                  </p>
                </div>
                <ul className={styles.problems}>
                  {PROBLEMS.map((p) => (
                    <li key={p}>
                      <svg className={styles.x} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className={styles.gvc}>
                  <div className={cx(styles.gvcCard, styles.gen)}>
                    <h4>Generic ERP</h4>
                    <div className={styles.gvcRow}><span className={styles.mk}>✕</span>Forces the business to fit the software</div>
                    <div className={styles.gvcRow}><span className={styles.mk}>✕</span>Rigid inventory assumptions</div>
                    <div className={styles.gvcRow}><span className={styles.mk}>✕</span>Generic report templates</div>
                    <div className={styles.gvcRow}><span className={styles.mk}>✕</span>Hard to handle exceptions</div>
                    <div className={styles.gvcRow}><span className={styles.mk}>✕</span>Limited room to evolve</div>
                  </div>
                  <div className={cx(styles.gvcCard, styles.cus)}>
                    <h4>Custom KEYOB ERP</h4>
                    <div className={styles.gvcRow}><span className={styles.mk}>✓</span>Built around the real process</div>
                    <div className={styles.gvcRow}><span className={styles.mk}>✓</span>Industry-specific part logic</div>
                    <div className={styles.gvcRow}><span className={styles.mk}>✓</span>Reports that match operations</div>
                    <div className={styles.gvcRow}><span className={styles.mk}>✓</span>Rules &amp; exceptions supported</div>
                    <div className={styles.gvcRow}><span className={styles.mk}>✓</span>Evolves as the business grows</div>
                  </div>
                </div>
                <div className={styles.fitvis}>
                  <svg viewBox="0 0 460 88" aria-label="Rigid generic blocks not fitting, versus custom modules fitting the business shape">
                    <path d="M10 70 Q60 30 110 50 Q160 70 210 44 Q260 22 310 48 Q360 70 410 46 Q435 36 450 50" fill="none" stroke="rgba(25,198,232,.5)" strokeWidth="2" />
                    <g fill="rgba(240,104,30,.18)" stroke="rgba(240,104,30,.55)">
                      <rect x="24" y="20" width="34" height="34" rx="4" />
                      <rect x="70" y="14" width="34" height="34" rx="4" />
                    </g>
                    <g fill="rgba(25,198,232,.18)" stroke="rgba(25,198,232,.6)">
                      <rect x="250" y="30" width="30" height="26" rx="5" />
                      <rect x="300" y="34" width="30" height="22" rx="5" />
                      <rect x="350" y="32" width="30" height="22" rx="5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DISCOVERY & DESIGN */}
        <section data-reveal className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>Discovery &amp; design</div>
              <h2 className={styles.h2}>
                KEYOB started where serious ERP work should start:{' '}
                <em>discovery.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                KEYOB did not begin by forcing a ready-made system onto the business. The work
                began with understanding how Best Value actually operated — how parts moved,
                how sales worked, how purchasing decisions were made, how warehouses functioned,
                how delivery was managed, how customers were served, and how leadership needed
                visibility.
              </p>
              <p>
                This discovery phase shaped the ERP design. The goal was not to copy generic ERP
                features. The goal was to build a system that supported the business logic of an
                aftermarket auto parts operation.
              </p>
            </div>
            <div className={styles.focus}>
              {FOCUS.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WHAT KEYOB BUILT */}
        <section data-reveal className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>What KEYOB built</div>
              <h2 className={styles.h2}>
                A custom ERP built around <em>the way Best Value operates.</em>
              </h2>
            </div>
            <div className={styles.two}>
              <div className={styles.bodyCopy}>
                <p>
                  KEYOB designed and developed a custom ERP system to support Best Value&apos;s
                  day-to-day operations. The system was built to handle the specific needs of
                  the aftermarket auto parts industry, connecting core business functions into
                  one operational platform.
                </p>
                <p>
                  The ERP gave Best Value a system that could support how the business actually
                  worked — not a generic structure that required the business to compromise its
                  process.
                </p>
              </div>
              <div className={styles.erpvis}>
                <svg
                  viewBox="0 0 460 460"
                  aria-label="Custom ERP core connected to sales, inventory, purchasing, warehouse, routes, pricing, accounting, reporting, RMA and dashboards"
                >
                  <g>
                    {orbitItems.map((o) => (
                      <line
                        key={`spoke-${o.label}`}
                        className={styles.erpSpoke}
                        x1={o.inner.x}
                        y1={o.inner.y}
                        x2={o.outer.x}
                        y2={o.outer.y}
                        style={{ animationDelay: `${o.spokeDelay}s` }}
                      />
                    ))}
                  </g>
                  <circle className={styles.erpCore} cx={ORBIT_CX} cy={ORBIT_CY} r="50" />
                  <text className={styles.erpCoreLab} x={ORBIT_CX} y={ORBIT_CY - 4} textAnchor="middle">
                    Custom ERP
                  </text>
                  <text className={styles.erpCoreLab} x={ORBIT_CX} y={ORBIT_CY + 12} textAnchor="middle" fontSize="10">
                    operating core
                  </text>
                  <g>
                    {orbitItems.map((o) => (
                      <g key={`node-${o.label}`}>
                        <rect
                          className={styles.erpNode}
                          x={o.rectX}
                          y={o.rectY}
                          width={o.rectW}
                          height="26"
                          rx="7"
                        />
                        <text
                          className={styles.erpLab}
                          x={o.outer.x}
                          y={o.textY}
                          textAnchor="middle"
                        >
                          {o.label}
                        </text>
                      </g>
                    ))}
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.erpGridCards}>
              {ERP.map(([t, p]) => (
                <div key={t} className={styles.ecard}>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PRODUCTION JOURNEY */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={cx(styles.eyebrow, styles.amber)}>The production journey</div>
              <h2 className={styles.h2}>
                Not a one-time project.{' '}
                <em className={styles.amber}>A system that kept evolving.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                The ERP went into production and became part of how Best Value runs. But the
                work did not stop at launch. As Best Value&apos;s operations grew, the ERP
                continued to evolve. KEYOB stayed involved, modifying the system, improving
                workflows, adding new capabilities, refining reports, and supporting the
                business as needs changed.
              </p>
              <p>
                This is where the relationship became more than a software project. It became a
                long-term technology partnership.
              </p>
            </div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.tlShell}>
              <div className={styles.tl}>
                {TL.map(([ph, t, p, wide]) => (
                  <div key={ph} className={cx(styles.tlRow, wide && styles.wide)}>
                    <div className={styles.tlPh}>{ph}</div>
                    <div>
                      <h3>{t}</h3>
                      <p>{p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. OUTCOME */}
        <section data-reveal className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The outcome</div>
              <h2 className={styles.h2}>
                An ERP backbone built for <em>real operations.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                Best Value gained a custom ERP system designed around the reality of its
                aftermarket auto parts business. The system helped connect operations, improve
                visibility, support daily workflows, and create a platform that could continue
                evolving over time.
              </p>
              <p>
                Nearly a decade later, the ERP remains in production and KEYOB continues to
                support, modify, and extend it as Best Value&apos;s needs grow.
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

        {/* 8. PHILOSOPHY */}
        <section data-reveal className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>KEYOB philosophy</div>
              <h2 className={styles.h2}>
                Start anywhere. <em>Grow in every direction.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                Best Value&apos;s journey with KEYOB reflects how modern technology partnerships
                should work. A client may come to KEYOB for one need — an ERP, a website, a
                CRM, an integration, an AI workflow, or a branding project. But business needs
                do not stay inside one category. As the relationship grows, the work can move
                wherever the client needs it to move.
              </p>
              <p>
                Best Value came to KEYOB for custom ERP development. They stayed for continuous
                improvement. Now the partnership has expanded into branding and web presence
                modernization. That is KEYOB&apos;s philosophy in action: meet the client where
                they are, build what matters now, and keep supporting what the business needs
                next.
              </p>
            </div>
            <div className={styles.pathvis}>
              <svg
                viewBox="0 0 1000 200"
                aria-label="One entry point, custom ERP, branching into continuous improvement, automation, reporting, branding, website and future-ready modernization"
              >
                <path className={styles.pathLine} d="M150 100 L320 100" />
                <path className={styles.pathLine} d="M320 100 C400 100 400 40 500 40" />
                <path className={styles.pathLine} d="M320 100 C400 100 400 80 500 80" />
                <path className={styles.pathLine} d="M320 100 C400 100 400 120 500 120" />
                <path className={styles.pathLine} d="M320 100 C400 100 400 160 500 160" />
                <path className={styles.pathLine} d="M500 40 L660 40" />
                <path className={styles.pathLine} d="M500 80 L660 80" />
                <path className={styles.pathLine} d="M500 120 L660 120" />
                <path className={styles.pathLine} d="M500 160 L660 160" />
                <circle className={styles.pathEntry} cx="120" cy="100" r="14" />
                <text className={styles.pathEntryLab} x="120" y="135" textAnchor="middle">
                  Custom ERP
                </text>
                <text
                  className={styles.pathEntryLab}
                  x="120"
                  y="150"
                  textAnchor="middle"
                  fontSize="9"
                  fill="rgba(255,255,255,.6)"
                >
                  entry point
                </text>
                <g>
                  {BRANCHES.map((b, i) => {
                    const y = BRANCH_Y[i];
                    const w = b.length * 6.4 + 24;
                    return (
                      <g key={b}>
                        <rect
                          className={styles.pathBranch}
                          x="660"
                          y={y - 15}
                          width={w}
                          height="30"
                          rx="8"
                        />
                        <text className={styles.pathBranchLab} x="672" y={y + 4}>
                          {b}
                        </text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>
            <div className={styles.pathTag}>One relationship. Many directions.</div>
          </div>
        </section>

        {/* 9. HUMAN / TRUST */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div
              className={styles.sctHead}
              style={{ textAlign: 'center', maxWidth: '56ch', margin: '0 auto 40px' }}
            >
              <div
                className={cx(styles.eyebrow, styles.center, styles.nobar)}
                style={{ justifyContent: 'center', color: 'var(--keyob-amber-soft)' }}
              >
                A decade of trust
              </div>
              <h2 className={styles.h2} style={{ marginTop: 14 }}>
                A decade of trust is built <em>one delivery at a time.</em>
              </h2>
            </div>
            <div
              className={styles.bodyCopy}
              style={{ maxWidth: '64ch', margin: '0 auto 40px', textAlign: 'center' }}
            >
              <p>
                Long-term partnerships are not created by contracts alone. They are created by
                years of communication, delivery, support, problem-solving, and shared
                understanding. For Best Value, KEYOB has remained close to the business as
                operations changed and requirements grew. The ERP has evolved because the
                business has evolved. That is the difference between building software and
                becoming a technology partner.
              </p>
            </div>
            <div className={styles.reflect}>
              <blockquote>
                &quot;Best Value did not need software that looked good in a demo. They needed a
                system that could survive real operations — every order, every part, every
                route, every report.&quot;
              </blockquote>
              <div className={styles.by}>KEYOB — internal reflection on the engagement</div>
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
                The engagement combined software architecture, ERP development, operational
                analysis, reporting, workflow design, and long-term support — with the
                relationship now expanding into Best Value&apos;s broader digital presence.
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
              Outgrown <em>generic software?</em>
            </h2>
            <p>
              KEYOB helps businesses build systems around the way they actually operate. Whether
              you need a custom ERP, CRM, automation layer, dashboard, integration, or
              future-ready digital upgrade, we can help you move from process frustration to
              operational clarity.
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
