<script lang="ts">
	import type { AdhkarItem } from '../data/adhkar';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import CheckCircleIcon from '$lib/icons/CheckCircleIcon.svelte';
	import ResetIcon from '$lib/icons/ResetIcon.svelte';

	interface Props {
		item: AdhkarItem;
		count: number;
		soundOn: boolean;
		onIncrement: () => void;
		onReset: () => void;
	}

	let { item, count, soundOn, onIncrement, onReset }: Props = $props();

	const isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);
	const done = $derived(count >= item.count);
	const translation = $derived(isEnglish ? item.translationEn : item.translation);
	const note = $derived(isEnglish ? item.noteEn : item.note);

	let audioBeepSmallRef: HTMLAudioElement | undefined = $state();
	let audioBeepLongRef: HTMLAudioElement | undefined = $state();

	function handleClick() {
		if (done) return;
		onIncrement();

		if (soundOn) {
			if (count + 1 >= item.count) {
				audioBeepLongRef?.play?.();
			} else {
				audioBeepSmallRef?.play?.();
			}
		}

		if (typeof window?.navigator?.vibrate !== 'undefined') {
			if (count + 1 >= item.count) {
				window.navigator.vibrate([400, 100, 400]);
			} else {
				window.navigator.vibrate([60]);
			}
		}
	}
</script>

<div
	class="relative rounded-xl overflow-hidden bg-secondary shadow p-4 flex flex-col gap-3 border-2 transition-colors {done
		? 'border-green-500'
		: 'border-transparent'}"
>
	<div class="flex items-start justify-between gap-3">
		<div class="text-xs opacity-60 font-semibold tabular-nums">
			{item.order}
		</div>
		<div class="flex items-center gap-2">
			<span
				class="text-xs px-2 py-0.5 rounded-full font-semibold {done
					? 'bg-green-100 text-green-700 dark:bg-green-900/60 dark:text-green-200'
					: 'bg-primary text-foreground/80'}"
			>
				{count} / {item.count}
			</span>
			{#if done}
				<CheckCircleIcon size="sm" class="w-5 h-5 text-green-500" />
			{/if}
		</div>
	</div>

	<p dir="rtl" lang="ar" class="font-arabic text-2xl leading-loose text-right">
		{item.arabic}
	</p>

	<p class="text-sm italic opacity-80 leading-relaxed">{item.latin}</p>

	<p class="text-sm opacity-90 leading-relaxed">{translation}</p>

	{#if note}
		<p class="text-xs opacity-60 leading-relaxed italic">{note}</p>
	{/if}

	<p class="text-xs opacity-50">
		{isEnglish ? 'Source' : 'Sumber'}: {item.source}
	</p>

	<div class="flex items-stretch gap-2 mt-1">
		<button
			type="button"
			onclick={handleClick}
			disabled={done}
			aria-label={done
				? isEnglish
					? 'Target reached'
					: 'Target tercapai'
				: isEnglish
					? `Count ${item.order}, currently ${count} of ${item.count}`
					: `Hitung ${item.order}, sekarang ${count} dari ${item.count}`}
			class="flex-1 cursor-pointer rounded-lg px-4 py-3 text-base font-semibold border-2 transition active:scale-[0.98] {done
				? 'bg-green-100 dark:bg-green-950 border-green-500 text-green-700 dark:text-green-300 cursor-not-allowed'
				: 'bg-primary border-foreground/20 hover:border-foreground/40 focus-visible:ring-2 focus-visible:ring-foreground'}"
		>
			{#if done}
				{isEnglish ? '✓ Done' : '✓ Selesai'}
			{:else}
				{isEnglish ? `Tap to count (+1)` : 'Tekan untuk menghitung (+1)'}
			{/if}
		</button>
		<button
			type="button"
			onclick={onReset}
			aria-label={isEnglish ? 'Reset this counter' : 'Reset penghitung ini'}
			class="cursor-pointer rounded-lg px-3 py-2 bg-secondary border-2 border-foreground/20 hover:border-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
		>
			<ResetIcon size="md" />
		</button>
	</div>

	<audio bind:this={audioBeepSmallRef} preload="auto">
		<source src="/sounds/beep-small.mp3" type="audio/mpeg" />
	</audio>
	<audio bind:this={audioBeepLongRef} preload="auto">
		<source src="/sounds/beep-long.mp3" type="audio/mpeg" />
	</audio>
</div>
