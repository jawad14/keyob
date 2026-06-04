// components/AEOAnswerBlock.tsx
// Question-first block engineered for answer-engine extraction.
export function AEOAnswerBlock({ question, answer }: { question: string; answer: string }) {
  return (
    <aside className="rounded-2xl border border-accent/25 bg-accent/5 p-7" itemScope itemType="https://schema.org/Question">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Quick answer</p>
      <h3 className="mt-2 font-serif text-[22px] font-normal leading-snug" itemProp="name">{question}</h3>
      <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
        <p className="mt-3 text-[15px] leading-relaxed text-ink/75" itemProp="text">{answer}</p>
      </div>
    </aside>
  );
}
