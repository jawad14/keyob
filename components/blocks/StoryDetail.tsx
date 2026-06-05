import Link from 'next/link';
import {
  keyobMethodSteps,
  type Story,
  type StorySectionHeading,
} from '@/config/keyob-stories';
import { StoryFaq } from '@/components/blocks/StoryFaq';

const outcomeIcons = [
  '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  '<path d="M3 12h18M12 3v18" opacity=".4"/><path d="M5 19l5-5 4 4 5-7"/>',
  '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14h8"/>',
];

function Heading({
  fallback,
  override,
}: {
  fallback: React.ReactNode;
  override?: StorySectionHeading;
}) {
  if (!override) return <h2>{fallback}</h2>;
  return (
    <h2>
      {override.pre}
      <em>{override.em}</em>
      {override.post ?? ''}
    </h2>
  );
}

// Body and approachIntro may contain <strong>/<em> — content is authored, not
// user input, so dangerouslySetInnerHTML is safe.
function Html({ as: As = 'p', html, className }: { as?: 'p' | 'div'; html: string; className?: string }) {
  return <As className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

// Inline before/after SVG diagram (5 disconnected siloed boxes on the left,
// 5 boxes orbiting a central animated cyan hub on the right). Ports the
// structure from story.html, swapped to brand tokens.
function StoryDiagram() {
  return (
    <div className="story-diagram">
      <div className="story-diag-head">
        <div>
          Before — <b>siloed &amp; lagging</b>
        </div>
        <div>
          After — <b>one synchronised view</b>
        </div>
      </div>
      <svg
        className="story-diag-svg"
        viewBox="0 0 1000 340"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1={500} y1={20} x2={500} y2={320} stroke="var(--line-2)" strokeWidth={1} />

        {/* LEFT — siloed paths */}
        <g>
          <path
            d="M110 80 L300 140"
            stroke="rgba(7,16,30,.2)"
            strokeWidth={1}
            strokeDasharray="3 4"
            fill="none"
          />
          <path
            d="M90 190 L260 100"
            stroke="rgba(7,16,30,.2)"
            strokeWidth={1}
            strokeDasharray="3 4"
            fill="none"
          />
          <path
            d="M150 260 L320 200"
            stroke="rgba(7,16,30,.2)"
            strokeWidth={1}
            strokeDasharray="3 4"
            fill="none"
          />
          <g
            fontFamily="var(--keyob-sans), system-ui, sans-serif"
            fontSize={11}
            fontWeight={600}
            fill="var(--ink-dim)"
          >
            <rect x={60} y={62} width={100} height={38} rx={8} fill="var(--bg-soft)" stroke="var(--line-2)" />
            <text x={110} y={86} textAnchor="middle">
              Warehouses
            </text>
            <rect x={250} y={120} width={100} height={38} rx={8} fill="var(--bg-soft)" stroke="var(--line-2)" />
            <text x={300} y={144} textAnchor="middle">
              Transfers
            </text>
            <rect x={55} y={170} width={100} height={38} rx={8} fill="var(--bg-soft)" stroke="var(--line-2)" />
            <text x={105} y={194} textAnchor="middle">
              Sales
            </text>
            <rect x={270} y={182} width={100} height={38} rx={8} fill="var(--bg-soft)" stroke="var(--line-2)" />
            <text x={320} y={206} textAnchor="middle">
              Demand
            </text>
            <rect x={110} y={240} width={100} height={38} rx={8} fill="var(--bg-soft)" stroke="var(--line-2)" />
            <text x={160} y={264} textAnchor="middle">
              Purchasing
            </text>
          </g>
        </g>

        {/* RIGHT — connected, animated paths */}
        <g>
          <path className="story-diag-dash" d="M750 170 L640 90" />
          <path className="story-diag-dash" d="M750 170 L880 90" />
          <path className="story-diag-dash" d="M750 170 L600 170" />
          <path className="story-diag-dash" d="M750 170 L900 170" />
          <path className="story-diag-dash" d="M750 170 L650 255" />
          <circle cx={750} cy={170} r={58} fill="none" stroke="var(--keyob-blue)" strokeWidth={1} opacity={0.55} />
          <circle cx={750} cy={170} r={44} fill="var(--keyob-deep)" />
          <text
            x={750}
            y={166}
            textAnchor="middle"
            fontFamily="var(--keyob-serif), Georgia, serif"
            fontStyle="italic"
            fontSize={14}
            fill="var(--ink-on-dark)"
          >
            KEYOB
          </text>
          <text
            x={750}
            y={182}
            textAnchor="middle"
            fontFamily="var(--keyob-serif), Georgia, serif"
            fontStyle="italic"
            fontSize={11}
            fill="var(--ink-on-dark)"
          >
            layer
          </text>
          <g
            fontFamily="var(--keyob-sans), system-ui, sans-serif"
            fontSize={11}
            fontWeight={700}
            fill="var(--keyob-deep)"
          >
            <rect x={575} y={71} width={78} height={34} rx={8} fill="var(--bg-2)" stroke="var(--keyob-blue)" strokeWidth={1.5} />
            <text x={614} y={93} textAnchor="middle">
              Stock
            </text>
            <rect x={845} y={71} width={78} height={34} rx={8} fill="var(--bg-2)" stroke="var(--keyob-blue)" strokeWidth={1.5} />
            <text x={884} y={93} textAnchor="middle">
              Transfers
            </text>
            <rect x={520} y={153} width={78} height={34} rx={8} fill="var(--bg-2)" stroke="var(--keyob-blue)" strokeWidth={1.5} />
            <text x={559} y={175} textAnchor="middle">
              Sales
            </text>
            <rect x={900} y={153} width={78} height={34} rx={8} fill="var(--bg-2)" stroke="var(--keyob-blue)" strokeWidth={1.5} />
            <text x={939} y={175} textAnchor="middle">
              Demand
            </text>
            <rect x={610} y={238} width={78} height={34} rx={8} fill="var(--bg-2)" stroke="var(--keyob-blue)" strokeWidth={1.5} />
            <text x={649} y={260} textAnchor="middle">
              Buying
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export function StoryDetail({ story, related }: { story: Story; related: Story[] }) {
  const breadcrumbLabel = story.breadcrumbLabel ?? story.tag;
  const methodSteps = story.methodSteps ?? keyobMethodSteps;
  const bottomCta = story.bottomCta;

  return (
    <>
      {/* HERO */}
      <header className="story-shero">
        <div className="story-shero-mesh" aria-hidden="true" />
        <div className="wrap story-shero-inner">
          <div className="story-crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/stories">Stories</Link>
            <span>/</span>
            {breadcrumbLabel}
          </div>
          <div className="story-tag">{story.categoryLabel}</div>
          <h1>
            {story.headline.pre}
            <em>{story.headline.em}</em>
            {story.headline.post ?? ''}
          </h1>
          <p className="story-shero-lead">{story.story}</p>
        </div>
        <div className="wrap">
          <div className="story-facts">
            {story.facts.map((f) => (
              <div className="story-fact" key={f.k}>
                <div className="story-fact-k">{f.k}</div>
                <Html as="div" className="story-fact-v" html={f.v} />
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ARTICLE */}
      <article className="story-article">
        <div className="story-narrow">
          <div className="story-block">
            <div className="story-kicker">The situation</div>
            <Heading
              override={story.situationHeading}
              fallback={
                <>
                  Where it started, and what <em>wasn&apos;t working.</em>
                </>
              }
            />
            {story.body.slice(0, 2).map((p, i) => (
              <Html key={i} html={p} />
            ))}
          </div>

          <div className="story-block">
            <div className="story-kicker">The operational challenges</div>
            <Heading
              override={story.challengesHeading}
              fallback={
                <>
                  Where the friction <em>actually lived.</em>
                </>
              }
            />
            <ul className="story-challenge-list">
              {story.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="story-block">
            <div className="story-kicker">The approach</div>
            <Heading
              override={story.approachHeading}
              fallback={
                <>
                  What we did <em>about it.</em>
                </>
              }
            />
            <Html html={story.approachIntro} />
            {story.body.slice(2).map((p, i) => (
              <Html key={i} html={p} />
            ))}
          </div>

          {story.hasDiagram ? (
            <div className="story-block">
              <StoryDiagram />
            </div>
          ) : null}

          <div className="story-block">
            <div className="story-pullquote">{story.pullquote}</div>
          </div>
        </div>
      </article>

      {/* OUTCOMES — dark, 3 cards */}
      <section className="story-outcomes-section">
        <div className="wrap">
          <div className="story-kicker story-kicker--on-dark">The outcomes</div>
          <h2 className="story-h2--on-dark">
            What changed, in <em>practical terms.</em>
          </h2>
          <div className="story-ogrid">
            {story.outcomeCards.map((c, i) => (
              <div className="story-ocard" key={c.title}>
                <svg
                  className="story-oicon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  dangerouslySetInnerHTML={{ __html: outcomeIcons[i % outcomeIcons.length] }}
                />
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HUMAN SIDE */}
      <section className="story-human">
        <div className="wrap">
          <div className="story-kicker">The human side</div>
          <h2>
            Less firefighting, <em>more managing.</em>
          </h2>
          <p className="story-human-intro">{story.humanIntro}</p>
          <div className="story-human-card">
            <div className="story-human-av" aria-hidden="true">
              <svg viewBox="0 0 72 72">
                <rect width="72" height="72" fill="#123C8C" />
                <circle cx="36" cy="28" r="13" fill="#F5F8FA" opacity=".92" />
                <path
                  d="M14 68 C14 50 23 45 36 45 C49 45 58 50 58 68 Z"
                  fill="#F5F8FA"
                  opacity=".92"
                />
              </svg>
            </div>
            <div>
              <blockquote>{story.humanQuote}</blockquote>
              <div className="story-human-who">
                <b>{story.humanRole.split(' · ')[0]}</b>
                {story.humanRole.includes(' · ') ? ` · ${story.humanRole.split(' · ')[1]}` : ''}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD RECAP */}
      <section className="story-method">
        <div className="wrap">
          <div className="story-kicker">How we worked</div>
          <h2>
            The KEYOB method, applied <em>to this business.</em>
          </h2>
          <div className="story-msteps">
            {methodSteps.map((s) => (
              <div className="story-mstep" key={s.n}>
                <div className="story-mn">{s.n}</div>
                <h4>{s.name}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="story-faq">
        <div className="wrap">
          <div className="story-kicker">Common questions</div>
          <h2>
            What people <em>ask us</em> about this work.
          </h2>
          <StoryFaq items={story.faq} />
        </div>
      </section>

      {/* RELATED — per-story cards when provided, else sibling stories */}
      {story.related && story.related.length > 0 ? (
        <section className="story-related">
          <div className="wrap">
            <div className="story-kicker">Explore further</div>
            <h2>
              Related <em>capabilities &amp; stories.</em>
            </h2>
            <div className="story-rgrid">
              {story.related.map((r) => (
                <Link key={r.href} href={r.href} className="story-rcard">
                  <div className="story-rt">{r.type}</div>
                  <h4>{r.title}</h4>
                  <div className="story-rl">{r.cta}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : related.length > 0 ? (
        <section className="story-related">
          <div className="wrap">
            <div className="story-kicker">Explore further</div>
            <h2>
              Related <em>capabilities &amp; stories.</em>
            </h2>
            <div className="story-rgrid">
              {related.map((r) => (
                <Link key={r.slug} href={`/stories/${r.slug}`} className="story-rcard">
                  <div className="story-rt">{r.tag}</div>
                  <h4>{r.industry}</h4>
                  <div className="story-rl">
                    Read story <span aria-hidden="true">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* BOTTOM CTA */}
      <section className="story-cta">
        <div className="story-cta-mesh" aria-hidden="true" />
        <div className="wrap story-cta-inner">
          {bottomCta ? (
            <>
              <h2>
                {bottomCta.headline.pre}
                <em>{bottomCta.headline.em}</em>
                {bottomCta.headline.post ?? ''}
              </h2>
              <p>{bottomCta.body}</p>
              <Link href={bottomCta.ctaHref} className="story-cta-btn">
                {bottomCta.ctaLabel} <span aria-hidden="true">→</span>
              </Link>
            </>
          ) : (
            <>
              <h2>
                Where is your business <em>running on stale data?</em>
              </h2>
              <p>
                A free AI assessment is the same first step every one of these stories began with —
                a focused look at where intelligence and integration would earn their place. No
                obligation.
              </p>
              <Link href="/contact" className="story-cta-btn">
                Book your free AI assessment <span aria-hidden="true">→</span>
              </Link>
            </>
          )}
        </div>
      </section>
    </>
  );
}
