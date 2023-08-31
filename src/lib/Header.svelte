<script lang="ts">
	import ThemeSwicther from './ThemeSwicther.svelte';
	import ResetIcon from './icons/ResetIcon.svelte';

	export let onToggleDrawer: () => void;
</script>

<header class="flex justify-between items-center py-4 px-2">
	<button
		class="cursor-pointer p-2 rounded-md hover:bg-secondary focus:bg-secondary"
		on:click={onToggleDrawer}
	>
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
		<a class="cursor-pointer p-2 rounded-md hover:bg-secondary focus:bg-secondary" href="/sync">
			<ResetIcon />
		</a>
		<ThemeSwicther />
	</div>
</header>
