import type { Metadata } from 'next';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { StoriesHero } from '@/components/blocks/StoriesHero';
import { StoriesGrid } from '@/components/blocks/StoriesGrid';
import { StoriesCTA } from '@/components/blocks/StoriesCTA';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Client Stories',
  description:
    'Real KEYOB client stories: how AI consulting, workflow automation and systems integration turned fragmented operations into intelligent, connected systems across Australian industries.',
  alternates: { canonical: `${siteConfig.url}/stories` },
  openGraph: {
    title: 'Client Stories — KEYOB',
    description:
      'How KEYOB turns fragmented operations into intelligent, connected systems — real client stories across Australian industries.',
    url: `${siteConfig.url}/stories`,
  },
};

export default function StoriesPage() {
  return (
    <>
      <Nav />
      <main>
        <StoriesHero />
        <StoriesGrid />
        <StoriesCTA />
      </main>
      <Footer />
    </>
  );
}
