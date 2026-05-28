import { useTranslation } from '../i18n/useTranslation.js';
import logo from '../assets/logo-dark.svg';

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
            <span className="sub">{t('footer.tagline')}</span>
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
        </div>
        <div className="footer-fine">
          <span>{t('footer.fine1')}</span>
          <span>{t('footer.fine2', { year: YEAR })}</span>
        </div>
      </div>
    </footer>
  );
}
