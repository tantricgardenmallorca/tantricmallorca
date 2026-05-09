import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from '../i18n/useTranslation.js';

export default function Lightbox({ images, index, onClose, onChange }) {
  const { t } = useTranslation();
  const total = images.length;
  const touchStartX = useRef(null);

  const goPrev = useCallback(() => {
    onChange(((index - 1) % total + total) % total);
  }, [index, total, onChange]);

  const goNext = useCallback(() => {
    onChange((index + 1) % total);
  }, [index, total, onChange]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    }
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, goPrev, goNext]);

  function onBackdropClick(e) {
    if (e.target === e.currentTarget) onClose();
  }

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  }

  const node = (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={t('lightbox.aria')}
      onClick={onBackdropClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label={t('lightbox.close')}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
          <path
            d="M5 5l12 12M17 5L5 17"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {total > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-nav--prev"
          onClick={goPrev}
          aria-label={t('lightbox.prev')}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
            <path
              d="M16 5l-8 8 8 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      <figure className="lightbox-figure">
        <img src={images[index]} alt={t('lightbox.imageAlt', { n: index + 1 })} />
      </figure>

      {total > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-nav--next"
          onClick={goNext}
          aria-label={t('lightbox.next')}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
            <path
              d="M10 5l8 8-8 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {total > 1 && (
        <div className="lightbox-counter" aria-live="polite">
          {index + 1} / {total}
        </div>
      )}
    </div>
  );

  return createPortal(node, document.body);
}
