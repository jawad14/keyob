import { Nav } from '@/components/blocks/Nav';
import { HeroSection } from '@/components/blocks/HeroSection';
import { ValueSection } from '@/components/blocks/ValueSection';
import { RealitySection } from '@/components/blocks/RealitySection';
import { WhatWeDoSection } from '@/components/blocks/WhatWeDoSection';
import { MethodologySection } from '@/components/blocks/MethodologySection';
import { CapabilitiesSection } from '@/components/blocks/CapabilitiesSection';
import { IndustriesSection } from '@/components/blocks/IndustriesSection';
import { OutcomesSection } from '@/components/blocks/OutcomesSection';
import { InsightsSection } from '@/components/blocks/InsightsSection';
import { FounderQuote } from '@/components/blocks/FounderQuote';
import { ClosingCTA } from '@/components/blocks/ClosingCTA';
import { MarqueeBand } from '@/components/blocks/MarqueeBand';
import { ContactSection } from '@/components/blocks/ContactSection';
import { Footer } from '@/components/blocks/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site.config';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ValueSection />
        <RealitySection />
        <WhatWeDoSection />
        <MethodologySection />
        <CapabilitiesSection />
        <IndustriesSection />
        <OutcomesSection />
        <InsightsSection />
        <FounderQuote />
        <ClosingCTA />
        <MarqueeBand />
        <ContactSection />
      </main>
      <Footer />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'KEYOB',
          url: siteConfig.url,
          description: siteConfig.description,
          address: {
            '@type': 'PostalAddress',
            streetAddress: '333 Ann Street',
            addressLocality: 'Brisbane',
            addressCountry: 'AU',
          },
        }}
      />
    </>
  );
}
