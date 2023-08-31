<script lang="ts">
	import { lastReadVerses, type BookmarkVerseItem } from '../store';

	import Button from './ui/Button.svelte';
	import BookmarkIcon from './icons/BookmarkIcon.svelte';
	import { CONSTANTS } from './constants';
	import BookmarkSolidIcon from './icons/BookmarkSolidIcon.svelte';
	import { toast } from '../store/toast';

	export let surahLatin: string;
	export let surahArabic: string;
	export let numberVerse: string;
	export let numberSurah: string;
	export let source: string;

	let handleBookmarkVerse = (e: MouseEvent) => {
		e.preventDefault();

		const thisItem: BookmarkVerseItem = {
			s: `${numberSurah}`,
			v: `${numberVerse}`,
			l: surahLatin,
			a: surahArabic
		};

		let isVerseExistInStorage = !!$lastReadVerses.find(
			(val) => val.s === numberSurah.toString() && val.v === numberVerse.toString()
		);

		if (!isVerseExistInStorage) {
			if ($lastReadVerses.length < 9) {
				// Check if the current surah is already there
				const lastVersesWithoutCurrentSurah = $lastReadVerses.filter(
					(i) => i.s !== thisItem.s.toString()
				);

				lastReadVerses.set([...lastVersesWithoutCurrentSurah, thisItem]);
				localStorage.setItem(CONSTANTS.STORAGE_KEY.LAST_VERSES, JSON.stringify($lastReadVerses));

				toast.show({
					message: `Berhasil menandai Surat <b>${surahLatin}</b> Ayat <b>${numberVerse}</b> sebagai terakhir dibaca!`,
					type: 'success'
				});
			}
		} else {
			lastReadVerses.update((prev) => {
				const newArray = prev.filter((val) => {
					if (val.s === numberSurah.toString() && val.v === numberVerse.toString()) {
						return false;
					}
					return true;
				});

				localStorage.setItem(CONSTANTS.STORAGE_KEY.LAST_VERSES, JSON.stringify(newArray));
				return newArray;
			});

			toast.show({
				message: `Berhasil membuang Surat <b>${surahLatin}</b> Ayat <b>${numberVerse}</b> dari terakhir dibaca!`,
				type: 'info'
			});
		}
	};
</script>

<Button data-trigger-source={source} onClick={handleBookmarkVerse} ariaLabel="Bookmark Ayat">
	{#if !!$lastReadVerses.find((val) => val.s === numberSurah.toString() && val.v === numberVerse.toString())}
		<BookmarkSolidIcon size="md" class="w-6 h-6 z-10 text-red-500" />
	{:else}
		<BookmarkIcon />
	{/if}
</Button>
