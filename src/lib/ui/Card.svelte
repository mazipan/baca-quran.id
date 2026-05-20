<script lang="ts">
	interface Props {
		variant?: 'filled' | 'outline' | 'elevated';
		padding?: 'none' | 'sm' | 'md' | 'lg';
		as?: 'div' | 'a' | 'article' | 'section';
		href?: string;
		id?: string;
		title?: string;
		subtitle?: string;
		header?: import('svelte').Snippet;
		footer?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
		class?: string;
	}

	let {
		variant = 'filled',
		padding = 'md',
		as = 'div',
		href = '',
		id = '',
		title = '',
		subtitle = '',
		header,
		footer,
		children,
		class: clazz = ''
	}: Props = $props();

	const VARIANT_MAP = {
		filled: 'bg-secondary',
		outline: 'bg-primary border border-foreground/20',
		elevated: 'bg-secondary shadow-md'
	};

	const PADDING_MAP = {
		none: 'p-0',
		sm: 'p-3',
		md: 'p-4',
		lg: 'p-6'
	};

	const baseClass = $derived(
		`relative rounded-lg overflow-hidden ${VARIANT_MAP[variant]} ${clazz}`
	);
	const contentPadding = $derived(PADDING_MAP[padding]);
	const isInteractive = $derived(as === 'a' && Boolean(href));
	const interactiveClass = $derived(
		isInteractive ? 'block hover:shadow-md transition-shadow focus:ring-2 focus:ring-blue-500' : ''
	);

	const showHeader = $derived(Boolean(header || title || subtitle));
</script>

{#snippet inner()}
	{#if showHeader}
		<div class={`${contentPadding} ${footer || children ? 'border-b border-foreground/10' : ''}`}>
			{#if header}
				{@render header()}
			{:else}
				{#if title}<h3 class="font-semibold">{title}</h3>{/if}
				{#if subtitle}<p class="text-xs opacity-75 mt-0.5">{subtitle}</p>{/if}
			{/if}
		</div>
	{/if}

	{#if children}
		<div class={contentPadding}>
			{@render children()}
		</div>
	{/if}

	{#if footer}
		<div class={`${contentPadding} border-t border-foreground/10 bg-primary/40`}>
			{@render footer()}
		</div>
	{/if}
{/snippet}

{#if as === 'a'}
	<a class={`${baseClass} ${interactiveClass}`} {href} {id}>
		{@render inner()}
	</a>
{:else if as === 'article'}
	<article class={baseClass} {id}>
		{@render inner()}
	</article>
{:else if as === 'section'}
	<section class={baseClass} {id}>
		{@render inner()}
	</section>
{:else}
	<div class={baseClass} {id}>
		{@render inner()}
	</div>
{/if}
