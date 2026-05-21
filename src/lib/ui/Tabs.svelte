<script lang="ts">
	interface TabOption {
		value: string;
		label: string;
	}

	interface Props {
		options: TabOption[];
		value: string;
		onchange: (value: string) => void;
		class?: string;
	}

	let { options, value, onchange, class: klass = '' }: Props = $props();

	const activeIndex = $derived(options.findIndex((o) => o.value === value));
</script>

<div class="relative bg-secondary p-1 rounded-xl border border-foreground/10 {klass}">
	<!-- Sliding pill indicator -->
	<div
		class="absolute top-1 bottom-1 bg-primary shadow border border-foreground/20 rounded-lg pointer-events-none transition-all duration-300 ease-in-out"
		style="left: calc(4px + {activeIndex} * (100% - 8px) / {options.length}); width: calc((100% - 8px) / {options.length});"
		aria-hidden="true"
	></div>
	<!-- Tab buttons -->
	<div class="relative grid" style="grid-template-columns: repeat({options.length}, 1fr)">
		{#each options as option (option.value)}
			<button
				type="button"
				onclick={() => onchange(option.value)}
				class="relative z-10 rounded-lg px-3 py-2 text-sm font-semibold cursor-pointer transition-opacity duration-200 {value ===
				option.value
					? 'opacity-100'
					: 'opacity-60 hover:opacity-80'}"
				aria-pressed={value === option.value}
			>
				{option.label}
			</button>
		{/each}
	</div>
</div>
