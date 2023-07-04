/* eslint-disable @typescript-eslint/no-var-requires */
import { error } from '@sveltejs/kit';

export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  if (params.surahid && params.verseid) {
    const isSurahNotNumber = Number.isNaN(params.surahid);
    const surahIdWithFallback = isSurahNotNumber ? 1 : params.surahid;
    const isVerseNotNumber = Number.isNaN(params.verseid);
    const verseIdWithFallback = isVerseNotNumber ? 1 : params.verseid;
    try {
      const surahData = await import(`../../../data/surah-data/${surahIdWithFallback}.ts`);
      const surahInfo = await import(`../../../data/surah-info/${surahIdWithFallback}.ts`);

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
      console.error(error)
    }
    return {
      surahid: params.surahid,
      verseid: params.verseid,
      verseData: null,
      surahInfo: null,
    };
  }

  throw error(404, 'Not found');
}
