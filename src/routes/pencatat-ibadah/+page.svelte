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
	import { range } from '$lib/utils/array';
	import type { PrayerKey } from '$lib/types';
	import CardShadow from '$lib/CardShadow.svelte';
	import { logPrayer, type LogPrayerItemKey, type LogPrayerItemValue, type LogPrayerValue } from '$store';

	let dayInMonth = getDayInMonth(new Date().toISOString());
	let dayRanges = range(1, dayInMonth);

	let selectedDate = $state(getCurrentDate());
	let selectedDateFormatted = $derived.by(() => {
		const nDate = new Date();
		nDate.setDate(selectedDate);
		const res = formatDate(nDate.toISOString(), 'DD MMMM YYYY');
		return res;
	});
  let selectedYYYYMMDD = $derived.by(() => {
		const nDate = new Date();
		nDate.setDate(selectedDate);
		const res = formatDate(nDate.toISOString(), 'YYYYMMDD');
		return res;
	});

	const PRAYER_LIST: Array<{
		key: PrayerKey;
		title: string;
		id: LogPrayerItemKey;
	}> = [
		{
			key: 'Fajr',
			title: 'Subuh',
			id: '1'
		},
		{
			key: 'Dhuhr',
			title: 'Dzuhur',
			id: '2'
		},
		{
			key: 'Asr',
			title: 'Ashar',
			id: '3'
		},
		{
			key: 'Maghrib',
			title: 'Maghrib',
			id: '4'
		},
		{
			key: 'Isha',
			title: 'Isya',
			id: '5'
		}
	];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let handleCheckUncheck = (e) => {
    const id = e.target.value.toString() as LogPrayerItemKey;
    const isChecked = e.target.checked as boolean;

    logPrayer.update((val) => {
      const newItem = {
        [id]: isChecked ? 1 : 0 as LogPrayerItemValue
      } as LogPrayerValue;

      if (val) {
        if (val[selectedYYYYMMDD]) {
          val[selectedYYYYMMDD] = {
            ...val[selectedYYYYMMDD],
            ...newItem,
          }
        } else {
          val[selectedYYYYMMDD] = newItem;
        }
      } else {
        val = {
          [selectedYYYYMMDD]: newItem
        };
      }

      localStorage.setItem(CONSTANTS.STORAGE_KEY.LOG_PRAYER, JSON.stringify(val));
      return val
    });
  }

</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_PENCATAT_IBADAH}
		desc={META_DESC_PENCATAT_IBADAH}
		url={`${TITLE_CONSTANTS.PATH}pencatat-ibadah/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">⏺️ Pencatat Ibadah</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: '🏠 Beranda', href: '/' }]} />
</div>

<div class="px-4 flex flex-col gap-2">
	<p class="text-lg">Catatan ibadah pada {selectedDateFormatted}</p>
	<div class="flex gap-2 w-full overflow-x-auto pb-4 pt-2 px-4 mt-2">
		{#each dayRanges as day (day)}
			<button
				class={`h-12 w-12 rounded flex items-center justify-center p-4 border focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${day === selectedDate ? 'bg-primary font-bold border-blue-500' : 'bg-secondary'}`}
				onclick={() => {
					selectedDate = day;
				}}
			>
				{day}
			</button>
		{/each}
	</div>
	<div class="grid gap-2">
		{#each PRAYER_LIST as prayer (prayer.key)}
			<CardShadow class="flex items-center">
				<input
					id={`chk-${prayer.id}`}
					type="checkbox"
					value={prayer.id}
					name={prayer.title}
          onchange={handleCheckUncheck}
          checked={$logPrayer && $logPrayer?.[selectedYYYYMMDD] ? $logPrayer[selectedYYYYMMDD]?.[`${prayer.id}` as LogPrayerItemKey] === 1 : false}
					class="peer w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
				/>
				<label for={`chk-${prayer.id}`} class="w-full ms-2 text-sm font-medium text-foreground peer-checked:line-through">
					{prayer.title}
				</label>
			</CardShadow>
		{/each}
	</div>
</div>

<SeoText variant="CATAT_IBADAH" />
