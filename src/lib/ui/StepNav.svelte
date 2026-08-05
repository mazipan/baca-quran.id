<script lang="ts">
	import ArrowLeftIcon from '$lib/icons/ArrowLeftIcon.svelte';
	import ArrowRightIcon from '$lib/icons/ArrowRightIcon.svelte';
	import ChevronLeftIcon from '$lib/icons/ChevronLeftIcon.svelte';
	import ChevronRightIcon from '$lib/icons/ChevronRightIcon.svelte';
	import ChevronDownIcon from '$lib/icons/ChevronDownIcon.svelte';
	import Button from '$lib/ui/Button.svelte';

	type Size = 'sm' | 'md' | 'lg';
	type IconVariant = 'arrow' | 'chevron';

	interface Props {
		current: number;
		total: number;
		onPrev: () => void;
		onNext: () => void;
		onJumpTo?: (index: number) => void;
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
		onJumpTo,
		prevLabel = 'Previous',
		nextLabel = 'Next',
		finishLabel = 'Finish',
		size = 'lg',
		iconVariant = 'arrow',
		showCounter = false,
		class: clazz = ''
	}: Props = $props();

	function handleJump(e: Event) {
		const value = Number((e.currentTarget as HTMLSelectElement).value);
		onJumpTo?.(value - 1);
	}

	const isFirst = $derived(current === 0);
	const isLast = $derived(current === total - 1);

	const maxLabelChars = $derived(Math.max(prevLabel.length, nextLabel.length, finishLabel.length));
	const buttonMinWidth = $derived(`${maxLabelChars + 6}ch`);
</script>

<div class="flex justify-between items-center gap-3 {clazz}">
	<span class="inline-block" style="min-width: {buttonMinWidth}">
		<Button
			onClick={onPrev}
			variant="outline"
			color="secondary"
			{size}
			disabled={isFirst}
			class="w-full justify-center"
		>
			{#if iconVariant === 'chevron'}
				<ChevronLeftIcon size="sm" class="w-4 h-4 shrink-0" />
			{:else}
				<ArrowLeftIcon size="sm" class="w-4 h-4 shrink-0" />
			{/if}
			{prevLabel}
		</Button>
	</span>

	{#if showCounter}
		{#if onJumpTo}
			<div class="flex flex-1 items-center justify-center gap-1 text-sm shrink-0">
				<div class="relative">
					<select
						value={current + 1}
						onchange={handleJump}
						aria-label="Jump to page"
						class="appearance-none rounded-md border border-foreground/20 bg-secondary text-foreground text-sm tabular-nums pl-1.5 pr-6 py-1 w-[4.5rem] min-w-[4.5rem]"
					>
						{#each Array.from({ length: total }, (_, i) => i + 1) as pageNumber}
							<option value={pageNumber}>{pageNumber}</option>
						{/each}
					</select>
					<ChevronDownIcon
						size="xs"
						class="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-foreground-secondary"
					/>
				</div>
				<span class="text-foreground-secondary whitespace-nowrap">/ {total}</span>
			</div>
		{:else}
			<div
				class="flex flex-1 text-center items-center justify-center text-sm tabular-nums text-foreground-secondary whitespace-nowrap shrink-0"
			>
				{current + 1} / {total}
			</div>
		{/if}
	{/if}

	<span class="inline-block" style="min-width: {buttonMinWidth}">
		<Button
			onClick={onNext}
			variant="outline"
			color="secondary"
			{size}
			class="w-full justify-center"
		>
			{isLast ? finishLabel : nextLabel}
			{#if iconVariant === 'chevron'}
				<ChevronRightIcon size="sm" class="w-4 h-4 shrink-0" />
			{:else}
				<ArrowRightIcon size="sm" class="w-4 h-4 shrink-0" />
			{/if}
		</Button>
	</span>
</div>
