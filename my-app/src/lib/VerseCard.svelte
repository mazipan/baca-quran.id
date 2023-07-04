<script lang="ts">
	export let verse: string;
	export let numberVerse: string;
</script>

<div class="rounded overflow-hidden shadow-lg border-2">
  <div class="px-6 py-4 flex justify-end gap-4 items-start">
    <div class="font-bold text-2xl text-right font-arabic">{verse}</div>
    <div class="flex items-center justify-center border-2 rounded-lg h-8 px-2">
      {parseInt(numberVerse, 10).toLocaleString('ar-u-nu-arab', { useGrouping: false })}
    </div>
  </div>
</div>
