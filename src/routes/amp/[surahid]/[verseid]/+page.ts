/* eslint-disable @typescript-eslint/no-var-requires */
import { redirect } from '@sveltejs/kit';
import { entriesVerse } from '$lib/views/entries';
import { loadVerseData } from '$lib/views/load';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	if (params.surahid && params.verseid) {
		return loadVerseData(params.surahid, params.verseid);
	}

	throw redirect(307, '/');
}

export const prerender = true;
export const trailingSlash = 'always';

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	return entriesVerse();
}
