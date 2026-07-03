/* eslint-disable no-restricted-syntax --
 * Testimonials block with a custom typographic scale owned by
 * Testimonials.module.css — uses raw h2/p/blockquote to keep styling local. */
'use client';

import { useRef, useState } from 'react';

import styles from './Testimonials.module.css';

type TextTestimonial = {
  quote: string;
  name: string;
  role: string;
  initial: string;
  tone: 'dark' | 'light';
};

const FEATURED = {
  src: '/testimonials/rm-testimonial.mp4',
  poster: '/testimonials/rm-testimonial-poster.jpg',
  tag: 'Video · Coaching & education',
  duration: '2:18',
  quote:
    'The systems KEYOB built didn’t just add software — they gave us back control of how the whole institute runs.',
  name: 'Rashid Mubashir',
  role: 'CEO @ The International Coaching Institute',
  initial: 'R',
};

const TEXT_TESTIMONIALS: TextTestimonial[] = [
  {
    quote:
      'Calls used to slip through after hours. Now every enquiry lands in one place with a clear next step — nothing gets lost.',
    name: 'Practice Manager',
    role: 'Dental clinic · Melbourne',
    initial: 'P',
    tone: 'light',
  },
  {
    quote:
      'KEYOB connected the systems we already ran and finally gave us one live picture of the business. Decisions got faster overnight.',
    name: 'Operations Lead',
    role: 'Distribution & logistics network',
    initial: 'O',
    tone: 'dark',
  },
  {
    quote:
      'We handle far more customer requests now without adding people — and the team finally trusts the numbers.',
    name: 'Service Lead',
    role: 'Auto service network',
    initial: 'S',
    tone: 'light',
  },
];

export function Testimonials() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.controls = true;
    setStarted(true);
    void v.play();
  };

  const reset = () => {
    const v = videoRef.current;
    if (v) v.controls = false;
    setStarted(false);
  };

  const handleEnded = () => {
    const v = videoRef.current;
    // Only reset on a genuine end — a mid-video seek can misfire `ended`
    // before the duration is fully known.
    if (v && Number.isFinite(v.duration) && v.currentTime < v.duration - 1) return;
    reset();
  };

  return (
    <section className={styles.section} id="testimonials" aria-labelledby="testimonials-h">
      <div className={styles.wrap}>
        <div className={styles.eyebrow}>In their words</div>
        <div className={styles.head}>
          <h2 className={styles.title} id="testimonials-h">
            The systems are ours. <em>The results are theirs.</em>
          </h2>
          <p className={styles.sub}>
            Hear directly from the business owners and teams who now run on the systems we built — in
            their own voice, on their own terms.
          </p>
        </div>

        <div className={styles.grid}>
          {/* FEATURED VIDEO — single real testimonial */}
          <div className={styles.videocol}>
            <figure className={`${styles.video} ${started ? styles.playing : ''}`}>
              <video
                ref={videoRef}
                className={styles.videoEl}
                src={FEATURED.src}
                poster={FEATURED.poster}
                preload="auto"
                playsInline
                onPlay={() => setStarted(true)}
                onEnded={handleEnded}
              />
              <div className={styles.scrim} aria-hidden="true" />
              <span className={styles.dur}>{FEATURED.duration}</span>
              <button
                type="button"
                className={styles.play}
                onClick={play}
                aria-label="Play video testimonial"
              >
                <span className={styles.ring} aria-hidden="true" />
              </button>

              <figcaption className={styles.vmeta}>
                <span className={styles.tag}>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>{FEATURED.tag}</span>
                </span>
                <blockquote className={styles.quote}>{FEATURED.quote}</blockquote>
                <div className={styles.who}>
                  <span className={styles.av}>{FEATURED.initial}</span>
                  <span>
                    <span className={styles.nm}>{FEATURED.name}</span>
                    <br />
                    <span className={styles.rl}>{FEATURED.role}</span>
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>

          {/* RIGHT: written testimonials */}
          <div className={styles.side}>
            {TEXT_TESTIMONIALS.map((t) => (
              <article key={t.name} className={`${styles.textcard} ${styles[t.tone]}`}>
                <div className={styles.qm} aria-hidden="true">
                  &ldquo;
                </div>
                <blockquote className={styles.textquote}>{t.quote}</blockquote>
                <div className={styles.twho}>
                  <span className={styles.tav}>{t.initial}</span>
                  <span>
                    <span className={styles.tnm}>{t.name}</span>
                    <br />
                    <span className={styles.trl}>{t.role}</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.foot}>
          <span className={styles.note}>
            <b>Real clients, real systems.</b> Testimonials shared with permission. Names shown by
            role to respect client privacy.
          </span>
          <a href="#contact" className={styles.cta}>
            Talk to the team behind these results <span className={styles.arr}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
