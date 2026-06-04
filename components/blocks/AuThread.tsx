import { aboutThread } from '@/config/keyob-about';

export function AuThread() {
  return (
    <div className="au-thread" aria-hidden="true">
      <div className="wrap au-thread-in">
        {aboutThread.map((word, i) => (
          <span key={word} className={i === 0 ? 'au-thread-word is-on' : 'au-thread-word'}>
            {word}
            {i < aboutThread.length - 1 ? <i className="au-thread-sep">→</i> : null}
          </span>
        ))}
      </div>
    </div>
  );
}
