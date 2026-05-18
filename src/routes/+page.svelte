<script lang="ts">
	import AyahOfTheDay from '$lib/AyahOfTheDay.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import LastReadVerses from '$lib/LastReadVerses.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import PinnedSurah from '$lib/PinnedSurah.svelte';
	import { META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';
	import { t } from '$lib/translations/store';

	let actionIcons = $derived([
		{ href: '/all-surah/', title: `📚 ${$t('navigation.allSurah')}` },
		{ href: '/surah/1/1/', title: `📖 ${$t('navigation.byVerse')}` },
		{ href: '/juz-amma/', title: `📒 ${$t('navigation.juzAmma')}` },
		{ href: '/asmaul-husna/', title: `💯 ${$t('navigation.asmaulHusna')}` },
		{ href: '/daily-doa/', title: `🙏 ${$t('navigation.dailyDoa')}` },
		{ href: '/wirid/', title: `🧎 ${$t('navigation.wirid')}` },
		{ href: '/tasbih/', title: `📿 ${$t('navigation.tasbih')}` },
		{ href: '/tahlil/', title: `🤲 ${$t('navigation.tahlil')}` },
		{ href: '/ayat-kursi/', title: `🪑 ${$t('navigation.ayatKursi')}` },
		{ href: '/jadwal-sholat/', title: `⏰ ${$t('navigation.prayerTime')}` },
		{ href: '/pencatat-ibadah/', title: `⏺️ ${$t('navigation.worshipTracker')}` },
		{ href: '/kalender-hijriyah/', title: `📅 ${$t('navigation.hijriCalendar')}` }
	]);
</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}`} />
</svelte:head>

<div class="px-4 flex flex-col gap-2">
	<PinnedSurah />
	<LastReadVerses />
	<AyahOfTheDay />

	<div class="flex gap-2 mt-2 mb-2">
		<h2 class="text-xl font-bold">
			{$t('home.features')}
		</h2>
	</div>

	<div class="grid grid-cols-2 gap-2">
		{#each actionIcons as item (item.href)}
			<CardShadow href={item.href} _as="a">
				{item.title}
			</CardShadow>
		{/each}
	</div>
</div>
