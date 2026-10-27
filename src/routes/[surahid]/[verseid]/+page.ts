import { redirect } from '@sveltejs/kit';
import { entriesVerse } from '#lib/views/entries.ts';
import { loadVerseData } from '#lib/views/load.ts';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	if (params.surahid && params.verseid) {
		return loadVerseData(params.surahid, params.verseid);
	}

	redirect(307, '/');
}

export const prerender = true;
export const trailingSlash = 'always';

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	return entriesVerse();
}
