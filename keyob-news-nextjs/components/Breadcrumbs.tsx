// components/Breadcrumbs.tsx
import Link from "next/link";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-xs tracking-wide text-ink/55">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i < items.length - 1 ? (
              <Link href={c.href} className="text-accent hover:underline">{c.name}</Link>
            ) : (
              <span aria-current="page">{c.name}</span>
            )}
            {i < items.length - 1 && <span className="opacity-50">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
