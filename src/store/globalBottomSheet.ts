import { writable } from 'svelte/store';

export type GlobalBottomSheetParam = {
	show: boolean;
	title: string;
	content: string;
};

function createGlobalBottomSheet() {
	const { subscribe, set, update } = writable<GlobalBottomSheetParam>({
		show: false,
		title: '',
		content: ''
	});
	return {
		subscribe,
		hide: () =>
			update((preVal) => ({
				...preVal,
				show: false
			})),
		show: (params: Pick<GlobalBottomSheetParam, 'title' | 'content'>) => {
			return set({
				...params,
				show: true
			});
		}
	};
}

export const globalBottomSheet = createGlobalBottomSheet();
