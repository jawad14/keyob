import type { Metadata } from 'next';

export type NavItem = { label: string; href: string };

export type SocialLink = { label: string; href: string };

export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  locale: string;
  author: { name: string; url?: string };
  nav: NavItem[];
  social: SocialLink[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  providers: {
    logger: 'console' | 'pino';
    analytics: 'none' | 'plausible' | 'umami' | 'posthog' | 'ga4';
    email: 'none' | 'resend' | 'smtp' | 'web3forms' | 'formspree';
    cms: 'mdx' | 'sanity' | 'payload';
    errors: 'console' | 'sentry';
    search: 'pagefind' | 'algolia' | 'meilisearch';
  };
  features: {
    blog: boolean;
    darkMode: boolean;
    newsletter: boolean;
  };
};

export const siteConfig: SiteConfig = {
  name: 'KEYOB — AI Consulting Services & Solutions',
  shortName: 'KEYOB',
  description:
    "Australia's leading enterprise AI consultancy. We move businesses from AI experimentation to scalable execution — through agentic development, legacy modernisation, and rigorous AI governance.",
  url: 'https://keyob.com.au',
  ogImage: '/opengraph-image',
  locale: 'en_AU',
  author: { name: 'KEYOB', url: 'https://keyob.com.au' },
  nav: [
    { label: 'What we do', href: '#capabilities' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Outcomes', href: '#outcomes' },
    { label: 'Insights', href: '#insights' },
    { label: 'Careers', href: '/careers' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/keyob' },
  ],
  contact: {
    email: 'hello@keyob.com.au',
    phone: '+61 7 3000 0000',
    address: '333 Ann Street, Brisbane, Australia',
  },
  providers: {
    logger: 'console',
    analytics: 'none',
    email: 'none',
    cms: 'mdx',
    errors: 'console',
    search: 'pagefind',
  },
  features: {
    blog: false,
    darkMode: false,
    newsletter: false,
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s · KEYOB` },
  description: siteConfig.description,
  applicationName: 'KEYOB',
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  openGraph: {
    type: 'website',
    siteName: 'KEYOB',
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};
