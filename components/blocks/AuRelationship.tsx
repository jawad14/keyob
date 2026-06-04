import { aboutRelationshipLayers } from '@/config/keyob-about';

export function AuRelationship() {
  return (
    <section className="au-rel">
      <div className="wrap">
        <div className="au-rel-head">
          <div className="au-eyebrow">The relationship model</div>
          <h2 className="au-h2">
            Built for long-term partnerships, <em>not one-off transactions.</em>
          </h2>
          <p className="au-lead">
            Modern business systems are never truly finished. A website evolves, a CRM needs
            refinement, an ERP grows with operations, dashboards improve as leadership asks better
            questions, and AI workflows expand as teams gain confidence. We stay close and keep
            helping clients improve as their needs change.
          </p>
        </div>
        <div className="au-rel-layers">
          {aboutRelationshipLayers.map((l) => (
            <div key={l.n} className="au-rlayer">
              <div className="au-rlayer-n">{l.n}</div>
              <h3>{l.title}</h3>
              <p>{l.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
