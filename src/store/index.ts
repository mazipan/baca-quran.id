import type { ReciterKey } from '$lib/utils/audio';
import { get, writable } from 'svelte/store';

export const activeTheme = writable('');
export const getActiveTheme = () => {
	return get(activeTheme);
};

// Settings storage -- START
export const settingTranslation = writable(false);
export const settingTafsir = writable(false);
export const settingMuqadimah = writable(false);
export const settingAudio = writable<ReciterKey>('1');
export const settingAutoNext = writable(false);

export type LocationParam = {
	lt: number;
	lg: number;
	district: string;
};

export const settingLocation = writable<LocationParam | null>(null);
// Settings storage -- END

export const isShowingAudioPlayer = writable(false);
export const isPlayingAudio = writable(false);

export type CurrentTrackParam = {
	verse: string;
	surah: string;
	totalAyah: number;
};

export const currentTrack = writable<CurrentTrackParam>({
	verse: '',
	surah: '',
	totalAyah: 0
});

export type PinnedSurahItem = {
	i: string;
	l: string;
	a: string;
};

export const pinnedSurah = writable<PinnedSurahItem[]>([]);

export type BookmarkVerseItem = {
	s: string;
	v: string;
	l: string;
	a: string;
};

export const lastReadVerses = writable<BookmarkVerseItem[]>([]);

export type LogPrayerItemKey =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '11'
	| '12';
export type LogPrayerItemValue = 1 | 0;
/**
 * Key is a LogPrayerItemKey, value is 1 (done) or 0 (not done).
 * Partial so old data without sunnah keys is still valid.
 * 1=Subuh, 2=Dzuhur, 3=Ashar, 4=Maghrib, 5=Isya (fard)
 * 6=Qabliyah Subuh, 7=Qabliyah Dzuhur, 8=Ba'diyah Dzuhur,
 * 9=Ba'diyah Maghrib, 10=Ba'diyah Isya, 11=Dhuha, 12=Tahajjud (sunnah)
 */
export type LogPrayerValue = Partial<Record<LogPrayerItemKey, LogPrayerItemValue>>;
/** Key is date in YYYYMMDD format */
export type LogPrayer = Record<string, LogPrayerValue>;

export const logPrayer = writable<LogPrayer>({});
export const getLogPrayer = () => {
	return get(logPrayer);
};
