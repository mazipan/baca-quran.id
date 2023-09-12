import path from 'node:path';
import { createSitemap, createSitemapIndex } from 'sitemaps';

import verseCountPerSurah from './verseCountPerSurah.js';
import { staticUrls } from './routes.js';

const BASE_URL = 'https://www.baca-quran.id';
const BASE_DIR_TARGET = path.resolve(path.join('static/sitemaps'));

function makeObjectSitemap(url, priority = 0.5) {
	const date = new Date();
	date.setHours(0, 0, 0, 0);
	return {
		loc: BASE_URL + url,
		lastmod: date.toISOString(),
		changefreq: 'weekly',
		priority: priority
	};
}

const allSurahObject = [];
const allVerseObject = [];

for (let indexSurah = 0; indexSurah < 114; indexSurah++) {
	allSurahObject.push(makeObjectSitemap(`/surah/${indexSurah + 1}/`, 0.7));
	allSurahObject.push(makeObjectSitemap(`/amp/${indexSurah + 1}/`, 0.7));
	allSurahObject.push(makeObjectSitemap(`/${indexSurah + 1}/`, 0.7));

	const verseCount = verseCountPerSurah[`${indexSurah + 1}`];

	for (let indexVerse = 0; indexVerse < verseCount; indexVerse++) {
		allVerseObject.push(makeObjectSitemap(`/surah/${indexSurah + 1}/${indexVerse + 1}/`));
		allVerseObject.push(makeObjectSitemap(`/amp/${indexSurah + 1}/${indexVerse + 1}/`));
		allVerseObject.push(makeObjectSitemap(`/${indexSurah + 1}/${indexVerse + 1}/`));
	}
}

const staticUrlsObject = staticUrls.map((url) => makeObjectSitemap(url, 0.8));

createSitemap({
	filePath: path.join(BASE_DIR_TARGET, 'static.xml'),
	urls: staticUrlsObject
});
console.log(`>> Write static sitemap with ${staticUrls.length} urls...`);

createSitemap({
	filePath: path.join(BASE_DIR_TARGET, 'surah.xml'),
	urls: allSurahObject
});
console.log(`>> Write surah sitemap with ${allSurahObject.length} urls...`);

function chunk(arr, chunkSize) {
	return arr.reduce((resultArray, item, index) => {
		const chunkIndex = Math.floor(index / chunkSize);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = []; // start a new chunk
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);
}

const verseChunks = chunk(allVerseObject, 500);

console.log(`🚨 Split ${allVerseObject.length} verses into ${verseChunks.length} chunks...`);

const verseChunksUrls = [];
// Generate from chunks sitemaps
for (let index = 0; index < verseChunks.length; index++) {
	const chunk = verseChunks[index];

	verseChunksUrls.push(`/sitemaps/verse-${index + 1}.xml`);
	createSitemap({
		filePath: path.join(BASE_DIR_TARGET, `verse-${index + 1}.xml`),
		urls: chunk
	});
	console.log(`>>> Write verse sitemap, chunk ${index + 1} with ${chunk.length} urls...`);
}

const indexSitemaps = ['/sitemaps/static.xml', '/sitemaps/surah.xml', ...verseChunksUrls];
const indexUrlsObject = indexSitemaps.map((url) => makeObjectSitemap(url, 0.8));

createSitemapIndex({
	filePath: path.join(BASE_DIR_TARGET, 'sitemap-index.xml'),
	sitemaps: indexUrlsObject
});

console.log(`>> Write index sitemap with ${indexSitemaps.length} urls...`);

console.log(`✅ All Done!`);
