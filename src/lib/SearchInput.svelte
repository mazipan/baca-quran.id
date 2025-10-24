<script lang="ts">
	import { LANGUAGE_OPTIONS, languageStore } from './checkLanguaguage';
	import SearchIcon from './icons/SearchIcon.svelte';
const current = $derived(languageStore) ;

	interface Props {
		onChange: (e: Event) => void;
		searchText?: string;
		placeholder?: string;
	}

	let { onChange, searchText = '', placeholder = `${$current==LANGUAGE_OPTIONS.ENGLISH.locale ? 'Find what letter?' : 'Cari surat apa?'}` }: Props = $props();
</script>

<div class="relative mb-4">
	<input
		class="text-md border-0 rounded-lg focus:ring-2 focus:ring-blue-500 block p-2.5 pl-10 placeholder-foreground-secondary w-full bg-secondary"
		value={searchText}
		oninput={onChange}
		type="search"
		{placeholder}
	/>
	<SearchIcon class="w-6 h-6 absolute left-2 top-2.5 z-10" />
</div>
