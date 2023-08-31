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
	import CardShadow from '$lib/CardShadow.svelte';
	import type { PrayerTimeData, PrayerTimeResponse } from '$lib/types';
	import Clock from '$lib/Clock.svelte';
	import { toast } from '../../store/toast';
	import PrayerTimeCard from '$lib/PrayerTimeCard.svelte';

	const BASE_URL = 'https://api.aladhan.com/v1/calendar';
	let prayerTimes: PrayerTimeData[] = [];

	$: todayPrayerTime = prayerTimes.find((time) => {
		return (
			time.date.gregorian.date ===
			new Date()
				.toLocaleDateString('id-ID', { month: '2-digit', day: '2-digit', year: 'numeric' })
				.replace(new RegExp(/\//g), '-')
		);
	});

	// Source from: https://aladhan.com/prayer-times-api
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

	async function fetchPrayerTime({ latitude, longitude }: { latitude: number; longitude: number }) {
		const fromStorage = localStorage.getItem(CONSTANTS.STORAGE_KEY.PRAYER);
		if (fromStorage) {
			const parsedValue = JSON.parse(fromStorage);
			// check current month is still the same
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
			return res?.address?.city_district || '';
		} catch (error) {
			console.error(`Failed get distric for lat: ${latitude}, long: ${longitude}`);
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
					message: `Berhasil mendapatkan lokasi teranyar!`,
					type: 'success'
				});

				await fetchPrayerTime({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				});
			});
		}
	};

	onMount(async () => {
		setTimeout(async () => {
			if ($settingLocation?.lg && $settingLocation.lg) {
				await fetchPrayerTime({
					latitude: $settingLocation.lt,
					longitude: $settingLocation.lg
				});
			}
		}, 1000);
	});
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_JADWAL_SHOLAT}
		desc={META_DESC_JADWAL_SHOLAT}
		url={`${TITLE_CONSTANTS.PATH}jadwal-sholat/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">⏰ Jadwal Sholat</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: '🏠 Beranda', href: '/' }]} />
</div>

<div class="px-4 flex flex-col gap-2">
	{#if $settingLocation === null}
		<div class="flex flex-wrap gap-2 justify-between items-center">
			<h2 class="text-xl font-bold">Lokasi belum diketahui</h2>
			<div>
				<Button onClick={getGeolocation}>
					<MarkerIcon />Beri akses lokasi?</Button
				>
			</div>
		</div>
	{:else}
		<div class="flex flex-wrap items-center justify-between gap-2 mb-4">
			<div class="flex flex-col gap-2">
				{#if $settingLocation.district}
					<div class="flex gap-2 items-center">
						<MarkerIcon /> <span>{$settingLocation.district}</span>
					</div>
				{/if}
				<small>{$settingLocation.lt}, {$settingLocation.lg}</small>
			</div>

			<Button onClick={getGeolocation}>
				<MarkerIcon />
				Perbarui Lokasi
			</Button>
		</div>
	{/if}

	<div class="mb-4">
		<Clock />
	</div>
	{#if todayPrayerTime}
		<PrayerTimeCard timings={todayPrayerTime.timings} prayerKey="Fajr" />
		<PrayerTimeCard timings={todayPrayerTime.timings} prayerKey="Dhuhr" />
		<PrayerTimeCard timings={todayPrayerTime.timings} prayerKey="Asr" />
		<PrayerTimeCard timings={todayPrayerTime.timings} prayerKey="Maghrib" />
		<PrayerTimeCard timings={todayPrayerTime.timings} prayerKey="Isha" />
	{:else}
		{#each [1, 2, 3, 4, 5] as item}
			<CardShadow>
				<div class="flex justify-between items-center gap-2" data-key={item}>
					<span>&nbsp;</span>
					<span>&nbsp;</span>
				</div>
			</CardShadow>
		{/each}
	{/if}
</div>

<SeoText variant="JADWAL_SHOLAT" />
