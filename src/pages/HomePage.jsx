import Hero from '../components/Hero.jsx';
import Masajistas from '../components/Masajistas.jsx';
import Ritual from '../components/Ritual.jsx';
import Experiencias from '../components/Experiencias.jsx';
import Espacio from '../components/Espacio.jsx';
import CTAFinal from '../components/CTAFinal.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Masajistas />
      <Ritual />
      <Experiencias />
      <Espacio />
      <CTAFinal />
    </>
  );
}
