// lib/seo.ts
import type { Metadata } from "next";
import type { NewsArticle } from "@/lib/types";

export const SITE = {
  url: "https://keyob.com.au",
  name: "KEYOB",
  logo: "https://keyob.com.au/keyob-mark.png",
  twitter: "@keyob",
};

/** Page metadata for an individual article (App Router generateMetadata). */
export function articleMetadata(a: NewsArticle): Metadata {
  const url = `${SITE.url}/news/${a.slug}`;
  return {
    title: a.seoTitle,
    description: a.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: a.seoTitle,
      description: a.metaDescription,
      url,
      siteName: SITE.name,
      images: [{ url: `${SITE.url}${a.image}`, alt: a.imageAlt }],
      publishedTime: a.publishedAt,
      modifiedTime: a.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: a.seoTitle,
      description: a.metaDescription,
      images: [`${SITE.url}${a.image}`],
    },
  };
}

/** Article OR NewsArticle schema — evergreen guides must never be NewsArticle. */
export function articleSchema(a: NewsArticle) {
  const type = a.kind === "news" ? "NewsArticle" : "Article";
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: a.title,
    description: a.summary,
    image: `${SITE.url}${a.image}`,
    datePublished: a.publishedAt,
    dateModified: a.updatedAt,
    author: { "@type": "Organization", name: a.author, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: SITE.logo },
    },
    mainEntityOfPage: `${SITE.url}/news/${a.slug}`,
    articleSection: a.category,
    keywords: a.tags.join(", "),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    sameAs: ["https://linkedin.com/company/keyob"],
  };
}

export function collectionPageSchema(articles: NewsArticle[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "News & Perspectives on AI Operations",
    description:
      "Practical updates and field notes on AI workflow automation, ERP systems, business process automation and operational intelligence.",
    url: `${SITE.url}/news`,
    hasPart: articles.map((a) => ({
      "@type": a.kind === "news" ? "NewsArticle" : "Article",
      headline: a.title,
      url: `${SITE.url}/news/${a.slug}`,
      datePublished: a.publishedAt,
    })),
  };
}

/** Inline JSON-LD <script> string for App Router pages. */
export function jsonLd(obj: unknown) {
  return { __html: JSON.stringify(obj) };
}
