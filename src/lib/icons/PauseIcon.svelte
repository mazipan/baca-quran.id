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
	<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
</svg>
