import { getJsonLdArticle, getJsonLdBreadcrumb } from './jsonld'
import { META_DESC_AYAH, META_DESC_SURAH, META_TITLE_AYAH, META_TITLE_SURAH } from '~/constant'
import { SurahInfo, SurahInfoJson } from '~/models/SurahInfo'

const _getAllSurah = async () => {
  const resp: SurahInfoJson = await import('~/data/surah-info.json')

  const allSurahList: SurahInfo[] = resp.surah_info.map((item) => {
    return Object.assign({}, item, { index: item.index })
  })

  return {
    allSurahList
  }
}

export const getAllSurah = async () => {
  return await _getAllSurah()
}

export const getJuzAmma = async () => {
  const resp = await _getAllSurah()

  return {
    allSurahList: resp.allSurahList.filter(i => i.index >= 78)
  }
}

export const getSurahDetail = async ({ surahid }) => {
  const respDetail = await import(
    `~/data/quran-json/surah/${surahid}.json`
  )
  // @ts-ignore: Unreachable code error
  const title = META_TITLE_SURAH(respDetail[surahid].name_latin)
  // @ts-ignore: Unreachable code error
  const description = META_DESC_SURAH(respDetail[surahid].name_latin)

  const currentSurahInfo = await import(
    `~/data/surah-info/${surahid}.json`
  )

  return {
    metaTitle: title,
    metaDesc: description,
    surahId: parseInt(surahid, 10) || 1,
    currentSurahFromList: currentSurahInfo.current,
    nextSurah: Number(surahid) >= 114 ? null : currentSurahInfo.next,
    prevSurah: Number(surahid) <= 1 ? null : currentSurahInfo.prev,
    currentSurah: respDetail[surahid],
    jsonldBreadcrumb: getJsonLdBreadcrumb({
      categoryTitle: 'Daftar Surat',
      categorySlug: 'all-surah',
      title: `${respDetail[surahid].name_latin}`,
      slug: `${surahid}`
    }),
    jsonLdArticle: getJsonLdArticle({
      desc: `${description}`,
      cover: 'meta-image.png',
      title: `${title}`,
      slug: `${surahid}`
    })
  }
}

export const getVerseDetail = async ({ surahid, verseid }) => {
  const respDetail = await import(`~/data/quran-json/surah/${surahid}.json`)
  // @ts-ignore: Unreachable code error
  const title = META_TITLE_AYAH(`${verseid}`, `${respDetail[surahid].name_latin} (${respDetail[surahid].translations.id.name})`)
  // @ts-ignore: Unreachable code error
  const description = META_DESC_AYAH(`${verseid}`, `${respDetail[surahid].name_latin} (${respDetail[surahid].translations.id.name})`)

  return {
    metaTitle: title,
    metaDesc: description,
    verseId: parseInt(verseid, 10) || 1,
    surahId: parseInt(surahid, 10) || 1,
    currentSurah: respDetail[surahid],
    jsonldBreadcrumb: getJsonLdBreadcrumb({
      categoryTitle: `QS ${surahid}`,
      categorySlug: `${surahid}`,
      title: `QS ${surahid}:${verseid}`,
      slug: `${surahid}/${verseid}`
    }),
    jsonLdArticle: getJsonLdArticle({
      desc: `${description}`,
      cover: 'meta-image.png',
      title: `${title}`,
      slug: `${surahid}/${verseid}`
    })
  }
}

export const getAsmaulHusna = async () => {
  const resp = await import('~/data/asmaul-husna.json')

  return {
    asmaulHusna: resp.data
  }
}

export const getAyatKursi = async () => {
  const resp = await import('~/data/ayat-kursi.json')

  return {
    ayatKursi: resp.data
  }
}

export const getDailyDoa = async () => {
  const resp = await import('~/data/daily-doa.json')

  return {
    dailyDoa: resp.data
  }
}

export const getTahlil = async () => {
  const resp = await import('~/data/tahlil.json')

  return {
    tahlilData: resp.data,
    tahlilSource: resp.source
  }
}

export const getWirid = async () => {
  const resp = await import('~/data/wirid.json')

  return {
    wiridData: resp.data,
    wiridSource: resp.source
  }
}
