'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { stories, storyCategories, type StoryCategory } from '@/config/keyob-stories';

type Filter = StoryCategory | 'all';

export function StoriesGrid() {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = useMemo(
    () => (filter === 'all' ? stories : stories.filter((s) => s.category === filter)),
    [filter],
  );

  return (
    <>
      <div className="story-filters">
        <div className="wrap story-filter-row">
          {storyCategories.map((c) => (
            <button
              key={c.key}
              type="button"
              className={`chip ${filter === c.key ? 'active' : ''}`}
              onClick={() => setFilter(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <section className="stories">
        <div className="wrap">
          <div className="sgrid">
            {visible.map((s) => (
              <Link
                key={s.slug}
                href={`/stories/${s.slug}`}
                className={`scard${s.featured ? ' feat' : ''}`}
              >
                <div className="scard-visual">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(min-width: 860px) 50vw, 100vw"
                    className="scard-photo"
                  />
                  <span className="scard-tag">{s.tag}</span>
                </div>
                <div className="scard-body">
                  <div className="industry">{s.industry}</div>
                  {s.featured && s.storyLong && s.storyLong.length > 0 ? (
                    s.storyLong.map((p, i) => (
                      <p key={i} className="story">{p}</p>
                    ))
                  ) : (
                    <p className="story">{s.story}</p>
                  )}
                  <span className="view">
                    {s.featured ? 'Read the story' : 'View story'}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
