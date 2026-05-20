<script lang="ts">
	interface Props {
		value?: string;
		type?: 'text' | 'search' | 'email' | 'password' | 'number' | 'tel' | 'url';
		placeholder?: string;
		label?: string;
		hint?: string;
		error?: string;
		id?: string;
		name?: string;
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
		required = false,
		disabled = false,
		readonly = false,
		onInput,
		onChange,
		class: clazz = ''
	}: Props = $props();

	const fieldId = $derived(id || `input-${name || Math.random().toString(36).slice(2, 8)}`);
	const hasError = $derived(Boolean(error));
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
		class={`text-md border-0 rounded-lg block p-2.5 placeholder-foreground-secondary w-full bg-secondary focus:ring-2 focus:outline-none ${hasError ? 'ring-2 ring-red-500 focus:ring-red-500' : 'focus:ring-blue-500'} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
	/>

	{#if hasError}
		<p id={`${fieldId}-error`} class="text-xs text-red-500">{error}</p>
	{:else if hint}
		<p id={`${fieldId}-hint`} class="text-xs opacity-75">{hint}</p>
	{/if}
</div>
