import { get, writable } from 'svelte/store';

export type GlobalBottomSheetParam = {
	show: boolean;
	title: string;
	content: string;
};

function createGlobalBottomSheet() {
	const store = writable<GlobalBottomSheetParam>({
		show: false,
		title: '',
		content: ''
	});

	return {
		subscribe: store.subscribe,
		hide: () =>
			store.update((previous) => ({
				...previous,
				show: false
			})),
		show: (params: Pick<GlobalBottomSheetParam, 'title' | 'content'>) => {
			return store.set({
				...params,
				show: true
			});
		},
		toggle: (params: Pick<GlobalBottomSheetParam, 'title' | 'content'>) => {
			const prev = get(store);

			if (prev.show) {
				if (prev.title === params.title) {
					return store.set({
						...params,
						show: false
					});
				}
			}

			return store.set({
				...params,
				show: true
			});
		}
	};
}

export const globalBottomSheet = createGlobalBottomSheet();
