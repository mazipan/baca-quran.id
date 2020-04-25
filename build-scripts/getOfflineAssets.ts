const getOfflineAssets = (): string[] => {
  const res: string[] = [
    '/star-logo-color-32.png',
    '/star-logo-color-64.png',
    '/star-logo-color.png',
    '/icon.png',
    '/read-quran.svg',
    '/icon_allah.svg',
    '/icon_clock.svg',
    '/icon_prayer.svg',
    '/icon_quran.svg',
    '/icon_ramadhan.svg',
    '/icon_rosary.svg',
    '/illustration_1.jpg',
    '/illustration_2.jpg',
    '/illustration_3.jpg'
    // '/data/surah-info.json'
  ]

  // for (let i = 1; i < 115; i++) {
  //   res.push(`/data/surah/${i}.json`)
  // }
  return res
}

export default getOfflineAssets
