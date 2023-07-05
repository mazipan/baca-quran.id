<script lang="ts">
	import { CONSTANTS } from '$lib/constants';
	import { settingAudio, settingMuqadimah, settingTafsir, settingTranslation } from '../../store';
</script>

<div class="flex gap-2 px-2 mb-4">
	<h1 class="text-3xl font-bold">⚙️ Setelan</h1>
</div>

<article class="px-4">
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
		<div>
			<input
				type="checkbox"
				id="chk-audio"
				name="chk-audio"
				checked={$settingAudio}
				on:change={(e) => {
					const checked = e?.target?.checked ?? false;
					localStorage.setItem(CONSTANTS.STORAGE_KEY.AUDIO, checked ? 'y' : 'n');

					settingAudio.update((val) => !val);
				}}
			/>
			<label for="chk-audio">Aktifkan fitur audio</label>
		</div>
	</div>
</article>
