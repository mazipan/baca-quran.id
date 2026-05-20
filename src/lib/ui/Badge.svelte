<script lang="ts">
	type Variant = 'solid' | 'subtle' | 'outline';
	type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

	interface Props {
		variant?: Variant;
		color?: Color;
		children?: import('svelte').Snippet;
		class?: string;
	}

	let { variant = 'subtle', color = 'secondary', children, class: clazz = '' }: Props = $props();

	const STYLES: Record<Variant, Record<Color, string>> = {
		solid: {
			primary: 'bg-blue-600 text-white',
			secondary: 'bg-foreground text-primary',
			success: 'bg-green-600 text-white',
			warning: 'bg-orange-500 text-white',
			danger: 'bg-red-600 text-white'
		},
		subtle: {
			primary: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200',
			secondary: 'bg-secondary text-foreground',
			success: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200',
			warning: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200',
			danger: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
		},
		outline: {
			primary: 'border border-blue-500 text-blue-600 dark:text-blue-300',
			secondary: 'border border-foreground/30 text-foreground',
			success: 'border border-green-500 text-green-600 dark:text-green-300',
			warning: 'border border-orange-500 text-orange-600 dark:text-orange-300',
			danger: 'border border-red-500 text-red-600 dark:text-red-300'
		}
	};
</script>

<span
	class={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-lg font-medium ${STYLES[variant][color]} ${clazz}`}
>
	{@render children?.()}
</span>
