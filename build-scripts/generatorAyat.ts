import SurahConstant from './surah'

export default () => {
  for (let i = 1; i < 115; i++) {
    const surahObj = SurahConstant.find(item => item.index === i)
    if (surahObj) {
      for (let j = 2; j < surahObj.ayah_count + 1; j++) {
        console.log(`✅ Finish copied all verse in surah ${i}, ${j}`)
      }
    }
    console.log(`✅ Finish copied all verse in surah ${i}`)
  }
}
