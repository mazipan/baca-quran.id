export interface LoadedVerse {
	arabic: string;
	translation: string;
	surahLatin: string;
}

export async function loadVerse(surahId: number, verseId: number): Promise<LoadedVerse> {
	const surahMod = await import(`../../data/surah-data/${surahId}.ts`);
	const surahInfoMod = await import(`../../data/surah-info/${surahId}.ts`);
	const surah = surahMod.default[String(surahId)];
	const surahInfo = surahInfoMod.default.current;
	return {
		arabic: surah.text[String(verseId)],
		translation: surah.translations.id.text[String(verseId)],
		surahLatin: surahInfo.latin
	};
}
