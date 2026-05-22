<script lang="ts">
	import { onMount } from 'svelte';
	import type { SurahInfoItem } from '../data/surah-info';
	import { pinnedSurah, type PinnedSurahItem } from '../store';
	import GradientCard, { type PatternName } from './ui/GradientCard.svelte';
	import IconButton from './ui/IconButton.svelte';
	import HeartIcon from './icons/HeartIcon.svelte';
	import HeartSolidIcon from './icons/HeartSolidIcon.svelte';
	import { CONSTANTS } from './constants';
	import { toast } from '../store/toast';
	import { MADANIYAH_CODE, MAKKIYAH_MADANIYAH_TEXT } from '../data/makkiyah-madaniyah';
	import { LANGUAGE_OPTIONS, languageStore } from './checkLanguaguage';
	const current = $derived(languageStore);

	interface Props {
		surah: SurahInfoItem;
	}

	let { surah }: Props = $props();

	const CARD_PATTERNS: PatternName[] = ['dots', 'grid', 'diagonal', 'triangles', 'circles'];
	const pattern = $derived(CARD_PATTERNS[surah.index % CARD_PATTERNS.length]);
	let isSurahExistInStorage = $state(false);

	let handlePinSurah = (e: MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();

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
					message:
						$current == LANGUAGE_OPTIONS.ENGLISH.locale
							? `Successfully pinned <b>${surah.latin}</b>!`
							: `Berhasil menyematkan surat <b>${surah.latin}</b>!`,
					type: 'success'
				});
			} else {
				toast.show({
					message:
						$current == LANGUAGE_OPTIONS.ENGLISH.locale
							? `You have pinned the maximum of 6 surahs!`
							: `Kamu telah menyematkan maksimum 6 surat!`,
					type: 'error'
				});
			}
		} else {
			pinnedSurah.update((val) => val.filter((i) => i.i !== thisItem.i));
			isSurahExistInStorage = false;
			localStorage.setItem(CONSTANTS.STORAGE_KEY.PINNED_SURAH, JSON.stringify($pinnedSurah));
			toast.show({
				message:
					$current == LANGUAGE_OPTIONS.ENGLISH.locale
						? `Successfully unpinned <b>${surah.latin}</b>!`
						: `Berhasil menghapus surat <b>${surah.latin}</b> dari penyematan!`,
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

<GradientCard
	gradient={surah.index}
	{pattern}
	as="a"
	href={`/surah/${surah.index}/`}
	rounded="xl"
	padding="md"
>
	<!-- Top row: Arabic numeral + Arabic name + pin -->
	<div class="flex justify-between items-center">
		<span class="text-2xl font-bold text-white/90 leading-none font-arabic">
			{surah.index.toLocaleString('ar-u-nu-arab', { useGrouping: false })}
		</span>
		<div class="flex items-center gap-1.5">
			<span class="text-lg font-arabic text-white/95">{surah.arabic}</span>
			<IconButton
				variant="ghost"
				size="sm"
				onClick={handlePinSurah}
				ariaLabel={isSurahExistInStorage ? 'Unpin surah' : 'Pin surah'}
				class="relative z-10 text-white/80"
			>
				{#if isSurahExistInStorage}
					<HeartSolidIcon class="text-red-300" />
				{:else}
					<HeartIcon />
				{/if}
			</IconButton>
		</div>
	</div>

	<!-- Latin name -->
	<p class="mt-2 text-white font-bold text-base leading-tight">{surah.latin}</p>

	<!-- Translation + ayah count -->
	<p class="text-white/70 text-xs mt-0.5">{surah.translation} • {surah.ayah_count} ayat</p>

	<!-- Revelation badge -->
	{#if surah.revelation}
		<div class="mt-3">
			<a
				class="relative z-10 inline-block"
				href={`/surah-${surah?.revelation === MADANIYAH_CODE ? 'madaniyah' : 'makkiyah'}/`}
				onclick={(e) => e.stopPropagation()}
			>
				<span
					class="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white font-medium backdrop-blur-sm"
				>
					{MAKKIYAH_MADANIYAH_TEXT[
						surah?.revelation?.toString() as keyof typeof MAKKIYAH_MADANIYAH_TEXT
					]}
				</span>
			</a>
		</div>
	{/if}
</GradientCard>
