<script lang="ts">
	import type { PinnedSurahItem, BookmarkVerseItem } from '../store';

	export let jsonArrayObject: PinnedSurahItem[] | BookmarkVerseItem[] = [];
</script>

{#if Array.isArray(jsonArrayObject)}
	<ul class="flex flex-col gap-2">
		{#each jsonArrayObject as item (item.l)}
			<li>{item.l}</li>
		{/each}
	</ul>
{:else}
	<span>N/A</span>
{/if}
