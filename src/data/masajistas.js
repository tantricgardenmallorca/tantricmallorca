import ivonnyImg from '../assets/ivonny.jpg';
import juanaImg from '../assets/juana.jpg';
import dulceMariaImg from '../assets/masaje-espalda.jpg';

const LOREM_BIO_LARGO = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
];

const SERVICIOS = [
  { nombre: 'Masaje Tántrico Clásico', duracion: '75 min', precio: '175 €' },
  { nombre: 'Masaje de Próstata', duracion: '90 min', precio: '175 €' },
  { nombre: 'Masaje a Cuatro Manos', duracion: '90 min', precio: '175 €' },
  { nombre: 'Masaje para Parejas', duracion: '120 min', precio: '175 €' },
];

export const MASAJISTAS = [
  {
    slug: 'ivonny',
    name: 'Ivonny bonita',
    desc: 'Experta en masaje tántrico y técnicas de relajación profunda.',
    image: ivonnyImg,
    bio: LOREM_BIO_LARGO,
    servicios: SERVICIOS,
  },
  {
    slug: 'juana',
    name: 'Juana banana',
    desc: 'Experta en masaje tántrico y técnicas de relajación profunda.',
    image: juanaImg,
    bio: LOREM_BIO_LARGO,
    servicios: SERVICIOS,
  },
  {
    slug: 'dulce-maria',
    name: 'Dulce Maria',
    desc: 'Experta en masaje tántrico y técnicas de relajación profunda.',
    image: dulceMariaImg,
    bio: LOREM_BIO_LARGO,
    servicios: SERVICIOS,
  },
];

export function getMasajista(slug) {
  return MASAJISTAS.find((m) => m.slug === slug);
}
