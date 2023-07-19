<script lang="ts">
	import MetaTag from '$lib/MetaTag.svelte';
	import SearchInput from '$lib/SearchInput.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import SurahCard from '$lib/SurahCard.svelte';
	import { META_DESC_ALL_SURAH, META_TITLE_ALL_SURAH, TITLE_CONSTANTS } from '$lib/constants';
	import surahInfo, { type SurahInfo } from '../../data/surah-info';
	import MakkiyahMadaniyah from '../../data/makkiyah-madaniyah';

	function insertMakkiyahMadaniyah() {
		let result: SurahInfo = {};
		for (const [surahIndex, surah] of Object.entries(surahInfo)) {
			result[surahIndex] = {
        ...surah,
        revelation: MakkiyahMadaniyah[surahIndex] ? MakkiyahMadaniyah[surahIndex] : 0
      };
		}
    return result
	}

  let originSurahInfo = insertMakkiyahMadaniyah()
	let searchText = '';
	let filteredSurahInfo: SurahInfo = originSurahInfo;
	const noSpecialChars = (str: string) => str.replace(/[^a-zA-Z0-9 ]/g, '');

	const handleSearchChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		searchText = target?.value || '';
	};

	$: {
		if (searchText.length > 1) {
			let result: SurahInfo = {};

			for (const [surahIndex, surah] of Object.entries(originSurahInfo)) {
				if (
					noSpecialChars(surah.latin.toLowerCase()).indexOf(
						noSpecialChars(searchText.toLowerCase())
					) >= 0 ||
					noSpecialChars(surah.translation.toLowerCase()).indexOf(
						noSpecialChars(searchText.toLowerCase())
					) >= 0
				) {
					result[surahIndex] = surah;
				}
			}

			filteredSurahInfo = result;
		} else {
			filteredSurahInfo = originSurahInfo;
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
	<SearchInput {searchText} onChange={handleSearchChange} />

	{#each Object.entries(filteredSurahInfo) as [_, item] (item.latin)}
		<SurahCard surah={item} />
	{/each}
</div>

<SeoText variant="ALL_SURAH" />
