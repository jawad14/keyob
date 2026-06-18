import Image from 'next/image';
import Link from 'next/link';
import type {
  LeaderProfile as LeaderProfileType,
  LeaderSnapshotItem,
  LeaderSnapshotLink,
} from '@/config/keyob-leader-profiles';
import { leaderProfiles } from '@/config/keyob-leader-profiles';
import { LeaderProfileNav } from './LeaderProfileNav';
import { LeaderProfileReveals } from './LeaderProfileReveals';

type Props = { profile: LeaderProfileType; portraitSrc?: string; candidSrc?: string };

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z" />
      <circle cx={12} cy={10} r={2.5} />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-5h6v5" />
    </svg>
  );
}
function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M4 7h16M4 12h10M4 17h7" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM2 12h20M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20" />
    </svg>
  );
}
function GovernanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-5h6v5" />
    </svg>
  );
}

const ICONS: Record<LeaderSnapshotItem['icon'], () => React.ReactElement> = {
  pin: PinIcon,
  building: BuildingIcon,
  list: ListIcon,
  globe: GlobeIcon,
  governance: GovernanceIcon,
};

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.73 2.64 4.73 6V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9s-2.04 1.38-2.04 2.8V21H9z" />
    </svg>
  );
}
function ArticlesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M4 5h16v14H4zM8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}
function EventsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <rect x={3} y={5} width={18} height={16} rx={2} />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

const SNAP_LINK_ICONS: Record<LeaderSnapshotLink['icon'], () => React.ReactElement> = {
  linkedin: LinkedInIcon,
  articles: ArticlesIcon,
  events: EventsIcon,
  chat: ChatIcon,
};

function isInternal(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}

function SmartLink({
  href,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  if (isInternal(href)) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export function LeaderProfile({ profile, portraitSrc, candidSrc }: Props) {
  const accentStyle = {
    ['--lp-plum' as string]: profile.accent.plum,
    ['--lp-plum-mist' as string]: profile.accent.plumMist,
    ['--lp-plum-soft' as string]: profile.accent.plumSoft,
  } as React.CSSProperties;

  const otherLeaders = leaderProfiles.filter((l) => l.slug !== profile.slug);

  return (
    <div className="lp-root" style={accentStyle}>
      <LeaderProfileReveals />
      {/* ===== EDITORIAL OPENING ===== */}
      <header className="lp-intro">
        <div className="wrap lp-intro-grid">
          {/* LEFT */}
          <div className="lp-reveal">
            <div className="lp-id-label">{profile.regionLabel}</div>
            <div className="lp-portrait">
              {portraitSrc ? (
                <Image
                  src={portraitSrc}
                  alt={profile.portraitAlt}
                  fill
                  sizes="(min-width: 1040px) 28vw, (min-width: 680px) 50vw, 100vw"
                  className="lp-portrait-img"
                  priority
                />
              ) : (
                <div className="lp-ph-note">{profile.portraitNote}</div>
              )}
            </div>
            <h1 className="lp-id-name">{profile.name}</h1>
            <div className="lp-id-role">{profile.role}</div>
            <p className="lp-id-statement">{profile.identityStatement}</p>
          </div>

          {/* CENTRE */}
          <div className="lp-thought lp-reveal">
            <div className="lp-qmark" aria-hidden="true">
              &ldquo;
            </div>
            <blockquote>
              {profile.thought.quote} <b>{profile.thought.emphasis}</b>
            </blockquote>
            <div className="lp-qcap">{profile.thought.caption}</div>
          </div>

          {/* RIGHT */}
          <aside className="lp-snap lp-reveal">
            <h4>Profile</h4>
            <ul>
              {profile.snapshot.items.map((item, i) => {
                const Icon = ICONS[item.icon];
                return (
                  <li key={i}>
                    <Icon />
                    {item.text}
                  </li>
                );
              })}
            </ul>
            <div className="lp-snap-links">
              {profile.snapshot.links.map((link) => {
                const Icon = SNAP_LINK_ICONS[link.icon];
                return (
                  <SmartLink
                    key={link.href + link.label}
                    href={link.href}
                    className={link.accent ? 'plum' : undefined}
                    ariaLabel={
                      link.icon === 'linkedin'
                        ? `${profile.name} on LinkedIn`
                        : undefined
                    }
                  >
                    <Icon />
                    {link.label}
                  </SmartLink>
                );
              })}
            </div>
          </aside>
        </div>
      </header>

      <LeaderProfileNav name={profile.name} items={profile.nav} />

      <main>
        {/* SECTION 1 — STORY */}
        <section className="lp-sct" id="story" aria-labelledby="story-h">
          <div className="wrap">
            <div className="lp-sct-head lp-reveal">
              <div className="lp-eyebrow plum">{profile.story.eyebrow}</div>
              <h2 className="lp-h2" id="story-h">
                {profile.story.headingPrefix} <em>{profile.story.headingEm}</em>
              </h2>
            </div>
            <div className="lp-body-copy lp-reveal">
              {profile.story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="lp-journey">
              <div className="lp-jr-track">
                <div className="lp-jr-line" aria-hidden="true">
                  <i />
                </div>
                {profile.story.steps.map((s) => (
                  <div className="lp-jr-step" key={s.n}>
                    <div className="lp-jr-dot">{s.n}</div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="lp-jr-highlight lp-reveal">{profile.story.highlight}</p>
          </div>
        </section>

        {/* SECTION 2 — PHILOSOPHY */}
        <section className="lp-sct ice" id="philosophy" aria-labelledby="phil-h">
          <div className="wrap">
            <div className="lp-sct-head lp-reveal">
              <div className="lp-eyebrow plum">{profile.philosophy.eyebrow}</div>
              <h2 className="lp-h2" id="phil-h">
                {profile.philosophy.headingPrefix}{' '}
                <em>{profile.philosophy.headingEm}</em>
              </h2>
            </div>
            <div className="lp-principles lp-reveal">
              {profile.philosophy.principles.map((p) => (
                <article key={p.n} className={`lp-principle v-${p.variant}`}>
                  <div className="lp-pn">{p.n}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <span className="lp-emph">{p.emph}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — KEYOB */}
        <section className="lp-sct dark" id="keyob" aria-labelledby="keyob-h">
          <div className="wrap">
            <div className="lp-sct-head lp-reveal">
              <div className="lp-eyebrow azure">{profile.keyob.eyebrow}</div>
              <h2 className="lp-h2" id="keyob-h">
                {profile.keyob.headingPrefix} <em>{profile.keyob.headingEm}</em>
              </h2>
            </div>
            <div className="lp-body-copy lp-reveal">
              {profile.keyob.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <Pathway pathway={profile.keyob.pathway} accent={profile.accent} />

            <div className="lp-phrase lp-reveal">
              {profile.keyob.phrasePrefix} <b>{profile.keyob.phraseEm}</b>
            </div>
          </div>
        </section>

        {/* SECTION 4 — ARTICLES */}
        <section className="lp-sct" id="articles" aria-labelledby="art-h">
          <div className="wrap">
            <div className="lp-sct-head lp-reveal">
              <div className="lp-eyebrow plum">{profile.articles.eyebrow}</div>
              <h2 className="lp-h2" id="art-h">
                {profile.articles.headingPrefix} <em>{profile.articles.headingEm}</em>
              </h2>
              {profile.articles.lead ? (
                <p className="lp-lead">{profile.articles.lead}</p>
              ) : null}
            </div>
            <ArticlesBlock
              items={profile.articles.items}
              cta={profile.articles.featuredCta}
              emptyMessage={profile.articles.emptyMessage}
            />
          </div>
        </section>

        {/* SECTION 5 — EVENTS */}
        <section className="lp-sct ice" id="events" aria-labelledby="ev-h">
          <div className="wrap">
            <div className="lp-sct-head lp-reveal">
              <div className="lp-eyebrow plum">{profile.events.eyebrow}</div>
              <h2 className="lp-h2" id="ev-h">
                {profile.events.headingPrefix} <em>{profile.events.headingEm}</em>
              </h2>
            </div>
            <EventsBlock items={profile.events.items} emptyMessage={profile.events.emptyMessage} />
          </div>
        </section>

        {/* SECTION 6 — SELECTED WORK */}
        <section className="lp-sct" id="work" aria-labelledby="wk-h">
          <div className="wrap">
            <div className="lp-sct-head lp-reveal">
              <div className="lp-eyebrow plum">{profile.work.eyebrow}</div>
              <h2 className="lp-h2" id="wk-h">
                {profile.work.headingPrefix} <em>{profile.work.headingEm}</em>
              </h2>
            </div>
            <div className="lp-work-grid">
              {profile.work.items.map((w) => (
                <article key={w.slug} className="lp-wcard lp-reveal">
                  <span className="lp-wc-tag">{w.tag}</span>
                  <h4>{w.name}</h4>
                  <p>{w.copy}</p>
                  {w.url && w.url !== '#' ? (
                    <SmartLink href={w.url} className="lp-wc-cta">
                      Explore the full client story <span className="lp-arr">→</span>
                    </SmartLink>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 — HUMAN */}
        <section className="lp-sct plum" id="human" aria-labelledby="hu-h">
          <div className="wrap">
            <div className="lp-hu-grid">
              <div className="lp-reveal">
                <div className="lp-eyebrow plum">{profile.human.eyebrow}</div>
                <h2 className="lp-h2" id="hu-h">
                  {profile.human.headingPrefix}{' '}
                  <em style={{ color: 'var(--lp-plum)' }}>{profile.human.headingEm}</em>
                </h2>
                <div className="lp-body-copy">
                  {profile.human.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <blockquote className="lp-hu-quote">&ldquo;{profile.human.quote}&rdquo;</blockquote>
              </div>
              <div className="lp-reveal">
                <div className="lp-hu-img">
                  {candidSrc ? (
                    <Image
                      src={candidSrc}
                      alt={profile.human.photoAlt}
                      fill
                      sizes="(min-width: 860px) 40vw, 100vw"
                      className="lp-hu-img-photo"
                    />
                  ) : (
                    <div className="lp-ph-note">{profile.human.photoNote}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 — MEDIA */}
        <section className="lp-sct" id="media" aria-labelledby="md-h">
          <div className="wrap">
            <div className="lp-sct-head lp-reveal">
              <div className="lp-eyebrow plum">{profile.media.eyebrow}</div>
              <h2 className="lp-h2" id="md-h">
                {profile.media.headingPrefix} <em>{profile.media.headingEm}</em>
              </h2>
            </div>
            <div className="lp-media-grid">
              <div className="lp-reveal">
                <h3 className="lp-md-sub">Speaking topics</h3>
                <ul className="lp-md-topics">
                  {profile.media.speakingTopics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="lp-reveal">
                <h3 className="lp-md-sub">Resources</h3>
                <ul className="lp-md-res">
                  {profile.media.resources.map((r) => (
                    <li key={r.title}>
                      <span>
                        <span className="lp-mr-t">{r.title}</span>
                        <br />
                        <span className="lp-mr-ty">{r.type}</span>
                      </span>
                      {r.url ? (
                        <SmartLink href={r.url}>
                          Open <span>→</span>
                        </SmartLink>
                      ) : (
                        <span className="lp-mr-soon">On request</span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="lp-md-note">{profile.media.note}</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9 — CONNECT */}
        <section className="lp-sct dark" id="connect" aria-labelledby="cn-h">
          <div className="wrap lp-connect">
            <div className="lp-eyebrow azure nobar lp-reveal">{profile.connect.eyebrow}</div>
            <h2 className="lp-h2 lp-reveal" id="cn-h">
              {profile.connect.headingPrefix} <em>{profile.connect.headingEm}</em>
            </h2>
            <p className="lp-lead lp-lead-on-dark lp-reveal">{profile.connect.lead}</p>
            <div className="lp-cn-cta lp-reveal">
              <SmartLink href={profile.connect.primaryCta.href} className="lp-btn">
                {profile.connect.primaryCta.label} <span className="lp-arr">→</span>
              </SmartLink>
              <SmartLink href={profile.connect.secondaryCta.href} className="lp-btn-ghost-light">
                {profile.connect.secondaryCta.label}
              </SmartLink>
              <SmartLink href={profile.connect.tertiaryCta.href} className="lp-cn-tertiary">
                {profile.connect.tertiaryCta.label}
              </SmartLink>
            </div>
            <p className="lp-cn-close lp-reveal">{profile.connect.closing}</p>
          </div>
        </section>

        {/* NEXT-LEADER NAV */}
        <nav className="lp-leadnav" aria-label="Leadership profiles">
          <div className="wrap lp-leadnav-inner">
            <Link className="back" href="/leadership-team">
              <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to Leadership
            </Link>
            <div className="lp-leadnav-other">
              {otherLeaders.map((l) => (
                <Link key={l.slug} href={`/leadership-team/${l.slug}`}>
                  {l.name}
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
}

function Pathway({
  pathway,
  accent,
}: {
  pathway: LeaderProfileType['keyob']['pathway'];
  accent: LeaderProfileType['accent'];
}) {
  const ys = [40, 75, 110, 145, 180, 215];
  const loopText = pathway.loopLabel.replace(/^↻\s*/, '');
  const loopY = 250;
  const loopW = loopText.length * 6.2 + 24;
  return (
    <div className="lp-pathvis" aria-hidden="true">
      <svg
        viewBox="0 0 1080 300"
        role="img"
        aria-label="A real business need branching across capabilities with continuous modernisation."
        className="lp-pathvis-svg"
      >
        <path className="lp-path-line" d="M150 130 L300 130" />
        <path className="lp-path-line" d="M300 130 C380 130 380 40 470 40" />
        <path className="lp-path-line" d="M300 130 C380 130 380 75 470 75" />
        <path className="lp-path-line" d="M300 130 C380 130 380 110 470 110" />
        <path className="lp-path-line" d="M300 130 C380 130 380 145 470 145" />
        <path className="lp-path-line" d="M300 130 C380 130 380 180 470 180" />
        <path className="lp-path-line" d="M300 130 C380 130 380 215 470 215" />
        <path className="lp-path-line" d="M470 40 L650 40" />
        <path className="lp-path-line" d="M470 75 L650 75" />
        <path className="lp-path-line" d="M470 110 L650 110" />
        <path className="lp-path-line" d="M470 145 L650 145" />
        <path className="lp-path-line" d="M470 180 L650 180" />
        <path className="lp-path-line" d="M470 215 L650 215" />
        <path
          className="lp-path-line lp-path-loop"
          d={`M650 ${loopY} C500 ${loopY} 500 130 300 130 L150 130`}
        />
        <circle cx={120} cy={130} r={15} fill={accent.plum} />
        <text className="lp-path-startlab" x={120} y={166} textAnchor="middle">
          {pathway.startLineA}
        </text>
        <text className="lp-path-startlab" x={120} y={181} textAnchor="middle">
          {pathway.startLineB}
        </text>
        {pathway.branches.map((b, i) => {
          const w = b.length * 6.2 + 24;
          return (
            <g key={b}>
              <rect className="lp-path-node" x={650} y={ys[i] - 15} width={w} height={30} rx={8} />
              <text className="lp-path-lab" x={662} y={ys[i] + 4}>
                {b}
              </text>
            </g>
          );
        })}
        <g>
          <rect
            className="lp-path-node"
            x={650}
            y={loopY - 15}
            width={loopW}
            height={30}
            rx={8}
          />
          <text className="lp-path-lab" x={662} y={loopY + 4}>
            {loopText}
          </text>
        </g>
      </svg>

      {/* Mobile-friendly fallback list */}
      <ul className="lp-pathvis-fallback">
        <li className="lp-pathvis-start">
          <span
            className="lp-pathvis-start-dot"
            style={{ background: accent.plum }}
            aria-hidden="true"
          />
          <span className="lp-pathvis-start-text">
            {pathway.startLineA} {pathway.startLineB}
          </span>
        </li>
        {pathway.branches.map((b) => (
          <li key={b} className="lp-pathvis-branch">
            {b}
          </li>
        ))}
        <li className="lp-pathvis-loop">{pathway.loopLabel}</li>
      </ul>
    </div>
  );
}

function ArticlesBlock({
  items,
  cta,
  emptyMessage,
}: {
  items: LeaderProfileType['articles']['items'];
  cta: string;
  emptyMessage: string;
}) {
  if (!items.length) {
    return (
      <div className="lp-art-empty lp-reveal">
        <svg className="lp-ae-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
          <path d="M4 5h16v14H4zM8 9h8M8 13h6" />
        </svg>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  const featured = items.find((a) => a.featured) ?? items[0];
  const rest = items.filter((a) => a !== featured).slice(0, 6);

  return (
    <>
      <article className="lp-art-featured lp-reveal">
        <div className="lp-af-img">
          <div className="lp-ph-note">FEATURED ARTICLE</div>
        </div>
        <div className="lp-af-body">
          {featured.category ? <span className="lp-art-cat">{featured.category}</span> : null}
          <h3>{featured.title}</h3>
          {featured.excerpt ? <p>{featured.excerpt}</p> : null}
          <div className="lp-art-meta">
            {featured.date ? <span>{featured.date}</span> : null}
            {featured.readingTime ? <span>{featured.readingTime}</span> : null}
          </div>
          {featured.url ? (
            <SmartLink href={featured.url} className="lp-art-read">
              {cta} <span className="lp-arr">→</span>
            </SmartLink>
          ) : null}
        </div>
      </article>

      {rest.length ? (
        <div className="lp-art-grid">
          {rest.map((a) => (
            <article key={a.title} className="lp-acard lp-reveal">
              <div className="lp-ac-img">
                <div className="lp-ph-note">ARTICLE IMAGE</div>
              </div>
              <div className="lp-ac-body">
                {a.category ? <span className="lp-art-cat">{a.category}</span> : null}
                <h4>{a.title}</h4>
                {a.excerpt ? <p>{a.excerpt}</p> : null}
                <div className="lp-art-meta">
                  {a.date ? <span>{a.date}</span> : null}
                  {a.readingTime ? <span>{a.readingTime}</span> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : null}
    </>
  );
}

function EventsBlock({
  items,
  emptyMessage,
}: {
  items: LeaderProfileType['events']['items'];
  emptyMessage: string;
}) {
  const visible = items.filter((e) => e.visible !== false);
  if (!visible.length) {
    return (
      <div className="lp-art-empty lp-reveal">
        <svg className="lp-ae-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
          <rect x={3} y={5} width={18} height={16} rx={2} />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
        <p>{emptyMessage}</p>
      </div>
    );
  }
  return (
    <div className="lp-ev-grid">
      {visible.map((e) => (
        <article key={e.name} className="lp-ecard lp-reveal">
          <div className="lp-ev-band">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4zM7 6H5a2 2 0 0 0 0 4h2M17 6h2a2 2 0 0 1 0 4h-2" />
            </svg>
            <span className="lp-ev-type solid">{e.type ?? 'Event'}</span>
          </div>
          <div className="lp-ev-body">
            <div className="lp-ev-meta">
              {e.location ? <span>{e.location}</span> : null}
              {e.date ? <span>{e.date}</span> : null}
            </div>
            <h4>{e.name}</h4>
            {e.role ? <div className="lp-ev-role">{e.role}</div> : null}
            {e.reflection ? <p className="lp-ev-reflect">{e.reflection}</p> : null}
            {e.link ? (
              <SmartLink href={e.link} className="lp-ev-cta">
                Learn more <span>→</span>
              </SmartLink>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
