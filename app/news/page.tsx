import type { Metadata } from 'next';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { NewsHero } from '@/components/blocks/NewsHero';
import { NewsFeatured } from '@/components/blocks/NewsFeatured';
import { NewsGrid } from '@/components/blocks/NewsGrid';
import { NewsSignup } from '@/components/blocks/NewsSignup';
import { NewsCTA } from '@/components/blocks/NewsCTA';
import { newsArticles } from '@/config/keyob-news';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'News & Perspectives on AI Operations',
  description:
    'Practical updates and field notes on AI workflow automation, ERP systems, business process automation and operational intelligence from KEYOB.',
  alternates: { canonical: `${siteConfig.url}/news` },
  openGraph: {
    title: 'News & Perspectives on AI Operations | KEYOB',
    description: 'Practical insights on AI operations, workflow automation and ERP systems.',
    url: `${siteConfig.url}/news`,
  },
};

export default function NewsPage() {
  const featured = newsArticles.find((a) => a.featured) ?? newsArticles[0];
  return (
    <>
      <Nav />
      <main>
        <NewsHero />
        <NewsFeatured article={featured} />
        <NewsGrid excludeSlug={featured.slug} />
        <NewsSignup />
        <NewsCTA />
      </main>
      <Footer />
    </>
  );
}
