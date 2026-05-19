import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/useTranslation.js';
import { whatsappLink } from '../data/whatsapp.js';
import LangSwitcher from './LangSwitcher.jsx';
import logo from '../assets/logo.svg';

const LINKS = [
  { key: 'nav.about', href: '/#nosotros' },
  { key: 'nav.experiences', href: '/#experiencias' },
  { key: 'nav.masseuses', href: '/#masajistas' },
  { key: 'nav.contact', href: '/#contacto' },
];

export default function Nav() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" aria-label="The Tantric Garden">
          <img src={logo} alt="The Tantric Garden" className="nav-logo-img" />
        </Link>
        <nav>
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.key}>
                <Link to={l.href}>{t(l.key)}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <a
            href={whatsappLink(t('whatsapp.default'))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            {t('nav.book')}
          </a>
          <LangSwitcher />
          <button
            type="button"
            className="nav-burger"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="nav-mobile">
          <ul>
            {LINKS.map((l) => (
              <li key={l.key}>
                <Link to={l.href} onClick={() => setMobileOpen(false)}>
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
