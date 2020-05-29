export const AppConstant = {
  PATH: 'https://www.baca-quran.id/',
  TITLE: "Baca Qur'an",
  LAST_READ: 'Terakhir dibaca',
  FAVORITE: 'Surat favorit',
  RECOMMENDATION: 'Surat rekomendasi',
  SEARCH_PAGE: 'Pencarian surat',
  AYAT_KURSI: 'Ayat kursi',
  ASMAUL_HUSNA: 'Asmaul husna',
  DAILY_DOA: "Do'a harian",
  TAHLIL: 'Do\'a Tahlil',
  ABOUT: 'Tentang',
  BISMILLAH: '﷽'
}

const postfix = (withTafsir: boolean) => `beserta terjemahan${withTafsir ? ' dan tafsir resmi dari Kemenag' : ''}, baca langsung dari browser Anda, ❌ tanpa ada iklan, ❌ tanpa ada analitik, ✅ gratis sepenuhnya`
export const META_TITLE = `Baca Al-Qur'an dari browser | ${AppConstant.TITLE}`
export const META_DESC = `Ayat-ayat Al-Qur'an ${postfix(true)}`

export const META_TITLE_ALL_SURAH = `Daftar semua surat dalam Al-Qur'an | ${AppConstant.TITLE}`
export const META_DESC_ALL_SURAH = `Daftar semua surat dalam Al-Qur'an ${postfix(false)}`

export const META_TITLE_ASMAUL_HUSNA = `Daftar lengkap asmaul husna beserta terjemahan | ${AppConstant.TITLE}`
export const META_DESC_ASMAUL_HUSNA = `Daftar lengkap asmaul husna ${postfix(false)}`

export const META_TITLE_AYAT_KURSI = `Bacaan ayat kursi beserta terjemahan | ${AppConstant.TITLE}`
export const META_DESC_AYAT_KURSI = `Bacaan ayat kursi ${postfix(false)}`

export const META_TITLE_DAILY_DOA = `Daftar lengkap do'a harian beserta terjemahan | ${AppConstant.TITLE}`
export const META_DESC_DAILY_DOA = `Daftar lengkap do'a harian ${postfix(false)}`

export const META_TITLE_TAHLIL = `Surat rekomendasi | ${AppConstant.TITLE}`
export const META_DESC_TAHLIL = `Berbagai surat rekomendasi ${postfix(false)}`

export const META_TITLE_LAST_VERSE = `Ayat terakhir dibaca | ${AppConstant.TITLE}`
export const META_TITLE_SETTING = `Halaman setelan | ${AppConstant.TITLE}`
export const META_TITLE_RECOMMENDATION = `Surat rekomendasi | ${AppConstant.TITLE}`
export const META_DESC_RECOMMENDATION = `Berbagai surat rekomendasi ${postfix(false)}`

export const META_TITLE_SURAH = (name: string) => `Qur'an Surat ${name} | ${AppConstant.TITLE}`
export const META_DESC_SURAH = (name: string) => `Qur'an Surat ${name} ${postfix(false)}`

export const META_TITLE_AYAH = (verseid, name: string) => `Qur'an Surat ke ${verseid}, Surat ${name} | ${AppConstant.TITLE}`
export const META_DESC_AYAH = (verseid, name: string) => `Qur'an Surat ke ${verseid}, ${name} ${postfix(false)}`
