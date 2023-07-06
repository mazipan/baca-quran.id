import { writable } from 'svelte/store';

export const activeTheme = writable('');

// Settings storage -- START
export const settingTranslation = writable(false);
export const settingTafsir = writable(false);
export const settingMuqadimah = writable(false);
export const settingAudio = writable('1');
// Settings storage -- END
