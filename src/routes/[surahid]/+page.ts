/* eslint-disable @typescript-eslint/no-var-requires */
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  if (params.surahid) {
    try {
      const isNotNumber = Number.isNaN(params.surahid);
      const surahIdWithFallback = isNotNumber ? 1 : params.surahid;
      const surahData = await import(`../../data/surah-data/${surahIdWithFallback}.ts`);
      const surahInfo = await import(`../../data/surah-info/${surahIdWithFallback}.ts`);

      if (surahData) {
        return {
          surahid: surahIdWithFallback,
          surahData: surahData.default[surahIdWithFallback],
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

export const prerender = true;

/** @type {import('./$types').EntryGenerator} */
export function entries() {
  const allSurah = []
  for (let index = 0; index < 114; index++) {
    allSurah.push(index + 1)
  }

  return allSurah.map(surahId => ({
    surahid: `${surahId}`
  }))
}
