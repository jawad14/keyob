'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { Section } from '@/components/ui/layout';
import { H2, Text } from '@/components/ui/typography';
import { outcomes } from '@/config/keyob-data';

const AUTOPLAY_DELAY = 7000;

export function OutcomesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    const onPlay = () => setIsPlaying(true);
    const onStop = () => setIsPlaying(false);
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('autoplay:play', onPlay);
    emblaApi.on('autoplay:stop', onStop);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('autoplay:play', onPlay);
      emblaApi.off('autoplay:stop', onStop);
    };
  }, [emblaApi]);

  return (
    <Section spacing="none" as="section" className="cases" id="outcomes">
      <div className="wrap">
        <H2>
          Client <em>success stories.</em>
        </H2>
        <Text
          variant="lead"
          className="!text-[17px] !leading-[1.6] max-w-[60ch] !mt-[-12px] !mb-11"
        >
          Behind every system we build is a business problem that needed to become clearer, faster,
          and easier to manage. These stories show how better software, connected data, and practical
          automation create measurable operational impact.
        </Text>

        <div className="case-slider">
          <div className="case-viewport" ref={emblaRef}>
            <div className="case-track">
              {outcomes.map((o, idx) => (
                <div className="case-slide" key={idx}>
                  <Link
                    href={`/stories/${o.slug}`}
                    className="case-card case-card--featured"
                  >
                    <div className="case-thumb">
                      <Image
                        src={o.image}
                        alt={o.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="case-photo"
                      />
                      <span className="label">{o.tag}</span>
                      <span className="badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M7 17L17 7M9 7h8v8" />
                        </svg>
                      </span>
                    </div>
                    <div className="case-body">
                      <div className="industry">{o.industry}</div>
                      {o.storyLong && o.storyLong.length > 0 ? (
                        o.storyLong.map((p, i) => (
                          <Text key={i} as="p" className="story">{p}</Text>
                        ))
                      ) : (
                        <Text as="p" className="story">{o.story}</Text>
                      )}
                      <span className="case-cta">
                        View story
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="case-controls">
            <button
              type="button"
              className="case-arrow"
              aria-label="Previous story"
              onClick={scrollPrev}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M11 5l-7 7 7 7" />
              </svg>
            </button>

            <div className="case-dots" role="tablist" aria-label="Story slides">
              {outcomes.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`case-dot${idx === selectedIndex ? ' is-active' : ''}`}
                  aria-label={`Go to story ${idx + 1}`}
                  aria-selected={idx === selectedIndex}
                  role="tab"
                  onClick={() => scrollTo(idx)}
                >
                  {idx === selectedIndex && (
                    <span
                      key={selectedIndex}
                      className="case-dot__fill"
                      style={{
                        animationDuration: `${AUTOPLAY_DELAY}ms`,
                        animationPlayState: isPlaying ? 'running' : 'paused',
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="case-arrow"
              aria-label="Next story"
              onClick={scrollNext}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
