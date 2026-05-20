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
	<input
		id={fieldId}
		{name}
		{value}
		{disabled}
		type="checkbox"
		bind:checked
		onchange={onChange}
		class="mt-0.5 w-5 h-5 rounded accent-foreground bg-secondary border-foreground/30 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-foreground cursor-pointer disabled:cursor-not-allowed"
	/>
	<span class="flex flex-col">
		{#if label}<span class="text-sm">{label}</span>{/if}
		{@render children?.()}
		{#if hint}<span class="text-xs opacity-75">{hint}</span>{/if}
	</span>
</label>
