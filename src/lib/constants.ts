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
  TAHLIL: 'Do\'a Tahlil',
  WIRID: 'Wirid',
  JUZ_AMMA: 'Juz Amma',
  TASBIH: 'Tasbih',
  SURAT_LIST: 'Daftar Surat',
  ABOUT: 'Tentang',
}

export const CONSTANTS = {
  STORAGE_KEY: {
    TRANSLATION: 'trsla',
    TAFSIR: 'tfsr',
    MUKADIMAH: 'mkdmh',
    AUDIO: 'aud',
  },
  BISMILLAH: '﷽'
};


const postfix = (withTafsir: boolean) => `beserta terjemahan${withTafsir ? ' dan tafsir dari Kemenag' : ''}, ❌ tanpa iklan, ❌ tanpa analitik, ✅ gratis sepenuhnya`
export const META_TITLE = `Baca Al-Qur'an dari browser | ${TITLE_CONSTANTS.TITLE_META}`
export const META_DESC = `Bacaan lengkap ayat-ayat Al-Qur'an ${postfix(true)}`

export const META_TITLE_ALL_SURAH = `Semua Surat Al-Qur'an | ${TITLE_CONSTANTS.TITLE_META}`
export const META_DESC_ALL_SURAH = `Daftar semua surat dalam Al-Qur'an ${postfix(false)}`

export const META_TITLE_JUZ_AMMA = `Juz Amma (Juz 30) Al-Qur'an | ${TITLE_CONSTANTS.TITLE_META}`
export const META_DESC_JUZ_AMMA = `Daftar semua surat Juz Amma (Juz 30) dalam Al-Qur'an ${postfix(false)}`

export const META_TITLE_ASMAUL_HUSNA = `Asmaul husna beserta terjemahan | ${TITLE_CONSTANTS.TITLE_META}`
export const META_DESC_ASMAUL_HUSNA = `Daftar lengkap asmaul husna ${postfix(false)}`

export const META_TITLE_AYAT_KURSI = `Bacaan ayat kursi beserta terjemahan | ${TITLE_CONSTANTS.TITLE_META}`
export const META_DESC_AYAT_KURSI = `Bacaan ayat kursi ${postfix(false)}`

export const META_TITLE_DAILY_DOA = `Daftar lengkap do'a harian beserta terjemahan | ${TITLE_CONSTANTS.TITLE_META}`
export const META_DESC_DAILY_DOA = `Daftar lengkap do'a harian ${postfix(false)}`

export const META_TITLE_TAHLIL = `Bacaan lengkap tahlil beserta terjemahan | ${TITLE_CONSTANTS.TITLE_META}`
export const META_DESC_TAHLIL = `Bacaan lengkap tahlil ${postfix(false)}`

export const META_TITLE_WIRID = `Bacaan lengkap wirid setelah sholat | ${TITLE_CONSTANTS.TITLE_META}`
export const META_DESC_WIRID = `Bacaan lengkap wirid setelah sholat ${postfix(false)}`

export const META_TITLE_TASBIH = `Tasbih Online | ${TITLE_CONSTANTS.TITLE_META}`
export const META_DESC_TASBIH = `Tasbih online, mempermudah menghitung Dzikirmu ${postfix(false)}`

export const META_TITLE_LAST_VERSE = `Ayat terakhir dibaca | ${TITLE_CONSTANTS.TITLE_META}`
export const META_TITLE_SETTING = `Halaman setelan | ${TITLE_CONSTANTS.TITLE_META}`

export const META_TITLE_RECOMMENDATION = `Surat rekomendasi | ${TITLE_CONSTANTS.TITLE_META}`
export const META_DESC_RECOMMENDATION = `Berbagai surat rekomendasi untuk dibaca ${postfix(false)}`

export const META_TITLE_SURAH = (name: string) => `Qur'an Surat ${name} | ${TITLE_CONSTANTS.TITLE_META}`
export const META_DESC_SURAH = (name: string) => `Qur'an Surat ${name} ${postfix(true)}`

export const META_TITLE_AYAH = (verseid: string, name: string) => `Ayat ke ${verseid || 1}, QS ${name} | ${TITLE_CONSTANTS.TITLE_META}`
export const META_DESC_AYAH = (verseid: string, name: string) => `Ayat ke ${verseid || 1}, QS ${name} ${postfix(true)}`

export type SeoArgs = {
  surahLatin: string
  verseNumber?: string
}

export type PageVariant = 'ALL_SURAH' | 'ASMAUL_HUSNA' | 'AYAT_KURSI' | 'DAILY_DOA' | 'JUZ_AMMA' | 'TAHLIL' | 'WIRID' | 'SURAH_DETAIL' | 'AYAT_DETAIL' | 'TASBIH'

export const SEO_TEXT = {
  ALL_SURAH: 'Baca Quran lengkap 30 Juz 114 Surat beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  ASMAUL_HUSNA: 'Daftar Asmaul Husna, lengkap dengan tulisan arab dan artinya. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  AYAT_KURSI: 'Bacaan Ayat Kursi dengan terjemahan bahasa Indonesia. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  DAILY_DOA: 'Kumpulan bacaan Do\'a sehari-hari untuk anak dan dewasa beserta tulisan latin dan terjemahan bahasa Indonesia. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  JUZ_AMMA: 'Baca Juz Amma (Qur\'an Juz 30) beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  TAHLIL: 'Bacaan Tahlil lengkap beserta urutan dan tata caranya. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  WIRID: 'Bacaan, urutan dan tata cara Wirid setelah sholat. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  TASBIH: 'Tasbih online, mempermudah menghitung Dzikirmu. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.',
  SURAH_DETAIL: '',
  AYAT_DETAIL: ''
}

export const SEO_TEXT_DYNAMIC = {
  SURAH_DETAIL: ({ surahLatin }: SeoArgs) => `Baca Quran Surat ${surahLatin} beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`,
  AYAT_DETAIL: ({ surahLatin, verseNumber }: SeoArgs) => `Baca Quran Surat ${surahLatin} Ayat ${String(verseNumber)} beserta terjemahan bahasa Indonesia dan tafsir dari Kemenag. Langsung dari peramban, tanpa iklan, tanpa analitik, privasi aman dan gratis sepenuhnya.`
}
