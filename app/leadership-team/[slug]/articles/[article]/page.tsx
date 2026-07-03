/* eslint-disable no-restricted-syntax --
 * Article detail page with a custom editorial scale owned by article.module.css. */
import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { ArticleShare } from '@/components/blocks/ArticleShare';
import {
  articleMetaDescription,
  getAdjacentArticles,
  getLeaderArticle,
  leaderArticleParams,
  type LeaderLongArticle,
} from '@/config/keyob-leader-articles';
import { getLeaderProfile } from '@/config/keyob-leader-profiles';
import { siteConfig, defaultOgImages, defaultTwitterImages } from '@/config/site.config';
import styles from './article.module.css';

export const viewport: Viewport = { themeColor: '#07101E' };
export const dynamicParams = false;

export function generateStaticParams() {
  return leaderArticleParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; article: string }>;
}): Promise<Metadata> {
  const { slug, article } = await params;
  const found = getLeaderArticle(slug, article);
  const profile = getLeaderProfile(slug);
  if (!found || !profile) return {};

  const { article: a } = found;
  const url = `${siteConfig.url}/leadership-team/${slug}/articles/${a.slug}`;
  const description = articleMetaDescription(a);
  const images = a.image
    ? [{ url: a.image, alt: a.imageAlt ?? a.title }]
    : defaultOgImages;
  return {
    title: `${a.title} — ${profile.name}, KEYOB`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: a.title,
      description,
      url,
      siteName: 'KEYOB',
      authors: [profile.name],
      section: a.topic,
      publishedTime: a.date,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: a.title,
      description,
      images: a.image ? [a.image] : defaultTwitterImages,
    },
  };
}

function Body({ blocks }: { blocks: LeaderLongArticle['body'] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if (b.t === 'h')
          return (
            <h2 key={i} className={styles.abH}>
              {b.v}
            </h2>
          );
        if (b.t === 'q')
          return (
            <figure key={i} className={styles.abQ}>
              <span className={styles.qm} aria-hidden="true">
                &ldquo;
              </span>
              <blockquote>{b.v}</blockquote>
            </figure>
          );
        return <p key={i}>{b.v}</p>;
      })}
    </>
  );
}

function PnCard({
  art,
  dir,
  hub,
}: {
  art: LeaderLongArticle | null;
  dir: 'prev' | 'next';
  hub: string;
}) {
  if (!art) return <span className={`${styles.pn} ${styles.ghost}`} aria-hidden="true" />;
  return (
    <Link href={`${hub}/${art.slug}`} className={`${styles.pn} ${styles[dir]}`}>
      <span className={styles.pnK}>{dir === 'prev' ? '← Previous' : 'Next →'}</span>
      <span className={styles.pnCat}>{art.topic}</span>
      <span className={styles.pnT}>{art.title}</span>
    </Link>
  );
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string; article: string }>;
}) {
  const { slug, article } = await params;
  const found = getLeaderArticle(slug, article);
  const profile = getLeaderProfile(slug);
  if (!found || !profile) notFound();

  const { page, article: a } = found;
  const { author } = page;
  const firstName = author.name.split(' ')[0];
  const profilePath = page.profilePath;
  const hub = `${profilePath}/articles`;
  const url = `${siteConfig.url}${hub}/${a.slug}`;
  const { prev, next } = getAdjacentArticles(slug, a.slug);

  const accentStyle = {
    ['--la-plum' as string]: profile.accent.plum,
    ['--la-plum-mist' as string]: profile.accent.plumMist,
    ['--la-plum-soft' as string]: profile.accent.plumSoft,
  } as React.CSSProperties;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: articleMetaDescription(a),
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: profile.role,
      url: `${siteConfig.url}${profilePath}`,
    },
    publisher: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
    datePublished: a.date,
    articleSection: a.topic,
    ...(a.image ? { image: `${siteConfig.url}${a.image}` } : {}),
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Leadership & Team', item: `${siteConfig.url}/leadership-team` },
      { '@type': 'ListItem', position: 2, name: author.name, item: `${siteConfig.url}${profilePath}` },
      { '@type': 'ListItem', position: 3, name: 'Articles', item: `${siteConfig.url}${hub}` },
      { '@type': 'ListItem', position: 4, name: a.title, item: url },
    ],
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleLd, breadcrumbLd]) }}
      />

      <div className={styles.root} style={accentStyle}>
        <header className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.crumb}>
              <Link href="/leadership-team">Leadership &amp; Team</Link>
              <span className={styles.s}>/</span>
              <Link href={profilePath}>{author.name}</Link>
              <span className={styles.s}>/</span>
              <Link href={hub}>Articles</Link>
              <span className={styles.s}>/</span>
              <span>{a.topic}</span>
            </div>
            <span className={styles.ey}>
              From {firstName}&apos;s desk&nbsp;·&nbsp;
              <span className={styles.cat}>{a.topic}</span>
            </span>
            <h1 className={styles.h1}>{a.title}</h1>
            <p className={styles.dek}>{a.dek}</p>
            <div className={styles.meta}>
              <span className={styles.av}>{author.initial}</span>
              <span className={styles.who}>
                <b>{author.name}</b>
                <br />
                {author.role}
              </span>
              <span className={styles.mm}>
                <span>{a.date}</span>
                <span className={styles.sep} />
                <span>{a.read}</span>
              </span>
            </div>
          </div>
        </header>

        {a.image ? (
          <div className={styles.heroImageWrap}>
            <div className={styles.heroImage}>
              <Image
                src={a.image}
                alt={a.imageAlt ?? a.title}
                fill
                sizes="(min-width: 820px) 760px, 100vw"
                className={styles.heroImageImg}
                priority
              />
            </div>
          </div>
        ) : null}

        <main className={styles.body}>
          <article className={styles.col}>
            <Body blocks={a.body} />
          </article>

          <div className={styles.foot}>
            <div className={styles.by}>
              <span className={styles.av}>{author.initial}</span>
              <span className={styles.who}>
                Written by <b>{author.name}</b>
                <br />
                {author.role}
              </span>
            </div>
            <div className={styles.share}>
              <span className={styles.lbl}>Share</span>
              <ArticleShare url={url} title={a.title} className={styles.shareBtns} />
            </div>
          </div>
        </main>

        <nav className={styles.aNav} aria-label="More articles">
          <div className={styles.grid}>
            <PnCard art={prev} dir="prev" hub={hub} />
            <PnCard art={next} dir="next" hub={hub} />
          </div>
          <div className={styles.backHub}>
            <Link href={hub}>← All articles from {firstName}&apos;s desk</Link>
          </div>
        </nav>
      </div>

      <Footer />
    </>
  );
}
