/* eslint-disable @typescript-eslint/no-var-requires */
import { error } from '@sveltejs/kit';

export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  if (params.surahid && params.verseid) {
    try {
      const surahData = await import(`../../../data/surah-data/${params.surahid}.ts`);
      const surahInfo = await import(`../../../data/surah-info/${params.surahid}.ts`);

      if (surahData) {
        return {
          surahid: params.surahid,
          verseid: params.verseid,
          verseData: {
            text: surahData.default[params.surahid].text[params.verseid],
            translation: surahData.default[params.surahid].translations.id.text[params.verseid],
            tafsir: surahData.default[params.surahid].tafsir.id.kemenag.text[params.verseid]
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
