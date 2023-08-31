<script lang="ts">
	import Drawer from '$lib/Drawer.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { CONSTANTS } from '$lib/constants';
	import { onMount } from 'svelte';
	import {
		settingAudio,
		settingMuqadimah,
		settingTafsir,
		settingTranslation,
		settingAutoNext,
		pinnedSurah,
		lastReadVerses,
		settingLocation
	} from '../store';

	import '../app.css';
	import { getJsonLdWebsite, serializeSchema } from '$lib/utils/json-ld';
	import VerseAudioPlayer from '$lib/VerseAudioPlayer.svelte';
	import type { ReciterKey } from '$lib/utils/audio';
	import Toaster from '$lib/Toaster.svelte';
	import VerseTafsirBottomSheet from '$lib/VerseTafsirBottomSheet.svelte';
	import VerseShareBottomSheet from '$lib/VerseShareBottomSheet.svelte';
	import GlobalBottomSheet from '$lib/GlobalBottomSheet.svelte';

	let isDrawerOpen = false;

	let handleToggleDrawer = () => {
		isDrawerOpen = !isDrawerOpen;
	};

	onMount(() => {
		// Make sure it's only run on the client
		if (typeof window !== 'undefined') {
			if (typeof localStorage !== 'undefined') {
				const storageMukadimah = localStorage.getItem(CONSTANTS.STORAGE_KEY.MUKADIMAH);
				settingMuqadimah.set(!!(storageMukadimah && storageMukadimah === 'y'));

				const storageTafsir = localStorage.getItem(CONSTANTS.STORAGE_KEY.TAFSIR);
				settingTafsir.set(!!(storageTafsir && storageTafsir === 'y'));

				const storageTranslation = localStorage.getItem(CONSTANTS.STORAGE_KEY.TRANSLATION);
				settingTranslation.set(!!(storageTranslation && storageTranslation === 'y'));

				const storageAutoNext = localStorage.getItem(CONSTANTS.STORAGE_KEY.AUTO_NEXT);
				settingAutoNext.set(!!(storageAutoNext && storageAutoNext === 'y'));

				const storageAudio = localStorage.getItem(CONSTANTS.STORAGE_KEY.AUDIO);
				if (storageAudio) {
					settingAudio.set(storageAudio as ReciterKey);
				} else {
					settingAudio.set('1');
				}

				const storagePinnedSurah = localStorage.getItem(CONSTANTS.STORAGE_KEY.PINNED_SURAH);
				if (storagePinnedSurah) {
					const parsedValue = JSON.parse(storagePinnedSurah);
					pinnedSurah.set(parsedValue || []);
				} else {
					pinnedSurah.set([]);
				}

				const storageLastVerses = localStorage.getItem(CONSTANTS.STORAGE_KEY.LAST_VERSES);
				if (storageLastVerses) {
					const parsedValue = JSON.parse(storageLastVerses);
					lastReadVerses.set(parsedValue || []);
				} else {
					lastReadVerses.set([]);
				}

				const storageLocation = localStorage.getItem(CONSTANTS.STORAGE_KEY.LOCATION);
				if (storageLocation) {
					const parsedValue = JSON.parse(storageLocation);
					settingLocation.set({
						lt: parsedValue?.lt || 0,
						lg: parsedValue?.lg || 0,
						district: parsedValue?.district || ''
					});
				} else {
					settingLocation.set(null);
				}
			}
		}
	});
</script>

<svelte:head>
	{@html serializeSchema(getJsonLdWebsite())}
</svelte:head>

<div>
	<div class="relative container mx-auto max-w-[500px]">
		<Drawer open={isDrawerOpen} onToggle={handleToggleDrawer} />
		<Header onToggleDrawer={handleToggleDrawer} />
		<!-- <Gradient variant="top" /> -->
		<main class="min-h-[70vh]">
			<slot />
		</main>
		<!-- <Gradient variant="bottom" /> -->
		<Footer />
		<VerseAudioPlayer />
		<Toaster />
		<VerseTafsirBottomSheet />
		<VerseShareBottomSheet />
		<GlobalBottomSheet />
	</div>
</div>
