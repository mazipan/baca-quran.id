<script lang="ts">
	export let _as: 'div' | 'a' = 'div';
	export let href = '';
</script>

{#if _as === 'div'}
	<div class={`relative rounded-lg overflow-hidden shadow  p-4   bg-secondary ${$$props.class}`}>
		<slot />
	</div>
{:else}
	<a class={`relative rounded-lg overflow-hidden shadow  p-4   bg-secondary ${$$props.class}`} href={href}>
		<slot />
	</a>
{/if}
