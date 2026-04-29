import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import ScrollToHash from './components/ScrollToHash.jsx';
import HomePage from './pages/HomePage.jsx';
import MasajistaDetail from './pages/MasajistaDetail.jsx';

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/masajistas/:slug" element={<MasajistaDetail />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
