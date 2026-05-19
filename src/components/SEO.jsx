import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n/useTranslation.js';
import { SUPPORTED_LOCALES } from '../i18n/config.js';
import { WHATSAPP_NUMBER } from '../data/whatsapp.js';

const SITE_URL = 'https://www.tantricmallorca.com';
const OG_LOCALES = {
  es: 'es_ES',
  en: 'en_GB',
  fr: 'fr_FR',
  de: 'de_DE',
};

// Palma de Mallorca center (no real address yet — improves "near me" relevance for the island).
const GEO = {
  lat: 39.5696,
  lng: 2.6502,
  region: 'ES-PM',
  placename: 'Mallorca, Illes Balears',
};

const SERVICE_CATALOG = [
  {
    name: 'Sutra del Encuentro',
    description: 'Masaje tántrico introductorio con posturas del Kamasutra. 30 min o 60 min.',
    priceFrom: 80,
  },
  {
    name: 'Doble Climax Ritual',
    description: 'Ritual tántrico de 60 min con doble culminación, iniciado con bautismo de agua tibia.',
    priceFrom: 200,
  },
  {
    name: 'Velos del Diván',
    description: 'Experiencia sensorial y erótica de 70 minutos con lencería sobre el diván.',
    priceFrom: 250,
  },
  {
    name: 'Ritual Supremo',
    description: 'Ritual tántrico premium de 70 minutos que reúne Kamasutra, agua y velos.',
    priceFrom: 300,
  },
];

function buildLocalBusinessSchema({ description, ogImage }) {
  return {
    '@context': 'https://schema.org',
    '@type': ['HealthAndBeautyBusiness', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: 'The Tantric Garden',
    description,
    url: SITE_URL,
    image: ogImage,
    telephone: WHATSAPP_NUMBER,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Palma',
      addressRegion: 'Illes Balears',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    areaServed: [
      { '@type': 'City', name: 'Palma de Mallorca' },
      { '@type': 'AdministrativeArea', name: 'Illes Balears' },
      { '@type': 'Place', name: 'Mallorca' },
    ],
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Masajes Tántricos en Mallorca',
      itemListElement: SERVICE_CATALOG.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
          provider: { '@id': `${SITE_URL}/#business` },
          areaServed: { '@type': 'Place', name: 'Mallorca' },
        },
        price: s.priceFrom,
        priceCurrency: 'EUR',
      })),
    },
  };
}

function buildPersonSchema({ name, description, image, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}${path}#person`,
    name,
    description,
    image,
    jobTitle: 'Masajista Tántrica',
    worksFor: { '@id': `${SITE_URL}/#business` },
    url: `${SITE_URL}${path}`,
  };
}

export default function SEO({
  path = '/',
  title: titleOverride,
  description: descOverride,
  schema,
  person,
}) {
  const { t, locale } = useTranslation();
  const url = `${SITE_URL}${path}`;
  const title = titleOverride || t('meta.title');
  const description = descOverride || t('meta.description');
  const ogTitle = titleOverride || t('meta.ogTitle');
  const ogDescription = descOverride || t('meta.ogDescription');
  const ogImage = person?.image || `${SITE_URL}/og-image.jpg`;

  const businessSchema =
    schema || buildLocalBusinessSchema({ description, ogImage });
  const personSchema = person
    ? buildPersonSchema({ ...person, path })
    : null;

  return (
    <Helmet>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta name="geo.region" content={GEO.region} />
      <meta name="geo.placename" content={GEO.placename} />
      <meta name="geo.position" content={`${GEO.lat};${GEO.lng}`} />
      <meta name="ICBM" content={`${GEO.lat}, ${GEO.lng}`} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content={OG_LOCALES[locale] || locale} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="The Tantric Garden" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />

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
        {JSON.stringify(businessSchema)}
      </script>
      {personSchema && (
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      )}
    </Helmet>
  );
}
