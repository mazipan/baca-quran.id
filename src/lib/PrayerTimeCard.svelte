<script lang="ts">
	import CardShadow from './CardShadow.svelte';
	import type { PrayerTimings } from './types';

	const TITLE_MAP = {
		Fajr: 'Subuh',
		Dhuhr: 'Dzuhur',
		Asr: 'Ashar',
		Maghrib: 'Maghrib',
		Isha: 'Isya'
	};

	export let timings: PrayerTimings | null = null;
	export let prayerKey: 'Fajr' | 'Dhuhr' | 'Asr' | 'Maghrib' | 'Isha' = 'Fajr';
</script>

{#if timings}
	<CardShadow>
		<div class="flex justify-between items-center gap-2">
			<span>{TITLE_MAP[prayerKey]}</span>
			<span>{timings[prayerKey]}</span>
		</div>
	</CardShadow>
{/if}
