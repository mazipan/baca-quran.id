<script lang="ts">
	import CardShadow from '$lib/CardShadow.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import asmaulHusna from '../../data/asmaul-husna';
</script>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">💯 Asmaul Husna</h1>
</div>

<div class="px-4 flex flex-col gap-2">
	{#each asmaulHusna as item (item.latin)}
		<CardShadow>
			<div class="flex justify-between">
				<div class="flex gap-2 items-center">
					<div class="flex flex-col items-start justify-center">
						<span class="font-bold">{item.latin}</span>
						<small class="text-xs text-gray-400">🇬🇧 {item.translation_en}</small>
						<small class="text-xs text-gray-400">🇮🇩 {item.translation_id}</small>
					</div>
				</div>

				<div class="flex flex-col items-end justify-center">
					<span class="font-bold text-2xl font-arabic text-right">{item.arabic}</span>
				</div>
			</div>
		</CardShadow>
	{/each}
</div>

<SeoText variant="ASMAUL_HUSNA" />
