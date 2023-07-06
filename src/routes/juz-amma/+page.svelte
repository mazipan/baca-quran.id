<script lang="ts">
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import SurahCard from '$lib/SurahCard.svelte';
	import { META_DESC_JUZ_AMMA, META_TITLE_JUZ_AMMA, TITLE_CONSTANTS } from '$lib/constants';
	import SurahInfo from '../../data/surah-info';

	const SURAH_START = 78;

	let juzAmma = Object.keys(SurahInfo)
		.map((key) => {
			return SurahInfo[key];
		})
		.filter((surah) => surah.index >= SURAH_START);
</script>

<svelte:head>
  <MetaTag title={META_TITLE_JUZ_AMMA} desc={META_DESC_JUZ_AMMA} url={`${TITLE_CONSTANTS.PATH}juz-amma/`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📒 Juz Amma</h1>
</div>

<div class="px-4 flex flex-col gap-2">
	{#each juzAmma as item (item.latin)}
		<SurahCard surah={item} />
	{/each}
</div>

<SeoText variant="JUZ_AMMA" />
