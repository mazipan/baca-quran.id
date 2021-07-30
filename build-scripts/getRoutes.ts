import SurahConstant from './surah'

const getRoutes = (): string[] => {
  const res: string[] = [
    '/',
    '/about',
    '/all-surah',
    '/asmaul-husna',
    '/ayat-kursi',
    '/daily-doa',
    '/tahlil',
    '/favorite',
    '/last-verse',
    '/recommendation',
    '/settings',
    '/wirid',
    '/juz-amma',

    '/amp/asmaul-husna',
    '/amp/ayat-kursi',
    '/amp/daily-doa',
    '/amp/tahlil',
    '/amp/recommendation',
    '/amp/wirid',
    '/amp/all-surah',
    '/amp/juz-amma'
  ]
  for (let i = 1; i < 115; i++) {
    res.push(`/${i}`)
    res.push(`/amp/${i}`)
    const surahObj = SurahConstant.find(item => item.index === i)
    if (surahObj) {
      for (let j = 1; j < surahObj.ayah_count + 1; j++) {
        res.push(`/${i}/${j}`)
        res.push(`/amp/${i}/${j}`)
      }
    }
  }
  return res
}

export default getRoutes
