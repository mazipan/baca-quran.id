const SurahConstant = require('./surah')

interface sitemapConfigs {
  path: string;
  routes?: string[];
  sitemaps?: string[];
  exclude?: string[];
  gzip?: boolean;
}

const getStaticRoutes = (): string[] => {
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
  return res
}

const getSurahRoutes = (): string[] => {
  const res: string[] = []
  for (let i = 1; i < 115; i++) {
    res.push(`/${i}`)
  }
  return res
}

const getVerseRoutes = (surahIndex: number): string[] => {
  const res: string[] = []
  const surahObj = SurahConstant.find(item => item.index === surahIndex)
  if (surahObj) {
    for (let j = 1; j < surahObj.ayah_count + 1; j++) {
      res.push(`/${surahIndex}/${j}`)
    }
  }
  return res
}

const getVerseSitemaps = (): sitemapConfigs[] => {
  const res: sitemapConfigs[] = []
  for (let i = 1; i < 115; i++) {
    const surahSitemap: sitemapConfigs = {
      path: `sitemap-verse-${i}.xml`,
      routes: getVerseRoutes(i),
      gzip: true,
      exclude: getStaticRoutes()
    }
    res.push(surahSitemap)
  }
  return res
}

const getSitemaps = (): sitemapConfigs[] => {
  const staticSitemap: sitemapConfigs = {
    path: 'sitemap-statics.xml',
    routes: getStaticRoutes(),
    gzip: true
  }

  const surahSitemap: sitemapConfigs = {
    path: 'sitemap-surah.xml',
    routes: getSurahRoutes(),
    gzip: true,
    exclude: getStaticRoutes()
  }

  const res: sitemapConfigs[] = [staticSitemap, surahSitemap].concat(getVerseSitemaps())
  return res
}

export default getSitemaps
