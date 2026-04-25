const LINKS = [
  ['Nosotros', '#nosotros'],
  ['Masajes', '#experiencias'],
  ['Masajistas', '#masajistas'],
  ['Contacto', '#contacto'],
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo" aria-label="Tantric Mallorca">
          <span className="mark">Tantric</span>
          <span className="sub">Mallorca</span>
        </a>
        <nav>
          <ul className="nav-links">
            {LINKS.map(([label, href]) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <a href="#contacto" className="btn btn-dark">
            Reservar
          </a>
          <span className="nav-lang" aria-label="Idioma">
            Español
          </span>
        </div>
      </div>
    </header>
  );
}
