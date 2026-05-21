<script lang="ts">
	import { nextPrayerInfo, isNearPrayer } from '../store/prayerReminder';
	import type { PrayerKey } from './types';

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

	let isUrgent = $derived($nextPrayerInfo !== null && $nextPrayerInfo.minutesLeft <= 5);
</script>

{#if $isNearPrayer && $nextPrayerInfo}
	<div
		role="alert"
		aria-live="polite"
		aria-label="Pengingat waktu sholat"
		class="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
	>
		<div
			class="max-w-[500px] mx-auto overflow-hidden shadow-lg {isUrgent
				? 'bg-red-500 text-white'
				: 'bg-amber-400 text-amber-950'}"
		>
			<div class="marquee-container py-2 text-sm font-semibold">
				<div class="marquee-track whitespace-nowrap">
					{#each [1, 2, 3] as _}
						<span class="px-8">
							{PRAYER_EMOJIS[$nextPrayerInfo.key]}
							Waktu {PRAYER_NAMES[$nextPrayerInfo.key]} dalam
							{$nextPrayerInfo.minutesLeft} menit — Siapkan dirimu untuk sholat
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.marquee-container {
		overflow: hidden;
	}

	.marquee-track {
		display: inline-block;
		animation: prayer-marquee 18s linear infinite;
	}

	@keyframes prayer-marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-33.333%);
		}
	}
</style>
