export const AppConstant = {
  PATH: 'https://www.baca-quran.id/',
  TITLE: "Baca Qur'an",
  TITLE_META: "Baca-Quran.id",
  LAST_READ: 'Terakhir dibaca',
  FAVORITE: 'Surat favorit',
  RECOMMENDATION: 'Surat rekomendasi',
  SEARCH_PAGE: 'Pencarian surat',
  AYAT_KURSI: 'Ayat kursi',
  ASMAUL_HUSNA: 'Asmaul husna',
  DAILY_DOA: "Do'a harian",
  TAHLIL: 'Do\'a Tahlil',
  WIRID: 'Wirid',
  ABOUT: 'Tentang',
  BISMILLAH: '﷽'
}

const postfix = (withTafsir: boolean) => `beserta terjemahan${withTafsir ? ' dan tafsir resmi dari Kemenag' : ''}, baca langsung dari browser Anda, ❌ tanpa ada iklan, ❌ tanpa ada analitik, ✅ gratis sepenuhnya`
export const META_TITLE = `Baca Al-Qur'an dari browser | ${AppConstant.TITLE_META}`
export const META_DESC = `Ayat-ayat Al-Qur'an ${postfix(true)}`

export const META_TITLE_ALL_SURAH = `Daftar semua surat dalam Al-Qur'an | ${AppConstant.TITLE_META}`
export const META_DESC_ALL_SURAH = `Daftar semua surat dalam Al-Qur'an ${postfix(false)}`

export const META_TITLE_ASMAUL_HUSNA = `Daftar lengkap asmaul husna beserta terjemahan | ${AppConstant.TITLE_META}`
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
export const META_DESC_RECOMMENDATION = `Berbagai surat rekomendasi ${postfix(false)}`

export const META_TITLE_SURAH = (name: string) => `Qur'an Surat ${name} | ${AppConstant.TITLE_META}`
export const META_DESC_SURAH = (name: string) => `Qur'an Surat ${name} ${postfix(false)}`

export const META_TITLE_AYAH = (verseid, name: string) => `Qur'an Surat ke ${verseid || 1}, Surat ${name} | ${AppConstant.TITLE_META}`
export const META_DESC_AYAH = (verseid, name: string) => `Qur'an Surat ke ${verseid || 1}, ${name} ${postfix(false)}`
