<script lang="ts">
	import CardShadow from './CardShadow.svelte';
	import type { PrayerKey, PrayerTimings } from './types';
	import { onMount } from 'svelte';
	import { getDayjs, getDayjsFormatted, getMinuteDuration } from '$lib/utils/date';

	import { activeTheme } from '../store';

	interface Props {
		timings?: PrayerTimings | null;
		prayerKey: PrayerKey;
		prayerTitle: string;
	}

	let { timings = null, prayerKey, prayerTitle = '' }: Props = $props();
	let isPast: boolean = $state(false);
	let durationText: string = $state('');

	onMount(async () => {
		const now = getDayjs();
		const timeStr = `${timings?.[prayerKey] || ''}`.substring(0, 5);

		const prayerTime = getDayjsFormatted(
			`${now.format('YYYY-MM-DD')} ${timeStr}`,
			'YYYY-MM-DD HH:mm'
		);

		const diffTime = prayerTime.diff(now, 'minute');
		isPast = diffTime < 0;
		durationText = getMinuteDuration(diffTime);
	});
</script>

{#if timings}
	<CardShadow class={`${isPast ? ($activeTheme === 'light' ? '!bg-gray-400' : 'grayscale') : ''}`}>
		<div class="flex justify-between gap-2 relative">
			<div>
				<p class={`${isPast ? 'line-through' : ''}`}>{prayerTitle}</p>
			</div>
			<div>
				<p class={`${isPast ? 'line-through' : ''}`}>{timings[prayerKey]}</p>
				{#if !isPast}
					<small>{durationText}</small>
				{/if}
			</div>
		</div>
	</CardShadow>
{/if}
