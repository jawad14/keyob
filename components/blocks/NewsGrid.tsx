'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { NewsMotif } from '@/components/blocks/NewsMotif';
import {
  newsAEO,
  newsArticles,
  newsCategories,
  type NewsArticle,
  type NewsCategory,
} from '@/config/keyob-news';

type Filter = NewsCategory | 'all';
const PAGE_SIZE = 6;

export function NewsGrid({ excludeSlug }: { excludeSlug?: string }) {
  const [filter, setFilter] = useState<Filter>('all');
  const [shown, setShown] = useState(PAGE_SIZE);

  const list = useMemo(() => {
    const base = excludeSlug ? newsArticles.filter((a) => a.slug !== excludeSlug) : newsArticles;
    return filter === 'all' ? base : base.filter((a) => a.category === filter);
  }, [filter, excludeSlug]);

  const visible = list.slice(0, shown);

  const items: Array<{ kind: 'card'; article: NewsArticle } | { kind: 'aeo'; q: string; a: string }> = [];
  let ai = 0;
  visible.forEach((a, i) => {
    items.push({ kind: 'card', article: a });
    if (filter === 'all' && (i + 1) % 3 === 0) {
      const slot = newsAEO[ai % newsAEO.length];
      ai += 1;
      items.push({ kind: 'aeo', q: slot.q, a: slot.a });
    }
  });

  return (
    <>
      <div className="news-filters">
        <div className="wrap news-filter-row">
          {newsCategories.map((c) => (
            <button
              key={c.key}
              type="button"
              className={`news-chip ${filter === c.key ? 'is-active' : ''}`}
              onClick={() => {
                setFilter(c.key);
                setShown(PAGE_SIZE);
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <section className="news-feed" id="feed">
        <div className="wrap">
          <div className="news-grid">
            {items.map((it, idx) =>
              it.kind === 'card' ? (
                <Link key={it.article.slug} href={`/news/${it.article.slug}`} className="news-card">
                  <div className="news-card-vis">
                    <NewsMotif kind={it.article.visual} gradientId={`news-card-${idx}`} />
                  </div>
                  <div className="news-card-body">
                    <div className="news-tag">
                      <span className="news-tag-dot" />
                      {it.article.category}
                    </div>
                    <h3>{it.article.title}</h3>
                    <p className="news-card-ex">{it.article.excerpt}</p>
                    <div className="news-card-tags">
                      {it.article.tags.map((t) => (
                        <span key={t}>#{t}</span>
                      ))}
                    </div>
                    <div className="news-card-meta">
                      <span>
                        {it.article.date} · {it.article.readTime}
                      </span>
                      <span className="news-read">
                        Read more <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div key={`aeo-${idx}`} className="news-aeo">
                  <div className="news-aeo-label">Quick answer</div>
                  <h3>{it.q}</h3>
                  <p>{it.a}</p>
                </div>
              ),
            )}
          </div>
          {shown < list.length && (
            <div className="news-loadmore">
              <button
                type="button"
                className="news-btn news-btn--ghost-light"
                onClick={() => setShown((n) => n + PAGE_SIZE)}
              >
                Load more articles
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
