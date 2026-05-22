<script lang="ts">
	import ChevronDownIcon from '$lib/icons/ChevronDownIcon.svelte';

	interface Props {
		title: string;
		open?: boolean;
		id?: string;
		children?: import('svelte').Snippet;
		class?: string;
	}

	let { title, open = false, id = '', children, class: clazz = '' }: Props = $props();

	let isOpen = $state(false);

	$effect(() => {
		isOpen = open;
	});

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div
	data-component="collapsible"
	data-id={id}
	data-open={isOpen}
	class={`rounded-md border border-secondary bg-secondary/40 overflow-hidden ${clazz}`}
>
	<button
		type="button"
		onclick={toggle}
		aria-expanded={isOpen}
		class="flex w-full items-center justify-between gap-2 p-3 text-left cursor-pointer hover:bg-secondary focus:outline-none focus:bg-secondary focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
	>
		<span class="font-semibold">{title}</span>
		<span
			class={`inline-flex transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
			aria-hidden="true"
		>
			<ChevronDownIcon size="sm" />
		</span>
	</button>

	{#if isOpen}
		<div class="p-3 border-t border-foreground/10">
			{@render children?.()}
		</div>
	{/if}
</div>
