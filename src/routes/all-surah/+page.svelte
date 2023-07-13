<script lang="ts">
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import SurahCard from '$lib/SurahCard.svelte';
	import { META_DESC_ALL_SURAH, META_TITLE_ALL_SURAH, TITLE_CONSTANTS } from '$lib/constants';
	import SearchIcon from '$lib/icons/SearchIcon.svelte';
	import surahInfo, { type SurahInfo } from '../../data/surah-info';

	let searchText = '';
	let filteredSurahInfo: SurahInfo = surahInfo;

  const noSpecialChars = (str: string) => str.replace(/[^a-zA-Z0-9 ]/g, '');

	$: {
		if (searchText.length > 1) {
			let result: SurahInfo = {};

			for (const [surahIndex, surah] of Object.entries(surahInfo)) {
				if (
					noSpecialChars(surah.latin.toLowerCase()).indexOf(noSpecialChars(searchText.toLowerCase())) >= 0 ||
					noSpecialChars(surah.translation.toLowerCase()).indexOf(noSpecialChars(searchText.toLowerCase())) >= 0
				) {
					result[surahIndex] = surah;
				}
			}

			filteredSurahInfo = result;
		} else {
			filteredSurahInfo = surahInfo;
		}
	}
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_ALL_SURAH}
		desc={META_DESC_ALL_SURAH}
		url={`${TITLE_CONSTANTS.PATH}`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📚 Daftar Semua Surat</h1>
</div>

<div class="px-4 flex flex-col gap-2">
	<div class="relative mb-4">
		<input
			class="text-md bg-gray-50 border-0 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 block p-2.5 pl-10 dark:bg-blueish-700 dark:placeholder-gray-400 dark:text-white w-full"
			bind:value={searchText}
			type="search"
			placeholder="Cari surat apa?"
		/>
		<SearchIcon class="w-6 h-6 absolute left-2 top-2.5 z-10" />
	</div>

	{#each Object.entries(filteredSurahInfo) as [_, item] (item.latin)}
		<SurahCard surah={item} />
	{/each}
</div>

<SeoText variant="ALL_SURAH" />
