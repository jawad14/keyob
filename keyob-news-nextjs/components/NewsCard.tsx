// components/NewsCard.tsx
import Link from "next/link";
import type { NewsArticle } from "@/lib/types";
import { CategoryVisual } from "./CategoryVisual";
import { formatDate } from "@/lib/format";

const variantFor = (cat: string): "hub" | "flow" | "grid" =>
  cat.includes("Integration") || cat.includes("Operations") ? "hub"
  : cat.includes("ERP") || cat.includes("Industry") ? "grid" : "flow";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link href={`/news/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-30px_rgba(13,27,42,.42)]">
      <div className="relative h-[200px] bg-ink">
        <CategoryVisual variant={variantFor(article.category)} className="absolute inset-0 h-full w-full" />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {article.category}
        </div>
        <h3 className="font-serif text-[22px] font-normal leading-snug tracking-tight">{article.title}</h3>
        <p className="mt-3 text-[14.5px] leading-relaxed text-ink/65">{article.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full border border-line-soft px-2.5 py-1 font-mono text-[10px] tracking-wide text-ink/50">#{t}</span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-line-soft pt-4 font-mono text-xs text-ink/55">
          <span>{formatDate(article.publishedAt)} · {article.readingTime}</span>
          <span className="flex items-center gap-2 text-accent transition-[gap] group-hover:gap-3">Read more <span aria-hidden>→</span></span>
        </div>
      </div>
    </Link>
  );
}
