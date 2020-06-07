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

    '/amp/asmaul-husna',
    '/amp/ayat-kursi',
    '/amp/daily-doa',
    '/amp/tahlil',
    '/amp/recommendation',
    '/amp/wirid'
  ]
  for (let i = 1; i < 115; i++) {
    res.push(`/${i}`)
    res.push(`/amp/${i}`)
    res.push(`/${i}/1`)
    res.push(`/${i}/2`)
  }
  return res
}

export default getRoutes
