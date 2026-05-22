<script lang="ts">
	interface Props {
		checked?: boolean;
		label?: string;
		hint?: string;
		id?: string;
		name?: string;
		value?: string;
		disabled?: boolean;
		onChange?: (event: Event) => void;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let {
		checked = $bindable(false),
		label = '',
		hint = '',
		id = '',
		name = '',
		value = '',
		disabled = false,
		onChange,
		class: clazz = '',
		children
	}: Props = $props();

	const fieldId = $derived(id || `checkbox-${name || Math.random().toString(36).slice(2, 8)}`);
</script>

<label
	for={fieldId}
	class={`flex items-start gap-2 cursor-pointer ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${clazz}`}
>
	<div class="relative flex-shrink-0 mt-0.5">
		<input
			id={fieldId}
			{name}
			{value}
			{disabled}
			type="checkbox"
			bind:checked
			onchange={onChange}
			class="peer w-5 h-5 cursor-pointer appearance-none rounded border border-control-accent/40 bg-control-surface transition shadow hover:shadow-md checked:bg-control-accent checked:border-control-accent focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:cursor-not-allowed"
		/>
		<span
			class="pointer-events-none absolute inset-0 flex items-center justify-center text-control-surface opacity-0 peer-checked:opacity-100 transition-opacity"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-3.5 w-3.5"
				viewBox="0 0 20 20"
				fill="currentColor"
				stroke="currentColor"
				stroke-width="1"
			>
				<path
					fill-rule="evenodd"
					d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
					clip-rule="evenodd"
				></path>
			</svg>
		</span>
	</div>
	<span class="flex flex-col">
		{#if label}<span class="text-sm">{label}</span>{/if}
		{@render children?.()}
		{#if hint}<span class="text-xs opacity-75">{hint}</span>{/if}
	</span>
</label>
