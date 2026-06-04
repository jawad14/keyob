// components/NewsFeed.tsx
"use client";
import { useMemo, useState } from "react";
import type { NewsArticle } from "@/lib/types";
import { NewsCard } from "./NewsCard";
import { NewsCategoryFilter } from "./NewsCategoryFilter";
import { AEOAnswerBlock } from "./AEOAnswerBlock";

const ANSWERS = [
  { question: "What is AI workflow automation?", answer: "AI workflow automation is the use of AI to run the repetitive, rule-based steps inside a business process — routing, updates, follow-ups, document checks — and to handle lightly interpretive steps like classifying a request, so work flows end to end with less manual effort." },
  { question: "What is operational intelligence?", answer: "Operational intelligence is the ability to understand and act on what is happening in a business right now, using live data from the systems that run operations — rather than relying on reports assembled after the fact." },
  { question: "What is business process automation for SMEs?", answer: "For small and growing businesses, business process automation means letting software perform routine, repeatable tasks consistently — reducing manual effort and errors, and creating a live record of each step that gives leaders real operational visibility." },
];

const PAGE = 6;

export function NewsFeed({ articles }: { articles: NewsArticle[] }) {
  const [active, setActive] = useState("All");
  const [shown, setShown] = useState(PAGE);

  const filtered = useMemo(
    () => (active === "All" ? articles : articles.filter((a) => a.category === active)),
    [active, articles]
  );

  const visible = filtered.slice(0, shown);

  return (
    <>
      <NewsCategoryFilter active={active} onChange={(c) => { setActive(c); setShown(PAGE); }} />
      <section id="feed" className="mx-auto max-w-[1240px] px-8 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((a, i) => (
            <div key={a.slug} className="contents">
              <NewsCard article={a} />
              {/* AEO answer block after every 3 cards */}
              {(i + 1) % 3 === 0 && ANSWERS[Math.floor(i / 3) % ANSWERS.length] && (
                <div className="md:col-span-2 lg:col-span-3">
                  <AEOAnswerBlock {...ANSWERS[Math.floor(i / 3) % ANSWERS.length]} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Crawlable load-more: real links exist server-side; this only expands the view */}
        {shown < filtered.length && (
          <div className="mt-12 text-center">
            <button onClick={() => setShown((s) => s + PAGE)} className="btn-ghost-dark">
              Load more articles
            </button>
          </div>
        )}

        {/* Always-rendered crawlable index so every article has a discoverable link */}
        <nav aria-label="All articles" className="sr-only">
          <ul>
            {articles.map((a) => (
              <li key={a.slug}><a href={`/news/${a.slug}`}>{a.title}</a></li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}
