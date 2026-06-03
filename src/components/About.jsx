import { useTranslation } from '../i18n/useTranslation.js';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <p className="about-eyebrow">{t('about.eyebrow')}</p>
        <h2 className="section-title about-title">{t('about.title')}</h2>
        <p className="section-lede about-lede">{t('about.body')}</p>
      </div>
    </section>
  );
}
