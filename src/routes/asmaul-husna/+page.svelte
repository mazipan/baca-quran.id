<script lang="ts">
	import SeoText from '$lib/SeoText.svelte';
	import asmaulHusna from '../../data/asmaul-husna';
</script>

<div class="flex gap-2 px-2 mb-4">
  <h1 class="text-3xl font-bold">💯 Asmaul Husna</h1>
</div>

<div class="px-2 flex flex-col gap-2">
	{#each asmaulHusna as item (item.latin)}
		<div class="rounded overflow-hidden shadow-lg border-2">
			<div class="px-6 py-4 flex justify-between">
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
		</div>
	{/each}
</div>

<SeoText variant="ASMAUL_HUSNA" />
