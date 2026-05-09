import ivonny1 from '../assets/photos/ivonny-1.jpg';
import ivonny2 from '../assets/photos/ivonny-2.jpg';
import melany1 from '../assets/photos/melany-1.jpg';
import melany2 from '../assets/photos/melany-2.jpg';
import melany3 from '../assets/photos/melany-3.jpg';
import dulce1 from '../assets/photos/dulce-1.jpg';
import dulce2 from '../assets/photos/dulce-2.jpg';
import camila1 from '../assets/photos/camila-1.jpg';
import camila2 from '../assets/photos/camila-2.jpg';

const SERVICIOS_KEYS = [
  { key: 'clasico', duracion: '75 min', precio: '175 €' },
  { key: 'prostata', duracion: '90 min', precio: '175 €' },
  { key: 'cuatro-manos', duracion: '90 min', precio: '175 €' },
  { key: 'parejas', duracion: '120 min', precio: '175 €' },
];

export const MASAJISTAS = [
  {
    slug: 'melany',
    name: 'Melany',
    images: [melany1, melany2, melany3],
    servicios: SERVICIOS_KEYS,
  },
  {
    slug: 'ivonny',
    name: 'Ivonny',
    images: [ivonny1, ivonny2],
    servicios: SERVICIOS_KEYS,
  },
  {
    slug: 'dulce-maria',
    name: 'Dulce María',
    images: [dulce1, dulce2],
    servicios: SERVICIOS_KEYS,
  },
  {
    slug: 'camila',
    name: 'Camila',
    images: [camila1, camila2],
    servicios: SERVICIOS_KEYS,
  },
];

export function getMasajista(slug) {
  return MASAJISTAS.find((m) => m.slug === slug);
}
