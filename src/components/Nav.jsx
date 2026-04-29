import { Link } from 'react-router-dom';

const LINKS = [
  ['Nosotros', '/#nosotros'],
  ['Masajes', '/#experiencias'],
  ['Masajistas', '/#masajistas'],
  ['Contacto', '/#contacto'],
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" aria-label="Tantric Mallorca">
          <span className="mark">Tantric</span>
          <span className="sub">Mallorca</span>
        </Link>
        <nav>
          <ul className="nav-links">
            {LINKS.map(([label, href]) => (
              <li key={label}>
                <Link to={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <Link to="/#contacto" className="btn btn-dark">
            Reservar
          </Link>
          <span className="nav-lang" aria-label="Idioma">
            Español
          </span>
        </div>
      </div>
    </header>
  );
}
