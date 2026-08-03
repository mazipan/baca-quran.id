<script lang="ts">
	import { iconClass, type IconSize } from './utils';

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
	class={iconClass(size, clazz)}
>
	<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5l-7.5-7.5 7.5-7.5" />
</svg>
