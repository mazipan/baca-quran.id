import { writable } from 'svelte/store';

export type SeoArgs = {
  surahLatin: string
  verseNumber?: string
}
export type PageVariant = 'ALL_SURAH' | 'ASMAUL_HUSNA' | 'AYAT_KURSI' | 'DAILY_DOA' | 'JUZ_AMMA' | 'TAHLIL' | 'WIRID' | 'SURAH_DETAIL' | 'AYAT_DETAIL'

export const SEO_TEXT = {
  ALL_SURAH: 'Baca Quran lengkap 30 Juz 114 Surat beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  ASMAUL_HUSNA: 'Daftar Asmaul Husna, lengkap dengan tulisan arab dan artinya. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  AYAT_KURSI: 'Bacaan Ayat Kursi dengan terjemahan bahasa Indonesia. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  DAILY_DOA: 'Kumpulan bacaan Do\'a sehari-hari untuk anak dan dewasa beserta tulisan latin dan terjemahan bahasa Indonesia. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  JUZ_AMMA: 'Baca Juz Amma (Qur\'an Juz 30) beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  TAHLIL: 'Bacaan Tahlil lengkap beserta urutan dan tata caranya. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  WIRID: 'Bacaan, urutan dan tata cara Wirid setelah sholat. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  SURAH_DETAIL: '',
  AYAT_DETAIL: ''
}

export const SEO_TEXT_DYNAMIC = {
  SURAH_DETAIL: ({ surahLatin }: SeoArgs) => `Baca Quran Surat ${surahLatin} beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`,
  AYAT_DETAIL: ({ surahLatin, verseNumber }: SeoArgs) => `Baca Quran Surat ${surahLatin} Ayat ${String(verseNumber)} beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`
}

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
