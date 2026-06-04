// components/NewsHero.tsx
import Link from "next/link";

export function NewsHero() {
  return (
    <header className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_80%_at_85%_15%,rgba(29,155,209,.28),transparent_55%),radial-gradient(90%_90%_at_8%_95%,rgba(27,58,91,.7),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1240px] px-8 pt-36 pb-24">
        <p className="mb-7 font-mono text-xs uppercase tracking-[0.25em] text-accent-soft">
          KEYOB · News &amp; Perspectives
        </p>
        <h1 className="max-w-[16ch] font-serif text-[clamp(40px,7vw,84px)] font-light leading-[1.0] tracking-tight">
          News &amp; Perspectives on <em className="italic text-accent-soft">AI Operations</em>
        </h1>
        <p className="mt-7 max-w-[58ch] text-lg leading-relaxed text-paper/75">
          Practical updates, ideas, and field notes on AI workflow automation, ERP systems,
          business process automation, operational intelligence, and the future of smarter
          business operations.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="#feed" className="btn-primary">Explore latest updates <span aria-hidden>→</span></Link>
          <Link href="https://keyob.com.au/#contact" className="btn-ghost">Book an operational clarity session</Link>
        </div>
      </div>
    </header>
  );
}
