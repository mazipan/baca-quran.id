<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { META_DESC_DAILY_DOA, META_TITLE_DAILY_DOA, TITLE_CONSTANTS } from '$lib/constants';
	import DocumentTextIcon from '$lib/icons/DocumentTextIcon.svelte';
	import Button from '$lib/ui/Button.svelte';
	import dailyDoa, { type DailyDoaItem } from '../../data/daily-doa';
	import { globalBottomSheet } from '../../store/globalBottomSheet';

	let toggleBottomSheet = (item: DailyDoaItem) => {
		globalBottomSheet.show({
			title: `💠 Terjemahan: ${item.title}`,
			content: `🔸 ${item.translation}`
		});
	};
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_DAILY_DOA}
		desc={META_DESC_DAILY_DOA}
		url={`${TITLE_CONSTANTS.PATH}daily-doa/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">🙏 Doa Harian</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: '🏠 Beranda', href: '/' }]} />
</div>

<div class="px-4 flex flex-col gap-2">
	{#each dailyDoa as item (item.title)}
		<CardShadow>
			<div class="flex flex-col justify-center gap-4">
				<span class="font-bold text-left">💠 {item.title}</span>
				<span class="font-bold text-2xl font-arabic text-right">{item.arabic}</span>
				<small class="text-sm text-foreground-secondary italic">{item.latin}</small>
			</div>
			<div class="mt-4 flex justify-between items-center gap-2">
				<div class="flex items-center gap-2">
					<Button
						onClick={() => {
							toggleBottomSheet(item);
						}}
						ariaLabel="Baca Terjemah"
					>
						<DocumentTextIcon />
					</Button>
				</div>
			</div>
		</CardShadow>
	{/each}
</div>

<SeoText variant="DAILY_DOA" />
