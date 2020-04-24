const getOfflineAssets = (): string[] => {
  const res: string[] = [
    '/star-logo-color-32.png',
    '/star-logo-color-64.png',
    '/star-logo-color.png',
    '/icon.png',
    '/read-quran.svg'
    // '/data/surah-info.json'
  ]

  // for (let i = 1; i < 115; i++) {
  //   res.push(`/data/surah/${i}.json`)
  // }
  return res
}

export default getOfflineAssets
