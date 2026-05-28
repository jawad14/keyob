import { siteConfig } from './site.config';
import { capabilities, phases, industries } from './keyob-data';

const BASE = siteConfig.url.replace(/\/$/, '');

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${BASE}/#organization`,
    name: 'KEYOB',
    url: BASE,
    description:
      'KEYOB helps Australian business owners create more freedom in their business by using AI in the right places — improving profitability, making work easier for teams, and supporting growth.',
    foundingDate: '2020',
    areaServed: [
      { '@type': 'Country', name: 'Australia' },
      { '@type': 'Country', name: 'New Zealand' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Level 1, 67 Springwood Road',
      addressLocality: 'Springwood',
      addressRegion: 'QLD',
      postalCode: '4127',
      addressCountry: 'AU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phone,
      contactType: 'customer service',
      availableLanguage: 'en',
    },
    sameAs: ['https://linkedin.com/company/keyob'],
    knowsAbout: [
      'Artificial Intelligence',
      'Business Process Automation',
      'AI Consulting',
      'Digital Transformation',
      'Workflow Automation',
      'CRM Integration',
      'Operational Intelligence',
      'AI Governance',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Consulting Services',
      itemListElement: capabilities.map((cap) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: cap.tag,
          description: cap.problem,
          provider: { '@id': `${BASE}/#organization` },
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE}/#website`,
    url: BASE,
    name: 'KEYOB',
    description: 'AI consulting and automation services for Australian businesses.',
    publisher: { '@id': `${BASE}/#organization` },
    inLanguage: 'en-AU',
  };
}

export function serviceListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'KEYOB AI Consulting Services',
    itemListElement: capabilities.map((cap, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: cap.tag,
        description: cap.problem,
        provider: { '@id': `${BASE}/#organization` },
        areaServed: { '@type': 'Country', name: 'Australia' },
        serviceOutput: cap.outcome,
      },
    })),
  };
}

export function faqSchema() {
  const industryNames = industries.map((ind) => ind.title).join(', ');

  const faqs = [
    {
      q: 'What does a free AI assessment from KEYOB include?',
      a: "KEYOB's free AI assessment is a focused conversation about where your business is and what's possible with AI. We identify simple, practical ways to save time, reduce costs, improve performance, and support growth — with no obligation to engage further.",
    },
    {
      q: 'How does KEYOB help business owners use AI?',
      a: 'KEYOB helps business owners create more freedom in their business by using AI in the right places. Our focus is on practical business transformation — improving profitability, making work easier for your team, and creating better collaboration across the business.',
    },
    {
      q: 'What industries does KEYOB serve?',
      a: `KEYOB works with businesses across ${industryNames} — environments where fragmented systems have a real cost in billable hours, patient experience, compliance risk, or scale capacity.`,
    },
    {
      q: 'How long does an AI implementation take?',
      a: "Timelines depend on scope. KEYOB follows a five-phase approach: Discovery, Architecture, Build, Calibrate, and Evolve. Each phase delivers measurable outcomes before the next begins, so you see value early. Most engagements see early results within 60–90 days.",
    },
    {
      q: 'What is AI workflow automation and how can it help my business?',
      a: 'AI workflow automation replaces manual, repetitive tasks with intelligent processes that run automatically. For Australian businesses, this means staff spend less time on administration and more time on the work that grows the business.',
    },
    {
      q: 'Does KEYOB work with small businesses or only large enterprises?',
      a: 'KEYOB works with businesses at any scale where fragmented systems are creating real cost — whether that is a professional services firm of 20 people or a multi-site enterprise. The free AI assessment helps determine whether and how AI can help your specific situation.',
    },
    {
      q: 'What is the difference between AI experimentation and AI execution?',
      a: 'AI experimentation is testing tools without a clear strategy — often producing inconsistent results. AI execution means deploying AI in a deliberate, structured way that creates measurable improvements in time, cost, and performance. KEYOB focuses exclusively on execution.',
    },
    {
      q: 'How much does AI consulting cost?',
      a: 'The first step — a free AI assessment — costs nothing. After the assessment, KEYOB provides a clear view of the opportunity and what an engagement would involve. Every engagement is scoped to your specific situation before any commitment is made.',
    },
    {
      q: 'Where is KEYOB based?',
      a: 'KEYOB is headquartered at Level 1, 67 Springwood Road, Springwood, Queensland, Australia, and works with businesses across Australia and New Zealand.',
    },
    {
      q: 'What AI tools and platforms does KEYOB work with?',
      a: 'KEYOB is platform-agnostic and works across leading CRM, workflow, automation, and AI platforms. Tool selection is always driven by your operational needs and what will create the most value — not vendor relationships.',
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function howToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How KEYOB implements AI in your business',
    description:
      "KEYOB's five-phase AI implementation methodology — from free assessment to continuous improvement.",
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'AUD', value: '0', unitText: 'assessment' },
    step: phases.map((phase, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: phase.tag,
      text: phase.summary,
      itemListElement: phase.capabilities.map((cap, j) => ({
        '@type': 'HowToDirection',
        position: j + 1,
        text: cap,
      })),
    })),
  };
}

export function breadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'KEYOB',
        item: BASE,
      },
    ],
  };
}

export function allSchemas() {
  return [
    organizationSchema(),
    websiteSchema(),
    serviceListSchema(),
    faqSchema(),
    howToSchema(),
    breadcrumbSchema(),
  ];
}
