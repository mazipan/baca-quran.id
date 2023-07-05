<script lang="ts">
	import type { SurahInfoItem } from "../data/surah-info";

	export let surah: SurahInfoItem;
</script>

<a class="rounded overflow-hidden shadow-lg border-2" href={`/${surah.index}`}>
	<div class="px-6 py-4 flex justify-between">
		<div class="flex gap-2 items-center">
			<div class="flex items-center justify-center text-3xl">
				{surah.index.toLocaleString('ar-u-nu-arab', { useGrouping: false })}
			</div>
			<div class="flex flex-col items-start justify-center">
				<span class="font-bold">{surah.latin}</span>
				<small class="text-xs text-gray-400">{surah.translation}</small>
			</div>
		</div>

		<div class="flex flex-col items-end justify-center">
			<span class="font-bold text-xl font-arabic">{surah.arabic}</span>
			<small class="text-xs text-gray-400 text-right">{surah.ayah_count} ayat</small>
		</div>
	</div>
</a>
