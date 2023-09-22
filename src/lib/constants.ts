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
		THEME: 'theme'
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

export const META_TITLE_TASBIH = `Tasbih Online | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_TASBIH = `Tasbih online, mempermudah menghitung Dzikirmu ${postfix(false)}`;

export const META_TITLE_JADWAL_SHOLAT = `Jadwal sholat | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_JADWAL_SHOLAT = `Jadwal sholat sesuai lokasi 💯 gratis, ❌ tanpa iklan, ❌ tanpa analitik`;

export const META_TITLE_SURAH = (name: string) =>
	`Qur'an Surat ${name} | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_SURAH = (name: string) => `Qur'an Surat ${name} ${postfix(true)}`;

export const META_TITLE_AYAH = (verseid: string, surahid: string, name: string, translation: string) =>
	`QS ${surahid}:${verseid}, Surat ${name} - ${translation}, Ayat ${verseid || 1} | ${TITLE_CONSTANTS.TITLE_META}`;
export const META_DESC_AYAH = (verseid: string, surahid: string, name: string, translation: string) =>
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
	| 'JADWAL_SHOLAT';

export const SEO_TEXT = {
	ALL_SURAH:
		'Baca Quran lengkap 30 Juz 114 Surat beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	MAKKIYAH:
		'Baca Quran Surat-Surat Makkiyah beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	MADANIYAH:
		'Baca Quran Surat-Surat Madaniyah beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	ASMAUL_HUSNA:
		'Daftar Asmaul Husna, lengkap dengan tulisan arab dan artinya. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	AYAT_KURSI:
		'Bacaan Ayat Kursi dengan terjemahan bahasa Indonesia. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	DAILY_DOA:
		"Kumpulan bacaan Do'a sehari-hari untuk anak dan dewasa beserta tulisan latin dan terjemahan bahasa Indonesia. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.",
	JUZ_AMMA:
		"Baca Juz Amma (Qur'an Juz 30) beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.",
	TAHLIL:
		'Bacaan Tahlil lengkap beserta urutan dan tata caranya. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	WIRID:
		'Bacaan, urutan dan tata cara Wirid setelah sholat. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	TASBIH:
		'Tasbih online, mempermudah menghitung Dzikirmu. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
	JADWAL_SHOLAT:
		'Jadwal sholat terlengkap. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
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
  // -- issue with hsl conversion
	// {
	// 	name: 'sepia',
	// 	bg: '#704214',
	// 	border: '#FFF'
	// },
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
