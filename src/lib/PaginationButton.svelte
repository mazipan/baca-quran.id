<script lang="ts">
	import ArrowLeftIcon from './icons/ArrowLeftIcon.svelte';
	import ArrowRightIcon from './icons/ArrowRightIcon.svelte';

	interface Props {
		href: string;
		title: string;
		variant: 'next' | 'prev';
	}

	let { href, title, variant }: Props = $props();
</script>

<a
	{href}
	class={`flex items-center gap-2 py-2 px-4 rounded cursor-pointer bg-secondary`}
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
