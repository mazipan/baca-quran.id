<script lang="ts">
	import CardShadow from '$lib/CardShadow.svelte';
	import LastReadVerses from '$lib/LastReadVerses.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import PinnedSurah from '$lib/PinnedSurah.svelte';
	import { META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';

	let actionIcons = [
		{
			href: '/all-surah/',
			title: '📚 Semua Surat'
		},
		{
			href: '/surah/1/1/',
			title: '📖 Per Ayat'
		},
		{
			href: '/juz-amma/',
			title: '📒 Juz Amma'
		},
		{
			href: '/asmaul-husna/',
			title: '💯 Asmaul Husna'
		},
		{
			href: '/daily-doa/',
			title: '🙏 Doa Harian'
		},
		{
			href: '/wirid/',
			title: '🧎 Wirid'
		},
		{
			href: '/tasbih/',
			title: '📿 Tasbih'
		},
		{
			href: '/tahlil/',
			title: '🤲 Tahlil'
		},
		{
			href: '/ayat-kursi/',
			title: '🪑 Ayat Kursi'
		},
		{
			href: '/jadwal-sholat/',
			title: '⏰ Jadwal Sholat'
		},
		{
			href: '/pencatat-ibadah/',
			title: '⏺️ Pencatat Ibadah'
		}
	];
</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}`} />
</svelte:head>

<div class="px-4 flex flex-col gap-2">
	<PinnedSurah />
	<LastReadVerses />

	<div class="flex gap-2 mt-2 mb-2">
		<h2 class="text-xl font-bold">🌟 Fitur Baca-Quran.id</h2>
	</div>

	<div class="grid grid-cols-2 gap-2">
		{#each actionIcons as item (item.href)}
			<CardShadow href={item.href} _as="a">
				{item.title}
			</CardShadow>
		{/each}
	</div>
</div>
