import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { LeaderArticles } from '@/components/blocks/LeaderArticles';
import { getLeaderArticlePage, leaderArticleSlugs } from '@/config/keyob-leader-articles';
import { getLeaderProfile } from '@/config/keyob-leader-profiles';
import { siteConfig } from '@/config/site.config';

export const viewport: Viewport = {
  themeColor: '#07101E',
};

export const dynamicParams = false;

export function generateStaticParams() {
  return leaderArticleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLeaderArticlePage(slug);
  const profile = getLeaderProfile(slug);
  if (!page || !profile) return {};

  const url = `${siteConfig.url}/leadership-team/${slug}/articles`;
  // The layout title template appends "· KEYOB"; keep the brand out of the page title.
  const title = `${page.hero.eyebrow} — Articles & Perspectives`;
  const ogTitle = `${title} · KEYOB`;
  const description = `Ideas on business, technology and partnership from ${profile.name}, ${profile.role}. Read the latest perspective and browse the full archive.`;
  const ogImage = {
    url: '/opengraph-image.png',
    width: 1200,
    height: 630,
    alt: `${page.hero.eyebrow} — articles by ${profile.name}, KEYOB`,
  };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', title: ogTitle, description, url, images: [ogImage] },
    twitter: { card: 'summary_large_image', title: ogTitle, description, images: [ogImage.url] },
  };
}

export default async function LeaderArticlesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLeaderArticlePage(slug);
  const profile = getLeaderProfile(slug);
  if (!page || !profile) notFound();

  const url = `${siteConfig.url}/leadership-team/${slug}/articles`;
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: page.hero.eyebrow,
    url,
    author: {
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.role,
      worksFor: { '@type': 'Organization', name: 'KEYOB' },
    },
    publisher: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Leadership & Team',
        item: `${siteConfig.url}/leadership-team`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: profile.name,
        item: `${siteConfig.url}/leadership-team/${slug}`,
      },
      { '@type': 'ListItem', position: 4, name: 'Articles', item: url },
    ],
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <LeaderArticles page={page} accent={profile.accent} leaderName={profile.name} />
      <Footer />
    </>
  );
}
