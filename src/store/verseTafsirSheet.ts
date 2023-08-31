import { writable } from 'svelte/store';

export type VerseTafsirSheetParam = {
	show: boolean;
	title: string;
	translation: string;
	tafsir: string;
};

function createVerseTafsirSheet() {
	const { subscribe, set, update } = writable<VerseTafsirSheetParam>({
		show: false,
		title: '',
		translation: '',
		tafsir: ''
	});
	return {
		subscribe,
		hide: () =>
			update((preVal) => ({
				...preVal,
				show: false
			})),
		show: (params: Pick<VerseTafsirSheetParam, 'title' | 'translation' | 'tafsir'>) => {
			return set({
				...params,
				show: true
			});
		}
	};
}

export const verseTafsirSheet = createVerseTafsirSheet();
