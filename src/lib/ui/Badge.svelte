<script lang="ts">
	export let color: 'orange' | 'green' = 'green';

	const CLASS_BY_COLOR = {
		orange: 'bg-orange-100 text-orange-600',
		green: 'bg-green-100 text-green-600'
	};
</script>

<span
	class={`flex items-center gap-2 text-xs cursor-pointer px-1 py-0.5 rounded-lg ${CLASS_BY_COLOR[color]} ${$$props.class}`}
>
	<slot />
</span>
