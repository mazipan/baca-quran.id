<script lang="ts">
	let actionIcons = [
		{
			href: '/all-surah',
			title: 'Daftar Semua Surat'
		},
    {
			href: '/1/1',
			title: 'Baca per Ayat'
		},
    {
			href: '/juz-amma',
			title: 'Juz Amma'
		},
    {
			href: '/asmaul-husna',
			title: 'Asmaul Husna'
		},
    {
			href: '/daily-doa',
			title: 'Doa Harian'
		},
    {
			href: '/wirid',
			title: 'Wirid'
		},
    {
			href: '/tahlil',
			title: 'Tahlil'
		},
	];
</script>

<div class="px-2 flex flex-col gap-2">
	{#each actionIcons as item (item.href)}
		<a href={item.href} class="rounded overflow-hidden shadow-lg p-4 border-2">
      {item.title}
    </a
		>
	{/each}
</div>
