<script lang="ts">
	interface Props {
		/** 0–100 percentage, OR pass completed + total */
		value?: number;
		completed?: number;
		total?: number;
		showLabel?: boolean;
		class?: string;
	}

	let { value, completed, total, showLabel = false, class: clazz = '' }: Props = $props();

	const percent = $derived(
		value !== undefined
			? Math.min(Math.max(Math.round(value), 0), 100)
			: total && total > 0
				? Math.min(Math.round(((completed ?? 0) / total) * 100), 100)
				: 0
	);
</script>

<div class={clazz}>
	{#if showLabel}
		<div class="flex justify-between text-xs text-foreground-secondary mb-1">
			{#if completed !== undefined && total !== undefined}
				<span>{completed} / {total}</span>
			{/if}
			<span class="ml-auto">{percent}%</span>
		</div>
	{/if}
	<div
		class="w-full h-1.5 rounded-full bg-foreground/10 overflow-hidden"
		role="progressbar"
		aria-valuenow={percent}
		aria-valuemin={0}
		aria-valuemax={100}
	>
		<div
			class="h-full rounded-full transition-all bg-control-accent"
			style="width: {percent}%"
		></div>
	</div>
</div>
