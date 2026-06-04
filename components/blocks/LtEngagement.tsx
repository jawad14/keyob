import { ltFlow } from '@/config/keyob-leadership';

export function LtEngagement() {
  return (
    <section className="lt-engage">
      <div className="lt-engage-mesh" aria-hidden="true" />
      <div className="wrap">
        <div className="lt-engage-head">
          <div className="lt-eyebrow lt-eyebrow--cyan">Behind every engagement</div>
          <h2 className="lt-h2 lt-h2--on-dark">
            Behind every engagement is a team <em>built around the client.</em>
          </h2>
        </div>
        <div className="lt-flow">
          {ltFlow.map((f, i) => (
            <div key={f.n} className="lt-fstep">
              <div className="lt-fn">{f.n}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              {i < ltFlow.length - 1 ? (
                <span className="lt-arrow" aria-hidden="true">
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
