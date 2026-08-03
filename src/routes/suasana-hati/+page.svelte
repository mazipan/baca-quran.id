<script lang="ts">
	import { onMount } from 'svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import ArrowRightIcon from '$lib/icons/ArrowRightIcon.svelte';
	import Chip from '$lib/ui/Chip.svelte';
	import {
		META_TITLE_SUASANA_HATI,
		META_DESC_SUASANA_HATI,
		TITLE_CONSTANTS,
		CONSTANTS
	} from '$lib/constants';
	import { t } from '$lib/translations/store';
	import { languageStore, LANGUAGE_OPTIONS } from '$lib/checkLanguaguage';
	import { MOODS, type MoodId, type MoodVerse } from '$data/mood-verses';
	import { loadVerse } from '$lib/utils/verseLoader';

	const isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);

	type LoadedVerse = {
		verse: MoodVerse;
		arabic: string;
		translation: string;
		surahLatin: string;
	};

	let activeMoodId: MoodId | null = $state(null);
	let loadedVerses: LoadedVerse[] = $state([]);
	let loading = $state(false);
	let highlightedIndex: number | null = $state(null);

	const activeMood = $derived(
		activeMoodId ? (MOODS.find((m) => m.id === activeMoodId) ?? null) : null
	);

	async function selectMood(moodId: MoodId) {
		if (activeMoodId === moodId) return;
		activeMoodId = moodId;
		highlightedIndex = null;
		loading = true;
		loadedVerses = [];

		try {
			localStorage.setItem(CONSTANTS.STORAGE_KEY.MOOD, moodId);
		} catch {
			// ignore storage errors
		}

		const mood = MOODS.find((m) => m.id === moodId);
		if (!mood) {
			loading = false;
			return;
		}

		const results = await Promise.all(
			mood.verses.map(async (verse) => {
				const { arabic, translation, surahLatin } = await loadVerse(verse.s, verse.v);
				return { verse, arabic, translation, surahLatin };
			})
		);

		loadedVerses = results;
		loading = false;
	}

	function pickRandom() {
		if (loadedVerses.length === 0) return;
		const idx = Math.floor(Math.random() * loadedVerses.length);
		highlightedIndex = idx;
		setTimeout(() => {
			document
				.getElementById(`verse-${idx}`)
				?.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}, 50);
	}

	onMount(() => {
		try {
			const saved = localStorage.getItem(CONSTANTS.STORAGE_KEY.MOOD) as MoodId | null;
			if (saved && MOODS.some((m) => m.id === saved)) {
				selectMood(saved);
			}
		} catch {
			// ignore storage errors
		}
	});
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_SUASANA_HATI}
		desc={META_DESC_SUASANA_HATI}
		url={`${TITLE_CONSTANTS.PATH}suasana-hati/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">{$t('mood.title')}</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: `🏠 ${$t('navigation.home')}`, href: '/' }]} />
</div>

<div class="px-4 mb-6">
	<p class="text-sm text-foreground-secondary">{$t('mood.subtitle')}</p>
</div>

<div class="px-4 mb-6 flex flex-wrap gap-2">
	{#each MOODS as mood}
		<Chip
			onClick={() => selectMood(mood.id)}
			color={activeMoodId === mood.id ? 'accent' : 'neutral'}
			ariaLabel={$t(mood.labelKey)}
		>
			<span>{mood.emoji}</span>
			<span>{$t(mood.labelKey)}</span>
		</Chip>
	{/each}
</div>

{#if activeMood}
	<div class="px-4 mb-4 flex justify-between items-center gap-2">
		<p class="text-sm text-foreground-secondary">
			{activeMood.emoji}
			{isEnglish ? 'Verses for:' : 'Ayat untuk:'} <strong>{$t(activeMood.labelKey)}</strong>
		</p>
		<button
			onclick={pickRandom}
			class="flex items-center gap-1.5 px-3 py-2 rounded-md bg-primary text-sm font-medium hover:opacity-80 transition-opacity whitespace-nowrap"
		>
			🎲 {$t('mood.pickRandom')}
		</button>
	</div>

	<div class="px-4 flex flex-col gap-4 pb-24">
		{#if loading}
			<CardShadow>
				<p class="text-foreground-secondary text-sm">{$t('common.loading')}</p>
			</CardShadow>
		{:else}
			{#each loadedVerses as item, idx}
				<div id={`verse-${idx}`}>
					<CardShadow>
						<div
							class="flex flex-col gap-3 {highlightedIndex === idx
								? 'outline outline-2 outline-control-accent rounded-md p-1'
								: ''}"
						>
							<div class="flex justify-between items-center gap-2">
								<span class="text-xs text-foreground-secondary font-medium">
									{item.surahLatin} : {item.verse.v}
								</span>
							</div>
							<p class="font-arabic text-2xl text-right leading-loose" dir="rtl">
								{item.arabic}
							</p>
							<p class="text-sm text-foreground-secondary">
								{item.translation}
							</p>
							<p class="text-xs italic text-foreground-secondary border-t border-secondary pt-2">
								{isEnglish ? item.verse.reasonEn : item.verse.reasonId}
							</p>
							<a
								href={`/surah/${item.verse.s}/#ayat-${item.verse.v}`}
								class="flex bg-primary items-center justify-center gap-2 cursor-pointer p-2 rounded-md focus-visible:ring-2 focus-visible:ring-control-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary text-sm"
								data-sveltekit-reload
							>
								{$t('mood.readFullAyah')}
								<ArrowRightIcon />
							</a>
						</div>
					</CardShadow>
				</div>
			{/each}

			<p class="text-xs text-foreground-secondary text-center mt-2 px-4">
				{$t('mood.disclaimer')}
			</p>
		{/if}
	</div>
{/if}

<SeoText variant="SUASANA_HATI" />
