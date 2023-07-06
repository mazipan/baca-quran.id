<script lang="ts">
	export let onClick: (event: MouseEvent) => void;
	export let variant: 'subtle' | 'filled' | 'outline' = 'filled';
</script>

{#if variant === 'subtle'}
	<button
		on:click={onClick}
		class="cursor-pointer p-2 rounded-md hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-blueish-700 dark:focus:bg-blueish-700"
	>
		<slot />
	</button>
{:else}
	<button
		on:click={onClick}
		class="cursor-pointer p-2 rounded-md hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-blueish-700 dark:focus:bg-blueish-700"
	>
		<slot />
	</button>
{/if}
