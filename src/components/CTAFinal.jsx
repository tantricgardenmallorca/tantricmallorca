import { useTranslation } from '../i18n/useTranslation.js';
import { whatsappLink } from '../data/whatsapp.js';

export default function CTAFinal() {
  const { t } = useTranslation();
  return (
    <section id="contacto" className="cta-final">
      <div className="container">
        <h2>{t('cta.title')}</h2>
        <p>{t('cta.body')}</p>
        <a
          href={whatsappLink(t('whatsapp.default'))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
        >
          {t('cta.button')}
        </a>
      </div>
    </section>
  );
}
