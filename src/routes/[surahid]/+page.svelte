<script lang="ts">
	import SurahPage from '$lib/views/SurahPage.svelte';

	/** @type {import('./$types').PageData} */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
	export let data;
</script>

<SurahPage data={data} />
