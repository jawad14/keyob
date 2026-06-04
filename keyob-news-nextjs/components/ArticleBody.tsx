// components/ArticleBody.tsx
import type { ContentBlock } from "@/lib/types";
import { KeyTakeawayBox } from "./KeyTakeawayBox";

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-keyob">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "heading":
            return b.level === 2
              ? <h2 key={i} className="mt-12 mb-4 font-serif text-[clamp(26px,3.4vw,38px)] font-normal leading-tight tracking-tight">{b.text}</h2>
              : <h3 key={i} className="mt-8 mb-3 font-serif text-[22px] font-normal leading-snug">{b.text}</h3>;
          case "paragraph":
            return <p key={i} className="mb-5 text-[18px] leading-[1.75] text-ink/78">{b.text}</p>;
          case "list":
            return (
              <ul key={i} className="mb-6 space-y-3">
                {b.items.map((it, j) => (
                  <li key={j} className="relative pl-7 text-[17px] leading-relaxed text-ink/76">
                    <span className="absolute left-0 top-[11px] h-2 w-2 rotate-45 rounded-[2px] border-[1.5px] border-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote key={i} className="my-10 border-l-2 border-accent pl-8">
                <p className="font-serif text-[clamp(22px,3vw,30px)] font-light italic leading-snug text-ink">{b.text}</p>
                {b.cite && <cite className="mt-3 block font-mono text-xs not-italic tracking-wide text-ink/55">{b.cite}</cite>}
              </blockquote>
            );
          case "takeaway":
            return <KeyTakeawayBox key={i} text={b.text} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
