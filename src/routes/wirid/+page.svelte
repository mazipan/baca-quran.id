<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { META_DESC_WIRID, META_TITLE_WIRID, TITLE_CONSTANTS } from '$lib/constants';
	import Badge from '$lib/ui/Badge.svelte';
	import wirid from '../../data/wirid';
</script>

<svelte:head>
	<MetaTag title={META_TITLE_WIRID} desc={META_DESC_WIRID} url={`${TITLE_CONSTANTS.PATH}wirid/`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">🧎 Wirid</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: '🏠 Beranda', href: '/' }]} />
</div>

<div class="px-4 flex flex-col gap-2">
	{#each wirid.data as item (item.id)}
		<CardShadow>
			<div class="flex justify-between items-end gap-4">
				<div class="px-4 flex gap-2">
					<Badge color="green">
						{`${item.id}x`}
					</Badge>
				</div>

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
