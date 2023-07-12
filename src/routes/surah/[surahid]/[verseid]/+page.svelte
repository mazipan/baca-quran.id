<script lang="ts">
	import { navigating } from '$app/stores';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import VerseCard from '$lib/VerseCard.svelte';
	import { META_DESC_AYAH, META_TITLE_AYAH, TITLE_CONSTANTS } from '$lib/constants';
	import { getJsonLdArticle, getJsonLdBreadcrumb, serializeSchema } from '$lib/json-ld';

	/** @type {import('./$types').PageData} */
	export let data;

	let surahid = data?.surahid;
	let verseid = data?.verseid;
	let verseData = data?.verseData;
	let surahInfo = data?.surahInfo;
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_AYAH(verseid, surahInfo.current.latin)}
		desc={META_DESC_AYAH(verseid, surahInfo.current.latin)}
		url={`${TITLE_CONSTANTS.PATH}surah/${surahid}/${verseid}`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📖 Baca per Ayat</h1>
</div>

<article class="px-4">
	{#if $navigating}
		<span>Loading...</span>
	{:else}
		<CardShadow>
			<div class="flex justify-between">
				<div class="flex gap-2 items-center">
					<div class="flex flex-col items-start justify-center">
						<a class="font-bold underline" href={`/surah/${surahid}/`}>{surahInfo.current.latin}</a>
						<small class="text-xs text-gray-400">{surahInfo.current.translation}</small>
					</div>
				</div>

				<div class="flex flex-col items-end justify-center">
					<span class="font-bold text-xl font-arabic">{surahInfo.current.arabic}</span>
					<small class="text-xs text-gray-400 text-right">{surahInfo.current.ayah_count} ayat</small
					>
				</div>
			</div>
		</CardShadow>

		<div class="mt-8 flex flex-col gap-4">
			<VerseCard
				verse={`${verseData.text}`}
				numberVerse={verseid}
				numberSurah={surahid}
				translation={verseData.translation}
				tafsir={verseData.tafsir}
        totalAyah={parseInt(surahInfo.current.ayah_count, 10)}
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
