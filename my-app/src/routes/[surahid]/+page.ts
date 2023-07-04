/* eslint-disable @typescript-eslint/no-var-requires */
import { error } from '@sveltejs/kit';

export const prerender = true

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  if (params.surahid) {
    try {
      const surahData = await import(`../../data/surah-data/${params.surahid}.ts`);
      const surahInfo = await import(`../../data/surah-info/${params.surahid}.ts`);

      if (surahData) {
        return {
          surahid: params.surahid,
          surahData: surahData.default[params.surahid],
          surahInfo: surahInfo.default
        };
      }
    } catch (error) {
      console.error(error)
    }
    return {
      surahid: params.surahid,
      surahData: null,
      surahInfo: null,
    };
  }

  throw error(404, 'Not found');
}
