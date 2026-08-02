<script lang="ts">
	import { onMount } from 'svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import Button from '$lib/ui/Button.svelte';
	import BookOpenIcon from '$lib/icons/BookOpenIcon.svelte';
	import CheckCircleSolidIcon from '$lib/icons/CheckCircleSolidIcon.svelte';
	import { TITLE_CONSTANTS } from '$lib/constants';
	import { t } from '$lib/translations/store';
	import { IQRA_1_HALAMAN, IQRA_LEVELS } from '$data/iqra';
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

	const currentHalaman = $derived(halaman[currentIndex]);
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
	<div class="px-4 mb-3 flex justify-between items-center text-sm text-foreground-secondary">
		<span
			>{$t('iqra.halamanLabel', {
				current: String(currentIndex + 1),
				total: String(halaman.length)
			})}</span
		>
		<span>{seenCount} / {halaman.length} {$t('iqra.seen')}</span>
	</div>

	<div class="px-4 mb-4">
		<div class="rounded-2xl shadow-lg bg-secondary overflow-hidden">
			<!-- New letters header -->
			<div class="px-4 pt-4 pb-3 border-b border-foreground/10">
				<p class="text-xs text-foreground-secondary mb-2">{$t('iqra.newLettersLabel')}</p>
				<div class="flex gap-4 justify-center">
					{#each currentHalaman.newLetters as letter}
						<div class="flex flex-col items-center gap-1">
							<span class="font-arabic text-4xl leading-none">{letter.withFathah}</span>
							<span class="text-sm font-semibold">{letter.name}</span>
							<span class="text-xs text-foreground-secondary">"{letter.bunyi}"</span>
						</div>
					{/each}
				</div>
			</div>

			<!-- Reading rows -->
			<div class="px-4 pt-3 pb-4">
				<p class="text-xs text-foreground-secondary mb-3 text-right">{$t('iqra.readRTL')}</p>
				<div class="flex flex-col gap-3">
					{#each currentHalaman.rows as row, rowIndex}
						<div class="flex justify-end gap-3 flex-wrap" dir="rtl">
							{#each row as letter}
								<span
									class="font-arabic leading-none select-none {rowIndex ===
									currentHalaman.rows.length - 1
										? 'text-4xl text-control-accent'
										: 'text-3xl'}"
								>
									{letter}
								</span>
							{/each}
						</div>
						{#if rowIndex < currentHalaman.rows.length - 1}
							<div class="h-px bg-foreground/5"></div>
						{/if}
					{/each}
				</div>
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
			{currentIndex < halaman.length - 1 ? $t('common.next') : $t('iqra.finish')} →
		</Button>
	</div>

	<div class="px-4 mt-6 flex flex-wrap gap-1.5 justify-center">
		{#each halaman as h, i (h.id)}
			<button
				onclick={() => jumpTo(i)}
				aria-label="Halaman {i + 1}"
				class="rounded-full transition-all
					{i === currentIndex
					? 'w-6 h-3 bg-control-accent'
					: seen[i]
						? 'w-3 h-3 bg-foreground/40'
						: 'w-3 h-3 bg-secondary border border-foreground/20'}"
			></button>
		{/each}
	</div>
	<p class="text-center text-xs text-foreground-secondary mt-2 px-4">
		{$t('iqra.keyboardHint')}
	</p>
{/if}
