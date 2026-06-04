import Link from 'next/link';
import { keyobMethodSteps, type Story } from '@/config/keyob-stories';
import { StoryFaq } from '@/components/blocks/StoryFaq';

const outcomeIcons = [
  '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  '<path d="M3 12h18M12 3v18" opacity=".4"/><path d="M5 19l5-5 4 4 5-7"/>',
  '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14h8"/>',
];

export function StoryDetail({ story, related }: { story: Story; related: Story[] }) {
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
            {story.tag}
          </div>
          <div className="story-tag">{story.categoryLabel}</div>
          <h1>{story.story}</h1>
          <p className="story-shero-lead">{story.statSub}</p>
        </div>
        <div className="wrap">
          <div className="story-facts">
            {story.facts.map((f) => (
              <div className="story-fact" key={f.k}>
                <div className="story-fact-k">{f.k}</div>
                <div className="story-fact-v">{f.v}</div>
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
            <h2>
              Where it started, and what <em>wasn&apos;t working.</em>
            </h2>
            {story.body.slice(0, 2).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="story-block">
            <div className="story-kicker">The operational challenges</div>
            <h2>
              Where the friction <em>actually lived.</em>
            </h2>
            <ul className="story-challenge-list">
              {story.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div className="story-block">
            <div className="story-kicker">The approach</div>
            <h2>
              What we did <em>about it.</em>
            </h2>
            <p>{story.approachIntro}</p>
            {story.body.slice(2).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="story-block">
            <div className="story-pullquote">{story.pullquote}</div>
          </div>
        </div>
      </article>

      {/* OUTCOMES — dark, 3 cards */}
      <section className="story-outcomes-section">
        <div className="story-narrow story-narrow--wide">
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
        <div className="story-narrow story-narrow--wide">
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
        <div className="story-narrow story-narrow--wide">
          <div className="story-kicker">How we worked</div>
          <h2>
            The KEYOB method, applied <em>to this business.</em>
          </h2>
          <div className="story-msteps">
            {keyobMethodSteps.map((s) => (
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
        <div className="story-narrow story-narrow--wide">
          <div className="story-kicker">Common questions</div>
          <h2>
            What people <em>ask us</em> about this work.
          </h2>
          <StoryFaq items={story.faq} />
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="story-related">
          <div className="story-narrow story-narrow--wide">
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
      )}

      {/* BOTTOM CTA */}
      <section className="story-cta">
        <div className="story-cta-mesh" aria-hidden="true" />
        <div className="wrap story-cta-inner">
          <h2>
            Where is your business <em>running on stale data?</em>
          </h2>
          <p>
            A free AI assessment is the same first step every one of these stories began with — a
            focused look at where intelligence and integration would earn their place. No
            obligation.
          </p>
          <Link href="/#contact" className="story-cta-btn">
            Book your free AI assessment <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
