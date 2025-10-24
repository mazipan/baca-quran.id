import { writable } from "svelte/store";
export const LANGUAGE_OPTIONS = {
  INDONESIAN: {
    label: 'Indonesia',
    locale: 'id',
    flag: '🇮🇩',
  },
  ENGLISH: {
    label: 'English',
    locale: 'en',
    flag: '🇺🇸',
  },
  // Add more languages here
} as const;

export function CheckLanguage() {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return LANGUAGE_OPTIONS.INDONESIAN.locale;
  }

  try {
    const lang = localStorage.getItem('language');
    console.log('Current language:', lang);
    if (lang != null) {
      for (const key in LANGUAGE_OPTIONS) {
        if (LANGUAGE_OPTIONS[key as keyof typeof LANGUAGE_OPTIONS].locale === lang) {
          return lang;
        }
      }
    }
    return LANGUAGE_OPTIONS.INDONESIAN.locale;
  } catch (error) {
    console.error('Language check failed:', error);
    return LANGUAGE_OPTIONS.INDONESIAN.locale;
  }
}


export const languageStore = writable(LANGUAGE_OPTIONS.INDONESIAN.locale);
