<script lang="ts">
	export let onClick: (event: MouseEvent) => void;
	export let variant: 'subtle' | 'filled' | 'outline' = 'filled';
	export let ariaLabel = '';
</script>

{#if variant === 'subtle'}
	<button
		type="button"
		on:click={onClick}
		class={`flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-blueish-700 dark:focus:bg-blueish-700 ${$$props.class}`}
		aria-label={ariaLabel}
	>
		<slot />
	</button>
{:else if variant === 'filled'}
	<button
		type="button"
		on:click={onClick}
		class={`flex items-center gap-2 cursor-pointer p-2 rounded-md bg-gray-100 dark:bg-blueish-700 focus:ring-2 focus:ring-blue-500 ${$$props.class}`}
		aria-label={ariaLabel}
	>
		<slot />
	</button>
{:else if variant === 'outline'}
	<button
		type="button"
		on:click={onClick}
		class={`flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-blueish-700 dark:focus:bg-blueish-700 ${$$props.class}`}
		aria-label={ariaLabel}
	>
		<slot />
	</button>
{/if}
