<script lang="ts">
	import { onMount } from 'svelte';
	import { settingAudio, settingTranslation, settingTafsir } from '../store';
	import CardShadow from './CardShadow.svelte';
	import { formatAudioTime, getAudioFromEveryAyah } from './audio';
	import PauseIcon from './icons/PauseIcon.svelte';
	import PlayIcon from './icons/PlayIcon.svelte';
	import Button from './ui/Button.svelte';

	export let verse: string;
	export let numberVerse: string;
	export let numberSurah: string;

	export let translation: string;
	export let tafsir: string;

	let isPlaying = false;
	let totalTime = 0;
	let currentTime = 0;
	let percent = 0;
	let audioRef: HTMLAudioElement;

	function play() {
		audioRef.load();
		audioRef.play();
		isPlaying = true;
	}

	function pause() {
		audioRef.pause();
		isPlaying = false;
	}

	const handlePlayPauseAudio = () => {
		if (typeof audioRef !== 'undefined') {
			if (audioRef.paused) {
				play();
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

	onMount(() => {
		if (audioRef) {
			audioRef.addEventListener('timeupdate', updateAudioTimeline);
			audioRef.addEventListener('loadedmetadata', () => {
				totalTime = audioRef.duration;
			});

			audioRef.addEventListener('ended', function () {
				isPlaying = false;
				audioRef.currentTime = 0;
			});
		}
	});
</script>

<CardShadow>
	<div class="flex justify-end gap-4 items-start">
		<div class="font-bold text-2xl text-right font-arabic">{verse}</div>
		<div class="flex items-center justify-center border-2 rounded-lg h-8 px-2">
			{parseInt(numberVerse, 10).toLocaleString('ar-u-nu-arab', { useGrouping: false })}
		</div>
	</div>
	<div>
		<Button onClick={handlePlayPauseAudio}>
			{#if isPlaying}
				<PauseIcon />
			{:else}
				<PlayIcon />
			{/if}
			<audio bind:this={audioRef}>
				<source
					id={`audio-${numberSurah}-${numberVerse}`}
					src={getAudioFromEveryAyah($settingAudio, numberSurah, numberVerse)}
					type="audio/mpeg"
				/>
			</audio>
		</Button>
	</div>
	{#if isPlaying}
		<div class="flex justify-between my-2 text-sm">
			<span>{formatAudioTime(currentTime)}</span>
			<span>{formatAudioTime(totalTime)} </span>
		</div>
		<div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
			<div class="bg-blue-600 h-1.5 rounded-full" style={`width: ${percent}%`} />
		</div>
	{/if}
	{#if $settingTranslation && translation}
		<p class="p-4 italic text-gray-600 dark:text-gray-300">🔸 Terjemahan: {translation}</p>
	{/if}
	{#if $settingTafsir && tafsir}
		<div class="p-4 text-gray-600 dark:text-gray-300">
			<p class="mb-2 text-gray-600 dark:text-gray-300">🔹 Tafsir: {tafsir}</p>
			<small class="italic"
				>Sumber: Kemenag - Aplikasi Quran Kementrian Agama Republik Indonesia</small
			>
		</div>
	{/if}
</CardShadow>
