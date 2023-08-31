<script lang="ts">
	import ChevronRightIcon from './icons/ChevronRightIcon.svelte';

	interface BreadcrumbItem {
		text: string;
		href: string;
	}
	export let items: BreadcrumbItem[] = [];
</script>

<div class="flex gap-1 items-center">
	{#each items as item, idx (item.href)}
		<a href={item.href} class="px-2 py-1 text-sm rounded bg-secondary"><span>{item.text}</span></a>
		{#if idx < items.length - 1}
			<span><ChevronRightIcon size="sm" /></span>
		{/if}
	{/each}
</div>
