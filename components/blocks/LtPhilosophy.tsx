import { ltPhilosophy } from '@/config/keyob-leadership';

export function LtPhilosophy() {
  return (
    <section className="lt-philo">
      <div className="wrap">
        <div className="lt-philo-head">
          <div className="lt-eyebrow">Leadership philosophy</div>
          <h2 className="lt-h2">
            How our leadership shows up in <em>client work.</em>
          </h2>
        </div>
        <div className="lt-pgrid">
          {ltPhilosophy.map((p) => (
            <div key={p.n} className="lt-pcard">
              <div className="lt-pcard-n">{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
