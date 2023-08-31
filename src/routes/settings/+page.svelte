<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import VerseAudioPlayerTrigger from '$lib/VerseAudioPlayerTrigger.svelte';
	import VerseCard from '$lib/VerseCard.svelte';
	import { RECITER_ARRAY } from '$lib/utils/audio';
	import { CONSTANTS, META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';
	import surahData from '../../data/surah-data/108';
	import { settingAudio, settingAutoNext, settingTafsir, settingTranslation } from '../../store';
	let SURAH_SAMPLE = 108;
	let SURAH_SAMPLE_TOTAL_AYAH = 3;
	let SURAH_SAMPLE_ARABIC = 'الكوثر';
	let SURAH_SAMPLE_LATIN = 'Al-Kausar';
</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}settings`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">⚙️ Setelan</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: '🏠 Beranda', href: '/' }]} />
</div>

<article class="px-4 flex flex-col gap-4 divide-y">
	<div class="flex flex-col gap-2">
		<h3 class="text-xl font-bold">💠 Setelan Fitur</h3>
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
			<label for="chk-translation">Selalu tampilkan terjemahan</label>
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
			<label for="chk-tafsir">Tampilkan tombol tafsir</label>
		</div>
		<!-- <div>
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
			<label for="chk-mukadimah">Selalu tampilkan mukadimah</label>
		</div> -->
		<div>
			<b>Preview</b>
			<div>
				<div class="mt-2 flex flex-col gap-1">
					{#each Object.entries(surahData[SURAH_SAMPLE].text) as [numberVerse, verse] (verse)}
						<VerseCard
							verse={`${verse}`}
							{numberVerse}
							translation={surahData[SURAH_SAMPLE]?.translations.id?.text?.[numberVerse] || ''}
							tafsir={surahData[SURAH_SAMPLE]?.tafsir?.id?.kemenag?.text?.[numberVerse] || ''}
							numberSurah={SURAH_SAMPLE.toString()}
							totalAyah={SURAH_SAMPLE_TOTAL_AYAH}
							source="surah"
							surahLatin={SURAH_SAMPLE_LATIN}
							surahArabic={SURAH_SAMPLE_ARABIC}
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="pt-4 flex flex-col gap-2">
		<h3 class="text-xl font-bold">🔈 Setelan Audio</h3>
		<div>
			<input
				type="checkbox"
				id="chk-auto-next"
				name="chk-auto-next"
				checked={$settingAutoNext}
				on:change={(e) => {
					const checked = e?.target?.checked ?? false;
					localStorage.setItem(CONSTANTS.STORAGE_KEY.AUTO_NEXT, checked ? 'y' : 'n');

					settingAutoNext.update((val) => !val);
				}}
			/>
			<label for="chk-auto-next">Otomatis putar ayat berikutnya</label>
		</div>

		<div>
			<label for="select-qari" class="block mb-2 text-sm font-medium">Pilih Qari</label>
			<div class="flex items-center gap-2">
				<select
					id="select-qari"
					bind:value={$settingAudio}
					on:change={(e) => {
						const value = e?.target?.value ?? 1;
						localStorage.setItem(CONSTANTS.STORAGE_KEY.AUDIO, value ? value : '1');
					}}
					class="bg-primary border border-gray-300 text-sm rounded-lg block w-full p-2.5"
				>
					{#each RECITER_ARRAY as item (item.id)}
						<option value={item.id}>{item.name}</option>
					{/each}
				</select>
				<VerseAudioPlayerTrigger
					totalAyah={7}
					numberSurah={`1`}
					numberVerse={`1`}
					source="setting"
				/>
			</div>
		</div>

		<div />
	</div>
</article>
