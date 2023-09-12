<script lang="ts">
	import { navigating } from '$app/stores';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import SurahCard from '$lib/SurahCard.svelte';
	import VerseCard from '$lib/VerseCard.svelte';
	import { META_DESC_AYAH, META_TITLE_AYAH, TITLE_CONSTANTS } from '$lib/constants';
	import { getJsonLdArticle, getJsonLdBreadcrumb, serializeSchema } from '$lib/utils/json-ld';
	import type { SurahInfoPage } from '$data/surah-info';

	export let data: any;

	let surahid = data?.surahid;
	let verseid = data?.verseid;
	let verseData = data?.verseData;
	let surahInfo = data?.surahInfo as SurahInfoPage;
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_AYAH(verseid, surahid, surahInfo.current.latin, surahInfo.current.translation)}
		desc={META_DESC_AYAH(verseid, surahid, surahInfo.current.latin, surahInfo.current.translation)}
		url={`${TITLE_CONSTANTS.PATH}surah/${surahid}/${verseid}/`}
		canonical={`${TITLE_CONSTANTS.PATH}surah/${surahid}/${verseid}/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📖 Baca per Ayat</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: '🏠', href: '/' },
			{ text: surahInfo.current.latin, href: `/surah/${surahid}/` },
			{ text: `Ayat ${verseid}`, href: `/surah/${surahid}/${verseid}/` }
		]}
	/>
</div>

<article class="px-4">
	{#if $navigating}
		<span>Loading...</span>
	{:else}
		<div class="flex flex-col gap-2">
			<SurahCard surah={surahInfo.current} />
		</div>

		<div class="mt-8 flex flex-col gap-4">
			<VerseCard
				verse={`${verseData.text}`}
				numberVerse={verseid}
				numberSurah={surahid}
				translation={verseData.translation}
				tafsir={verseData.tafsir}
				totalAyah={parseInt(`${surahInfo.current.ayah_count}`, 10)}
				source="verse"
				surahLatin={surahInfo.current.latin}
				surahArabic={surahInfo.current.arabic}
			/>
		</div>

		<Pagination variant="verse" {surahInfo} {surahid} {verseid} />
	{/if}
</article>

<SeoText
	variant="AYAT_DETAIL"
	params={{ surahLatin: surahInfo.current.latin, verseNumber: verseid }}
/>

{@html serializeSchema(
	getJsonLdArticle({
		slug: `/surah/${surahid}/${verseid}`,
		title: META_TITLE_AYAH(verseid, surahInfo.current.latin),
		cover: 'meta-image.png',
		desc: META_DESC_AYAH(verseid, surahInfo.current.latin)
	})
)}

{@html serializeSchema(
	getJsonLdBreadcrumb({
		categoryTitle: `QS ${surahid}`,
		categorySlug: `${surahid}`,
		title: `QS ${surahid}:${verseid}`,
		slug: `/surah/${surahid}/${verseid}`
	})
)}
