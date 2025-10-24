<script>
	import { t } from './translations/store';
	import HashtagIcon from './icons/HashtagIcon.svelte';
	import HomeIcon from './icons/HomeIcon.svelte';
	import InformationCircleIcon from './icons/InformationCircleIcon.svelte';
	import ResetIcon from './icons/ResetIcon.svelte';
	import SettingIcon from './icons/SettingIcon.svelte';

</script>

<ul class="mt-2 flex flex-col gap-2">
	<li class="sidebar__item">
		<a
			href="/?source=sidebar"
			data-sveltekit-reload
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<HomeIcon />
			{$t('navigation.home')}
		</a>
	</li>
	<li class="sidebar__item">
		<a
			data-sveltekit-reload
			href="/settings/"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<SettingIcon />
			{$t('navigation.settings')}
		</a>
	</li>
	<li class="sidebar__item">
		<a
			data-sveltekit-reload
			href="/sync/"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<ResetIcon />
			{$t('navigation.sync')}
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
			{$t('navigation.ayatOfTheDay')}
		</a>
	</li>
	<li class="sidebar__item">
		<a
			data-sveltekit-reload
			href="/about/"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<InformationCircleIcon />
			{$t('navigation.about')}
		</a>
	</li>
</ul>
