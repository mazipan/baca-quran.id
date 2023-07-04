<script>
	import SurahInfo from '../../data/surah-info';

  const SURAH_START = 78;

  let juzAmma = Object.keys(SurahInfo).map(key => {
    return SurahInfo[key]
  }).filter(surah => surah.index >= SURAH_START)
</script>

<div class="px-2 flex flex-col gap-2">
	{#each juzAmma as item (item.latin)}
		<a class="rounded overflow-hidden shadow-lg border-2" href={`/${item.index}`}>
			<div class="px-6 py-4 flex justify-between">
        <div class="flex gap-2 items-center">
          <div class="flex items-center justify-center bg-blue-700 text-gray-100 rounded w-14 h-8">
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
