<script lang="ts">
	import type { PrayerTimeData } from './types';

	interface Props {
		prayerTimes: PrayerTimeData[];
		selectedIndex: number;
		onSelect: (index: number) => void;
	}

	let { prayerTimes, selectedIndex, onSelect }: Props = $props();

	const todayDate = new Date().getDate();

	const WEEKDAY_SHORT: Record<string, string> = {
		Sunday: 'Min',
		Monday: 'Sen',
		Tuesday: 'Sel',
		Wednesday: 'Rab',
		Thursday: 'Kam',
		Friday: 'Jum',
		Saturday: 'Sab'
	};

	let stripEl: HTMLDivElement | null = $state(null);

	$effect(() => {
		if (stripEl && selectedIndex >= 0 && selectedIndex < prayerTimes.length) {
			const btn = stripEl.children[selectedIndex] as HTMLElement | undefined;
			btn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
		}
	});
</script>

<div
	bind:this={stripEl}
	class="flex gap-1.5 overflow-x-auto pb-1"
	style="scrollbar-width: none; -ms-overflow-style: none;"
	role="listbox"
	aria-label="Pilih tanggal"
>
	{#each prayerTimes as day, i}
		{@const dayNum = parseInt(day.date.gregorian.day)}
		{@const weekday = day.date.gregorian.weekday.en}
		{@const isToday = dayNum === todayDate}
		{@const isSelected = i === selectedIndex}
		{@const isFriday = weekday === 'Friday'}

		<button
			type="button"
			role="option"
			aria-selected={isSelected}
			class="flex-shrink-0 flex flex-col items-center gap-0.5 w-11 py-2 rounded-xl transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground
				{isSelected
				? 'bg-foreground text-primary font-bold shadow-md scale-105'
				: isToday
					? 'bg-secondary border-2 border-foreground/30'
					: 'bg-secondary/50 hover:bg-secondary'}"
			onclick={() => onSelect(i)}
		>
			<span class="text-[9px] uppercase tracking-wide {isSelected ? 'opacity-70' : 'opacity-50'}"
				>{WEEKDAY_SHORT[weekday] ?? weekday.slice(0, 3)}</span
			>
			<span
				class="text-base leading-none {isFriday && !isSelected
					? 'text-green-600'
					: isSelected
						? 'text-primary'
						: ''}">{dayNum}</span
			>
			<span
				class="w-1 h-1 rounded-full {isSelected
					? 'bg-primary opacity-70'
					: isToday
						? 'bg-foreground opacity-40'
						: 'opacity-0'}"
			></span>
		</button>
	{/each}
</div>
