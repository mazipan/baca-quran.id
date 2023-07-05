<script lang="ts">
	import SeoText from '$lib/SeoText.svelte';
	import ayatKursi from '../../data/ayat-kursi';
</script>

<div class="flex gap-2 px-2 mb-4">
	<h1 class="text-3xl font-bold">🪑 Ayat Kursi</h1>
</div>

<div class="px-2 flex flex-col gap-2">
	<div class="rounded overflow-hidden shadow-lg border-2">
    <div class="px-6 py-4 flex flex-col justify-center gap-4">
      <span class="font-bold text-2xl font-arabic text-right">{ayatKursi.arabic}</span>
      <small class="text-sm text-gray-400 italic">{ayatKursi.latin}</small>
      <small class="text-xs text-gray-400">🔸 Terjemahan: {ayatKursi.translation}</small>
      <small class="text-xs text-gray-400">🔸 Tafsir: {ayatKursi.tafsir}</small>
    </div>
  </div>
</div>

<SeoText variant="AYAT_KURSI" />
