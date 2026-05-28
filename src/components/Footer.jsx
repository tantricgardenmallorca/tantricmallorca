import { useTranslation } from '../i18n/useTranslation.js';
import logo from '../assets/logo-light.svg';

const LEGAL_KEYS = ['footer.terms', 'footer.privacy', 'footer.cookies'];
const YEAR = new Date().getFullYear();
const MAP_EMBED =
  'https://maps.google.com/maps?q=39.575691,2.655830&z=16&hl=es&output=embed';
const MAP_LINK =
  'https://www.google.com/maps/dir/?api=1&destination=39.575691,2.655830';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="The Tantric Garden" className="footer-logo-img" />
          </div>
          <div className="footer-col">
            <h4>{t('footer.legal')}</h4>
            <ul>
              {LEGAL_KEYS.map((k) => (
                <li key={k}>
                  <a href="#">{t(k)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-map-col">
            <a
              className="footer-map"
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
              <span className="footer-map-cta">{t('footer.directions')} →</span>
            </a>
          </div>
        </div>
        <div className="footer-fine">
          <span>{t('footer.fine1')}</span>
          <span>{t('footer.fine2', { year: YEAR })}</span>
        </div>
      </div>
    </footer>
  );
}
