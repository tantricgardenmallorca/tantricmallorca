import { createContext } from 'react';
import { DEFAULT_LOCALE } from './config.js';

export const I18nContext = createContext({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (key) => key,
});
