<script>
	import { LANGUAGE_OPTIONS, languageStore } from './checkLanguaguage';
	import HashtagIcon from './icons/HashtagIcon.svelte';
	import HomeIcon from './icons/HomeIcon.svelte';
	import InformationCircleIcon from './icons/InformationCircleIcon.svelte';
	import ResetIcon from './icons/ResetIcon.svelte';
	import SettingIcon from './icons/SettingIcon.svelte';
		const current = $derived(languageStore) ;

</script>

<ul class="mt-2 flex flex-col gap-2">
	<li class="sidebar__item">
		<a
			href="/?source=sidebar"
			data-sveltekit-reload
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<HomeIcon />
			{$current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'Home' : 'Beranda'}
		</a>
	</li>
	<li class="sidebar__item">
		<a
			data-sveltekit-reload
			href="/settings/"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<SettingIcon />
			{$current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'Settings' : 'Setelan'}
		</a>
	</li>
	<li class="sidebar__item">
		<a
			data-sveltekit-reload
			href="/sync/"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<ResetIcon />
			{$current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'Sync' : 'Sinkron'}
		</a>
	</li>
	<li class="sidebar__item">
		<a
			href="https://twitter.com/BacaQuranID"
			target="_blank"
			rel="noopener"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<HashtagIcon />
			{$current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'AyatOfTheDay' : 'AyatHariIni'}
		</a>
	</li>
	<li class="sidebar__item">
		<a
			data-sveltekit-reload
			href="/about/"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<InformationCircleIcon />
			{$current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'About' : 'Tentang'}
		</a>
	</li>
</ul>
