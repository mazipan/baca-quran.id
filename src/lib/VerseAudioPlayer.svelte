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

	let reachingEndOfSurah = $state(false);
	let totalTime = $state(0);
	let currentTime = $state(0);
	let percent = $state(0);
	let audioRef: HTMLAudioElement | undefined = $state();

	function play({ surah, verse, totalAyah }: CurrentTrackParam) {
		if (audioRef) {
			currentTrack.set({ verse, surah, totalAyah });
			currentTime = 0;
			totalTime = 0;
			percent = 0;
			const src = getAudioFromEveryAyah($settingAudio, surah, verse);
			const currentSrc = audioRef.getAttribute('src');
			if (src !== currentSrc) {
				audioRef.setAttribute('src', src);
			}
			audioRef.load();
			audioRef.play().catch(() => {});
			isPlayingAudio.set(true);
			isShowingAudioPlayer.set(true);
			reachingEndOfSurah = false;
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
			percent = totalTime > 0 ? (currentTime / totalTime) * 100 : 0;
		}
	}

	function handleProgressClick(e: MouseEvent) {
		if (audioRef && totalTime > 0) {
			const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
			const newTime = ((e.clientX - rect.left) / rect.width) * totalTime;
			audioRef.currentTime = Math.max(0, Math.min(newTime, totalTime));
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
					const nextTrack = {
						surah: `${nextSurah}`,
						verse: `${nextVerse}`,
						totalAyah: +$currentTrack.totalAyah
					};
					currentTrack.set(nextTrack);
					play(nextTrack);

					setTimeout(() => {
						const el = document.getElementById(`ayat-${nextVerse}`);
						if (el) {
							el.scrollIntoView({ behavior: 'smooth', block: 'center' });
						}
					}, 100);
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

	function closePlayer() {
		pause();
		currentTrack.set({ surah: '', verse: '', totalAyah: 0 });
		isShowingAudioPlayer.set(false);
	}

	function attachListeners() {
		if (audioRef) {
			audioRef.addEventListener('timeupdate', updateAudioTimeline);
			audioRef.addEventListener('loadedmetadata', () => {
				totalTime = audioRef?.duration ?? 0;
			});
			audioRef.addEventListener('ended', handleEndPlaying);

			window.addEventListener('audio-stop', () => {
				pause();
			});

			window.addEventListener('audio-play', (e: Event) => {
				play((e as CustomEvent<CurrentTrackParam>).detail);
			});
		}
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
						></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
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

			<div
				class="w-full bg-primary rounded-full h-3 cursor-pointer flex items-center"
				role="slider"
				aria-label="Audio progress"
				aria-valuemin={0}
				aria-valuemax={totalTime}
				aria-valuenow={currentTime}
				tabindex="0"
				onclick={handleProgressClick}
				onkeydown={(e) => {
					if (!audioRef || totalTime <= 0) return;
					if (e.key === 'ArrowRight')
						audioRef.currentTime = Math.min(audioRef.currentTime + 5, totalTime);
					if (e.key === 'ArrowLeft') audioRef.currentTime = Math.max(audioRef.currentTime - 5, 0);
				}}
			>
				<div
					class="bg-lime-400 h-1.5 rounded-full pointer-events-none"
					style={`width: ${percent}%`}
				></div>
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
