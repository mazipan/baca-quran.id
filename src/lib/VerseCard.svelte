<script lang="ts">
	import BottomSheet from './BottomSheet.svelte';
	import CardShadow from './CardShadow.svelte';
	import VerseAudioPlayerTrigger from './VerseAudioPlayerTrigger.svelte';
	import VerseSaveLastRead from './VerseSaveLastRead.svelte';
	import { TITLE_CONSTANTS } from './constants';
	import DocumentTextIcon from './icons/DocumentTextIcon.svelte';
	import ShareIcon from './icons/ShareIcon.svelte';
	import Button from './ui/Button.svelte';
	import { settingTafsir, settingTranslation } from '../store';

	export let verse: string;
	export let numberVerse: string;
	export let numberSurah: string;
	export let totalAyah: number;
	export let surahLatin: string;
	export let surahArabic: string;

	export let translation: string;
	export let tafsir: string;
	export let source: string;

	let showBottomSheet = false;
	let toggleBottomSheet = () => {
		showBottomSheet = !showBottomSheet;
	};

	async function handleShare(type: 'arabic' | 'terjemah' = 'arabic') {
		const TEXT_ARABIC = `${verse} (QS ${numberSurah}:${numberVerse})`;
		const TEXT_TERJEMAH = `${translation} (QS ${numberSurah}:${numberVerse})`;
		const TEXT = type === 'arabic' ? TEXT_ARABIC : TEXT_TERJEMAH;
		const shareData = {
			title: 'Baca-Quran.id',
			text: TEXT,
			url: `${TITLE_CONSTANTS.PATH}surah/${numberSurah}/${numberVerse}/`
		};

		try {
			if (typeof navigator !== 'undefined' && typeof navigator.share !== 'undefined') {
				await navigator.share(shareData);
			} else {
				window.open(
					`https://twitter.com/intent/tweet?text=${shareData.text}+%0A+${shareData.url}`,
					'_blank'
				);
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

	{#if $settingTranslation}
		<p class="pt-2 text-xs italic text-gray-600 dark:text-gray-300">
			{translation}
		</p>
	{/if}

	<div class="mt-4 flex justify-between items-center gap-2">
		<div class="flex items-center gap-2">
			<VerseAudioPlayerTrigger {totalAyah} {numberSurah} {numberVerse} {source} />
			<VerseSaveLastRead {surahLatin} {surahArabic} {numberSurah} {numberVerse} {source} />
			<Button
				onClick={() => {
					handleShare('arabic');
				}}
				ariaLabel="Bagikan Ayat"
			>
				<ShareIcon />
			</Button>
			{#if $settingTafsir}
				<Button onClick={toggleBottomSheet} ariaLabel="Baca Terjemah">
					<DocumentTextIcon />
				</Button>
			{/if}
		</div>
		<div class="flex items-center justify-center tracking-tighter border-2 rounded-full h-8 w-8">
			{parseInt(numberVerse, 10).toLocaleString('ar-u-nu-arab', { useGrouping: false })}
		</div>
	</div>
</CardShadow>

<BottomSheet
	title={`💠 Terjemah & Tafsir Surat ${surahLatin}, Ayat ${numberVerse}`}
	show={showBottomSheet}
	onClose={toggleBottomSheet}
>
	<details class="p-4" open>
		<summary class="cursor-pointer text-lg font-bold text-gray-600 dark:text-gray-300">
			🔸 Terjemahan
		</summary>
		<p class="pt-2 italic text-gray-600 dark:text-gray-300">
			{translation}

			<Button
				onClick={() => {
					handleShare('terjemah');
				}}
				ariaLabel="Bagikan Terjemahan"
				class="mt-4"
			>
				Bagikan terjemahan <ShareIcon size="sm" />
			</Button>
		</p>
	</details>
	<details class="px-4 pt-2">
		<summary class="cursor-pointer text-lg font-bold text-gray-600 dark:text-gray-300">
			🔹 Tafsir
		</summary>
		<p class="pt-2 italic text-gray-600 dark:text-gray-300">
			{tafsir}
		</p>
		<div class="py-4 text-gray-600 dark:text-gray-300">
			<small class="italic"
				>Sumber: Kemenag - Aplikasi Quran Kementrian Agama Republik Indonesia</small
			>
		</div>
	</details>
</BottomSheet>
