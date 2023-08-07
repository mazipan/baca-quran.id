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
	import { settingLocation } from '../../store';

	let getGeolocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				console.log(position);
				settingLocation.set({
					lt: position.coords.latitude || 0,
					lg: position.coords.longitude || 0
				});

				localStorage.setItem(
					CONSTANTS.STORAGE_KEY.LOCATION,
					JSON.stringify({
						lt: position.coords.latitude || 0,
						lg: position.coords.longitude || 0
					})
				);
			});
		}
	};
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
          <MarkerIcon />Beri akses lokasi?</Button>
      </div>
		</div>
	{:else}
		<div class="flex flex-col gap-2">
			<h2 class="text-xl font-bold">Lokasi Anda Saat Ini</h2>
			<div class="mt-2 ml-2">
				<p>Longitude: {$settingLocation.lg}</p>
				<p>Latitude: {$settingLocation.lt}</p>
			</div>
		</div>
	{/if}
</div>

<SeoText variant="JADWAL_SHOLAT" />
