import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';
import { cms } from '@/lib/cms';

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await cms.listPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await cms.getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await cms.getPost(slug);
  if (!post || post.draft) notFound();

  const dateFormatted = new Date(post.date).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Nav />
      <main className="article-page">
        <div className="article-hero">
          <div className="wrap">
            <div className="article-meta">
              <span className="eyebrow">{post.tags[0] ?? 'Insight'}</span>
              <span className="article-date">{dateFormatted}</span>
            </div>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-desc">{post.description}</p>
            <Link href="/#insights" className="article-back">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to perspectives
            </Link>
          </div>
        </div>

        <div className="article-body">
          <div className="wrap">
            <div className="prose-keyob">
              <MDXRemote source={post.content} />
            </div>

            <div className="article-cta">
              <span className="eyebrow">{post.cta?.heading ?? 'Free AI Assessment'}</span>
              <p>{post.cta?.body ?? 'Book a free AI assessment with us. We\'ll explore where AI could create the next opportunity in your business — simple, practical ways to save time, reduce costs, and support growth.'}</p>
              <Link href={post.cta?.href ?? '/#contact'} className="btn-primary">
                {post.cta?.label ?? 'Book your free AI assessment'}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
          publisher: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
          mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
          keywords: post.tags.join(', '),
        }}
      />
    </>
  );
}
