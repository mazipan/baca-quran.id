<script lang="ts">
	import { navigating, page } from '$app/stores';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import Pagination from '$lib/Pagination.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import SurahCard from '$lib/SurahCard.svelte';
	import VerseCard from '$lib/VerseCard.svelte';
	import { META_DESC_SURAH, META_TITLE_SURAH, TITLE_CONSTANTS } from '$lib/constants';
	import { getJsonLdArticle, getJsonLdBreadcrumb, serializeSchema } from '$lib/utils/json-ld';
	import type { SurahInfoPage } from '$data/surah-info';
	import { onMount } from 'svelte';

	export let data: any;

	let surahid = data?.surahid;
	let surahData = data?.surahData;
	let surahInfo = data?.surahInfo as SurahInfoPage;
  let timeout: any = null

	onMount(() => {
		if ($page.url.hash) {
      if (timeout !== null) {
        clearTimeout(timeout)
      }

			timeout = setTimeout(() => {
				const element = document.getElementById($page.url.hash.replace('#', ''));
				if (element && element.getBoundingClientRect) {
					const elementPosition = element.getBoundingClientRect().top;
					const offsetPosition = elementPosition + window.pageYOffset;

					if (window.scrollTo) {
						window.scrollTo({
							top: offsetPosition,
							behavior: 'smooth'
						});
					}
				}
			}, 500);
		}
	});
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_SURAH(surahInfo.current.latin)}
		desc={META_DESC_SURAH(surahInfo.current.latin)}
		url={`${TITLE_CONSTANTS.PATH}surah/${surahid}/`}
		canonical={`${TITLE_CONSTANTS.PATH}surah/${surahid}/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📖 Baca per Surat</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: '🏠', href: '/' },
			{ text: 'Semua Surat', href: '/all-surah/' },
			{ text: surahInfo.current.latin, href: `/surah/${surahid}/` }
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

		<Pagination variant="surah" {surahInfo} {surahid} verseid="" />

		<div class="mt-8 flex flex-col gap-4">
			{#each Object.entries(surahData.text) as [numberVerse, verse] (verse)}
				<VerseCard
					verse={`${verse}`}
					{numberVerse}
					translation={surahData?.translations?.id?.text?.[numberVerse] || ''}
					tafsir={surahData?.tafsir?.id?.kemenag?.text?.[numberVerse] || ''}
					numberSurah={surahid}
					totalAyah={parseInt(`${surahInfo.current.ayah_count}`, 10)}
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
