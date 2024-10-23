<script lang="ts">
	import { version } from '$app/environment';

	let currentYear = new Date().getFullYear();
</script>

<footer class="text-center p-4">
	<p class="text-sm mt-2">
		<a href="/" class="underline" data-sveltekit-reload>Baca-Quran.id,</a>
		<span>oleh</span>
		<a class="underline" href="https://mazipan.space/" target="_blank" rel="noopener noreferrer">
			Irfan Maulana</a
		>
	</p>
	<small>Copyright © 2018 - {currentYear}</small>
	<p class="text-sm">
		<small>Versi: <span class="bg-secondary rounded px-2 py-1">{version}</span></small>
	</p>
</footer>
