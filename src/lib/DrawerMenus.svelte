<script>
	import CodeIcon from './icons/CodeIcon.svelte';
import GalleryIcon from './icons/GalleryIcon.svelte';
	import HeartIcon from './icons/HeartIcon.svelte';
	import HomeIcon from './icons/HomeIcon.svelte';
	import InformationCircleIcon from './icons/InformationCircleIcon.svelte';
	import NewspaperIcon from './icons/NewspaperIcon.svelte';
	import SettingIcon from './icons/SettingIcon.svelte';
	import ShieldCheckIcon from './icons/ShieldCheckIcon.svelte';
</script>

<ul class="mt-2 flex flex-col gap-2">
	<li class="sidebar__item">
		<a
			href="/?source=sidebar"
			data-sveltekit-reload
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<HomeIcon />
			Beranda
		</a>
	</li>
	<li class="sidebar__item">
		<a
			data-sveltekit-reload
			href="/settings/"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<SettingIcon />
			Setelan
		</a>
	</li>
	<li class="sidebar__item">
		<a
			href="https://www.baca-quran.id/tulisan"
			target="_blank"
			rel="noopener noreferrer"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<NewspaperIcon />
			Blog
		</a>
	</li>
	<li class="sidebar__item">
		<a
			href="https://www.baca-quran.id/stories"
			target="_blank"
			rel="noopener noreferrer"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<GalleryIcon />
			Stories
		</a>
	</li>
	<li class="sidebar__item">
		<a
			href="https://mazipan.space/support"
			target="_blank"
			rel="noopener noreferrer"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<HeartIcon />
			Donasi
		</a>
	</li>
	<li class="sidebar__item">
		<a
			data-sveltekit-reload
			href="/about/"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<InformationCircleIcon />
			Tentang
		</a>
	</li>
	<li class="sidebar__item">
		<a
			data-sveltekit-reload
			href="/kebijakan-privasi/"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<ShieldCheckIcon />
			Kebijakan Privacy
		</a>
	</li>
	<li class="sidebar__item">
		<a
			href="https://github.com/mazipan/baca-quran.id"
			target="_blank"
			rel="noopener noreferrer"
			class="flex gap-2 items-center p-2 rounded-md hover:bg-primary focus:bg-primary"
		>
			<CodeIcon />
			Kode sumber
		</a>
	</li>
</ul>
