<script lang="ts">
	interface Props {
		count: number;
		current: number;
		seen?: boolean[];
		onJump?: (index: number) => void;
		class?: string;
	}

	let { count, current, seen = [], onJump, class: clazz = '' }: Props = $props();
</script>

<div class="flex flex-wrap gap-1.5 justify-center {clazz}">
	{#each { length: count } as _, i}
		<button
			onclick={() => onJump?.(i)}
			aria-label="Step {i + 1}"
			aria-current={i === current ? 'step' : undefined}
			class="rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-control-accent
				{i === current
				? 'w-6 h-3 bg-control-accent'
				: seen[i]
					? 'w-3 h-3 bg-foreground/40'
					: 'w-3 h-3 bg-secondary border border-foreground/20'}"
		></button>
	{/each}
</div>
