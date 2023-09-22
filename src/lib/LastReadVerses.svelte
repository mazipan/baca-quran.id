<script lang="ts">
	import { lastReadVerses } from '../store';
	import CardShadow from './CardShadow.svelte';
	import ArrowRightIcon from './icons/ArrowRightIcon.svelte';
</script>

<div class="flex gap-2 mb-2 mt-2">
	<h2 class="text-xl font-bold">🔖 Ayat terakhir dibaca</h2>
</div>

{#if $lastReadVerses.length === 0}
	<CardShadow>
		<div class="flex justify-between items-center">
			<div>
				<p>Kamu belum punya ayat yang ditandai!</p>
				<p>Yuk mulai baca dan tandai ayat.</p>
			</div>
			<a
				href="/all-surah/"
				class="flex bg-primary items-center gap-2 cursor-pointer p-2 rounded-md focus:ring-2 focus:ring-blue-500"
				data-sveltekit-reload
			>
				<ArrowRightIcon />
			</a>
		</div>
	</CardShadow>
{:else}
	<div class="grid grid-cols-3 gap-2">
		{#each $lastReadVerses as verse (`${verse.s}-${verse.v}`)}
			<CardShadow href={`/surah/${verse.s}/#ayat-${verse.v}`} _as="a">
				<span
					class="absolute top-1 left-1 flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"
				/>
				<div class="flex flex-col gap-1 items-center justify-center">
					<span class="text-xs text-foreground-secondary">{verse.l}</span>
					<span class="font-bold text-xl font-arabic">{verse.a}</span>
					<span class="text-sm text-foreground-secondary">Ayat {verse.v}</span>
				</div>
			</CardShadow>
		{/each}
	</div>
{/if}
