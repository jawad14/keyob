// components/FeaturedNewsCard.tsx
import Link from "next/link";
import type { NewsArticle } from "@/lib/types";
import { CategoryVisual } from "./CategoryVisual";
import { formatDate } from "@/lib/format";

export function FeaturedNewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link href={`/news/${article.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-line bg-paper transition hover:-translate-y-1.5 hover:shadow-[0_26px_56px_-30px_rgba(13,27,42,.42)] md:grid-cols-2">
      <div className="relative min-h-[260px] bg-ink">
        <CategoryVisual variant="hub" className="absolute inset-0 h-full w-full" />
      </div>
      <div className="flex flex-col justify-center p-10">
        <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Featured · {article.category}
        </div>
        <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight md:text-[34px]">
          {article.title}
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/65">{article.summary}</p>
        <div className="mt-6 flex items-center justify-between border-t border-line-soft pt-5 font-mono text-xs text-ink/55">
          <span>{formatDate(article.publishedAt)} · {article.readingTime}</span>
          <span className="flex items-center gap-2 text-accent transition-[gap] group-hover:gap-3">Read the story <span aria-hidden>→</span></span>
        </div>
      </div>
    </Link>
  );
}
