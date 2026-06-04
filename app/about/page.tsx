import type { Metadata } from 'next';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { AuOpening } from '@/components/blocks/AuOpening';
import { AuThread } from '@/components/blocks/AuThread';
import { AuShift } from '@/components/blocks/AuShift';
import { AuBecame } from '@/components/blocks/AuBecame';
import { AuTrust } from '@/components/blocks/AuTrust';
import { AuPrinciples } from '@/components/blocks/AuPrinciples';
import { AuJourney } from '@/components/blocks/AuJourney';
import { AuPhilosophy } from '@/components/blocks/AuPhilosophy';
import { AuRelationship } from '@/components/blocks/AuRelationship';
import { AuDifferent } from '@/components/blocks/AuDifferent';
import { GlobalPresence } from '@/components/blocks/GlobalPresence';
import { AuFounder } from '@/components/blocks/AuFounder';
import { AuFinalCta } from '@/components/blocks/AuFinalCta';
import { AuFaq } from '@/components/blocks/AuFaq';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'About KEYOB | Software, Data & AI Partner for Modern Businesses',
  description:
    'KEYOB helps businesses modernize through connected websites, CRM, ERP, automation, dashboards, integrations, and practical AI workflows — built on long-term client trust and professional delivery.',
  alternates: { canonical: `${siteConfig.url}/about` },
  openGraph: {
    title: 'About KEYOB | Software, Data & AI Partner for Modern Businesses',
    description:
      'The operating layer behind modern business. KEYOB connects software, websites, CRM, ERP, automation, dashboards and AI into systems that help businesses run with clarity.',
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <AuOpening />
        <AuThread />
        <AuShift />
        <AuBecame />
        <AuTrust />
        <AuPrinciples />
        <AuJourney />
        <AuPhilosophy />
        <AuRelationship />
        <AuDifferent />
        <GlobalPresence />
        <AuFounder />
        <AuFinalCta />
        <AuFaq />
      </main>
      <Footer />
    </>
  );
}
