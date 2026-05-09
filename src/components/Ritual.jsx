import { useTranslation } from '../i18n/useTranslation.js';

export default function Ritual() {
  const { t } = useTranslation();
  return (
    <section id="nosotros" className="ritual">
      <div className="container">
        <h2>{t('ritual.title')}</h2>
        <p>{t('ritual.body')}</p>
      </div>
    </section>
  );
}
