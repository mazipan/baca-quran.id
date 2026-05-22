<script lang="ts" module>
	export type GradientName =
		| 'emerald'
		| 'blue'
		| 'violet'
		| 'rose'
		| 'amber'
		| 'cyan'
		| 'lime'
		| 'fuchsia'
		| 'sky'
		| 'pink';

	export const GRADIENTS: Record<GradientName, string> = {
		emerald: 'from-emerald-400 to-teal-600',
		blue: 'from-blue-400 to-indigo-600',
		violet: 'from-violet-400 to-purple-600',
		rose: 'from-rose-400 to-pink-600',
		amber: 'from-amber-400 to-orange-500',
		cyan: 'from-cyan-400 to-sky-600',
		lime: 'from-lime-500 to-emerald-600',
		fuchsia: 'from-fuchsia-400 to-violet-600',
		sky: 'from-sky-400 to-cyan-600',
		pink: 'from-pink-400 to-rose-600'
	};

	export const GRADIENT_LIST = Object.values(GRADIENTS);

	export type PatternName = 'none' | 'dots' | 'grid' | 'diagonal' | 'triangles' | 'circles';

	function b64(svg: string) {
		return `url("data:image/svg+xml;base64,${btoa(svg)}")`;
	}

	export const PATTERNS: Record<PatternName, { image: string; size: string }> = {
		none: { image: '', size: '' },
		dots: {
			image: 'radial-gradient(circle, rgba(255,255,255,0.3) 1.5px, transparent 1.5px)',
			size: '28px 28px'
		},
		grid: {
			image: [
				'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
				'linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)'
			].join(', '),
			size: '36px 36px'
		},
		diagonal: {
			image:
				'repeating-linear-gradient(45deg, rgba(255,255,255,0.13), rgba(255,255,255,0.13) 1px, transparent 1px, transparent 20px)',
			size: 'auto'
		},
		triangles: {
			image: b64(
				`<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90">` +
					`<polygon points="18,4 30,24 6,24" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>` +
					`<polygon points="62,8 76,32 48,32" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="1.2" transform="rotate(12,62,20)"/>` +
					`<polygon points="26,52 42,78 10,78" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1.5" transform="rotate(-8,26,65)"/>` +
					`<polygon points="72,58 84,78 60,78" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.2" transform="rotate(20,72,68)"/>` +
					`<polygon points="50,28 60,46 40,46" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>` +
					`</svg>`
			),
			size: '90px 90px'
		},
		circles: {
			image: b64(
				`<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90">` +
					`<circle cx="20" cy="22" r="11" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>` +
					`<circle cx="68" cy="14" r="6" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="1.2"/>` +
					`<circle cx="46" cy="58" r="15" fill="none" stroke="rgba(255,255,255,0.16)" stroke-width="1.5"/>` +
					`<circle cx="13" cy="74" r="7" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1.2"/>` +
					`<circle cx="80" cy="68" r="10" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>` +
					`<circle cx="84" cy="38" r="5" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>` +
					`</svg>`
			),
			size: '90px 90px'
		}
	};
</script>

<script lang="ts">
	interface Props {
		gradient: GradientName | number;
		pattern?: PatternName;
		decorative?: boolean;
		padding?: 'sm' | 'md' | 'lg';
		rounded?: 'lg' | 'xl' | '2xl' | '3xl';
		as?: 'div' | 'button' | 'a';
		href?: string;
		onClick?: (e: MouseEvent) => void;
		ariaLabel?: string;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let {
		gradient,
		pattern = 'none',
		decorative = true,
		padding = 'md',
		rounded = '2xl',
		as = 'div',
		href = '',
		onClick,
		ariaLabel = '',
		class: clazz = '',
		children
	}: Props = $props();

	const PADDING_MAP = { sm: 'p-3', md: 'p-4', lg: 'p-6' };
	const ROUNDED_MAP = {
		lg: 'rounded-lg',
		xl: 'rounded-xl',
		'2xl': 'rounded-2xl',
		'3xl': 'rounded-3xl'
	};

	const gradientClass = $derived(
		typeof gradient === 'number'
			? GRADIENT_LIST[
					((gradient % GRADIENT_LIST.length) + GRADIENT_LIST.length) % GRADIENT_LIST.length
				]
			: GRADIENTS[gradient]
	);

	const baseClass = $derived(
		`relative overflow-hidden bg-gradient-to-br ${gradientClass} ${PADDING_MAP[padding]} ${ROUNDED_MAP[rounded]} ${clazz}`
	);

	const interactiveClass =
		as === 'button' || as === 'a'
			? 'cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60'
			: '';

	const patternStyle = $derived(
		pattern !== 'none'
			? `background-image:${PATTERNS[pattern].image};background-size:${PATTERNS[pattern].size}`
			: ''
	);
</script>

{#snippet decorations()}
	{#if decorative}
		<div
			class="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-white/10 pointer-events-none"
		></div>
		<div
			class="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-white/10 pointer-events-none"
		></div>
	{/if}
	{#if pattern !== 'none'}
		<div class="absolute inset-0 pointer-events-none" style={patternStyle}></div>
	{/if}
{/snippet}

{#if as === 'button'}
	<button
		type="button"
		class="{baseClass} {interactiveClass}"
		onclick={onClick}
		aria-label={ariaLabel}
	>
		{@render decorations()}
		{@render children?.()}
	</button>
{:else if as === 'a'}
	<a class="{baseClass} {interactiveClass}" {href} aria-label={ariaLabel}>
		{@render decorations()}
		{@render children?.()}
	</a>
{:else}
	<div class={baseClass}>
		{@render decorations()}
		{@render children?.()}
	</div>
{/if}
