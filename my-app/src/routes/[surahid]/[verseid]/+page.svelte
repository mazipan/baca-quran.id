<script lang="ts">
	import { navigating } from '$app/stores';

	/** @type {import('./$types').PageData} */
	export let data;

	let surahid = data?.surahid;
	let verseid = data?.verseid;
	let verseData = data?.verseData;
	let surahInfo = data?.surahInfo;
</script>

<article class="px-2">
	{#if $navigating}
		<span>Loading...</span>
	{:else}
		<div class="rounded overflow-hidden shadow-lg border-2">
			<div class="px-6 py-4 flex justify-between">
				<div class="flex gap-2 items-center">
					<div class="flex items-center justify-center text-5xl">
						{parseInt(surahid, 10).toLocaleString('ar-u-nu-arab', { useGrouping: false })}
					</div>
					<div class="flex flex-col items-start justify-center">
						<span class="font-bold">{surahInfo.current.latin}</span>
						<small class="text-xs text-gray-400">{surahInfo.current.translation}</small>
					</div>
				</div>

				<div class="flex flex-col items-end justify-center">
					<span class="font-bold text-xl font-arabic">{surahInfo.current.arabic}</span>
					<small class="text-xs text-gray-400 text-right">{surahInfo.current.ayah_count} ayat</small
					>
				</div>
			</div>
		</div>

		<div class="mt-8 flex flex-col gap-4">
			<div class="rounded overflow-hidden shadow-lg border-2">
				<div class="px-6 py-4 flex justify-end gap-4 items-start">
					<div class="font-bold text-2xl text-right font-arabic">{verseData.text}</div>
					<div class="flex items-center justify-center border-2 rounded-lg h-8 px-2">
						{parseInt(verseid, 10).toLocaleString('ar-u-nu-arab', { useGrouping: false })}
					</div>
				</div>
			</div>
		</div>

		<nav class="mt-8 flex justify-between items-center">
			{#if parseInt(verseid, 10) > 1}
				<a
					href={`/${surahid}/${parseInt(verseid, 10) - 1}`}
					class="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					data-sveltekit-reload
				>
					&lt;&lt; Prev
				</a>
			{:else if surahInfo.prev}
				<a
					href={`/${parseInt(surahid, 10) - 1}`}
					class="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					data-sveltekit-reload
				>
					&lt;&lt; Ke surat sebelumnya
				</a>
			{:else}
				<a
					href={`/114/1`}
					class="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					data-sveltekit-reload
				>
					&lt;&lt; Ke surat terakhir
				</a>
			{/if}

      <span>{verseid} / {surahInfo.current.ayah_count}</span>

			{#if parseInt(verseid, 10) < parseInt(surahInfo.current.ayah_count, 10)}
				<a
					href={`/${surahid}/${parseInt(verseid, 10) + 1}`}
					class="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					data-sveltekit-reload
				>
					Next &gt;&gt;
				</a>
			{:else if surahInfo.next}
				<a
					href={`/${parseInt(surahid, 10) + 1}/1`}
					class="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					data-sveltekit-reload
				>
					Ke surat berikutnya &gt;&gt;
				</a>
			{:else}
				<a
					href={`/1/1`}
					class="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					data-sveltekit-reload
				>
					Ke surat awal &gt;&gt;
				</a>
			{/if}
		</nav>
	{/if}
</article>
