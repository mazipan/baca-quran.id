<script lang="ts">
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { META_DESC_AYAT_KURSI, META_TITLE_AYAT_KURSI, TITLE_CONSTANTS } from '$lib/constants';
	import ayatKursi from '../../data/ayat-kursi';
</script>

<svelte:head>
  <MetaTag title={META_TITLE_AYAT_KURSI} desc={META_DESC_AYAT_KURSI} url={`${TITLE_CONSTANTS.PATH}ayat-kursi/`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">🪑 Ayat Kursi</h1>
</div>

<div class="px-4 flex flex-col gap-2">
  <CardShadow>
    <div class="flex flex-col justify-center gap-4">
      <span class="font-bold text-2xl font-arabic text-right">{ayatKursi.arabic}</span>
      <small class="text-sm text-gray-400 italic">{ayatKursi.latin}</small>
      <small class="text-xs text-gray-400">🔸 Terjemahan: {ayatKursi.translation}</small>
      <small class="text-xs text-gray-400">🔸 Tafsir: {ayatKursi.tafsir}</small>
    </div>
  </CardShadow>
</div>

<SeoText variant="AYAT_KURSI" />
