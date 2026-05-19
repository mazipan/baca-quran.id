<script lang="ts">
	import { onMount } from 'svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import {
		CONSTANTS,
		META_DESC_DAILY_DOA,
		META_TITLE_DAILY_DOA,
		TITLE_CONSTANTS
	} from '$lib/constants';
	import { t } from '$lib/translations/store';
	import dailyDoa, { type DoaCategory, DOA_CATEGORIES } from '../../data/daily-doa';

	let activeCategory = $state<DoaCategory | null>(null);

	let visible = $derived(
		activeCategory ? dailyDoa.filter((d) => d.categories.includes(activeCategory!)) : dailyDoa
	);

	let isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);

	onMount(() => {
		const saved = localStorage.getItem(CONSTANTS.STORAGE_KEY.DOA_CATEGORY);
		if (saved && DOA_CATEGORIES.some((c) => c.id === saved)) {
			activeCategory = saved as DoaCategory;
		}
	});

	function setCategory(cat: DoaCategory | null) {
		activeCategory = cat;
		if (cat) {
			localStorage.setItem(CONSTANTS.STORAGE_KEY.DOA_CATEGORY, cat);
		} else {
			localStorage.removeItem(CONSTANTS.STORAGE_KEY.DOA_CATEGORY);
		}
	}
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_DAILY_DOA}
		desc={META_DESC_DAILY_DOA}
		url={`${TITLE_CONSTANTS.PATH}daily-doa/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">
		🙏 {isEnglish ? 'Daily Duas' : 'Doa Harian'}
	</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: `🏠 ${isEnglish ? 'Home' : 'Beranda'}`, href: '/' }]} />
</div>

<!-- Category chip filter row -->
<div class="px-4 mb-4 flex gap-2 overflow-x-auto pb-2">
	<button
		type="button"
		onclick={() => setCategory(null)}
		class={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${activeCategory === null ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
	>
		{$t('daily-doa.filterAll')}
	</button>
	{#each DOA_CATEGORIES as cat}
		<button
			type="button"
			onclick={() => setCategory(activeCategory === cat.id ? null : cat.id)}
			class={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${activeCategory === cat.id ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}
		>
			{cat.emoji}
			{$t(cat.i18nKey)}
		</button>
	{/each}
</div>

<!-- Doa list -->
<div class="px-4 flex flex-col gap-2">
	{#each visible as item (item.id)}
		<CardShadow>
			<div class="flex flex-col justify-center gap-3">
				{#if item.noteId}
					<p class="text-xs text-foreground-secondary italic">
						📌 {isEnglish ? (item.noteEn ?? item.noteId) : item.noteId}
					</p>
				{/if}
				<span class="font-bold text-left">💠 {isEnglish ? item.titleEn : item.title}</span>
				<span class="text-2xl font-arabic text-right leading-loose">{item.arabic}</span>
				<small class="text-sm text-foreground-secondary italic">{item.latin}</small>
				<p class="text-sm">{isEnglish ? item.translationEn : item.translation}</p>
				<p class="text-xs text-foreground-secondary mt-1">
					📖 {$t('daily-doa.source')}:
					{#if item.sourceUrl}
						<a href={item.sourceUrl} rel="noopener noreferrer" target="_blank" class="underline"
							>{item.source}</a
						>
					{:else}
						{item.source}
					{/if}
				</p>
			</div>
		</CardShadow>
	{/each}
</div>

<SeoText variant="DAILY_DOA" />
