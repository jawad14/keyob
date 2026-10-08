/* eslint-disable no-restricted-syntax --
 * Service pages modeled after the reference HTML in the repo root. The section
 * structure is faithful to those files; the visual design is owned by this
 * route's CSS module rather than the shared typography primitives, as on the
 * bespoke story pages. */

import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { RevealOnScroll } from '@/components/util/RevealOnScroll';
import { services, getService, type ServiceHeadline } from '@/config/keyob-services';
import { siteConfig, defaultOgImages, defaultTwitterImages } from '@/config/site.config';
import { ServiceFaq } from './_components/ServiceFaq';
import styles from './page.module.css';

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: '#0d1b2a',
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const url = `${siteConfig.url}/what-we-do/${service.slug}`;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.ogTitle} | KEYOB`,
      description: service.ogDescription,
      url,
      images: defaultOgImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.ogTitle} | KEYOB`,
      description: service.ogDescription,
      images: defaultTwitterImages,
    },
  };
}

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

/** Reveal stagger, matching the .d1/.d2/.d3 delay classes in the reference. */
const delay = (i: number) => [undefined, styles.d1, styles.d2, styles.d3][i];

function Headline({ h }: { h: ServiceHeadline }) {
  return (
    <>
      {h.pre}
      <em>{h.em}</em>
      {h.post}
    </>
  );
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${siteConfig.url}/what-we-do/${service.slug}`;
  const serviceLd = { ...service.serviceLd, url };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
      { '@type': 'ListItem', position: 2, name: 'What we do', item: `${siteConfig.url}/what-we-do` },
      { '@type': 'ListItem', position: 3, name: service.crumb, item: url },
    ],
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Nav />
      {[serviceLd, breadcrumbLd, faqLd].map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

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
                <Link href="/what-we-do">What we do</Link>
                <span>/</span>
                {service.crumb}
              </div>
              <div className={cx(styles.eyebrow, styles.nobar)}>{service.stage}</div>
              <h1>
                <Headline h={service.headline} />
              </h1>
              {service.intro.map((p) => (
                <p key={p} className={styles.intro}>
                  {p}
                </p>
              ))}
              <div className={styles.heroCta}>
                <Link href={service.cta.primary.href} className={styles.btn}>
                  {service.cta.primary.label} <span className={styles.arr}>→</span>
                </Link>
                <a href={service.cta.secondary.href} className={styles.btnGhost}>
                  {service.cta.secondary.label}
                </a>
              </div>
            </div>

            <div className={styles.mock}>
              <svg
                viewBox={service.heroSvgViewBox}
                role="img"
                aria-label={service.heroCaption}
                dangerouslySetInnerHTML={{ __html: service.heroSvg }}
              />
              <div className={styles.heroCap}>{service.heroCaption}</div>
            </div>
          </div>
        </header>

        {/* 2. DEFINITION — the direct answer for search and AI engines */}
        <section className={styles.sct} id="what">
          <div className={styles.wrap}>
            <div data-reveal className={cx(styles.sctHead, styles.center)}>
              <div className={cx(styles.eyebrow, styles.acc, styles.center)}>
                {service.definition.head.eyebrow}
              </div>
              <h2 className={styles.h2}>
                <Headline h={service.definition.head.h2} />
              </h2>
            </div>
            <div data-reveal className={styles.def}>
              <div className={styles.k}>{service.definition.label}</div>
              {service.definition.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 3. WHY IT MATTERS */}
        <section className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={cx(styles.eyebrow, styles.acc)}>{service.why.head.eyebrow}</div>
              <h2 className={styles.h2}>
                <Headline h={service.why.head.h2} />
              </h2>
              {service.why.head.sub ? <p className={styles.sub}>{service.why.head.sub}</p> : null}
            </div>
            <div className={styles.whyGrid}>
              {service.why.cards.map((c, i) => (
                <div key={c.title} data-reveal className={cx(styles.why, delay(i))}>
                  <div className={styles.n}>{c.n}</div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SIGNALS */}
        <section className={styles.sct}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={cx(styles.eyebrow, styles.acc)}>{service.signals.head.eyebrow}</div>
              <h2 className={styles.h2}>
                <Headline h={service.signals.head.h2} />
              </h2>
              {service.signals.head.sub ? (
                <p className={styles.sub}>{service.signals.head.sub}</p>
              ) : null}
            </div>
            <ul data-reveal className={styles.sig}>
              {service.signals.items.map((item) => (
                <li key={item}>
                  <span className={styles.tk}>→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5. WHAT YOU GET */}
        <section className={cx(styles.sct, styles.alt)}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={cx(styles.eyebrow, styles.acc)}>
                {service.deliverables.head.eyebrow}
              </div>
              <h2 className={styles.h2}>
                <Headline h={service.deliverables.head.h2} />
              </h2>
              {service.deliverables.head.sub ? (
                <p className={styles.sub}>{service.deliverables.head.sub}</p>
              ) : null}
            </div>
            <div className={styles.dgrid}>
              {service.deliverables.cards.map((c, i) => (
                <div key={c.title} data-reveal className={cx(styles.dcard, delay(i % 2))}>
                  <div className={styles.num}>{c.n}</div>
                  <div>
                    <h3>{c.title}</h3>
                    <p>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PROCESS */}
        <section className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={styles.eyebrow}>{service.process.head.eyebrow}</div>
              <h2 className={styles.h2}>
                <Headline h={service.process.head.h2} />
              </h2>
              {service.process.head.sub ? (
                <p className={styles.sub}>{service.process.head.sub}</p>
              ) : null}
            </div>
            <div className={styles.steps}>
              {service.process.steps.map((s) => (
                <div key={s.title} data-reveal className={styles.stp}>
                  <span className={styles.node} />
                  <span className={styles.k}>{s.k}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. OFTEN CONFUSED */}
        <section className={styles.sct}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={cx(styles.eyebrow, styles.acc)}>
                {service.comparison.head.eyebrow}
              </div>
              <h2 className={styles.h2}>
                <Headline h={service.comparison.head.h2} />
              </h2>
              {service.comparison.head.sub ? (
                <p className={styles.sub}>{service.comparison.head.sub}</p>
              ) : null}
            </div>
            <div data-reveal className={styles.tscroll}>
              <table className={styles.ctable}>
                <thead>
                  <tr>
                    {service.comparison.columns.map((c) => (
                      <th key={c}>{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {service.comparison.rows.map((row) => (
                    <tr key={row[0]}>
                      <th scope="row">{row[0]}</th>
                      {row.slice(1).map((cell, i) => (
                        <td key={i}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8. HOW IT CONNECTS */}
        <section className={cx(styles.sct, styles.dark)}>
          <div className={styles.wrap}>
            <div data-reveal className={styles.sctHead}>
              <div className={styles.eyebrow}>{service.connection.head.eyebrow}</div>
              <h2 className={styles.h2}>
                <Headline h={service.connection.head.h2} />
              </h2>
            </div>
            <div className={styles.steps} style={{ maxWidth: 860 }}>
              {service.connection.steps.map((s) => (
                <div key={s.title} data-reveal className={styles.stp}>
                  <span className={styles.node} />
                  <span className={styles.k}>{s.k}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
            {service.connection.tail ? (
              <p data-reveal className={styles.connectTail}>
                {service.connection.tail.text}{' '}
                {service.connection.tail.link ? (
                  <Link className={styles.lnk} href={service.connection.tail.link.href}>
                    {service.connection.tail.link.label} <span className={styles.arr}>→</span>
                  </Link>
                ) : null}
              </p>
            ) : null}
          </div>
        </section>

        {/* 9. IN PRACTICE */}
        {service.proof ? (
          <section className={cx(styles.sct, styles.alt)}>
            <div className={styles.wrap}>
              <div data-reveal className={styles.sctHead}>
                <div className={cx(styles.eyebrow, styles.acc)}>{service.proof.head.eyebrow}</div>
                <h2 className={styles.h2}>
                  <Headline h={service.proof.head.h2} />
                </h2>
              </div>
              <div className={styles.plat}>
                {service.proof.cards.map((c, i) => (
                  <Link
                    key={c.title}
                    href={c.href}
                    data-reveal
                    className={cx(styles.pcard, delay(i))}
                  >
                    <div className={styles.top}>
                      <span className={styles.badge}>{c.badge}</span>
                      <h3>{c.title}</h3>
                      <p className={styles.tagline}>{c.tagline}</p>
                    </div>
                    <div className={styles.body}>
                      <div className={styles.fitk}>{c.listLabel}</div>
                      <ul>
                        {c.items.map((item) => (
                          <li key={item}>
                            <span className={styles.tk}>→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className={styles.foot}>
                        <span className={styles.go}>
                          {c.cta} <span className={styles.arr}>→</span>
                        </span>
                        <span className={styles.note}>{c.note}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* 10. FAQ */}
        <section className={styles.sct}>
          <div className={styles.wrap}>
            <div data-reveal className={cx(styles.sctHead, styles.center)}>
              <div className={cx(styles.eyebrow, styles.acc, styles.center)}>
                {service.faq.head.eyebrow}
              </div>
              <h2 className={styles.h2}>
                <Headline h={service.faq.head.h2} />
              </h2>
            </div>
            <ServiceFaq items={service.faq.items} />
          </div>
        </section>

        {/* 11. CLOSING CTA */}
        <section className={styles.final}>
          <div className={styles.finalMesh} aria-hidden="true" />
          <div data-reveal className={cx(styles.wrap, styles.in)}>
            <h2>
              <Headline h={service.closing.h2} />
            </h2>
            <p>{service.closing.body}</p>
            <div className={styles.finalCta}>
              <Link href={service.closing.primary.href} className={styles.btn}>
                {service.closing.primary.label} <span className={styles.arr}>→</span>
              </Link>
              <Link href={service.closing.secondary.href} className={styles.btnGhost}>
                {service.closing.secondary.label}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
