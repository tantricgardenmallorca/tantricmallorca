import { useTranslation } from '../i18n/useTranslation.js';

export default function CTAFinal() {
  const { t } = useTranslation();
  return (
    <section id="contacto" className="cta-final">
      <div className="container">
        <h2>{t('cta.title')}</h2>
        <p>{t('cta.body')}</p>
        <a
          href="mailto:tantricgardenmallorca@gmail.com?subject=Reserva%20Tantric%20Mallorca"
          className="btn btn-dark"
        >
          {t('cta.button')}
        </a>
      </div>
    </section>
  );
}
