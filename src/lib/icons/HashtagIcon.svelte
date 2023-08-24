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
		d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
	/>
</svg>
