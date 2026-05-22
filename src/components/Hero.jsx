import { useTranslation } from '../i18n/useTranslation.js';
import { whatsappLink } from '../data/whatsapp.js';
import heroVideo from '../assets/hero-video.mp4';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section id="top" className="hero">
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container hero-content">
        <p className="hero-eyebrow">{t('hero.eyebrow')}</p>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.lede')}</p>
        <div className="hero-ctas">
          <a
            href={whatsappLink(t('whatsapp.default'))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a href="#experiencias" className="btn btn-ghost">
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>
    </section>
  );
}
