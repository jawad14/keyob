// components/NewsletterBlock.tsx
export function NewsletterBlock() {
  return (
    <section className="bg-mid text-paper">
      <div className="mx-auto max-w-[1240px] px-8 py-20 text-center">
        <h2 className="mx-auto max-w-[20ch] font-serif text-[clamp(28px,4vw,46px)] font-light leading-tight tracking-tight">
          Get practical AI operations insights from <em className="italic text-accent-soft">KEYOB</em>
        </h2>
        <p className="mx-auto mt-4 max-w-[48ch] text-paper/75">
          Receive short updates on workflow automation, ERP systems, AI implementation, and
          business process improvement.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
          <label className="sr-only" htmlFor="news-email">Email address</label>
          <input id="news-email" type="email" required placeholder="you@company.com"
            className="flex-1 rounded-full border border-paper/25 bg-paper/10 px-5 py-3.5 text-paper placeholder:text-paper/50 focus:border-accent-soft focus:outline-none" />
          <button type="submit" className="btn-primary whitespace-nowrap">Subscribe to updates</button>
        </form>
      </div>
    </section>
  );
}
