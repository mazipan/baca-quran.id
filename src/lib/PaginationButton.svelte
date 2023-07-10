<script lang="ts">
	import ArrowLeftIcon from './icons/ArrowLeftIcon.svelte';
	import ArrowRightIcon from './icons/ArrowRightIcon.svelte';

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
		<ArrowLeftIcon />
	{/if}

	<span>{title}</span>

	{#if variant === 'next'}
		<ArrowRightIcon />
	{/if}
</a>
