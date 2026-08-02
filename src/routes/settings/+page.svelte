<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import VerseAudioPlayerTrigger from '$lib/VerseAudioPlayerTrigger.svelte';
	import VerseCard from '$lib/VerseCard.svelte';
	import { RECITER_ARRAY } from '$lib/utils/audio';
	import { CONSTANTS, META_DESC, META_TITLE, THEMES, TITLE_CONSTANTS } from '$lib/constants';
	import surahData from '../../data/surah-data/108';
	import {
		settingAudio,
		settingAutoNext,
		settingTafsir,
		settingTranslation,
		settingFontSize,
		settingFontStyle,
		activeTheme
	} from '../../store';
	import type { FontSizeKey, FontStyleKey } from '../../store';
	import { t } from '$lib/translations/store';
	import { CheckLanguage, LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import { onMount } from 'svelte';

	type SurahSampleEntry = {
		text: Record<string, string>;
		translations: { id: { text: Record<string, string> } };
		tafsir: { id: { kemenag: { text: Record<string, string> } } };
	};

	const SURAH_SAMPLE = 108;
	const SURAH_SAMPLE_TOTAL_AYAH = 3;
	const SURAH_SAMPLE_ARABIC = 'الكوثر';
	const SURAH_SAMPLE_LATIN = 'Al-Kausar';
	const sample = (surahData as unknown as Record<string, SurahSampleEntry>)[
		SURAH_SAMPLE.toString()
	];

	let currentLang: 'id' | 'en' = LANGUAGE_OPTIONS.INDONESIAN.locale;

	onMount(() => {
		// @ts-expect-error -- window globals injected by app.html
		activeTheme.set(window.__theme);
		currentLang = CheckLanguage();
	});

	function toggle(store: typeof settingTranslation, key: string) {
		store.update((val) => {
			const next = !val;
			localStorage.setItem(key, next ? 'y' : 'n');
			return next;
		});
	}

	function setFontSize(size: FontSizeKey) {
		settingFontSize.set(size);
		localStorage.setItem(CONSTANTS.STORAGE_KEY.FONT_SIZE, size);
	}

	function setFontStyle(style: FontStyleKey) {
		settingFontStyle.set(style);
		localStorage.setItem(CONSTANTS.STORAGE_KEY.FONT_STYLE, style);
	}

	function setTheme(theme: string) {
		activeTheme.set(theme);
		// @ts-expect-error -- window globals injected by app.html
		window.__setActiveTheme(theme);
	}

	function setLanguage(lang: 'id' | 'en') {
		localStorage.setItem('language', lang);
		languageStore.set(lang);
		currentLang = lang;
	}

	const FONT_SIZES: { key: FontSizeKey; label: string }[] = [
		{ key: 'sm', label: 'S' },
		{ key: 'md', label: 'M' },
		{ key: 'lg', label: 'L' },
		{ key: 'xl', label: 'XL' }
	];
</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}settings`} />
</svelte:head>

<div class="px-4 pt-2 pb-1 flex flex-col gap-1">
	<h1 class="text-2xl font-bold">{$t('settings.title')}</h1>
	<Breadcrumb items={[{ text: $t('navigation.home'), href: '/' }]} />
</div>

<p class="text-center text-xs px-4 py-2" style="color: var(--color-foreground-secondary)">
	{$t('settings.savedAuto')}
</p>

<div class="px-4 pb-8 flex flex-col gap-5">
	<!-- ── Display ─────────────────────────────────────────── -->
	<section>
		<h2
			class="text-xs font-semibold uppercase tracking-widest mb-2 px-1"
			style="color: var(--color-foreground-secondary)"
		>
			{$t('settings.featureSettings')}
		</h2>
		<div class="rounded-2xl overflow-hidden" style="background-color: var(--color-secondary)">
			<!-- Translation toggle (entire row is the switch) -->
			<button
				type="button"
				role="switch"
				aria-checked={$settingTranslation}
				class="w-full flex items-center gap-4 px-4 py-3.5 text-left active:opacity-70"
				onclick={() => toggle(settingTranslation, CONSTANTS.STORAGE_KEY.TRANSLATION)}
			>
				<div class="flex-1 min-w-0">
					<div class="text-sm font-medium" style="color: var(--color-foreground)">
						{$t('settings.alwaysShowTranslation')}
					</div>
					<div class="text-xs mt-0.5" style="color: var(--color-foreground-secondary)">
						{$t('settings.translationDesc')}
					</div>
				</div>
				<span
					aria-hidden="true"
					class="relative flex-shrink-0 inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
					style="background-color: {$settingTranslation
						? 'var(--color-control-accent)'
						: 'var(--color-foreground-secondary)'}"
				>
					<span
						class="absolute h-4 w-4 rounded-full shadow-sm transition-transform duration-200"
						style="background-color: var(--color-primary); transform: translateX({$settingTranslation
							? '1.375rem'
							: '0.25rem'})"
					></span>
				</span>
			</button>

			<div class="h-px mx-4" style="background-color: var(--color-primary)"></div>

			<!-- Tafsir toggle -->
			<button
				type="button"
				role="switch"
				aria-checked={$settingTafsir}
				class="w-full flex items-center gap-4 px-4 py-3.5 text-left active:opacity-70"
				onclick={() => toggle(settingTafsir, CONSTANTS.STORAGE_KEY.TAFSIR)}
			>
				<div class="flex-1 min-w-0">
					<div class="text-sm font-medium" style="color: var(--color-foreground)">
						{$t('settings.showTafsirButton')}
					</div>
					<div class="text-xs mt-0.5" style="color: var(--color-foreground-secondary)">
						{$t('settings.tafsirDesc')}
					</div>
				</div>
				<span
					aria-hidden="true"
					class="relative flex-shrink-0 inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
					style="background-color: {$settingTafsir
						? 'var(--color-control-accent)'
						: 'var(--color-foreground-secondary)'}"
				>
					<span
						class="absolute h-4 w-4 rounded-full shadow-sm transition-transform duration-200"
						style="background-color: var(--color-primary); transform: translateX({$settingTafsir
							? '1.375rem'
							: '0.25rem'})"
					></span>
				</span>
			</button>
		</div>

		<!-- Live preview -->
		<div class="mt-3">
			<p class="text-xs font-semibold mb-2 px-1" style="color: var(--color-foreground-secondary)">
				{$t('settings.previewLive')}
			</p>
			<div class="flex flex-col gap-1">
				{#each Object.entries(sample.text) as [numberVerse, verse] (`${SURAH_SAMPLE}-${numberVerse}`)}
					<VerseCard
						verse={`${verse}`}
						{numberVerse}
						translation={sample?.translations.id?.text?.[numberVerse] || ''}
						tafsir={sample?.tafsir?.id?.kemenag?.text?.[numberVerse] || ''}
						numberSurah={SURAH_SAMPLE.toString()}
						totalAyah={SURAH_SAMPLE_TOTAL_AYAH}
						source="surah"
						surahLatin={SURAH_SAMPLE_LATIN}
						surahArabic={SURAH_SAMPLE_ARABIC}
					/>
				{/each}
			</div>
		</div>
	</section>

	<!-- ── Reading ──────────────────────────────────────────── -->
	<section>
		<h2
			class="text-xs font-semibold uppercase tracking-widest mb-2 px-1"
			style="color: var(--color-foreground-secondary)"
		>
			{$t('settings.readingSettings')}
		</h2>
		<div class="rounded-2xl overflow-hidden" style="background-color: var(--color-secondary)">
			<!-- Font style -->
			<div class="px-4 py-3.5">
				<div class="text-sm font-medium" style="color: var(--color-foreground)">
					{$t('settings.fontStyleLabel')}
				</div>
				<div class="text-xs mt-0.5 mb-3" style="color: var(--color-foreground-secondary)">
					{$t('settings.fontStyleDesc')}
				</div>
				<div class="flex gap-2">
					{#each ['lpmq', 'system'] as FontStyleKey[] as style}
						<button
							type="button"
							onclick={() => setFontStyle(style)}
							class="flex-1 py-2 px-3 rounded-xl text-sm font-medium border-2 transition-colors duration-150"
							style="
								background-color: {$settingFontStyle === style
								? 'var(--color-control-accent)'
								: 'var(--color-primary)'};
								color: {$settingFontStyle === style ? 'var(--color-primary)' : 'var(--color-foreground)'};
								border-color: {$settingFontStyle === style
								? 'var(--color-control-accent)'
								: 'var(--color-secondary)'};
							"
						>
							{style === 'lpmq' ? $t('settings.fontStyleLpmq') : $t('settings.fontStyleSystem')}
						</button>
					{/each}
				</div>
			</div>

			<div class="h-px mx-4" style="background-color: var(--color-primary)"></div>

			<!-- Font size -->
			<div class="px-4 py-3.5">
				<div class="text-sm font-medium" style="color: var(--color-foreground)">
					{$t('settings.fontSizeLabel')}
				</div>
				<div class="text-xs mt-0.5 mb-3" style="color: var(--color-foreground-secondary)">
					{$t('settings.fontSizeDesc')}
				</div>
				<div class="flex gap-2">
					{#each FONT_SIZES as { key, label }}
						<button
							type="button"
							onclick={() => setFontSize(key)}
							class="flex-1 py-2 rounded-xl text-sm font-bold border-2 transition-colors duration-150"
							style="
								background-color: {$settingFontSize === key
								? 'var(--color-control-accent)'
								: 'var(--color-primary)'};
								color: {$settingFontSize === key ? 'var(--color-primary)' : 'var(--color-foreground)'};
								border-color: {$settingFontSize === key ? 'var(--color-control-accent)' : 'var(--color-secondary)'};
							"
						>
							{label}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<!-- ── Audio ────────────────────────────────────────────── -->
	<section>
		<h2
			class="text-xs font-semibold uppercase tracking-widest mb-2 px-1"
			style="color: var(--color-foreground-secondary)"
		>
			{$t('settings.audioSettings')}
		</h2>
		<div class="rounded-2xl overflow-hidden" style="background-color: var(--color-secondary)">
			<!-- Auto-next toggle -->
			<button
				type="button"
				role="switch"
				aria-checked={$settingAutoNext}
				class="w-full flex items-center gap-4 px-4 py-3.5 text-left active:opacity-70"
				onclick={() => toggle(settingAutoNext, CONSTANTS.STORAGE_KEY.AUTO_NEXT)}
			>
				<div class="flex-1 min-w-0">
					<div class="text-sm font-medium" style="color: var(--color-foreground)">
						{$t('settings.autoPlayNextVerse')}
					</div>
					<div class="text-xs mt-0.5" style="color: var(--color-foreground-secondary)">
						{$t('settings.autoNextDesc')}
					</div>
				</div>
				<span
					aria-hidden="true"
					class="relative flex-shrink-0 inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
					style="background-color: {$settingAutoNext
						? 'var(--color-control-accent)'
						: 'var(--color-foreground-secondary)'}"
				>
					<span
						class="absolute h-4 w-4 rounded-full shadow-sm transition-transform duration-200"
						style="background-color: var(--color-primary); transform: translateX({$settingAutoNext
							? '1.375rem'
							: '0.25rem'})"
					></span>
				</span>
			</button>

			<div class="h-px mx-4" style="background-color: var(--color-primary)"></div>

			<!-- Reciter -->
			<div class="px-4 py-3.5">
				<div class="text-sm font-medium" style="color: var(--color-foreground)">
					{$t('settings.chooseQari')}
				</div>
				<div class="text-xs mt-0.5 mb-3" style="color: var(--color-foreground-secondary)">
					{$t('settings.reciterDesc')}
				</div>
				<div class="flex items-center gap-2">
					<select
						id="select-qari"
						bind:value={$settingAudio}
						onchange={(e) => {
							// @ts-expect-error -- window globals injected by app.html
							const value = e?.target?.value ?? '1';
							localStorage.setItem(CONSTANTS.STORAGE_KEY.AUDIO, value);
						}}
						class="flex-1 border text-sm rounded-xl p-2.5 appearance-none"
						style="background-color: var(--color-primary); color: var(--color-foreground); border-color: var(--color-foreground-secondary)"
					>
						{#each RECITER_ARRAY as item (item.id)}
							<option value={item.id}>{item.name}</option>
						{/each}
					</select>
					<VerseAudioPlayerTrigger
						totalAyah={7}
						numberSurah={`1`}
						numberVerse={`1`}
						source="setting"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- ── Appearance ───────────────────────────────────────── -->
	<section>
		<h2
			class="text-xs font-semibold uppercase tracking-widest mb-2 px-1"
			style="color: var(--color-foreground-secondary)"
		>
			{$t('settings.appearanceSettings')}
		</h2>
		<div class="rounded-2xl overflow-hidden" style="background-color: var(--color-secondary)">
			<!-- Theme -->
			<div class="px-4 py-3.5">
				<div class="text-sm font-medium" style="color: var(--color-foreground)">
					{$t('settings.themeLabel')}
				</div>
				<div class="text-xs mt-0.5 mb-3" style="color: var(--color-foreground-secondary)">
					{$t('settings.themeDesc')}
				</div>
				<div class="grid grid-cols-5 gap-2">
					{#each THEMES as theme (theme.name)}
						<button
							type="button"
							title={theme.name}
							aria-label={theme.name}
							aria-pressed={$activeTheme === theme.name}
							onclick={() => setTheme(theme.name)}
							class="flex flex-col items-center gap-1"
						>
							<span
								class="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-150 active:scale-90"
								style="
									background-color: {theme.bg};
									outline: 2px solid {$activeTheme === theme.name ? theme.border : 'transparent'};
									outline-offset: 2px;
									box-shadow: 0 1px 3px rgba(0,0,0,0.25);
								"
							>
								{#if $activeTheme === theme.name}
									<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
										<path
											d="M2 7l3.5 3.5L12 3"
											stroke={theme.border}
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								{/if}
							</span>
							<span
								class="text-[10px] capitalize leading-tight"
								style="color: var(--color-foreground-secondary)"
							>
								{theme.name}
							</span>
						</button>
					{/each}
				</div>
			</div>

			<div class="h-px mx-4" style="background-color: var(--color-primary)"></div>

			<!-- Language -->
			<div class="px-4 py-3.5">
				<div class="text-sm font-medium" style="color: var(--color-foreground)">
					{$t('settings.languageLabel')}
				</div>
				<div class="text-xs mt-0.5 mb-3" style="color: var(--color-foreground-secondary)">
					{$t('settings.languageDesc')}
				</div>
				<div class="flex gap-2">
					{#each Object.values(LANGUAGE_OPTIONS) as lang}
						<button
							type="button"
							onclick={() => setLanguage(lang.locale)}
							class="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-sm font-medium border-2 transition-colors duration-150"
							style="
								background-color: {currentLang === lang.locale
								? 'var(--color-control-accent)'
								: 'var(--color-primary)'};
								color: {currentLang === lang.locale ? 'var(--color-primary)' : 'var(--color-foreground)'};
								border-color: {currentLang === lang.locale
								? 'var(--color-control-accent)'
								: 'var(--color-secondary)'};
							"
						>
							<span class="text-base">{lang.flag}</span>
							<span>{lang.label}</span>
						</button>
					{/each}
				</div>
			</div>
		</div>
	</section>
</div>
