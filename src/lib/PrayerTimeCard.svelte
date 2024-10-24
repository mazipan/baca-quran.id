<script lang="ts">
	import CardShadow from './CardShadow.svelte';
	import type { PrayerKey, PrayerTimings } from './types';
  import dayjs from 'dayjs';
  import relativeTime from "dayjs/plugin/relativeTime";
  import duration from "dayjs/plugin/duration";
  import 'dayjs/locale/id'
	import { onMount } from 'svelte';

  dayjs.locale('id')
  dayjs.extend(relativeTime);
  dayjs.extend(duration);
	interface Props {
		timings?: PrayerTimings | null;
		prayerKey: PrayerKey;
    prayerTitle: string
	}

	let { timings = null, prayerKey, prayerTitle = '' }: Props = $props();
	let isPast: boolean = $state(false);
	let durationText: string = $state('');

	onMount(async () => {
    const now = dayjs();
    const timeStr = `${timings?.[prayerKey] || ''}`.substring(0, 5);

    const prayerTime = dayjs(`${now.format('YYYY-MM-DD')} ${timeStr}`, 'YYYY-MM-DD HH:mm');

    const diffTime = prayerTime.diff(now, 'minute');
    isPast = diffTime < 0;
    durationText = dayjs.duration(diffTime, "minutes").humanize(true);
	});

</script>

{#if timings}
	<CardShadow class={`${isPast ? 'grayscale' : ''}`}>
		<div class="flex justify-between gap-2 relative">
      <div>
        <p>{prayerTitle}</p>
      </div>
      <div>
        <p>{timings[prayerKey]}</p>
        {#if !isPast}
          <small>{durationText}</small>
        {/if}
      </div>
		</div>
	</CardShadow>
{/if}
