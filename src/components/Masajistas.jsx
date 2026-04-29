import { Link } from 'react-router-dom';
import { MASAJISTAS } from '../data/masajistas.js';

export default function Masajistas() {
  return (
    <section id="masajistas" className="section masajistas">
      <div className="container">
        <h2 className="section-title">Nuestras Masajistas</h2>
        <p className="section-lede">
          Nuestras especialistas no solo son terapeutas, son guías certificadas
          en artes somáticas y tántricas. Seleccionadas por su alta vibración y
          capacidad de escucha empática, ellas sostienen el espacio para que tú
          puedas dejarte ir.
        </p>

        <div className="masajistas-list">
          {MASAJISTAS.map((m, i) => (
            <article
              key={m.slug}
              className={`masajista${i % 2 === 1 ? ' masajista--reverse' : ''}`}
            >
              <div className="masajista-img">
                <img src={m.image} alt={m.name} loading="lazy" />
              </div>
              <div className="masajista-card">
                <h3 className="masajista-name">{m.name}</h3>
                <p className="masajista-desc">{m.desc}</p>
                <Link
                  to={`/masajistas/${m.slug}`}
                  className="btn btn-dark masajista-cta"
                >
                  Ver más
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
