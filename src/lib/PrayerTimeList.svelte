<script lang="ts">
	import PrayerTimeCard from './PrayerTimeCard.svelte';
	import type { PrayerKey, PrayerTimings } from './types';

	interface Props {
		timings?: PrayerTimings | null;
		nextPrayerKey?: PrayerKey | null;
		isToday?: boolean;
	}

	const PRAYER_LIST: Array<{ key: PrayerKey; title: string }> = [
		{ key: 'Fajr', title: 'Subuh' },
		{ key: 'Dhuhr', title: 'Dzuhur' },
		{ key: 'Asr', title: 'Ashar' },
		{ key: 'Maghrib', title: 'Maghrib' },
		{ key: 'Isha', title: 'Isya' }
	];

	let { timings = null, nextPrayerKey = null, isToday = true }: Props = $props();
</script>

<div class="flex flex-col gap-2" role="list" aria-label="Jadwal sholat">
	{#each PRAYER_LIST as prayer (prayer.key)}
		<PrayerTimeCard
			{timings}
			prayerKey={prayer.key}
			prayerTitle={prayer.title}
			isNext={prayer.key === nextPrayerKey}
			{isToday}
		/>
	{/each}
</div>
