<script lang="ts">
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import { t } from '$lib/translations/store';
	import Button from '$lib/ui/Button.svelte';
	import IconButton from '$lib/ui/IconButton.svelte';
	import CheckIcon from '$lib/icons/CheckIcon.svelte';
	import ResetIcon from '$lib/icons/ResetIcon.svelte';

	interface ReadingItem {
		id: number;
		order: number;
		title: string;
		arabic: string;
		latin: string;
		translation: string;
		translationEn: string;
		count: number;
		note?: string;
		noteEn?: string;
		href?: string;
	}

	interface Props {
		item: ReadingItem;
		count: number;
		playMode?: boolean;
		compact?: boolean;
		isLast?: boolean;
		onIncrement: () => void;
		onReset: () => void;
		onNext?: () => void;
		onSkip?: () => void;
	}

	let {
		item,
		count,
		playMode = false,
		compact = false,
		isLast = false,
		onIncrement,
		onReset,
		onNext,
		onSkip
	}: Props = $props();

	const isEnglish = $derived($languageStore === LANGUAGE_OPTIONS.ENGLISH.locale);
	const done = $derived(count >= item.count);
	const remaining = $derived(Math.max(0, item.count - count));
	const translation = $derived(isEnglish ? item.translationEn : item.translation);
	const note = $derived(isEnglish ? (item.noteEn ?? '') : (item.note ?? ''));
</script>

<div
	class="relative rounded-xl overflow-hidden bg-secondary shadow p-4 flex flex-col gap-3 border-2 transition-colors {done
		? 'border-green-500'
		: 'border-transparent'}"
>
	{#if playMode}
		<!-- Play mode header -->
		<div class="flex items-center justify-between gap-3">
			<div class="flex items-center gap-3">
				<div
					class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md flex-shrink-0 transition-colors {done
						? 'bg-green-500 dark:bg-green-600 text-white'
						: 'bg-teal-600 dark:bg-teal-700 text-white'}"
				>
					{item.order}
				</div>
				{#if item.count > 1}
					<span
						class="text-sm px-2.5 py-1 rounded-full font-semibold tabular-nums whitespace-nowrap {done
							? 'bg-green-100 text-green-700 dark:bg-green-900/60 dark:text-green-200'
							: 'bg-primary text-foreground/80'}"
					>
						{count} / {item.count}
					</span>
				{/if}
				{#if done}
					<CheckIcon size="md" class="text-green-500" />
				{/if}
			</div>
			{#if !item.href}
				<IconButton
					onClick={onReset}
					variant="ghost"
					color="secondary"
					size="sm"
					ariaLabel={$t('tahlil.resetCounter')}
					class="opacity-50 hover:opacity-100"
				>
					<ResetIcon size="sm" />
				</IconButton>
			{/if}
		</div>

		<!-- Title -->
		<p class="text-sm font-semibold opacity-70">{item.title}</p>
	{:else}
		<!-- All-mode header -->
		<div class="flex items-start justify-between gap-3">
			<div class="flex items-center gap-2 flex-wrap">
				<div
					class="w-7 h-7 rounded-full bg-primary border-2 border-foreground/20 flex items-center justify-center text-xs font-bold opacity-80 flex-shrink-0"
				>
					{item.order}
				</div>
				<span class="text-sm font-semibold opacity-80">{item.title}</span>
			</div>
			<div class="flex items-center gap-2 flex-shrink-0">
				{#if item.count > 1}
					<span
						class="text-xs px-2 py-0.5 rounded-full font-semibold tabular-nums whitespace-nowrap {done
							? 'bg-green-100 text-green-700 dark:bg-green-900/60 dark:text-green-200'
							: 'bg-primary text-foreground/80'}"
					>
						{count} / {item.count}
					</span>
				{/if}
				{#if done}
					<CheckIcon size="md" class="text-green-500" />
				{/if}
			</div>
		</div>
	{/if}

	<!-- Arabic text -->
	<p
		dir="rtl"
		lang="ar"
		class="font-arabic leading-loose text-right {compact
			? 'text-3xl'
			: playMode
				? 'text-3xl'
				: 'text-2xl'} {item.href ? 'opacity-40 text-xl' : ''}"
	>
		{item.arabic}
	</p>

	{#if !compact}
		<!-- Latin transliteration -->
		{#if !item.href}
			<p class="text-sm italic opacity-70 leading-relaxed">{item.latin}</p>
		{/if}

		<!-- Translation -->
		<p class="text-sm opacity-90 leading-relaxed">{translation}</p>

		{#if note}
			<p class="text-xs opacity-60 leading-relaxed italic">{note}</p>
		{/if}
	{/if}

	<!-- Action area -->
	{#if playMode}
		<div class="mt-1">
			{#if item.href}
				<!-- Link card — open surah in app -->
				<a
					href={item.href}
					target="_blank"
					rel="noopener noreferrer"
					class="w-full flex items-center justify-center gap-2 cursor-pointer rounded-xl px-4 py-4 text-base font-bold border-2 transition active:scale-[0.98] bg-teal-600 dark:bg-teal-700 text-white border-teal-700 dark:border-teal-600 hover:bg-teal-700 dark:hover:bg-teal-800 shadow-md"
				>
					📖 {$t('tahlil.openSurah')}
				</a>
				<Button
					onClick={() => onNext?.()}
					variant="solid"
					color="primary"
					size="md"
					class="mt-2 w-full justify-center active:scale-[0.98]"
				>
					{$t('tahlil.doneNext')}
				</Button>
			{:else if done && !isLast}
				<Button
					onClick={() => onNext?.()}
					variant="solid"
					color="success"
					size="lg"
					class="w-full justify-center active:scale-[0.98]"
				>
					{$t('tahlil.nextCard')}
				</Button>
			{:else if done && isLast}
				<div
					class="w-full rounded-xl px-4 py-4 text-lg font-bold border-2 bg-green-100 dark:bg-green-950 border-green-500 text-green-700 dark:text-green-300 flex items-center justify-center gap-2"
				>
					<CheckIcon size="sm" />{$t('tahlil.allCompleteShort')}
				</div>
			{:else}
				<Button
					onClick={onIncrement}
					variant="solid"
					color="primary"
					size="lg"
					ariaLabel={item.count > 1
						? $t('tahlil.countAria', { count, total: item.count })
						: $t('tahlil.markAsDone')}
					class="w-full justify-center active:scale-[0.98]"
				>
					{#if item.count > 1}
						{$t('tahlil.tapPlus1')}
						<span class="text-sm font-normal opacity-60 ml-1">
							({remaining}
							{$t('tahlil.moreRemaining')})
						</span>
					{:else}
						<CheckIcon size="sm" />{$t('tahlil.done')}
					{/if}
				</Button>
				{#if onSkip}
					<Button
						onClick={() => onSkip?.()}
						variant="outline"
						color="secondary"
						size="sm"
						class="mt-2 w-full justify-center opacity-50 hover:opacity-80"
					>
						{$t('tahlil.skip')}
					</Button>
				{/if}
			{/if}
		</div>
	{:else}
		<!-- All-mode actions -->
		<div class="flex items-stretch gap-2 mt-1">
			{#if item.href}
				<a
					href={item.href}
					target="_blank"
					rel="noopener noreferrer"
					class="flex-1 flex items-center justify-center gap-2 cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold border-2 transition bg-teal-600 dark:bg-teal-700 text-white border-teal-700"
				>
					📖 {$t('tahlil.openSurahShort')}
				</a>
			{:else}
				<Button
					onClick={onIncrement}
					disabled={done}
					variant={done ? 'subtle' : 'solid'}
					color={done ? 'success' : 'primary'}
					size="md"
					ariaLabel={done
						? $t('tahlil.targetReached')
						: item.count > 1
							? $t('tahlil.countAriaAll', { count, total: item.count })
							: $t('tahlil.markAsDone')}
					class="flex-1 justify-center active:scale-[0.98]"
				>
					{#if done}
						<CheckIcon size="sm" />{$t('tahlil.done')}
					{:else if item.count > 1}
						{$t('tahlil.tapPlus1')}
					{:else}
						{$t('tahlil.markDone')}
					{/if}
				</Button>
				<IconButton
					onClick={onReset}
					variant="outline"
					color="secondary"
					size="md"
					ariaLabel={$t('tahlil.resetCounter')}
				>
					<ResetIcon size="md" />
				</IconButton>
			{/if}
		</div>
	{/if}
</div>
