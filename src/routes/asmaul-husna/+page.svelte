<script lang="ts">
	import { onDestroy } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { META_DESC_ASMAUL_HUSNA, META_TITLE_ASMAUL_HUSNA, TITLE_CONSTANTS } from '$lib/constants';
	import IconButton from '$lib/ui/IconButton.svelte';
	import PlayIcon from '$lib/icons/PlayIcon.svelte';
	import PauseIcon from '$lib/icons/PauseIcon.svelte';
	import ArrowLeftIcon from '$lib/icons/ArrowLeftIcon.svelte';
	import ArrowRightIcon from '$lib/icons/ArrowRightIcon.svelte';
	import ResetIcon from '$lib/icons/ResetIcon.svelte';
	import asmaulHusna from '../../data/asmaul-husna';
	import { t } from '$lib/translations/store';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';

	type ViewMode = 'grid' | 'compact' | 'playable';

	let viewMode = $state<ViewMode>('grid');
	let currentIndex = $state(0);
	let isPlaying = $state(false);
	let autoPlaySpeed = $state(5);
	let jumpInput = $state('');
	let timer: ReturnType<typeof setInterval> | null = null;
	let flyDir = $state(1); // 1 = forward, -1 = backward

	const CARD_GRADIENTS = [
		'from-emerald-400 to-teal-600',
		'from-blue-400 to-indigo-600',
		'from-violet-400 to-purple-600',
		'from-rose-400 to-pink-600',
		'from-amber-400 to-orange-500',
		'from-cyan-400 to-sky-600',
		'from-lime-500 to-emerald-600',
		'from-fuchsia-400 to-violet-600',
		'from-sky-400 to-cyan-600',
		'from-pink-400 to-rose-600'
	];

	function getGradient(i: number) {
		return CARD_GRADIENTS[i % CARD_GRADIENTS.length];
	}

	function startTimer() {
		if (timer) clearInterval(timer);
		const speed = autoPlaySpeed;
		timer = setInterval(() => {
			flyDir = 1;
			currentIndex = (currentIndex + 1) % asmaulHusna.length;
		}, speed * 1000);
	}

	function stopTimer() {
		if (timer) {
			clearInterval(timer);
			timer = null;
		}
	}

	function togglePlay() {
		isPlaying = !isPlaying;
		if (isPlaying) startTimer();
		else stopTimer();
	}

	function goNext() {
		flyDir = 1;
		currentIndex = (currentIndex + 1) % asmaulHusna.length;
		if (isPlaying) startTimer();
	}

	function goPrev() {
		flyDir = -1;
		currentIndex = (currentIndex - 1 + asmaulHusna.length) % asmaulHusna.length;
		if (isPlaying) startTimer();
	}

	function jumpTo() {
		const n = parseInt(jumpInput);
		if (n >= 1 && n <= 99) {
			flyDir = n - 1 > currentIndex ? 1 : -1;
			currentIndex = n - 1;
			if (isPlaying) startTimer();
		}
		jumpInput = '';
	}

	function setSpeed(s: number) {
		autoPlaySpeed = s;
		if (isPlaying) startTimer();
	}

	function openInPlayable(i: number) {
		flyDir = 1;
		currentIndex = i;
		viewMode = 'playable';
		stopTimer();
		isPlaying = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (viewMode !== 'playable') return;
		const tag = (e.target as HTMLElement).tagName;
		if (tag === 'INPUT') return;
		if (e.key === ' ') {
			e.preventDefault();
			togglePlay();
		}
		if (e.key === 'ArrowRight') goNext();
		if (e.key === 'ArrowLeft') goPrev();
	}

	onDestroy(stopTimer);

	const isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);
	const currentItem = $derived(asmaulHusna[currentIndex]);
	const progress = $derived(((currentIndex + 1) / asmaulHusna.length) * 100);
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
	<MetaTag
		title={META_TITLE_ASMAUL_HUSNA}
		desc={META_DESC_ASMAUL_HUSNA}
		url={`${TITLE_CONSTANTS.PATH}asmaul-husna/`}
	/>
</svelte:head>

<div class="px-4 mb-3">
	<div class="flex gap-2 mb-2">
		<h1 class="text-3xl font-bold">💯 Asmaul Husna</h1>
	</div>
	<Breadcrumb items={[{ text: `🏠 ${$t('navigation.home')}`, href: '/' }]} />
</div>

<!-- View Mode Switcher -->
<div class="px-4 mb-4 flex items-center gap-3">
	<div class="flex gap-0.5 bg-secondary p-1 rounded-xl">
		<button
			onclick={() => (viewMode = 'grid')}
			class={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
				viewMode === 'grid'
					? 'bg-primary text-foreground shadow'
					: 'text-foreground-secondary hover:text-foreground'
			}`}
		>
			<svg
				class="w-4 h-4"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect
					x="3"
					y="14"
					width="7"
					height="7"
				/><rect x="14" y="14" width="7" height="7" />
			</svg>
			Grid
		</button>
		<button
			onclick={() => (viewMode = 'compact')}
			class={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
				viewMode === 'compact'
					? 'bg-primary text-foreground shadow'
					: 'text-foreground-secondary hover:text-foreground'
			}`}
		>
			<svg
				class="w-4 h-4"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line
					x1="8"
					y1="18"
					x2="21"
					y2="18"
				/><circle cx="3" cy="6" r="1" fill="currentColor" /><circle
					cx="3"
					cy="12"
					r="1"
					fill="currentColor"
				/><circle cx="3" cy="18" r="1" fill="currentColor" />
			</svg>
			Compact
		</button>
		<button
			onclick={() => (viewMode = 'playable')}
			class={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${
				viewMode === 'playable'
					? 'bg-primary text-foreground shadow'
					: 'text-foreground-secondary hover:text-foreground'
			}`}
		>
			<PlayIcon size="sm" />
			Play
		</button>
	</div>
	<span class="text-xs text-foreground-secondary">99 names</span>
</div>

<!-- ──────────────── GRID MODE ──────────────── -->
{#if viewMode === 'grid'}
	<div class="px-4 grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
		{#each asmaulHusna as item, i (item.latin)}
			<button
				onclick={() => openInPlayable(i)}
				class={`relative rounded-2xl bg-gradient-to-br ${getGradient(i)} p-4 shadow-lg overflow-hidden text-left cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
			>
				<!-- Decorative circles -->
				<div
					class="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-white/10 pointer-events-none"
				></div>
				<div
					class="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-white/10 pointer-events-none"
				></div>

				<!-- Number badge -->
				<div class="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center mb-3">
					<span class="text-white text-[10px] font-bold leading-none">{i + 1}</span>
				</div>

				<!-- Arabic text -->
				<div class="mb-2 text-right">
					<span class="font-arabic text-2xl text-white leading-relaxed">{item.arabic}</span>
				</div>

				<!-- Latin name -->
				<div class="text-white font-semibold text-xs leading-tight">{item.latin}</div>

				<!-- Translation -->
				<div class="mt-1 text-white/75 text-[11px] leading-tight truncate">
					{isEnglish ? item.translation_en : item.translation_id}
				</div>
			</button>
		{/each}
	</div>

	<!-- ──────────────── COMPACT MODE ──────────────── -->
{:else if viewMode === 'compact'}
	<div class="px-4 mb-8">
		<div class="rounded-2xl overflow-hidden shadow bg-secondary divide-y divide-foreground/5">
			{#each asmaulHusna as item, i (item.latin)}
				<button
					onclick={() => openInPlayable(i)}
					class="w-full py-3 px-4 flex items-center gap-3 hover:bg-primary/50 transition-colors text-left"
				>
					<div
						class={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${getGradient(i)} flex items-center justify-center shadow-sm`}
					>
						<span class="text-white text-[10px] font-bold">{i + 1}</span>
					</div>
					<div class="flex-1 min-w-0">
						<div class="font-semibold text-sm text-foreground">{item.latin}</div>
						<div class="text-xs text-foreground-secondary truncate">
							{isEnglish ? item.translation_en : item.translation_id}
						</div>
					</div>
					<span class="font-arabic text-xl flex-shrink-0 text-foreground">{item.arabic}</span>
				</button>
			{/each}
		</div>
	</div>

	<!-- ──────────────── PLAYABLE MODE ──────────────── -->
{:else if viewMode === 'playable'}
	<div class="px-4 flex flex-col items-center gap-5 mb-8">
		<!-- Progress bar -->
		<div class="w-full max-w-sm">
			<div class="flex justify-between text-xs text-foreground-secondary mb-1.5">
				<span class="font-medium">{currentIndex + 1} / {asmaulHusna.length}</span>
				<span>{Math.round(progress)}% selesai</span>
			</div>
			<div class="h-2 bg-secondary rounded-full overflow-hidden">
				<div
					class={`h-full bg-gradient-to-r ${getGradient(currentIndex)} rounded-full transition-all duration-500`}
					style="width: {progress}%"
				></div>
			</div>
		</div>

		<!-- Quick-jump dots (every 9 names) -->
		<div class="flex gap-2 items-center">
			{#each Array.from({ length: 11 }, (_, k) => k * 9) as dotIndex}
				{@const di = Math.min(dotIndex, 98)}
				<button
					onclick={() => openInPlayable(di)}
					class={`transition-all rounded-full ${
						Math.floor(currentIndex / 9) === Math.floor(di / 9)
							? `w-4 h-4 bg-gradient-to-br ${getGradient(di)} shadow-sm`
							: 'w-2.5 h-2.5 bg-foreground/20 hover:bg-foreground/40'
					}`}
					aria-label={`Jump to name ${di + 1}`}
				></button>
			{/each}
		</div>

		<!-- Main Card -->
		<div class="w-full max-w-sm relative" style="min-height: 320px;">
			{#key currentIndex}
				<div
					in:fly={{ x: flyDir * 60, duration: 300, opacity: 0 }}
					out:fly={{ x: flyDir * -60, duration: 200, opacity: 0 }}
					class={`absolute inset-0 rounded-3xl bg-gradient-to-br ${getGradient(currentIndex)} p-8 shadow-2xl text-center overflow-hidden flex flex-col items-center justify-center`}
				>
					<!-- Decorative elements -->
					<div
						class="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/10 pointer-events-none"
					></div>
					<div
						class="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-white/10 pointer-events-none"
					></div>
					<div class="absolute top-1/2 left-0 w-full h-px bg-white/5 pointer-events-none"></div>

					<!-- Number badge -->
					<div
						class="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center mb-5"
					>
						<span class="text-white font-bold text-lg">{currentIndex + 1}</span>
					</div>

					<!-- Arabic text -->
					<div class="mb-4">
						<span class="font-arabic text-5xl text-white leading-relaxed drop-shadow-sm"
							>{currentItem.arabic}</span
						>
					</div>

					<!-- Latin name -->
					<div class="mb-3">
						<span class="text-white text-xl font-bold tracking-wide">{currentItem.latin}</span>
					</div>

					<!-- Translation -->
					<p class="text-white/90 text-sm px-2">
						{isEnglish ? currentItem.translation_en : currentItem.translation_id}
					</p>

					<!-- Playing indicator -->
					{#if isPlaying}
						<div
							class="mt-5 flex items-end justify-center gap-1"
							transition:fade={{ duration: 200 }}
						>
							{#each [0, 150, 300, 150, 0] as delay}
								<div
									class="w-1 bg-white/60 rounded-full animate-bounce"
									style="height: 12px; animation-delay: {delay}ms;"
								></div>
							{/each}
						</div>
					{/if}
				</div>
			{/key}
		</div>

		<!-- Controls -->
		<div class="flex items-center gap-5 mt-2">
			<IconButton
				onClick={goPrev}
				ariaLabel="Previous"
				size="lg"
				variant="subtle"
				color="secondary"
			>
				<ArrowLeftIcon />
			</IconButton>

			<button
				onclick={togglePlay}
				class={`w-16 h-16 rounded-full bg-gradient-to-br ${getGradient(currentIndex)} text-white shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
				aria-label={isPlaying ? 'Pause' : 'Play'}
			>
				{#if isPlaying}
					<PauseIcon class="w-7 h-7" />
				{:else}
					<PlayIcon class="w-7 h-7" />
				{/if}
			</button>

			<IconButton onClick={goNext} ariaLabel="Next" size="lg" variant="subtle" color="secondary">
				<ArrowRightIcon />
			</IconButton>
		</div>

		<!-- Speed Controls -->
		<div class="flex items-center gap-2">
			<span class="text-xs text-foreground-secondary font-medium">Auto-play speed:</span>
			{#each [3, 5, 10] as s}
				<button
					onclick={() => setSpeed(s)}
					class={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
						autoPlaySpeed === s
							? 'bg-foreground text-primary shadow-sm'
							: 'bg-secondary text-foreground-secondary hover:text-foreground hover:bg-secondary/80'
					}`}
				>
					{s}s
				</button>
			{/each}
		</div>

		<!-- Jump to Number -->
		<div class="flex items-center gap-2">
			<span class="text-xs text-foreground-secondary font-medium">Jump to:</span>
			<input
				type="number"
				bind:value={jumpInput}
				min="1"
				max="99"
				placeholder="1–99"
				class="w-20 px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground border border-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 text-center"
				onkeydown={(e) => e.key === 'Enter' && jumpTo()}
			/>
			<button
				onclick={jumpTo}
				class="px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground hover:bg-primary transition-colors font-medium"
			>
				Go
			</button>
			<IconButton
				onClick={() => openInPlayable(0)}
				ariaLabel="Reset to first"
				size="sm"
				variant="ghost"
				color="secondary"
			>
				<ResetIcon size="sm" />
			</IconButton>
		</div>

		<!-- Keyboard hint -->
		<p class="text-xs text-foreground-secondary/70 text-center">
			⌨️ Space to play/pause · ← → to navigate
		</p>

		<!-- Name picker: grid row -->
		<div class="w-full">
			<p class="text-xs text-foreground-secondary mb-2 font-medium">All names:</p>
			<div class="grid grid-cols-10 gap-1.5">
				{#each asmaulHusna as _item, i}
					<button
						onclick={() => openInPlayable(i)}
						class={`w-full py-1.5 rounded-lg text-xs font-medium text-center transition-all ${
							currentIndex === i
								? `bg-gradient-to-r ${getGradient(i)} text-white shadow-sm scale-105`
								: 'bg-secondary text-foreground-secondary hover:text-foreground hover:bg-primary'
						}`}
					>
						{i + 1}
					</button>
				{/each}
			</div>
		</div>
	</div>
{/if}

<div class="px-4">
	<SeoText variant="ASMAUL_HUSNA" />
</div>
