import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { NewsArticleDetail } from '@/components/blocks/NewsArticleDetail';
import { newsArticles } from '@/config/keyob-news';
import { siteConfig } from '@/config/site.config';

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.seoTitle ?? article.title,
    description: article.metaDescription ?? article.excerpt,
    alternates: { canonical: `${siteConfig.url}/news/${article.slug}` },
    openGraph: {
      title: article.seoTitle ?? `${article.title} | KEYOB`,
      description: article.metaDescription ?? article.excerpt,
      url: `${siteConfig.url}/news/${article.slug}`,
      type: 'article',
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <Nav />
      <main>
        <NewsArticleDetail article={article} />
      </main>
      <Footer />
    </>
  );
}
