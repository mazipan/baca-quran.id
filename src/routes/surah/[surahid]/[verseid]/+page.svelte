<script lang="ts">
	import { navigating } from '$app/stores';
	import Pagination from '$lib/Pagination.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import VerseCard from '$lib/VerseCard.svelte';
	import { META_DESC_AYAH, META_TITLE_AYAH } from '$lib/constants';
	import { getJsonLdArticle, getJsonLdBreadcrumb, serializeSchema } from '$lib/json-ld';

	/** @type {import('./$types').PageData} */
	export let data;

	let surahid = data?.surahid;
	let verseid = data?.verseid;
	let verseData = data?.verseData;
	let surahInfo = data?.surahInfo;
</script>

<svelte:head>
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
</svelte:head>

<div class="flex gap-2 px-2 mb-4">
	<h1 class="text-3xl font-bold">📖 Baca per Ayat</h1>
</div>

<article class="px-2">
	{#if $navigating}
		<span>Loading...</span>
	{:else}
		<div class="rounded overflow-hidden shadow-lg border-2">
			<div class="px-6 py-4 flex justify-between">
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
		</div>

		<div class="mt-8 flex flex-col gap-4">
			<VerseCard verse={`${verseData.text}`} numberVerse={verseid} translation={verseData.translation} tafsir={verseData.tafsir} />
		</div>

		<Pagination variant="verse" {surahInfo} {surahid} {verseid} />
	{/if}
</article>

<SeoText
	variant="AYAT_DETAIL"
	params={{ surahLatin: surahInfo.current.latin, verseNumber: verseid }}
/>
