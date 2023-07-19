<script lang="ts">
	import XMarkIcon from './icons/XMarkIcon.svelte';

	export let show = false;
	export let title = '';
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	export let onClose: () => void = () => {};
</script>

<div class="relative">
	<div
		data-component="bottom-sheet"
		data-show={show}
		class={`fixed bottom-0 left-0 z-50 w-full max-w-[500px] text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 transition-all duration-500 transform ${
			show ? 'translate-y-[10%]' : 'translate-y-[120%]'
		}`}
		role="alert"
	>
		<div class="flex justify-between items-center p-4">
      <h3 class="text-xl font-bold">{title}</h3>
			<button
				type="button"
				class="ml-3 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
				aria-label="Close"
				on:click={onClose}
			>
				<XMarkIcon />
			</button>
		</div>

		<div class="mb-16 text-sm font-normal overflow-auto max-h-[500px]">
			<slot />
		</div>
	</div>
</div>
