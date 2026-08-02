<script lang="ts">
	import { isShowingAudioPlayer, currentTrack, type CurrentTrackParam } from '../store';

	import PlayIcon from './icons/PlayIcon.svelte';
	import Button from './ui/Button.svelte';
	import SpeakerXMarkIcon from './icons/SpeakerXMarkIcon.svelte';

	interface Props {
		totalAyah: number;
		numberVerse: string;
		numberSurah: string;
		source: string;
	}

	let { totalAyah, numberVerse, numberSurah, source }: Props = $props();

	const isThisVerseActive = $derived(
		$isShowingAudioPlayer &&
			$currentTrack.surah === numberSurah &&
			$currentTrack.verse === numberVerse
	);

	const handleOpenClosePlayer = ({ surah, verse, totalAyah }: CurrentTrackParam) => {
		const isSameVerse =
			$isShowingAudioPlayer && $currentTrack.surah === surah && $currentTrack.verse === verse;

		if (isSameVerse) {
			currentTrack.set({ surah: '', verse: '', totalAyah: 0 });
			window.dispatchEvent(new CustomEvent('audio-stop'));
			isShowingAudioPlayer.set(false);
		} else {
			currentTrack.set({ surah, verse, totalAyah });
			isShowingAudioPlayer.set(true);
			window.dispatchEvent(
				new CustomEvent<CurrentTrackParam>('audio-play', {
					detail: { surah, verse, totalAyah }
				})
			);
		}
	};
</script>

<Button
	data-trigger-source={source}
	onClick={() => {
		handleOpenClosePlayer({
			verse: numberVerse,
			surah: numberSurah,
			totalAyah: totalAyah
		});
	}}
	ariaLabel={`${isThisVerseActive ? 'Stop' : 'Play'}`}
>
	{#if isThisVerseActive}
		<SpeakerXMarkIcon />
	{:else}
		<PlayIcon />
	{/if}
</Button>
