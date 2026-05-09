import { useTranslation } from '../i18n/useTranslation.js';
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

export default function Espacio() {
  const { t } = useTranslation();
  return (
    <section className="section espacio">
      <div className="container">
        <h2 className="section-title">{t('espacio.title')}</h2>
        <p className="section-lede">{t('espacio.lede')}</p>

        <div className="espacio-grid">
          {TILES.map((tile) => (
            <div key={tile.id} className={`tile ${tile.id}`}>
              <img src={tile.image} alt={t(tile.labelKey)} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
