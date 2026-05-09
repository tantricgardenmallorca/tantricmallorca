import { useCallback, useRef, useState } from 'react';
import { useTranslation } from '../i18n/useTranslation.js';

export default function Gallery({ images, name, variant = 'card' }) {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const total = images.length;
  const trackRef = useRef(null);
  const touchStartX = useRef(null);

  const go = useCallback(
    (i) => {
      if (total === 0) return;
      const nextIndex = ((i % total) + total) % total;
      setIndex(nextIndex);
    },
    [total],
  );

  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  function onKeyDown(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  }

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx > 0) prev();
      else next();
    }
    touchStartX.current = null;
  }

  if (total === 0) return null;

  return (
    <div
      className={`gallery gallery--${variant}`}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={name}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="gallery-frame">
        <div
          ref={trackRef}
          className="gallery-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div className="gallery-slide" key={src} aria-hidden={i !== index}>
              <img
                src={src}
                alt={t('masajistas.imageAlt', { n: i + 1, name })}
                loading={i === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              className="gallery-nav gallery-nav--prev"
              onClick={prev}
              aria-label={t('masajistas.prev')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M12.5 5l-5 5 5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="gallery-nav gallery-nav--next"
              onClick={next}
              aria-label={t('masajistas.next')}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M7.5 5l5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}

        {total > 1 && (
          <div className="gallery-counter" aria-live="polite">
            {index + 1} / {total}
          </div>
        )}
      </div>

      {total > 1 && (
        <div className="gallery-dots" role="tablist">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={t('masajistas.goTo', { n: i + 1 })}
              className={`gallery-dot${i === index ? ' gallery-dot--active' : ''}`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
