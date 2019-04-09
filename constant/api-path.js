const isProd = (process.env.NODE_ENV === 'production')
const PROD_PATH = 'https://www.quran-offline.xyz/'
const rootPath = isProd ? PROD_PATH : PROD_PATH

export default {
  SURAH_INFO: `${rootPath}data/surah-info.json`,
  SURAH_BY_ID: id => `${rootPath}data/surah/${id}.json`,
  AYAT_KURSI: `${rootPath}data/ayat-kursi.json`,
  ASMAUL_HUSNA: `${rootPath}data/asmaul-husna.json`,
  DAILY_DOA: `${rootPath}data/daily-doa.json`
}
