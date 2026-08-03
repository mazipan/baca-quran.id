<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import type { Snippet } from 'svelte';

	interface Props {
		/** Zero-based index of the active card */
		step: number;
		/** Total number of cards in the stack */
		total: number;
		/** Slide direction: +1 = forward (left-to-right), -1 = backward */
		dir?: number;
		children: Snippet;
		class?: string;
	}

	let { step, total, dir = 1, children, class: clazz = '' }: Props = $props();
</script>

<!--
  Renders a "stacked cards" visual: up to 2 ghost cards peeking behind the
  active card, which animates in/out via a horizontal fly transition keyed
  on `step`.
-->
<div class="relative {clazz}" style="padding-bottom: 20px;">
	{#if step + 2 < total}
		<div
			class="absolute rounded-xl bg-secondary border border-foreground/10"
			style="bottom: 0; left: 24px; right: 24px; height: 28px; z-index: 1;"
		></div>
	{/if}
	{#if step + 1 < total}
		<div
			class="absolute rounded-xl bg-secondary border border-foreground/15 shadow-sm"
			style="bottom: 8px; left: 12px; right: 12px; height: 28px; z-index: 2;"
		></div>
	{/if}
	<div class="relative overflow-x-hidden" style="z-index: 3;">
		{#key step}
			<div
				in:fly={{ x: dir * 380, duration: 380, easing: cubicOut }}
				out:fly={{ x: -dir * 380, duration: 280 }}
			>
				{@render children()}
			</div>
		{/key}
	</div>
</div>
