import { writable } from 'svelte/store';

export type ToastParam = {
	show: boolean;
	message: string;
	type: 'info' | 'success' | 'error' | 'warn';
};

function createToast() {
	const { subscribe, set, update } = writable<ToastParam>({
		show: false,
		message: '',
		type: 'info'
	});
	let timer: any;

	return {
		subscribe,
		hide: () =>
			update((preVal) => ({
				...preVal,
				show: false
			})),
		show: (params: Pick<ToastParam, 'message' | 'type'>) => {
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				update((preVal) => ({
					...preVal,
					show: false
				}));
			}, 3000);

			return set({
				...params,
				show: true
			});
		}
	};
}

export const toast = createToast();
