<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import ReadingCard from '$lib/ReadingCard.svelte';
	import Tabs from '$lib/ui/Tabs.svelte';
	import { META_DESC_TAHLIL, META_TITLE_TAHLIL, TITLE_CONSTANTS } from '$lib/constants';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import { t } from '$lib/translations/store';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import tahlil from '../../data/tahlil';

	const isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);

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
		{ value: 'play', label: isEnglish ? '🎯 One by One' : '🎯 Satu per Satu' },
		{ value: 'all', label: isEnglish ? '📋 Show All' : '📋 Tampilkan Semua' }
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

	function isItemDone(id: number, count: number, href?: string) {
		if (href) return false; // link items never "done" for progress dots
		return (counts[id] ?? 0) >= count;
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
					{isEnglish ? 'Progress' : 'Progress'}
				</p>
				<p
					class="font-bold text-lg tabular-nums {allDone
						? 'text-green-600 dark:text-green-400'
						: ''}"
				>
					{completed} / {total}
					{#if allDone}
						<span class="text-sm font-normal">— {isEnglish ? 'complete!' : 'selesai!'} 🎉</span>
					{/if}
				</p>
			</div>
			<button
				type="button"
				onclick={handleResetAll}
				class="cursor-pointer rounded-lg px-3 py-2 text-xs font-semibold bg-primary border-2 border-foreground/20 hover:border-foreground/40 transition"
			>
				{isEnglish ? 'Reset all' : 'Reset semua'}
			</button>
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
			<button
				type="button"
				onclick={() => (compact = !compact)}
				title={isEnglish ? 'Compact mode: Arabic only' : 'Mode ringkas: Arab saja'}
				class="shrink-0 cursor-pointer rounded-lg px-3 py-2 text-xs font-semibold border-2 transition {compact
					? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300'
					: 'border-foreground/20 bg-primary hover:border-foreground/40 opacity-70 hover:opacity-100'}"
			>
				{compact ? '🔤' : 'أ'}
			</button>
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
					{isEnglish ? 'Tahlil Complete!' : 'Tahlil Selesai!'}
				</p>
				<p class="text-sm opacity-70 max-w-xs mx-auto">
					{isEnglish
						? `You have completed all ${total} tahlil readings`
						: `Kamu telah menyelesaikan semua ${total} bacaan tahlil`}
				</p>
			</div>
			<div
				class="bg-green-50 dark:bg-green-950/60 border-2 border-green-200 dark:border-green-800 rounded-2xl px-10 py-5 flex flex-col items-center"
			>
				<span class="text-5xl font-bold text-green-600 dark:text-green-400 tabular-nums"
					>{total}</span
				>
				<span class="text-sm text-green-700 dark:text-green-300 mt-1">
					{isEnglish ? 'Readings completed' : 'Bacaan selesai'}
				</span>
			</div>
			<div class="flex flex-col gap-3 w-full">
				<button
					type="button"
					onclick={handleResetAll}
					class="w-full cursor-pointer rounded-xl px-4 py-3 font-semibold bg-primary border-2 border-foreground/20 hover:border-foreground/40 active:scale-[0.98] transition"
				>
					{isEnglish ? '↺ Start again' : '↺ Mulai lagi'}
				</button>
				<button
					type="button"
					onclick={() => {
						playMode = false;
					}}
					class="w-full cursor-pointer rounded-xl px-4 py-3 font-semibold border-2 border-foreground/20 hover:border-foreground/40 active:scale-[0.98] transition text-sm opacity-70"
				>
					{isEnglish ? '📋 Show all readings' : '📋 Tampilkan semua bacaan'}
				</button>
			</div>
		</div>

		<!-- ===== PLAY MODE ===== -->
	{:else if playMode}
		<div class="flex flex-col gap-4">
			<!-- Step indicator -->
			<div class="flex flex-col items-center gap-2">
				<p class="text-sm font-semibold opacity-70">
					{isEnglish
						? `Reading ${currentPlayIndex + 1} of ${total}`
						: `Bacaan ke-${currentPlayIndex + 1} dari ${total}`}
				</p>
				<div class="flex gap-1.5 items-center justify-center flex-wrap">
					{#each items as item, i}
						{@const isDone = isItemDone(item.id, item.count, item.href)}
						{@const isSkipped = !!skipped[item.id]}
						<div
							class="rounded-full transition-all duration-300 {isDone
								? 'w-2.5 h-2.5 bg-green-500 dark:bg-green-400'
								: isSkipped
									? 'w-2.5 h-2.5 bg-foreground/25'
									: i === currentPlayIndex
										? 'w-3.5 h-3.5 bg-teal-500 dark:bg-teal-400 ring-2 ring-teal-300/60 dark:ring-teal-600/60'
										: 'w-2 h-2 bg-foreground/15'}"
						></div>
					{/each}
				</div>
			</div>

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
				<button
					type="button"
					onclick={goPrev}
					disabled={currentPlayIndex === 0}
					class="rounded-lg px-3 py-2 text-xs font-semibold border border-foreground/15 hover:border-foreground/30 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer transition"
				>
					← {isEnglish ? 'Previous' : 'Sebelumnya'}
				</button>
				<button
					type="button"
					onclick={goNext}
					disabled={currentPlayIndex >= total - 1}
					class="rounded-lg px-3 py-2 text-xs font-semibold border border-foreground/15 hover:border-foreground/30 disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer transition"
				>
					{isEnglish ? 'Next' : 'Berikutnya'} →
				</button>
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
		{isEnglish ? 'Source' : 'Sumber'}: {tahlil.basedOn}
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
