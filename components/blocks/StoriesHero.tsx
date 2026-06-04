import Link from 'next/link';

export function StoriesHero() {
  return (
    <section className="phead">
      <div className="phead-mesh" aria-hidden="true" />
      <div className="wrap phead-inner">
        <div className="crumb">
          <Link href="/">Home</Link>
          <span>/</span>
          Client stories
        </div>
        <h1>
          The work, told <em>honestly.</em>
        </h1>
        <p>
          Behind every system we build is a real business problem that needed to become clearer,
          faster, and easier to run. These are the operational stories — fragmented tools made
          whole, manual work automated, decisions made on live data instead of last week&apos;s
          reports.
        </p>
      </div>
    </section>
  );
}
