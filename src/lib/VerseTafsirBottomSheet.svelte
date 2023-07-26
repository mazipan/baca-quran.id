<script lang="ts">
	import { verseTafsirSheet } from '../store/verseTafsirSheet';
	import BottomSheet from '$lib/ui/BottomSheet.svelte';
</script>

<BottomSheet
  id="verse-tafsir"
	title={$verseTafsirSheet.title}
	show={$verseTafsirSheet.show}
	onClose={verseTafsirSheet.hide}
>
	<details class="p-4" open>
		<summary class="cursor-pointer text-lg font-bold text-gray-600 dark:text-gray-300">
			🔸 Terjemahan
		</summary>
		<p class="pt-2 italic text-gray-600 dark:text-gray-300">
			{$verseTafsirSheet.translation}
		</p>
	</details>
	<details class="px-4 pt-2">
		<summary class="cursor-pointer text-lg font-bold text-gray-600 dark:text-gray-300">
			🔹 Tafsir
		</summary>
		<p class="pt-2 italic text-gray-600 dark:text-gray-300">
			{$verseTafsirSheet.tafsir}
		</p>
		<div class="py-4 text-gray-600 dark:text-gray-300">
			<small class="italic"
				>Sumber: Kemenag - Aplikasi Quran Kementrian Agama Republik Indonesia</small
			>
		</div>
	</details>
</BottomSheet>
