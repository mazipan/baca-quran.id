<script lang="ts">
	import { navigating } from '$app/stores';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import VerseCard from '$lib/VerseCard.svelte';
	import { META_DESC_SURAH, META_TITLE_SURAH, TITLE_CONSTANTS } from '$lib/constants';
	import { getJsonLdArticle, getJsonLdBreadcrumb, serializeSchema } from '$lib/json-ld';

	/** @type {import('./$types').PageData} */
	export let data;

	let surahid = data?.surahid;
	let surahData = data?.surahData;
	let surahInfo = data?.surahInfo;
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_SURAH(surahInfo.current.latin)}
		desc={META_DESC_SURAH(surahInfo.current.latin)}
		url={`${TITLE_CONSTANTS.PATH}surah/${surahid}`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📖 Baca per Surat</h1>
</div>

<article class="px-4">
	{#if $navigating}
		<span>Loading...</span>
	{:else}
		<CardShadow>
			<div class="flex justify-between">
				<div class="flex gap-2 items-center">
					<div class="flex items-center justify-center text-5xl">
						{parseInt(surahid, 10).toLocaleString('ar-u-nu-arab', { useGrouping: false })}
					</div>
					<div class="flex flex-col items-start justify-center">
						<span class="font-bold">{surahInfo.current.latin}</span>
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

		<Pagination variant="surah" {surahInfo} {surahid} verseid="" />

		<div class="mt-8 flex flex-col gap-4">
			{#each Object.entries(surahData.text) as [numberVerse, verse] (verse)}
				<VerseCard
					verse={`${verse}`}
					{numberVerse}
					translation={surahData?.translations?.id?.text?.[numberVerse] || ''}
					tafsir={surahData?.tafsir?.id?.kemenag?.text?.[numberVerse] || ''}
					numberSurah={surahid}
          totalAyah={parseInt(surahInfo.current.ayah_count, 10)}
          source="surah"
          surahLatin={surahInfo.current.latin}
          surahArabic={surahInfo.current.arabic}
				/>
			{/each}
		</div>

		<Pagination variant="surah" {surahInfo} {surahid} verseid="" />
	{/if}
</article>

<SeoText variant="SURAH_DETAIL" params={{ surahLatin: surahInfo.current.latin }} />

{@html serializeSchema(
	getJsonLdArticle({
		slug: `/surah/${surahid}`,
		title: META_TITLE_SURAH(surahInfo.current.latin),
		cover: 'meta-image.png',
		desc: META_DESC_SURAH(surahInfo.current.latin)
	})
)}

{@html serializeSchema(
	getJsonLdBreadcrumb({
		categoryTitle: 'Daftar Surat',
		categorySlug: 'all-surah',
		title: `${surahInfo.current.latin}`,
		slug: `${surahid}`
	})
)}
