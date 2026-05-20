<script lang="ts">
	interface Props {
		color?: 'neutral' | 'blue' | 'green' | 'orange' | 'red' | 'purple';
		size?: 'sm' | 'md';
		active?: boolean;
		onClick?: (event: MouseEvent) => void;
		ariaLabel?: string;
		children?: import('svelte').Snippet;
		class?: string;
	}

	let {
		color = 'neutral',
		size = 'md',
		active = false,
		onClick,
		ariaLabel = '',
		children,
		class: clazz = ''
	}: Props = $props();

	const COLOR_MAP = {
		neutral: 'bg-secondary text-foreground',
		blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200',
		green: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200',
		orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200',
		red: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200',
		purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200'
	};

	const SIZE_MAP = {
		sm: 'text-xs px-2 py-0.5',
		md: 'text-sm px-3 py-1'
	};

	const activeRing = $derived(active ? 'ring-2 ring-blue-500' : '');
</script>

{#if onClick}
	<button
		type="button"
		onclick={onClick}
		aria-label={ariaLabel}
		aria-pressed={active}
		class={`inline-flex items-center gap-1 rounded-full font-medium cursor-pointer transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 ${COLOR_MAP[color]} ${SIZE_MAP[size]} ${activeRing} ${clazz}`}
	>
		{@render children?.()}
	</button>
{:else}
	<span
		class={`inline-flex items-center gap-1 rounded-full font-medium ${COLOR_MAP[color]} ${SIZE_MAP[size]} ${activeRing} ${clazz}`}
	>
		{@render children?.()}
	</span>
{/if}
