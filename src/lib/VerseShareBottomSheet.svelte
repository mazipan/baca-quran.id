<script lang="ts">
	import { verseShareSheet } from '../store/verseShareSheet';
	import BottomSheet from '$lib/ui/BottomSheet.svelte';
	import Button from './ui/Button.svelte';
	import ShareIcon from './icons/ShareIcon.svelte';
	import LinkIcon from './icons/LinkIcon.svelte';

	const handleShareVerse = () => {
		verseShareSheet.share({
			...$verseShareSheet,
			type: 'arabic'
		});
	};

	const handleShareTranslation = () => {
		verseShareSheet.share({
			...$verseShareSheet,
			type: 'terjemah'
		});
	};
</script>

<BottomSheet
	id="verse-share"
	title={$verseShareSheet.title}
	show={$verseShareSheet.show}
	onClose={verseShareSheet.hide}
>
	<div class="p-4 flex flex-col gap-4">
		<Button onClick={handleShareVerse}>
			<ShareIcon size="sm" /> Bagikan Ayat
		</Button>
		<Button onClick={handleShareTranslation}>
			<ShareIcon size="sm" />Bagikan Terjemahan
		</Button>
		<a
			href={`/surah/${$verseShareSheet.numberSurah}/${$verseShareSheet.numberVerse}/`}
			class="flex items-center gap-2 cursor-pointer p-2 rounded-md bg-primary focus:ring-2 focus:ring-blue-500"
			data-sveltekit-reload
		>
			<LinkIcon size="sm" /> Kunjungi Tautan Ayat
		</a>
	</div>
</BottomSheet>
