<script lang="ts">
	import type { SurahInfoPage } from '../data/surah-info';
	import PaginationButton from './PaginationButton.svelte';

	export let variant: 'surah' | 'verse';
	export let surahInfo: SurahInfoPage;
	export let surahid: string;
	export let verseid: string;
</script>

{#if variant === 'surah'}
	<nav class="mt-8 flex justify-between items-center">
		{#if surahInfo.prev}
			<PaginationButton
				variant="prev"
				href={`/surah/${parseInt(surahid, 10) - 1}/`}
				title="Prev"
			/>
		{:else}
			<PaginationButton variant="prev" href={`/surah/114/`} title="Ke surat terakhir" />
		{/if}

		<span>{surahid} / 114</span>

		{#if surahInfo.next}
			<PaginationButton
				variant="next"
				href={`/surah/${parseInt(surahid, 10) + 1}/`}
				title="Next"
			/>
		{:else}
			<PaginationButton variant="next" href={`/surah/1/`} title="Ke surat awal" />
		{/if}
	</nav>
{:else}
	<nav class="mt-8 flex justify-between items-center">
		{#if parseInt(verseid, 10) > 1}
			<PaginationButton
				variant="prev"
				href={`/surah/${surahid}/${parseInt(verseid, 10) - 1}/`}
				title="Prev"
			/>
		{:else if surahInfo.prev}
			<PaginationButton
				variant="prev"
				href={`/surah/${parseInt(surahid, 10) - 1}/`}
				title="Ke surat sebelumnya"
			/>
		{:else}
			<PaginationButton variant="prev" href={`/surah/114/1/`} title="Ke surat terakhir" />
		{/if}

		<span>{verseid} / {surahInfo.current.ayah_count}</span>

		{#if parseInt(verseid, 10) < surahInfo.current.ayah_count}
			<PaginationButton
				variant="next"
				href={`/surah/${surahid}/${parseInt(verseid, 10) + 1}/`}
				title="Next"
			/>
		{:else if surahInfo.next}
			<PaginationButton
				variant="next"
				href={`/surah/${parseInt(surahid, 10) + 1}/1/`}
				title="Ke surat berikutnya"
			/>
		{:else}
			<PaginationButton variant="next" href={`/surah/1/1/`} title="Ke surat awal" />
		{/if}
	</nav>
{/if}
