import { getSurahDetail } from './asyncData'

export const validateVerseDetail = async ({ surahid, verseid }): Promise<boolean> => {
  const isNotNumberSurah = isNaN(surahid)
  const isNotNumberVerse = isNaN(verseid)
  if (isNotNumberSurah || isNotNumberVerse) {
    return false
  }

  const surahInNumber = parseInt(surahid, 10)
  const verseInNumber = parseInt(verseid, 10)

  if (surahInNumber > 0 && surahInNumber < 115) {
    const surahDetail = await getSurahDetail({ surahid })
    const totalAyah = parseInt(surahDetail?.currentSurah?.number_of_ayah || 0, 10)
    if (verseInNumber > totalAyah) {
      return false
    }
    return true
  }

  return false // will stop Nuxt.js to render the route and display the error page
}
