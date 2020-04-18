const getOfflineAssets = (): string[] => {
  const res: string[] = [
    '/favicon.ico',
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/favicon-96x96.png',
    '/icon-192x192.png',
    '/icon-nosquare.png',
    '/icon-nosquare50.png',
    '/icon.png',
    '/data/surah-info.json'
  ]

  for (let i = 1; i < 115; i++) {
    res.push(`/data/surah/${i}.json`)
  }
  return res
}

export default getOfflineAssets;
