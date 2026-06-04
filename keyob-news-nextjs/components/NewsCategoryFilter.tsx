// components/NewsCategoryFilter.tsx
"use client";
import { categories } from "@/data/articles";

export function NewsCategoryFilter({
  active, onChange,
}: { active: string; onChange: (c: string) => void }) {
  return (
    <div className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-2 px-8 py-5" role="tablist" aria-label="Filter news by category">
        {categories.map((c) => {
          const on = active === c;
          return (
            <button key={c} role="tab" aria-selected={on} onClick={() => onChange(c)}
              className={`rounded-full border px-4 py-2 font-mono text-xs tracking-wide transition
                ${on ? "border-ink bg-ink text-paper" : "border-line text-ink/55 hover:border-ink hover:text-ink"}`}>
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
}
