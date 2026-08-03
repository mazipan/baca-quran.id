<script lang="ts">
	import SearchInput from '$lib/SearchInput.svelte';
	import SurahCard from '$lib/SurahCard.svelte';
	import type { SurahInfo } from '../data/surah-info';

	interface Props {
		originSurahInfo: SurahInfo;
	}

	let { originSurahInfo }: Props = $props();

	let searchText = $state('');
	const noSpecialChars = (str: string) => str.replace(/[^a-zA-Z0-9 ]/g, '');

	const handleSearchChange = (e: Event) => {
		const target = e.target as HTMLInputElement;
		searchText = target?.value || '';
	};

	const filteredSurahInfo = $derived.by(() => {
		if (searchText.length > 1) {
			let result: SurahInfo = {};

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

			return result;
		}

		return originSurahInfo;
	});
</script>

<div class="px-4 flex flex-col gap-2">
	<SearchInput {searchText} onChange={handleSearchChange} />

	{#each Object.entries(filteredSurahInfo) as [_, item] (item.latin)}
		<SurahCard surah={item} />
	{/each}
</div>
