const EXPERIENCIAS = [
  {
    n: '01',
    nombre: 'Masaje Tántrico Clásico',
    desc: 'Una inmersión total de 75 minutos diseñada para resetear el sistema nervioso y expandir la sensibilidad sensorial.',
    precio: '175 €',
  },
  {
    n: '02',
    nombre: 'Masaje de Próstata',
    desc: 'Un ritual profundo que combina la respiración consciente con el tacto sagrado para liberar bloqueos emocionales y físicos.',
    precio: '175 €',
  },
  {
    n: '03',
    nombre: 'Masaje a Cuatro Manos',
    desc: 'La experiencia definitiva de rendición. Dos terapeutas en armonía geométrica para silenciar la mente por completo.',
    precio: '175 €',
  },
  {
    n: '04',
    nombre: 'Masaje para Parejas',
    desc: 'Una sesión guiada para parejas que desean redescubrir su conexión erótica y espiritual a través del lenguaje del tantra.',
    precio: '175 €',
  },
];

export default function Experiencias() {
  return (
    <section id="experiencias" className="section experiencias">
      <div className="container">
        <div className="experiencias-head">
          <h2>
            Nuestras
            <br />
            experiencias
          </h2>
          <p>
            Cada experiencia se prepara con materiales locales, ritmo pausado y
            la atención puesta enteramente en ti. Sesiones individuales y de
            pareja, con cita previa.
          </p>
        </div>

        <div className="experiencias-list">
          {EXPERIENCIAS.map((e) => (
            <div key={e.n} className="experiencia">
              <span className="experiencia-num">{e.n}</span>
              <h3 className="experiencia-name">{e.nombre}</h3>
              <p className="experiencia-desc">{e.desc}</p>
              <span className="experiencia-price">{e.precio}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
