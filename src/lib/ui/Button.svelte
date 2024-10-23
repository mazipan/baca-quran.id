<script lang="ts">
	interface Props {
		onClick: (event: MouseEvent) => void;
		variant?: 'subtle' | 'filled' | 'outline';
		ariaLabel?: string;
		children?: import('svelte').Snippet;
		class?: string;
	}

	let { onClick, variant = 'filled', ariaLabel = '', children, class: clazz }: Props = $props();
</script>

{#if variant === 'subtle'}
	<button
		type="button"
		tabindex="0"
		onclick={onClick}
		class={`flex items-center gap-2 bg-secondary cursor-pointer p-2 rounded-md ${clazz}`}
		aria-label={ariaLabel}
	>
		{@render children?.()}
	</button>
{:else if variant === 'filled'}
	<button
		type="button"
		tabindex="0"
		onclick={onClick}
		class={`flex bg-primary items-center gap-2 cursor-pointer p-2 rounded-md focus:ring-2 focus:ring-blue-500 ${clazz}`}
		aria-label={ariaLabel}
	>
		{@render children?.()}
	</button>
{:else if variant === 'outline'}
	<button
		type="button"
		tabindex="0"
		onclick={onClick}
		class={`flex items-center gap-2 cursor-pointer p-2 rounded-md border border-primary ${clazz}`}
		aria-label={ariaLabel}
	>
		{@render children?.()}
	</button>
{/if}
