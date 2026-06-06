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
    phones: string[];
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
  name: 'KEYOB — AI Consulting for Australian Businesses',
  shortName: 'KEYOB',
  description:
    'We help Australian business owners create more freedom by using AI in the right places. Save time, reduce costs, and support growth. Book a free AI assessment today.',
  url: 'https://keyob.com.au',
  ogImage: '/opengraph-image',
  locale: 'en_AU',
  author: { name: 'KEYOB', url: 'https://keyob.com.au' },
  nav: [
    { label: 'What we do', href: '/what-we-do' },
    { label: 'Stories', href: '/stories' },
    { label: 'Leadership', href: '/leadership-team' },
    { label: 'News', href: '/news' },
    { label: 'Contact', href: '/contact#contact' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/keyobofficial' },
  ],
  contact: {
    email: 'info@keyob.com',
    phones: ['+61 433 278 992', '+61 415 373 506'],
    address: 'Level 1, 67 Springwood Road, Springwood, QLD 4127, Australia',
  },
  providers: {
    logger: 'console',
    analytics: 'none',
    email: 'smtp',
    cms: 'mdx',
    errors: 'console',
    search: 'pagefind',
  },
  features: {
    blog: true,
    darkMode: false,
    newsletter: false,
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'KEYOB — AI Consulting for Australian Businesses | Free AI Assessment',
    template: '%s · KEYOB',
  },
  description: siteConfig.description,
  keywords: [
    'AI consulting Australia',
    'AI automation for business',
    'business process automation Brisbane',
    'free AI assessment',
    'AI implementation Australia',
    'workflow automation consultancy',
    'digital transformation Australia',
    'AI for professional services',
    'CRM integration Brisbane',
    'operational intelligence',
    'AI for small business Australia',
    'reduce business costs with AI',
    'KEYOB',
  ],
  applicationName: 'KEYOB',
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: 'KEYOB',
  publisher: 'KEYOB',
  category: 'Technology Consulting',
  openGraph: {
    type: 'website',
    siteName: 'KEYOB',
    title: 'KEYOB — AI Consulting for Australian Businesses | Free AI Assessment',
    description:
      'We help Australian business owners create more freedom by using AI in the right places. Book a free AI assessment — no obligation.',
    url: siteConfig.url,
    locale: siteConfig.locale,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'KEYOB — AI Consulting for Australian Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KEYOB — AI Consulting for Australian Businesses',
    description:
      'We help Australian business owners create more freedom by using AI in the right places.',
    images: ['/opengraph-image.png'],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
