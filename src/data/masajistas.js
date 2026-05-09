import ivonny1 from '../assets/photos/ivonny-1.jpg';
import ivonny2 from '../assets/photos/ivonny-2.jpg';
import juana1 from '../assets/photos/juana-1.jpg';
import juana2 from '../assets/photos/juana-2.jpg';
import juana3 from '../assets/photos/juana-3.jpg';
import dulce1 from '../assets/photos/dulce-1.jpg';
import dulce2 from '../assets/photos/dulce-2.jpg';
import dulce3 from '../assets/photos/dulce-3.jpg';
import dulce4 from '../assets/photos/dulce-4.jpg';

const SERVICIOS_KEYS = [
  { key: 'clasico', duracion: '75 min', precio: '175 €' },
  { key: 'prostata', duracion: '90 min', precio: '175 €' },
  { key: 'cuatro-manos', duracion: '90 min', precio: '175 €' },
  { key: 'parejas', duracion: '120 min', precio: '175 €' },
];

export const MASAJISTAS = [
  {
    slug: 'ivonny',
    name: 'Ivonny',
    images: [ivonny1, ivonny2],
    bioParagraphs: 3,
    servicios: SERVICIOS_KEYS,
  },
  {
    slug: 'juana',
    name: 'Juana',
    images: [juana1, juana2, juana3],
    bioParagraphs: 3,
    servicios: SERVICIOS_KEYS,
  },
  {
    slug: 'dulce-maria',
    name: 'Dulce María',
    images: [dulce1, dulce2, dulce3, dulce4],
    bioParagraphs: 3,
    servicios: SERVICIOS_KEYS,
  },
];

export function getMasajista(slug) {
  return MASAJISTAS.find((m) => m.slug === slug);
}
