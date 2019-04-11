import { __makeThreeDigit } from '../utils/index'

export default {
  availableAudio: [{
    id: 'kemenag',
    text: 'Kemenag'
  }],
  // https://quran.kemenag.go.id/api/source/s01/001002.mp3
  // surah from 001 (al-fatihah) three digits
  getAudioFromKemenag: (surah, verse) => {
    const surahThreeDigit = __makeThreeDigit(surah)
    const verseThreeDigit = __makeThreeDigit(verse)
    const res = `https://quran.kemenag.go.id/api/source/s01/${surahThreeDigit}${verseThreeDigit}.mp3`

    return res
  }
}
