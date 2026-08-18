/* eslint-disable no-restricted-syntax --
 * ERP practice blocks with a custom typographic scale owned by global erp-*
 * styles — uses raw headings/paragraphs to keep styling local. */
import Link from 'next/link';
import Image from 'next/image';
import type {
  ErpCta,
  ErpFinalCta,
  ErpFitCard,
  ErpHead,
  ErpHero as ErpHeroData,
  ErpModule,
  ErpPlatformCard,
  ErpSectionHead,
  ErpStep,
  ErpWhy,
  ErpDoor,
} from '@/config/keyob-erp';
import { erpHubLead } from '@/config/keyob-erp';

/* Shared building blocks for the three ERP practice pages. Styling lives in
 * globals.css under the `erp-` prefix; content lives in config/keyob-erp.ts. */

export function ErpHeading({ head, className }: { head: ErpHead; className?: string }) {
  return (
    <h2 className={className ?? 'erp-h2'}>
      {head.lead} <em>{head.em}</em>
      {head.tail ? ` ${head.tail}` : ''}
    </h2>
  );
}

export function ErpSecHead({
  head,
  onDark,
  centered,
}: {
  head: ErpSectionHead;
  onDark?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={`erp-sec-head${centered ? ' erp-sec-head--center' : ''}`} data-reveal>
      <div className={`erp-eyebrow${onDark ? ' erp-eyebrow--cyan' : ''}`}>{head.eyebrow}</div>
      <ErpHeading head={head.heading} className={`erp-h2${onDark ? ' erp-h2--on-dark' : ''}`} />
      {head.sub ? <p className="erp-sub">{head.sub}</p> : null}
    </div>
  );
}

function CtaLink({ cta, variant }: { cta: ErpCta; variant: 'solid' | 'ghost' }) {
  const className = variant === 'solid' ? 'erp-btn' : 'erp-btn erp-btn--ghost';
  const arrow = variant === 'solid' ? <span aria-hidden="true">→</span> : null;
  if (cta.external) {
    return (
      <a className={className} href={cta.href} target="_blank" rel="noopener noreferrer">
        {cta.label} {arrow}
      </a>
    );
  }
  return (
    <Link className={className} href={cta.href}>
      {cta.label} {arrow}
    </Link>
  );
}

/** Renders `**bold**` runs as bright inline emphasis. */
function withEmphasis(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <b key={i} className="erp-intro-b">
        {part.slice(2, -2)}
      </b>
    ) : (
      part
    ),
  );
}

export function ErpHero({ hero, visual }: { hero: ErpHeroData; visual: React.ReactNode }) {
  return (
    <header className="erp-hero">
      <div className="erp-hero-mesh" aria-hidden="true" />
      <div className="wrap erp-hero-in">
        <nav className="erp-crumb" aria-label="Breadcrumb">
          {hero.crumbs.map((c, i) => (
            <span key={c.label} className="erp-crumb-item">
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              {i < hero.crumbs.length - 1 ? (
                <span className="erp-crumb-sep" aria-hidden="true">
                  /
                </span>
              ) : null}
            </span>
          ))}
        </nav>

        <div className="erp-hero-grid">
          <div>
            <div className="erp-eyebrow erp-eyebrow--cyan erp-eyebrow--nobar">{hero.eyebrow}</div>
            <h1>
              {hero.heading.lead} <em>{hero.heading.em}</em>
              {hero.heading.tail ? ` ${hero.heading.tail}` : ''}
            </h1>
            {hero.intro.map((p) => (
              <p key={p} className="erp-hero-intro">
                {withEmphasis(p)}
              </p>
            ))}
            <div className="erp-hero-ctas">
              <CtaLink cta={hero.primaryCta} variant="solid" />
              <CtaLink cta={hero.secondaryCta} variant="ghost" />
            </div>
          </div>

          <div className="erp-hero-panel" aria-hidden="true">
            {visual}
            <div className="erp-hero-cap">{hero.caption}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function ErpDoors({ doors }: { doors: ErpDoor[] }) {
  return (
    <div className="wrap">
      <div className="erp-doors">
        {doors.map((d) => (
          <Link key={d.title} href={d.href} className="erp-door">
            <span className="erp-door-k">{d.k}</span>
            <span className="erp-door-t">{d.title}</span>
            <span className="erp-door-d">{d.body}</span>
            <span className="erp-door-go">
              {d.go} <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ErpWhyGrid({ head, items }: { head: ErpSectionHead; items: ErpWhy[] }) {
  return (
    <section className="erp-sct">
      <div className="wrap">
        <ErpSecHead head={head} />
        <div className="erp-why-grid">
          {items.map((w, i) => (
            <div key={w.n} className="erp-why" data-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="erp-why-n">{w.n}</div>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ErpLead({ head }: { head: ErpSectionHead }) {
  const lead = erpHubLead;
  return (
    <section className="erp-sct erp-sct--ice" id="lead">
      <div className="wrap">
        <ErpSecHead head={head} />
        <div className="erp-lead-wrap">
          <div className="erp-lead-photo" data-reveal>
            <Image
              src={lead.photo}
              alt={lead.photoAlt}
              fill
              sizes="(min-width: 880px) 32vw, 90vw"
              className="erp-lead-img"
            />
          </div>
          <div data-reveal style={{ transitionDelay: '0.08s' }}>
            <div className="erp-eyebrow erp-eyebrow--nobar erp-eyebrow--sm">{lead.kicker}</div>
            <div className="erp-lead-name">{lead.name}</div>
            <div className="erp-lead-role">{lead.role}</div>
            {lead.paragraphs.map((p) => (
              <p key={p} className="erp-lead-p">
                {p}
              </p>
            ))}
            <blockquote className="erp-lead-quote">
              {lead.quote.lead} <em>{lead.quote.em}</em> {lead.quote.tail}
            </blockquote>
            <div className="erp-lead-cta">
              <Link className="erp-btn" href={lead.profileCta.href}>
                {lead.profileCta.label} <span aria-hidden="true">→</span>
              </Link>
              <a
                className="erp-lnk"
                href={lead.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {lead.linkedin.label} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PLATFORM_MARKS: Record<ErpPlatformCard['id'], React.ReactNode> = {
  sap: (
    <>
      <rect x="6" y="6" width="40" height="40" rx="9" fill="none" strokeWidth="1.5" />
      <path d="M16 32V20M26 32V24M36 32v-16" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  odoo: (
    <>
      <rect x="6" y="6" width="40" height="40" rx="9" fill="none" strokeWidth="1.5" />
      <circle cx="20" cy="26" r="6.5" fill="none" strokeWidth="2" />
      <circle cx="33" cy="26" r="6.5" fill="none" strokeWidth="2" />
    </>
  ),
};

export function ErpPlatforms({
  head,
  cards,
}: {
  head: ErpSectionHead;
  cards: ErpPlatformCard[];
}) {
  return (
    <section className="erp-sct" id="platforms">
      <div className="wrap">
        <ErpSecHead head={head} />
        <div className="erp-plat">
          {cards.map((c, i) => (
            <Link
              key={c.id}
              href={c.href}
              id={c.id === 'sap' ? 'sap-b1' : 'odoo'}
              className={`erp-pcard erp-pcard--${c.id}`}
              data-reveal
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="erp-pcard-top">
                <span className="erp-pcard-badge">{c.badge}</span>
                <h3>{c.name}</h3>
                <p className="erp-pcard-tagline">{c.tagline}</p>
                <svg className="erp-pcard-mark" width="52" height="52" viewBox="0 0 52 52" aria-hidden="true">
                  {PLATFORM_MARKS[c.id]}
                </svg>
              </div>
              <div className="erp-pcard-body">
                <div className="erp-pcard-fitk">{c.fitKicker}</div>
                <ul>
                  {c.fits.map((f) => (
                    <li key={f}>
                      <span className="erp-tk" aria-hidden="true">
                        →
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="erp-pcard-foot">
                  <span className="erp-pcard-go">
                    {c.go} <span aria-hidden="true">→</span>
                  </span>
                  <span className="erp-pcard-note">{c.note}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ErpSteps({
  head,
  steps,
  flush,
}: {
  head: ErpSectionHead;
  steps: ErpStep[];
  flush?: boolean;
}) {
  return (
    <section className={`erp-sct erp-sct--dark${flush ? ' erp-sct--flush-bottom' : ''}`}>
      <div className="wrap">
        <ErpSecHead head={head} onDark />
        <div className="erp-steps">
          {steps.map((s) => (
            <div key={s.k} className="erp-stp" data-reveal>
              <span className="erp-stp-node" aria-hidden="true" />
              <span className="erp-stp-k">{s.k}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ErpWhatItIs({
  head,
  paragraphs,
  factKicker,
  facts,
}: {
  head: ErpSectionHead;
  paragraphs: string[];
  factKicker: string;
  facts: string[];
}) {
  return (
    <section className="erp-sct">
      <div className="wrap">
        <ErpSecHead head={head} />
        <div className="erp-twocol">
          <div data-reveal>
            {paragraphs.map((p) => (
              <p key={p} className="erp-body-p">
                {p}
              </p>
            ))}
          </div>
          <div className="erp-factbox" data-reveal style={{ transitionDelay: '0.08s' }}>
            <div className="erp-factbox-k">{factKicker}</div>
            <ul>
              {facts.map((f) => (
                <li key={f}>
                  <span className="erp-tk" aria-hidden="true">
                    →
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ErpModules({ head, modules }: { head: ErpSectionHead; modules: ErpModule[] }) {
  return (
    <section className="erp-sct erp-sct--ice">
      <div className="wrap">
        <ErpSecHead head={head} />
        <div className="erp-mods">
          {modules.map((m, i) => (
            <div
              key={m.title}
              className="erp-mod"
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <div className="erp-mod-ic" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  dangerouslySetInnerHTML={{ __html: m.icon }}
                />
              </div>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ErpFit({
  head,
  yes,
  no,
  alternative,
}: {
  head: ErpSectionHead;
  yes: ErpFitCard;
  no: ErpFitCard;
  alternative: ErpCta;
}) {
  return (
    <section className="erp-sct">
      <div className="wrap">
        <ErpSecHead head={head} />
        <div className="erp-fit-grid">
          <div className="erp-fitcard erp-fitcard--yes" data-reveal>
            <h3>{yes.title}</h3>
            <ul>
              {yes.items.map((it) => (
                <li key={it}>
                  <span className="erp-tk" aria-hidden="true">
                    →
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="erp-fitcard erp-fitcard--no" data-reveal style={{ transitionDelay: '0.08s' }}>
            <h3>{no.title}</h3>
            <ul>
              {no.items.map((it) => (
                <li key={it}>
                  <span className="erp-tk" aria-hidden="true">
                    →
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <p className="erp-fit-alt">
              In these cases we&apos;d usually talk you through{' '}
              <Link className="erp-lnk" href={alternative.href}>
                {alternative.label} <span aria-hidden="true">→</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ErpIntegration({
  eyebrow,
  heading,
  body,
  items,
}: {
  eyebrow: string;
  heading: ErpHead;
  body: string;
  items: string[];
}) {
  return (
    <section className="erp-sct erp-sct--dark erp-sct--flush-top">
      <div className="wrap">
        <div className="erp-twocol">
          <div data-reveal>
            <div className="erp-eyebrow erp-eyebrow--cyan">{eyebrow}</div>
            <ErpHeading head={heading} className="erp-h2 erp-h2--on-dark" />
            <p className="erp-int-body">{body}</p>
          </div>
          <div data-reveal style={{ transitionDelay: '0.08s' }}>
            <ul className="erp-int-list">
              {items.map((it) => (
                <li key={it}>
                  <span className="erp-tk" aria-hidden="true">
                    →
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ErpCompare({
  title,
  body,
  cta,
}: {
  title: string;
  body: string;
  cta: ErpCta;
}) {
  return (
    <section className="erp-sct">
      <div className="wrap">
        <div className="erp-cmp" data-reveal>
          <div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
          <Link className="erp-btn" href={cta.href}>
            {cta.label} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ErpFinalCtaSection({ cta }: { cta: ErpFinalCta }) {
  return (
    <section className="erp-sct erp-sct--dark">
      <div className="wrap">
        <div className="erp-cta" data-reveal>
          <h2>
            {cta.heading.lead} <em>{cta.heading.em}</em>
            {cta.heading.tail ? ` ${cta.heading.tail}` : ''}
          </h2>
          <p>{cta.body}</p>
          <div className="erp-cta-row">
            <CtaLink cta={cta.primary} variant="solid" />
            <CtaLink cta={cta.secondary} variant="ghost" />
          </div>
        </div>
      </div>
    </section>
  );
}
