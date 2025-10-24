<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import { META_DESC_WIRID, META_TITLE_WIRID, TITLE_CONSTANTS } from '$lib/constants';
	import Badge from '$lib/ui/Badge.svelte';
	import wirid from '../../data/wirid';
	const current = $derived(languageStore);
</script>

<svelte:head>
	<MetaTag title={META_TITLE_WIRID} desc={META_DESC_WIRID} url={`${TITLE_CONSTANTS.PATH}wirid/`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">🧎 Wirid</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: $current == LANGUAGE_OPTIONS.ENGLISH.locale ? '🏠 Home' : '🏠 Beranda', href: '/' }
		]}
	/>
</div>

<div class="px-4 flex flex-col gap-2">
	{#each wirid.data as item (item.id)}
		<CardShadow>
			<div class="relative">
				{#if item.arabic.indexOf('Membaca') >= 0}
					<div class="absolute bottom-0 right-0">
						<Badge color="green">
							{`${item.id}x`}
						</Badge>
					</div>
				{:else}
					<div class="absolute bottom-0 left-0">
						<Badge color="green">
							{`${item.id}x`}
						</Badge>
					</div>
				{/if}

				<div class="flex flex-col items-end justify-center">
					{#if item.arabic.indexOf('Membaca') >= 0}
						<span class="font-bold text-xl">{item.arabic}</span>
					{:else}
						<span class="font-bold text-2xl font-arabic text-right">{item.arabic}</span>
					{/if}
				</div>
			</div>
		</CardShadow>
	{/each}
</div>

<SeoText variant="WIRID" />
