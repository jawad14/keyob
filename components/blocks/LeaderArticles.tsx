/* eslint-disable no-restricted-syntax --
 * Editorial articles page with a custom typographic scale owned by
 * LeaderArticles.module.css — raw headings/paragraphs keep styling local. */
'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type {
  LeaderArticlePage,
  LeaderLongArticle,
} from '@/config/keyob-leader-articles';
import styles from './LeaderArticles.module.css';

type Accent = { plum: string; plumMist: string; plumSoft: string };

type Props = {
  page: LeaderArticlePage;
  accent: Accent;
  leaderName: string;
};

function Glyph({ scale = 1 }: { scale?: number }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={60 * scale}
      height={60 * scale}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={styles.glyphSvg}
      aria-hidden="true"
    >
      <rect x="30" y="20" width="60" height="80" rx="6" />
      <path d="M42 40h36M42 54h36M42 68h24" />
      <circle cx="60" cy="16" r="4" className={styles.glyphDot} stroke="none" />
    </svg>
  );
}

function ArticleMedia({
  a,
  sizes,
  glyphScale,
}: {
  a: LeaderLongArticle;
  sizes: string;
  glyphScale?: number;
}) {
  if (a.image) {
    return (
      <Image
        src={a.image}
        alt={a.imageAlt ?? a.title}
        fill
        sizes={sizes}
        className={styles.mediaImg}
      />
    );
  }
  return (
    <div className={styles.glyph}>
      <Glyph scale={glyphScale} />
    </div>
  );
}

function MetaRow({ a }: { a: LeaderLongArticle }) {
  return (
    <div className={styles.meta}>
      <span>{a.date}</span>
      <span className={styles.sep} />
      <span>{a.read}</span>
      <span className={styles.sep} />
      <span>{a.topic}</span>
    </div>
  );
}

function useCountUp(target: number) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const step = Math.max(1, Math.round(target / 24));
    let current = 0;
    const iv = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(iv);
      }
      setN(current);
    }, 34);
    return () => clearInterval(iv);
  }, [target]);
  return n;
}

export function LeaderArticles({ page, accent, leaderName }: Props) {
  const { author, articles, hero, archive, subscribe, profilePath } = page;

  const accentStyle = {
    ['--la-plum' as string]: accent.plum,
    ['--la-plum-mist' as string]: accent.plumMist,
    ['--la-plum-soft' as string]: accent.plumSoft,
  } as React.CSSProperties;

  const featured = useMemo(
    () => articles.find((a) => a.featured) ?? articles[0],
    [articles],
  );

  const topics = useMemo(
    () => ['All', ...Array.from(new Set(articles.map((a) => a.topic)))],
    [articles],
  );

  const [activeTopic, setActiveTopic] = useState('All');
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const count = useCountUp(articles.length);

  const filtered = useMemo(
    () => (activeTopic === 'All' ? articles : articles.filter((a) => a.topic === activeTopic)),
    [activeTopic, articles],
  );

  const openArticle = useCallback((slug: string) => setOpenSlug(slug), []);
  const closeArticle = useCallback(() => setOpenSlug(null), []);

  const active = openSlug ? articles.find((a) => a.slug === openSlug) : null;

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeArticle();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, closeArticle]);

  return (
    <div className={styles.root} style={accentStyle}>
      {/* HERO */}
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.crumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/leadership-team">Leadership &amp; Team</Link>
            <span>/</span>
            <Link href={profilePath}>{leaderName}</Link>
            <span>/</span>Articles
          </div>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.desk}>
                <span className={styles.deskAv}>{author.initial}</span>
                <span>
                  <span className={styles.deskNm}>{author.name}</span>
                  <br />
                  <span className={styles.deskRl}>{author.role}</span>
                </span>
              </div>
              <div className={styles.heroEyebrow}>{hero.eyebrow}</div>
              <h1 className={styles.heroTitle}>
                {hero.headingPrefix} <em>{hero.headingEm}</em>
              </h1>
              <p className={styles.heroIntro}>{hero.intro}</p>
            </div>
            <div className={styles.hstat}>
              <b>{count}</b>
              articles &amp; counting
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* FEATURED */}
        <section className={`${styles.sct} ${styles.feat}`} aria-labelledby="feat-h">
          <div className={styles.wrap}>
            <div className={styles.featFlag}>
              <span className={styles.featDot} /> Featured perspective
            </div>
            <article className={styles.featCard}>
              <div className={styles.fcMedia}>
                <ArticleMedia
                  a={featured}
                  sizes="(min-width: 880px) 52vw, 100vw"
                  glyphScale={1.7}
                />
              </div>
              <div className={styles.fcBody}>
                <span className={styles.cat}>{featured.topic}</span>
                <h2 id="feat-h" className={styles.fcTitle}>
                  {featured.title}
                </h2>
                <p className={styles.dek}>{featured.dek}</p>
                <MetaRow a={featured} />
                <div className={styles.fcCta}>
                  <button
                    type="button"
                    className={styles.btn}
                    onClick={() => openArticle(featured.slug)}
                  >
                    Read the article <span className={styles.arr}>→</span>
                  </button>
                  <span className={styles.byline}>By {author.name}</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* BROWSE */}
        <section className={`${styles.sct} ${styles.browse}`} aria-labelledby="all-h">
          <div className={styles.wrap}>
            <div className={styles.browseHead}>
              <div>
                <div className={`${styles.heroEyebrow} ${styles.plum}`}>{archive.eyebrow}</div>
                <h2 id="all-h" className={styles.secTitle}>
                  {archive.headingPrefix} <em>{archive.headingEm}</em>
                </h2>
              </div>
              <div className={styles.filters} role="tablist" aria-label="Filter articles by topic">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={styles.filter}
                    role="tab"
                    aria-selected={activeTopic === t}
                    onClick={() => setActiveTopic(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {filtered.length > 0 ? (
              <div className={styles.grid}>
                {filtered.map((a) => (
                  <button
                    key={a.slug}
                    type="button"
                    className={styles.acard}
                    onClick={() => openArticle(a.slug)}
                    aria-label={`Read: ${a.title}`}
                  >
                    <div className={styles.acMedia}>
                      <ArticleMedia
                        a={a}
                        sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw"
                      />
                    </div>
                    <div className={styles.acBody}>
                      <span className={styles.cat}>{a.topic}</span>
                      <h3 className={styles.acTitle}>{a.title}</h3>
                      <p className={styles.acDek}>{a.dek}</p>
                      <MetaRow a={a} />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className={styles.empty}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.3}
                  width={42}
                  height={42}
                  aria-hidden="true"
                >
                  <path d="M4 5h16v14H4zM8 9h8M8 13h6" />
                </svg>
                <p>No articles in this topic yet — more are being prepared.</p>
              </div>
            )}
          </div>
        </section>

        {/* SUBSCRIBE */}
        <section className={`${styles.sct} ${styles.sub}`} aria-labelledby="sub-h">
          <div className={`${styles.wrap} ${styles.subInner}`}>
            <div>
              <div className={styles.heroEyebrow}>{subscribe.eyebrow}</div>
              <h2 id="sub-h" className={`${styles.secTitle} ${styles.onDark}`}>
                {subscribe.headingPrefix} <em>{subscribe.headingEm}</em>
              </h2>
              <p className={styles.subCopy}>{subscribe.copy}</p>
            </div>
            <div className={styles.subActions}>
              <a
                href={author.linkedin}
                className={styles.btn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on LinkedIn <span className={styles.arr}>→</span>
              </a>
              <Link href="/contact#contact" className={styles.btnGhostLight}>
                Talk to KEYOB
              </Link>
            </div>
          </div>
        </section>

        {/* BACK NAV */}
        <nav className={styles.backnav} aria-label="Return">
          <div className={`${styles.wrap} ${styles.backnavInner}`}>
            <Link href={profilePath} className={styles.back}>
              <svg
                width={15}
                height={15}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to {leaderName.split(' ')[0]}’s profile
            </Link>
            <Link href="/leadership-team" className={styles.lnk}>
              All KEYOB leadership <span className={styles.arr}>→</span>
            </Link>
          </div>
        </nav>
      </main>

      {/* READER MODAL */}
      <div
        className={`${styles.reader} ${active ? styles.readerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!active}
        aria-label={active ? active.title : undefined}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeArticle();
        }}
      >
        <div className={styles.readerPanel}>
          <button
            type="button"
            className={styles.readerClose}
            onClick={closeArticle}
            aria-label="Close article"
          >
            ×
          </button>
          {active ? (
            <div className={styles.readerBody}>
              <span className={styles.rCat}>{active.topic}</span>
              <h1 className={styles.rTitle}>{active.title}</h1>
              <div className={styles.rMeta}>
                <span>By {author.name}</span>
                <span className={styles.sep} />
                <span>{active.date}</span>
                <span className={styles.sep} />
                <span>{active.read}</span>
              </div>
              <div className={styles.rContent}>
                {active.body.map((b, i) => {
                  if (b.t === 'h') return <h3 key={i}>{b.v}</h3>;
                  if (b.t === 'q') return <blockquote key={i}>{b.v}</blockquote>;
                  return <p key={i}>{b.v}</p>;
                })}
              </div>
              <div className={styles.rFoot}>
                <span className={styles.rFootAv}>{author.initial}</span>
                <span>
                  <span className={styles.rFootNm}>{author.name}</span>
                  <br />
                  <span className={styles.rFootRl}>{author.role}</span>
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
