<script lang="ts">
	import { languageStore, LANGUAGE_OPTIONS } from './checkLanguaguage';
	import { t } from './translations/store';
	import {
		HIJRI_MONTHS_ID,
		HIJRI_MONTHS_EN,
		getDaysInHijriMonth,
		getHijriDate,
		hijriToGregorian,
		shiftHijriMonth
	} from './utils/hijri';
	import { getEventsForHijriDate, type IslamicEvent } from '$data/islamic-events';
	import ChevronRightIcon from './icons/ChevronRightIcon.svelte';

	interface Props {
		year: number;
		month: number;
		onNavigate: (year: number, month: number) => void;
	}

	let { year, month, onNavigate }: Props = $props();

	type Cell = {
		hijriDay: number;
		gregorian: Date;
		isToday: boolean;
		events: IslamicEvent[];
	};

	const today = new Date();
	const todayHijri = getHijriDate(today);

	let isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);

	let monthName = $derived((isEnglish ? HIJRI_MONTHS_EN : HIJRI_MONTHS_ID)[month - 1]);

	let firstDayGregorian = $derived(hijriToGregorian(year, month, 1));
	let leadingBlanks = $derived(firstDayGregorian.getDay());
	let daysInMonth = $derived(getDaysInHijriMonth(year, month));

	let cells = $derived.by<Cell[]>(() => {
		const list: Cell[] = [];
		const firstMs = firstDayGregorian.getTime();
		for (let d = 1; d <= daysInMonth; d++) {
			const greg = new Date(firstMs + (d - 1) * 86_400_000);
			list.push({
				hijriDay: d,
				gregorian: greg,
				isToday: todayHijri.year === year && todayHijri.month === month && todayHijri.day === d,
				events: getEventsForHijriDate(month, d)
			});
		}
		return list;
	});

	let weekdayLabels = $derived.by<string[]>(() => {
		const locale = isEnglish ? 'en-US' : 'id-ID';
		const fmt = new Intl.DateTimeFormat(locale, { weekday: 'short' });
		// 2024-01-07 was a Sunday — produces locale-correct Sun..Sat order.
		const sunday = new Date(Date.UTC(2024, 0, 7));
		return Array.from({ length: 7 }, (_, i) => {
			const d = new Date(sunday.getTime() + i * 86_400_000);
			return fmt.format(d);
		});
	});

	function eventColor(type: IslamicEvent['type']): string {
		if (type === 'holiday') return 'bg-red-500';
		if (type === 'fasting') return 'bg-green-500';
		return 'bg-blue-500';
	}

	function eventName(e: IslamicEvent): string {
		return isEnglish ? e.nameEn : e.nameId;
	}

	function goPrev() {
		const next = shiftHijriMonth(year, month, -1);
		onNavigate(next.year, next.month);
	}
	function goNext() {
		const next = shiftHijriMonth(year, month, 1);
		onNavigate(next.year, next.month);
	}
	function goToday() {
		onNavigate(todayHijri.year, todayHijri.month);
	}
</script>

<div class="flex flex-col gap-4">
	<div class="flex items-center justify-between gap-2">
		<button
			type="button"
			class="cursor-pointer p-2 rounded-md hover:bg-secondary focus:bg-secondary"
			onclick={goPrev}
			aria-label={$t('hijriCalendar.prevMonth')}
		>
			<span class="inline-block rotate-180"><ChevronRightIcon /></span>
		</button>

		<div class="flex flex-col items-center text-center">
			<span class="text-xl font-bold">{monthName} {year} {isEnglish ? 'AH' : 'H'}</span>
			<button
				type="button"
				class="text-xs underline cursor-pointer text-foreground-secondary hover:text-foreground"
				onclick={goToday}
			>
				{$t('hijriCalendar.today')}
			</button>
		</div>

		<button
			type="button"
			class="cursor-pointer p-2 rounded-md hover:bg-secondary focus:bg-secondary"
			onclick={goNext}
			aria-label={$t('hijriCalendar.nextMonth')}
		>
			<ChevronRightIcon />
		</button>
	</div>

	<div class="grid grid-cols-7 gap-1 text-center text-xs font-semibold opacity-75">
		{#each weekdayLabels as label, i (i)}
			<div class="py-1">{label}</div>
		{/each}
	</div>

	<div class="grid grid-cols-7 gap-1">
		{#each Array(leadingBlanks) as _, i (`b-${i}`)}
			<div></div>
		{/each}
		{#each cells as cell (cell.hijriDay)}
			<div
				class="aspect-square flex flex-col items-center justify-center rounded-md p-1 text-sm bg-secondary"
				class:ring-2={cell.isToday}
				class:ring-blue-500={cell.isToday}
				title={cell.events.length > 0 ? cell.events.map(eventName).join(', ') : undefined}
			>
				<span class="font-bold leading-none">{cell.hijriDay}</span>
				<span class="text-[10px] leading-none mt-0.5 opacity-60">
					{cell.gregorian.getDate()}
				</span>
				{#if cell.events.length > 0}
					<div class="flex gap-0.5 mt-1">
						{#each cell.events as e (e.id)}
							<span
								class={`inline-block w-1.5 h-1.5 rounded-full ${eventColor(e.type)}`}
								aria-hidden="true"
							></span>
						{/each}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
