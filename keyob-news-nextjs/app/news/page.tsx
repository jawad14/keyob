// app/news/page.tsx  — /news listing
import type { Metadata } from "next";
import { articles } from "@/data/articles";
import { NewsHero } from "@/components/NewsHero";
import { FeaturedNewsCard } from "@/components/FeaturedNewsCard";
import { NewsFeed } from "@/components/NewsFeed";
import { NewsletterBlock } from "@/components/NewsletterBlock";
import { FinalCTA } from "@/components/FinalCTA";
import { breadcrumbSchema, collectionPageSchema, organizationSchema, jsonLd, SITE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "News & Perspectives on AI Operations | KEYOB",
  description:
    "Practical updates and field notes on AI workflow automation, ERP systems, business process automation and operational intelligence from KEYOB.",
  alternates: {
    canonical: `${SITE.url}/news`,
    types: { "application/rss+xml": `${SITE.url}/news/rss.xml` },
  },
  openGraph: {
    type: "website",
    title: "News & Perspectives on AI Operations | KEYOB",
    description: "Practical insights on AI operations, workflow automation and ERP systems.",
    url: `${SITE.url}/news`,
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image", title: "News & Perspectives on AI Operations | KEYOB" },
};

export default function NewsPage() {
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== featured.slug);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(collectionPageSchema(articles))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema([
        { name: "Home", url: `${SITE.url}/` },
        { name: "News", url: `${SITE.url}/news` },
      ]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema())} />

      <NewsHero />

      <section className="mx-auto max-w-[1240px] px-8 pt-16">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Featured</p>
        <FeaturedNewsCard article={featured} />
      </section>

      <NewsFeed articles={rest} />
      <NewsletterBlock />
      <FinalCTA />
    </main>
  );
}
