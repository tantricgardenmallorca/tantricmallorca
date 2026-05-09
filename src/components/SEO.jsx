import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n/useTranslation.js';
import { SUPPORTED_LOCALES } from '../i18n/config.js';

const SITE_URL = 'https://tantricmallorca.com';
const OG_LOCALES = {
  es: 'es_ES',
  en: 'en_GB',
  fr: 'fr_FR',
  de: 'de_DE',
};

export default function SEO({
  path = '/',
  title: titleOverride,
  description: descOverride,
  schema,
}) {
  const { t, locale } = useTranslation();
  const url = `${SITE_URL}${path}`;
  const title = titleOverride || t('meta.title');
  const description = descOverride || t('meta.description');
  const ogTitle = titleOverride || t('meta.ogTitle');
  const ogDescription = descOverride || t('meta.ogDescription');

  const localBusiness = schema || {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Tantric Mallorca',
    description,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mallorca',
      addressRegion: 'Illes Balears',
      addressCountry: 'ES',
    },
    areaServed: { '@type': 'Place', name: 'Mallorca' },
    priceRange: '€€€',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '22:00',
    },
  };

  return (
    <Helmet>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={OG_LOCALES[locale] || locale} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content="Tantric Mallorca" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />

      {SUPPORTED_LOCALES.map((code) => (
        <link
          key={code}
          rel="alternate"
          hrefLang={code}
          href={`${SITE_URL}${path}?lang=${code}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={url} />

      <script type="application/ld+json">
        {JSON.stringify(localBusiness)}
      </script>
    </Helmet>
  );
}
