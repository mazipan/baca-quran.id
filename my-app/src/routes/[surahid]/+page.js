/* eslint-disable @typescript-eslint/no-var-requires */
import { error } from '@sveltejs/kit';
import fs from 'node:fs'


/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	if (params.surahid) {
    const fileContent = fs.readFileSync(`../../data/quran-json/surah/${params.surahid}.json`, { encoding: 'utf8'})

    if (fileContent) {
      return {
        surahid: params.surahid,
        surahData: JSON.parse(fileContent)
      };
    }
		return {
			surahid: params.surahid,
      surahData: null
		};
	}

	throw error(404, 'Not found');
}
