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
    </a>
  );
}
