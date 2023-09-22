<script lang="ts">
	export let onClick: (event: MouseEvent) => void;
	export let variant: 'subtle' | 'filled' | 'outline' = 'filled';
	export let ariaLabel = '';
</script>

{#if variant === 'subtle'}
	<button
		type="button"
    tabindex="0"
		on:click={onClick}
		class={`flex items-center gap-2 bg-secondary cursor-pointer p-2 rounded-md ${$$props.class}`}
		aria-label={ariaLabel}
	>
		<slot />
	</button>
{:else if variant === 'filled'}
	<button
		type="button"
    tabindex="0"
		on:click={onClick}
		class={`flex bg-primary items-center gap-2 cursor-pointer p-2 rounded-md focus:ring-2 focus:ring-blue-500 ${$$props.class}`}
		aria-label={ariaLabel}
	>
		<slot />
	</button>
{:else if variant === 'outline'}
	<button
		type="button"
    tabindex="0"
		on:click={onClick}
		class={`flex items-center gap-2 cursor-pointer p-2 rounded-md border border-primary ${$$props.class}`}
		aria-label={ariaLabel}
	>
		<slot />
	</button>
{/if}
