<script lang="ts">
	export let href: string;
	export let title: string;
	export let variant: 'next' | 'prev';
</script>

<a
	{href}
	class="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
	data-sveltekit-reload
>
	{#if variant === 'prev'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
			/>
		</svg>
	{/if}

	<span>{title}</span>

	{#if variant === 'next'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
			/>
		</svg>
	{/if}
</a>
