import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

import verseCountPerSurah from './scripts/verseCountPerSurah.js';
import { staticUrls } from './scripts/routes.js';

const allSurahAndVerse = []
for (let indexSurah = 0; indexSurah < 114; indexSurah++) {
  allSurahAndVerse.push(`/surah/${indexSurah + 1}`)
  const verseCount = verseCountPerSurah[`${indexSurah + 1}`]
  for (let indexVerse = 0; indexVerse < verseCount; indexVerse++) {
    allSurahAndVerse.push(`/surah/${indexSurah + 1}/${indexVerse + 1}`)
  }
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess({
    preserve: ['ld+json']
  }),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: false,
    }),
    prerender: {
      crawl: true,
      entries: ['*', ...staticUrls, ...allSurahAndVerse],
      handleEntryGeneratorMismatch: 'warn'
    }
  }
};

export default config;
