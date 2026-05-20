<script lang="ts">
	type Variant = 'solid' | 'subtle' | 'outline' | 'ghost';
	type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
	type Size = 'xs' | 'sm' | 'md' | 'lg';

	interface Props {
		onClick: (event: MouseEvent) => void;
		variant?: Variant;
		color?: Color;
		size?: Size;
		ariaLabel: string;
		disabled?: boolean;
		rounded?: 'md' | 'full';
		children?: import('svelte').Snippet;
		class?: string;
		[key: `data-${string}`]: string | undefined;
	}

	let {
		onClick,
		variant = 'ghost',
		color = 'secondary',
		size = 'md',
		ariaLabel,
		disabled = false,
		rounded = 'md',
		children,
		class: clazz = '',
		...rest
	}: Props = $props();

	const SIZE_MAP: Record<Size, string> = {
		xs: 'w-6 h-6',
		sm: 'w-8 h-8',
		md: 'w-10 h-10',
		lg: 'w-12 h-12'
	};

	const STYLES: Record<Variant, Record<Color, string>> = {
		solid: {
			primary: 'bg-primary text-foreground border border-foreground/20 hover:bg-secondary',
			secondary: 'bg-secondary text-foreground border border-foreground/20 hover:opacity-90',
			info: 'bg-blue-600 text-white hover:bg-blue-700',
			success: 'bg-green-600 text-white hover:bg-green-700',
			warning: 'bg-orange-500 text-white hover:bg-orange-600',
			danger: 'bg-red-600 text-white hover:bg-red-700'
		},
		subtle: {
			primary: 'bg-primary text-foreground hover:opacity-80',
			secondary: 'bg-secondary text-foreground hover:opacity-80',
			info: 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100',
			success:
				'bg-green-100 text-green-700 hover:bg-green-200 dark:bg-green-900 dark:text-green-100',
			warning:
				'bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-100',
			danger: 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900 dark:text-red-100'
		},
		outline: {
			primary: 'border border-foreground/40 text-foreground hover:bg-primary',
			secondary: 'border border-foreground/30 text-foreground hover:bg-secondary',
			info: 'border border-blue-500 text-blue-600 hover:bg-blue-50 dark:text-blue-300',
			success: 'border border-green-500 text-green-600 hover:bg-green-50 dark:text-green-300',
			warning: 'border border-orange-500 text-orange-600 hover:bg-orange-50 dark:text-orange-300',
			danger: 'border border-red-500 text-red-600 hover:bg-red-50 dark:text-red-300'
		},
		ghost: {
			primary: 'text-foreground hover:bg-primary',
			secondary: 'text-foreground hover:bg-secondary',
			info: 'text-blue-600 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-900/40',
			success: 'text-green-600 hover:bg-green-100 dark:text-green-300 dark:hover:bg-green-900/40',
			warning:
				'text-orange-600 hover:bg-orange-100 dark:text-orange-300 dark:hover:bg-orange-900/40',
			danger: 'text-red-600 hover:bg-red-100 dark:text-red-300 dark:hover:bg-red-900/40'
		}
	};
</script>

<button
	type="button"
	onclick={onClick}
	{disabled}
	aria-label={ariaLabel}
	class={`inline-flex items-center justify-center transition focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${SIZE_MAP[size]} ${rounded === 'full' ? 'rounded-full' : 'rounded-md'} ${STYLES[variant][color]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${clazz}`}
	{...rest}
>
	{@render children?.()}
</button>
