/* eslint-disable no-restricted-syntax --
 * "From <leader>'s desk" profile section with a custom typographic scale owned
 * by LeaderArticlesPreview.module.css — raw headings/quotes keep styling local. */
import Link from 'next/link';

import type { LeaderArticlePage } from '@/config/keyob-leader-articles';
import styles from './LeaderArticlesPreview.module.css';

type Accent = { plum: string; plumMist: string; plumSoft: string };

type Props = { page: LeaderArticlePage; accent: Accent };

export function LeaderArticlesPreview({ page, accent }: Props) {
  const { articles, hero } = page;
  const articlesHref = `${page.profilePath}/articles`;

  const accentStyle = {
    ['--la-plum' as string]: accent.plum,
    ['--la-plum-mist' as string]: accent.plumMist,
    ['--la-plum-soft' as string]: accent.plumSoft,
  } as React.CSSProperties;

  // The quote/feature card always reflects the latest article (data is ordered newest-first).
  const latest = articles[0];
  const latestQuote = latest.body.find((b) => b.t === 'q')?.v ?? latest.dek;
  const recent = articles.filter((a) => a !== latest).slice(0, 4);

  return (
    <section
      className={`${styles.section} lp-sct`}
      id="articles"
      aria-labelledby="articles-h"
      style={accentStyle}
    >
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div className={styles.lead}>
            <div className={styles.eyebrow}>{hero.eyebrow}</div>
            <h2 className={styles.title} id="articles-h">
              {hero.headingPrefix} <em>{hero.headingEm}</em>
            </h2>
            <p className={styles.sub}>{hero.intro}</p>
          </div>
          <div className={styles.count}>
            <b>{articles.length}</b>
            articles &amp; counting
          </div>
        </div>

        <div className={styles.grid}>
          {/* FEATURED QUOTE CARD */}
          <Link
            href={`${articlesHref}/${latest.slug}`}
            className={styles.feat}
            aria-label={`Read: ${latest.title}`}
          >
            <div>
              <span className={styles.flag}>
                <span className={styles.dot} /> Latest perspective
              </span>
              <span className={styles.qmark} aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className={styles.quote}>{latestQuote}</blockquote>
              <div className={styles.cite}>
                From <span className={styles.citeTt}>{latest.title}</span>
              </div>
            </div>
            <div className={styles.foot}>
              <div className={styles.meta}>
                <span>{latest.topic}</span>
                <span className={styles.sep} />
                <span>{latest.date}</span>
                <span className={styles.sep} />
                <span>{latest.read}</span>
              </div>
              <span className={styles.btn}>
                Read the article <span className={styles.arr}>→</span>
              </span>
            </div>
          </Link>

          {/* COMPACT RECENT LIST */}
          <div className={styles.recent}>
            <div className={styles.rt}>More from the desk</div>
            <div className={styles.rlist}>
              {recent.map((a) => (
                <Link key={a.slug} href={`${articlesHref}/${a.slug}`} className={styles.ritem}>
                  <span className={styles.cat}>{a.topic}</span>
                  <h3 className={styles.ritemTitle}>
                    {a.title}{' '}
                    <span className={styles.go} aria-hidden="true">
                      →
                    </span>
                  </h3>
                  <span className={styles.rmeta}>
                    {a.date} · {a.read}
                  </span>
                </Link>
              ))}
            </div>
            <div className={styles.all}>
              <Link href={articlesHref} className={styles.lnk}>
                Browse all articles <span className={styles.arr}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
