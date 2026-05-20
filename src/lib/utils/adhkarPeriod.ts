import type { AdhkarPeriod } from '../../data/adhkar';
import { CONSTANTS } from '../constants';
import type { PrayerTimeResponse, PrayerTimings } from '../types';

const FALLBACK_FAJR_MIN = 4 * 60;
const FALLBACK_ASR_MIN = 15 * 60 + 30;
const FALLBACK_ISHA_MIN = 19 * 60;

function timeToMinutes(value: string | undefined): number | null {
	if (!value) return null;
	const cleaned = value.replace(/\s*\(.*\)\s*/, '').trim();
	const [h, m] = cleaned.split(':').map((v) => parseInt(v, 10));
	if (Number.isNaN(h) || Number.isNaN(m)) return null;
	return h * 60 + m;
}

export interface AdhkarPrayerHints {
	fajr?: string;
	asr?: string;
	isha?: string;
}

export function getActiveAdhkarPeriod(
	now: Date,
	prayerTimes: AdhkarPrayerHints | null
): AdhkarPeriod | null {
	const minutesNow = now.getHours() * 60 + now.getMinutes();
	const fajr = timeToMinutes(prayerTimes?.fajr) ?? FALLBACK_FAJR_MIN;
	const asr = timeToMinutes(prayerTimes?.asr) ?? FALLBACK_ASR_MIN;
	const isha = timeToMinutes(prayerTimes?.isha) ?? FALLBACK_ISHA_MIN;

	if (minutesNow >= fajr && minutesNow < asr) return 'morning';
	if (minutesNow >= asr && minutesNow < isha) return 'evening';
	if (minutesNow >= isha) return 'evening';
	return null;
}

export function readCachedTodayTimings(): PrayerTimings | null {
	try {
		const raw = localStorage.getItem(CONSTANTS.STORAGE_KEY.PRAYER);
		if (!raw) return null;
		const parsed = JSON.parse(raw) as PrayerTimeResponse;
		const todayString = new Date()
			.toLocaleDateString('id-ID', { month: '2-digit', day: '2-digit', year: 'numeric' })
			.replace(/\//g, '-');
		const today = parsed?.data?.find((d) => d.date.gregorian.date === todayString);
		return today?.timings ?? null;
	} catch {
		return null;
	}
}
