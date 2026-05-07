<script lang="ts">
	import AyahOfTheDay from '$lib/AyahOfTheDay.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import LastReadVerses from '$lib/LastReadVerses.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import PinnedSurah from '$lib/PinnedSurah.svelte';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import { META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';
	const current = $derived(languageStore);

	let actionIcons = [
		{
			href: '/all-surah/',
			title: $current == LANGUAGE_OPTIONS.ENGLISH.locale ? '📚 All Surahs' : '📚 Semua Surat'
		},
		{
			href: '/surah/1/1/',
			title: $current == LANGUAGE_OPTIONS.ENGLISH.locale ? '📖 By Verse' : '📖 Per Ayat'
		},
		{
			href: '/juz-amma/',
			title: $current == LANGUAGE_OPTIONS.ENGLISH.locale ? '📒 Juz Amma' : '📒 Juz Amma'
		},
		{
			href: '/asmaul-husna/',
			title: $current == LANGUAGE_OPTIONS.ENGLISH.locale ? '💯 Asmaul Husna' : '💯 Asmaul Husna'
		},
		{
			href: '/daily-doa/',
			title: $current == LANGUAGE_OPTIONS.ENGLISH.locale ? '🙏 Daily Duas' : '🙏 Doa Harian'
		},
		{
			href: '/wirid/',
			title: $current == LANGUAGE_OPTIONS.ENGLISH.locale ? '🧎 Dhikr' : '🧎 Wirid'
		},
		{
			href: '/tasbih/',
			title: $current == LANGUAGE_OPTIONS.ENGLISH.locale ? '📿 Tasbih' : '📿 Tasbih'
		},
		{
			href: '/tahlil/',
			title: $current == LANGUAGE_OPTIONS.ENGLISH.locale ? '🤲 Tahlil' : '🤲 Tahlil'
		},
		{
			href: '/ayat-kursi/',
			title: $current == LANGUAGE_OPTIONS.ENGLISH.locale ? '🪑 Ayat al-Kursi' : '🪑 Ayat Kursi'
		},
		{
			href: '/jadwal-sholat/',
			title: $current == LANGUAGE_OPTIONS.ENGLISH.locale ? '⏰ Prayer Times' : '⏰ Jadwal Sholat'
		},
		{
			href: '/pencatat-ibadah/',
			title:
				$current == LANGUAGE_OPTIONS.ENGLISH.locale ? '⏺️ Worship Tracker' : '⏺️ Pencatat Ibadah'
		}
	];
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
			{$current == LANGUAGE_OPTIONS.ENGLISH.locale
				? '🌟 Baca-Quran.id Features'
				: '🌟 Fitur Baca-Quran.id'}
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
