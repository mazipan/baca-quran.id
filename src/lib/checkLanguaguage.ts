import { writable } from "svelte/store";
import { LANGUAGE_OPTIONS } from "./constants";

export function CheckLanguage() {

  try {
  const lang = localStorage.getItem('language') ; 
  console.log('Current language:', lang);
if (lang != null) {
  for (const key in LANGUAGE_OPTIONS) {
    if (LANGUAGE_OPTIONS[key as keyof typeof LANGUAGE_OPTIONS].locale === lang) {
      return lang; 
    }
  }}
  return LANGUAGE_OPTIONS.INDONESIAN.locale;
}catch (error) {
  		console.error('Language check failed:', error);

  return LANGUAGE_OPTIONS.INDONESIAN.locale;


}}


export const languageStore = writable(CheckLanguage());
