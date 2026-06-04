import type { Metadata } from 'next';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { CtHero } from '@/components/blocks/CtHero';
import { ContactSection } from '@/components/blocks/ContactSection';
import { GlobalPresence } from '@/components/blocks/GlobalPresence';
import { CtFaq } from '@/components/blocks/CtFaq';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Contact KEYOB | Book a Free AI Assessment',
  description:
    'Talk to KEYOB about your business systems, AI workflows, CRM, ERP, websites or automation. Free AI assessment — no obligation, one business day response.',
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: 'Contact KEYOB | Book a Free AI Assessment',
    description:
      'Tell us where you are. KEYOB helps you see what AI, automation and connected systems can do for your business — no obligation.',
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <CtHero />
        <div id="form">
          <ContactSection />
        </div>
        <GlobalPresence />
        <CtFaq />
      </main>
      <Footer />
    </>
  );
}
