import salaPrincipal from '../assets/masaje-espalda.jpg';
import pasilloLuces from '../assets/espacio-luces.jpg';
import detalleIntimo from '../assets/ivonny.jpg';
import patioAtardecer from '../assets/espacio-patio.jpg';
import salaDescanso from '../assets/juana.jpg';

const TILES = [
  { id: 't1', label: 'Sala principal', image: salaPrincipal },
  { id: 't2', label: 'Pasillo · luz cálida', image: pasilloLuces },
  { id: 't3', label: 'Detalle íntimo', image: detalleIntimo },
  { id: 't4', label: 'Aceites & ritual', image: pasilloLuces },
  { id: 't5', label: 'Sala de descanso', image: salaDescanso },
  { id: 't6', label: 'Patio al atardecer', image: patioAtardecer },
];

export default function Espacio() {
  return (
    <section className="section espacio">
      <div className="container">
        <h2 className="section-title">Un espacio íntimo &amp; tranquilo</h2>
        <p className="section-lede">
          Una casa restaurada con materiales nobles — piedra, lino, madera de
          olivo — donde cada detalle invita al cuerpo a soltar el tiempo y
          habitar el presente.
        </p>

        <div className="espacio-grid">
          {TILES.map((t) => (
            <div key={t.id} className={`tile ${t.id}`}>
              <img src={t.image} alt={t.label} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
