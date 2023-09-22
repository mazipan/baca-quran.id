<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { META_DESC_AYAT_KURSI, META_TITLE_AYAT_KURSI, TITLE_CONSTANTS } from '$lib/constants';
	import DocumentTextIcon from '$lib/icons/DocumentTextIcon.svelte';
	import Button from '$lib/ui/Button.svelte';
	import ayatKursi from '../../data/ayat-kursi';
	import { globalBottomSheet } from '../../store/globalBottomSheet';

	let toggleBottomSheet = () => {
		globalBottomSheet.show({
			title: `💠 Terjemahan: Ayat Kursi`,
			content: `<p class="mb-4">🔸 <b>Terjemahan</b>: ${ayatKursi.translation}</p>
        <p>🔹 <b>Tafsir</b>: ${ayatKursi.tafsir}</p>`
		});
	};
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_AYAT_KURSI}
		desc={META_DESC_AYAT_KURSI}
		url={`${TITLE_CONSTANTS.PATH}ayat-kursi/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">🪑 Ayat Kursi</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: '🏠 Beranda', href: '/' }]} />
</div>

<div class="px-4 flex flex-col gap-2">
	<CardShadow>
		<div class="flex flex-col justify-center gap-4">
			<span class="font-bold text-2xl font-arabic text-right">{ayatKursi.arabic}</span>
			<small class="text-sm text-foreground-secondary italic">{ayatKursi.latin}</small>
		</div>
		<div class="mt-4 flex justify-between items-center gap-2">
			<div class="flex items-center gap-2">
				<Button onClick={toggleBottomSheet} ariaLabel="Baca Terjemah">
					<DocumentTextIcon />
				</Button>
			</div>
		</div>
	</CardShadow>
</div>

<SeoText variant="AYAT_KURSI" />
