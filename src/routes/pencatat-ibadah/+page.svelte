<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import {
		CONSTANTS,
		META_DESC_PENCATAT_IBADAH,
		META_TITLE_PENCATAT_IBADAH,
		TITLE_CONSTANTS
	} from '$lib/constants';
	import { formatDate, getCurrentDate, getDayInMonth } from '$lib/utils/date';
	import type { PrayerKey } from '$lib/types';
	import { logPrayer, type LogPrayerItemKey, type LogPrayerItemValue } from '$store';
	import { onMount } from 'svelte';
	import Button from '$lib/ui/Button.svelte';
	import ArrowRightIcon from '$lib/icons/ArrowRightIcon.svelte';
	import { t } from '$lib/translations/store';

	const FARD_PRAYERS: Array<{ key: PrayerKey; title: string; id: LogPrayerItemKey; emoji: string }> =
		[
			{ key: 'Fajr', title: 'Subuh', id: '1', emoji: '🌅' },
			{ key: 'Dhuhr', title: 'Dzuhur', id: '2', emoji: '☀️' },
			{ key: 'Asr', title: 'Ashar', id: '3', emoji: '🌤️' },
			{ key: 'Maghrib', title: 'Maghrib', id: '4', emoji: '🌆' },
			{ key: 'Isha', title: 'Isya', id: '5', emoji: '🌙' }
		];

	const SUNNAH_PRAYERS: Array<{ title: string; id: LogPrayerItemKey; emoji: string }> = [
		{ title: 'Qabliyah Subuh', id: '6', emoji: '🌅' },
		{ title: 'Qabliyah Dzuhur', id: '7', emoji: '☀️' },
		{ title: "Ba'diyah Dzuhur", id: '8', emoji: '✨' },
		{ title: "Ba'diyah Maghrib", id: '9', emoji: '🌆' },
		{ title: "Ba'diyah Isya", id: '10', emoji: '🌙' },
		{ title: 'Dhuha', id: '11', emoji: '🌄' },
		{ title: 'Tahajjud', id: '12', emoji: '🌌' }
	];

	let dayInMonth = getDayInMonth(new Date().toISOString());
	let selectedDate = $state(getCurrentDate());
	let isToday = $derived(selectedDate === getCurrentDate());

	let hasAnyData = $derived(
		Object.values($logPrayer).some((d) => Object.values(d).some((v) => v === 1))
	);
	let welcomeDismissed = $state(false);
	let showWelcome = $derived(!hasAnyData && !welcomeDismissed);

	let selectedYYYYMMDD = $derived.by(() => {
		const d = new Date();
		d.setDate(selectedDate);
		return formatDate(d.toISOString(), 'YYYYMMDD');
	});

	let selectedDateFormatted = $derived.by(() => {
		const d = new Date();
		d.setDate(selectedDate);
		return formatDate(d.toISOString(), 'dddd, DD MMMM YYYY');
	});

	let fardCompleted = $derived.by(() => {
		const dayData = $logPrayer[selectedYYYYMMDD];
		if (!dayData) return 0;
		return FARD_PRAYERS.filter((p) => dayData[p.id] === 1).length;
	});

	let sunnahCompleted = $derived.by(() => {
		const dayData = $logPrayer[selectedYYYYMMDD];
		if (!dayData) return 0;
		return SUNNAH_PRAYERS.filter((p) => dayData[p.id] === 1).length;
	});

	let currentStreak = $derived.by(() => {
		const base = new Date();
		const todayFardDone = FARD_PRAYERS.every(
			(p) => $logPrayer[formatDate(base.toISOString(), 'YYYYMMDD')]?.[p.id] === 1
		);
		let count = 0;
		for (let i = todayFardDone ? 0 : 1; i < 366; i++) {
			const d = new Date(base);
			d.setDate(base.getDate() - i);
			const key = formatDate(d.toISOString(), 'YYYYMMDD');
			const dayData = $logPrayer[key];
			if (!dayData || !FARD_PRAYERS.every((p) => dayData[p.id] === 1)) break;
			count++;
		}
		return count;
	});

	function togglePrayer(id: LogPrayerItemKey) {
		logPrayer.update((val) => {
			const currentDay = val[selectedYYYYMMDD] || {};
			const updated = {
				...val,
				[selectedYYYYMMDD]: {
					...currentDay,
					[id]: (currentDay[id] === 1 ? 0 : 1) as LogPrayerItemValue
				}
			};
			localStorage.setItem(CONSTANTS.STORAGE_KEY.LOG_PRAYER, JSON.stringify(updated));
			return updated;
		});
	}

	onMount(() => {
		if (window.location.hash) {
			const day = parseInt(window.location.hash.replace('#day-', ''));
			if (!isNaN(day) && day >= 1 && day <= dayInMonth) {
				selectedDate = day;
			}
		}
	});
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_PENCATAT_IBADAH}
		desc={META_DESC_PENCATAT_IBADAH}
		url={`${TITLE_CONSTANTS.PATH}pencatat-ibadah/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">⏺️ {$t('navigation.worshipTracker')}</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{
				text: `🏠 ${$t('navigation.home')}`,
				href: '/'
			}
		]}
	/>
</div>

<div class="px-4 flex flex-col gap-4 pb-6">
	<!-- Welcome wizard (first-time users) -->
	{#if showWelcome}
		<div class="bg-secondary rounded-xl p-5 border-2 border-blue-200 dark:border-blue-800">
			<div class="flex items-start justify-between mb-3">
				<div>
					<h2 class="font-bold text-lg">👋 Selamat Datang!</h2>
					<p class="text-sm opacity-60 mt-0.5">Pencatat Ibadah Harian</p>
				</div>
				<button
					onclick={() => (welcomeDismissed = true)}
					class="w-7 h-7 rounded-full flex items-center justify-center hover:bg-primary transition-colors opacity-40 hover:opacity-100 text-sm"
					aria-label="Tutup"
				>
					✕
				</button>
			</div>
			<p class="text-sm opacity-80 mb-4 leading-relaxed">
				Catat sholat harianmu untuk refleksi diri. Semua data hanya tersimpan di perambanmu —
				<strong>privasi aman & gratis sepenuhnya</strong>.
			</p>
			<div class="grid grid-cols-3 gap-2 mb-4">
				<div class="bg-primary rounded-lg p-3 text-center">
					<p class="text-2xl">🕌</p>
					<p class="text-xs mt-1 font-semibold">5 Wajib</p>
				</div>
				<div class="bg-primary rounded-lg p-3 text-center">
					<p class="text-2xl">⭐</p>
					<p class="text-xs mt-1 font-semibold">7 Sunnah</p>
				</div>
				<div class="bg-primary rounded-lg p-3 text-center">
					<p class="text-2xl">🔥</p>
					<p class="text-xs mt-1 font-semibold">Streak</p>
				</div>
			</div>
			<button
				onclick={() => (welcomeDismissed = true)}
				class="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
			>
				Mulai Catat →
			</button>
		</div>
	{/if}

	<!-- Date Navigation -->
	<div class="bg-secondary rounded-xl p-4 flex items-center justify-between gap-3">
		<button
			onclick={() => selectedDate > 1 && selectedDate--}
			disabled={selectedDate <= 1}
			class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors disabled:opacity-30 text-lg flex-shrink-0"
			aria-label={$t('worshipTracker.prevDay')}
		>
			‹
		</button>
		<div class="text-center min-w-0">
			<p class="font-bold text-base truncate">{selectedDateFormatted.split(',')[0]}</p>
			<p class="text-sm opacity-70 truncate">
				{selectedDateFormatted.split(',').slice(1).join(',').trim()}
			</p>
			{#if !isToday}
				<button
					onclick={() => (selectedDate = getCurrentDate())}
					class="text-xs text-blue-500 hover:text-blue-600 mt-0.5 underline"
				>
					Hari Ini
				</button>
			{/if}
		</div>
		<button
			onclick={() => selectedDate < dayInMonth && selectedDate++}
			disabled={selectedDate >= dayInMonth}
			class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors disabled:opacity-30 text-lg flex-shrink-0"
			aria-label={$t('worshipTracker.nextDay')}
		>
			›
		</button>
	</div>

	<!-- Progress + Streak -->
	<div class="bg-secondary rounded-xl p-4 flex flex-col gap-3">
		{#if currentStreak > 0}
			<div
				class="flex items-center gap-3 pb-3 border-b border-foreground/10"
			>
				<span class="text-3xl leading-none">🔥</span>
				<div class="flex-1 min-w-0">
					<p class="font-bold text-lg leading-none tabular-nums">
						{currentStreak}
						<span class="text-sm font-normal opacity-70">hari berturut-turut</span>
					</p>
					<p class="text-xs opacity-50 mt-0.5">Sholat wajib terpenuhi</p>
				</div>
				{#if currentStreak >= 7}
					<span
						class="text-xs px-2 py-1 rounded-full font-semibold bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 flex-shrink-0"
					>
						{#if currentStreak >= 30}🏆 30+ hari
						{:else if currentStreak >= 14}⭐ 2 minggu
						{:else}🌟 1 minggu{/if}
					</span>
				{/if}
			</div>
		{/if}
		<div>
			<div class="flex justify-between items-center text-sm mb-1.5">
				<span class="font-medium">🕌 {$t('worshipTracker.fardPrayer')}</span>
				<span
					class="font-bold tabular-nums {fardCompleted === 5
						? 'text-green-600 dark:text-green-400'
						: ''}">{fardCompleted}/5</span
				>
			</div>
			<div class="w-full bg-primary rounded-full h-2.5 overflow-hidden">
				<div
					class="h-2.5 rounded-full transition-all duration-300 {fardCompleted === 5
						? 'bg-green-500'
						: 'bg-blue-500'}"
					style="width: {(fardCompleted / 5) * 100}%"
				></div>
			</div>
		</div>
		<div>
			<div class="flex justify-between items-center text-sm mb-1.5">
				<span class="font-medium">⭐ {$t('worshipTracker.sunnahPrayer')}</span>
				<span
					class="font-bold tabular-nums {sunnahCompleted === 7
						? 'text-amber-600 dark:text-amber-400'
						: ''}">{sunnahCompleted}/7</span
				>
			</div>
			<div class="w-full bg-primary rounded-full h-2.5 overflow-hidden">
				<div
					class="h-2.5 rounded-full transition-all duration-300 bg-amber-500"
					style="width: {(sunnahCompleted / 7) * 100}%"
				></div>
			</div>
		</div>
	</div>

	<!-- Celebration banner -->
	{#if fardCompleted === 5}
		<div
			class="bg-green-100 dark:bg-green-950 border border-green-400 dark:border-green-700 rounded-xl p-4 text-center"
		>
			<p class="text-2xl mb-1">{sunnahCompleted === 7 ? '🏆' : '🎉'}</p>
			<p class="font-bold text-green-700 dark:text-green-300">
				{sunnahCompleted === 7 ? 'Sempurna! Wajib & Sunnah selesai.' : 'Sholat Wajib Selesai!'}
			</p>
			{#if sunnahCompleted < 7}
				<p class="text-xs text-green-600 dark:text-green-400 mt-1">
					Tambah {7 - sunnahCompleted} sholat sunnah untuk hari yang lebih sempurna.
				</p>
			{/if}
		</div>
	{/if}

	<!-- Fard Prayers -->
	<div>
		<h2 class="text-sm font-bold uppercase tracking-wide opacity-60 mb-3">
			🕌 {$t('worshipTracker.fardPrayer')}
		</h2>
		<div class="grid grid-cols-2 gap-3">
			{#each FARD_PRAYERS as prayer (prayer.id)}
				{@const done = $logPrayer[selectedYYYYMMDD]?.[prayer.id] === 1}
				<button
					onclick={() => togglePrayer(prayer.id)}
					class="flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer {prayer.id === '5'
						? 'col-span-2'
						: ''} {done
						? 'bg-green-100 dark:bg-green-950 border-green-500'
						: 'bg-secondary border-transparent hover:border-foreground/20 active:scale-95'}"
					aria-pressed={done}
					aria-label="{done ? 'Batalkan' : 'Tandai'} {prayer.title}"
				>
					<span class="text-3xl">{prayer.emoji}</span>
					<span class="font-semibold text-sm">{prayer.title}</span>
					{#if done}
						<span class="text-xs text-green-600 dark:text-green-400 font-medium">✓ Selesai</span>
					{:else}
						<span class="text-xs opacity-30">Belum</span>
					{/if}
				</button>
			{/each}
		</div>
	</div>

	<!-- Sunnah Prayers -->
	<div>
		<h2 class="text-sm font-bold uppercase tracking-wide opacity-60 mb-3">
			⭐ {$t('worshipTracker.sunnahPrayer')}
		</h2>
		<div class="grid grid-cols-2 gap-3">
			{#each SUNNAH_PRAYERS as prayer (prayer.id)}
				{@const done = $logPrayer[selectedYYYYMMDD]?.[prayer.id] === 1}
				<button
					onclick={() => togglePrayer(prayer.id)}
					class="flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer {prayer.id === '12'
						? 'col-span-2'
						: ''} {done
						? 'bg-amber-100 dark:bg-amber-950 border-amber-500'
						: 'bg-secondary border-transparent hover:border-foreground/20 active:scale-95'}"
					aria-pressed={done}
					aria-label="{done ? 'Batalkan' : 'Tandai'} {prayer.title}"
				>
					<span class="text-3xl">{prayer.emoji}</span>
					<span class="font-semibold text-sm text-center leading-tight">{prayer.title}</span>
					{#if done}
						<span class="text-xs text-amber-600 dark:text-amber-400 font-medium">✓ Selesai</span>
					{:else}
						<span class="text-xs opacity-30">Belum</span>
					{/if}
				</button>
			{/each}
		</div>
	</div>

	<!-- View Recap -->
	<div class="flex justify-end pt-2">
		<a href="/pencatat-ibadah/rekap/">
			<Button onClick={() => {}} variant="outline" color="primary">
				{$t('worshipTracker.viewRecap')}
				<ArrowRightIcon size="sm" />
			</Button>
		</a>
	</div>
</div>

<SeoText variant="CATAT_IBADAH" />
