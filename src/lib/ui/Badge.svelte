<script lang="ts">
	interface Props {
		color?: 'orange' | 'green';
		children?: import('svelte').Snippet;
		class?: string;
	}

	let { color = 'green', children, class: clazz }: Props = $props();

	const CLASS_BY_COLOR = {
		orange: 'bg-orange-100 text-orange-600',
		green: 'bg-green-100 text-green-600'
	};
</script>

<span
	class={`flex items-center gap-2 text-xs cursor-pointer px-1 py-0.5 rounded-lg ${CLASS_BY_COLOR[color]} ${clazz}`}
>
	{@render children?.()}
</span>
