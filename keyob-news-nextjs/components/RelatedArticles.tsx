// components/RelatedArticles.tsx
import type { NewsArticle } from "@/lib/types";
import { NewsCard } from "./NewsCard";

export function RelatedArticles({ articles }: { articles: NewsArticle[] }) {
  if (!articles.length) return null;
  return (
    <section className="mx-auto max-w-[1240px] px-8 py-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Related articles</p>
      <h2 className="mt-3 font-serif text-[clamp(26px,3.4vw,40px)] font-light tracking-tight">Keep exploring</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {articles.slice(0, 3).map((a) => <NewsCard key={a.slug} article={a} />)}
      </div>
    </section>
  );
}
