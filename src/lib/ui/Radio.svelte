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
	<input
		id={fieldId}
		{name}
		{value}
		{disabled}
		type="radio"
		bind:group
		onchange={onChange}
		class="mt-0.5 w-5 h-5 accent-foreground bg-primary border-foreground/30 focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-foreground cursor-pointer disabled:cursor-not-allowed"
	/>
	<span class="flex flex-col">
		{#if label}<span class="text-sm">{label}</span>{/if}
		{@render children?.()}
		{#if hint}<span class="text-xs opacity-75">{hint}</span>{/if}
	</span>
</label>
