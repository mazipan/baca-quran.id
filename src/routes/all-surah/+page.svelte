<script lang="ts">
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { META_DESC_ALL_SURAH, META_TITLE_ALL_SURAH, TITLE_CONSTANTS } from '$lib/constants';
	import surahInfo, { type SurahInfo } from '../../data/surah-info';
	import MakkiyahMadaniyah from '../../data/makkiyah-madaniyah';
	import SurahList from '$lib/SurahList.svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';

	function insertMakkiyahMadaniyah() {
		let result: SurahInfo = {};
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		for (const [_, surah] of Object.entries(surahInfo)) {
			result[surah.index] = {
				...surah,
				revelation: MakkiyahMadaniyah[surah.index] ? MakkiyahMadaniyah[surah.index] : 0
			};
		}
		return result;
	}

	let originSurahInfo = insertMakkiyahMadaniyah();
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_ALL_SURAH}
		desc={META_DESC_ALL_SURAH}
		url={`${TITLE_CONSTANTS.PATH}all-surah/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📚 Daftar Semua Surat</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: '🏠 Beranda', href: '/' }]} />
</div>

<SurahList {originSurahInfo} />

<SeoText variant="ALL_SURAH" />
