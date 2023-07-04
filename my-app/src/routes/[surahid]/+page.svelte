<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div>
  Surah {data.surahid}
  Surah {JSON.stringify(data.surahData)}
</div>
