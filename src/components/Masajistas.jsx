import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/useTranslation.js';
import { MASAJISTAS } from '../data/masajistas.js';
import Gallery from './Gallery.jsx';

export default function Masajistas() {
  const { t } = useTranslation();

  return (
    <section id="masajistas" className="section masajistas">
      <div className="container">
        <h2 className="section-title">{t('masajistas.title')}</h2>
        <p className="section-lede">{t('masajistas.lede')}</p>

        <div className="masajistas-list">
          {MASAJISTAS.map((m, i) => {
            const displayName = t(`masajistas.people.${m.slug}.displayName`);
            const desc = t(`masajistas.people.${m.slug}.desc`);
            return (
              <article
                key={m.slug}
                className={`masajista${i % 2 === 1 ? ' masajista--reverse' : ''}`}
              >
                <div className="masajista-img">
                  <Gallery images={m.images} name={displayName} variant="card" />
                </div>
                <div className="masajista-card">
                  <h3 className="masajista-name">{displayName}</h3>
                  <p className="masajista-desc">{desc}</p>
                  <Link
                    to={`/masajistas/${m.slug}`}
                    className="btn btn-dark masajista-cta"
                  >
                    {t('masajistas.viewMore')}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
