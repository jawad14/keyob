import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { siteConfig } from '@/config/site.config';

const LAST_UPDATED = '6 June 2026';
const LAST_UPDATED_ISO = '2026-06-06';

export const metadata: Metadata = {
  title: 'Privacy Policy | KEYOB',
  description:
    'How KEYOB Pty Ltd collects, uses, stores, and protects personal information under the Australian Privacy Act 1988 and the Australian Privacy Principles.',
  alternates: { canonical: `${siteConfig.url}/privacy` },
  openGraph: {
    title: 'Privacy Policy | KEYOB',
    description:
      'How KEYOB handles your personal information, and the rights you have under Australian privacy law.',
    url: `${siteConfig.url}/privacy`,
  },
  robots: { index: true, follow: true },
};

const sections = [
  { n: '01', id: 'scope', title: 'Who this policy applies to' },
  { n: '02', id: 'collect', title: 'What information we collect' },
  { n: '03', id: 'how', title: 'How we collect it' },
  { n: '04', id: 'use', title: 'How we use your information' },
  { n: '05', id: 'marketing', title: 'Direct marketing' },
  { n: '06', id: 'sharing', title: 'Who we share information with' },
  { n: '07', id: 'overseas', title: 'Overseas disclosure' },
  { n: '08', id: 'security', title: 'How we protect your information' },
  { n: '09', id: 'retention', title: 'How long we keep it' },
  { n: '10', id: 'cookies', title: 'Cookies and analytics' },
  { n: '11', id: 'rights', title: 'Your rights' },
  { n: '12', id: 'complaints', title: 'Complaints' },
  { n: '13', id: 'changes', title: 'Changes to this policy' },
  { n: '14', id: 'contact', title: 'Contact us' },
];

export default function PrivacyPage() {
  const contactEmail = siteConfig.contact.email;
  const address = siteConfig.contact.address;

  return (
    <>
      <Nav />
      <main className="priv">
        {/* HERO */}
        <header className="priv-hero">
          <div className="priv-hero-mesh" aria-hidden="true" />
          <div className="wrap priv-hero-in">
            <div className="priv-crumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>Legal</span>
              <span>/</span>
              Privacy Policy
            </div>
            <div className="priv-tag">Legal</div>
            <h1>
              Privacy <em>Policy.</em>
            </h1>
            <p className="priv-lead">
              How KEYOB Pty Ltd collects, uses, stores, and protects your personal information —
              and the rights you have under the Australian Privacy Act 1988 and the Australian
              Privacy Principles.
            </p>
            <div className="priv-meta">
              <div className="priv-meta-cell">
                <div className="priv-meta-k">Last updated</div>
                <div className="priv-meta-v">
                  <time dateTime={LAST_UPDATED_ISO}>{LAST_UPDATED}</time>
                </div>
              </div>
              <div className="priv-meta-cell">
                <div className="priv-meta-k">Applies to</div>
                <div className="priv-meta-v">keyob.com.au &amp; our services</div>
              </div>
              <div className="priv-meta-cell">
                <div className="priv-meta-k">Framework</div>
                <div className="priv-meta-v">Australian Privacy Principles (APPs)</div>
              </div>
              <div className="priv-meta-cell">
                <div className="priv-meta-k">Contact</div>
                <div className="priv-meta-v">
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* BODY */}
        <section className="priv-body">
          <div className="wrap priv-grid">
            {/* STICKY TOC */}
            <aside className="priv-toc" aria-label="In this policy">
              <div className="priv-toc-l">In this policy</div>
              <ol>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>
                      <span className="priv-toc-n">{s.n}</span>
                      <span className="priv-toc-t">{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="priv-toc-foot">
                <a href={`mailto:${contactEmail}`} className="priv-toc-help">
                  <span className="priv-toc-help-d" aria-hidden="true" />
                  Questions? Email us
                </a>
              </div>
            </aside>

            {/* PROSE */}
            <article className="priv-prose">
              <p className="priv-intro">
                We collect only what we need to be useful to you, we keep it secure, and we never
                sell it. This page explains the detail in plain language — and what to do if you
                ever want us to access, correct, or delete information we hold about you.
              </p>

              <section id="scope" className="priv-sec">
                <div className="priv-kicker">01 · Scope</div>
                <h2>Who this policy applies to</h2>
                <p>
                  This policy covers information collected through our website, contact forms,
                  email exchanges, telephone calls, meetings, and engagements you have with KEYOB as
                  a client, prospective client, partner, or supplier.
                </p>
              </section>

              <section id="collect" className="priv-sec">
                <div className="priv-kicker">02 · Collection</div>
                <h2>What information we collect</h2>
                <p>We only collect information that is reasonably necessary for our work with you.</p>
                <ul className="priv-list">
                  <li>
                    <strong>Contact details</strong> — your name, business name, role, email
                    address, phone number, and the office or country you are based in.
                  </li>
                  <li>
                    <strong>What you share with us</strong> — what you tell us about your business,
                    systems, challenges, and the outcomes you are pursuing (for example, through
                    our free AI assessment form).
                  </li>
                  <li>
                    <strong>Engagement information</strong> — records of our correspondence,
                    proposals, agreements, invoices, and project communications.
                  </li>
                  <li>
                    <strong>Technical information</strong> — basic, non-identifying browser and
                    device data your browser sends automatically (IP address, browser type, pages
                    viewed) used to keep the site secure and understand how it is used.
                  </li>
                </ul>
                <div className="priv-note">
                  We do not knowingly collect sensitive information (as defined by the Privacy Act)
                  unless it is necessary for an engagement and you have provided express consent.
                </div>
              </section>

              <section id="how" className="priv-sec">
                <div className="priv-kicker">03 · Sources</div>
                <h2>How we collect it</h2>
                <p>We collect information directly from you when you:</p>
                <ul className="priv-list">
                  <li>complete a form on our website, including the free AI assessment form;</li>
                  <li>email, call, or meet with us;</li>
                  <li>enter into a written engagement, proposal, or contract with us;</li>
                  <li>subscribe to updates or events we publish.</li>
                </ul>
                <p>
                  Where it is unreasonable or impracticable to collect information directly from
                  you, we may collect it from publicly available sources or from a third party you
                  have authorised (for example, a colleague who introduces you).
                </p>
              </section>

              <section id="use" className="priv-sec">
                <div className="priv-kicker">04 · Use</div>
                <h2>How we use your information</h2>
                <p>We use personal information to:</p>
                <ul className="priv-list">
                  <li>respond to your enquiries and arrange a free AI assessment or consultation;</li>
                  <li>scope, deliver, and improve our consulting, software, and AI services;</li>
                  <li>send you information you have requested (such as proposals or follow-ups);</li>
                  <li>manage our business relationship, invoicing, and obligations to you;</li>
                  <li>meet our legal, regulatory, and tax obligations;</li>
                  <li>protect KEYOB, our clients, and our systems against fraud and misuse.</li>
                </ul>
                <p>
                  We will not use your information for a purpose unrelated to the reason you
                  provided it, unless you would reasonably expect us to or you have consented.
                </p>
              </section>

              <section id="marketing" className="priv-sec">
                <div className="priv-kicker">05 · Marketing</div>
                <h2>Direct marketing</h2>
                <p>
                  If you opt in to updates from us, we may send you occasional emails about our
                  work, events, or insights. Every marketing email contains a clear opt-out, and
                  you can opt out at any time by emailing{' '}
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
                </p>
              </section>

              <section id="sharing" className="priv-sec">
                <div className="priv-kicker">06 · Sharing</div>
                <h2>Who we share information with</h2>
                <p>We do not sell personal information. We may share limited information with:</p>
                <ul className="priv-list">
                  <li>
                    <strong>Trusted service providers</strong> who help us run our business — our
                    email provider (Google Workspace), accounting providers, and infrastructure
                    providers such as our hosting platform. Each is bound by its own privacy and
                    security obligations.
                  </li>
                  <li>
                    <strong>Professional advisers</strong> such as our lawyers, auditors, or
                    insurers, where reasonably necessary.
                  </li>
                  <li>
                    <strong>Government or regulatory bodies</strong> when required by law, court
                    order, or to protect our legal rights.
                  </li>
                  <li>
                    <strong>A successor entity</strong> in connection with a merger, sale, or
                    reorganisation, subject to the protections of this policy.
                  </li>
                </ul>
              </section>

              <section id="overseas" className="priv-sec">
                <div className="priv-kicker">07 · Overseas</div>
                <h2>Overseas disclosure</h2>
                <p>
                  Some of our service providers may store or process information outside Australia
                  (for example, on cloud infrastructure in the United States or the European
                  Union). Where this occurs, we take reasonable steps to ensure recipients handle
                  your information consistently with the Australian Privacy Principles.
                </p>
              </section>

              <section id="security" className="priv-sec">
                <div className="priv-kicker">08 · Security</div>
                <h2>How we protect your information</h2>
                <p>
                  We take reasonable steps to protect personal information from misuse,
                  interference, loss, unauthorised access, modification, and disclosure. These
                  steps include access controls, encrypted transmission for forms and email, vendor
                  reviews, and limiting access to those who need it. No system is perfectly secure,
                  so we encourage you not to share confidential information through unencrypted
                  channels.
                </p>
              </section>

              <section id="retention" className="priv-sec">
                <div className="priv-kicker">09 · Retention</div>
                <h2>How long we keep information</h2>
                <p>
                  We retain personal information only for as long as we need it for the purposes
                  above, or as required by law (for example, tax and corporate record-keeping
                  obligations). When information is no longer required, we take reasonable steps to
                  destroy or de-identify it.
                </p>
              </section>

              <section id="cookies" className="priv-sec">
                <div className="priv-kicker">10 · Cookies</div>
                <h2>Cookies and analytics</h2>
                <p>
                  Our website uses a small number of cookies and similar technologies to keep the
                  site functional and to understand how it is used. We aim to keep tracking minimal
                  and we do not use cookies to build advertising profiles about you. Most browsers
                  let you control or block cookies through their settings.
                </p>
              </section>

              <section id="rights" className="priv-sec">
                <div className="priv-kicker">11 · Your rights</div>
                <h2>Your rights</h2>
                <p>Under Australian privacy law you have the right to:</p>
                <ul className="priv-list">
                  <li>ask what personal information we hold about you and request access to it;</li>
                  <li>ask us to correct information that is inaccurate, out-of-date, or incomplete;</li>
                  <li>withdraw consent you have previously provided;</li>
                  <li>make a complaint about how we have handled your personal information.</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at{' '}
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. We will respond within a
                  reasonable period — usually within 30 days.
                </p>
              </section>

              <section id="complaints" className="priv-sec">
                <div className="priv-kicker">12 · Complaints</div>
                <h2>Complaints</h2>
                <p>
                  If you are not satisfied with our response to a privacy complaint, you can
                  contact the Office of the Australian Information Commissioner (OAIC) at{' '}
                  <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">
                    oaic.gov.au
                  </a>
                  .
                </p>
              </section>

              <section id="changes" className="priv-sec">
                <div className="priv-kicker">13 · Changes</div>
                <h2>Changes to this policy</h2>
                <p>
                  We may update this policy from time to time as our services, technology, or legal
                  obligations change. The &ldquo;Last updated&rdquo; date at the top of this page
                  shows when it was most recently revised.
                </p>
              </section>

              <section id="contact" className="priv-sec">
                <div className="priv-kicker">14 · Contact</div>
                <h2>Contact us</h2>
                <p>For any privacy questions or requests, please contact:</p>
                <div className="priv-contact-card">
                  <div className="priv-contact-row">
                    <div className="priv-contact-k">Entity</div>
                    <div className="priv-contact-v">KEYOB Pty Ltd</div>
                  </div>
                  <div className="priv-contact-row">
                    <div className="priv-contact-k">Office</div>
                    <div className="priv-contact-v">{address}</div>
                  </div>
                  <div className="priv-contact-row">
                    <div className="priv-contact-k">Email</div>
                    <div className="priv-contact-v">
                      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="priv-cta">
          <div className="priv-cta-mesh" aria-hidden="true" />
          <div className="wrap priv-cta-in">
            <h2>
              Still have <em>a question?</em>
            </h2>
            <p>
              We&apos;re happy to walk you through anything in this policy or tell you exactly what
              we hold about you. Real reply from a real person, within one business day.
            </p>
            <Link href="/contact#contact" className="priv-cta-btn">
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
