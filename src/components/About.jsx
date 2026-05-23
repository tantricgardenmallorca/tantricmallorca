import { useTranslation } from '../i18n/useTranslation.js';

export default function About() {
  const { t } = useTranslation();
  const facts = t('about.facts');
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <p className="about-eyebrow">{t('about.eyebrow')}</p>
        <h2 className="section-title about-title">{t('about.title')}</h2>
        <p className="section-lede about-lede">{t('about.body')}</p>
        {Array.isArray(facts) && facts.length > 0 && (
          <ul className="about-facts">
            {facts.map((fact) => (
              <li key={fact.k}>
                <span className="about-fact-key">{fact.k}</span>
                <span className="about-fact-val">{fact.v}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
