import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { LeadersSlider } from '@/components/blocks/LeadersSlider';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'KEYOB is a Brisbane-based AI consultancy helping Australian business owners create more freedom by using AI in the right places. Learn about our story, values, and approach.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: 'About KEYOB — AI Consulting for Australian Businesses',
    description:
      'We help business owners create more freedom by using AI in the right places. Learn about our story, values, and approach.',
    url: `${siteConfig.url}/about`,
  },
};

const stats = [
  { value: 'Brisbane', label: 'Headquartered in Queensland, Australia' },
  { value: 'AU & NZ', label: 'Serving businesses across Australia and New Zealand' },
  { value: 'Free', label: 'First AI assessment — no obligation, no cost' },
  { value: '5 yrs', label: 'Building practical AI systems for business owners' },
];

const values = [
  {
    title: 'Practical over theoretical',
    body: 'We do not sell concepts. Every recommendation we make is grounded in what will actually work in your specific business — not in what looks impressive in a slide deck.',
    icon: '<path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>',
  },
  {
    title: 'Business first, technology second',
    body: 'We start with your business problem, not with a tool. The right technology is chosen after we understand the process, the people, and the outcome you are trying to create.',
    icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/><path d="M9 22V12h6v10"/>',
  },
  {
    title: 'Outcomes over deliverables',
    body: 'A system going live is not success. Success is your business running with less manual work, lower costs, and more visibility. We measure our work by the impact it creates.',
    icon: '<path d="M3 17l6-6 4 4 8-9"/><path d="M14 6h7v7"/>',
  },
  {
    title: 'Partnership over vendor',
    body: 'We are not interested in one-off project delivery. We build long-term relationships with the businesses we work with — growing the system as the business grows.',
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  },
  {
    title: 'Clarity before complexity',
    body: 'Before building anything, we map how your business actually works. This discovery work is the foundation everything else is built on — and it prevents the most expensive mistakes.',
    icon: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M11 8v3l2 2"/>',
  },
  {
    title: 'Build for durability',
    body: 'We design systems that are maintainable, adaptable, and built to grow with your business. We do not build things that only we can support.',
    icon: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  },
];

const differentiators = [
  {
    num: '01',
    title: 'We start with discovery, not software',
    body: 'Most consultancies arrive with a preferred tool and work backwards. We start by understanding your operations — how work actually flows, where time is lost, where costs accumulate — before we recommend or build anything.',
  },
  {
    num: '02',
    title: 'We measure by business outcomes',
    body: 'Time saved. Costs reduced. Revenue supported. These are the numbers we care about. Not lines of code, not features shipped, not dashboards built. The measure of our work is whether your business got better.',
  },
  {
    num: '03',
    title: 'We build for the long term',
    body: 'Every engagement is designed so the business ends up more capable — not more dependent on us. We train teams, document systems, and build infrastructure that is owned by the business.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>

        {/* HERO */}
        <section className="about-hero">
          <div className="wrap">
            <div className="about-hero-text">
              <span className="eyebrow" style={{ marginBottom: 20, display: 'inline-block' }}>
                About KEYOB
              </span>
              <h1 className="about-h1">
                We help business owners create more freedom —
                <em> using AI in the right places.</em>
              </h1>
              <p className="about-lead">
                KEYOB is a Brisbane-based AI consultancy built on a simple belief: technology
                should make your business easier to run, not harder. We work with business owners
                and leadership teams who want practical results — not experiments.
              </p>
              <div className="about-hero-ctas">
                <Link href="/#contact" className="btn-primary">
                  Book a free AI assessment
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/#capabilities" className="btn-ghost">
                  See what we do
                </Link>
              </div>
            </div>
          </div>
          <div className="about-hero-image">
            <Image
              src="/aboutus_v2.png"
              alt="KEYOB team — delivering practical AI transformation for Australian businesses"
              width={1625}
              height={360}
              priority
              className="about-hero-img"
            />
          </div>
        </section>

        {/* STATS */}
        <section className="about-stats">
          <div className="wrap">
            <div className="about-stats-grid">
              {stats.map((s) => (
                <div key={s.value} className="about-stat">
                  <span className="about-stat-value">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="about-story">
          <div className="wrap">
            <div className="about-story-grid">
              <div className="about-story-left">
                <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>
                  Who we are
                </span>
                <h2 className="about-h2">
                  Strategy. Engineering. <em>AI.</em>
                </h2>
              </div>
              <div className="about-story-right">
                <p className="about-p">
                  At KEYOB, we help businesses move from fragmented systems and manual processes
                  to smarter, connected, and high-performing operations.
                </p>
                <p className="about-p">
                  With deep experience across software engineering, cybersecurity, identity
                  governance, ERP, automation, and AI, we design and deliver practical technology
                  solutions that reduce cost, improve efficiency, and unlock new growth
                  opportunities.
                </p>
                <p className="about-p">
                  Our strength is not only in building technology, but in understanding how
                  businesses actually work. We combine strategy, architecture, engineering, and AI
                  implementation to help organisations modernise their operations from end to end.
                </p>
                <p className="about-p">
                  KEYOB is built for the AI era. We help businesses identify the right AI
                  opportunities, design the right systems, and implement solutions that create
                  measurable business value.
                </p>
                <p className="about-p about-p--strong">
                  KEYOB defines how practical AI transformation is delivered — from strategy to
                  execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE BELIEVE */}
        <section className="about-values">
          <div className="wrap">
            <div className="about-section-head">
              <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>
                What we believe
              </span>
              <h2 className="about-h2">
                Six principles that shape <em>how we work.</em>
              </h2>
            </div>
            <div className="about-values-grid">
              {values.map((v) => (
                <div key={v.title} className="about-value">
                  <span className="about-value-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" dangerouslySetInnerHTML={{ __html: v.icon }} />
                  </span>
                  <h3 className="about-value-title">{v.title}</h3>
                  <p className="about-value-body">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE'RE DIFFERENT */}
        <section className="about-diff">
          <div className="wrap">
            <div className="about-diff-inner">
              <div className="about-diff-left">
                <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>
                  How we&apos;re different
                </span>
                <h2 className="about-h2">
                  Three things that separate <em>KEYOB from the rest.</em>
                </h2>
                <p className="about-p" style={{ marginTop: 20 }}>
                  There is no shortage of technology consultancies. What is scarce is a partner
                  who starts with your business, measures by your outcomes, and builds something
                  that lasts.
                </p>
              </div>
              <div className="about-diff-right">
                {differentiators.map((d) => (
                  <div key={d.num} className="about-diff-item">
                    <span className="about-diff-num">{d.num}</span>
                    <div>
                      <h3 className="about-diff-title">{d.title}</h3>
                      <p className="about-diff-body">{d.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LEADERS SLIDER */}
        <LeadersSlider />

        {/* FOUNDER */}
        <section className="about-founder">
          <div className="wrap">
            <div className="about-founder-card">
              <div className="about-founder-avatar" aria-hidden="true">JS</div>
              <div className="about-founder-content">
                <span className="eyebrow" style={{ color: 'var(--keyob-cyan)', marginBottom: 20, display: 'inline-block' }}>
                  From the founder
                </span>
                <blockquote className="about-founder-quote">
                  &ldquo;Most business owners have more on their plate than they should. The businesses
                  that get ahead are the ones that stop doing manually what a well-designed system
                  could do automatically. That is what AI is really for — not as a novelty, but as
                  a genuine way to give you and your team more time, more clarity, and more room
                  to grow. KEYOB exists to make that practical and real for every business we
                  work with.&rdquo;
                </blockquote>
                <div className="about-founder-who">
                  <strong>Jawad Siddique</strong>
                  <span>Founder &amp; CEO — KEYOB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHERE WE WORK */}
        <section className="about-locations">
          <div className="wrap">
            <div className="about-locations-inner">
              <div>
                <span className="eyebrow" style={{ marginBottom: 16, display: 'inline-block' }}>
                  Where we work
                </span>
                <h2 className="about-h2">
                  Based in Brisbane. <em>Working across Australia.</em>
                </h2>
                <p className="about-p" style={{ marginTop: 20, maxWidth: '44ch' }}>
                  Our office is at Level 1, 67 Springwood Road, Springwood. We work with businesses
                  across Australia and New Zealand — in-person where it matters, remote where it works.
                </p>
              </div>
              <div className="about-locations-cards">
                <div className="about-location">
                  <span className="about-location-badge">HQ</span>
                  <h4 className="about-location-city">Brisbane</h4>
                  <p className="about-location-addr">Level 1, 67 Springwood Road<br />Springwood, QLD 4127<br />Australia</p>
                </div>
                <div className="about-location">
                  <span className="about-location-badge">Operations</span>
                  <h4 className="about-location-city">Australia-wide</h4>
                  <p className="about-location-addr">Serving businesses<br />across all states<br />and New Zealand</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="about-cta-section">
          <div className="wrap">
            <div className="about-cta-card">
              <div>
                <span className="eyebrow" style={{ color: 'var(--keyob-cyan)', marginBottom: 16, display: 'inline-block' }}>
                  Free AI Assessment
                </span>
                <h2 className="about-cta-h2">
                  Let&apos;s find where AI could create <em>the next opportunity</em> in your business.
                </h2>
                <p className="about-cta-body">
                  No obligation. Just a focused conversation about where you are and what&apos;s
                  possible. We&apos;ll help you identify simple, practical ways to save time,
                  reduce costs, improve performance, and support growth.
                </p>
                <div className="about-hero-ctas" style={{ marginTop: 32 }}>
                  <Link href="/#contact" className="btn-primary">
                    Book your free AI assessment
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="about-cta-visual" aria-hidden="true">
                <span className="acv-num">01</span>
                <span className="acv-label">Discovery call</span>
                <span className="acv-num">02</span>
                <span className="acv-label">AI opportunity map</span>
                <span className="acv-num">03</span>
                <span className="acv-label">Practical roadmap</span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About KEYOB',
          description: metadata.description as string,
          url: `${siteConfig.url}/about`,
          mainEntity: {
            '@type': 'Organization',
            name: 'KEYOB',
            founder: { '@type': 'Person', name: 'Jawad Siddique' },
            foundingDate: '2020',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Level 1, 67 Springwood Road',
              addressLocality: 'Springwood',
              addressRegion: 'QLD',
              postalCode: '4127',
              addressCountry: 'AU',
            },
          },
        }}
      />
    </>
  );
}
