// components/RelatedSolutions.tsx
import Link from "next/link";

// Map solution labels to their destinations on the main site.
const SOLUTION_LINKS: Record<string, string> = {
  "AI Workflow Automation": "https://keyob.com.au/#capabilities",
  "Custom ERP Systems": "https://keyob.com.au/#capabilities",
  "Business Systems Integration": "https://keyob.com.au/#capabilities",
  "Business Process Automation": "https://keyob.com.au/#capabilities",
  "Operational Dashboards": "https://keyob.com.au/#capabilities",
};

export function RelatedSolutions({ solutions }: { solutions: string[] }) {
  return (
    <section className="rounded-2xl border border-line bg-paper-2 p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Related solutions</p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {solutions.map((s) => (
          <li key={s}>
            <Link href={SOLUTION_LINKS[s] ?? "https://keyob.com.au/#capabilities"}
              className="flex items-center justify-between rounded-xl border border-line bg-paper px-5 py-4 font-medium transition hover:border-accent">
              <span>{s}</span><span aria-hidden className="text-accent">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
