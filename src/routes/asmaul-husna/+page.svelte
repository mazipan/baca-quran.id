<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { META_DESC_ASMAUL_HUSNA, META_TITLE_ASMAUL_HUSNA, TITLE_CONSTANTS } from '$lib/constants';
	import Badge from '$lib/ui/Badge.svelte';
	import asmaulHusna from '../../data/asmaul-husna';
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_ASMAUL_HUSNA}
		desc={META_DESC_ASMAUL_HUSNA}
		url={`${TITLE_CONSTANTS.PATH}asmaul-husna/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">💯 Asmaul Husna</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: '🏠 Beranda', href: '/' }]} />
</div>

<div class="px-4 flex flex-col gap-2">
	{#each asmaulHusna as item, index (item.latin)}
		<CardShadow>
			<div class="flex justify-between">
				<div class="flex gap-2 items-center">
					<div class="flex flex-col items-start justify-center">
						<div class="flex gap-2 mb-2">
							<Badge color="green">
								{index + 1}
							</Badge>
							<span class="font-bold">{item.latin}</span>
						</div>
						<small class="text-xs text-foreground-secondary">🇬🇧 {item.translation_en}</small>
						<small class="text-xs text-foreground-secondary">🇮🇩 {item.translation_id}</small>
					</div>
				</div>

				<div class="flex flex-col items-end justify-center">
					<span class="font-bold text-2xl font-arabic text-right">{item.arabic}</span>
				</div>
			</div>
		</CardShadow>
	{/each}
</div>

<SeoText variant="ASMAUL_HUSNA" />
