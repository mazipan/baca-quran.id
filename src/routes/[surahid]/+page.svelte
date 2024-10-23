<script lang="ts">
	import type { PageData } from './$types';
	import SurahPage from '$lib/views/SurahPage.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<SurahPage {data} />
