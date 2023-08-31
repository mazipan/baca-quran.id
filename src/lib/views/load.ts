export async function loadSurahData(surahid: string) {
	try {
		const isNotNumber = Number.isNaN(surahid);
		const surahIdWithFallback = isNotNumber ? 1 : surahid;
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
		console.error("Error loading data in route '/[surahid]'", surahid, error);
	}

	return {
		surahid: surahid,
		surahData: null,
		surahInfo: null
	};
}

export async function loadVerseData(surahid: string, verseid: string) {
	const isSurahNotNumber = Number.isNaN(surahid);
	const surahIdWithFallback = isSurahNotNumber ? 1 : surahid;
	const isVerseNotNumber = Number.isNaN(verseid);
	const verseIdWithFallback = isVerseNotNumber ? 1 : verseid;
	try {
		const surahData = await import(`../../data/surah-data/${surahIdWithFallback}.ts`);
		const surahInfo = await import(`../../data/surah-info/${surahIdWithFallback}.ts`);

		if (surahData) {
			return {
				surahid: surahIdWithFallback,
				verseid: verseIdWithFallback,
				verseData: {
					text: surahData.default[surahIdWithFallback].text[verseIdWithFallback],
					translation:
						surahData.default[surahIdWithFallback].translations.id.text[verseIdWithFallback],
					tafsir: surahData.default[surahIdWithFallback].tafsir.id.kemenag.text[verseIdWithFallback]
				},
				surahInfo: surahInfo.default
			};
		}
	} catch (error) {
		console.error("Error loading data in route '/[surahid]/[verseid]'", params, error);
	}
	return {
		surahid: surahid,
		verseid: verseid,
		verseData: null,
		surahInfo: null
	};
}
