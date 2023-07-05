<script lang="ts">
	import SeoText from '$lib/SeoText.svelte';
	import SurahCard from '$lib/SurahCard.svelte';
import SurahInfo from '../../data/surah-info';
</script>

<div class="flex gap-2 px-2 mb-4">
  <h1 class="text-3xl font-bold">📚 Daftar Semua Surat</h1>
</div>

<div class="px-2 flex flex-col gap-2">
	{#each Object.entries(SurahInfo) as [_, item] (item.latin)}
    <SurahCard surah={item}/>
	{/each}
</div>

<SeoText variant="ALL_SURAH" />
