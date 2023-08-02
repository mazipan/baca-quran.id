<script lang="ts">
	import XMarkIcon from '../icons/XMarkIcon.svelte';
	import Button from './Button.svelte';

	export let show = false;
	export let title = '';
	export let id = '';
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	export let onClose: () => void = () => {};
</script>

<div class="relative">
	<div
		data-component="bottom-sheet"
    data-id={id}
		data-show={show}
		class={`fixed bottom-0 left-0 z-50 ml-4 max-w-[500px] text-gray-700 border-2 border-gray-200 bg-white rounded-2xl shadow-lg dark:text-gray-400 dark:bg-blueish-800 dark:border-blueish-900 transition-all duration-500 transform ${
			show ? 'translate-y-[10%]' : 'translate-y-[120%]'
		}`}
    style="width: calc(100% - 2rem)"
		role="alert"
	>
		<div class="flex justify-between items-center p-4 gap-2 rounded-t-2xl bg-gray-200 dark:bg-blueish-900">
      <h3 class="text-xl font-bold">{title}</h3>
      <Button onClick={onClose}>
        <XMarkIcon />
      </Button>
		</div>

		<div class="mb-16 text-sm font-normal overflow-auto max-h-[500px]">
			<slot />
		</div>
	</div>
</div>
