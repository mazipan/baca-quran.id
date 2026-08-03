<script lang="ts">
	import { onMount } from 'svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import BookOpenIcon from '$lib/icons/BookOpenIcon.svelte';
	import CheckCircleSolidIcon from '$lib/icons/CheckCircleSolidIcon.svelte';
	import { TITLE_CONSTANTS } from '$lib/constants';
	import { t } from '$lib/translations/store';
	import { IQRA_1_HALAMAN, IQRA_LEVELS } from '$data/iqra';
	import SpeakerWaveIcon from '$lib/icons/SpeakerWaveIcon.svelte';
	import StepNav from '$lib/ui/StepNav.svelte';
	import ResetIcon from '$lib/icons/ResetIcon.svelte';
	import ArrowRightIcon from '$lib/icons/ArrowRightIcon.svelte';
	import { settingFontStyle } from '$store';
	import {
		loadProgress,
		markLessonDone,
		isLevelComplete,
		resetJilidProgress
	} from '$lib/utils/iqraProgress';

	const JILID = 1;
	const halaman = IQRA_1_HALAMAN;

	let currentIndex = $state(0);
	let isComplete = $state(false);
	let seen = $state<boolean[]>(new Array(halaman.length).fill(false));

	onMount(() => {
		const progress = loadProgress();
		const saved = progress.levels[JILID] ?? [];
		seen = halaman.map((_, i) => saved[i] ?? false);
		isComplete = isLevelComplete(JILID);
		if (!isComplete) {
			const firstUnseen = seen.findIndex((s) => !s);
			currentIndex = firstUnseen >= 0 ? firstUnseen : 0;
		}
	});

	function goNext() {
		seen[currentIndex] = true;
		markLessonDone(JILID, currentIndex);
		if (currentIndex < halaman.length - 1) {
			currentIndex++;
		} else {
			isComplete = true;
		}
	}

	function goPrev() {
		if (currentIndex > 0) {
			currentIndex--;
		}
	}

	function jumpTo(index: number) {
		currentIndex = index;
	}

	function restart() {
		resetJilidProgress(JILID);
		seen = new Array(halaman.length).fill(false);
		currentIndex = 0;
		isComplete = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowRight' && !isComplete) goNext();
		if (e.key === 'ArrowLeft' && !isComplete) goPrev();
	}

	function speakGroup(letters: string[]) {
		if (typeof speechSynthesis === 'undefined') return;
		speechSynthesis.cancel();
		for (const l of letters) {
			const u = new SpeechSynthesisUtterance(l);
			u.lang = 'ar-SA';
			u.rate = 0.75;
			speechSynthesis.speak(u);
		}
	}

	const currentHalaman = $derived(halaman[currentIndex]);
	const seenCount = $derived(seen.filter(Boolean).length);
	const nextLevel = IQRA_LEVELS.find((l) => l.jilid === JILID + 1);

	const ttsSupported = $derived(typeof speechSynthesis !== 'undefined');

	const arabicFontClass = $derived(
		$settingFontStyle === 'amiriQuran'
			? 'font-arabic-amiri-quran'
			: $settingFontStyle === 'kfgqpc'
				? 'font-arabic-kfgqpc'
				: $settingFontStyle === 'pdms'
					? 'font-arabic-pdms'
					: $settingFontStyle === 'system'
						? 'font-arabic-system'
						: 'font-arabic'
	);
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
	<MetaTag
		title="Iqra Jilid 1 — Huruf Hijaiyah | Baca-Quran.id"
		desc="Belajar 28 huruf hijaiyah dengan harakat fathah. Iqra jilid 1 interaktif, gratis, tanpa iklan."
		url="{TITLE_CONSTANTS.PATH}iqra/1/"
	/>
</svelte:head>

<div class="flex items-center gap-2 px-4 mb-4">
	<BookOpenIcon size="lg" class="w-7 h-7 text-foreground" />
	<h1 class="text-3xl font-bold">{$t('iqra.jilid1Title')}</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: `🏠 ${$t('navigation.home')}`, href: '/' },
			{ text: $t('iqra.title'), href: '/iqra/' }
		]}
	/>
</div>

{#if isComplete}
	<div class="px-4 flex flex-col items-center gap-5 text-center py-8">
		<CheckCircleSolidIcon size="xl" class="w-16 h-16 text-foreground" />
		<h2 class="text-2xl font-bold">{$t('iqra.completionTitle')}</h2>
		<p class="text-foreground-secondary text-lg">
			{$t('iqra.completionDesc', { jilid: '1' })}
		</p>
		<p class="text-foreground-secondary text-sm max-w-xs">
			{$t('iqra.jilid1CompletionNote')}
		</p>
		<div class="flex flex-col gap-3 w-full max-w-xs mt-2">
			{#if nextLevel}
				{#if nextLevel.available}
					<a
						href="/iqra/{nextLevel.jilid}/"
						class="flex justify-center items-center rounded-md bg-control-accent text-control-surface px-4 py-2.5 text-base hover:opacity-90 transition"
					>
						{$t('iqra.nextLevel', { number: String(nextLevel.jilid) })} →
					</a>
				{:else}
					<div
						class="flex justify-center items-center rounded-md bg-secondary text-foreground-secondary border border-foreground/10 px-4 py-2.5 text-base cursor-not-allowed opacity-60"
					>
						{$t('iqra.nextLevelComingSoon', { number: String(nextLevel.jilid) })}
					</div>
				{/if}
			{/if}
			<button
				onclick={restart}
				class="flex justify-center items-center rounded-md bg-secondary text-foreground border border-foreground/20 px-4 py-2.5 text-base hover:opacity-90 transition"
			>
				{$t('iqra.restartLabel')}
			</button>
			<a
				href="/iqra/"
				class="flex justify-center items-center rounded-md bg-secondary text-foreground border border-foreground/20 px-4 py-2.5 text-base hover:opacity-90 transition"
			>
				{$t('iqra.backToLevels')}
			</a>
		</div>
	</div>
{:else}
	<StepNav
		current={currentIndex}
		total={halaman.length}
		onPrev={goPrev}
		onNext={goNext}
		prevLabel={$t('common.previous')}
		nextLabel={$t('common.next')}
		finishLabel={$t('iqra.finish')}
		showCounter
		class="px-4 mb-4"
	/>

	<div class="px-4 mb-4">
		<div class="rounded-2xl shadow-lg bg-secondary overflow-hidden">
			<!-- New letters -->
			<div class="px-5 pt-5 pb-4 border-b border-foreground/10">
				<div class="flex gap-3 justify-center">
					{#each currentHalaman.newLetters as letter}
						<button
							onclick={() => speakGroup([letter.withFathah])}
							class="flex flex-col items-center gap-2 rounded-2xl bg-primary shadow-sm px-6 py-4 flex-1 max-w-[150px] hover:shadow-md active:scale-95 transition-all"
						>
							<span class="{arabicFontClass} text-5xl leading-[1.5] py-2">{letter.withFathah}</span>
							<span class="text-sm font-semibold leading-none">{letter.name}</span>
							<span class="text-xs text-foreground-secondary font-mono">/{letter.bunyi}/</span>
							{#if ttsSupported}
								<SpeakerWaveIcon
									size="xs"
									class="w-3.5 h-3.5 text-foreground-secondary opacity-60 mt-0.5"
								/>
							{/if}
						</button>
					{/each}
				</div>
			</div>

			<!-- Reading rows -->
			<div class="px-4 py-4">
				<div class="flex flex-col gap-2">
					{#each currentHalaman.rows as row, rowIndex}
						{@const isLastRow = rowIndex === currentHalaman.rows.length - 1}
						<div
							class="grid gap-2"
							style="grid-template-columns: repeat({row.length}, 1fr)"
							dir="rtl"
						>
							{#each row as group}
								<button
									onclick={() => speakGroup(group)}
									class="flex items-center justify-center gap-4 rounded-xl min-h-[4.25rem] active:scale-95 transition-all
										{isLastRow ? 'bg-control-accent shadow-sm' : 'bg-primary shadow-sm hover:shadow-md'}"
								>
									{#each group as letter}
										<span
											class="{arabicFontClass} text-4xl py-2 pointer-events-none
												{isLastRow ? 'text-control-surface' : 'text-foreground'}"
										>
											{letter}
										</span>
									{/each}
								</button>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<StepNav
		current={currentIndex}
		total={halaman.length}
		onPrev={goPrev}
		onNext={goNext}
		prevLabel={$t('common.previous')}
		nextLabel={$t('common.next')}
		finishLabel={$t('iqra.finish')}
		showCounter
		class="px-4"
	/>
	<p class="text-center text-xs text-foreground-secondary mt-2 px-4">
		{$t('iqra.keyboardHint')}
	</p>
{/if}
