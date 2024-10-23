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

	interface Props {
		timings?: PrayerTimings | null;
		prayerKey?: 'Fajr' | 'Dhuhr' | 'Asr' | 'Maghrib' | 'Isha';
	}

	let { timings = null, prayerKey = 'Fajr' }: Props = $props();
</script>

{#if timings}
	<CardShadow>
		<div class="flex justify-between items-center gap-2">
			<span>{TITLE_MAP[prayerKey]}</span>
			<span>{timings[prayerKey]}</span>
		</div>
	</CardShadow>
{/if}
