import type { Metadata, Viewport } from 'next';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { RevealOnScroll } from '@/components/util/RevealOnScroll';
import {
  ErpCompare,
  ErpFinalCtaSection,
  ErpFit,
  ErpHero,
  ErpIntegration,
  ErpModules,
  ErpSteps,
  ErpWhatItIs,
} from '@/components/blocks/ErpSections';
import { ErpFaq } from '@/components/blocks/ErpFaq';
import { SapHeroVisual } from '@/components/blocks/ErpHeroVisuals';
import {
  sapCompare,
  sapCta,
  sapDeliveryHead,
  sapFaq,
  sapFaqHead,
  sapFitHead,
  sapFitNo,
  sapFitYes,
  sapHero,
  sapIntegration,
  sapModules,
  sapModulesHead,
  sapSteps,
  sapWhat,
  sapWhatHead,
} from '@/config/keyob-erp';
import { siteConfig, defaultOgImages, defaultTwitterImages } from '@/config/site.config';

const PATH = '/what-we-do/erp-implementations/sap-business-one';
const TITLE = 'SAP Business One Implementation';
const DESCRIPTION =
  'KEYOB implements SAP Business One end to end — fit assessment, implementation, data migration, integration and ongoing support — connected to the rest of your operating layer.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteConfig.url}${PATH}` },
  openGraph: {
    type: 'website',
    title: `${TITLE} — KEYOB`,
    description:
      "SAP's ERP for small and mid-sized businesses, implemented properly and connected to everything else you run.",
    url: `${siteConfig.url}${PATH}`,
    images: defaultOgImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} — KEYOB`,
    description: "SAP's ERP for small and mid-sized businesses, implemented properly.",
    images: defaultTwitterImages,
  },
};

export const viewport: Viewport = {
  themeColor: '#07101E',
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'SAP Business One Implementation',
  provider: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  areaServed: { '@type': 'Country', name: 'Australia' },
  description:
    'SAP Business One advisory, implementation, data migration, integration and managed support for small and mid-sized businesses.',
  url: `${siteConfig.url}${PATH}`,
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'What we do', item: `${siteConfig.url}/what-we-do` },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'ERP Implementations',
      item: `${siteConfig.url}/what-we-do/erp-implementations`,
    },
    { '@type': 'ListItem', position: 3, name: 'SAP Business One', item: `${siteConfig.url}${PATH}` },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: sapFaq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function SapBusinessOnePage() {
  return (
    <>
      <Nav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <RevealOnScroll threshold={0.12} />
      <ErpHero hero={sapHero} visual={<SapHeroVisual />} />
      <main>
        <ErpWhatItIs
          head={sapWhatHead}
          paragraphs={sapWhat.paragraphs}
          factKicker={sapWhat.factKicker}
          facts={sapWhat.facts}
        />
        <ErpModules head={sapModulesHead} modules={sapModules} />
        <ErpFit
          head={sapFitHead}
          yes={sapFitYes}
          no={sapFitNo}
          alternative={{ label: 'Odoo', href: '/what-we-do/erp-implementations/odoo' }}
        />
        <ErpSteps head={sapDeliveryHead} steps={sapSteps} flush />
        <ErpIntegration
          eyebrow={sapIntegration.eyebrow}
          heading={sapIntegration.heading}
          body={sapIntegration.body}
          items={sapIntegration.items}
        />
        <ErpFaq head={sapFaqHead} items={sapFaq} />
        <ErpCompare title={sapCompare.title} body={sapCompare.body} cta={sapCompare.cta} />
        <ErpFinalCtaSection cta={sapCta} />
      </main>
      <Footer />
    </>
  );
}
