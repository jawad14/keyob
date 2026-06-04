// components/KeyTakeawayBox.tsx
// Compact, extraction-friendly summary for AI answer engines.
export function KeyTakeawayBox({ text }: { text: string }) {
  return (
    <aside className="my-10 rounded-2xl border border-accent/25 bg-accent/5 p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Key takeaway</p>
      <p className="mt-3 text-[17px] leading-relaxed text-ink/80">{text}</p>
    </aside>
  );
}
