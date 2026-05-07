<script lang="ts">
	import { onMount } from 'svelte';
	import { languageStore } from './checkLanguaguage';
	import { getHijriDate, HIJRI_MONTHS_ID, HIJRI_MONTHS_EN } from './utils/hijri';
	import { getEventsForHijriDate, type IslamicEvent } from '$data/islamic-events';
	import { t } from './translations/store';

	let now = $state<Date | null>(null);

	let hijri = $derived(now ? getHijriDate(now) : null);
	let events = $derived<IslamicEvent[]>(hijri ? getEventsForHijriDate(hijri.month, hijri.day) : []);

	let label = $derived.by(() => {
		if (!hijri) return '';
		const lang = $languageStore;
		const months = lang === 'en' ? HIJRI_MONTHS_EN : HIJRI_MONTHS_ID;
		const suffix = lang === 'en' ? 'AH' : 'H';
		return `${hijri.day} ${months[hijri.month - 1]} ${hijri.year} ${suffix}`;
	});

	let tooltip = $derived.by(() => {
		if (events.length === 0) return label;
		const lang = $languageStore;
		const names = events.map((e) => (lang === 'en' ? e.nameEn : e.nameId)).join(', ');
		return `${$t('hijri.todayEvent')}: ${names}`;
	});

	onMount(() => {
		now = new Date();
		const next = new Date();
		next.setHours(24, 0, 5, 0);
		const ms = next.getTime() - Date.now();
		const timer = setTimeout(() => {
			now = new Date();
		}, ms);
		return () => clearTimeout(timer);
	});
</script>

{#if hijri}
	<div
		class="hidden sm:flex items-center gap-1.5 text-sm select-none"
		title={tooltip}
		aria-label={tooltip}
	>
		<span>{label}</span>
		{#if events.length > 0}
			<span
				class="inline-block w-2 h-2 rounded-full bg-blue-500"
				class:bg-red-500={events[0].type === 'holiday'}
				class:bg-green-500={events[0].type === 'fasting'}
				aria-hidden="true"
			></span>
		{/if}
	</div>
{/if}
