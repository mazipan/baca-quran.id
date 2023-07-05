/* eslint-disable @typescript-eslint/no-var-requires */
import { redirect } from '@sveltejs/kit';
import allSurahInfo from '../../../../data/surah-info';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  if (params.surahid && params.verseid) {
    const isSurahNotNumber = Number.isNaN(params.surahid);
    const surahIdWithFallback = isSurahNotNumber ? 1 : params.surahid;
    const isVerseNotNumber = Number.isNaN(params.verseid);
    const verseIdWithFallback = isVerseNotNumber ? 1 : params.verseid;
    try {
      const surahData = await import(`../../../../data/surah-data/${surahIdWithFallback}.ts`);
      const surahInfo = await import(`../../../../data/surah-info/${surahIdWithFallback}.ts`);

      if (surahData) {
        return {
          surahid: surahIdWithFallback,
          verseid: verseIdWithFallback,
          verseData: {
            text: surahData.default[surahIdWithFallback].text[verseIdWithFallback],
            translation: surahData.default[surahIdWithFallback].translations.id.text[verseIdWithFallback],
            tafsir: surahData.default[surahIdWithFallback].tafsir.id.kemenag.text[verseIdWithFallback]
          },
          surahInfo: surahInfo.default
        };
      }
    } catch (error) {
      console.error("Error loading data in route '/[surahid]/[verseid]'", params, error)
    }
    return {
      surahid: params.surahid,
      verseid: params.verseid,
      verseData: null,
      surahInfo: null,
    };
  }

  throw redirect(307, '/');
}

export const prerender = true;
export const trailingSlash = 'always';

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
  const allSurahAndVerse = []
  for (let indexSurah = 0; indexSurah < 114; indexSurah++) {
    const info = allSurahInfo[`${indexSurah + 1}`]
    const allVerses = info.ayah_count
    for (let indexVerse = 0; indexVerse < allVerses; indexVerse++) {
      allSurahAndVerse.push({
        surahid: `${indexSurah + 1}`,
        verseid: `${indexVerse + 1}`,
      })
    }
  }
  return allSurahAndVerse
}
