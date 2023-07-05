<script lang="ts">
	import SeoText from '$lib/SeoText.svelte';
	import tahlil from '../../data/tahlil';
</script>

<div class="flex gap-2 px-2 mb-4">
	<h1 class="text-3xl font-bold">🤲 Tahlil</h1>
</div>

<div class="px-2 flex flex-col gap-2">
	{#each tahlil.data as item (item.id)}
		<div class="rounded overflow-hidden shadow-lg border-2">
			<div class="px-6 py-4 flex flex-col justify-center gap-4">
				<span class="font-bold text-left">{item.title}</span>
				<span class="font-bold text-2xl font-arabic text-right">{item.arabic}</span>
				<small class="text-xs text-gray-400">🔸 Terjemahan: {item.translation}</small>
			</div>
		</div>
	{/each}
</div>

<SeoText variant="TAHLIL" />
