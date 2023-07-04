import { writable } from 'svelte/store';

export const CONSTANTS = {
  STORAGE_KEY: {
    TRANSLATION: 'trsla',
    TAFSIR: 'tfsr',
    MUKADIMAH: 'mkdmh',
    AUDIO: 'aud',
  }
};

export const activeTheme = writable('');

// Settings storage -- START
export const settingTranslation = writable(false);
export const settingTafsir = writable(false);
export const settingMuqadimah = writable(false);
export const settingAudio = writable(false);
// Settings storage -- END
