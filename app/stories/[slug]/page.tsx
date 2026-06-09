import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { StoryDetail } from '@/components/blocks/StoryDetail';
import { stories } from '@/config/keyob-stories';
import { siteConfig } from '@/config/site.config';

export const viewport: Viewport = {
  themeColor: '#0d1b2a',
};

const BESPOKE_SLUGS = new Set([
  'investment-markets-australia',
  'best-value-custom-erp',
  'automart-nationwide',
  'international-coaching-institute',
  'aleesa-ai',
]);

export function generateStaticParams() {
  return stories
    .filter((s) => !BESPOKE_SLUGS.has(s.slug))
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) return {};
  return {
    title: story.industry,
    description: story.story,
    keywords: [
      'systems integration',
      'operational intelligence',
      'inventory visibility',
      'AI workflow automation',
      'custom ERP systems',
      'operational visibility',
      'business process automation',
      'AI consulting Australia',
      'KEYOB',
    ],
    alternates: { canonical: `${siteConfig.url}/stories/${story.slug}` },
    openGraph: {
      type: 'article',
      title: `${story.industry} — KEYOB`,
      description: story.story,
      url: `${siteConfig.url}/stories/${story.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${story.industry} — KEYOB`,
      description: story.story,
    },
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();

  const related = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  const url = `${siteConfig.url}/stories/${story.slug}`;
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${story.headline.pre}${story.headline.em}${story.headline.post ?? ''}`,
    description: story.story,
    author: { '@type': 'Organization', name: 'KEYOB' },
    publisher: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
    mainEntityOfPage: url,
    articleSection: story.categoryLabel,
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Client Stories', item: `${siteConfig.url}/stories` },
      { '@type': 'ListItem', position: 3, name: story.industry, item: url },
    ],
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: story.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <main>
        <StoryDetail story={story} related={related} />
      </main>
      <Footer />
    </>
  );
}
