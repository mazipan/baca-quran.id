<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { META_DESC_TAHLIL, META_TITLE_TAHLIL, TITLE_CONSTANTS } from '$lib/constants';
	import tahlil from '../../data/tahlil';
</script>

<svelte:head>
  <MetaTag title={META_TITLE_TAHLIL} desc={META_DESC_TAHLIL} url={`${TITLE_CONSTANTS.PATH}tahlil/`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">🤲 Tahlil</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: '🏠 Beranda', href: '/' }
		]}
	/>
</div>

<div class="px-4 flex flex-col gap-2">
	{#each tahlil.data as item (item.id)}
		<CardShadow>
			<div class="flex flex-col justify-center gap-4">
				<span class="font-bold text-left">{item.title}</span>
				<span class="font-bold text-2xl font-arabic text-right">{item.arabic}</span>
				<small class="text-xs text-gray-400">🔸 Terjemahan: {item.translation}</small>
			</div>
		</CardShadow>
	{/each}
</div>

<SeoText variant="TAHLIL" />
