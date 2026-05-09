import { useContext } from 'react';
import { I18nContext } from './context.js';

export function useTranslation() {
  return useContext(I18nContext);
}
