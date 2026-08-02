<script lang="ts">
	import { onMount } from 'svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import Button from '$lib/ui/Button.svelte';
	import { TITLE_CONSTANTS } from '$lib/constants';
	import { t } from '$lib/translations/store';
	import { HIJAIYAH_LETTERS, IQRA_LEVELS } from '$data/iqra';
	import { loadProgress, markLessonDone, isLevelComplete } from '$lib/utils/iqraProgress';

	const JILID = 1;
	const letters = HIJAIYAH_LETTERS;

	let currentIndex = $state(0);
	let isComplete = $state(false);
	let seen = $state<boolean[]>(new Array(letters.length).fill(false));

	onMount(() => {
		const progress = loadProgress();
		const saved = progress.levels[JILID] ?? [];
		seen = letters.map((_, i) => saved[i] ?? false);
		isComplete = isLevelComplete(JILID);
		if (!isComplete) {
			const firstUnseen = seen.findIndex((s) => !s);
			currentIndex = firstUnseen >= 0 ? firstUnseen : 0;
		}
	});

	function goNext() {
		seen[currentIndex] = true;
		markLessonDone(JILID, currentIndex);
		if (currentIndex < letters.length - 1) {
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

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowRight' && !isComplete) goNext();
		if (e.key === 'ArrowLeft' && !isComplete) goPrev();
	}

	const currentLetter = $derived(letters[currentIndex]);
	const seenCount = $derived(seen.filter(Boolean).length);
	const nextLevel = IQRA_LEVELS.find((l) => l.jilid === JILID + 1);
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
	<MetaTag
		title="Iqra Jilid 1 — Huruf Hijaiyah | Baca-Quran.id"
		desc="Belajar 28 huruf hijaiyah dengan harakat fathah. Iqra jilid 1 interaktif, gratis, tanpa iklan."
		url="{TITLE_CONSTANTS.PATH}iqra/1/"
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📖 {$t('iqra.jilid1Title')}</h1>
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
	<div class="px-4 flex flex-col items-center gap-6 text-center py-8">
		<div class="text-7xl">🎉</div>
		<h2 class="text-2xl font-bold">{$t('iqra.completionTitle')}</h2>
		<p class="text-foreground-secondary text-lg">
			{$t('iqra.completionDesc', { jilid: '1' })}
		</p>
		<p class="text-foreground-secondary">
			{$t('iqra.jilid1CompletionNote')}
		</p>
		<div class="flex flex-col gap-3 w-full max-w-xs">
			{#if nextLevel}
				{#if nextLevel.available}
					<a
						href="/iqra/{nextLevel.jilid}/"
						class="flex justify-center items-center rounded-md bg-blue-600 text-white px-4 py-2.5 text-base hover:bg-blue-700 transition"
					>
						{$t('iqra.nextLevel', { number: String(nextLevel.jilid) })} →
					</a>
				{:else}
					<div
						class="flex justify-center items-center rounded-md bg-secondary text-foreground-secondary border border-foreground/10 px-4 py-2.5 text-base cursor-not-allowed opacity-60"
					>
						🔒 {$t('iqra.nextLevelComingSoon', { number: String(nextLevel.jilid) })}
					</div>
				{/if}
			{/if}
			<a
				href="/iqra/"
				class="flex justify-center items-center rounded-md bg-secondary text-foreground border border-foreground/20 px-4 py-2.5 text-base hover:opacity-90 transition"
			>
				{$t('iqra.backToLevels')}
			</a>
			<a
				href="/surah/1/"
				class="flex justify-center items-center rounded-md bg-secondary text-foreground border border-foreground/20 px-4 py-2.5 text-base hover:opacity-90 transition"
			>
				📖 {$t('iqra.tryAlFatihah')}
			</a>
		</div>
	</div>
{:else}
	<div class="px-4 mb-3 flex justify-between items-center text-sm text-foreground-secondary">
		<span>{$t('iqra.lesson')} {currentIndex + 1} / {letters.length}</span>
		<span>{seenCount} / {letters.length} {$t('iqra.seen')}</span>
	</div>

	<div class="px-4 mb-6">
		<div
			class="rounded-2xl shadow-lg p-8 bg-secondary flex flex-col items-center gap-4 select-none"
		>
			<div class="font-arabic text-[120px] leading-none" dir="rtl">
				{currentLetter.withFathah}
			</div>
			<div class="flex flex-col items-center gap-1 mt-2">
				<span class="text-2xl font-bold">{currentLetter.name}</span>
				<span class="text-xl text-foreground-secondary">"{currentLetter.bunyi}"</span>
			</div>
			<div class="text-xs text-foreground-secondary mt-1">
				{$t('iqra.harakatNote')}
			</div>
		</div>
	</div>

	<div class="px-4 flex gap-3">
		<Button
			onClick={goPrev}
			variant="outline"
			color="secondary"
			size="lg"
			disabled={currentIndex === 0}
			class="flex-1"
		>
			← {$t('common.previous')}
		</Button>
		<Button onClick={goNext} variant="solid" color="info" size="lg" class="flex-1">
			{currentIndex < letters.length - 1 ? $t('common.next') : $t('iqra.finish')} →
		</Button>
	</div>

	<div class="px-4 mt-6 flex flex-wrap gap-1.5 justify-center">
		{#each letters as letter, i (letter.id)}
			<button
				onclick={() => jumpTo(i)}
				aria-label="{letter.name} ({i + 1})"
				class="rounded-full transition-all
					{i === currentIndex
					? 'w-6 h-3 bg-blue-500'
					: seen[i]
						? 'w-3 h-3 bg-green-500'
						: 'w-3 h-3 bg-secondary border border-foreground/20'}"
			></button>
		{/each}
	</div>
	<p class="text-center text-xs text-foreground-secondary mt-2 px-4">
		{$t('iqra.keyboardHint')}
	</p>
{/if}
