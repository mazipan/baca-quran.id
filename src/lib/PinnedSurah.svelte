<script lang="ts">
	import { pinnedSurah } from '../store';
	import CardShadow from './CardShadow.svelte';
	import ArrowRightIcon from './icons/ArrowRightIcon.svelte';
</script>

<div class="flex gap-2 mb-2">
	<h2 class="text-xl font-bold">📌 Surat yang disematkan</h2>
</div>

{#if $pinnedSurah.length === 0}
	<CardShadow>
		<div class="flex justify-between items-center">
			<div>
				<p>Kamu belum punya surah yang di pin!</p>
				<p>Mulai pin 6 surah agar mudah diakses.</p>
			</div>
			<a
				href="/all-surah/"
				class="flex items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
				data-sveltekit-reload
			>
				<ArrowRightIcon />
			</a>
		</div>
	</CardShadow>
{:else}
	<div class="grid grid-cols-3 gap-2">
		{#each $pinnedSurah as surah (surah.i)}
			<CardShadow href={`/surah/${surah.i}/`} _as="a">
				<div class="flex flex-col items-center justify-center">
					<span class="font-bold text-xl font-arabic">{surah.a}</span>
					<span class="text-xs text-gray-400">{surah.l}</span>
				</div>
			</CardShadow>
		{/each}
	</div>
{/if}
