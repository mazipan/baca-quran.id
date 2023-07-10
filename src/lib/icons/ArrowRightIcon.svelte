<script lang="ts">
	import { CLASS_BY_SIZE, type IconSize } from './utils';

	export let size: IconSize = 'md';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class={$$props.class || CLASS_BY_SIZE[size]}
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
	/>
</svg>
