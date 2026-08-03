<script lang="ts">
	import ArrowLeftIcon from '$lib/icons/ArrowLeftIcon.svelte';
	import ArrowRightIcon from '$lib/icons/ArrowRightIcon.svelte';
	import ChevronLeftIcon from '$lib/icons/ChevronLeftIcon.svelte';
	import ChevronRightIcon from '$lib/icons/ChevronRightIcon.svelte';
	import Button from '$lib/ui/Button.svelte';

	type Size = 'sm' | 'md' | 'lg';
	type IconVariant = 'arrow' | 'chevron';

	interface Props {
		current: number;
		total: number;
		onPrev: () => void;
		onNext: () => void;
		prevLabel?: string;
		nextLabel?: string;
		finishLabel?: string;
		size?: Size;
		iconVariant?: IconVariant;
		showCounter?: boolean;
		class?: string;
	}

	let {
		current,
		total,
		onPrev,
		onNext,
		prevLabel = 'Previous',
		nextLabel = 'Next',
		finishLabel = 'Finish',
		size = 'lg',
		iconVariant = 'arrow',
		showCounter = false,
		class: clazz = ''
	}: Props = $props();

	const isFirst = $derived(current === 0);
	const isLast = $derived(current === total - 1);

	const SIZE_MAP: Record<Size, string> = {
		sm: 'text-sm px-3 py-1.5 gap-1.5',
		md: 'text-base px-4 py-2 gap-2',
		lg: 'text-base px-4 py-2.5 gap-2'
	};
</script>

<div class="flex justify-between items-center gap-3 {clazz}">
	<Button onClick={onPrev} variant="outline" color="secondary" {size} disabled={isFirst} class="">
		{#if iconVariant === 'chevron'}
			<ChevronLeftIcon size="sm" class="w-4 h-4 shrink-0" />
		{:else}
			<ArrowLeftIcon size="sm" class="w-4 h-4 shrink-0" />
		{/if}
		{prevLabel}
	</Button>

	{#if showCounter}
		<div
			class="flex flex-1 text-center items-center justify-center text-sm tabular-nums text-foreground-secondary whitespace-nowrap shrink-0"
		>
			{current + 1} / {total}
		</div>
	{/if}

	<Button onClick={onNext} variant="outline" color="secondary" {size} class="">
		{isLast ? finishLabel : nextLabel}
		{#if iconVariant === 'chevron'}
			<ChevronRightIcon size="sm" class="w-4 h-4 shrink-0" />
		{:else}
			<ArrowRightIcon size="sm" class="w-4 h-4 shrink-0" />
		{/if}
	</Button>
</div>
