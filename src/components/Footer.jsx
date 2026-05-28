import { useTranslation } from '../i18n/useTranslation.js';
import { INSTAGRAM_URL } from '../data/social.js';
import logo from '../assets/logo-light.svg';
import InstagramIcon from './InstagramIcon.jsx';

const LEGAL_KEYS = ['footer.terms', 'footer.privacy', 'footer.cookies'];
const YEAR = new Date().getFullYear();

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
        <div className="footer-fine">
          <span>{t('footer.fine1')}</span>
          <span>{t('footer.fine2', { year: YEAR })}</span>
        </div>
      </div>
    </footer>
  );
}
