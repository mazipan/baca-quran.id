<script lang="ts">
	import SeoText from '$lib/SeoText.svelte';
	import dailyDoa from '../../data/daily-doa';
</script>

<div class="flex gap-2 px-2 mb-4">
	<h1 class="text-3xl font-bold">🙏 Doa Harian</h1>
</div>

<div class="px-2 flex flex-col gap-2">
	{#each dailyDoa as item (item.title)}
		<div class="rounded overflow-hidden shadow-lg border-2">
			<div class="px-6 py-4 flex flex-col justify-center gap-4">
				<span class="font-bold text-left">💠 {item.title}</span>
				<span class="font-bold text-2xl font-arabic text-right">{item.arabic}</span>
				<small class="text-sm text-gray-400 italic">{item.latin}</small>
				<small class="text-xs text-gray-400">🔸 Terjemahan: {item.translation}</small>
			</div>
		</div>
	{/each}
</div>

<SeoText variant="DAILY_DOA" />
