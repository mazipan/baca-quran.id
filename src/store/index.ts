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
