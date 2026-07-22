import antonella1 from '../assets/photos/antonella-1.jpg';
import antonella2 from '../assets/photos/antonella-2.jpg';
import antonella3 from '../assets/photos/antonella-3.jpg';
import melany1 from '../assets/photos/melany-1.jpg';
import melany2 from '../assets/photos/melany-2.jpg';
import melany3 from '../assets/photos/melany-3.jpg';
import ela1 from '../assets/photos/dulce-1.jpg';
import ela2 from '../assets/photos/dulce-2.jpg';
import dulceMaria1 from '../assets/photos/camila-1.jpg';
import dulceMaria2 from '../assets/photos/camila-2.jpg';
import heydi1 from '../assets/photos/heydi-1.jpg';
import heydi2 from '../assets/photos/heydi-2.jpg';

const SERVICIOS_KEYS = [
  { key: 'sutra', duracion: '30 min · 60 min', precio: '80 € / 150 €' },
  { key: 'doble-climax', duracion: '60 min', precio: '200 €' },
  { key: 'striptease', duracion: '70 min', precio: '250 €' },
  { key: 'energy-deluxe', duracion: '70 min', precio: '300 €' },
];

export const MASAJISTAS = [
  {
    slug: 'melany',
    name: 'Melany',
    images: [melany1, melany2, melany3],
    servicios: SERVICIOS_KEYS,
  },
  {
    slug: 'antonella',
    name: 'Antonella',
    images: [antonella1, antonella2, antonella3],
    servicios: SERVICIOS_KEYS,
  },
  {
    slug: 'ela',
    name: 'Ela',
    images: [ela1, ela2],
    servicios: SERVICIOS_KEYS,
  },
  {
    slug: 'dulce-maria',
    name: 'Dulce María',
    images: [dulceMaria1, dulceMaria2],
    servicios: SERVICIOS_KEYS,
  },
  {
    slug: 'heydi',
    name: 'Heydi',
    images: [heydi1, heydi2],
    servicios: SERVICIOS_KEYS,
  },
];

export function getMasajista(slug) {
  return MASAJISTAS.find((m) => m.slug === slug);
}
