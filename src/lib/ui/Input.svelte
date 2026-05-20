<script lang="ts">
	type Size = 'sm' | 'md' | 'lg';

	interface Props {
		value?: string;
		type?: 'text' | 'search' | 'email' | 'password' | 'number' | 'tel' | 'url';
		placeholder?: string;
		label?: string;
		hint?: string;
		error?: string;
		id?: string;
		name?: string;
		size?: Size;
		required?: boolean;
		disabled?: boolean;
		readonly?: boolean;
		onInput?: (event: Event) => void;
		onChange?: (event: Event) => void;
		class?: string;
	}

	let {
		value = $bindable(''),
		type = 'text',
		placeholder = '',
		label = '',
		hint = '',
		error = '',
		id = '',
		name = '',
		size = 'md',
		required = false,
		disabled = false,
		readonly = false,
		onInput,
		onChange,
		class: clazz = ''
	}: Props = $props();

	const fieldId = $derived(id || `input-${name || Math.random().toString(36).slice(2, 8)}`);
	const hasError = $derived(Boolean(error));

	const SIZE_MAP: Record<Size, string> = {
		sm: 'text-sm p-2',
		md: 'text-md p-2.5',
		lg: 'text-lg p-3'
	};
</script>

<div class={`flex flex-col gap-1 ${clazz}`}>
	{#if label}
		<label for={fieldId} class="text-sm font-medium">
			{label}
			{#if required}<span aria-hidden="true" class="text-red-500">*</span>{/if}
		</label>
	{/if}

	<input
		id={fieldId}
		{name}
		{type}
		{placeholder}
		{required}
		{disabled}
		{readonly}
		bind:value
		oninput={onInput}
		onchange={onChange}
		aria-invalid={hasError}
		aria-describedby={hasError ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
		class={`rounded-lg block placeholder-foreground-secondary w-full bg-secondary border focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:outline-none ${SIZE_MAP[size]} ${hasError ? 'border-red-500 ring-1 ring-red-500 focus:ring-red-500' : 'border-foreground/40 focus:ring-foreground focus:border-foreground'} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
	/>

	{#if hasError}
		<p id={`${fieldId}-error`} class="text-xs text-red-500">{error}</p>
	{:else if hint}
		<p id={`${fieldId}-hint`} class="text-xs opacity-75">{hint}</p>
	{/if}
</div>
