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
    '/settings'
  ]
  for (let i = 1; i < 115; i++) {
    res.push(`/${i}`)
    res.push(`/${i}/1`)
  }
  return res
}

export default getRoutes
