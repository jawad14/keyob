import type { Metadata } from 'next';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { LtHero } from '@/components/blocks/LtHero';
import { LtLeaders } from '@/components/blocks/LtLeaders';
import { LtPhilosophy } from '@/components/blocks/LtPhilosophy';
import { LtTeam } from '@/components/blocks/LtTeam';
import { LtEngagement } from '@/components/blocks/LtEngagement';
import { LtCulture } from '@/components/blocks/LtCulture';
import { LtFinalCta } from '@/components/blocks/LtFinalCta';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Leadership & Team | KEYOB',
  description:
    "Meet KEYOB's leadership and team across Australia, the United States, Sweden, Pakistan, KSA, and UAE — the people behind KEYOB's software, AI, CRM, ERP, automation, and business systems work.",
  alternates: { canonical: `${siteConfig.url}/leadership-team` },
  openGraph: {
    title: 'Leadership & Team | KEYOB',
    description:
      "The people behind KEYOB's software, AI, CRM, ERP, automation and business systems work — across Australia, the US, Sweden, Pakistan, KSA and UAE.",
    url: `${siteConfig.url}/leadership-team`,
  },
};

export default function LeadershipTeamPage() {
  return (
    <>
      <Nav />
      <main>
        <LtHero />
        <LtLeaders />
        <LtPhilosophy />
        <LtTeam />
        <LtEngagement />
        <LtCulture />
        <LtFinalCta />
      </main>
      <Footer />
    </>
  );
}
