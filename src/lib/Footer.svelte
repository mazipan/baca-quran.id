<script lang="ts">
	import { version } from '$app/environment';
	import { t } from './translations/store';

	let currentYear = new Date().getFullYear();
</script>

<footer class="text-center p-4">
	<p class="text-sm mt-2">
		<a href="/" class="underline" data-sveltekit-reload>Baca-Quran.id,</a>
		<span>
			{$t('ui.by')}
		</span>
		<a class="underline" href="https://mazipan.space/" target="_blank" rel="noopener noreferrer">
			Irfan Maulana
		</a>
	</p>
	<p class="text-sm">
		<a
			class="underline"
			href="https://tools.mazipan.space"
			target="_blank"
			rel="noopener noreferrer"
		>
			{$t('ui.webUtilities')}
		</a>
	</p>
	<small>Copyright © 2018 - {currentYear}</small>
	<p class="text-sm">
		<small>
			{$t('ui.version')}
			<span class="bg-secondary rounded px-2 py-1">{version}</span>
		</small>
	</p>
</footer>
