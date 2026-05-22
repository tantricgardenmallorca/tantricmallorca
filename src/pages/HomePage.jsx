import Hero from '../components/Hero.jsx';
import Masajistas from '../components/Masajistas.jsx';
import Ritual from '../components/Ritual.jsx';
import Experiencias from '../components/Experiencias.jsx';
import Espacio from '../components/Espacio.jsx';
import CTAFinal from '../components/CTAFinal.jsx';
import SEO from '../components/SEO.jsx';
import { useTranslation } from '../i18n/useTranslation.js';

export default function HomePage() {
  const { t } = useTranslation();
  const faqs = t('faq.items');
  return (
    <>
      <SEO path="/" faqs={Array.isArray(faqs) ? faqs : []} />
      <Hero />
      <Masajistas />
      <Ritual />
      <Experiencias />
      <Espacio />
      <CTAFinal />
    </>
  );
}
