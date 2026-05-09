import { useState } from 'react';
import { useTranslation } from '../i18n/useTranslation.js';
import Lightbox from './Lightbox.jsx';
import salaRoja from '../assets/photos/lugar-sala-roja.jpg';
import mirrorBed from '../assets/photos/lugar-mirror-bed.jpg';
import altar from '../assets/photos/lugar-altar.jpg';
import sillaTantra from '../assets/photos/lugar-silla-tantra.jpg';
import salaAzul from '../assets/photos/lugar-sala-azul.jpg';
import recepcion from '../assets/photos/lugar-recepcion.jpg';

const TILES = [
  { id: 't1', labelKey: 'espacio.tiles.salaPrincipal', image: salaRoja },
  { id: 't2', labelKey: 'espacio.tiles.composicion', image: mirrorBed },
  { id: 't3', labelKey: 'espacio.tiles.altar', image: altar },
  { id: 't4', labelKey: 'espacio.tiles.silla', image: sillaTantra },
  { id: 't5', labelKey: 'espacio.tiles.salaAzul', image: salaAzul },
  { id: 't6', labelKey: 'espacio.tiles.recepcion', image: recepcion },
];

const IMAGES = TILES.map((t) => t.image);

export default function Espacio() {
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section className="section espacio">
      <div className="container">
        <h2 className="section-title">{t('espacio.title')}</h2>
        <p className="section-lede">{t('espacio.lede')}</p>

        <div className="espacio-grid">
          {TILES.map((tile, i) => (
            <button
              type="button"
              key={tile.id}
              className={`tile ${tile.id}`}
              onClick={() => setLightboxIndex(i)}
              aria-label={t(tile.labelKey)}
            >
              <img src={tile.image} alt={t(tile.labelKey)} loading="lazy" />
              <span className="tile-zoom" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle
                    cx="9"
                    cy="9"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M13.5 13.5L17 17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 9h6M9 6v6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={IMAGES}
          index={lightboxIndex}
          onChange={setLightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
