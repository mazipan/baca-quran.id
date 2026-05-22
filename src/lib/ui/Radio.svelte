<script lang="ts">
	interface Props {
		group?: string;
		value: string;
		label?: string;
		hint?: string;
		id?: string;
		name?: string;
		disabled?: boolean;
		onChange?: (event: Event) => void;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let {
		group = $bindable(''),
		value,
		label = '',
		hint = '',
		id = '',
		name = '',
		disabled = false,
		onChange,
		class: clazz = '',
		children
	}: Props = $props();

	const fieldId = $derived(id || `radio-${name || value}`);
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
			type="radio"
			bind:group
			onchange={onChange}
			class="peer w-full h-full cursor-pointer appearance-none rounded-full border border-control-accent/40 bg-control-surface transition hover:shadow-sm checked:border-control-accent focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:cursor-not-allowed"
		/>
		<span
			class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
		>
			<span class="w-3 h-3 rounded-full bg-control-accent"></span>
		</span>
	</div>
	<span class="flex flex-col">
		{#if label}<span class="text-sm">{label}</span>{/if}
		{@render children?.()}
		{#if hint}<span class="text-xs opacity-75">{hint}</span>{/if}
	</span>
</label>
