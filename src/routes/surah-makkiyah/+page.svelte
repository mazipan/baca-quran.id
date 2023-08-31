<script lang="ts">
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { META_DESC_MAKKIYAH, META_TITLE_MAKKIYAH, TITLE_CONSTANTS } from '$lib/constants';
	import surahInfo, { type SurahInfo } from '../../data/surah-info';
	import MakkiyahMadaniyah, { MAKKIYAH_CODE } from '../../data/makkiyah-madaniyah';
	import SurahList from '$lib/SurahList.svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';

	function filterOnlyMakkiyah() {
		let result: SurahInfo = {};
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		for (const [_, surah] of Object.entries(surahInfo)) {
			if (MakkiyahMadaniyah[surah.index] === MAKKIYAH_CODE) {
				result[surah.index] = {
					...surah,
					revelation: MakkiyahMadaniyah[surah.index] ? MakkiyahMadaniyah[surah.index] : 0
				};
			}
		}
		return result;
	}

	let originSurahInfo = filterOnlyMakkiyah();
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_MAKKIYAH}
		desc={META_DESC_MAKKIYAH}
		url={`${TITLE_CONSTANTS.PATH}surah-makkiyah`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📚 Daftar Surat Makkiyah</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: '🏠', href: '/' },
			{ text: 'Semua Surat', href: '/all-surah/' }
		]}
	/>
</div>

<SurahList {originSurahInfo} />

<SeoText variant="MAKKIYAH" />
