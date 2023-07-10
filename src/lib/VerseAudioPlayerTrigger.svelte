<script lang="ts">
	import {
		isShowingAudioPlayer,
		currentTrack,
		type CurrentTrackParam
	} from '../store';

	import PlayIcon from './icons/PlayIcon.svelte';
	import Button from './ui/Button.svelte';
	import SpeakerXMarkIcon from './icons/SpeakerXMarkIcon.svelte';

	export let totalAyah: number;
	export let numberVerse: string;
	export let numberSurah: string;
	export let source: string;

	const handleOpenClosePlayer = ({ surah, verse, totalAyah }: CurrentTrackParam) => {
		if ($isShowingAudioPlayer) {
			currentTrack.set({
				surah: '',
				verse: '',
				totalAyah: 0
			});
			isShowingAudioPlayer.set(false);
		} else {
			currentTrack.set({
				surah,
				verse,
				totalAyah
			});
			isShowingAudioPlayer.set(true);
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
>
	{#if $isShowingAudioPlayer}
		<SpeakerXMarkIcon />
	{:else}
		<PlayIcon />
	{/if}
</Button>
