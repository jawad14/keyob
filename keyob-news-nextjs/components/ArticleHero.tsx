// components/ArticleHero.tsx
import type { NewsArticle } from "@/lib/types";
import { Breadcrumbs } from "./Breadcrumbs";
import { formatDate } from "@/lib/format";

export function ArticleHero({ article }: { article: NewsArticle }) {
  return (
    <header className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_70%_at_88%_12%,rgba(29,155,209,.26),transparent_55%),radial-gradient(90%_90%_at_5%_95%,rgba(27,58,91,.65),transparent_55%)]" />
      <div className="relative mx-auto max-w-[860px] px-8 pt-36 pb-20">
        <Breadcrumbs items={[
          { name: "Home", href: "https://keyob.com.au/" },
          { name: "News", href: "/news" },
          { name: article.title, href: `/news/${article.slug}` },
        ]} />
        <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-soft">
          <span>{article.category}</span><span className="opacity-40">·</span>
          <span>{formatDate(article.publishedAt)}</span><span className="opacity-40">·</span>
          <span>{article.readingTime}</span>
        </div>
        <h1 className="mt-5 font-serif text-[clamp(32px,5vw,60px)] font-light leading-[1.05] tracking-tight">{article.title}</h1>
        <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-paper/78">{article.summary}</p>
        <p className="mt-7 font-mono text-xs tracking-wide text-paper/55">By {article.author}</p>
      </div>
    </header>
  );
}
