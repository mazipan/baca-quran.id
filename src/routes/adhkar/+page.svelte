<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import AdhkarCounter from '$lib/AdhkarCounter.svelte';
	import MorningBanner from '$lib/illustrations/MorningBanner.svelte';
	import EveningBanner from '$lib/illustrations/EveningBanner.svelte';
	import Tabs from '$lib/ui/Tabs.svelte';
	import { META_DESC_ADHKAR, META_TITLE_ADHKAR, TITLE_CONSTANTS } from '$lib/constants';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import { t } from '$lib/translations/store';
	import SpeakerWaveIcon from '$lib/icons/SpeakerWaveIcon.svelte';
	import SpeakerXMarkIcon from '$lib/icons/SpeakerXMarkIcon.svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import { getAdhkarFor, type AdhkarPeriod } from '../../data/adhkar';
	import { formatDate } from '$lib/utils/date';
	import { getActiveAdhkarPeriod, readCachedTodayTimings } from '$lib/utils/adhkarPeriod';
	import {
		getCount,
		increment,
		loadAdhkarLog,
		pruneOldDays,
		reset as resetCount,
		type AdhkarLog
	} from '$lib/utils/adhkarStorage';

	const isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);

	let period: AdhkarPeriod = $state('morning');
	let manualOverride = $state(false);
	let log: AdhkarLog = $state({});
	let soundOn = $state(true);
	let playMode = $state(true);
	let currentPlayIndex = $state(0);
	let slideDir = $state(1);

	const todayKey = $derived(formatDate(new Date().toISOString(), 'YYYYMMDD'));
	const items = $derived(getAdhkarFor(period));
	const total = $derived(items.length);
	const completed = $derived(
		items.filter((i) => getCount(log, todayKey, period, i.id) >= i.count).length
	);
	const allDone = $derived(total > 0 && completed === total);
	const currentItem = $derived(currentPlayIndex < total ? items[currentPlayIndex] : null);

	const periodOptions = $derived([
		{ value: 'morning', label: isEnglish ? '🌅 Morning' : '🌅 Pagi' },
		{ value: 'evening', label: isEnglish ? '🌙 Evening' : '🌙 Petang' }
	]);

	const modeOptions = $derived([
		{ value: 'play', label: isEnglish ? '🎯 One by One' : '🎯 Satu per Satu' },
		{ value: 'all', label: isEnglish ? '📋 See All' : '📋 Lihat Semua' }
	]);

	function selectPeriod(next: string) {
		period = next as AdhkarPeriod;
		manualOverride = true;
		currentPlayIndex = 0;
		slideDir = 1;
	}

	function handleIncrement(id: string, target: number) {
		log = increment(log, todayKey, period, id, target);
	}

	function handleReset(id: string) {
		log = resetCount(log, todayKey, period, id);
	}

	function handleResetAll() {
		log = resetCount(log, todayKey, period);
		currentPlayIndex = 0;
		slideDir = 1;
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

	onMount(() => {
		log = pruneOldDays(loadAdhkarLog());
		const timings = readCachedTodayTimings();
		const detected = getActiveAdhkarPeriod(new Date(), {
			fajr: timings?.Fajr,
			asr: timings?.Asr,
			isha: timings?.Isha
		});
		if (detected && !manualOverride) {
			period = detected;
		}
		// Jump to first incomplete card
		const periodItems = getAdhkarFor(period);
		const firstIncomplete = periodItems.findIndex(
			(item) => getCount(log, todayKey, period, item.id) < item.count
		);
		currentPlayIndex = firstIncomplete >= 0 ? firstIncomplete : 0;
	});
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_ADHKAR}
		desc={META_DESC_ADHKAR}
		url={`${TITLE_CONSTANTS.PATH}adhkar/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">
		{period === 'morning' ? '🌅' : '🌙'}
		{isEnglish ? 'Morning & Evening Adhkar' : 'Dzikir Pagi & Petang'}
	</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: `🏠 ${$t('navigation.home')}`, href: '/' },
			{
				text: isEnglish ? 'Adhkar' : 'Dzikir Pagi & Petang',
				href: '/adhkar/'
			}
		]}
	/>
</div>

<div class="px-4 flex flex-col gap-4 pb-24">
	<!-- Period selector tabs -->
	<Tabs options={periodOptions} value={period} onchange={selectPeriod} />

	<!-- Banner -->
	{#if period === 'morning'}
		<MorningBanner />
	{:else}
		<EveningBanner />
	{/if}

	<!-- Progress card -->
	<div class="bg-secondary rounded-xl p-4 flex flex-col gap-3">
		<div class="flex items-center justify-between gap-3">
			<div>
				<p class="text-sm opacity-70">
					{isEnglish ? 'Progress today' : 'Progress hari ini'}
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
					: 'bg-blue-500'}"
				style="width: {total === 0 ? 0 : (completed / total) * 100}%"
			></div>
		</div>
	</div>

	<!-- Mode selector (hidden during celebration) -->
	{#if !allDone}
		<Tabs
			options={modeOptions}
			value={playMode ? 'play' : 'all'}
			onchange={(v) => {
				playMode = v === 'play';
			}}
		/>
	{/if}

	<!-- ===== CELEBRATION SCREEN ===== -->
	{#if allDone}
		<div
			class="celebration flex flex-col items-center gap-6 py-6 text-center"
			in:fly={{ y: 60, duration: 500, easing: cubicOut }}
		>
			<!-- Trophy with sparkles -->
			<div class="relative w-32 h-32 flex items-center justify-center">
				<span class="trophy text-7xl select-none">🏆</span>
				<span class="sparkle s1 absolute text-2xl select-none">✨</span>
				<span class="sparkle s2 absolute text-xl select-none">⭐</span>
				<span class="sparkle s3 absolute text-2xl select-none">✨</span>
				<span class="sparkle s4 absolute text-lg select-none">⭐</span>
			</div>

			<!-- Headline -->
			<div class="flex flex-col gap-2">
				<h2 class="text-3xl font-bold">MashAllah! 🎉</h2>
				<p class="text-xl font-semibold">
					{isEnglish ? 'All Adhkar Complete!' : 'Semua Dzikir Selesai!'}
				</p>
				<p class="text-sm opacity-70 max-w-xs mx-auto">
					{isEnglish
						? `You completed all ${total} ${period === 'morning' ? 'morning' : 'evening'} adhkar today`
						: `Kamu telah menyelesaikan semua ${total} dzikir ${period === 'morning' ? 'pagi' : 'petang'} hari ini`}
				</p>
			</div>

			<!-- Stats -->
			<div
				class="bg-green-50 dark:bg-green-950/60 border-2 border-green-200 dark:border-green-800 rounded-2xl px-10 py-5 flex flex-col items-center"
			>
				<span class="text-5xl font-bold text-green-600 dark:text-green-400 tabular-nums"
					>{total}</span
				>
				<span class="text-sm text-green-700 dark:text-green-300 mt-1">
					{isEnglish ? 'Adhkar completed' : 'Dzikir selesai'}
				</span>
			</div>

			<!-- Motivational quote -->
			<div class="bg-secondary rounded-xl p-4 text-sm opacity-80 italic max-w-sm text-center">
				"...{isEnglish
					? 'Remember Allah much so that you may succeed'
					: 'Dan ingatlah Allah sebanyak-banyaknya agar kamu beruntung'}." (QS. 8:45)
			</div>

			<!-- Action buttons -->
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
					onclick={() => selectPeriod(period === 'morning' ? 'evening' : 'morning')}
					class="w-full cursor-pointer rounded-xl px-4 py-3 font-semibold border-2 border-foreground/20 hover:border-foreground/40 active:scale-[0.98] transition text-sm"
				>
					{period === 'morning'
						? isEnglish
							? '🌙 Switch to Evening Adhkar'
							: '🌙 Lanjut ke Dzikir Petang'
						: isEnglish
							? '🌅 Switch to Morning Adhkar'
							: '🌅 Lanjut ke Dzikir Pagi'}
				</button>
				<button
					type="button"
					onclick={() => {
						playMode = false;
					}}
					class="w-full cursor-pointer rounded-xl px-4 py-3 font-semibold border-2 border-foreground/20 hover:border-foreground/40 active:scale-[0.98] transition text-sm opacity-70"
				>
					{isEnglish ? '📋 See all cards' : '📋 Lihat semua dzikir'}
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
						? `Dhikr ${currentPlayIndex + 1} of ${total}`
						: `Dzikir ke-${currentPlayIndex + 1} dari ${total}`}
				</p>
				<div class="flex gap-2 items-center justify-center flex-wrap">
					{#each items as item, i}
						{@const isDone = getCount(log, todayKey, period, item.id) >= item.count}
						<div
							class="rounded-full transition-all duration-300 {isDone
								? 'w-2.5 h-2.5 bg-green-500 dark:bg-green-400'
								: i === currentPlayIndex
									? 'w-3.5 h-3.5 bg-blue-500 dark:bg-blue-400 ring-2 ring-blue-300/60 dark:ring-blue-600/60'
									: 'w-2.5 h-2.5 bg-foreground/15'}"
						></div>
					{/each}
				</div>
			</div>

			<!-- Card stack with ghost cards -->
			<div class="relative" style="padding-bottom: 20px;">
				<!-- Ghost card 2 (furthest back) -->
				{#if currentPlayIndex + 2 < total}
					<div
						class="absolute rounded-xl bg-secondary border border-foreground/10"
						style="bottom: 0; left: 24px; right: 24px; height: 28px; z-index: 1;"
					></div>
				{/if}
				<!-- Ghost card 1 (one behind) -->
				{#if currentPlayIndex + 1 < total}
					<div
						class="absolute rounded-xl bg-secondary border border-foreground/15 shadow-sm"
						style="bottom: 8px; left: 12px; right: 12px; height: 28px; z-index: 2;"
					></div>
				{/if}

				<!-- Animated current card -->
				<div class="relative overflow-x-hidden" style="z-index: 3;">
					{#key currentPlayIndex}
						<div
							in:fly={{ x: slideDir * 380, duration: 380, easing: cubicOut }}
							out:fly={{ x: -slideDir * 380, duration: 280 }}
						>
							{#if currentItem}
								<AdhkarCounter
									item={currentItem}
									count={getCount(log, todayKey, period, currentItem.id)}
									{soundOn}
									playMode={true}
									isLast={currentPlayIndex === total - 1}
									onIncrement={() => handleIncrement(currentItem.id, currentItem.count)}
									onReset={() => handleReset(currentItem.id)}
									onNext={goNext}
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
					disabled={currentPlayIndex >= total - 1 ||
						!(getCount(log, todayKey, period, currentItem?.id ?? '') >= (currentItem?.count ?? 0))}
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
				<AdhkarCounter
					{item}
					{soundOn}
					count={getCount(log, todayKey, period, item.id)}
					onIncrement={() => handleIncrement(item.id, item.count)}
					onReset={() => handleReset(item.id)}
				/>
			{/each}
		</div>
	{/if}
</div>

<!-- Floating mute button -->
<button
	type="button"
	onclick={() => (soundOn = !soundOn)}
	aria-label={soundOn
		? isEnglish
			? 'Mute sound'
			: 'Matikan suara'
		: isEnglish
			? 'Unmute sound'
			: 'Hidupkan suara'}
	class="fixed bottom-6 right-4 z-40 rounded-full w-12 h-12 bg-primary border-2 border-foreground/20 shadow-lg hover:border-foreground/40 cursor-pointer flex items-center justify-center transition-all active:scale-90 {soundOn
		? ''
		: 'opacity-60'}"
>
	{#if soundOn}
		<SpeakerWaveIcon size="sm" />
	{:else}
		<SpeakerXMarkIcon size="sm" />
	{/if}
</button>

<SeoText variant="ADHKAR" />

<style>
	@keyframes trophy-pop {
		0% {
			transform: scale(0.3) rotate(-10deg);
			opacity: 0;
		}
		55% {
			transform: scale(1.2) rotate(5deg);
		}
		75% {
			transform: scale(0.92) rotate(-3deg);
		}
		90% {
			transform: scale(1.04) rotate(1deg);
		}
		100% {
			transform: scale(1) rotate(0deg);
			opacity: 1;
		}
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(0px);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes sparkle {
		0%,
		100% {
			opacity: 0;
			transform: scale(0) rotate(0deg);
		}
		50% {
			opacity: 1;
			transform: scale(1.2) rotate(180deg);
		}
	}

	.trophy {
		animation:
			trophy-pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both,
			float 3s ease-in-out 0.8s infinite;
		display: inline-block;
	}

	.sparkle {
		animation: sparkle 2s ease-in-out infinite;
	}

	.s1 {
		top: 0;
		right: 4px;
		animation-delay: 0s;
	}

	.s2 {
		bottom: 4px;
		left: 0;
		animation-delay: 0.5s;
	}

	.s3 {
		top: 8px;
		left: 0;
		animation-delay: 1s;
	}

	.s4 {
		bottom: 0;
		right: 8px;
		animation-delay: 1.5s;
	}
</style>
