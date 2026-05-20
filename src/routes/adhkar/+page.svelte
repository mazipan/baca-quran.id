<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import AdhkarCounter from '$lib/AdhkarCounter.svelte';
	import MorningBanner from '$lib/illustrations/MorningBanner.svelte';
	import EveningBanner from '$lib/illustrations/EveningBanner.svelte';
	import { META_DESC_ADHKAR, META_TITLE_ADHKAR, TITLE_CONSTANTS } from '$lib/constants';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import { t } from '$lib/translations/store';
	import SpeakerWaveIcon from '$lib/icons/SpeakerWaveIcon.svelte';
	import SpeakerXMarkIcon from '$lib/icons/SpeakerXMarkIcon.svelte';
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

	const todayKey = $derived(formatDate(new Date().toISOString(), 'YYYYMMDD'));
	const items = $derived(getAdhkarFor(period));
	const completed = $derived(
		items.filter((i) => getCount(log, todayKey, period, i.id) >= i.count).length
	);
	const total = $derived(items.length);
	const allDone = $derived(total > 0 && completed === total);

	function selectPeriod(next: AdhkarPeriod) {
		period = next;
		manualOverride = true;
	}

	function handleIncrement(id: string, target: number) {
		log = increment(log, todayKey, period, id, target);
	}

	function handleReset(id: string) {
		log = resetCount(log, todayKey, period, id);
	}

	function handleResetAll() {
		log = resetCount(log, todayKey, period);
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

<div class="px-4 flex flex-col gap-4 pb-8">
	<div class="grid grid-cols-2 gap-2 bg-secondary p-1 rounded-xl">
		<button
			type="button"
			onclick={() => selectPeriod('morning')}
			class="rounded-lg px-3 py-2 text-sm font-semibold transition cursor-pointer {period ===
			'morning'
				? 'bg-primary shadow border border-foreground/20'
				: 'opacity-70 hover:opacity-100'}"
			aria-pressed={period === 'morning'}
		>
			🌅 {isEnglish ? 'Morning' : 'Pagi'}
		</button>
		<button
			type="button"
			onclick={() => selectPeriod('evening')}
			class="rounded-lg px-3 py-2 text-sm font-semibold transition cursor-pointer {period ===
			'evening'
				? 'bg-primary shadow border border-foreground/20'
				: 'opacity-70 hover:opacity-100'}"
			aria-pressed={period === 'evening'}
		>
			🌙 {isEnglish ? 'Evening' : 'Petang'}
		</button>
	</div>

	{#if period === 'morning'}
		<MorningBanner />
	{:else}
		<EveningBanner />
	{/if}

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
			<div class="flex items-center gap-2">
				<button
					type="button"
					onclick={() => (soundOn = !soundOn)}
					aria-label={soundOn
						? isEnglish
							? 'Mute'
							: 'Matikan suara'
						: isEnglish
							? 'Unmute'
							: 'Hidupkan suara'}
					class="cursor-pointer rounded-lg p-2 bg-primary border-2 border-foreground/20 hover:border-foreground/40"
				>
					{#if soundOn}
						<SpeakerWaveIcon size="sm" />
					{:else}
						<SpeakerXMarkIcon size="sm" />
					{/if}
				</button>
				<button
					type="button"
					onclick={handleResetAll}
					class="cursor-pointer rounded-lg px-3 py-2 text-xs font-semibold bg-primary border-2 border-foreground/20 hover:border-foreground/40"
				>
					{isEnglish ? 'Reset all' : 'Reset semua'}
				</button>
			</div>
		</div>
		<div class="w-full bg-primary rounded-full h-2 overflow-hidden">
			<div
				class="h-2 rounded-full transition-all duration-300 {allDone
					? 'bg-green-500'
					: 'bg-blue-500'}"
				style="width: {total === 0 ? 0 : (completed / total) * 100}%"
			></div>
		</div>
	</div>

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
</div>

<SeoText variant="ADHKAR" />
