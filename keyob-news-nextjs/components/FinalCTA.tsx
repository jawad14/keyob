// components/FinalCTA.tsx
import Link from "next/link";
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_100%_at_80%_100%,rgba(29,155,209,.32),transparent_55%),radial-gradient(70%_90%_at_5%_10%,rgba(27,58,91,.6),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1240px] px-8 py-28 text-center">
        <h2 className="mx-auto max-w-[18ch] font-serif text-[clamp(32px,5vw,62px)] font-light leading-tight tracking-tight">
          Want to understand where AI can <em className="italic text-accent-soft">improve your operations?</em>
        </h2>
        <p className="mx-auto mt-5 max-w-[50ch] text-paper/75">
          KEYOB helps growing businesses identify workflow gaps, automation opportunities, and the
          systems needed to scale with clarity.
        </p>
        <Link href="https://keyob.com.au/#contact" className="btn-primary mt-9 inline-flex">
          Book an operational clarity session <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
