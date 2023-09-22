<script lang="ts">
	import SearchIcon from './icons/SearchIcon.svelte';

	export let onChange: (e: Event) => void;
	export let searchText = '';
	export let placeholder = 'Cari surat apa?';
</script>

<div class="relative mb-4">
	<input
		class="text-md border-0 rounded-lg focus:ring-2 focus:ring-blue-500 block p-2.5 pl-10 placeholder-foreground-secondary w-full bg-secondary"
		value={searchText}
		on:input={onChange}
		type="search"
		{placeholder}
	/>
	<SearchIcon class="w-6 h-6 absolute left-2 top-2.5 z-10" />
</div>
