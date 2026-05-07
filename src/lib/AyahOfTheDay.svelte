<script lang="ts">
	import { onMount } from 'svelte';
	import CardShadow from './CardShadow.svelte';
	import { t } from './translations/store';
	import { defaultPool, themes, forcedThemeId } from '$data/ayah-of-the-day';
	import seedsData from '$data/ayah-of-the-day-seeds.json';
	import { pickAyahForDate } from './utils/dailyPick';
	import type { Theme, AyahPick } from '$data/ayah-of-the-day';
	import ArrowRightIcon from './icons/ArrowRightIcon.svelte';

	type Loaded = {
		pick: AyahPick;
		theme: Theme | null;
		arabic: string;
		translation: string;
		surahLatin: string;
	};

	let loaded: Loaded | null = $state(null);

	async function resolveToday() {
		const seeds = (seedsData as { seeds: Record<string, number> }).seeds;
		const { pick, theme } = pickAyahForDate(new Date(), seeds, themes, defaultPool, forcedThemeId);
		const surahMod = await import(`../data/surah-data/${pick.s}.ts`);
		const surahInfoMod = await import(`../data/surah-info/${pick.s}.ts`);
		const surah = surahMod.default[String(pick.s)];
		const surahInfo = surahInfoMod.default.current;
		loaded = {
			pick,
			theme,
			arabic: surah.text[String(pick.v)],
			translation: surah.translations.id.text[String(pick.v)],
			surahLatin: surahInfo.latin
		};
	}

	onMount(() => {
		resolveToday();
	});
</script>

<div class="flex gap-2 mb-2 mt-2">
	<h2 class="text-xl font-bold">
		{$t('ayahOfTheDay.title')}
	</h2>
</div>

{#if loaded === null}
	<CardShadow>
		<p class="text-foreground-secondary text-sm">{$t('ayahOfTheDay.loading')}</p>
	</CardShadow>
{:else}
	<CardShadow>
		<div class="flex flex-col gap-3">
			<div class="flex justify-between items-center gap-2">
				<span class="text-xs text-foreground-secondary">
					{loaded.surahLatin} : {loaded.pick.v}
				</span>
				{#if loaded.theme}
					<span class="text-xs px-2 py-0.5 rounded-full bg-primary">
						{loaded.theme.emoji}
						{$t(loaded.theme.labelKey)}
					</span>
				{/if}
			</div>
			<p class="font-arabic text-2xl text-right leading-loose" dir="rtl">
				{loaded.arabic}
			</p>
			<p class="text-sm text-foreground-secondary">
				{loaded.translation}
			</p>
			<a
				href={`/surah/${loaded.pick.s}/#ayat-${loaded.pick.v}`}
				class="flex bg-primary items-center justify-center gap-2 cursor-pointer p-2 rounded-md focus:ring-2 focus:ring-blue-500 text-sm"
				data-sveltekit-reload
			>
				{$t('ayahOfTheDay.readMore')}
				<ArrowRightIcon />
			</a>
		</div>
	</CardShadow>
{/if}
