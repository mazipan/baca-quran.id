import { derived, writable, readable } from 'svelte/store';
import type { PrayerKey, PrayerTimings } from '$lib/types';

export const todayPrayerTimings = writable<PrayerTimings | null>(null);

const tick = readable(new Date(), (set) => {
	if (typeof window === 'undefined') return () => {};
	const id = setInterval(() => set(new Date()), 1000);
	return () => clearInterval(id);
});

const PRAYER_ORDER: PrayerKey[] = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

export type NextPrayerInfo = {
	key: PrayerKey;
	time: string;
	secondsLeft: number;
	minutesLeft: number;
};

export const nextPrayerInfo = derived([todayPrayerTimings, tick], ([$timings, $now]) => {
	if (!$timings) return null;

	for (const key of PRAYER_ORDER) {
		const timeStr = ($timings[key] || '').substring(0, 5);
		if (!timeStr.includes(':')) continue;
		const [h, m] = timeStr.split(':').map(Number);
		const prayerTime = new Date($now.getFullYear(), $now.getMonth(), $now.getDate(), h, m, 0);
		const diffMs = prayerTime.getTime() - $now.getTime();
		if (diffMs > 0) {
			return {
				key,
				time: timeStr,
				secondsLeft: Math.floor(diffMs / 1000),
				minutesLeft: Math.floor(diffMs / 60000)
			} satisfies NextPrayerInfo;
		}
	}
	return null;
});

export const isNearPrayer = derived(
	nextPrayerInfo,
	($info) => $info !== null && $info.minutesLeft <= 10
);
