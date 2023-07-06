<script lang="ts">
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import { META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';

	let actionIcons = [
		{
			href: '/all-surah/',
			title: '📚 Daftar Semua Surat'
		},
		{
			href: '/surah/1/1/',
			title: '📖 Baca per Ayat'
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
			title: '📿 Wirid'
		},
		{
			href: '/tahlil/',
			title: '🤲 Tahlil'
		},
		{
			href: '/ayat-kursi/',
			title: '🪑 Ayat Kursi'
		}
	];
</script>

<svelte:head>
  <MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}`} />
</svelte:head>

<div class="px-4 flex flex-col gap-2">
	{#each actionIcons as item (item.href)}
		<CardShadow href={item.href} _as="a">
			{item.title}
		</CardShadow>
	{/each}
</div>
