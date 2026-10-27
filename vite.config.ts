import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-static';
import * as child_process from 'node:child_process';

import verseCountPerSurah from './scripts/verseCountPerSurah.js';
import { staticUrls } from './scripts/routes.js';

type Route = `/${string}`;

const allSurahAndVerse: Route[] = [];
for (let indexSurah = 0; indexSurah < 114; indexSurah++) {
	allSurahAndVerse.push(`/${indexSurah + 1}`);
	allSurahAndVerse.push(`/amp/${indexSurah + 1}`);
	allSurahAndVerse.push(`/surah/${indexSurah + 1}`);
	const verseCount = verseCountPerSurah[(indexSurah + 1) as keyof typeof verseCountPerSurah];
	for (let indexVerse = 0; indexVerse < verseCount; indexVerse++) {
		allSurahAndVerse.push(`/${indexSurah + 1}/${indexVerse + 1}`);
		allSurahAndVerse.push(`/amp/${indexSurah + 1}/${indexVerse + 1}`);
		allSurahAndVerse.push(`/surah/${indexSurah + 1}/${indexVerse + 1}`);
	}
}

const isCIBuild = process.env.CI_BUILD === 'true';

const gitRev = child_process.execSync('git rev-parse --short HEAD').toString().trim() || '';

const dateRev = new Date()
	.toLocaleDateString('en-CA', {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		timeZone: 'Asia/Jakarta'
	})
	.replace(/-|\//g, '.');

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			// Consult https://kit.svelte.dev/docs/integrations#preprocessors
			// for more information about preprocessors
			preprocess: vitePreprocess(),

			version: {
				name: `${gitRev}-${dateRev}`
			},
			// Deprecated in Kit 3 in favour of subpath imports; kept to avoid rewriting every $lib import.
			alias: {
				$lib: 'src/lib',
				$data: 'src/data',
				$store: 'src/store'
			},
			// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
			// If your environment is not supported or you settled on a specific environment, switch out the adapter.
			// See https://kit.svelte.dev/docs/adapters for more information about adapters.
			adapter: adapter({
				// default options are shown. On some platforms
				// these options are set automatically — see below
				pages: 'build',
				assets: 'build',
				fallback: '404.html',
				precompress: false,
				strict: true
			}),
			prerender: {
				crawl: false,
				entries: isCIBuild
					? ['/', ...(staticUrls as Route[]), '/1', '/1/1', '/amp/1', '/amp/1/1']
					: ['/', ...(staticUrls as Route[]), ...allSurahAndVerse],
				handleEntryGeneratorMismatch: 'warn'
			}
		})
	]
});
