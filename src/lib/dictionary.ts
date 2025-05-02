import type { Locale } from '@/i18n.config';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  ar: () => import('@/dictionaries/ar.json').then(module => module.default)
};

export const getDictionary = async (locale: Locale) => {
  if (!locale || !dictionaries[locale]) {
    return dictionaries.ar();
  }

  try {
    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Error loading dictionary for locale: ${locale}`, error);
    return dictionaries.ar();
  }
};