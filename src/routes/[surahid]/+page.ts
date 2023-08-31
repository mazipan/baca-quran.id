/* eslint-disable @typescript-eslint/no-var-requires */
import { entriesSurah } from '$lib/views/entries';
import { loadSurahData } from '$lib/views/load';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	if (params.surahid) {
		return loadSurahData(params.surahid);
	}

	throw redirect(307, '/');
}

export const prerender = true;
export const trailingSlash = 'always';

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return entriesSurah();
}
