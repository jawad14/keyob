import Image from 'next/image';
import Link from 'next/link';
import type { Story } from '@/config/keyob-stories';

export function StoryDetail({ story, related }: { story: Story; related: Story[] }) {
  return (
    <>
      <section className="phead story-phead">
        <div className="phead-mesh" aria-hidden="true" />
        <div className="wrap phead-inner">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/stories">Client stories</Link>
            <span>/</span>
            {story.tag}
          </div>
          <div className="story-industry-eyebrow">{story.industry}</div>
          <h1>{story.story}</h1>
          <div className="story-hero-stat">
            <div className="story-hero-stat-num">{story.stat}</div>
            <div className="story-hero-stat-sub">{story.statSub}</div>
          </div>
        </div>
      </section>

      <section className="story-banner" aria-hidden="true">
        <div className="wrap">
          <div className="story-banner-img">
            <Image
              src={story.image}
              alt={story.imageAlt}
              fill
              sizes="(min-width: 1280px) 1240px, 100vw"
              priority
              className="story-banner-photo"
            />
          </div>
        </div>
      </section>

      <section className="story-body">
        <div className="wrap story-body-grid">
          <div className="story-body-main">
            {story.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="story-outcomes">
            <span className="eyebrow">Key outcomes</span>
            <ul>
              {story.keyOutcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            <div className="story-outcome-tag">
              <span className="eyebrow">Headline result</span>
              <strong>
                {story.stat} <span>{story.statSub}</span>
              </strong>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="story-related">
          <div className="wrap">
            <div className="story-related-head">
              <span className="eyebrow">More stories</span>
              <Link href="/stories">View all stories →</Link>
            </div>
            <div className="story-related-grid">
              {related.map((r) => (
                <Link key={r.slug} href={`/stories/${r.slug}`} className="story-related-card">
                  <span className="tag">{r.tag}</span>
                  <h4>{r.industry}</h4>
                  <p>{r.story}</p>
                  <span className="view">
                    Read story <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
