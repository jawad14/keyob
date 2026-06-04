import { aboutPrinciples } from '@/config/keyob-about';

export function AuPrinciples() {
  return (
    <section className="au-principles">
      <div className="wrap">
        <div className="au-principles-head">
          <div className="au-eyebrow">How we work</div>
          <h2 className="au-h2">
            The principles behind <em>how we work.</em>
          </h2>
        </div>
        <div className="au-pgrid">
          {aboutPrinciples.map((p) => (
            <div key={p.n} className="au-pcard">
              <div className="au-pcard-n">Principle {p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
