const SurahConstant = require('./surah')

const getRoutes = (): string[] => {
  const res: string[] = [
    '/',
    '/about',
    '/all-surah',
    '/asmaul-husna',
    '/ayat-kursi',
    '/daily-doa',
    '/favorite',
    '/last-verse',
    '/recommendation',
    '/settings'
  ]
  for (let i = 1; i < 115; i++) {
    res.push(`/${i}`)
    const surahObj = SurahConstant.find(item => item.index === i)
    if (surahObj) {
      for (let j = 1; j < surahObj.ayah_count + 1; j++) {
        // res.push(`/${i}/${j}`)
      }
    }
  }
  return res
}

export default getRoutes
