import { derived } from 'svelte/store';
import { languageStore } from '../checkLanguaguage';
import {
	t as translateFunction,
	getTranslations,
	hasTranslation,
	getCurrentLanguage
} from './index';

/**
 * Reactive translation store that automatically updates when language changes
 */
export const t = derived(languageStore, () => translateFunction);

/**
 * Reactive translation store for specific namespace
 */
export function createNamespaceStore<N extends keyof typeof import('./id.json')>(namespace: N) {
	return derived(languageStore, () => getTranslations(namespace));
}

/**
 * Reactive store to check if translation exists
 */
export function createHasTranslationStore(key: string) {
	return derived(languageStore, () => hasTranslation(key));
}

/**
 * Reactive store for current language
 */
export const currentLanguage = derived(languageStore, () => getCurrentLanguage());
