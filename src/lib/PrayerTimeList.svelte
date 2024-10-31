<script lang="ts">
	import PrayerTimeCard from './PrayerTimeCard.svelte';
	import type { PrayerKey, PrayerTimings } from './types';

	interface Props {
		timings?: PrayerTimings | null;
	}

	const PRAYER_LIST: Array<{
		key: PrayerKey;
		title: string;
	}> = [
		{
			key: 'Fajr',
			title: 'Subuh'
		},
		{
			key: 'Dhuhr',
			title: 'Dzuhur'
		},
		{
			key: 'Asr',
			title: 'Ashar'
		},
		{
			key: 'Maghrib',
			title: 'Maghrib'
		},
		{
			key: 'Isha',
			title: 'Isya'
		}
	];

	let { timings = null }: Props = $props();
</script>

{#each PRAYER_LIST as prayer (prayer.key)}
	<PrayerTimeCard {timings} prayerKey={prayer.key} prayerTitle={prayer.title} />
{/each}
