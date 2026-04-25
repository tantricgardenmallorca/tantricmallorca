const MASAJISTAS = [
  {
    name: 'Ivonny',
    desc: 'Experta en masaje tántrico y técnicas de relajación profunda.',
    caption: 'Sostiene el espacio con presencia y escucha empática.',
  },
  {
    name: 'Juana',
    desc: 'Especialista en trabajo somático y rituales de pareja.',
    caption: 'Guía certificada en artes somáticas y tántricas.',
  },
  {
    name: 'Lucía',
    desc: 'Acompaña con tacto consciente y respiración guiada.',
    caption: 'Más de diez años en cuerpos en busca de descanso.',
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
              key={m.name + i}
              className={`masajista${i % 2 === 1 ? ' masajista--reverse' : ''}`}
            >
              <div className="masajista-img" aria-hidden="true">
                <span className="img-label">Imagen</span>
                <span className="img-foot">{m.caption}</span>
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
