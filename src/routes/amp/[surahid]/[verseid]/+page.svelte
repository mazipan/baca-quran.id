<script lang="ts">
	import VersePage from '$lib/views/VersePage.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<VersePage {data} />
