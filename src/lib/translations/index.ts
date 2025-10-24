import { get } from 'svelte/store';
import { languageStore } from '../checkLanguaguage';
import idTranslations from './id.json';
import enTranslations from './en.json';

// Translation files mapping
const translations = {
  id: idTranslations,
  en: enTranslations,
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof idTranslations;

/**
 * Get translation for a given key
 * @param key - Translation key (e.g., 'common.loading', 'surah.title')
 * @param params - Optional parameters for string interpolation
 * @returns Translated string
 */
export function t(key: string, params?: Record<string, string | number>): string {
  const currentLanguage = get(languageStore) as Language;
  const translation = translations[currentLanguage] || translations.id;

  // Navigate through nested object using dot notation
  const keys = key.split('.');
  let value: any = translation;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to Indonesian if key not found
      value = translations.id;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return the key itself if not found
        }
      }
      break;
    }
  }

  if (typeof value !== 'string') {
    return key;
  }

  // Simple string interpolation
  if (params) {
    return value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
      return params[paramKey]?.toString() || match;
    });
  }

  return value;
}

/**
 * Get all translations for a specific namespace
 * @param namespace - Translation namespace (e.g., 'common', 'surah')
 * @returns Object containing all translations for the namespace
 */
export function getTranslations(namespace: keyof TranslationKeys) {
  const currentLanguage = get(languageStore) as Language;
  const translation = translations[currentLanguage] || translations.id;
  return translation[namespace];
}

/**
 * Check if a translation key exists
 * @param key - Translation key to check
 * @returns boolean indicating if the key exists
 */
export function hasTranslation(key: string): boolean {
  const currentLanguage = get(languageStore) as Language;
  const translation = translations[currentLanguage] || translations.id;

  const keys = key.split('.');
  let value: any = translation;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return false;
    }
  }

  return typeof value === 'string';
}

/**
 * Get available languages
 */
export function getAvailableLanguages() {
  return Object.keys(translations);
}

/**
 * Get current language
 */
export function getCurrentLanguage(): Language {
  return get(languageStore) as Language;
}
