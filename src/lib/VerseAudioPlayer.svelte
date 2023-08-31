<script lang="ts">
	import { onMount } from 'svelte';
	import {
		settingAudio,
		settingAutoNext,
		isPlayingAudio,
		isShowingAudioPlayer,
		currentTrack,
		type CurrentTrackParam
	} from '../store';
	import { formatAudioTime, getAudioFromEveryAyah, RECITER_MAP } from '$lib/utils/audio';

	import PauseIcon from './icons/PauseIcon.svelte';
	import PlayIcon from './icons/PlayIcon.svelte';
	import Button from './ui/Button.svelte';
	import CardShadow from './CardShadow.svelte';
	import ArrowRightIcon from './icons/ArrowRightIcon.svelte';
	import XMarkIcon from './icons/XMarkIcon.svelte';

	let reachingEndOfSurah = false;
	let totalTime = 0;
	let currentTime = 0;
	let percent = 0;
	let audioRef: HTMLAudioElement;

	function play({ surah, verse, totalAyah }: CurrentTrackParam) {
		if (audioRef) {
			currentTrack.set({
				verse,
				surah,
				totalAyah
			});
			const src = getAudioFromEveryAyah($settingAudio, surah, verse);
			const currentSrc = audioRef.getAttribute('src');
			if (src !== currentSrc) {
				audioRef.setAttribute('src', getAudioFromEveryAyah($settingAudio, surah, verse));
			}

			audioRef.load();
			audioRef.play();
			isPlayingAudio.set(true);
			isShowingAudioPlayer.set(true);
		}
	}

	function pause() {
		if (audioRef) {
			audioRef.pause();
			isPlayingAudio.set(false);
		}
	}

	const handlePlayPauseAudio = () => {
		if (typeof audioRef !== 'undefined') {
			if (audioRef.paused) {
				audioRef.play();
				isPlayingAudio.set(true);
			} else {
				pause();
			}
		}
	};

	function updateAudioTimeline() {
		if (audioRef) {
			currentTime = audioRef.currentTime;
			percent = (currentTime / totalTime) * 100;
		}
	}

	function handleEndPlaying() {
		if (audioRef) {
			isPlayingAudio.set(false);
			audioRef.currentTime = 0;

			if ($settingAutoNext) {
				const endOfSurah = +$currentTrack.verse >= +$currentTrack.totalAyah;
				reachingEndOfSurah = endOfSurah;

				if (!endOfSurah) {
					const nextVerse = +$currentTrack.verse + 1;
					const nextSurah = +$currentTrack.surah;

					play({
						surah: `${nextSurah}`,
						verse: `${nextVerse}`,
						totalAyah: +$currentTrack.totalAyah
					});
				}
			}
		}
	}

	function playNextSurah() {
		if (+$currentTrack.surah < 114) {
			reachingEndOfSurah = false;
			const nextSurah = +$currentTrack.surah + 1;
			window.location.assign(`/surah/${nextSurah}/`);
		}
	}

	function attachListeners() {
		if (audioRef) {
			audioRef.addEventListener('timeupdate', updateAudioTimeline);
			audioRef.addEventListener('loadedmetadata', () => {
				totalTime = audioRef.duration;
			});

			audioRef.addEventListener('ended', handleEndPlaying);
			window.addEventListener('paused', () => {
				pause();
			});
		}
	}

	function closePlayer() {
		pause();
		isShowingAudioPlayer.set(false);
	}

	$: if ($isShowingAudioPlayer) {
		play($currentTrack);
	}

	onMount(() => {
		attachListeners();
	});
</script>

{#if $isShowingAudioPlayer}
	<div class="fixed bottom-0 left-0 right-0 px-6 py-4 z-20 mx-auto max-w-[500px]">
		<CardShadow class="border-primary border-2">
			<div class="flex justify-between items-center gap-2 rounded-t-2xl bg-secondary mb-2">
				<div class="text-sm flex items-center gap-2">
					<span class="relative flex h-3 w-3">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
						/>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
					</span>
					<span>Memutar Q.S {$currentTrack?.surah}:{$currentTrack?.verse}</span>
				</div>

				<Button onClick={closePlayer}>
					<XMarkIcon size="sm" />
				</Button>
			</div>
			<div class="flex justify-between items-center my-2 text-sm">
				<span>{formatAudioTime(currentTime)}</span>
				<Button onClick={handlePlayPauseAudio}>
					{#if $isPlayingAudio}
						<PauseIcon />
					{:else}
						<PlayIcon />
					{/if}
				</Button>
				<span>{formatAudioTime(totalTime)} </span>
			</div>

			<div class="w-full bg-primary rounded-full h-1.5">
				<div class="bg-lime-400 h-1.5 rounded-full" style={`width: ${percent}%`} />
			</div>

			<div class="text-sm mt-2 flex justify-between items-center">
				<span class="font-bold">🔊 {RECITER_MAP[$settingAudio]?.name || RECITER_MAP[1]?.name}</span>
			</div>

			{#if reachingEndOfSurah}
				<div class="mt-2">
					<Button onClick={playNextSurah} class="text-sm w-full justify-center">
						Surat Berikutnya
						<ArrowRightIcon size="sm" />
					</Button>
				</div>
			{/if}
		</CardShadow>
	</div>
{/if}

<audio bind:this={audioRef}>
	<source
		id={`audio-player`}
		src=""
		type="audio/mpeg"
		data-surah={`${$currentTrack.surah}`}
		data-verse={`${$currentTrack.verse}`}
		data-total-ayah={`${$currentTrack.totalAyah}`}
	/>
</audio>
