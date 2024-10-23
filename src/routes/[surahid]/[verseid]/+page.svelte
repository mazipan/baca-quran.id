<script lang="ts">
	import type { PageData } from './$types';
	import VersePage from '$lib/views/VersePage.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<VersePage {data} />
