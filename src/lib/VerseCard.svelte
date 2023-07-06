<script lang="ts">

	import { settingTranslation, settingTafsir } from '../store';
	import CardShadow from './CardShadow.svelte';
	export let verse: string;
	export let numberVerse: string;
	export let translation: string;
	export let tafsir: string;
</script>

<CardShadow>
  <div class="flex justify-end gap-4 items-start">
    <div class="font-bold text-2xl text-right font-arabic">{verse}</div>
    <div class="flex items-center justify-center border-2 rounded-lg h-8 px-2">
      {parseInt(numberVerse, 10).toLocaleString('ar-u-nu-arab', { useGrouping: false })}
    </div>
  </div>
  {#if $settingTranslation && translation}
    <p class="p-4 italic text-gray-600 dark:text-gray-300">🔸 Terjemahan: {translation}</p>
  {/if}
  {#if $settingTafsir && tafsir}
    <div class="p-4 text-gray-600 dark:text-gray-300">
      <p class="mb-2 text-gray-600 dark:text-gray-300">🔹 Tafsir: {tafsir}</p>
      <small class="italic">Sumber: Kemenag - Aplikasi Quran Kementrian Agama Republik Indonesia</small>
    </div>
  {/if}
</CardShadow>
