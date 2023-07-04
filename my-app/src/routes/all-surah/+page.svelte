<script lang="ts">
	import SurahInfo from '../../data/surah-info';
</script>

<div class="flex gap-2 px-2 mb-4">
  <h1 class="text-3xl font-bold">📚 Daftar Semua Surat</h1>
</div>

<div class="px-2 flex flex-col gap-2">
	{#each Object.entries(SurahInfo) as [_, item] (item.latin)}
		<a class="rounded overflow-hidden shadow-lg border-2" href={`/${item.index}`}>
			<div class="px-6 py-4 flex justify-between">
        <div class="flex gap-2 items-center">
          <div class="flex items-center justify-center text-3xl">
            {item.index.toLocaleString('ar-u-nu-arab', { useGrouping: false })}
          </div>
          <div class="flex flex-col items-start justify-center">
            <span class="font-bold">{item.latin}</span>
            <small class="text-xs text-gray-400">{item.translation}</small>
          </div>
        </div>

        <div class="flex flex-col items-end justify-center">
          <span class="font-bold text-xl font-arabic">{item.arabic}</span>
          <small class="text-xs text-gray-400 text-right">{item.ayah_count} ayat</small>
        </div>
			</div>
		</a>
	{/each}
</div>
