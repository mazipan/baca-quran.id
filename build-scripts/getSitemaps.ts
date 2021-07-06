import SurahConstant from './surah'
interface defaultSetting {
  changefreq: string;
  priority: number;
  lastmod: Date;
}
interface sitemapConfigs {
  path: string;
  routes?: string[];
  sitemaps?: string[];
  exclude?: string[];
  trailingSlash: boolean;
  defaults?: defaultSetting;
}

const getStaticRoutes = (): string[] => {
  const res: string[] = [
    '/',
    '/about',
    '/all-surah',
    '/asmaul-husna',
    '/ayat-kursi',
    '/daily-doa',
    '/tahlil',
    '/recommendation',
    '/favorite',
    '/last-verse',
    '/settings',
    '/wirid'
  ]
  return res
}

const getSurahRoutes = (): string[] => {
  const res: string[] = []
  for (let i = 1; i < 115; i++) {
    res.push(`/${i}`)
    res.push(`/amp/${i}`)
  }
  return res
}

const getVerseRoutes = (surahIndex: number): string[] => {
  const res: string[] = []
  const surahObj = SurahConstant.find(item => item.index === surahIndex)
  if (surahObj) {
    for (let j = 1; j < surahObj.ayah_count + 1; j++) {
      res.push(`/${surahIndex}/${j}`)
      res.push(`/amp/${surahIndex}/${j}`)
    }
  }
  return res
}

function chunkArray (arr, len) {
  const chunks = []; let i = 0; const n = arr.length
  while (i < n) {
    chunks.push(arr.slice(i, i += len))
  }
  return chunks
}
// @ts-ignore
// eslint-disable-next-line
const getVerseSitemaps = (): sitemapConfigs[] => {
  let r: string[] = []
  for (let i = 1; i < 115; i++) {
    r = r.concat(getVerseRoutes(i))
  }

  const chunkArr = chunkArray(r, 1000)
  const result = chunkArr.map((arr, index) => {
    const surahSitemap: sitemapConfigs = {
      path: `sitemaps/allverse${index === 0 ? '' : (index + 1)}.xml`,
      routes: arr,
      exclude: getStaticRoutes(),
      trailingSlash: true,
      defaults: {
        changefreq: 'weekly',
        priority: 0.6,
        lastmod: new Date()
      }
    }
    return surahSitemap
  })

  return result
}

const getSitemaps = (): sitemapConfigs[] => {
  const staticSitemap: sitemapConfigs = {
    path: 'sitemaps/static.xml',
    routes: getStaticRoutes(),
    trailingSlash: true,
    defaults: {
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date()
    }
  }

  const surahSitemap: sitemapConfigs = {
    path: 'sitemaps/allsurah.xml',
    routes: getSurahRoutes(),
    exclude: getStaticRoutes(),
    trailingSlash: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  }

  const res: sitemapConfigs[] = [staticSitemap, surahSitemap].concat(getVerseSitemaps())
  return res
}

export default getSitemaps
