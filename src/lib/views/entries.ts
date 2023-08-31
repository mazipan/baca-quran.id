import allSurahInfo from '$data/surah-info';

export async function entriesVerse() {
	const allSurahAndVerse = [];
	for (let indexSurah = 0; indexSurah < 114; indexSurah++) {
		const info = allSurahInfo[`${indexSurah + 1}`];
		const allVerses = info.ayah_count;
		for (let indexVerse = 0; indexVerse < allVerses; indexVerse++) {
			allSurahAndVerse.push({
				surahid: `${indexSurah + 1}`,
				verseid: `${indexVerse + 1}`
			});
		}
	}
	return allSurahAndVerse;
}

export function entriesSurah() {
	const allSurah = [];
	for (let index = 0; index < 114; index++) {
		allSurah.push(index + 1);
	}

	return allSurah.map((surahId) => ({
		surahid: `${surahId}`
	}));
}
