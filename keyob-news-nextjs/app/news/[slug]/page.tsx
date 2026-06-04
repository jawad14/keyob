// app/news/[slug]/page.tsx — /news/[slug] detail
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/articles";
import { ArticleHero } from "@/components/ArticleHero";
import { ArticleBody } from "@/components/ArticleBody";
import { RelatedSolutions } from "@/components/RelatedSolutions";
import { RelatedArticles } from "@/components/RelatedArticles";
import { articleMetadata, articleSchema, breadcrumbSchema, organizationSchema, jsonLd, SITE } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = articles.find((x) => x.slug === params.slug);
  return a ? articleMetadata(a) : {};
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = article.relatedArticles
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean) as typeof articles;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema(article))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema([
        { name: "Home", url: `${SITE.url}/` },
        { name: "News", url: `${SITE.url}/news` },
        { name: article.title, url: `${SITE.url}/news/${article.slug}` },
      ]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema())} />

      <ArticleHero article={article} />

      <article className="mx-auto max-w-[860px] px-8 py-16">
        <ArticleBody blocks={article.content} />

        <p className="mt-10 font-mono text-xs tracking-wide text-ink/45">
          Published {new Date(article.publishedAt).toLocaleDateString("en-AU")} ·
          {" "}Updated {new Date(article.updatedAt).toLocaleDateString("en-AU")}
        </p>

        <div className="mt-12">
          <RelatedSolutions solutions={article.relatedSolutions} />
        </div>

        <div className="mt-12 rounded-2xl bg-ink p-10 text-center text-paper">
          <h2 className="mx-auto max-w-[22ch] font-serif text-[clamp(24px,3.4vw,36px)] font-light leading-tight">
            Discuss this with <em className="italic text-accent-soft">KEYOB</em>
          </h2>
          <Link href="https://keyob.com.au/#contact" className="btn-primary mt-7 inline-flex">
            Discuss this with KEYOB <span aria-hidden>→</span>
          </Link>
        </div>
      </article>

      <RelatedArticles articles={related} />
    </main>
  );
}
