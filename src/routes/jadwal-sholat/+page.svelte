<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import {
		CONSTANTS,
		META_DESC_JADWAL_SHOLAT,
		META_TITLE_JADWAL_SHOLAT,
		TITLE_CONSTANTS
	} from '$lib/constants';
	import MarkerIcon from '$lib/icons/MarkerIcon.svelte';
	import Button from '$lib/ui/Button.svelte';
	import { onMount } from 'svelte';
	import { settingLocation } from '../../store';
	import type { PrayerTimeData, PrayerTimeResponse, PrayerKey } from '$lib/types';
	import { toast } from '../../store/toast';
	import PrayerTimeList from '$lib/PrayerTimeList.svelte';
	import PrayerDateStrip from '$lib/PrayerDateStrip.svelte';
	import { t } from '$lib/translations/store';
	import { t as translate } from '$lib/translations';
	import { formatHijriDate } from '$lib/utils/hijri';
	import { languageStore } from '$lib/checkLanguaguage';
	import { todayPrayerTimings, nextPrayerInfo } from '../../store/prayerReminder';

	const BASE_URL = 'https://api.aladhan.com/v1/calendar';

	const PRAYER_NAMES: Record<PrayerKey, string> = {
		Fajr: 'Subuh',
		Dhuhr: 'Dzuhur',
		Asr: 'Ashar',
		Maghrib: 'Maghrib',
		Isha: 'Isya'
	};

	const PRAYER_EMOJIS: Record<PrayerKey, string> = {
		Fajr: '🌅',
		Dhuhr: '☀️',
		Asr: '🌤️',
		Maghrib: '🌇',
		Isha: '🌙'
	};

	let prayerTimes: PrayerTimeData[] = $state([]);
	let isLoading: boolean = $state(false);
	let selectedIndex: number = $state(0);
	let now: Date = $state(new Date());

	const todayGregorian = new Date()
		.toLocaleDateString('id-ID', { month: '2-digit', day: '2-digit', year: 'numeric' })
		.replace(/\//g, '-');

	let todayIndex = $derived(prayerTimes.findIndex((d) => d.date.gregorian.date === todayGregorian));

	let displayedDay = $derived(prayerTimes[selectedIndex] ?? null);
	let isViewingToday = $derived(selectedIndex === todayIndex && todayIndex >= 0);

	let hours = $derived(now.getHours());
	let minutes = $derived(now.getMinutes());
	let seconds = $derived(now.getSeconds());

	let countdownH = $derived(
		$nextPrayerInfo ? String(Math.floor($nextPrayerInfo.secondsLeft / 3600)).padStart(2, '0') : '--'
	);
	let countdownM = $derived(
		$nextPrayerInfo
			? String(Math.floor(($nextPrayerInfo.secondsLeft % 3600) / 60)).padStart(2, '0')
			: '--'
	);
	let countdownS = $derived(
		$nextPrayerInfo ? String($nextPrayerInfo.secondsLeft % 60).padStart(2, '0') : '--'
	);

	let isCountdownUrgent = $derived($nextPrayerInfo !== null && $nextPrayerInfo.minutesLeft <= 5);
	let isCountdownWarning = $derived(
		$nextPrayerInfo !== null && $nextPrayerInfo.minutesLeft <= 10 && $nextPrayerInfo.minutesLeft > 5
	);

	let hijriToday = $derived(formatHijriDate(now, $languageStore));

	async function refetchPrayerTime({
		latitude,
		longitude
	}: {
		latitude: number;
		longitude: number;
	}) {
		const year = new Date().getFullYear();
		const month = new Date().getMonth() + 1;
		const rawResponse = await fetch(
			`${BASE_URL}/${year}/${month}?method=15&shafaq=general&latitude=${latitude}&longitude=${longitude}`
		);
		const response = (await rawResponse.json()) as PrayerTimeResponse;
		prayerTimes = response?.data || [];
		localStorage.setItem(CONSTANTS.STORAGE_KEY.PRAYER, JSON.stringify(response));
	}

	async function fetchPrayerTime({
		latitude,
		longitude,
		checkCache
	}: {
		latitude: number;
		longitude: number;
		checkCache: boolean;
	}) {
		isLoading = true;
		try {
			const fromStorage = localStorage.getItem(CONSTANTS.STORAGE_KEY.PRAYER);
			if (checkCache && fromStorage) {
				const parsedValue = JSON.parse(fromStorage);
				prayerTimes = parsedValue?.data || [];
				const firstRow = prayerTimes[0];
				if (firstRow) {
					const monthFromData = firstRow.date.gregorian.month.number;
					const currentMonth = new Date().getMonth() + 1;
					if (monthFromData !== currentMonth) {
						await refetchPrayerTime({ latitude, longitude });
					}
				}
			} else {
				await refetchPrayerTime({ latitude, longitude });
			}
		} finally {
			isLoading = false;
		}
	}

	async function getDistrictByLatLong({
		latitude,
		longitude
	}: {
		latitude: number;
		longitude: number;
	}) {
		try {
			const resRaw = await fetch(
				`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
			);
			const res = await resRaw.json();
			return res?.address?.city_district || res?.address?.suburb || res?.address?.city || '';
		} catch {
			return '';
		}
	}

	let getGeolocation = async () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(async (position) => {
				const district = await getDistrictByLatLong({
					latitude: position.coords.latitude || 0,
					longitude: position.coords.longitude || 0
				});

				settingLocation.set({
					lt: position.coords.latitude || 0,
					lg: position.coords.longitude || 0,
					district
				});

				localStorage.setItem(
					CONSTANTS.STORAGE_KEY.LOCATION,
					JSON.stringify({
						lt: position.coords.latitude || 0,
						lg: position.coords.longitude || 0,
						district
					})
				);

				toast.show({
					message: translate('prayerSchedule.locationSuccess'),
					type: 'success'
				});

				await fetchPrayerTime({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					checkCache: false
				});
			});
		}
	};

	let initialized = false;
	$effect(() => {
		const ti = todayIndex;
		if (!initialized && ti >= 0 && prayerTimes.length > 0) {
			initialized = true;
			selectedIndex = ti;
			todayPrayerTimings.set(prayerTimes[ti]?.timings ?? null);
		}
	});

	onMount(() => {
		const clockId = setInterval(() => {
			now = new Date();
		}, 1000);

		setTimeout(async () => {
			if ($settingLocation?.lt && $settingLocation?.lg) {
				await fetchPrayerTime({
					latitude: $settingLocation.lt,
					longitude: $settingLocation.lg,
					checkCache: true
				});
			}
		}, 500);

		return () => clearInterval(clockId);
	});
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_JADWAL_SHOLAT}
		desc={META_DESC_JADWAL_SHOLAT}
		url={`${TITLE_CONSTANTS.PATH}jadwal-sholat/`}
	/>
</svelte:head>

<div class="px-4 mb-3">
	<Breadcrumb items={[{ text: `🏠 ${$t('navigation.home')}`, href: '/' }]} />
</div>

<!-- Hero: Clock + Location + Hijri date -->
<div class="mx-4 mb-4 rounded-2xl bg-secondary overflow-hidden shadow-sm">
	<!-- Location bar -->
	<div class="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-foreground/10">
		<div class="flex items-center gap-1.5 text-sm min-w-0">
			<MarkerIcon />
			{#if $settingLocation?.district}
				<span class="font-medium truncate">{$settingLocation.district}</span>
			{:else}
				<span class="opacity-50">{$t('prayerSchedule.locationUnknown')}</span>
			{/if}
		</div>
		<Button size="sm" variant="outline" onClick={getGeolocation} ariaLabel="Perbarui lokasi">
			<MarkerIcon />
			{$settingLocation ? $t('prayerSchedule.updateLocation') : $t('prayerSchedule.allowLocation')}
		</Button>
	</div>

	<!-- Clock + Hijri -->
	<div class="px-4 py-4 flex items-center justify-between gap-4">
		<div class="flex-1 min-w-0">
			<div class="text-4xl font-bold font-mono tabular-nums leading-none">
				{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}<span
					class="text-2xl opacity-40">:{String(seconds).padStart(2, '0')}</span
				>
			</div>
			<div class="text-sm opacity-60 mt-2">
				{now.toLocaleDateString($languageStore === 'id' ? 'id-ID' : 'en-US', {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				})}
			</div>
			<div class="text-xs opacity-40 mt-0.5">{hijriToday}</div>
		</div>
		<div class="text-5xl opacity-15 select-none shrink-0" aria-hidden="true">🕌</div>
	</div>
</div>

<!-- Next prayer countdown (today only) -->
{#if isViewingToday}
	{#if $nextPrayerInfo}
		<div
			class="mx-4 mb-4 rounded-2xl overflow-hidden transition-colors
				{isCountdownUrgent
				? 'bg-red-500/10 border-2 border-red-500/40'
				: isCountdownWarning
					? 'bg-amber-500/10 border-2 border-amber-500/40'
					: 'bg-secondary/80 border border-foreground/10'}"
		>
			<div class="px-4 pt-3 pb-4">
				<p class="text-[10px] font-semibold uppercase tracking-widest opacity-50 mb-2">
					{$t('prayerSchedule.nextPrayer')}
				</p>
				<div class="flex items-center gap-2 mb-3">
					<span class="text-2xl" aria-hidden="true">{PRAYER_EMOJIS[$nextPrayerInfo.key]}</span>
					<span class="text-lg font-bold">{PRAYER_NAMES[$nextPrayerInfo.key]}</span>
					<span class="ml-auto font-mono text-base opacity-60">{$nextPrayerInfo.time}</span>
				</div>

				<div
					class="flex items-end justify-center gap-1 py-1"
					aria-label="Countdown: {countdownH} jam {countdownM} menit {countdownS} detik"
				>
					<div class="flex flex-col items-center min-w-[56px]">
						<span
							class="text-4xl font-bold font-mono tabular-nums leading-none
								{isCountdownUrgent ? 'text-red-500' : isCountdownWarning ? 'text-amber-500' : ''}"
							>{countdownH}</span
						>
						<span class="text-[9px] uppercase tracking-widest opacity-40 mt-1">jam</span>
					</div>
					<span class="text-3xl font-bold opacity-30 pb-3">:</span>
					<div class="flex flex-col items-center min-w-[56px]">
						<span
							class="text-4xl font-bold font-mono tabular-nums leading-none
								{isCountdownUrgent ? 'text-red-500' : isCountdownWarning ? 'text-amber-500' : ''}"
							>{countdownM}</span
						>
						<span class="text-[9px] uppercase tracking-widest opacity-40 mt-1">menit</span>
					</div>
					<span class="text-3xl font-bold opacity-30 pb-3">:</span>
					<div class="flex flex-col items-center min-w-[56px]">
						<span
							class="text-4xl font-bold font-mono tabular-nums leading-none
								{isCountdownUrgent ? 'text-red-500' : isCountdownWarning ? 'text-amber-500' : ''}"
							>{countdownS}</span
						>
						<span class="text-[9px] uppercase tracking-widest opacity-40 mt-1">detik</span>
					</div>
				</div>
			</div>
		</div>
	{:else if !isLoading}
		<div
			class="mx-4 mb-4 rounded-2xl bg-secondary/60 px-4 py-3 text-center border border-foreground/10"
		>
			<p class="text-sm opacity-60">✅ Semua jadwal sholat hari ini sudah selesai</p>
		</div>
	{/if}
{/if}

<!-- Date strip -->
{#if prayerTimes.length > 0}
	<div class="px-4 mb-3">
		<PrayerDateStrip
			{prayerTimes}
			{selectedIndex}
			onSelect={(i) => {
				selectedIndex = i;
			}}
		/>
	</div>
{/if}

<!-- Selected day header -->
{#if displayedDay}
	<div class="px-4 mb-3 flex items-center justify-between gap-2">
		<div>
			<p class="text-sm font-semibold">
				{displayedDay.date.gregorian.weekday.en.slice(0, 3)},
				{displayedDay.date.gregorian.day}
				{displayedDay.date.gregorian.month.en}
				{displayedDay.date.gregorian.year}
			</p>
			<p class="text-xs opacity-50">
				{displayedDay.date.hijri.day}
				{displayedDay.date.hijri.month.en}
				{displayedDay.date.hijri.year} H
			</p>
		</div>
		{#if isViewingToday}
			<span
				class="text-xs px-2.5 py-1 rounded-full bg-foreground text-primary font-semibold shrink-0"
			>
				Hari Ini
			</span>
		{/if}
	</div>
{/if}

<!-- Prayer schedule -->
<div class="px-4 mb-6">
	{#if $settingLocation === null && !isLoading}
		<div class="rounded-2xl bg-secondary/50 px-6 py-10 text-center">
			<div class="text-5xl mb-4 opacity-60" aria-hidden="true">📍</div>
			<h2 class="font-semibold text-base mb-2">{$t('prayerSchedule.locationUnknown')}</h2>
			<p class="text-sm opacity-60 mb-5">
				Izinkan akses lokasi untuk mendapatkan jadwal sholat sesuai daerahmu
			</p>
			<Button onClick={getGeolocation} color="primary">
				<MarkerIcon />{$t('prayerSchedule.allowLocation')}
			</Button>
		</div>
	{:else if isLoading || (prayerTimes.length === 0 && $settingLocation !== null)}
		<div class="flex flex-col gap-2" aria-label="Memuat jadwal sholat">
			{#each [1, 2, 3, 4, 5] as _}
				<div class="h-16 rounded-xl bg-secondary/50 animate-pulse"></div>
			{/each}
		</div>
	{:else if displayedDay}
		<PrayerTimeList
			timings={displayedDay.timings}
			nextPrayerKey={isViewingToday ? ($nextPrayerInfo?.key ?? null) : null}
			isToday={isViewingToday}
		/>
	{/if}
</div>

<SeoText variant="JADWAL_SHOLAT" />
