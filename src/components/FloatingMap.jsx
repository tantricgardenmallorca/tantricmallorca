import { useTranslation } from '../i18n/useTranslation.js';

const MAP_EMBED =
  'https://maps.google.com/maps?q=39.575691,2.655830&z=16&hl=es&output=embed';
const MAP_LINK =
  'https://www.google.com/maps/dir/?api=1&destination=39.575691,2.655830';

export default function FloatingMap() {
  const { t } = useTranslation();
  return (
    <a
      className="floating-map"
      href={MAP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('footer.mapAria')}
    >
      <iframe
        src={MAP_EMBED}
        title={t('footer.mapAria')}
        loading="lazy"
        tabIndex={-1}
      />
      <span className="floating-map-cta">{t('footer.directions')} →</span>
      <span className="floating-map-pin" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
      </span>
    </a>
  );
}
