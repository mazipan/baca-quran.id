<!-- @migration-task Error while migrating Svelte code: _$$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang="ts">
	interface Props {
		_as?: 'div' | 'a';
		href?: string;
		id?: string;
		children?: import('svelte').Snippet;
		class?: string;
	}

	let { _as = 'div', href = '', id = '', children, class: clazz }: Props = $props();
</script>

{#if _as === 'div'}
	<div class={`relative rounded-lg overflow-hidden shadow p-4 bg-secondary ${clazz}`} {id}>
		{@render children?.()}
	</div>
{:else}
	<a class={`relative rounded-lg overflow-hidden shadow p-4 bg-secondary ${clazz}`} {href} {id}>
		{@render children?.()}
	</a>
{/if}
