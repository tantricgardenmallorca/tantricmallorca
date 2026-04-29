import { Link, useParams, Navigate } from 'react-router-dom';
import { getMasajista } from '../data/masajistas.js';
import { whatsappLink } from '../data/whatsapp.js';

export default function MasajistaDetail() {
  const { slug } = useParams();
  const masajista = getMasajista(slug);

  if (!masajista) {
    return <Navigate to="/" replace />;
  }

  const reservarMsg = `Hola, me gustaría reservar una sesión con ${masajista.name}.`;

  return (
    <article className="masajista-detail">
      <div className="container">
        <Link to="/#masajistas" className="back-link">
          ← Volver a Masajistas
        </Link>

        <div className="detail-grid">
          <div className="detail-image">
            <img src={masajista.image} alt={masajista.name} />
          </div>

          <div className="detail-body">
            <span className="eyebrow">Tantric Mallorca · Masajista</span>
            <h1>{masajista.name}</h1>
            <p className="detail-lede">{masajista.desc}</p>

            <div className="detail-bio">
              {masajista.bio.map((parrafo, i) => (
                <p key={i}>{parrafo}</p>
              ))}
            </div>

            <a
              href={whatsappLink(reservarMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark detail-cta"
            >
              Reservar por WhatsApp
            </a>
          </div>
        </div>

        <section className="detail-servicios">
          <h2>Servicios disponibles</h2>
          <div className="servicios-list">
            {masajista.servicios.map((s) => (
              <div key={s.nombre} className="servicio">
                <div className="servicio-info">
                  <h3>{s.nombre}</h3>
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
            Reservar
          </a>
        </section>
      </div>
    </article>
  );
}
