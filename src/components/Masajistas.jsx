import ivonnyImg from '../assets/ivonny.jpg';
import juanaImg from '../assets/juana.jpg';
import dulceMariaImg from '../assets/masaje-espalda.jpg';

const MASAJISTAS = [
  {
    name: 'Ivonny bonita',
    desc: 'Experta en masaje tántrico y técnicas de relajación profunda.',
    image: ivonnyImg,
  },
  {
    name: 'Juana banana',
    desc: 'Experta en masaje tántrico y técnicas de relajación profunda.',
    image: juanaImg,
  },
  {
    name: 'Dulce Maria',
    desc: 'Experta en masaje tántrico y técnicas de relajación profunda.',
    image: dulceMariaImg,
  },
];

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
              key={m.name}
              className={`masajista${i % 2 === 1 ? ' masajista--reverse' : ''}`}
            >
              <div className="masajista-img">
                <img src={m.image} alt={m.name} loading="lazy" />
              </div>
              <div className="masajista-body">
                <h3 className="masajista-name">{m.name}</h3>
                <p className="masajista-desc">{m.desc}</p>
                <a href="#contacto" className="btn btn-dark masajista-cta">
                  Ver más
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
