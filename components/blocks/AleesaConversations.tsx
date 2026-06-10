/* eslint-disable no-restricted-syntax --
 * Reusable conversations block with custom typographic scale owned by
 * AleesaConversations.module.css — uses raw h2/h3/p to keep styling local. */
'use client';

import { useMemo, useRef, useState, useEffect } from 'react';
import styles from './AleesaConversations.module.css';

type Conv = {
  sector: string;
  dur: string;
  title: string;
  sum: string;
  tags: string[];
  audio: string;
};

const CONVERSATIONS: Conv[] = [
  {
    sector: 'Dental clinic',
    dur: '0:57',
    title: 'A new patient books their first visit',
    sum: 'After-hours caller wants an appointment. Aleesa greets them, finds a time, and captures their details.',
    tags: ['New patient', 'Appointment booked', 'After hours'],
    audio: '/East St Kilda Dental Booking_1.mp3',
  },
  {
    sector: 'Dental clinic',
    dur: '1:10',
    title: 'Rescheduling, handled calmly',
    sum: 'A caller needs to move an existing booking. Aleesa confirms, offers options, and logs the change.',
    tags: ['Existing patient', 'Reschedule', 'Confirmed'],
    audio: '/East St Kilda Dental Booking _2.mp3',
  },
  {
    sector: 'Auto mechanic',
    dur: '0:56',
    title: 'A service enquiry becomes a booked job',
    sum: 'A driver calls about a service. Aleesa takes the vehicle details and books them in for a slot.',
    tags: ['Service enquiry', 'Vehicle logged', 'Job booked'],
    audio: '/Mechanics.mp3',
  },
];

const BARS = 34;

const fmt = (s: number) => {
  const v = Math.max(0, Math.floor(s || 0));
  return `${Math.floor(v / 60)}:${String(v % 60).padStart(2, '0')}`;
};

const barH = (seed: number, b: number) => {
  const x = Math.sin((seed + 1) * 12.9898 + (b + 1) * 78.233) * 43758.5453;
  const f = x - Math.floor(x);
  return Math.round(26 + f * 64);
};

type Props = {
  eyebrow?: string;
  heading?: React.ReactNode;
  intro?: React.ReactNode;
  footerLine?: string;
  className?: string;
};

export function AleesaConversations({
  eyebrow = 'Hear it work',
  heading = (
    <>
      Real calls, <em>answered and captured.</em>
    </>
  ),
  intro = (
    <>
      <p>
        The clearest way to understand Aleesa.ai is to listen. These are sample conversations from
        businesses that put Aleesa.ai on the front desk — every caller greeted, understood, and
        turned into a structured lead with an owner and a next step.
      </p>
      <p className={styles.note}>
        <b>Note ·</b> illustrative sample calls, shared with permission. No customer details are
        stored in this page.
      </p>
    </>
  ),
  footerLine = 'Every call above ended the same way — captured in the CRM, never lost to a missed ring.',
  className,
}: Props) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(' ')} id="conversations">
      <div className={styles.wrap}>
        <div className={styles.intro}>
          <div>
            <div className={styles.eyebrow}>{eyebrow}</div>
            <h2 className={styles.title}>{heading}</h2>
          </div>
          <div className={styles.copy}>{intro}</div>
        </div>

        <div className={styles.grid}>
          {CONVERSATIONS.map((c, i) => (
            <ConvCard key={c.audio} conv={c} seed={i} />
          ))}
        </div>

        <div className={styles.foot}>
          <span className={styles.line}>{footerLine}</span>
        </div>
      </div>
    </section>
  );
}

function ConvCard({ conv, seed }: { conv: Conv; seed: number }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const waveRef = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState<number | null>(null);
  const heights = useMemo(
    () => Array.from({ length: BARS }, (_, b) => barH(seed, b)),
    [seed],
  );

  const progress = dur ? cur / dur : 0;
  const lit = Math.round(progress * BARS);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onPlay = () => {
      document.querySelectorAll<HTMLAudioElement>('audio[data-aleesa]').forEach((other) => {
        if (other !== a) other.pause();
      });
      setPlaying(true);
    };
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      setCur(0);
    };
    const onTime = () => setCur(a.currentTime);
    const onMeta = () => isFinite(a.duration) && setDur(a.duration);
    a.addEventListener('play', onPlay);
    a.addEventListener('pause', onPause);
    a.addEventListener('ended', onEnded);
    a.addEventListener('timeupdate', onTime);
    a.addEventListener('loadedmetadata', onMeta);
    return () => {
      a.removeEventListener('play', onPlay);
      a.removeEventListener('pause', onPause);
      a.removeEventListener('ended', onEnded);
      a.removeEventListener('timeupdate', onTime);
      a.removeEventListener('loadedmetadata', onMeta);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      void a.play();
    } else {
      a.pause();
    }
  };

  const seekFromClientX = (clientX: number) => {
    const a = audioRef.current;
    const wave = waveRef.current;
    if (!a || !wave || !a.duration) return;
    const r = wave.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
    a.currentTime = p * a.duration;
  };

  const onKey = (e: React.KeyboardEvent) => {
    const a = audioRef.current;
    if (!a) return;
    if (e.key === 'ArrowRight' && a.duration) {
      a.currentTime = Math.min(a.duration, a.currentTime + 3);
      e.preventDefault();
    } else if (e.key === 'ArrowLeft' && a.duration) {
      a.currentTime = Math.max(0, a.currentTime - 3);
      e.preventDefault();
    } else if (e.key === ' ' || e.key === 'Enter') {
      toggle();
      e.preventDefault();
    }
  };

  return (
    <div className={[styles.card, playing && styles.cardPlaying].filter(Boolean).join(' ')}>
      <div className={styles.top}>
        <span className={styles.sector}>
          <span className={styles.dot} />
          {conv.sector}
        </span>
        <span className={styles.dur}>{dur ? fmt(dur) : conv.dur}</span>
      </div>
      <h3 className={styles.cardTitle}>{conv.title}</h3>
      <p className={styles.sum}>{conv.sum}</p>
      <div className={styles.tags}>
        {conv.tags.map((t) => (
          <span key={t} className={styles.tag}>
            {t}
          </span>
        ))}
      </div>
      <div className={styles.player}>
        <button
          type="button"
          className={styles.play}
          onClick={toggle}
          aria-label={`${playing ? 'Pause' : 'Play'} sample call: ${conv.title}`}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 5h3.2v14H7zM13.8 5H17v14h-3.2z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 5.5v13l11-6.5z" />
            </svg>
          )}
        </button>
        <div className={styles.track}>
          <div
            ref={waveRef}
            className={styles.wave}
            role="slider"
            aria-label="Seek"
            tabIndex={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress * 100)}
            onClick={(e) => seekFromClientX(e.clientX)}
            onKeyDown={onKey}
          >
            {heights.map((h, b) => (
              <span
                key={b}
                className={[styles.bar, b < lit && styles.barOn].filter(Boolean).join(' ')}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className={styles.time}>
            <span>{fmt(cur)}</span>
            <span>{dur ? fmt(dur) : conv.dur}</span>
          </div>
        </div>
      </div>
      <audio ref={audioRef} data-aleesa preload="none" src={conv.audio} />
    </div>
  );
}
