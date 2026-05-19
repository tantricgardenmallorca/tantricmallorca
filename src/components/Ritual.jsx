import { useTranslation } from '../i18n/useTranslation.js';
import ritualBg from '../assets/photos/ritual-bg.jpg';

export default function Ritual() {
  const { t } = useTranslation();
  return (
    <section
      id="nosotros"
      className="ritual"
      style={{ backgroundImage: `url(${ritualBg})` }}
    >
      <div className="ritual-overlay" />
      <div className="container">
        <h2>{t('ritual.title')}</h2>
        <p>{t('ritual.body')}</p>
      </div>
    </section>
  );
}
