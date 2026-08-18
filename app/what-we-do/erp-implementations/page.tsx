import type { Metadata, Viewport } from 'next';
import { Nav } from '@/components/blocks/Nav';
import { Footer } from '@/components/blocks/Footer';
import { RevealOnScroll } from '@/components/util/RevealOnScroll';
import {
  ErpDoors,
  ErpFinalCtaSection,
  ErpHero,
  ErpLead,
  ErpPlatforms,
  ErpSteps,
  ErpWhyGrid,
} from '@/components/blocks/ErpSections';
import { ErpFaq } from '@/components/blocks/ErpFaq';
import { ErpHubVisual } from '@/components/blocks/ErpHeroVisuals';
import {
  erpHubCta,
  erpHubDeliveryHead,
  erpHubDoors,
  erpHubFaq,
  erpHubFaqHead,
  erpHubHero,
  erpHubLeadHead,
  erpHubPlatforms,
  erpHubPlatformsHead,
  erpHubSteps,
  erpHubWhy,
  erpHubWhyHead,
} from '@/config/keyob-erp';
import { siteConfig, defaultOgImages, defaultTwitterImages } from '@/config/site.config';

const PATH = '/what-we-do/erp-implementations';
const TITLE = 'ERP Implementations — SAP Business One & Odoo';
const DESCRIPTION =
  "KEYOB's ERP implementation practice: SAP Business One and Odoo, delivered end to end and integrated into one connected operating layer — advisory, implementation, data migration and ongoing support.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteConfig.url}${PATH}` },
  openGraph: {
    type: 'website',
    title: `${TITLE} | KEYOB`,
    description:
      'Two proven ERP paths, one delivery discipline — implemented and connected to everything else your business runs on.',
    url: `${siteConfig.url}${PATH}`,
    images: defaultOgImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | KEYOB`,
    description: 'Two proven ERP paths, one delivery discipline.',
    images: defaultTwitterImages,
  },
};

export const viewport: Viewport = {
  themeColor: '#07101E',
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'ERP Implementation',
  provider: { '@type': 'Organization', name: 'KEYOB', url: siteConfig.url },
  areaServed: { '@type': 'Country', name: 'Australia' },
  description:
    'ERP advisory, implementation, data migration, integration and support across SAP Business One and Odoo.',
  url: `${siteConfig.url}${PATH}`,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ERP platforms',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'SAP Business One implementation' },
      },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Odoo implementation' } },
    ],
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'What we do',
      item: `${siteConfig.url}/what-we-do`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'ERP Implementations',
      item: `${siteConfig.url}${PATH}`,
    },
  ],
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: erpHubFaq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function ErpImplementationsPage() {
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
      <ErpHero hero={erpHubHero} visual={<ErpHubVisual />} />
      <main>
        <ErpDoors doors={erpHubDoors} />
        <ErpWhyGrid head={erpHubWhyHead} items={erpHubWhy} />
        <ErpLead head={erpHubLeadHead} />
        <ErpPlatforms head={erpHubPlatformsHead} cards={erpHubPlatforms} />
        <ErpSteps head={erpHubDeliveryHead} steps={erpHubSteps} />
        <ErpFaq head={erpHubFaqHead} items={erpHubFaq} />
        <ErpFinalCtaSection cta={erpHubCta} />
      </main>
      <Footer />
    </>
  );
}
