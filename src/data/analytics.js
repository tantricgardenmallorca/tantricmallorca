// Google Analytics 4 — Measurement ID.
// Opción A: define VITE_GA_ID en las variables de entorno del proyecto en Vercel
//           (Production + Preview) y vuelve a desplegar.
// Opción B: pega aquí el ID directamente como fallback: || 'G-XXXXXXXXXX'.
// Si queda vacío, Analytics y el banner de cookies no se cargan (no-op).
export const GA_ID = import.meta.env.VITE_GA_ID || '';

export const CONSENT_KEY = 'tg_cookie_consent'; // 'granted' | 'denied'

function gtag() {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

let initialized = false;

export function getStoredConsent() {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(CONSENT_KEY); // 'granted' | 'denied' | null
  } catch {
    return null;
  }
}

function grantConsent() {
  gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  });
}

// Carga gtag.js con Consent Mode v2 (todo denegado por defecto hasta aceptar).
export function initAnalytics() {
  if (initialized || !GA_ID || typeof window === 'undefined') return;
  initialized = true;

  window.dataLayer = window.dataLayer || [];
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  });

  if (getStoredConsent() === 'granted') grantConsent();

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  gtag('js', new Date());
  gtag('config', GA_ID, { send_page_view: false });
}

export function setConsent(granted) {
  try {
    localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied');
  } catch {
    /* ignore */
  }
  if (granted) grantConsent();
}

export function trackPageView(path) {
  if (!GA_ID || typeof window === 'undefined') return;
  gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
