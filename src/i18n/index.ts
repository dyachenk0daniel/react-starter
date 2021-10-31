import i18n from 'i18next';
import resources from './resources';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['ru', 'en'],
    detection: {
      order: [
        'path',
        'subdomain',
        'htmlTag',
        'queryString',
        'cookie',
        'navigator',
        'localStorage',
      ],
      lookupFromPathIndex: 0,
    },
    resources,
  });

export default i18n;
