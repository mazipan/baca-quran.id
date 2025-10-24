import { get } from "svelte/store";
import { LANGUAGE_OPTIONS, languageStore } from "./checkLanguaguage";

export const TITLE_CONSTANTS = {
	PATH: 'https://www.baca-quran.id/',
	TITLE: "Baca Qur'an",
	TITLE_META: 'Baca-Quran.id',
	LAST_READ: 'Terakhir Dibaca',
	FAVORITE: 'Surat Favorit',
	RECOMMENDATION: 'Surat Rekomendasi',
	ERROR: 'Error',
	SEARCH_PAGE: 'Pencarian surat',
	AYAT_KURSI: 'Ayat Kursi',
	ASMAUL_HUSNA: 'Asmaul Husna',
	DAILY_DOA: "Do'a Harian",
	TAHLIL: "Do'a Tahlil",
	WIRID: 'Wirid',
	JUZ_AMMA: 'Juz Amma',
	TASBIH: 'Tasbih',
	SURAT_LIST: 'Daftar Surat',
	ABOUT: 'Tentang'
};
export const CONSTANTS = {
	STORAGE_KEY: {
		TRANSLATION: 'trsla',
		TAFSIR: 'tfsr',
		MUKADIMAH: 'mkdmh',
		AUDIO: 'aud',
		AUTO_NEXT: 'anxt',
		PINNED_SURAH: 'srh',
		LAST_VERSES: 'vres',
		LOCATION: 'loc',
		PRAYER: 'pryr',
		THEME: 'theme',
		LOG_PRAYER: 'log'
	},
	BISMILLAH: '﷽'
};
const postfix = (withTafsir: boolean) =>
	`beserta terjemahan${
		withTafsir ? ' dan tafsir dari Kemenag' : ''
	}, 💸 gratis sepenuhnya, 💫 tanpa iklan, 📈 tanpa analitik`;
export const META_TITLE = `Qur'an Online Gratis | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC = `Bacaan lengkap Al-Qur'an 30 Juz ${postfix(true)}`;

export const META_TITLE_ALL_SURAH = `Semua Surat Al-Qur'an | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_ALL_SURAH = `Daftar semua surat dalam Al-Qur'an ${postfix(false)}`;

export const META_TITLE_MAKKIYAH = `Surat Makkiyah Al-Qur'an | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_MAKKIYAH = `Daftar semua surat-surat Makkiyah dalam Al-Qur'an ${postfix(
	false
)}`;

export const META_TITLE_MADANIYAH = `Surat Madaniyah Al-Qur'an | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_MADANIYAH = `Daftar semua surat-surat Madaniyah dalam Al-Qur'an ${postfix(
	false
)}`;

export const META_TITLE_JUZ_AMMA = `Juz Amma (Juz 30) Al-Qur'an | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_JUZ_AMMA = `Daftar semua surat Juz Amma (Juz 30) dalam Al-Qur'an ${postfix(
	false
)}`;

export const META_TITLE_ASMAUL_HUSNA = `Asmaul husna beserta terjemahan | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_ASMAUL_HUSNA = `Daftar lengkap asmaul husna ${postfix(false)}`;

export const META_TITLE_AYAT_KURSI = `Bacaan ayat kursi beserta terjemahan | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_AYAT_KURSI = `Bacaan ayat kursi ${postfix(false)}`;

export const META_TITLE_DAILY_DOA = `Daftar lengkap do'a harian beserta terjemahan | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_DAILY_DOA = `Daftar lengkap do'a harian ${postfix(false)}`;

export const META_TITLE_TAHLIL = `Bacaan lengkap tahlil beserta terjemahan | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_TAHLIL = `Bacaan lengkap tahlil ${postfix(false)}`;

export const META_TITLE_WIRID = `Bacaan lengkap wirid setelah sholat | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_WIRID = `Bacaan lengkap wirid setelah sholat ${postfix(false)}`;

export const META_TITLE_TASBIH = `Tasbih Digital Online dari ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_TASBIH = `Tasbih digital online untuk mempermudah menghitung Dzikirmu. Gratis sepenuhnya, tanpa iklan, tanpa unduh, tanpa analitik, privasi aman`;

export const META_TITLE_JADWAL_SHOLAT = `Jadwal sholat | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_JADWAL_SHOLAT = `Jadwal sholat sesuai lokasi 💯 gratis, ❌ tanpa iklan, ❌ tanpa analitik`;

export const META_TITLE_PENCATAT_IBADAH = `Pencatat Ibadah Digital Online dari ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_PENCATAT_IBADAH = `Mulai catat ibadahmu untuk refleksi diri melalui ${TITLE_CONSTANTS.TITLE_META}. Gratis sepenuhnya, tanpa iklan, tanpa unduh, tanpa analitik, privasi aman.`;

export const META_TITLE_SURAH = (name: string) =>
	`Qur'an Surat ${name} | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_SURAH = (name: string) => `Qur'an Surat ${name} ${postfix(true)}`;

export const META_TITLE_AYAH = (
	verseid: string,
	surahid?: string,
	name?: string,
	translation?: string
) =>
	`QS ${surahid}:${verseid}, Surat ${name} - ${translation}, Ayat ${verseid || 1} | ${TITLE_CONSTANTS.TITLE_META}`;

export const META_DESC_AYAH = (
	verseid: string,
	surahid?: string,
	name?: string,
	translation?: string
) =>
	`Ayat ${verseid || 1} dari Surat ${name} - ${translation} - (QS ${surahid}:${verseid}) ${postfix(true)}`;

export type SeoArgs = {
	surahLatin: string;
	verseNumber?: string;
};

export type PageVariant =
	| 'ALL_SURAH'
	| 'ASMAUL_HUSNA'
	| 'AYAT_KURSI'
	| 'DAILY_DOA'
	| 'JUZ_AMMA'
	| 'TAHLIL'
	| 'WIRID'
	| 'SURAH_DETAIL'
	| 'AYAT_DETAIL'
	| 'TASBIH'
	| 'MAKKIYAH'
	| 'MADANIYAH'
	| 'JADWAL_SHOLAT'
	| 'CATAT_IBADAH';
		const current = get(languageStore);

export const SEO_TEXT = {
	ALL_SURAH:
		current == LANGUAGE_OPTIONS.ENGLISH.locale
			? "Read the complete Quran, 30 Juz and 114 Surahs, with English translation and tafsir from Kemenag. Directly from your browser, ad-free, analytics-free, privacy safe, and completely free."
			: 'Baca Quran Surat-Surat Makkiyah beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	MADANIYAH:
		current == LANGUAGE_OPTIONS.ENGLISH.locale
			? "Read Madaniyah Surahs of the Quran with English translation and tafsir from Kemenag. Directly from your browser, ad-free, analytics-free, privacy safe, and completely free."
			: 'Baca Quran Surat-Surat Madaniyah beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	ASMAUL_HUSNA:
		current == LANGUAGE_OPTIONS.ENGLISH.locale
			? "List of Asmaul Husna, complete with Arabic script and meanings. Directly from your browser, ad-free, analytics-free, privacy safe, and completely free."
			: 'Daftar Asmaul Husna, lengkap dengan tulisan arab dan artinya. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	AYAT_KURSI:
		current == LANGUAGE_OPTIONS.ENGLISH.locale
			? "Ayat Kursi recitation with English translation. Directly from your browser, ad-free, analytics-free, privacy safe, and completely free."
			: 'Bacaan Ayat Kursi dengan terjemahan bahasa Indonesia. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	DAILY_DOA:
		current == LANGUAGE_OPTIONS.ENGLISH.locale
			? "Collection of daily prayers for children and adults with Latin script and English translation. Directly from your browser, ad-free, analytics-free, privacy safe, and completely free."
			: "Kumpulan bacaan Do'a sehari-hari untuk anak dan dewasa beserta tulisan latin dan terjemahan bahasa Indonesia. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.",
	JUZ_AMMA:
		current == LANGUAGE_OPTIONS.ENGLISH.locale
			? "Read Juz Amma (Quran Juz 30) with English translation and tafsir from Kemenag. Directly from your browser, ad-free, analytics-free, privacy safe, and completely free."
			: "Baca Juz Amma (Qur'an Juz 30) beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.",
	TAHLIL:
		current == LANGUAGE_OPTIONS.ENGLISH.locale
			? "Complete Tahlil recitation with order and procedures. Directly from your browser, ad-free, analytics-free, privacy safe, and completely free."
			: 'Bacaan Tahlil lengkap beserta urutan dan tata caranya. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	WIRID:
		current == LANGUAGE_OPTIONS.ENGLISH.locale
			? "Recitation, order, and procedures for Wirid after prayer. Directly from your browser, ad-free, analytics-free, privacy safe, and completely free."
			: 'Bacaan, urutan dan tata cara Wirid setelah sholat. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	TASBIH:
		current == LANGUAGE_OPTIONS.ENGLISH.locale
			? "Digital tasbih online from Baca-Quran.id, making it easier to count your Dhikr. Directly from your browser, ad-free, analytics-free, privacy safe, and completely free."
			: 'Tasbih digital online dari Baca-Quran.id, mempermudah menghitung Dzikirmu. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	JADWAL_SHOLAT:
		current == LANGUAGE_OPTIONS.ENGLISH.locale
			? "Complete prayer schedule. Directly from your browser, ad-free, analytics-free, privacy safe, and completely free."
			: 'Jadwal sholat terlengkap. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	CATAT_IBADAH:
		current == LANGUAGE_OPTIONS.ENGLISH.locale
			? "Record your worship for self-reflection. Online worship tracker from your browser, ad-free, analytics-free, privacy safe, and completely free."
			: 'Catat ibadahmu untuk refleksi diri. Pencatat ibadah online dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	SURAH_DETAIL: '',
	AYAT_DETAIL: ''
};

export const SEO_TEXT_DYNAMIC = {
	SURAH_DETAIL: ({ surahLatin }: SeoArgs) =>
		`Baca Quran Surat ${surahLatin} beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`,
	AYAT_DETAIL: ({ surahLatin, verseNumber }: SeoArgs) =>
		`Baca Quran Surat ${surahLatin} Ayat ${String(
			verseNumber
		)} beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`
};

export const THEMES = [
	{
		name: 'light',
		bg: 'white',
		border: '#142C66'
	},
	{
		name: 'dark',
		bg: '#142C66',
		border: '#FFF'
	},
	{
		name: 'forest',
		bg: '#016A70',
		border: '#FFF'
	},
	{
		name: 'pinky',
		bg: '#FF597B',
		border: '#FFF'
	},
	{
		name: 'halloween',
		bg: '#451952',
		border: '#FFF'
	}
];
