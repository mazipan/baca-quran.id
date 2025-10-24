<script lang="ts">
	import CardShadow from './CardShadow.svelte';
	import VerseAudioPlayerTrigger from './VerseAudioPlayerTrigger.svelte';
	import VerseSaveLastRead from './VerseSaveLastRead.svelte';
	import DocumentTextIcon from './icons/DocumentTextIcon.svelte';
	import ShareIcon from './icons/ShareIcon.svelte';
	import Button from './ui/Button.svelte';
	import { settingTafsir, settingTranslation } from '../store';
	import { verseTafsirSheet } from '../store/verseTafsirSheet';
	import { verseShareSheet } from '../store/verseShareSheet';
	import { t } from './translations/store';

	interface Props {
		verse: string;
		numberVerse: string;
		numberSurah: string;
		totalAyah: number;
		surahLatin: string;
		surahArabic: string;
		translation: string;
		tafsir: string;
		source: string;
	}

	let {
		verse,
		numberVerse,
		numberSurah,
		totalAyah,
		surahLatin,
		surahArabic,
		translation,
		tafsir,
		source
	}: Props = $props();

	let toggleBottomSheet = () => {
		verseTafsirSheet.show({
			title: $t('ui.tafsirTitle', { surahLatin, verseNumber: numberVerse }),
			tafsir,
			translation
		});
	};

	function handleShare() {
		verseShareSheet.show({
			title: $t('ui.shareVerseTitle', { surahLatin, verseNumber: numberVerse }),
			translation,
			verse,
			numberSurah,
			numberVerse
		});
	}
</script>

<CardShadow id={`ayat-${numberVerse}`}>
	<div class="flex justify-end gap-4 items-start" data-source={source}>
		<div class="font-bold text-2xl text-right font-arabic">{verse}</div>
	</div>

	{#if $settingTranslation}
		<p class="pt-2 text-xs italic">
			{translation}
		</p>
	{/if}

	<div class="mt-4 flex justify-between items-center gap-2">
		<div class="flex items-center gap-2">
			<VerseAudioPlayerTrigger {totalAyah} {numberSurah} {numberVerse} {source} />
			<VerseSaveLastRead {surahLatin} {surahArabic} {numberSurah} {numberVerse} {source} />
			<Button onClick={handleShare} ariaLabel={$t('surah.shareVerse')}>
				<ShareIcon />
			</Button>
			{#if $settingTafsir}
				<Button onClick={toggleBottomSheet} ariaLabel={$t('surah.readTranslation')}>
					<DocumentTextIcon />
				</Button>
			{/if}
		</div>
		<div
			class="flex items-center justify-center tracking-tighter border-2 rounded-full h-8 w-8 border-foreground"
		>
			{parseInt(numberVerse, 10).toLocaleString('ar-u-nu-arab', { useGrouping: false })}
		</div>
	</div>
</CardShadow>
