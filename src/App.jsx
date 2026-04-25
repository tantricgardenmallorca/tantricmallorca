import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Masajistas from './components/Masajistas.jsx';
import Ritual from './components/Ritual.jsx';
import Experiencias from './components/Experiencias.jsx';
import Espacio from './components/Espacio.jsx';
import CTAFinal from './components/CTAFinal.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Masajistas />
        <Ritual />
        <Experiencias />
        <Espacio />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
