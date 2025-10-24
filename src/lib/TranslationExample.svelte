<script lang="ts">
	import { t } from './translations/store';
	import { createNamespaceStore } from './translations/store';

	// Example of using namespace store
	const commonTranslations = createNamespaceStore('common');
	const navigationTranslations = createNamespaceStore('navigation');
</script>

<div class="p-4 space-y-4">
	<h2 class="text-xl font-bold">Translation System Example</h2>

	<!-- Using reactive translation function -->
	<div class="space-y-2">
		<h3 class="font-semibold">Reactive Translations:</h3>
		<p>Loading: {$t('common.loading')}</p>
		<p>Error: {$t('common.error')}</p>
		<p>Search: {$t('common.search')}</p>
		<p>Home: {$t('common.home')}</p>
	</div>

	<!-- Using namespace stores -->
	<div class="space-y-2">
		<h3 class="font-semibold">Navigation Translations:</h3>
		<p>All Surahs: {$t('navigation.allSurah')}</p>
		<p>Juz Amma: {$t('navigation.juzAmma')}</p>
		<p>Prayer Times: {$t('navigation.prayerTime')}</p>
	</div>

	<!-- Using with parameters -->
	<div class="space-y-2">
		<h3 class="font-semibold">With Parameters:</h3>
		<p>Welcome: {$t('common.welcome', { name: 'User' })}</p>
	</div>
</div>
