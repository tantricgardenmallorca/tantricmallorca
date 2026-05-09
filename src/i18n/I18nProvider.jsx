import { useCallback, useEffect, useMemo, useState } from 'react';
import es from './locales/es.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import { I18nContext } from './context.js';
import { DEFAULT_LOCALE, STORAGE_KEY, SUPPORTED_LOCALES } from './config.js';

const DICTIONARIES = { es, en, fr, de };

function detectInitialLocale() {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;
  const nav = (window.navigator?.language || '').slice(0, 2).toLowerCase();
  if (SUPPORTED_LOCALES.includes(nav)) return nav;
  return DEFAULT_LOCALE;
}

function lookup(dict, key) {
  const parts = key.split('.');
  let cur = dict;
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in cur) {
      cur = cur[p];
    } else {
      return undefined;
    }
  }
  return cur;
}

function interpolate(template, vars) {
  if (typeof template !== 'string' || !vars) return template;
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) =>
    vars[k] != null ? String(vars[k]) : '',
  );
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(detectInitialLocale);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (!SUPPORTED_LOCALES.includes(next)) return;
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage may be blocked */
    }
  }, []);

  const t = useCallback(
    (key, vars) => {
      const value =
        lookup(DICTIONARIES[locale], key) ??
        lookup(DICTIONARIES[DEFAULT_LOCALE], key);
      if (value == null) return key;
      if (typeof value === 'string') return interpolate(value, vars);
      return value;
    },
    [locale],
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
