<script lang="ts">
	import { onMount } from 'svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import BookOpenIcon from '$lib/icons/BookOpenIcon.svelte';
	import CheckCircleSolidIcon from '$lib/icons/CheckCircleSolidIcon.svelte';
	import { TITLE_CONSTANTS } from '$lib/constants';
	import { t } from '$lib/translations/store';
	import { IQRA_LEVELS } from '$data/iqra';
	import { getLevelStats, isLevelComplete, resetProgress } from '$lib/utils/iqraProgress';

	type LevelStats = { completed: number; total: number };

	let stats = $state<Record<number, LevelStats>>({});
	let completedLevels = $state<Record<number, boolean>>({});
	let showResetConfirm = $state(false);

	onMount(() => {
		refreshStats();
	});

	function refreshStats() {
		const s: Record<number, LevelStats> = {};
		const c: Record<number, boolean> = {};
		for (const level of IQRA_LEVELS) {
			s[level.jilid] = getLevelStats(level.jilid);
			c[level.jilid] = isLevelComplete(level.jilid);
		}
		stats = s;
		completedLevels = c;
	}

	function handleReset() {
		resetProgress();
		showResetConfirm = false;
		refreshStats();
	}

	const jilidTitles: Record<number, string> = {
		1: 'iqra.jilid1Title',
		2: 'iqra.jilid2Title',
		3: 'iqra.jilid3Title',
		4: 'iqra.jilid4Title',
		5: 'iqra.jilid5Title',
		6: 'iqra.jilid6Title'
	};

	const jilidDescs: Record<number, string> = {
		1: 'iqra.jilid1Desc',
		2: 'iqra.jilid2Desc',
		3: 'iqra.jilid3Desc',
		4: 'iqra.jilid4Desc',
		5: 'iqra.jilid5Desc',
		6: 'iqra.jilid6Desc'
	};

	const totalCompleted = $derived(Object.values(completedLevels).filter(Boolean).length);
</script>

<svelte:head>
	<MetaTag
		title="Belajar Iqra Jilid 1-6 | Baca-Quran.id"
		desc="Belajar membaca Al-Qur'an dari awal dengan metode Iqra jilid 1 sampai 6. Gratis, tanpa iklan, bisa offline."
		url="{TITLE_CONSTANTS.PATH}iqra/"
	/>
</svelte:head>

<div class="flex items-center gap-2 px-4 mb-4">
	<BookOpenIcon size="lg" class="w-7 h-7 text-foreground" />
	<h1 class="text-3xl font-bold">{$t('iqra.title')}</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: `🏠 ${$t('navigation.home')}`, href: '/' }]} />
</div>

<div class="px-4 mb-6">
	<p class="text-foreground-secondary">{$t('iqra.subtitle')}</p>
	{#if totalCompleted > 0}
		<p class="text-sm text-foreground-secondary mt-1.5 flex items-center gap-1">
			<CheckCircleSolidIcon size="sm" class="shrink-0" />
			{$t('iqra.overallProgress', { completed: String(totalCompleted), total: '6' })}
		</p>
	{/if}
</div>

<div class="px-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
	{#each IQRA_LEVELS as level (level.jilid)}
		{@const levelStats = stats[level.jilid] ?? { completed: 0, total: 0 }}
		{@const isDone = completedLevels[level.jilid] ?? false}
		{@const percent =
			levelStats.total > 0
				? Math.min(Math.round((levelStats.completed / levelStats.total) * 100), 100)
				: 0}

		{#if level.available}
			<a
				href="/iqra/{level.jilid}/"
				class="relative rounded-lg overflow-hidden shadow p-4 bg-secondary flex flex-col gap-2 hover:opacity-90 transition"
			>
				<div class="flex items-start justify-between gap-2">
					<div>
						<div
							class="text-xs text-foreground-secondary font-medium uppercase tracking-wide mb-0.5"
						>
							{$t('iqra.levelLabel', { number: String(level.jilid) })}
						</div>
						<div class="font-bold text-base">{$t(jilidTitles[level.jilid])}</div>
						<div class="text-sm text-foreground-secondary mt-0.5">
							{$t(jilidDescs[level.jilid])}
						</div>
					</div>
					{#if isDone}
						<CheckCircleSolidIcon size="md" class="shrink-0 text-foreground" />
					{/if}
				</div>

				<div class="mt-1">
					<div class="flex justify-between text-xs text-foreground-secondary mb-1">
						<span>{levelStats.completed} / {levelStats.total}</span>
						<span>{percent}%</span>
					</div>
					<div class="w-full h-1.5 rounded-full bg-foreground/10 overflow-hidden">
						<div
							class="h-full rounded-full transition-all bg-control-accent"
							style="width: {percent}%"
						></div>
					</div>
				</div>

				<div class="mt-1 text-sm font-medium text-foreground-secondary">
					{#if isDone}
						{$t('iqra.reviewLabel')}
					{:else if levelStats.completed > 0}
						{$t('iqra.continueLabel')}
					{:else}
						{$t('iqra.startLabel')}
					{/if} →
				</div>
			</a>
		{:else}
			<div
				class="relative rounded-lg overflow-hidden shadow p-4 bg-secondary flex flex-col gap-2 opacity-50"
			>
				<div class="flex items-start justify-between gap-2">
					<div>
						<div
							class="text-xs text-foreground-secondary font-medium uppercase tracking-wide mb-0.5"
						>
							{$t('iqra.levelLabel', { number: String(level.jilid) })}
						</div>
						<div class="font-bold text-base">{$t(jilidTitles[level.jilid])}</div>
						<div class="text-sm text-foreground-secondary mt-0.5">
							{$t(jilidDescs[level.jilid])}
						</div>
					</div>
					<!-- Lock icon -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="w-5 h-5 shrink-0 text-foreground-secondary"
					>
						<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
						<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
					</svg>
				</div>
				<div class="text-xs text-foreground-secondary italic">{$t('iqra.comingSoon')}</div>
			</div>
		{/if}
	{/each}
</div>

<div class="px-4 mt-8">
	{#if showResetConfirm}
		<div class="rounded-lg border border-foreground/20 bg-secondary p-4 flex flex-col gap-3">
			<p class="text-sm text-foreground-secondary">{$t('iqra.resetConfirm')}</p>
			<div class="flex gap-2">
				<button
					onclick={handleReset}
					class="rounded-md bg-foreground text-primary px-3 py-1.5 text-sm hover:opacity-80 transition"
				>
					{$t('common.confirm')}
				</button>
				<button
					onclick={() => (showResetConfirm = false)}
					class="rounded-md bg-secondary text-foreground border border-foreground/20 px-3 py-1.5 text-sm hover:opacity-80 transition"
				>
					{$t('common.cancel')}
				</button>
			</div>
		</div>
	{:else}
		<button
			onclick={() => (showResetConfirm = true)}
			class="text-sm text-foreground-secondary underline underline-offset-2 hover:text-foreground transition"
		>
			{$t('iqra.resetProgress')}
		</button>
	{/if}
</div>
