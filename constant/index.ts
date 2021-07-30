export const AppConstant = {
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
  SURAT_LIST: 'Daftar Surat',
  ABOUT: 'Tentang',
  BISMILLAH: '﷽'
}

const postfix = (withTafsir: boolean) => `beserta terjemahan${withTafsir ? ' dan tafsir dari Kemenag' : ''}, ❌ tanpa iklan, ❌ tanpa analitik, ✅ gratis sepenuhnya`
export const META_TITLE = `Baca Al-Qur'an dari browser | ${AppConstant.TITLE_META}`
export const META_DESC = `Bacaan lengkap ayat-ayat Al-Qur'an ${postfix(true)}`

export const META_TITLE_ALL_SURAH = `Semua Surat Al-Qur'an | ${AppConstant.TITLE_META}`
export const META_DESC_ALL_SURAH = `Daftar semua surat dalam Al-Qur'an ${postfix(false)}`

export const META_TITLE_JUZ_AMMA = `Juz Amma (Juz 30) Al-Qur'an | ${AppConstant.TITLE_META}`
export const META_DESC_JUZ_AMMA = `Daftar semua surat Juz Amma (Juz 30) dalam Al-Qur'an ${postfix(false)}`

export const META_TITLE_ASMAUL_HUSNA = `Asmaul husna beserta terjemahan | ${AppConstant.TITLE_META}`
export const META_DESC_ASMAUL_HUSNA = `Daftar lengkap asmaul husna ${postfix(false)}`

export const META_TITLE_AYAT_KURSI = `Bacaan ayat kursi beserta terjemahan | ${AppConstant.TITLE_META}`
export const META_DESC_AYAT_KURSI = `Bacaan ayat kursi ${postfix(false)}`

export const META_TITLE_DAILY_DOA = `Daftar lengkap do'a harian beserta terjemahan | ${AppConstant.TITLE_META}`
export const META_DESC_DAILY_DOA = `Daftar lengkap do'a harian ${postfix(false)}`

export const META_TITLE_TAHLIL = `Bacaan lengkap tahlil beserta terjemahan | ${AppConstant.TITLE_META}`
export const META_DESC_TAHLIL = `Bacaan lengkap tahlil ${postfix(false)}`

export const META_TITLE_WIRID = `Bacaan lengkap wirid setelah sholat | ${AppConstant.TITLE_META}`
export const META_DESC_WIRID = `Bacaan lengkap wirid setelah sholat ${postfix(false)}`

export const META_TITLE_LAST_VERSE = `Ayat terakhir dibaca | ${AppConstant.TITLE_META}`
export const META_TITLE_SETTING = `Halaman setelan | ${AppConstant.TITLE_META}`

export const META_TITLE_RECOMMENDATION = `Surat rekomendasi | ${AppConstant.TITLE_META}`
export const META_DESC_RECOMMENDATION = `Berbagai surat rekomendasi untuk dibaca ${postfix(false)}`

export const META_TITLE_SURAH = (name: string) => `Qur'an Surat ${name} | ${AppConstant.TITLE_META}`
export const META_DESC_SURAH = (name: string) => `Qur'an Surat ${name} ${postfix(true)}`

export const META_TITLE_AYAH = (verseid, name: string) => `Ayat ke ${verseid || 1}, QS ${name} | ${AppConstant.TITLE_META}`
export const META_DESC_AYAH = (verseid, name: string) => `Ayat ke ${verseid || 1}, QS ${name} ${postfix(true)}`
