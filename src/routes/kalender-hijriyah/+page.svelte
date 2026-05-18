<script lang="ts">
	import { onMount } from 'svelte';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import HijriCalendar from '$lib/HijriCalendar.svelte';
	import { TITLE_CONSTANTS } from '$lib/constants';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import { t } from '$lib/translations/store';
	import { ISLAMIC_EVENTS, type IslamicEvent } from '$data/islamic-events';
	import { getHijriDate } from '$lib/utils/hijri';

	const today = new Date();
	const todayHijri = getHijriDate(today);

	let year = $state(todayHijri.year);
	let month = $state(todayHijri.month);

	const isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);

	const eventsThisMonth = $derived(
		ISLAMIC_EVENTS.filter((e) => e.hijriMonth === month)
			.slice()
			.sort((a, b) => a.hijriDay - b.hijriDay)
	);

	function eventName(e: IslamicEvent): string {
		return isEnglish ? e.nameEn : e.nameId;
	}

	function eventTypeLabel(e: IslamicEvent): string {
		const map: Record<IslamicEvent['type'], { id: string; en: string }> = {
			holiday: { id: 'Hari Besar', en: 'Holiday' },
			fasting: { id: 'Puasa', en: 'Fasting' },
			observance: { id: 'Peringatan', en: 'Observance' }
		};
		const v = map[e.type];
		return isEnglish ? v.en : v.id;
	}

	function eventTypeColor(type: IslamicEvent['type']): string {
		if (type === 'holiday') return 'bg-red-500';
		if (type === 'fasting') return 'bg-green-500';
		return 'bg-blue-500';
	}

	function navigate(y: number, m: number) {
		year = y;
		month = m;
		if (typeof window !== 'undefined' && window.history) {
			const url = new URL(window.location.href);
			url.searchParams.set('m', `${y}-${String(m).padStart(2, '0')}`);
			window.history.replaceState({}, '', url.toString());
		}
	}

	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		const m = params.get('m');
		if (m) {
			const match = /^(\d{3,4})-(0?[1-9]|1[0-2])$/.exec(m);
			if (match) {
				year = Number(match[1]);
				month = Number(match[2]);
			}
		}
	});

	const META_TITLE = `Kalender Hijriyah & Hari Besar Islam | ${TITLE_CONSTANTS.TITLE_META}`;
	const META_DESC =
		'Kalender Hijriyah online lengkap dengan tanggal Masehi dan hari besar Islam seperti Idul Fitri, Idul Adha, Maulid Nabi, Isra Mi’raj, dan Ramadan. Gratis, tanpa iklan, tanpa analitik.';
</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}kalender-hijriyah/`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">
		🌙 {isEnglish ? 'Hijri Calendar' : 'Kalender Hijriyah'}
	</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{ text: `🏠 ${$t('navigation.home')}`, href: '/' },
			{ text: $t('navigation.hijriCalendar'), href: '/kalender-hijriyah/' }
		]}
	/>
</div>

<div class="px-4 flex flex-col gap-6">
	<HijriCalendar {year} {month} onNavigate={navigate} />

	<section class="flex flex-col gap-2">
		<h2 class="text-xl font-bold">
			{$t('hijriCalendar.eventsThisMonth')}
		</h2>

		{#if eventsThisMonth.length === 0}
			<p class="text-sm opacity-75">{$t('hijriCalendar.noEvents')}</p>
		{:else}
			<ul class="flex flex-col gap-2">
				{#each eventsThisMonth as e (e.id)}
					<li
						class="flex items-center gap-3 p-3 rounded-md bg-secondary"
						class:ring-2={todayHijri.year === year &&
							todayHijri.month === month &&
							todayHijri.day === e.hijriDay}
						class:ring-blue-500={todayHijri.year === year &&
							todayHijri.month === month &&
							todayHijri.day === e.hijriDay}
					>
						<span class="font-bold text-lg w-8 text-center">{e.hijriDay}</span>
						<div class="flex flex-col flex-1">
							<span class="font-semibold">{eventName(e)}</span>
							<span class="text-xs opacity-75">{eventTypeLabel(e)}</span>
						</div>
						<span
							class={`inline-block w-2 h-2 rounded-full ${eventTypeColor(e.type)}`}
							aria-hidden="true"
						></span>
					</li>
				{/each}
			</ul>
		{/if}
	</section>

	<p class="text-xs opacity-60">
		{isEnglish
			? 'Dates use the Umm al-Qura calendar and may differ by ±1 day from official Indonesian government (rukyat-based) dates, especially for Eid al-Fitr and Eid al-Adha.'
			: 'Tanggal menggunakan kalender Umm al-Qura dan dapat berbeda ±1 hari dari penetapan resmi pemerintah Indonesia (rukyat), khususnya pada Idul Fitri dan Idul Adha.'}
	</p>
</div>
