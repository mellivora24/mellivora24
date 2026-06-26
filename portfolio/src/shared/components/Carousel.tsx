import React, { useCallback, useEffect, useRef, useState } from 'react';

interface CarouselProps {
  images: string[];
  alt?: string;
  autoPlayInterval?: number;
}

const styles: Record<string, React.CSSProperties> = {
  carousel: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    borderRadius: 'var(--radius)',
    overflow: 'hidden',
    background: 'var(--color-bg-soft)',
  },
  track: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  slide: {
    position: 'absolute',
    inset: 0,
    opacity: 0,
    pointerEvents: 'none',
    transition: 'opacity 0.4s ease',
  },
  active: {
    opacity: 1,
    pointerEvents: 'auto',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  arrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36,
    borderRadius: '50%',
    border: '1px solid var(--color-border)',
    background: 'rgba(0,0,0,.55)',
    color: 'var(--color-text)',
    cursor: 'pointer',
    backdropFilter: 'blur(6px)',
  },
  arrowLeft: {
    left: 12,
  },
  arrowRight: {
    right: 12,
  },
  dots: {
    position: 'absolute',
    bottom: 12,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: 6,
    zIndex: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    border: 'none',
    background: 'rgba(255,255,255,.3)',
    cursor: 'pointer',
    padding: 0,
    transition: 'all .2s ease',
  },
  dotActive: {
    background: 'var(--color-primary)',
    transform: 'scale(1.3)',
  },
};

export const Carousel: React.FC<CarouselProps> = ({
  images,
  alt = '',
  autoPlayInterval = 4000,
}) => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoverArrow, setHoverArrow] = useState<'left' | 'right' | null>(null);
  const [hoverDot, setHoverDot] = useState<number | null>(null);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;

      setIsTransitioning(true);
      setCurrent((index + images.length) % images.length);

      setTimeout(() => setIsTransitioning(false), 400);
    },
    [current, images.length, isTransitioning]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (images.length <= 1) return;

    timerRef.current = setTimeout(next, autoPlayInterval);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, next, autoPlayInterval, images.length]);

  if (!images.length) return null;

  return (
    <div style={styles.carousel}>
      <div style={styles.track}>
        {images.map((src, i) => (
          <div
            key={src}
            style={{
              ...styles.slide,
              ...(i === current ? styles.active : {}),
            }}
          >
            <img
              src={src}
              alt={`${alt} ${i + 1}`}
              style={styles.image}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            aria-label="Previous"
            onClick={prev}
            onMouseEnter={() => setHoverArrow('left')}
            onMouseLeave={() => setHoverArrow(null)}
            style={{
              ...styles.arrow,
              ...styles.arrowLeft,
              ...(hoverArrow === 'left'
                ? {
                    background: 'rgba(0,0,0,.8)',
                    borderColor: 'var(--color-primary)',
                    boxShadow: 'var(--shadow-glow)',
                  }
                : {}),
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            aria-label="Next"
            onClick={next}
            onMouseEnter={() => setHoverArrow('right')}
            onMouseLeave={() => setHoverArrow(null)}
            style={{
              ...styles.arrow,
              ...styles.arrowRight,
              ...(hoverArrow === 'right'
                ? {
                    background: 'rgba(0,0,0,.8)',
                    borderColor: 'var(--color-primary)',
                    boxShadow: 'var(--shadow-glow)',
                  }
                : {}),
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div style={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                onMouseEnter={() => setHoverDot(i)}
                onMouseLeave={() => setHoverDot(null)}
                style={{
                  ...styles.dot,
                  ...(hoverDot === i
                    ? { background: 'rgba(255,255,255,.6)' }
                    : {}),
                  ...(i === current ? styles.dotActive : {}),
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
