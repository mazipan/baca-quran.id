import { TITLE_CONSTANTS } from '$lib/constants';
import { writable } from 'svelte/store';

export type VerseShareSheetParam = {
	show: boolean;
	title: string;
	translation: string;
	verse: string;
	numberSurah: string;
	numberVerse: string;
	type?: 'arabic' | 'terjemah';
};

const HASHTAG = '#AyatHariIni';

function createVerseShareSheet() {
	const { subscribe, set, update } = writable<VerseShareSheetParam>({
		show: false,
		title: '',
		translation: '',
		verse: '',
		numberSurah: '',
		numberVerse: '',
		type: 'arabic'
	});

	return {
		subscribe,
		hide: () =>
			update((preVal) => ({
				...preVal,
				show: false
			})),
		share: async (params: Omit<VerseShareSheetParam, 'show'>) => {
			const TEXT_ARABIC = `${params.verse} (QS ${params.numberSurah}:${params.numberVerse}) ${HASHTAG}`;
			const TEXT_TERJEMAH = `${params.translation} (QS ${params.numberSurah}:${params.numberVerse}) ${HASHTAG}`;
			const TEXT = params?.type === 'arabic' ? TEXT_ARABIC : TEXT_TERJEMAH;
			const shareData = {
				title: 'Baca-Quran.id',
				text: TEXT,
				url: `${TITLE_CONSTANTS.PATH}surah/${params.numberSurah}/${params.numberVerse}/`
			};

			try {
				if (typeof navigator !== 'undefined' && typeof navigator.share !== 'undefined') {
					await navigator.share(shareData);
				} else {
					window.open(
						`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareData.text)}+%0A+${
							shareData.url
						}`,
						'_blank'
					);
				}
			} catch (err) {
				console.error(`Error when exec navigator.share: ${err}`);
			}
		},
		show: (params: Omit<VerseShareSheetParam, 'show' | 'type'>) => {
			return set({
				...params,
				show: true
			});
		}
	};
}

export const verseShareSheet = createVerseShareSheet();
