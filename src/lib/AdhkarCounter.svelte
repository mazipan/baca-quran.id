<script lang="ts">
	import type { AdhkarItem } from '../data/adhkar';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import CheckCircleIcon from '$lib/icons/CheckCircleIcon.svelte';
	import ResetIcon from '$lib/icons/ResetIcon.svelte';

	interface Props {
		item: AdhkarItem;
		count: number;
		soundOn: boolean;
		playMode?: boolean;
		isLast?: boolean;
		onIncrement: () => void;
		onReset: () => void;
		onNext?: () => void;
	}

	let {
		item,
		count,
		soundOn,
		playMode = false,
		isLast = false,
		onIncrement,
		onReset,
		onNext
	}: Props = $props();

	const isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);
	const done = $derived(count >= item.count);
	const remaining = $derived(Math.max(0, item.count - count));
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
	{#if playMode}
		<!-- Play mode header: large order badge + count + reset -->
		<div class="flex items-center justify-between gap-3">
			<div class="flex items-center gap-3">
				<div
					class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md flex-shrink-0 transition-colors {done
						? 'bg-green-500 dark:bg-green-600 text-white'
						: 'bg-blue-500 dark:bg-blue-600 text-white'}"
				>
					{item.order}
				</div>
				<span
					class="text-sm px-2.5 py-1 rounded-full font-semibold tabular-nums {done
						? 'bg-green-100 text-green-700 dark:bg-green-900/60 dark:text-green-200'
						: 'bg-primary text-foreground/80'}"
				>
					{count} / {item.count}
				</span>
				{#if done}
					<CheckCircleIcon size="sm" class="text-green-500" />
				{/if}
			</div>
			<button
				type="button"
				onclick={onReset}
				aria-label={isEnglish ? 'Reset this counter' : 'Reset penghitung ini'}
				class="cursor-pointer rounded-lg p-1.5 bg-primary border border-foreground/10 hover:border-foreground/30 opacity-50 hover:opacity-100 transition"
			>
				<ResetIcon size="sm" />
			</button>
		</div>
	{:else}
		<!-- All-mode header: compact order + count -->
		<div class="flex items-start justify-between gap-3">
			<div
				class="w-7 h-7 rounded-full bg-primary border-2 border-foreground/20 flex items-center justify-center text-xs font-bold opacity-80 flex-shrink-0"
			>
				{item.order}
			</div>
			<div class="flex items-center gap-2">
				<span
					class="text-xs px-2 py-0.5 rounded-full font-semibold tabular-nums {done
						? 'bg-green-100 text-green-700 dark:bg-green-900/60 dark:text-green-200'
						: 'bg-primary text-foreground/80'}"
				>
					{count} / {item.count}
				</span>
				{#if done}
					<CheckCircleIcon size="sm" class="text-green-500" />
				{/if}
			</div>
		</div>
	{/if}

	<p
		dir="rtl"
		lang="ar"
		class="font-arabic leading-loose text-right {playMode ? 'text-3xl' : 'text-2xl'}"
	>
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

	{#if playMode}
		<!-- Play mode action: full-width tap / next button -->
		<div class="mt-1">
			{#if done && !isLast}
				<button
					type="button"
					onclick={onNext}
					class="w-full cursor-pointer rounded-xl px-4 py-4 text-lg font-bold border-2 transition active:scale-[0.98] bg-blue-500 dark:bg-blue-600 text-white border-blue-600 dark:border-blue-500 hover:bg-blue-600 dark:hover:bg-blue-700 shadow-md"
				>
					{isEnglish ? 'Next Dhikr →' : 'Dzikir Berikutnya →'}
				</button>
			{:else if done && isLast}
				<div
					class="w-full rounded-xl px-4 py-4 text-lg font-bold border-2 bg-green-100 dark:bg-green-950 border-green-500 text-green-700 dark:text-green-300 text-center"
				>
					✓ {isEnglish ? 'All Complete!' : 'Semua Selesai!'}
				</div>
			{:else}
				<button
					type="button"
					onclick={handleClick}
					aria-label={isEnglish
						? `Count ${item.order}, ${count} of ${item.count}`
						: `Hitung ${item.order}, ${count} dari ${item.count}`}
					class="w-full cursor-pointer rounded-xl px-4 py-4 text-lg font-bold border-2 transition active:scale-[0.98] bg-primary border-foreground/20 hover:border-foreground/40 focus-visible:ring-2 focus-visible:ring-foreground"
				>
					{isEnglish ? 'Tap (+1)' : 'Tekan (+1)'}
					{#if item.count > 1}
						<span class="text-sm font-normal opacity-60 ml-1"
							>({remaining}
							{isEnglish ? 'more' : 'lagi'})</span
						>
					{/if}
				</button>
			{/if}
		</div>
	{:else}
		<!-- All-mode action: tap + reset buttons -->
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
	{/if}

	<audio bind:this={audioBeepSmallRef} preload="auto">
		<source src="/sounds/beep-small.mp3" type="audio/mpeg" />
	</audio>
	<audio bind:this={audioBeepLongRef} preload="auto">
		<source src="/sounds/beep-long.mp3" type="audio/mpeg" />
	</audio>
</div>
