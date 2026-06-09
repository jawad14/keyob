/* eslint-disable no-restricted-syntax --
 * Bespoke client-story page modeled after aleesa.html. The visual design
 * (typographic scale, families, per-section em accents) is faithful to the
 * source HTML and is owned by this file's CSS module rather than the shared
 * typography primitives. */

import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { siteConfig } from '@/config/site.config';
import { RevealOnScroll } from '@/components/util/RevealOnScroll';
import { BusyLine } from './_visuals/BusyLine';
import { AiCapture } from './_visuals/AiCapture';
import styles from './page.module.css';

const SLUG = 'aleesa-ai';
const TITLE = 'Aleesa.ai — From AI receptionist to a 24/7 automated office';
const DESCRIPTION =
  'Aleesa.ai started as an AI receptionist for an Australian health clinic and evolved into a 24/7 cloud-based automated office — capturing leads from calls, website forms, WhatsApp, Facebook, Instagram and social channels into one CRM.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Aleesa.ai',
    'AI receptionist',
    'automated office',
    'CRM automation',
    'lead capture',
    'workflow automation',
    'WhatsApp integration',
    'multi-channel leads',
    'KEYOB product story',
  ],
  alternates: { canonical: `${siteConfig.url}/stories/${SLUG}` },
  openGraph: {
    type: 'article',
    title: `${TITLE} | KEYOB`,
    description:
      'A cloud-based automated office that captures leads from every channel into one CRM, working 24 hours a day.',
    url: `${siteConfig.url}/stories/${SLUG}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | KEYOB`,
    description:
      'A cloud-based automated office that captures leads from every channel into one CRM, working 24 hours a day.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d1b2a',
};

// --- content -----------------------------------------------------------------

type IconKey =
  | 'recept'
  | 'multi'
  | 'crm'
  | 'assign'
  | 'task'
  | 'follow'
  | 'cloud'
  | 'config';

const ICON: Record<IconKey, React.ReactNode> = {
  recept: <path d="M4 5a2 2 0 0 1 2-2h2l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v2a2 2 0 0 1-2 2A16 16 0 0 1 4 5z" />,
  multi: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="12" r="2" />
      <circle cx="5" cy="18" r="2" />
      <path d="M7 6h6a4 4 0 0 1 4 4v0M7 12h10M7 18h6a4 4 0 0 0 4-4" />
    </>
  ),
  crm: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 20V9" />
    </>
  ),
  assign: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 3-5 6-5m4 1 2 2 4-4" />
    </>
  ),
  task: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 8l1.5 1.5L13 7M9 14l1.5 1.5L13 13" />
    </>
  ),
  follow: <path d="M3 12a9 9 0 1 0 3-6.7M3 4v4h4" />,
  cloud: (
    <>
      <path d="M6 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.5A3.5 3.5 0 0 1 18 18z" />
      <path d="M12 13v4m-2-2h4" strokeLinecap="round" />
    </>
  ),
  config: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M2 12h3m14 0h3M4.2 19.8l2.1-2.1m11.4-11.4 2.1-2.1" />
    </>
  ),
};

const CAPS: [IconKey, string, string][] = [
  ['recept', 'AI Receptionist', 'Aleesa.ai can receive and understand customer calls, helping businesses capture important details and reduce missed opportunities.'],
  ['multi', 'Multi-Channel Lead Capture', 'Leads can come from phone calls, website forms, WhatsApp, Facebook, Instagram, social media forms, and other digital channels.'],
  ['crm', 'Unified CRM', 'Every captured lead is brought into one CRM where the business can organize, filter, prioritize, and manage inquiries by its own process.'],
  ['assign', 'Lead Assignment', 'Leads can be assigned to real users, teams, departments, or self-assigned depending on business rules.'],
  ['task', 'Task Creation', 'Aleesa.ai can create follow-up tasks based on lead type, urgency, source, or business requirement.'],
  ['follow', 'Automated Follow-Up Layer', 'Structured follow-up so leads do not depend only on memory, manual notes, or scattered inboxes.'],
  ['cloud', '24/7 Cloud Office', 'Aleesa.ai keeps working outside normal office hours, capturing inquiries even when the physical office is closed.'],
  ['config', 'Business-Specific Configuration', 'CRM and workflows arrange around how each business operates — clinic, service company, education, real estate, consultant, or local business.'],
];

const PROBLEMS = [
  'Customer inquiries arriving across too many channels',
  'Missed calls and after-hours inquiries not always captured',
  'Manual copying of lead details into spreadsheets or CRM',
  'Follow-ups depending on staff memory',
  'No single view of source, status, owner, and next step',
  'Teams checking inboxes instead of serving customers',
  'Small offices needing automation without hiring more admin staff',
];

const BEFORE = [
  'Missed calls',
  'Scattered forms & inboxes',
  'Messages across many apps',
  'Follow-ups left to memory',
];

const AFTER = [
  'One cloud office with CRM',
  'Every lead captured & structured',
  'Clear owners & assignments',
  'Structured follow-up tasks',
];

const OUTCOMES = [
  'Customer inquiries captured from multiple channels',
  'Calls, website forms, WhatsApp, Facebook, Instagram, and social leads in one system',
  'Leads organized inside a CRM',
  'Tasks assigned to users or teams',
  'Follow-ups structured and easier to manage',
  'Reduced risk of missed inquiries',
  'Better visibility of lead source, status, and ownership',
  'Cloud-based office layer available 24/7',
  'Initially shaped by a real Australian health clinic requirement',
  'Now extendable across multiple business types',
];

const INDUSTRIES = [
  'Clinics',
  'Service businesses',
  'Education providers',
  'Consultants',
  'Real estate offices',
  'Agencies',
  'Local businesses',
];

const CAP_TAGS = [
  'AI Receptionist',
  'CRM Development',
  'Lead Capture Automation',
  'WhatsApp Integration',
  'Website Form Integration',
  'Social Media Lead Intake',
  'Facebook & Instagram Messaging',
  'Task Assignment',
  'Workflow Automation',
  'Cloud-Based Office System',
  'Business Process Automation',
  'Health Clinic Use Case',
  'Multi-Industry Productization',
];

const CHANNELS = [
  'Calls',
  'Website',
  'WhatsApp',
  'Facebook',
  'Instagram',
  'Social forms',
  'Contact form',
  'Missed calls',
];

// --- structured data ---------------------------------------------------------

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'From AI receptionist to a 24/7 automated office on the cloud.',
  description:
    "How KEYOB's Aleesa.ai evolved from an AI receptionist into a cloud-based automated office for multi-channel lead capture and CRM automation.",
  about: {
    '@type': 'SoftwareApplication',
    name: 'Aleesa.ai',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud',
  },
  author: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  publisher: {
    '@type': 'Organization',
    name: 'KEYOB',
    logo: { '@type': 'ImageObject', url: `${siteConfig.url}/keyob-mark.png` },
  },
  mainEntityOfPage: `${siteConfig.url}/stories/${SLUG}`,
  articleSection: 'AI Operations',
  keywords:
    'AI receptionist, automated office, CRM automation, lead capture, workflow automation',
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
      name: 'Aleesa.ai',
      item: `${siteConfig.url}/stories/${SLUG}`,
    },
  ],
};

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

// --- precomputed hero hub geometry ------------------------------------------

const HUB_CX = 230;
const HUB_CY = 230;
const HUB_R = 196;
const CHANNEL_CHIPS = CHANNELS.map((label, i) => {
  const a = ((-90 + i * (360 / CHANNELS.length)) * Math.PI) / 180;
  const x = HUB_CX + HUB_R * Math.cos(a);
  const y = HUB_CY + HUB_R * Math.sin(a);
  const ix = HUB_CX + 100 * Math.cos(a);
  const iy = HUB_CY + 100 * Math.sin(a);
  const w = label.length * 5.6 + 18;
  return { label, x, y, ix, iy, w, delay: (i * 0.12).toFixed(2) };
});

const XIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const CheckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export default function AleesaStoryPage() {
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
                Aleesa.ai
              </div>
              <div
                className={cx(styles.eyebrow, styles.nobar)}
                style={{ marginBottom: 0 }}
              >
                Product Story · AI Operations · Automated Office
              </div>
              <h1>
                From AI receptionist to a{' '}
                <em>24/7 automated office</em> on the cloud.
              </h1>
              <p className={styles.sub}>
                Aleesa.ai started with a focused requirement from an Australian health clinic:
                handle customer calls more intelligently, reduce missed inquiries, and make sure
                every potential lead was captured properly.
              </p>
              <p className={styles.sub}>
                What began as an AI receptionist has now evolved into an automated small
                office — a cloud-based business layer that listens, captures, organizes, assigns,
                and follows up on leads from every major channel: phone calls, website forms,
                WhatsApp, social media forms, Facebook messages, Instagram messages, and more.
              </p>
            </div>
            <div className={styles.mock}>
              <svg
                viewBox="0 0 460 460"
                aria-label="Customer inquiry channels flowing into one central CRM cloud office, available 24 hours a day"
              >
                <defs>
                  <radialGradient id="al-cglow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(25, 198, 232, 0.3)" />
                    <stop offset="100%" stopColor="rgba(25, 198, 232, 0)" />
                  </radialGradient>
                </defs>
                {/* channel -> hub lines */}
                <g fill="none" stroke="var(--keyob-cyan)" strokeWidth="1.2" opacity="0.5">
                  {CHANNEL_CHIPS.map((c) => (
                    <path
                      key={`line-${c.label}`}
                      className="travel"
                      d={`M${c.x} ${c.y} L${c.ix} ${c.iy}`}
                      style={{ animationDelay: `${c.delay}s` }}
                    />
                  ))}
                </g>
                {/* channel chips */}
                <g>
                  {CHANNEL_CHIPS.map((c) => (
                    <g key={`chip-${c.label}`}>
                      <rect
                        x={c.x - c.w / 2}
                        y={c.y - 11}
                        width={c.w}
                        height="22"
                        rx="11"
                        fill="rgba(255, 255, 255, 0.05)"
                        stroke="rgba(255, 255, 255, 0.18)"
                      />
                      <text
                        x={c.x}
                        y={c.y + 4}
                        fontFamily="JetBrains Mono, ui-monospace, monospace"
                        fontSize="8.5"
                        fill="rgba(255, 255, 255, 0.74)"
                        textAnchor="middle"
                      >
                        {c.label}
                      </text>
                    </g>
                  ))}
                </g>
                {/* centre glow + CRM cloud office */}
                <circle cx="230" cy="230" r="98" fill="url(#al-cglow)" />
                <g>
                  <rect
                    x="150"
                    y="176"
                    width="160"
                    height="118"
                    rx="13"
                    fill="rgba(10, 22, 35, 0.94)"
                    stroke="rgba(25, 198, 232, 0.4)"
                  />
                  <rect
                    x="150"
                    y="176"
                    width="160"
                    height="24"
                    rx="13"
                    fill="rgba(255, 255, 255, 0.05)"
                  />
                  <text
                    x="164"
                    y="192"
                    fontFamily="JetBrains Mono, ui-monospace, monospace"
                    fontSize="8.5"
                    fill="rgba(255, 255, 255, 0.82)"
                  >
                    Aleesa.ai · CRM
                  </text>
                  {/* 24/7 indicator */}
                  <circle className="pulse" cx="296" cy="188" r="3.4" fill="#34d399" />
                  <text
                    x="286"
                    y="216"
                    fontFamily="JetBrains Mono, ui-monospace, monospace"
                    fontSize="7"
                    fill="#34d399"
                    textAnchor="end"
                  >
                    24/7
                  </text>
                  {/* lead rows / task cards */}
                  <g>
                    <rect
                      x="162"
                      y="210"
                      width="136"
                      height="22"
                      rx="6"
                      fill="rgba(255, 255, 255, 0.05)"
                    />
                    <circle cx="174" cy="221" r="3.5" fill="var(--keyob-cyan)" />
                    <rect x="184" y="218" width="62" height="5" rx="2.5" fill="rgba(255, 255, 255, 0.32)" />
                    <rect x="270" y="215" width="22" height="11" rx="5.5" fill="rgba(25, 198, 232, 0.22)" />

                    <rect
                      x="162"
                      y="238"
                      width="136"
                      height="22"
                      rx="6"
                      fill="rgba(255, 255, 255, 0.05)"
                    />
                    <circle cx="174" cy="249" r="3.5" fill="#5EE0FF" />
                    <rect x="184" y="246" width="52" height="5" rx="2.5" fill="rgba(255, 255, 255, 0.32)" />
                    <rect x="270" y="243" width="22" height="11" rx="5.5" fill="rgba(52, 211, 153, 0.25)" />

                    <rect
                      x="162"
                      y="266"
                      width="136"
                      height="22"
                      rx="6"
                      fill="rgba(255, 255, 255, 0.05)"
                    />
                    <circle cx="174" cy="277" r="3.5" fill="var(--keyob-cyan)" />
                    <rect x="184" y="274" width="58" height="5" rx="2.5" fill="rgba(255, 255, 255, 0.32)" />
                    <rect x="270" y="271" width="22" height="11" rx="5.5" fill="rgba(25, 198, 232, 0.22)" />
                  </g>
                </g>
                <text
                  x="230"
                  y="324"
                  fontFamily="Fraunces, var(--keyob-serif), serif"
                  fontStyle="italic"
                  fontSize="14"
                  fill="#fff"
                  textAnchor="middle"
                >
                  One cloud office
                </text>
              </svg>
            </div>
          </div>
        </header>

        {/* 2. SNAPSHOT */}
        <section data-reveal className={styles.snapshot}>
          <div className={styles.snapGrid}>
            <div className={styles.snap}>
              <div className={styles.lab}>Origin</div>
              <div className={styles.val}>Australian health clinic</div>
              <p>Aleesa.ai started from a real reception and inquiry-handling requirement.</p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Starting point</div>
              <div className={styles.val}>AI receptionist</div>
              <p>The first version focused on listening to customer calls and capturing important details.</p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Evolution</div>
              <div className={cx(styles.val, styles.azure)}>Automated office</div>
              <p>Expanded into multi-channel lead capture, CRM, task assignment, and workflow automation.</p>
            </div>
            <div className={styles.snap}>
              <div className={styles.lab}>Availability</div>
              <div className={styles.val}>24/7 cloud layer</div>
              <p>Keeps capturing and organizing leads even when the team is busy or offline.</p>
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
              <div className={styles.bodyCopy}>
                <p>
                  The original requirement came from an Australian health clinic. The clinic was
                  receiving customer inquiries through calls and other scattered channels, but
                  not every inquiry was being handled consistently.
                </p>
                <p>
                  Some calls were missed. Some leads were not captured properly. Some follow-ups
                  depended on staff memory. Some inquiries arrived outside office hours. The
                  clinic needed a better way to listen, respond, and organize potential customers
                  without adding pressure to the team.
                </p>
                <p>
                  The need was simple, but important: no inquiry should disappear just because
                  the team was busy, unavailable, or working across too many channels. That was
                  the starting point for Aleesa.ai.
                </p>
              </div>
              <BusyLine />
            </div>
          </div>
        </section>

        {/* 4. THE CHALLENGE */}
        <section data-reveal className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The challenge</div>
              <h2 className={styles.h2}>
                Businesses lose leads not from lack of demand — but because{' '}
                <em>demand arrives in too many places.</em>
              </h2>
            </div>
            <div className={styles.two}>
              <div className={styles.bodyCopy}>
                <p>
                  Modern businesses receive inquiries everywhere: calls, website forms, WhatsApp
                  messages, Facebook messages, Instagram messages, social media lead forms,
                  contact forms, direct messages, missed calls, and after-hours inquiries.
                </p>
                <p>
                  Each channel may work on its own, but together they create operational noise.
                  Teams often spend too much time checking inboxes, copying information,
                  assigning follow-ups, and trying to remember what happened. For small offices,
                  clinics, service providers, and growing businesses, leads are coming in — but
                  there is no intelligent place to manage them.
                </p>
              </div>
              <ul className={styles.problems} style={{ maxWidth: 'none' }}>
                {PROBLEMS.map((p) => (
                  <li key={p}>
                    <span className={styles.x}>{XIcon}</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. WHAT KEYOB BUILT */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>What KEYOB built</div>
              <h2 className={styles.h2}>
                Aleesa.ai became an <em>automated office layer.</em>
              </h2>
            </div>
            <div className={styles.two}>
              <div className={styles.bodyCopy}>
                <p>
                  KEYOB developed Aleesa.ai as a cloud-based automated office that captures leads
                  from multiple sources and brings them into one manageable system.
                </p>
                <p>
                  The product started as an AI receptionist that could listen to customer calls
                  and support front-desk workflows. Over time, it evolved into a broader
                  operating layer for small offices — combining intake, CRM, task assignment,
                  follow-up, and automation.
                </p>
                <p>
                  Aleesa.ai does not replace the business team. It gives the team a system that
                  keeps working even when people are busy, offline, or away from the desk.
                </p>
              </div>
              <AiCapture />
            </div>
          </div>
        </section>

        {/* 6. CORE CAPABILITIES */}
        <section data-reveal className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>Core capabilities</div>
              <h2 className={styles.h2}>
                One layer that listens, captures, <em>and keeps work moving.</em>
              </h2>
            </div>
            <div className={styles.capsGrid}>
              {CAPS.map(([key, title, body]) => (
                <div key={key} className={styles.ccard}>
                  <div className={styles.ic}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      {ICON[key]}
                    </svg>
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
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
                From answering calls to running{' '}
                <em>the intake layer of a business.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                The real shift happened when Aleesa.ai moved beyond calls. The original problem
                was reception. But the wider business problem was intake.
              </p>
              <p>
                A business does not only need someone to answer the phone. It needs every inquiry
                captured, structured, routed, assigned, and followed up. That is when Aleesa.ai
                evolved from an AI receptionist into an automated cloud office — the layer that
                sits above the business&apos;s communication channels and makes sure every lead
                has a place, an owner, and a next step.
              </p>
            </div>
            <div className={styles.ba}>
              <div className={cx(styles.baCard, styles.before)}>
                <div className={styles.tag}>Before</div>
                {BEFORE.map((t) => (
                  <div key={t} className={styles.baRow}>
                    <span className={styles.mk}>{XIcon}</span>
                    {t}
                  </div>
                ))}
              </div>
              <div className={styles.baArrow} aria-hidden="true">→</div>
              <div className={cx(styles.baCard, styles.after)}>
                <div className={styles.tag}>After</div>
                {AFTER.map((t) => (
                  <div key={t} className={styles.baRow}>
                    <span className={styles.mk}>{CheckIcon}</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. OUTCOME */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The outcome</div>
              <h2 className={styles.h2}>
                A small office that <em>never stops working.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                Aleesa.ai gives businesses a practical way to manage leads without building a
                large admin team.
              </p>
              <p>
                Instead of checking multiple inboxes, teams can work from one CRM. Instead of
                relying on memory, they can use tasks. Instead of losing after-hours inquiries,
                they can capture them automatically. Instead of wondering where a lead came from,
                they can see the source, status, owner, and next action. The result is a more
                organized business operation that keeps moving 24 hours a day.
              </p>
            </div>
            <ul className={styles.outcomes}>
              {OUTCOMES.map((o) => (
                <li key={o}>
                  <span className={styles.c}>{CheckIcon}</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. BIGGER KEYOB PRODUCT STORY */}
        <section data-reveal className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>The bigger product story</div>
              <h2 className={styles.h2}>
                One requirement became a product{' '}
                <em>businesses can use anywhere.</em>
              </h2>
            </div>
            <div className={styles.bodyCopy}>
              <p>
                Aleesa.ai reflects KEYOB&apos;s product philosophy. A real business problem
                appeared first: a health clinic needed a smarter reception and lead-handling
                process. KEYOB did not build a generic chatbot. It built a practical operating
                layer around the actual pressure of a small office.
              </p>
              <p>
                That product has now grown beyond the original use case. Aleesa.ai can support
                many kinds of businesses that receive customer inquiries from multiple channels
                and need one place to manage them.
              </p>
            </div>
            <div className={styles.inds}>
              {INDUSTRIES.map((i) => (
                <span key={i}>{i}</span>
              ))}
            </div>
            <div className={styles.philtag}>
              Your office should not stop working when your team is busy.
            </div>
          </div>
        </section>

        {/* 10. HUMAN TRUST */}
        <section data-reveal className={styles.sct}>
          <div className={styles.wrap}>
            <div
              className={styles.sctHead}
              style={{ textAlign: 'center', maxWidth: '58ch', margin: '0 auto 40px' }}
            >
              <div className={cx(styles.eyebrow, styles.center, styles.nobar)}>
                Human trust
              </div>
              <h2 className={styles.h2} style={{ marginTop: 14 }}>
                Most small businesses do not need <em>more inboxes.</em>
              </h2>
            </div>
            <div
              className={styles.bodyCopy}
              style={{ maxWidth: '64ch', margin: '0 auto 40px', textAlign: 'center' }}
            >
              <p>
                They need one intelligent place where every lead becomes visible, owned, and
                actionable. Aleesa.ai was designed for the real world of small offices: busy
                teams, missed calls, after-hours inquiries, scattered messages, and customers who
                expect fast response. It is not automation for show. It is automation where the
                business actually feels pressure.
              </p>
            </div>
            <div className={styles.reflect}>
              <blockquote>
                &ldquo;Aleesa.ai started as an AI receptionist. It became something bigger: an
                automated office that keeps capturing, organizing, and assigning work even when
                the business is closed.&rdquo;
              </blockquote>
              <div className={styles.by}>KEYOB — internal reflection on the product</div>
            </div>
          </div>
        </section>

        {/* 11. CAPABILITIES */}
        <section data-reveal className={cx(styles.sct, styles.alt)} id="capabilities">
          <div className={styles.wrap}>
            <div className={styles.sctHead}>
              <div className={styles.eyebrow}>Capabilities involved</div>
              <h2 className={styles.h2}>
                Capabilities involved in <em>building Aleesa.ai.</em>
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
              Still losing leads between calls, forms, <em>and inboxes?</em>
            </h2>
            <p>
              Aleesa.ai turns scattered inquiries into one organized cloud office. From calls and
              WhatsApp to website forms and social messages, every lead gets captured, arranged,
              assigned, and followed up — even when your team is busy.
            </p>
            <div className={styles.finalCta}>
              <Link href="/contact#contact" className={styles.btn}>
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
