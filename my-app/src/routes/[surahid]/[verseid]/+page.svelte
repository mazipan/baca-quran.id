<script lang="ts">
	import { navigating } from '$app/stores';
	import Pagination from '$lib/Pagination.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let surahid = data?.surahid;
	let verseid = data?.verseid;
	let verseData = data?.verseData;
	let surahInfo = data?.surahInfo;
</script>

<div class="flex gap-2 px-2 mb-4">
  <h1 class="text-3xl font-bold">📖 Baca per Ayat</h1>
</div>

<article class="px-2">
	{#if $navigating}
		<span>Loading...</span>
	{:else}
		<div class="rounded overflow-hidden shadow-lg border-2">
			<div class="px-6 py-4 flex justify-between">
				<div class="flex gap-2 items-center">
					<div class="flex flex-col items-start justify-center">
						<a class="font-bold underline" href={`/${surahid}`}>{surahInfo.current.latin}</a>
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

    <Pagination variant="verse" surahInfo={surahInfo} surahid={surahid} verseid={verseid}/>

	{/if}
</article>
