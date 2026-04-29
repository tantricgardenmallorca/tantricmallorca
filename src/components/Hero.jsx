import heroVideo from '../assets/hero-video.mp4';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content">
        <h1>Donde la piel se convierte en el lenguaje del alma.</h1>
        <p>
          Más que un masaje, una iniciación a la presencia plena. En el corazón
          de la isla, hemos creado un espacio único de descanso y placer para
          quienes buscan una experiencia fuera de lo cotidiano.
        </p>
        <div className="hero-ctas">
          <a href="#contacto" className="btn btn-light">
            Agendar Cita
          </a>
          <a href="#experiencias" className="btn btn-ghost">
            Explora nuestras Experiencias
          </a>
        </div>
      </div>
    </section>
  );
}
