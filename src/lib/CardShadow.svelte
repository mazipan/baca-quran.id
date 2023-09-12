<script lang="ts">
	export let _as: 'div' | 'a' = 'div';
	export let href = '';
	export let id = '';
</script>

{#if _as === 'div'}
	<div class={`relative rounded-lg overflow-hidden shadow  p-4 bg-secondary ${$$props.class}`} {id}>
		<slot />
	</div>
{:else}
	<a
		class={`relative rounded-lg overflow-hidden shadow  p-4 bg-secondary ${$$props.class}`}
		{href}
    {id}
	>
		<slot />
	</a>
{/if}
