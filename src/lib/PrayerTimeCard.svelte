<script lang="ts">
	import type { PrayerKey, PrayerTimings } from './types';
	import { onMount } from 'svelte';
	import { getDayjs, getDayjsFormatted, getMinuteDuration } from '$lib/utils/date';

	const PRAYER_META: Record<PrayerKey, { emoji: string; arabic: string }> = {
		Fajr: { emoji: '🌅', arabic: 'الفجر' },
		Dhuhr: { emoji: '☀️', arabic: 'الظهر' },
		Asr: { emoji: '🌤️', arabic: 'العصر' },
		Maghrib: { emoji: '🌇', arabic: 'المغرب' },
		Isha: { emoji: '🌙', arabic: 'العشاء' }
	};

	interface Props {
		timings?: PrayerTimings | null;
		prayerKey: PrayerKey;
		prayerTitle: string;
		isNext?: boolean;
		isToday?: boolean;
	}

	let { timings = null, prayerKey, prayerTitle, isNext = false, isToday = true }: Props = $props();

	let isPast: boolean = $state(false);
	let durationText: string = $state('');

	function computeState() {
		if (!isToday || !timings?.[prayerKey]) return;
		const now = getDayjs();
		const timeStr = `${timings[prayerKey]}`.substring(0, 5);
		if (!timeStr.includes(':')) return;
		const prayerTime = getDayjsFormatted(
			`${now.format('YYYY-MM-DD')} ${timeStr}`,
			'YYYY-MM-DD HH:mm'
		);
		const diffTime = prayerTime.diff(now, 'minute');
		isPast = diffTime < 0;
		if (!isPast) durationText = getMinuteDuration(diffTime);
	}

	onMount(() => {
		computeState();
		const id = setInterval(computeState, 30_000);
		return () => clearInterval(id);
	});

	let meta = $derived(PRAYER_META[prayerKey]);
</script>

{#if timings}
	<div
		class="relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all
			{isPast && isToday
			? 'opacity-40 bg-secondary/30'
			: isNext && isToday
				? 'bg-amber-500/15 border-2 border-amber-500/50 shadow-sm'
				: 'bg-secondary/60 hover:bg-secondary'}"
		role="listitem"
		aria-label="{prayerTitle}: {timings[prayerKey].substring(0, 5)}"
	>
		{#if isNext && isToday}
			<span
				class="absolute top-3 right-3 w-2 h-2 rounded-full bg-amber-500 animate-pulse"
				aria-hidden="true"
			></span>
		{/if}

		<span class="text-2xl select-none" aria-hidden="true">{meta.emoji}</span>

		<div class="flex-1 min-w-0">
			<p class="font-semibold text-sm leading-tight {isPast && isToday ? 'line-through' : ''}">
				{prayerTitle}
			</p>
			<p class="text-xs opacity-40 font-arabic mt-0.5">{meta.arabic}</p>
		</div>

		<div class="text-right shrink-0">
			<p
				class="font-mono font-bold text-base leading-tight
					{isPast && isToday ? 'line-through opacity-50' : isNext && isToday ? 'text-amber-600' : ''}"
			>
				{timings[prayerKey].substring(0, 5)}
			</p>
			{#if isToday}
				{#if isPast}
					<p class="text-xs opacity-40 mt-0.5">Sudah lewat</p>
				{:else if durationText}
					<p class="text-xs opacity-60 mt-0.5 {isNext ? 'text-amber-600' : ''}">{durationText}</p>
				{/if}
			{/if}
		</div>
	</div>
{/if}
