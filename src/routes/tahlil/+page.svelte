<script lang="ts">
	import CardShadow from '$lib/CardShadow.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import tahlil from '../../data/tahlil';
</script>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">🤲 Tahlil</h1>
</div>

<div class="px-4 flex flex-col gap-2">
	{#each tahlil.data as item (item.id)}
		<CardShadow>
			<div class="flex flex-col justify-center gap-4">
				<span class="font-bold text-left">{item.title}</span>
				<span class="font-bold text-2xl font-arabic text-right">{item.arabic}</span>
				<small class="text-xs text-gray-400">🔸 Terjemahan: {item.translation}</small>
			</div>
		</CardShadow>
	{/each}
</div>

<SeoText variant="TAHLIL" />
