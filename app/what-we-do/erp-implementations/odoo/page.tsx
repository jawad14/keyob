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
import { OdooHeroVisual } from '@/components/blocks/ErpHeroVisuals';
import {
  odooCompare,
  odooCta,
  odooDeliveryHead,
  odooFaq,
  odooFaqHead,
  odooFitHead,
  odooFitNo,
  odooFitYes,
  odooHero,
  odooIntegration,
  odooModules,
  odooModulesHead,
  odooSteps,
  odooWhat,
  odooWhatHead,
} from '@/config/keyob-erp';
import { siteConfig, defaultOgImages, defaultTwitterImages } from '@/config/site.config';

const PATH = '/what-we-do/erp-implementations/odoo';
const TITLE = 'Odoo Implementation';
const DESCRIPTION =
  'KEYOB implements Odoo end to end — app selection, configuration, customisation, data migration, integration and ongoing support — connected to the rest of your operating layer.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteConfig.url}${PATH}` },
  openGraph: {
    type: 'website',
    title: `${TITLE} — KEYOB`,
    description:
      'A modular open-source business suite, implemented properly and shaped around how you actually work.',
    url: `${siteConfig.url}${PATH}`,
    images: defaultOgImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} — KEYOB`,
    description: 'A modular open-source business suite, implemented properly.',
    images: defaultTwitterImages,
  },
};

export const viewport: Viewport = {
  themeColor: '#07101E',
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Odoo Implementation',
  provider: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  areaServed: { '@type': 'Country', name: 'Australia' },
  description:
    'Odoo advisory, implementation, customisation, data migration, integration and managed support.',
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
    { '@type': 'ListItem', position: 3, name: 'Odoo', item: `${siteConfig.url}${PATH}` },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: odooFaq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function OdooPage() {
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
      <ErpHero hero={odooHero} visual={<OdooHeroVisual />} />
      <main>
        <ErpWhatItIs
          head={odooWhatHead}
          paragraphs={odooWhat.paragraphs}
          factKicker={odooWhat.factKicker}
          facts={odooWhat.facts}
        />
        <ErpModules head={odooModulesHead} modules={odooModules} />
        <ErpFit
          head={odooFitHead}
          yes={odooFitYes}
          no={odooFitNo}
          alternative={{
            label: 'SAP Business One',
            href: '/what-we-do/erp-implementations/sap-business-one',
          }}
        />
        <ErpSteps head={odooDeliveryHead} steps={odooSteps} flush />
        <ErpIntegration
          eyebrow={odooIntegration.eyebrow}
          heading={odooIntegration.heading}
          body={odooIntegration.body}
          items={odooIntegration.items}
        />
        <ErpFaq head={odooFaqHead} items={odooFaq} />
        <ErpCompare title={odooCompare.title} body={odooCompare.body} cta={odooCompare.cta} />
        <ErpFinalCtaSection cta={odooCta} />
      </main>
      <Footer />
    </>
  );
}
