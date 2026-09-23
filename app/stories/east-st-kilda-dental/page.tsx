/* eslint-disable no-restricted-syntax --
 * Bespoke client-story page modeled after east-st-kilda-dental-story.html. The
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

const SLUG = 'east-st-kilda-dental';
const TITLE =
  'East St Kilda Dental — website, hosting and SEO, AEO and GEO for a 45 year old practice';
const DESCRIPTION =
  "How KEYOB rebuilt the website for East St Kilda Dental, a family practice caring for Melbourne's inner south-east since 1980, then hosted it, built its search and AI visibility, and continues to maintain it.";
const SHORT_DESCRIPTION =
  'Four decades of word of mouth, given a website that lets new patients find it.';

const OG_IMAGES = [
  {
    url: '/cases/east-st-kilda-dental-og.jpg',
    width: 1200,
    height: 630,
    alt: 'East St Kilda Dental website, local search result and AI assistant answer',
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'East St Kilda Dental',
    'dental website design',
    'local SEO',
    'answer engine optimisation',
    'generative engine optimisation',
    'website hosting',
    'suburb landing pages',
    'dentist St Kilda East',
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
    val: 'East St Kilda Dental',
    body: 'Family and general dental practice, St Kilda East, caring locally since around 1980.',
  },
  {
    lab: 'Scope',
    val: 'Build, host, grow, maintain',
    body: 'Website, hosting, SEO, AEO and GEO, then ongoing care.',
  },
  {
    lab: 'Reach',
    val: '20 suburb pages',
    azure: true,
    body: "Plus 22 service pages across Melbourne's inner south-east.",
  },
  {
    lab: 'Status',
    val: 'Live and looked after',
    azure: true,
    body: 'KEYOB hosts and maintains the site today.',
  },
];

const CHALLENGES: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'The decision happens before the phone call',
    body: 'Anxious patients read everything first. They want to know what the first visit involves, whether they will be judged, and what it will cost. If the site does not answer those questions, they close the tab and put it off another year.',
  },
  {
    n: '02',
    title: 'Health advertising has rules',
    body: 'Dental practices sit under the national advertising guidelines for health practitioners. Copy has to be accurate, balanced and free of the promises other industries take for granted. Warmth had to come from tone and clarity rather than claims.',
  },
  {
    n: '03',
    title: 'Local search works suburb by suburb',
    body: 'People search for a dentist in their own suburb, not in "Melbourne’s inner south-east". A practice on a busy corner serves more than twenty surrounding suburbs, and each needed to be discoverable on its own terms.',
  },
  {
    n: '04',
    title: 'AI assistants now answer first',
    body: 'More and more people ask an AI assistant which dentist to see, or why their gums bleed, before they ever click a link. Being quoted in that answer requires a different kind of preparation from ranking on page one.',
  },
];

const PHASES: { k: string; title: string; body: string }[] = [
  {
    k: 'Stage 01',
    title: 'Understanding the practice',
    body: 'Time with the team to learn how the practice actually runs: who walks in, what they are worried about, which questions reception answers ten times a day, and what makes this clinic different from the one down the road.',
  },
  {
    k: 'Stage 02',
    title: 'Structure built around patient questions',
    body: 'An information architecture organised the way patients think. By what they need (a first visit, an emergency, a check-up), by concern (bleeding gums, a broken tooth, toothache), by where they live, and by what it will cost.',
  },
  {
    k: 'Stage 03',
    title: 'Content and design',
    body: "Copy written in the practice's own voice: calm, plain and judgement-free, with the first visit explained in full and fees addressed openly. A soft, warm design that feels closer to a welcoming waiting room than a clinical brochure.",
  },
  {
    k: 'Stage 04',
    title: 'Build and hosting',
    body: 'A fast, modern site built to work well on a phone in a waiting room or a bus shelter, then deployed on hosting KEYOB manages, so performance, security and uptime sit with one accountable team.',
  },
  {
    k: 'Stage 05',
    title: 'SEO, AEO and GEO',
    body: 'Search, answer and generative engine optimisation built in from the start rather than bolted on afterwards. More on this below, because it is where most of the lasting value sits.',
  },
  {
    k: 'Stage 06',
    title: 'Ongoing care',
    body: 'KEYOB continues to maintain the site: updates, content changes, technical health and search performance. A website that is looked after keeps earning; one that is left alone slowly stops.',
  },
];

const LAYERS: { k: string; title: string; q: string; body: string }[] = [
  {
    k: 'SEO',
    title: 'Ranking in search',
    q: '"dentist elwood"',
    body: 'Dedicated local pages for twenty surrounding suburbs, each with genuine directions, transport and parking detail rather than a swapped place name. Clean technical foundations, fast pages, local business data and consistent practice details everywhere they appear.',
  },
  {
    k: 'AEO',
    title: 'Being the answer',
    q: '"why are my gums bleeding?"',
    body: 'Question-led education articles and a dental FAQ, written so a search engine can lift a clear, accurate answer directly. Structured data tells engines exactly what each page is: a service, a question and answer, a local practice.',
  },
  {
    k: 'GEO',
    title: 'Being cited by AI',
    q: '"gentle dentist for nervous patients near St Kilda?"',
    body: 'Generative assistants recommend what they can understand and verify. Plain facts stated consistently, a clear account of who the practice is for, and substantive content give AI systems something reliable to draw on when they answer.',
  },
];

const OUTCOMES = [
  'A new digital look that reflects four decades of care, warm and calm rather than clinical.',
  'A site structured around real patient questions, with reassurance placed between discovery and booking.',
  'Local visibility across twenty surrounding suburbs, each with its own genuinely useful page.',
  'Educational content and structured data prepared for search answers and AI assistants.',
  'Online booking and click-to-call throughout, so interest turns into an appointment.',
  'Hosting, maintenance and search care handled by one team, so the site keeps improving rather than ageing.',
];

const CAP_TAGS = [
  'Website design',
  'Website development',
  'Content writing',
  'Information architecture',
  'Hosting',
  'Local SEO',
  'Answer engine optimisation',
  'Generative engine optimisation',
  'Structured data',
  'Suburb landing pages',
  'Online booking',
  'Health advertising compliance',
  'Ongoing maintenance',
];

const SITE_MAP_L1 = ['22 SERVICES', '20 SUBURBS', 'EDUCATION'];
const SITE_MAP_L2 = ['FIRST VISIT', 'NERVOUS PATIENTS', 'FEES & FUNDS'];

const CHANNELS: { label: string; y: number; tone: 'plain' | 'search' | 'ai' }[] = [
  { label: 'WORD OF MOUTH', y: 40, tone: 'plain' },
  { label: 'GOOGLE SEARCH', y: 140, tone: 'search' },
  { label: 'AI ASSISTANTS', y: 240, tone: 'ai' },
];

const CHANNEL_FILL = {
  plain: 'rgba(255,255,255,.06)',
  search: 'rgba(25,198,232,.10)',
  ai: 'rgba(94,224,255,.14)',
};
const CHANNEL_STROKE = {
  plain: 'rgba(255,255,255,.26)',
  search: 'rgba(25,198,232,.5)',
  ai: 'rgba(94,224,255,.55)',
};
const CHANNEL_TEXT = {
  plain: 'rgba(255,255,255,.82)',
  search: '#7FD8FB',
  ai: '#5EE0FF',
};

const MONO = 'JetBrains Mono, ui-monospace, monospace';

const articleLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'East St Kilda Dental: website, hosting and search visibility for a practice caring locally since 1980',
  description:
    "How KEYOB rebuilt, hosted and grew the search and AI visibility of East St Kilda Dental's website.",
  author: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  publisher: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  about: {
    '@type': 'Dentist',
    name: 'East St Kilda Dental',
    url: 'https://eaststkildadental.com.au',
  },
  mainEntityOfPage: `${siteConfig.url}/stories/${SLUG}`,
  articleSection: 'Brand & Web',
  keywords: 'website design, hosting, local SEO, answer engine optimisation, generative engine optimisation',
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
      name: 'East St Kilda Dental',
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

export default function EastStKildaDentalStoryPage() {
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
                East St Kilda Dental
              </div>
              <div className={cx(styles.eyebrow, styles.nobar)}>
                Website · Hosting · SEO, AEO &amp; GEO · Ongoing care
              </div>
              <h1>
                Forty-five years of trust, now <em>easy to find.</em>
              </h1>
              <p className={styles.sub}>
                East St Kilda Dental has looked after families on the corner of Dandenong and Orrong
                Roads since around 1980. Children it treated now bring their own children. Most new
                patients still arrive because someone told a friend.
              </p>
              <p className={styles.sub}>
                That reputation was built in the chair. The practice wanted a digital presence that
                carried the same warmth and made it just as easy for a stranger to choose them.
              </p>
              <div className={styles.heroCta}>
                <a
                  className={styles.btn}
                  href="https://eaststkildadental.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the site <span className={styles.arr}>→</span>
                </a>
                <a className={styles.btnGhost} href="#search">
                  How they get found now
                </a>
              </div>
            </div>

            {/* word of mouth, search and AI assistants all arriving at the same door */}
            <div className={styles.mock}>
              <svg
                viewBox="0 0 460 330"
                aria-label="Word of mouth, Google search and AI assistants all leading to the same practice"
              >
                <g fontFamily={MONO} fontSize="9">
                  {CHANNELS.map((c) => (
                    <g key={c.label}>
                      <rect
                        x="14"
                        y={c.y}
                        width="150"
                        height="40"
                        rx="9"
                        fill={CHANNEL_FILL[c.tone]}
                        stroke={CHANNEL_STROKE[c.tone]}
                      />
                      <text
                        x="89"
                        y={c.y + 24}
                        textAnchor="middle"
                        fill={CHANNEL_TEXT[c.tone]}
                      >
                        {c.label}
                      </text>
                    </g>
                  ))}
                </g>
                <path
                  className="travel"
                  d="M164 60 C 230 60 240 160 300 160"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  className="travel"
                  d="M164 160 H300"
                  stroke="rgba(25,198,232,.6)"
                  strokeWidth="1.6"
                  fill="none"
                />
                <path
                  className="travel"
                  d="M164 260 C 230 260 240 160 300 160"
                  stroke="rgba(94,224,255,.65)"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* the practice: a house-shaped door */}
                <g transform="translate(300,104)">
                  <path
                    d="M0 50 L60 6 L120 50 V112 a8 8 0 0 1 -8 8 H8 a8 8 0 0 1 -8 -8 Z"
                    fill="rgba(255,255,255,.07)"
                    stroke="rgba(255,255,255,.5)"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="44"
                    y="64"
                    width="32"
                    height="56"
                    rx="4"
                    fill="rgba(25,198,232,.26)"
                    stroke="#5EE0FF"
                    strokeWidth="1.4"
                  />
                  <circle className="pulse" cx="70" cy="94" r="2.6" fill="#5EE0FF" />
                </g>
                <text
                  x="360"
                  y="252"
                  textAnchor="middle"
                  fontFamily={MONO}
                  fontSize="9.5"
                  fill="rgba(255,255,255,.55)"
                >
                  SAME PRACTICE
                </text>
                <text
                  x="360"
                  y="266"
                  textAnchor="middle"
                  fontFamily={MONO}
                  fontSize="9.5"
                  fill="rgba(255,255,255,.55)"
                >
                  MORE WAYS IN
                </text>
              </svg>
              <div className={styles.heroCap}>
                THE REFERRAL NOW HAPPENS ON A SCREEN AS OFTEN AS OVER A FENCE
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
                A reputation earned offline, waiting to be <em>seen online.</em>
              </h2>
            </div>
            <div className={styles.two}>
              <div data-reveal className={styles.bodyCopy}>
                <p>
                  Very few businesses reach four decades. The ones that do usually got there by
                  being consistently good at the work and kind to the people in front of them. East
                  St Kilda Dental is one of those.
                </p>
                <p>
                  What changes over forty years is how people choose. A family moving into Elwood or
                  Caulfield today is as likely to type &ldquo;gentle dentist near me&rdquo; into a
                  phone, or ask an AI assistant, as they are to ask the neighbours. Someone who has
                  avoided the dentist for five years will read a practice&apos;s website very
                  carefully before they are brave enough to call.
                </p>
                <p>
                  The practice&apos;s digital presence had simply not kept pace with its reputation.
                  Nothing about that was urgent. It was a question of whether a stranger could see
                  what long-term patients already knew.
                </p>
                <p>
                  <b>The brief:</b> a new digital look that felt as warm and unhurried as a visit, a
                  site built to be found by people who had never heard of the practice, and someone
                  to look after it properly afterwards.
                </p>
              </div>

              <div data-reveal className={cx(styles.vis, styles.d1)}>
                <svg
                  viewBox="0 0 420 300"
                  aria-label="How new patients choose over time: word of mouth stays steady, search rises, and AI assistants arrive most recently"
                >
                  <text
                    x="210"
                    y="30"
                    textAnchor="middle"
                    fontFamily={MONO}
                    fontSize="9.5"
                    fill="var(--ink-dim)"
                  >
                    HOW NEW PATIENTS CHOOSE
                  </text>
                  <g fontFamily={MONO} fontSize="9" fill="#8A97A5">
                    <text x="40" y="276" textAnchor="middle">1980</text>
                    <text x="150" y="276" textAnchor="middle">2000</text>
                    <text x="260" y="276" textAnchor="middle">2015</text>
                    <text x="380" y="276" textAnchor="middle">TODAY</text>
                  </g>
                  <line x1="30" y1="258" x2="392" y2="258" stroke="var(--line-2)" strokeWidth="1.4" />
                  {/* word of mouth: steady band */}
                  <path
                    d="M30 150 C 140 140 260 150 392 162"
                    stroke="var(--ink-dim)"
                    strokeWidth="3"
                    fill="none"
                  />
                  <text x="36" y="136" fontFamily={MONO} fontSize="9" fill="var(--ink-dim)">
                    WORD OF MOUTH
                  </text>
                  {/* search: rising */}
                  <path
                    d="M150 244 C 220 236 280 170 392 96"
                    stroke="var(--keyob-cyan)"
                    strokeWidth="3"
                    fill="none"
                  />
                  <text x="300" y="90" fontFamily={MONO} fontSize="9" fill="var(--keyob-cyan)">
                    SEARCH
                  </text>
                  {/* AI: arriving */}
                  <path
                    className="travel"
                    d="M300 250 C 340 236 362 180 392 118"
                    stroke="var(--keyob-blue)"
                    strokeWidth="2.4"
                    fill="none"
                  />
                  <text x="300" y="226" fontFamily={MONO} fontSize="9" fill="var(--keyob-blue)">
                    AI ASSISTANTS
                  </text>
                </svg>
                <div className={styles.visCap}>
                  REFERRALS NEVER STOPPED. NEW WAYS OF CHOOSING WERE ADDED ON TOP.
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
                A dental website is judged by people who are <em>already nervous.</em>
              </h2>
              <p className={styles.sub}>Four things shaped every decision we made.</p>
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
                From listening to <em>looking after it.</em>
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
        <section className={styles.sct}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={styles.eyebrow}>What we built</div>
              <h2 className={styles.h2}>
                A site that answers the question <em>before it is asked.</em>
              </h2>
            </div>
            <div className={styles.two}>
              <div data-reveal className={styles.bodyCopy}>
                <p>
                  <b>A first visit explained in full.</b> A dedicated page for the new patient visit
                  sets out what happens, how long it takes and what is included, which removes the
                  single biggest source of hesitation for people who have stayed away.
                </p>
                <p>
                  <b>A home for nervous patients.</b> A page written directly for people who are
                  frightened of the dentist, in language that never makes them feel at fault for how
                  long it has been.
                </p>
                <p>
                  <b>Twenty-two service pages.</b> Preventive, restorative, cosmetic, orthodontic,
                  implant and emergency care, each written to explain rather than sell.
                </p>
                <p>
                  <b>Honest cost information.</b> A fees guide, payment options, the twelve major
                  health funds accepted, and guidance on using superannuation for treatment.
                </p>
                <p>
                  <b>A dental education library.</b> Clear articles on the questions people search
                  at night, from bleeding gums to what to expect after years away.
                </p>
                <p>
                  <b>Booking without friction.</b> Online booking, click-to-call throughout, and a
                  contact form that asks who you are and what you need so the practice can reply
                  properly.
                </p>
              </div>

              <div data-reveal className={cx(styles.vis, styles.d1)}>
                <svg
                  viewBox="0 0 420 330"
                  aria-label="Site architecture: services, suburbs and education pages lead through first visit, nervous patient and fees pages to a booking"
                >
                  <g fontFamily={MONO} fontSize="9">
                    <rect x="140" y="12" width="140" height="32" rx="8" fill="var(--keyob-deep)" />
                    <text x="210" y="32" textAnchor="middle" fill="#fff">
                      HOME
                    </text>

                    {SITE_MAP_L1.map((label, i) => (
                      <g key={label}>
                        <rect
                          x={8 + i * 139}
                          y="88"
                          width="126"
                          height="30"
                          rx="7"
                          fill="var(--bg-soft)"
                          stroke="var(--line-2)"
                        />
                        <text x={71 + i * 139} y="107" textAnchor="middle" fill="var(--ink)">
                          {label}
                        </text>
                      </g>
                    ))}

                    {SITE_MAP_L2.map((label, i) => (
                      <g key={label}>
                        <rect
                          x={8 + i * 139}
                          y="156"
                          width="126"
                          height="30"
                          rx="7"
                          fill="rgba(25,198,232,.10)"
                          stroke="rgba(25,198,232,.5)"
                        />
                        <text
                          x={71 + i * 139}
                          y="175"
                          textAnchor="middle"
                          fill="var(--keyob-navy)"
                        >
                          {label}
                        </text>
                      </g>
                    ))}

                    <rect x="140" y="236" width="140" height="36" rx="18" fill="var(--keyob-cyan)" />
                    <text x="210" y="258" textAnchor="middle" fill="#022">
                      BOOK A VISIT
                    </text>
                  </g>
                  <g stroke="var(--line-2)" strokeWidth="1.2" fill="none">
                    <path d="M210 44 V66 M71 66 H349 M71 66 V88 M210 66 V88 M349 66 V88" />
                    <path d="M71 118 V156 M210 118 V156 M349 118 V156" />
                  </g>
                  <g className="travel" stroke="var(--keyob-cyan)" strokeWidth="1.5" fill="none">
                    <path d="M71 186 C 71 216 160 212 190 236" />
                    <path d="M210 186 V236" />
                    <path d="M349 186 C 349 216 260 212 230 236" />
                  </g>
                  <text
                    x="210"
                    y="304"
                    textAnchor="middle"
                    fontFamily={MONO}
                    fontSize="9.5"
                    fill="#8A97A5"
                  >
                    EVERY WORRY ANSWERED ON THE WAY TO BOOKING
                  </text>
                </svg>
                <div className={styles.visCap}>
                  REASSURANCE PAGES SIT BETWEEN DISCOVERY AND THE BOOKING BUTTON
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SEO / AEO / GEO */}
        <section className={cx(styles.sct, styles.dark)} id="search">
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={styles.eyebrow}>Being found</div>
              <h2 className={styles.h2}>
                Three kinds of search, <em>one practice.</em>
              </h2>
              <p className={styles.sub}>
                A patient can now find a dentist three different ways. We built for all three, and
                they reinforce each other.
              </p>
            </div>
            <div className={styles.layers}>
              {LAYERS.map((l, i) => (
                <div key={l.k} data-reveal className={cx(styles.layer, delay(i))}>
                  <div className={styles.k}>{l.k}</div>
                  <h3>{l.title}</h3>
                  <div className={styles.q}>{l.q}</div>
                  <p>{l.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. THE TURNING POINT */}
        <section className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div data-reveal className={cx(styles.sctHead, styles.center)}>
              <div className={cx(styles.eyebrow, styles.center)}>The turning point</div>
              <h2 className={styles.h2}>
                Writing for the patient who <em>has not been in years.</em>
              </h2>
            </div>
            <div data-reveal className={cx(styles.bodyCopy, styles.center)}>
              <p>
                Early on, the conversation shifted from what the practice offers to who is most
                afraid to walk in. The answer was clear: the person who stopped going years ago and
                now feels embarrassed about it.
              </p>
              <p>
                Designing for that person changed everything else. It is why the site talks openly
                about cost, explains the first visit step by step, and keeps repeating the same
                quiet message in different ways: however long it has been, you are welcome here. A
                site that reassures the most hesitant visitor tends to work well for everyone else
                too.
              </p>
            </div>
          </div>
        </section>

        {/* 9. OUTCOME */}
        <section className={styles.sct}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={styles.eyebrow}>Where it stands</div>
              <h2 className={styles.h2}>
                Live, found, and <em>looked after.</em>
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
                The practice&apos;s patients have always done a wonderful job of recommending it.
                Now the website does that job too, for everyone who has not yet met the team.
              </p>
            </div>
          </div>
        </section>

        {/* 10. PHILOSOPHY */}
        <section className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div data-reveal className={cx(styles.sctHead, styles.center)}>
              <div className={cx(styles.eyebrow, styles.center)}>What this work taught us</div>
              <h2 className={styles.h2}>
                A website is not a launch. It is <em>a relationship.</em>
              </h2>
            </div>
            <div data-reveal className={cx(styles.bodyCopy, styles.center)}>
              <p>
                The most valuable part of this engagement is the part nobody sees: the ongoing care.
                Search engines change how they rank, AI assistants change how they answer, and a
                practice&apos;s services and team evolve. A site that is built and then left starts
                falling behind the week after launch.
              </p>
              <p>
                Established businesses do not need to be reinvented. They need their existing
                strengths made visible, and then someone who stays close enough to keep it that way.
              </p>
            </div>
          </div>
        </section>

        {/* 11. REFLECTION */}
        <section className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.reflect}>
              <blockquote>
                &ldquo;We did not need to make this practice sound better than it is. Forty-five
                years had already done that. Our job was to make sure the next patient could find
                out for themselves.&rdquo;
              </blockquote>
              <div className={styles.by}>KEYOB — internal reflection on the engagement</div>
            </div>
          </div>
        </section>

        {/* 12. CAPABILITIES */}
        <section className={styles.sct} id="capabilities">
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={styles.eyebrow}>Capabilities involved</div>
              <h2 className={styles.h2}>
                What went into <em>building and keeping it.</em>
              </h2>
            </div>
            <div data-reveal className={styles.caps}>
              {CAP_TAGS.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className={styles.final}>
          <div className={styles.finalMesh} aria-hidden="true" />
          <div data-reveal className={cx(styles.wrap, styles.in)}>
            <h2>
              Well known locally, but <em>hard to find online?</em>
            </h2>
            <p>
              If your reputation is stronger than your website, the gap is easy to close and worth
              closing. Let us have a look at where you stand today.
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
