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
	<div class="relative flex-shrink-0 mt-0.5 w-6 h-6">
		<input
			id={fieldId}
			{name}
			{value}
			{disabled}
			type="checkbox"
			bind:checked
			onchange={onChange}
			class="peer w-full h-full cursor-pointer appearance-none rounded border border-control-accent/40 bg-control-surface transition shadow hover:shadow-md checked:bg-control-accent checked:border-control-accent focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:cursor-not-allowed"
		/>
		<span
			class="pointer-events-none absolute inset-0 flex items-center justify-center text-control-surface opacity-0 peer-checked:opacity-100 transition-opacity"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="20 6 9 17 4 12" />
			</svg>
		</span>
	</div>
	<span class="flex flex-col">
		{#if label}<span class="text-sm">{label}</span>{/if}
		{@render children?.()}
		{#if hint}<span class="text-xs opacity-75">{hint}</span>{/if}
	</span>
</label>
