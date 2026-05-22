<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import ReadingCard from '$lib/ReadingCard.svelte';
	import Tabs from '$lib/ui/Tabs.svelte';
	import Button from '$lib/ui/Button.svelte';
	import BookOpenIcon from '$lib/icons/BookOpenIcon.svelte';
	import ReactangleStackIcon from '$lib/icons/ReactangleStackIcon.svelte';
	import { META_DESC_TAHLIL, META_TITLE_TAHLIL, TITLE_CONSTANTS } from '$lib/constants';
	import { t } from '$lib/translations/store';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import tahlil from '../../data/tahlil';
	import IconButton from '$lib/ui/IconButton.svelte';

	const items = tahlil.data;
	const total = items.length;

	let playMode = $state(true);
	let compact = $state(false);
	let currentPlayIndex = $state(0);
	let slideDir = $state(1);
	let counts = $state<Record<number, number>>({});
	let skipped = $state<Record<number, boolean>>({});

	const currentItem = $derived(currentPlayIndex < total ? items[currentPlayIndex] : null);
	const completed = $derived(
		items.filter((i) => i.href || (counts[i.id] ?? 0) >= i.count || skipped[i.id]).length
	);
	const allDone = $derived(total > 0 && completed === total);

	const modeOptions = $derived([
		{ value: 'play', label: $t('tahlil.modeOneByOne') },
		{ value: 'all', label: $t('tahlil.modeShowAll') }
	]);

	function getCount(id: number) {
		return counts[id] ?? 0;
	}

	function handleIncrement(id: number, target: number) {
		const cur = counts[id] ?? 0;
		if (cur < target) {
			counts = { ...counts, [id]: cur + 1 };
		}
	}

	function handleReset(id: number) {
		counts = { ...counts, [id]: 0 };
	}

	function handleResetAll() {
		counts = {};
		skipped = {};
		currentPlayIndex = 0;
		slideDir = 1;
	}

	function handleSkip() {
		if (currentItem) {
			skipped = { ...skipped, [currentItem.id]: true };
		}
		if (currentPlayIndex < total - 1) {
			slideDir = 1;
			currentPlayIndex++;
		}
	}

	function goNext() {
		if (currentPlayIndex < total - 1) {
			slideDir = 1;
			currentPlayIndex++;
		}
	}

	function goPrev() {
		if (currentPlayIndex > 0) {
			slideDir = -1;
			currentPlayIndex--;
		}
	}
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_TAHLIL}
		desc={META_DESC_TAHLIL}
		url={`${TITLE_CONSTANTS.PATH}tahlil/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">🤲 Tahlil</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: `🏠 ${$t('navigation.home')}`, href: '/' },
			{ text: 'Tahlil', href: '/tahlil/' }
		]}
	/>
</div>

<div class="px-4 flex flex-col gap-4 pb-24">
	<!-- Progress card -->
	<div class="bg-secondary rounded-xl p-4 flex flex-col gap-3">
		<div class="flex items-center justify-between gap-3">
			<div>
				<p class="text-sm opacity-70">
					{$t('tahlil.progress')}
				</p>
				<p
					class="font-bold text-lg tabular-nums {allDone
						? 'text-green-600 dark:text-green-400'
						: ''}"
				>
					{completed} / {total}
					{#if allDone}
						<span class="text-sm font-normal">— {$t('tahlil.complete')} 🎉</span>
					{/if}
				</p>
			</div>
			<div class="flex gap-2">
				<Button onClick={handleResetAll} variant="solid" color="primary" size="md">
					{$t('tahlil.resetAll')}
				</Button>
				<IconButton
					onClick={() => (compact = !compact)}
					variant="outline"
					color="primary"
					size="md"
					ariaLabel={$t('tahlil.compactModeAria')}
				>
					{#if compact}
						<BookOpenIcon size="sm" />
					{:else}
						<ReactangleStackIcon size="sm" />
					{/if}
				</IconButton>
			</div>
		</div>
		<div class="w-full bg-primary rounded-full h-2 overflow-hidden">
			<div
				class="h-2 rounded-full transition-all duration-500 {allDone
					? 'bg-green-500'
					: 'bg-teal-500'}"
				style="width: {total === 0 ? 0 : (completed / total) * 100}%"
			></div>
		</div>
	</div>

	<!-- Mode tabs + compact toggle (hidden during celebration) -->
	{#if !allDone}
		<div class="flex items-center gap-2">
			<div class="flex-1">
				<Tabs
					options={modeOptions}
					value={playMode ? 'play' : 'all'}
					onchange={(v) => {
						playMode = v === 'play';
					}}
				/>
			</div>
		</div>
	{/if}

	<!-- ===== CELEBRATION ===== -->
	{#if allDone}
		<div
			class="flex flex-col items-center gap-6 py-6 text-center"
			in:fly={{ y: 60, duration: 500, easing: cubicOut }}
		>
			<div class="relative w-32 h-32 flex items-center justify-center">
				<span class="trophy text-7xl select-none">🤲</span>
			</div>
			<div class="flex flex-col gap-2">
				<h2 class="text-3xl font-bold">Alhamdulillah! 🎉</h2>
				<p class="text-xl font-semibold">
					{$t('tahlil.allCompleteTitle')}
				</p>
				<p class="text-sm opacity-70 max-w-xs mx-auto">
					{$t('tahlil.allCompleteDesc', { total })}
				</p>
			</div>
			<div
				class="bg-green-50 dark:bg-green-950/60 border-2 border-green-200 dark:border-green-800 rounded-2xl px-10 py-5 flex flex-col items-center"
			>
				<span class="text-5xl font-bold text-green-600 dark:text-green-400 tabular-nums"
					>{total}</span
				>
				<span class="text-sm text-green-700 dark:text-green-300 mt-1">
					{$t('tahlil.readingsCompleted')}
				</span>
			</div>
			<div class="flex flex-col gap-3 w-full">
				<Button
					onClick={handleResetAll}
					variant="solid"
					color="primary"
					size="lg"
					class="w-full justify-center active:scale-[0.98]"
				>
					{$t('tahlil.startAgain')}
				</Button>
				<Button
					onClick={() => {
						playMode = false;
					}}
					variant="outline"
					color="secondary"
					size="lg"
					class="w-full justify-center opacity-70 active:scale-[0.98]"
				>
					{$t('tahlil.showAllReadings')}
				</Button>
			</div>
		</div>

		<!-- ===== PLAY MODE ===== -->
	{:else if playMode}
		<div class="flex flex-col gap-4">
			<!-- Card stack -->
			<div class="relative" style="padding-bottom: 20px;">
				{#if currentPlayIndex + 2 < total}
					<div
						class="absolute rounded-xl bg-secondary border border-foreground/10"
						style="bottom: 0; left: 24px; right: 24px; height: 28px; z-index: 1;"
					></div>
				{/if}
				{#if currentPlayIndex + 1 < total}
					<div
						class="absolute rounded-xl bg-secondary border border-foreground/15 shadow-sm"
						style="bottom: 8px; left: 12px; right: 12px; height: 28px; z-index: 2;"
					></div>
				{/if}
				<div class="relative overflow-x-hidden" style="z-index: 3;">
					{#key currentPlayIndex}
						<div
							in:fly={{ x: slideDir * 380, duration: 380, easing: cubicOut }}
							out:fly={{ x: -slideDir * 380, duration: 280 }}
						>
							{#if currentItem}
								<ReadingCard
									item={currentItem}
									count={getCount(currentItem.id)}
									playMode={true}
									{compact}
									isLast={currentPlayIndex === total - 1}
									onIncrement={() => handleIncrement(currentItem.id, currentItem.count)}
									onReset={() => handleReset(currentItem.id)}
									onNext={goNext}
									onSkip={handleSkip}
								/>
							{/if}
						</div>
					{/key}
				</div>
			</div>

			<!-- Prev / Next navigation -->
			<div class="flex items-center justify-between">
				<Button
					onClick={goPrev}
					variant="outline"
					color="secondary"
					size="sm"
					disabled={currentPlayIndex === 0}
				>
					← {$t('common.previous')}
				</Button>
				<Button
					onClick={goNext}
					variant="outline"
					color="secondary"
					size="sm"
					disabled={currentPlayIndex >= total - 1}
				>
					{$t('tahlil.next')} →
				</Button>
			</div>
		</div>

		<!-- ===== ALL MODE ===== -->
	{:else}
		<div class="flex flex-col gap-3">
			{#each items as item (item.id)}
				<ReadingCard
					{item}
					count={getCount(item.id)}
					{compact}
					onIncrement={() => handleIncrement(item.id, item.count)}
					onReset={() => handleReset(item.id)}
				/>
			{/each}
		</div>
	{/if}

	<!-- Source -->
	<p class="text-xs opacity-40 text-center mt-2">
		{$t('tahlil.source')}: {tahlil.basedOn}
	</p>
</div>

<SeoText variant="TAHLIL" />

<style>
	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-8px);
		}
	}

	.trophy {
		animation: float 3s ease-in-out infinite;
		display: inline-block;
	}
</style>
