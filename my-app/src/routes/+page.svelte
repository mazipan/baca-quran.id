<script lang="ts">
	let actionIcons = [
		{
			href: '/all-surah',
			title: 'Daftar Semua Surat'
		},
    {
			href: '/1/1',
			title: 'Baca per Ayat'
		}
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
