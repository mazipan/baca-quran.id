<script lang="ts">
	import { CLASS_BY_SIZE, type IconSize } from './utils';

	interface Props {
		size?: IconSize;
		class?: string;
	}

	let { size = 'md', class: clazz }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class={clazz || CLASS_BY_SIZE[size]}
>
	<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>
