<script lang="ts">
	import { settingTranslation, settingTafsir } from '../store';
	import CardShadow from './CardShadow.svelte';
	import VerseAudioPlayerTrigger from './VerseAudioPlayerTrigger.svelte';
	import VerseSaveLastRead from './VerseSaveLastRead.svelte';
	import { TITLE_CONSTANTS } from './constants';
	import ShareIcon from './icons/ShareIcon.svelte';
	import Button from './ui/Button.svelte';

	export let verse: string;
	export let numberVerse: string;
	export let numberSurah: string;
	export let totalAyah: number;
	export let surahLatin: string;
	export let surahArabic: string;

	export let translation: string;
	export let tafsir: string;
	export let source: string;

	async function handleShare() {
		const shareData = {
			title: 'Baca-Quran.id',
			text: `[QS ${numberSurah}:${numberVerse}] Surat ${surahLatin}, Ayat ${numberVerse}.`,
			url: `${TITLE_CONSTANTS.PATH}${numberSurah}/${numberVerse}/`
		};
		try {
			if (typeof navigator !== 'undefined' && typeof navigator.share !== 'undefined') {
				await navigator.share(shareData);
			} else {
				window.open(`https://twitter.com/intent/tweet?text=${shareData.text}+%0A+${shareData.url}`, '_blank');
			}
		} catch (err) {
			console.error(`Error when exec navigator.share: ${err}`);
		}
	}
</script>

<CardShadow>
	<div class="flex justify-end gap-4 items-start" id={`ayat-${numberVerse}`} data-source={source}>
		<div class="font-bold text-2xl text-right font-arabic">{verse}</div>
	</div>

	<div class="mt-4 flex justify-between items-center gap-2">
		<div class="flex items-center gap-2">
			<VerseAudioPlayerTrigger {totalAyah} {numberSurah} {numberVerse} {source} />
			<VerseSaveLastRead {surahLatin} {surahArabic} {numberSurah} {numberVerse} {source} />
			<Button onClick={handleShare}>
				<ShareIcon />
			</Button>
		</div>
		<div class="flex items-center justify-center border-2 rounded-full h-8 w-8">
			{parseInt(numberVerse, 10).toLocaleString('ar-u-nu-arab', { useGrouping: false })}
		</div>
	</div>

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
