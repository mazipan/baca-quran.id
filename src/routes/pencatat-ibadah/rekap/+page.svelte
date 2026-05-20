<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { t } from '$lib/translations/store';
	import {
		META_DESC_PENCATAT_IBADAH,
		META_TITLE_PENCATAT_IBADAH,
		TITLE_CONSTANTS
	} from '$lib/constants';
	import { getDayInMonth, getDayjsFormatted } from '$lib/utils/date';
	import { logPrayer, type LogPrayerItemKey } from '$store';

	const FARD_IDS = ['1', '2', '3', '4', '5'] as const;
	const SUNNAH_IDS = ['6', '7', '8', '9', '10', '11', '12'] as const;

	const PRAYER_LABELS: Record<string, string> = {
		'1': 'Subuh',
		'2': 'Dzuhur',
		'3': 'Ashar',
		'4': 'Maghrib',
		'5': 'Isya',
		'6': 'Qabliyah Subuh',
		'7': 'Qabliyah Dzuhur',
		'8': "Ba'diyah Dzuhur",
		'9': "Ba'diyah Maghrib",
		'10': "Ba'diyah Isya",
		'11': 'Dhuha',
		'12': 'Tahajjud'
	};

	const PRAYER_EMOJIS: Record<string, string> = {
		'1': '🌅',
		'2': '☀️',
		'3': '🌤️',
		'4': '🌆',
		'5': '🌙',
		'6': '🌅',
		'7': '☀️',
		'8': '✨',
		'9': '🌆',
		'10': '🌙',
		'11': '🌄',
		'12': '🌌'
	};

	const DAY_NAMES = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

	const today = new Date();
	const todayKey = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;

	let selectedYear = $state(today.getFullYear());
	let selectedMonthIndex = $state(today.getMonth()); // 0–11
	let selectedDay = $state<string | null>(null); // YYYYMMDD

	const monthNames = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];

	function prevMonth() {
		if (selectedMonthIndex === 0) {
			selectedMonthIndex = 11;
			selectedYear -= 1;
		} else {
			selectedMonthIndex -= 1;
		}
		selectedDay = null;
	}

	function nextMonth() {
		if (selectedMonthIndex === 11) {
			selectedMonthIndex = 0;
			selectedYear += 1;
		} else {
			selectedMonthIndex += 1;
		}
		selectedDay = null;
	}

	let calendarDays = $derived.by(() => {
		const firstDate = new Date(selectedYear, selectedMonthIndex, 1);
		const firstDayOfWeek = firstDate.getDay(); // 0=Sun
		const adjustedFirst = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; // Mon=0
		const daysInMonth = getDayInMonth(firstDate.toISOString());

		const cells: Array<{ day: number; key: string } | null> = [];
		for (let i = 0; i < adjustedFirst; i++) cells.push(null);
		for (let d = 1; d <= daysInMonth; d++) {
			const mm = String(selectedMonthIndex + 1).padStart(2, '0');
			const dd = String(d).padStart(2, '0');
			cells.push({ day: d, key: `${selectedYear}${mm}${dd}` });
		}
		return cells;
	});

	let monthStats = $derived.by(() => {
		const prefix = `${selectedYear}${String(selectedMonthIndex + 1).padStart(2, '0')}`;
		const keys = Object.keys($logPrayer).filter((k) => k.startsWith(prefix));
		const perfectDays = keys.filter((k) =>
			FARD_IDS.every((id) => $logPrayer[k]?.[id as LogPrayerItemKey] === 1)
		).length;
		return { daysTracked: keys.length, perfectDays };
	});

	let currentStreak = $derived.by(() => {
		const base = new Date();
		const baseKey = `${base.getFullYear()}${String(base.getMonth() + 1).padStart(2, '0')}${String(base.getDate()).padStart(2, '0')}`;
		const todayDone =
			$logPrayer[baseKey] &&
			FARD_IDS.every((id) => $logPrayer[baseKey]?.[id as LogPrayerItemKey] === 1);
		let count = 0;
		for (let i = todayDone ? 0 : 1; i < 366; i++) {
			const d = new Date(base);
			d.setDate(base.getDate() - i);
			const key = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
			const dayData = $logPrayer[key];
			if (!dayData || !FARD_IDS.every((id) => dayData[id as LogPrayerItemKey] === 1)) break;
			count++;
		}
		return count;
	});

	function getFardCount(key: string): number {
		const dayData = $logPrayer[key];
		if (!dayData) return -1;
		return FARD_IDS.filter((id) => dayData[id as LogPrayerItemKey] === 1).length;
	}

	function getCellClass(key: string, isToday: boolean, isSelected: boolean): string {
		const todayRing = isToday ? ' ring-2 ring-blue-500' : '';
		if (isSelected) return 'bg-blue-500 text-white font-bold';
		const fardCount = getFardCount(key);
		if (fardCount === -1) return `text-foreground/50${todayRing}`;
		if (fardCount === 0)
			return `bg-red-200/60 dark:bg-red-900/40 text-red-700 dark:text-red-300${todayRing}`;
		if (fardCount <= 2)
			return `bg-orange-200/60 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300${todayRing}`;
		if (fardCount <= 4)
			return `bg-yellow-200/60 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300${todayRing}`;
		return `bg-green-200/60 dark:bg-green-900/40 text-green-800 dark:text-green-200 font-semibold${todayRing}`;
	}

	let selectedDayFormatted = $derived.by(() => {
		if (!selectedDay) return '';
		return getDayjsFormatted(selectedDay, 'YYYYMMDD').format('dddd, DD MMMM YYYY');
	});

	let selectedDayFardCount = $derived.by(() => {
		if (!selectedDay) return 0;
		return getFardCount(selectedDay);
	});

	let selectedDaySunnahCount = $derived.by(() => {
		if (!selectedDay) return 0;
		const dayData = $logPrayer[selectedDay];
		if (!dayData) return 0;
		return SUNNAH_IDS.filter((id) => dayData[id as LogPrayerItemKey] === 1).length;
	});
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_PENCATAT_IBADAH}
		desc={META_DESC_PENCATAT_IBADAH}
		url={`${TITLE_CONSTANTS.PATH}pencatat-ibadah/rekap/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">⏺️ {$t('worshipTracker.logRecap')}</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: `🏠 ${$t('navigation.home')}`, href: '/' },
			{
				text: `⏺️ ${$t('navigation.worshipTracker')}`,
				href: '/pencatat-ibadah/'
			}
		]}
	/>
</div>

<div class="px-4 flex flex-col gap-4 pb-8">
	<!-- Month Navigation -->
	<div class="bg-secondary rounded-xl p-4 flex items-center justify-between">
		<button
			onclick={prevMonth}
			class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-lg"
			aria-label={$t('hijriCalendar.prevMonth')}
		>
			‹
		</button>
		<div class="text-center">
			<p class="font-bold text-lg">{monthNames[selectedMonthIndex]}</p>
			<p class="text-sm opacity-70">{selectedYear}</p>
		</div>
		<button
			onclick={nextMonth}
			class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-lg"
			aria-label={$t('hijriCalendar.nextMonth')}
		>
			›
		</button>
	</div>

	<!-- Stats -->
	<div class="grid grid-cols-3 gap-2">
		<div class="bg-secondary rounded-xl p-3 text-center">
			<p class="text-2xl font-bold tabular-nums">{monthStats.daysTracked}</p>
			<p class="text-xs opacity-60 mt-1 leading-tight">{$t('worshipTracker.daysTracked')}</p>
		</div>
		<div class="bg-secondary rounded-xl p-3 text-center">
			<p class="text-2xl font-bold tabular-nums text-green-600 dark:text-green-400">
				{monthStats.perfectDays}
			</p>
			<p class="text-xs opacity-60 mt-1 leading-tight">{$t('worshipTracker.perfectDays')}</p>
		</div>
		<div class="bg-secondary rounded-xl p-3 text-center">
			<p class="text-2xl font-bold tabular-nums text-orange-600 dark:text-orange-400">
				{#if currentStreak > 0}🔥{/if}{currentStreak}
			</p>
			<p class="text-xs opacity-60 mt-1 leading-tight">{$t('worshipTracker.streak')}</p>
		</div>
	</div>

	<!-- Calendar -->
	<div class="bg-secondary rounded-xl p-3">
		<!-- Day headers -->
		<div class="grid grid-cols-7 gap-1 mb-1">
			{#each DAY_NAMES as name}
				<div class="text-center text-xs font-medium opacity-40 py-1">{name}</div>
			{/each}
		</div>
		<!-- Day cells -->
		<div class="grid grid-cols-7 gap-1">
			{#each calendarDays as cell, i (i)}
				{#if cell === null}
					<div></div>
				{:else}
					{@const isToday = cell.key === todayKey}
					{@const isSelected = cell.key === selectedDay}
					<button
						onclick={() => {
							selectedDay = isSelected ? null : cell.key;
						}}
						class="aspect-square rounded-lg text-xs transition-all {getCellClass(cell.key, isToday, isSelected)}"
						aria-label="Tanggal {cell.day}"
						aria-pressed={isSelected}
					>
						{cell.day}
					</button>
				{/if}
			{/each}
		</div>

		<!-- Legend -->
		<div class="flex items-center gap-3 flex-wrap mt-3 pt-3 border-t border-foreground/10 text-xs">
			<span class="opacity-50">{$t('worshipTracker.calendarLegend')}:</span>
			<span class="flex items-center gap-1">
				<span
					class="w-3.5 h-3.5 rounded bg-red-200/60 dark:bg-red-900/40 inline-block border border-foreground/10"
				></span>
				0/5
			</span>
			<span class="flex items-center gap-1">
				<span
					class="w-3.5 h-3.5 rounded bg-orange-200/60 dark:bg-orange-900/40 inline-block border border-foreground/10"
				></span>
				1–2/5
			</span>
			<span class="flex items-center gap-1">
				<span
					class="w-3.5 h-3.5 rounded bg-yellow-200/60 dark:bg-yellow-900/40 inline-block border border-foreground/10"
				></span>
				3–4/5
			</span>
			<span class="flex items-center gap-1">
				<span
					class="w-3.5 h-3.5 rounded bg-green-200/60 dark:bg-green-900/40 inline-block border border-foreground/10"
				></span>
				5/5
			</span>
		</div>
	</div>

	<!-- Day Detail Panel -->
	{#if selectedDay}
		<div class="bg-secondary rounded-xl p-4 border-2 border-blue-200 dark:border-blue-900">
			<div class="flex items-start justify-between mb-4">
				<div>
					<h3 class="font-bold">{selectedDayFormatted}</h3>
					<p class="text-xs opacity-60 mt-0.5">
						{selectedDayFardCount}/5 wajib · {selectedDaySunnahCount}/7 sunnah
					</p>
				</div>
				<button
					onclick={() => (selectedDay = null)}
					class="w-7 h-7 rounded-full flex items-center justify-center hover:bg-primary transition-colors opacity-50 hover:opacity-100 text-sm"
					aria-label="Tutup detail"
				>
					✕
				</button>
			</div>

			{#if $logPrayer[selectedDay]}
				<!-- Fard section -->
				<div class="mb-4">
					<p class="text-xs font-semibold uppercase tracking-wide opacity-50 mb-2">
						🕌 Sholat Wajib
					</p>
					<div class="grid grid-cols-2 gap-y-2 gap-x-3">
						{#each FARD_IDS as id}
							{@const done = $logPrayer[selectedDay]?.[id as LogPrayerItemKey] === 1}
							<div class="flex items-center gap-2 text-sm">
								<span class={done ? 'text-green-500' : 'text-foreground/20'}>
									{done ? '✅' : '⬜'}
								</span>
								<span class={done ? '' : 'opacity-40'}>
									{PRAYER_EMOJIS[id]}
									{PRAYER_LABELS[id]}
								</span>
							</div>
						{/each}
					</div>
				</div>

				<!-- Sunnah section -->
				<div>
					<p class="text-xs font-semibold uppercase tracking-wide opacity-50 mb-2">
						⭐ Sholat Sunnah
					</p>
					<div class="grid grid-cols-2 gap-y-2 gap-x-3">
						{#each SUNNAH_IDS as id}
							{@const done = $logPrayer[selectedDay]?.[id as LogPrayerItemKey] === 1}
							<div class="flex items-center gap-2 text-sm">
								<span class={done ? 'text-amber-500' : 'text-foreground/20'}>
									{done ? '✅' : '⬜'}
								</span>
								<span class={done ? '' : 'opacity-40'}>
									{PRAYER_EMOJIS[id]}
									{PRAYER_LABELS[id]}
								</span>
							</div>
						{/each}
					</div>
				</div>
			{:else}
				<p class="text-sm opacity-50 text-center py-4">{$t('worshipTracker.noDataForDay')}</p>
			{/if}
		</div>
	{:else if monthStats.daysTracked === 0}
		<div class="flex flex-col gap-2 justify-center items-center p-6">
			<p class="text-xl text-center font-bold">
				{$t('worshipTracker.noRecapData', { month: monthNames[selectedMonthIndex] })}
			</p>
			<img
				src="/images/illustrasion-error.svg"
				alt="The monsters eating your page"
				class="w-[60%] mt-4"
			/>
		</div>
	{:else}
		<p class="text-sm text-center opacity-40 py-2">{$t('worshipTracker.tapForDetail')}</p>
	{/if}
</div>

<SeoText variant="CATAT_IBADAH" />
