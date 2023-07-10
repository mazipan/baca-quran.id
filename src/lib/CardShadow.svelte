<script lang="ts">
	export let _as: 'div' | 'a' = 'div';
	export let href = '';
</script>

{#if _as === 'div'}
	<div class={`relative rounded-lg overflow-hidden shadow border p-4 bg-gray-50 dark:bg-blueish-800 dark:border-blueish-800 ${$$props.class}`}>
		<slot />
	</div>
{:else}
	<a class={`relative rounded-lg overflow-hidden shadow border p-4 bg-gray-50 dark:bg-blueish-800 dark:border-blueish-800 ${$$props.class}`} href={href}>
		<slot />
	</a>
{/if}
