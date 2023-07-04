<script>
	import { surah_info } from '../../data/surah-info.json';

	console.log(surah_info);
</script>

<div class="flex flex-col gap-2">
	{#each surah_info as item (item.index)}
		<div class="rounded overflow-hidden shadow-lg">
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
		</div>
	{/each}
</div>
