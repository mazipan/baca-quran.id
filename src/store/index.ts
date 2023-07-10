import { writable } from 'svelte/store';

export const activeTheme = writable('');

// Settings storage -- START
export const settingTranslation = writable(false);
export const settingTafsir = writable(false);
export const settingMuqadimah = writable(false);
export const settingAudio = writable<'1' | '2' | '3'>('1');
export const settingAutoNext = writable(false);
// Settings storage -- END

export const isShowingAudioPlayer = writable(false);
export const isPlayingAudio = writable(false);

export type CurrentTrackParam = {
  verse: string
  surah: string
  totalAyah: number
}

export const currentTrack = writable<CurrentTrackParam>({
  verse: '',
  surah: '',
  totalAyah: 0
});
