<script lang="ts">
	import SeoText from '$lib/SeoText.svelte';
	import SurahCard from '$lib/SurahCard.svelte';
	import SurahInfo from '../../data/surah-info';

	const SURAH_START = 78;

	let juzAmma = Object.keys(SurahInfo)
		.map((key) => {
			return SurahInfo[key];
		})
		.filter((surah) => surah.index >= SURAH_START);
</script>

<div class="flex gap-2 px-2 mb-4">
	<h1 class="text-3xl font-bold">📒 Juz Amma</h1>
</div>

<div class="px-2 flex flex-col gap-2">
	{#each juzAmma as item (item.latin)}
		<SurahCard surah={item} />
	{/each}
</div>

<SeoText variant="JUZ_AMMA" />
