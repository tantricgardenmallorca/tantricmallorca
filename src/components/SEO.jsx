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
    name: 'Ritual del Loto',
    description: 'Encuentro tántrico íntimo con movimiento, conexión y posturas. 30 min o 60 min.',
    priceFrom: 80,
  },
  {
    name: 'Doble Marea',
    description: 'Viaje sensorial en dos momentos iniciado con un delicado ritual de agua. 60 min.',
    priceFrom: 200,
  },
  {
    name: 'Jardín de Velos',
    description: 'Danza sensual y erótica de 70 min sobre el diván, entre velos y lencería.',
    priceFrom: 250,
  },
  {
    name: 'Ritual Imperial',
    description: 'Experiencia premium de 70 min que integra movimiento, agua, velos y conexión.',
    priceFrom: 300,
  },
];

function buildLocalBusinessSchema({ description, ogImage }) {
  return {
    '@context': 'https://schema.org',
    '@type': ['HealthAndBeautyBusiness', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: 'The Tantric Garden',
    alternateName: ['Tantric Garden', 'The Tantric Garden Mallorca'],
    description,
    url: SITE_URL,
    sameAs: [`${SITE_URL}/#organization`],
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
      { '@type': 'City', name: 'Palma' },
      { '@type': 'AdministrativeArea', name: 'Illes Balears' },
      { '@type': 'AdministrativeArea', name: 'Islas Baleares' },
      { '@type': 'Place', name: 'Mallorca' },
      { '@type': 'Place', name: 'Majorca' },
    ],
    knowsAbout: [
      'Masaje tántrico',
      'Tantric massage',
      'Massage tantrique',
      'Tantra-Massage',
      'Masaje sensorial',
      'Ritual sensorial',
      'Bodywork',
    ],
    serviceType: [
      'Masaje Tántrico',
      'Tantric Massage',
      'Ritual Sensorial',
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

function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: 'The Tantric Garden',
    alternateName: ['Tantric Garden', 'The Tantric Garden Mallorca'],
    inLanguage: ['es', 'en', 'fr', 'de'],
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

function buildOrganizationSchema({ ogImage }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'The Tantric Garden',
    alternateName: ['Tantric Garden', 'The Tantric Garden Mallorca'],
    url: SITE_URL,
    logo: ogImage,
    description: 'Centro de masaje tántrico en Mallorca · The Tantric Garden',
  };
}

function buildFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
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
  faqs,
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
  const websiteSchema = buildWebSiteSchema();
  const organizationSchema = buildOrganizationSchema({ ogImage });
  const personSchema = person
    ? buildPersonSchema({ ...person, path })
    : null;
  const faqSchema = Array.isArray(faqs) && faqs.length ? buildFAQSchema(faqs) : null;

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
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {personSchema && (
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
}
