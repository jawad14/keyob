import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { LeaderProfile } from '@/components/blocks/LeaderProfile';
import { getLeaderProfile, leaderProfiles } from '@/config/keyob-leader-profiles';
import { getLeaderArticlePage } from '@/config/keyob-leader-articles';
import { siteConfig, defaultOgImages, defaultTwitterImages } from '@/config/site.config';

export const viewport: Viewport = {
  themeColor: '#07101E',
};

export const dynamicParams = false;

const PORTRAITS: Record<string, string> = {
  'jawad-siddique': '/jawad-siddique-au.png',
  'saad-khalid': '/saad-khalid-au.png',
  'mansoor-ahmad-samar': '/mansoor-ahmad-samar-pk.png',
  'ehsan-alvi': '/ehsan-alvi-au.png',
};

// Ehsan's candid (ehsan-beyond-candid.jpg) is intentionally omitted so the
// human section renders the placeholder note until an approved photo exists.
const CANDIDS: Record<string, string> = {
  'jawad-siddique': '/jawad-siddique-leadership.png',
  'saad-khalid': '/saad-khalid-health-minister.png',
  'mansoor-ahmad-samar': '/mansoor-gitex-dubai-2025.jpg',
};

export function generateStaticParams() {
  return leaderProfiles.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const profile = getLeaderProfile(slug);
  if (!profile) return {};
  const url = `${siteConfig.url}/leadership-team/${profile.slug}`;
  const title = `${profile.name} — ${profile.role}`;
  return {
    title,
    description: profile.identityStatement,
    alternates: { canonical: url },
    openGraph: {
      type: 'profile',
      title,
      description: profile.identityStatement,
      url,
      images: defaultOgImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: profile.identityStatement,
      images: defaultTwitterImages,
    },
  };
}

export default async function LeaderProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = getLeaderProfile(slug);
  if (!profile) notFound();

  const url = `${siteConfig.url}/leadership-team/${profile.slug}`;
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    worksFor: {
      '@type': 'Organization',
      name: 'KEYOB',
      url: siteConfig.url,
    },
    url,
    address: { '@type': 'PostalAddress', addressCountry: 'AU' },
    description: profile.identityStatement,
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.url}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Leadership',
        item: `${siteConfig.url}/leadership-team`,
      },
      { '@type': 'ListItem', position: 3, name: profile.name, item: url },
    ],
  };

  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <LeaderProfile
        profile={profile}
        portraitSrc={PORTRAITS[profile.slug]}
        candidSrc={CANDIDS[profile.slug]}
        articlePage={getLeaderArticlePage(profile.slug)}
      />
      <Footer />
    </>
  );
}
