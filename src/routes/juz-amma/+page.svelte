<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import SurahList from '$lib/SurahList.svelte';
	import { META_DESC_JUZ_AMMA, META_TITLE_JUZ_AMMA, TITLE_CONSTANTS } from '$lib/constants';
	import MakkiyahMadaniyah from '../../data/makkiyah-madaniyah';
	import surahInfo, { type SurahInfo } from '../../data/surah-info';

	const SURAH_START = 78;

	function insertMakkiyahMadaniyah() {
		let result: SurahInfo = {};
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		for (const [_, surah] of Object.entries(surahInfo)) {
			if (surah.index >= SURAH_START) {
				result[surah.index] = {
					...surah,
					revelation: MakkiyahMadaniyah[surah.index] ? MakkiyahMadaniyah[surah.index] : 0
				};
			}
		}
		return result;
	}

	let originSurahInfo = insertMakkiyahMadaniyah();
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_JUZ_AMMA}
		desc={META_DESC_JUZ_AMMA}
		url={`${TITLE_CONSTANTS.PATH}juz-amma/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📒 Juz Amma</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: '🏠 Beranda', href: '/' }]} />
</div>

<SurahList {originSurahInfo} />

<SeoText variant="JUZ_AMMA" />
