<script lang="ts">
	import MetaTag from '$lib/MetaTag.svelte';
	import SearchInput from '$lib/SearchInput.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import SurahCard from '$lib/SurahCard.svelte';
	import { META_DESC_MAKKIYAH, META_TITLE_MAKKIYAH, TITLE_CONSTANTS } from '$lib/constants';
	import surahInfo, { type SurahInfo } from '../../data/surah-info';
	import MakkiyahMadaniyah, { MAKKIYAH_CODE } from '../../data/makkiyah-madaniyah';

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
    return result
	}

  let originSurahInfo = filterOnlyMakkiyah()
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

			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			for (const [_, surah] of Object.entries(originSurahInfo)) {
				if (
					noSpecialChars(surah.latin.toLowerCase()).indexOf(
						noSpecialChars(searchText.toLowerCase())
					) >= 0 ||
					noSpecialChars(surah.translation.toLowerCase()).indexOf(
						noSpecialChars(searchText.toLowerCase())
					) >= 0
				) {
					result[surah.index] = surah;
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
		title={META_TITLE_MAKKIYAH}
		desc={META_DESC_MAKKIYAH}
		url={`${TITLE_CONSTANTS.PATH}surah-makkiyah`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📚 Daftar Surat Makkiyah</h1>
</div>

<div class="px-4 flex flex-col gap-2">
	<SearchInput {searchText} onChange={handleSearchChange} />

	{#each Object.entries(filteredSurahInfo) as [_, item] (item.latin)}
		<SurahCard surah={item} />
	{/each}
</div>

<SeoText variant="MAKKIYAH" />
