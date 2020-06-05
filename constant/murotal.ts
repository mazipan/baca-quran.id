import { __makeThreeDigit } from '~/utils/index'

export default {
  // https://quran.kemenag.go.id/cmsq/source/s01/002001.mp3
  // surah from 001 (al-fatihah) three digits
  getAudioFromKemenag: (surah, verse) => {
    const surahThreeDigit = __makeThreeDigit(surah)
    const verseThreeDigit = __makeThreeDigit(verse)
    const res = `https://quran.kemenag.go.id/cmsq/source/s01/${surahThreeDigit}${verseThreeDigit}.mp3`

    return res
  }
}
