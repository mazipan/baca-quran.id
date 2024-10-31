<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import {
		META_DESC_PENCATAT_IBADAH,
		META_TITLE_PENCATAT_IBADAH,
		TITLE_CONSTANTS
	} from '$lib/constants';
	import { formatDate, getAllMonths } from '$lib/utils/date';
	import { logPrayer } from '$store';

	let monthRanges = getAllMonths();

	let selectedMonth = $state(formatDate(new Date().toISOString(), 'MMMM'));

	let selectedLogPrayer = $derived.by(() => {
		const selectedIndex = monthRanges.findIndex((month) => month === selectedMonth) + 1;
		const selectedIndexTrailZero = selectedIndex < 10 ? `0${selectedIndex}` : `${selectedIndex}`;

		const allKeys = Object.keys($logPrayer) || [];
		const selectedKeys = allKeys.filter((key) => {
			const m = key.substring(4, 6);
			return m === selectedIndexTrailZero;
		});

		return selectedKeys;
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
	<h1 class="text-3xl font-bold">⏺️ Rekap Pencatat Ibadah</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: '🏠 Beranda', href: '/' },
			{ text: '⏺️ Pencatat Ibadah', href: '/pencatat-ibadah/' }
		]}
	/>
</div>

<div class="px-4 flex flex-col gap-2">
	<div
		class="flex gap-2 w-full overflow-x-scroll pb-4 pt-2 px-4 mt-2 scroll-smooth snap-x snap-proximity"
	>
		{#each monthRanges as month (month)}
			<button
				class={`snap-center rounded-lg flex items-center justify-center py-2 px-4 border focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${month === selectedMonth ? 'bg-primary font-bold border-blue-500 border-2' : 'bg-secondary'}`}
				onclick={() => {
					selectedMonth = month;
				}}
				id={`month-${month?.toLowerCase()}`}
			>
				{month}
			</button>
		{/each}
	</div>
	<div
		class="mt-4 mb-8 min-h-[300px] p-4 relative overflow-x-auto shadow-md rounded-lg border-2 border-secondary"
	>
		{#if selectedLogPrayer.length > 0}
			<table class="table-stripped">
				<thead>
					<tr>
						<th scope="col">Tanggal</th>
						<th scope="col">Subuh</th>
						<th scope="col">Dzuhur</th>
						<th scope="col">Ashar</th>
						<th scope="col">Maghrib</th>
						<th scope="col">Isya</th>
					</tr>
				</thead>
				<tbody>
					{#each selectedLogPrayer as logKey (logKey)}
						<tr>
							<td>{logKey}</td>
							{#each Object.entries($logPrayer[logKey]) as [k, v]}
								<td data-col={k} class="text-center">{v === 1 ? '✅' : '❌'}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		{:else}
			<div class="m-6 flex flex-col gap-2 justify-center items-center p-4">
				<p class="text-2xl text-center font-bold">
					Belum ada data rekap untuk bulan {selectedMonth}
				</p>
				<img
					src="/images/illustrasion-error.svg"
					alt="The monsters eating your page"
					class="w-[80%] mt-8 mb-8"
				/>
			</div>
		{/if}
	</div>
</div>

<SeoText variant="CATAT_IBADAH" />
