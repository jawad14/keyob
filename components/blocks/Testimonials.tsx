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
  tag: 'Video · Client testimonial',
  duration: '2:18',
  quote: 'The systems KEYOB built didn’t just add software — they gave us back control of how the business runs.',
  name: 'Client testimonial',
  role: 'Business owner · KEYOB client',
  initial: 'K',
};

const TEXT_TESTIMONIALS: TextTestimonial[] = [
  {
    quote:
      'KEYOB connected the systems we already ran and finally gave us one live picture of the business. Decisions got faster overnight.',
    name: 'Founder',
    role: 'Coaching & education group',
    initial: 'S',
    tone: 'dark',
  },
  {
    quote:
      'Calls used to slip through after hours. Now every enquiry lands in one place with a clear next step — nothing gets lost.',
    name: 'Practice Manager',
    role: 'Dental clinic · Melbourne',
    initial: 'P',
    tone: 'light',
  },
];

export function Testimonials() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.controls = true;
    void v.play();
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
          <figure className={`${styles.videocard} ${playing ? styles.playing : ''}`}>
            <video
              ref={videoRef}
              className={styles.video}
              src={FEATURED.src}
              poster={FEATURED.poster}
              preload="none"
              playsInline
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
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
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 5.5v13l11-6.5z" />
              </svg>
            </button>

            <figcaption className={styles.vmeta}>
              <span className={styles.tag}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                {FEATURED.tag}
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
