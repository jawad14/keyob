import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { StoryDetail } from '@/components/blocks/StoryDetail';
import { stories } from '@/config/keyob-stories';
import { siteConfig } from '@/config/site.config';

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
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
    alternates: { canonical: `${siteConfig.url}/stories/${story.slug}` },
    openGraph: {
      title: `${story.industry} — KEYOB`,
      description: story.story,
      url: `${siteConfig.url}/stories/${story.slug}`,
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

  return (
    <>
      <Nav />
      <main>
        <StoryDetail story={story} related={related} />
      </main>
      <Footer />
    </>
  );
}
