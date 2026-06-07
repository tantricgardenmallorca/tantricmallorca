import { useEffect, useState } from 'react';
import { useTranslation } from '../i18n/useTranslation.js';
import { GA_ID, getStoredConsent, setConsent } from '../data/analytics.js';

export default function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    if (!getStoredConsent()) setVisible(true);
  }, []);

  if (!visible) return null;

  const choose = (granted) => {
    setConsent(granted);
    setVisible(false);
  };

  return (
    <div
      className="cookie-consent"
      role="dialog"
      aria-live="polite"
      aria-label={t('cookies.aria')}
    >
      <p className="cookie-consent-text">{t('cookies.text')}</p>
      <div className="cookie-consent-actions">
        <button
          type="button"
          className="cookie-btn cookie-btn-ghost"
          onClick={() => choose(false)}
        >
          {t('cookies.reject')}
        </button>
        <button
          type="button"
          className="cookie-btn cookie-btn-solid"
          onClick={() => choose(true)}
        >
          {t('cookies.accept')}
        </button>
      </div>
    </div>
  );
}
