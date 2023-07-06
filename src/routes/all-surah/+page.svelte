<script lang="ts">
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import SurahCard from '$lib/SurahCard.svelte';
	import { META_DESC_ALL_SURAH, META_TITLE_ALL_SURAH, TITLE_CONSTANTS } from '$lib/constants';
import SurahInfo from '../../data/surah-info';
</script>

<svelte:head>
  <MetaTag title={META_TITLE_ALL_SURAH} desc={META_DESC_ALL_SURAH} url={`${TITLE_CONSTANTS.PATH}`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
  <h1 class="text-3xl font-bold">📚 Daftar Semua Surat</h1>
</div>

<div class="px-4 flex flex-col gap-2">
	{#each Object.entries(SurahInfo) as [_, item] (item.latin)}
    <SurahCard surah={item}/>
	{/each}
</div>

<SeoText variant="ALL_SURAH" />
