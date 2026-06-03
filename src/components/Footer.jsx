import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/useTranslation.js';
import { INSTAGRAM_URL } from '../data/social.js';
import { whatsappLink } from '../data/whatsapp.js';
import logo from '../assets/logo-light.svg';
import InstagramIcon from './InstagramIcon.jsx';

const NAV_LINKS = [
  { key: 'nav.about', href: '/#nosotros' },
  { key: 'nav.experiences', href: '/#experiencias' },
  { key: 'nav.masseuses', href: '/#masajistas' },
  { key: 'nav.contact', href: '/#contacto' },
];
const BRAND_EMAIL = 'tantricgardenmallorca@gmail.com';
const PHONE_DISPLAY = '+34 604 19 93 53';
const MAP_EMBED =
  'https://maps.google.com/maps?q=39.575691,2.655830&z=16&hl=es&output=embed';
const MAP_LINK =
  'https://www.google.com/maps/dir/?api=1&destination=39.575691,2.655830';
const YEAR = new Date().getFullYear();

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <img src={logo} alt="The Tantric Garden" className="footer-logo-img" />
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>{t('footer.nav')}</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.key}>
                  <Link to={l.href}>{t(l.key)}</Link>
                </li>
              ))}
            </ul>
            <a
              className="footer-cta"
              href={whatsappLink(t('whatsapp.default'))}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('nav.book')}
            </a>
          </div>

          <div className="footer-col">
            <h4>{t('footer.contact')}</h4>
            <ul className="footer-contact">
              <li>
                <a
                  href={whatsappLink(t('whatsapp.default'))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.hours')}</h4>
            <p className="footer-text">{t('footer.hoursValue')}</p>
          </div>

          <div className="footer-col">
            <h4>{t('footer.follow')}</h4>
            <div className="footer-social">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <InstagramIcon className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-address">
          <div className="footer-address-info">
            <span className="footer-address-pin" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
            </span>
            <div>
              <h4>{t('footer.address')}</h4>
              <p className="footer-text">{t('footer.addressValue')}</p>
            </div>
          </div>
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

        <div className="footer-fine">
          <span>{t('footer.fine1')}</span>
          <span>{t('footer.fine2', { year: YEAR })}</span>
        </div>
      </div>
    </footer>
  );
}
