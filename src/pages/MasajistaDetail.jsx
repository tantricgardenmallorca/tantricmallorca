import { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getMasajista } from '../data/masajistas.js';
import { whatsappLink } from '../data/whatsapp.js';
import { useTranslation } from '../i18n/useTranslation.js';
import Gallery from '../components/Gallery.jsx';
import Lightbox from '../components/Lightbox.jsx';
import SEO from '../components/SEO.jsx';

export default function MasajistaDetail() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const masajista = getMasajista(slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  if (!masajista) {
    return <Navigate to="/" replace />;
  }

  const displayName = t(`masajistas.people.${slug}.displayName`);
  const desc = t(`masajistas.people.${slug}.desc`);
  const bio = t(`masajistas.people.${slug}.bio`);
  const reservarMsg = t('masajistas.reserveMessage', { name: displayName });
  const pageTitle = `${displayName} · Tantric Mallorca`;

  return (
    <>
      <SEO
        path={`/masajistas/${slug}`}
        title={pageTitle}
        description={desc}
        person={{
          name: displayName,
          description: desc,
          image: `https://www.tantricmallorca.com${masajista.images[0]}`,
        }}
      />

      <article className="masajista-detail">
        <div className="container">
          <Link to="/#masajistas" className="back-link">
            {t('masajistas.back')}
          </Link>

          <div className="detail-grid">
            <div className="detail-image">
              <Gallery
                images={masajista.images}
                name={displayName}
                variant="detail"
                onImageClick={(idx) => setLightboxIndex(idx)}
              />
            </div>

            <div className="detail-body">
              <span className="eyebrow">{t('masajistas.eyebrow')}</span>
              <h1>{displayName}</h1>
              <p className="detail-lede">{desc}</p>

              <div className="detail-bio">
                {Array.isArray(bio) &&
                  bio.map((parrafo, i) => <p key={i}>{parrafo}</p>)}
              </div>

              <a
                href={whatsappLink(reservarMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark detail-cta"
              >
                {t('masajistas.bookWhatsApp')}
              </a>
            </div>
          </div>

          <section className="detail-servicios">
            <h2>{t('masajistas.servicesTitle')}</h2>
            <div className="servicios-list">
              {masajista.servicios.map((s) => (
                <div key={s.key} className="servicio">
                  <div className="servicio-info">
                    <h3>{t(`masajistas.servicios.${s.key}`)}</h3>
                    <span className="servicio-duracion">{s.duracion}</span>
                  </div>
                  <span className="servicio-precio">{s.precio}</span>
                </div>
              ))}
            </div>
            <a
              href={whatsappLink(reservarMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              {t('masajistas.bookShort')}
            </a>
          </section>
        </div>
      </article>

      {lightboxIndex !== null && (
        <Lightbox
          images={masajista.images}
          index={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
