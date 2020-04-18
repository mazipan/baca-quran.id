import getRoutes from './getRoutes';

interface sitemap {
  url: string
  changefreq: string
  priority: number
  lastmodISO: string
}

const getSitemapRoutes = (): sitemap[] => {
  const res: sitemap[] = []
  getRoutes().forEach((el) => {
    const item: sitemap = {
      url: el,
      changefreq: 'daily',
      priority: 1,
      lastmodISO: String(new Date().toISOString())
    }
    res.push(item)
  })
  return res
}

export default getSitemapRoutes;
