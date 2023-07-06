<script lang="ts">
	import CardShadow from '$lib/CardShadow.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import dailyDoa from '../../data/daily-doa';
</script>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">🙏 Doa Harian</h1>
</div>

<div class="px-4 flex flex-col gap-2">
	{#each dailyDoa as item (item.title)}
		<CardShadow>
			<div class="flex flex-col justify-center gap-4">
				<span class="font-bold text-left">💠 {item.title}</span>
				<span class="font-bold text-2xl font-arabic text-right">{item.arabic}</span>
				<small class="text-sm text-gray-400 italic">{item.latin}</small>
				<small class="text-xs text-gray-400">🔸 Terjemahan: {item.translation}</small>
			</div>
		</CardShadow>
	{/each}
</div>

<SeoText variant="DAILY_DOA" />
