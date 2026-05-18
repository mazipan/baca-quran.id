<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { META_DESC_TAHLIL, META_TITLE_TAHLIL, TITLE_CONSTANTS } from '$lib/constants';
	import { t } from '$lib/translations/store';
	import DocumentTextIcon from '$lib/icons/DocumentTextIcon.svelte';
	import Button from '$lib/ui/Button.svelte';
	import tahlil, { type TahlilItem } from '../../data/tahlil';
	import { globalBottomSheet } from '../../store/globalBottomSheet';

	let toggleBottomSheet = (item: TahlilItem) => {
		globalBottomSheet.toggle({
			title: `💠 Terjemahan: ${item.title}`,
			content: `🔸 ${item.translation}`
		});
	};
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_TAHLIL}
		desc={META_DESC_TAHLIL}
		url={`${TITLE_CONSTANTS.PATH}tahlil/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">🤲 Tahlil</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: `🏠 ${$t('navigation.home')}`, href: '/' }]} />
</div>

<div class="px-4 flex flex-col gap-2">
	{#each tahlil.data as item (item.id)}
		<CardShadow>
			<div class="flex flex-col justify-center gap-4">
				<span class="font-bold text-left">💠 {item.title}</span>
				<span class="text-2xl font-arabic text-right">{item.arabic}</span>
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

<SeoText variant="TAHLIL" />
