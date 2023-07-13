<script lang="ts">
	import MetaTag from '$lib/MetaTag.svelte';
	import SearchInput from '$lib/SearchInput.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import SurahCard from '$lib/SurahCard.svelte';
	import { META_DESC_JUZ_AMMA, META_TITLE_JUZ_AMMA, TITLE_CONSTANTS } from '$lib/constants';
	import SurahInfo, { type SurahInfoItem } from '../../data/surah-info';

	const SURAH_START = 78;
	let searchText = '';
	const noSpecialChars = (str: string) => str.replace(/[^a-zA-Z0-9 ]/g, '');

	const handleSearchChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		searchText = target?.value || '';
	};

	let JUZ_AMMA: SurahInfoItem[] = Object.keys(SurahInfo)
		.map((key) => {
			return SurahInfo[key];
		})
		.filter((surah) => surah.index >= SURAH_START);

	let filteredJuzAmma: SurahInfoItem[] = JUZ_AMMA;


	$: {
		if (searchText.length > 1) {
			let result: SurahInfoItem[] = [];

      JUZ_AMMA.forEach(surah => {
        if (
					noSpecialChars(surah.latin.toLowerCase()).indexOf(
						noSpecialChars(searchText.toLowerCase())
					) >= 0 ||
					noSpecialChars(surah.translation.toLowerCase()).indexOf(
						noSpecialChars(searchText.toLowerCase())
					) >= 0
				) {
					result.push(surah);
				}
      });

			filteredJuzAmma = result;
		} else {
			filteredJuzAmma = JUZ_AMMA;
		}
	}
</script>

<svelte:head>
  <MetaTag title={META_TITLE_JUZ_AMMA} desc={META_DESC_JUZ_AMMA} url={`${TITLE_CONSTANTS.PATH}juz-amma/`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📒 Juz Amma</h1>
</div>

<div class="px-4 flex flex-col gap-2">
	<SearchInput {searchText} onChange={handleSearchChange} />
	{#each filteredJuzAmma as item (item.latin)}
		<SurahCard surah={item} />
	{/each}
</div>

<SeoText variant="JUZ_AMMA" />
