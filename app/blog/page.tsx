import Link from 'next/link';
import type { Metadata } from 'next';
import { Footer } from '@/components/blocks/Footer';
import { Header } from '@/components/blocks/Header';
import { Container, Section, Stack } from '@/components/ui/layout';
import { H1, H2, Muted, Text } from '@/components/ui/typography';
import { cms } from '@/lib/cms';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest articles.',
};

export default async function BlogIndexPage() {
  const posts = await cms.listPosts();
  return (
    <>
      <Header />
      <Section as="main" spacing="lg" className="flex-1">
        <Container size="md">
          <H1>Blog</H1>
          {posts.length === 0 ? (
            <Muted className="mt-6">No posts yet.</Muted>
          ) : (
            <Stack as="ul" gap="xl" className="mt-10 list-none pl-0">
              {posts.map((post) => (
                <li key={post.slug} className="border-border/60 border-b pb-8 last:border-b-0">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <Stack gap="sm">
                      <H2 className="group-hover:text-primary text-xl transition-colors">
                        {post.title}
                      </H2>
                      <Muted className="text-sm">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </Muted>
                      <Text>{post.description}</Text>
                    </Stack>
                  </Link>
                </li>
              ))}
            </Stack>
          )}
        </Container>
      </Section>
      <Footer />
    </>
  );
}
