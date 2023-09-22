<script lang="ts">
	import { onMount } from 'svelte';
	import type { SurahInfoItem } from '../data/surah-info';
	import { pinnedSurah, type PinnedSurahItem } from '../store';
	import CardShadow from './CardShadow.svelte';
	import HeartIcon from './icons/HeartIcon.svelte';
	import Button from './ui/Button.svelte';
	import { CONSTANTS } from './constants';
	import HeartSolidIcon from './icons/HeartSolidIcon.svelte';
	import { toast } from '../store/toast';
	import { MADANIYAH_CODE, MAKKIYAH_MADANIYAH_TEXT } from '../data/makkiyah-madaniyah';
	import Badge from './ui/Badge.svelte';

	export let surah: SurahInfoItem;
	let isSurahExistInStorage = false;

	let handlePinSurah = (e: MouseEvent) => {
		e.preventDefault();

		const thisItem: PinnedSurahItem = {
			i: `${surah.index}`,
			l: surah.latin,
			a: surah.arabic
		};

		if (!isSurahExistInStorage) {
			if ($pinnedSurah.length < 6) {
				pinnedSurah.update((val) => [...val, thisItem]);
				isSurahExistInStorage = true;
				localStorage.setItem(CONSTANTS.STORAGE_KEY.PINNED_SURAH, JSON.stringify($pinnedSurah));
				toast.show({
					message: `Berhasil menyematkan surat <b>${surah.latin}</b>!`,
					type: 'success'
				});
			} else {
				toast.show({
					message: `Kamu telah menyematkan maksimum 6 surat!`,
					type: 'error'
				});
			}
		} else {
			pinnedSurah.update((val) => val.filter((i) => i.i !== thisItem.i));
			isSurahExistInStorage = false;
			localStorage.setItem(CONSTANTS.STORAGE_KEY.PINNED_SURAH, JSON.stringify($pinnedSurah));
			toast.show({
				message: `Berhasil menghapus surat <b>${surah.latin}</b> dari penyematan!`,
				type: 'info'
			});
		}
	};

	onMount(() => {
		setTimeout(() => {
			const isInStorage = $pinnedSurah.find((val) => val.i === surah.index.toString());
			isSurahExistInStorage = !!isInStorage;
		}, 500);
	});
</script>

<CardShadow href={`/surah/${surah.index}/`} _as="a">
	<div class="flex justify-between items-start">
		<div class="flex gap-2 items-center">
			<div class="flex flex-col items-start justify-center">
				<span class="font-bold">{surah.latin}</span>
				<small class="text-xs text-foreground-secondary">{surah.translation} • {surah.ayah_count} ayat</small>
			</div>
		</div>

		<div class="flex flex-col items-end justify-center">
			<span class="font-bold text-xl font-arabic">{surah.arabic}</span>
		</div>
	</div>
	<div class="mt-2 flex items-center justify-between">
		<div class="flex items-center gap-2">
			<div class="flex items-center justify-center tracking-tighter border-2 rounded-full h-8 w-8 border-foreground">
				{surah.index.toLocaleString('ar-u-nu-arab', { useGrouping: false })}
			</div>

			{#if surah.revelation}
				<a
					class="z-10"
					href={`/surah-${surah?.revelation === MADANIYAH_CODE ? 'madaniyah' : 'makkiyah'}/`}
				>
					<Badge color={surah?.revelation === MADANIYAH_CODE ? 'green' : 'orange'}>
						{MAKKIYAH_MADANIYAH_TEXT[surah?.revelation?.toString()]}
					</Badge>
				</a>
			{/if}
		</div>
		<Button onClick={handlePinSurah}>
			{#if isSurahExistInStorage}
				<HeartSolidIcon size="sm" class="w-4 h-4 z-10 text-red-500" />
			{:else}
				<HeartIcon size="sm" class="w-4 h-4 z-10" />
			{/if}
		</Button>
	</div>
</CardShadow>
