const LEGAL = [
  ['Términos y Condiciones', '#'],
  ['Política de Privacidad', '#'],
  ['Aviso de Cookies', '#'],
];

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="mark">Tantric Mallorca</span>
            <span className="sub">Ritual · Presencia · Isla</span>
          </div>
          <div className="footer-col">
            <h4>Legal &amp; Compliance</h4>
            <ul>
              {LEGAL.map(([label, href]) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-fine">
          <span>
            Tantric Mallorca opera bajo cita previa en Mallorca, Illes Balears.
            Servicios para mayores de 18 años.
          </span>
          <span>© {YEAR} Tantric Mallorca. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
