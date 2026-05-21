import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Footer } from '@/components/blocks/Footer';
import { Header } from '@/components/blocks/Header';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H1, Muted } from '@/components/ui/typography';
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

  return (
    <>
      <Header />
      <Section as="main" spacing="lg" className="flex-1">
        <Container size="sm">
          <article>
            <Stack gap="md" className="mb-10">
              <H1>{post.title}</H1>
              <Muted className="text-sm">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </Muted>
            </Stack>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <pre className="bg-muted overflow-auto rounded-md p-4 text-sm whitespace-pre-wrap">
                {post.content}
              </pre>
            </div>
          </article>
        </Container>
      </Section>
      <Footer />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          author: { '@type': 'Person', name: siteConfig.author.name },
          mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
        }}
      />
    </>
  );
}
