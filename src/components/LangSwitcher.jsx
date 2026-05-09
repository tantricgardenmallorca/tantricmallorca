import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../i18n/useTranslation.js';
import { LOCALE_LABELS, SUPPORTED_LOCALES } from '../i18n/config.js';

export default function LangSwitcher() {
  const { locale, setLocale, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    function onEsc(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  const current = LOCALE_LABELS[locale];

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        type="button"
        className="lang-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('nav.language')}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lang-flag" aria-hidden="true">
          {current.flag}
        </span>
        <span className="lang-short">{current.short}</span>
        <svg
          className={`lang-caret${open ? ' lang-caret--open' : ''}`}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 1l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <ul className="lang-menu" role="listbox" aria-label={t('nav.language')}>
          {SUPPORTED_LOCALES.map((code) => {
            const data = LOCALE_LABELS[code];
            const active = code === locale;
            return (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  className={`lang-option${active ? ' lang-option--active' : ''}`}
                  onClick={() => {
                    setLocale(code);
                    setOpen(false);
                  }}
                >
                  <span className="lang-flag" aria-hidden="true">
                    {data.flag}
                  </span>
                  <span>{data.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
