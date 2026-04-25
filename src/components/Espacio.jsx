const TILES = [
  { id: 't1', label: 'Sala principal' },
  { id: 't2', label: 'Pasillo · luz cálida' },
  { id: 't3', label: 'Detalle · aceites' },
  { id: 't4', label: 'Baño ritual' },
  { id: 't5', label: 'Patio interior' },
  { id: 't6', label: 'Sala de descanso' },
];

function ImageIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}

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
            <div key={t.id} className={`tile ${t.id}`} aria-label={t.label}>
              <div className="tile-label">
                <ImageIcon />
                <span>{t.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
