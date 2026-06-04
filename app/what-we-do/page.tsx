import type { Metadata } from 'next';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { WwdHero } from '@/components/blocks/WwdHero';
import { WwdIntro } from '@/components/blocks/WwdIntro';
import { WwdPathway } from '@/components/blocks/WwdPathway';
import { WwdConnected } from '@/components/blocks/WwdConnected';
import { WwdStages } from '@/components/blocks/WwdStages';
import { WwdEcosystem } from '@/components/blocks/WwdEcosystem';
import { WwdPaths } from '@/components/blocks/WwdPaths';
import { WwdMethod } from '@/components/blocks/WwdMethod';
import { WwdHuman } from '@/components/blocks/WwdHuman';
import { WwdFaq } from '@/components/blocks/WwdFaq';
import { WwdCta } from '@/components/blocks/WwdCta';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'What We Do',
  description:
    'KEYOB helps businesses connect branding, websites, SEO, CRM, ERP, AI automation, dashboards, and integrations into one smarter operating layer.',
  alternates: { canonical: `${siteConfig.url}/what-we-do` },
  openGraph: {
    title: 'What We Do | KEYOB',
    description:
      'One partner for every stage of your digital and AI journey — from branding and websites to CRM, ERP, AI automation and dashboards.',
    url: `${siteConfig.url}/what-we-do`,
  },
};

export default function WhatWeDoPage() {
  return (
    <>
      <Nav />
      <main>
        <WwdHero />
        <WwdIntro />
        <WwdPathway />
        <WwdConnected />
        <WwdStages />
        <WwdEcosystem />
        <WwdPaths />
        <WwdMethod />
        <WwdHuman />
        <WwdFaq />
        <WwdCta />
      </main>
      <Footer />
    </>
  );
}
