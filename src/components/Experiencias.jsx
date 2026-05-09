import { useTranslation } from '../i18n/useTranslation.js';

const ITEMS = ['sutra', 'doble-climax', 'striptease', 'energy-deluxe'];

export default function Experiencias() {
  const { t } = useTranslation();
  const title = t('experiencias.title');
  const titleLines = typeof title === 'string' ? title.split('\n') : [title];
  return (
    <section id="experiencias" className="section experiencias">
      <div className="container">
        <div className="experiencias-head">
          <h2>
            {titleLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p>{t('experiencias.lede')}</p>
        </div>

        <div className="experiencias-list">
          {ITEMS.map((key, idx) => (
            <div key={key} className="experiencia">
              <span className="experiencia-num">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="experiencia-name">
                {t(`experiencias.items.${key}.name`)}
              </h3>
              <p className="experiencia-desc">
                {t(`experiencias.items.${key}.desc`)}
              </p>
              <span className="experiencia-price">
                {t(`experiencias.items.${key}.price`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
