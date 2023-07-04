<script>
	import ThemeSwicther from './ThemeSwicther.svelte';
</script>

<header class="flex justify-between items-center py-4 px-2">
	<button class="cursor-pointer p-2 rounded-md">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="w-6 h-6 cursor-pointer"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h8m-8 6h16"
			/>
		</svg>
	</button>

	<a href="/" data-sveltekit-reload>
		<h1 class="font-bold text-2xl">Baca-Quran.id</h1>
	</a>

	<div class="flex gap-2">
		<button class="cursor-pointer p-2 border-2 rounded-md">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width={1.5}
				stroke="currentColor"
				class="w-6 h-6 cursor-pointer"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
				/>
			</svg>
		</button>
		<ThemeSwicther />
	</div>
</header>
