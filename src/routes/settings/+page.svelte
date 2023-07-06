<script lang="ts">
	import MetaTag from '$lib/MetaTag.svelte';
	import { RECITER_ARRAY } from '$lib/audio';
	import { CONSTANTS, META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';
	import { settingAudio, settingMuqadimah, settingTafsir, settingTranslation } from '../../store';
</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">⚙️ Setelan</h1>
</div>

<article class="px-4 flex flex-col gap-4 divide-y">
	<div class="flex flex-col gap-2">
		<div>
			<input
				type="checkbox"
				id="chk-translation"
				name="chk-translation"
				checked={$settingTranslation}
				on:change={(e) => {
					const checked = e?.target?.checked ?? false;
					localStorage.setItem(CONSTANTS.STORAGE_KEY.TRANSLATION, checked ? 'y' : 'n');

					settingTranslation.update((val) => !val);
				}}
			/>
			<label for="chk-translation">Tampilkan terjemahan</label>
		</div>
		<div>
			<input
				type="checkbox"
				id="chk-tafsir"
				name="chk-tafsir"
				checked={$settingTafsir}
				on:change={(e) => {
					const checked = e?.target?.checked ?? false;
					localStorage.setItem(CONSTANTS.STORAGE_KEY.TAFSIR, checked ? 'y' : 'n');

					settingTafsir.update((val) => !val);
				}}
			/>
			<label for="chk-tafsir">Tampilkan tafsir</label>
		</div>
		<div>
			<input
				type="checkbox"
				id="chk-mukadimah"
				name="chk-mukadimah"
				checked={$settingMuqadimah}
				on:change={(e) => {
					const checked = e?.target?.checked ?? false;
					localStorage.setItem(CONSTANTS.STORAGE_KEY.MUKADIMAH, checked ? 'y' : 'n');

					settingMuqadimah.update((val) => !val);
				}}
			/>
			<label for="chk-mukadimah">Tampilkan mukadimah</label>
		</div>
	</div>

  <div class="pt-4">
		<label for="select-qari" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Pilih Qari</label
		>
		<select
			id="select-qari"
			bind:value={$settingAudio}
			on:change={(e) => {
				const value = e?.target?.value ?? 1;
				localStorage.setItem(CONSTANTS.STORAGE_KEY.AUDIO, value ? value : '1');
			}}
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blueish-700 dark:border-blueish-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blueish-500 dark:focus:border-blueish-500"
		>
			{#each RECITER_ARRAY as item (item.id)}
				<option value={item.id}>{item.name}</option>
			{/each}
		</select>
	</div>
</article>
