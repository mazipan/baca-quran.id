<script lang="ts">
	interface Props {
		checked?: boolean;
		label?: string;
		hint?: string;
		disabled?: boolean;
		onchange?: (checked: boolean) => void;
		class?: string;
	}

	let {
		checked = $bindable(false),
		label = '',
		hint = '',
		disabled = false,
		onchange,
		class: clazz = ''
	}: Props = $props();

	function toggle() {
		if (disabled) return;
		checked = !checked;
		onchange?.(checked);
	}
</script>

<button
	type="button"
	role="switch"
	aria-checked={checked}
	{disabled}
	onclick={toggle}
	class="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-control-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm {disabled
		? 'opacity-50 cursor-not-allowed'
		: 'cursor-pointer'} {clazz}"
>
	<span
		aria-hidden="true"
		class="relative flex-shrink-0 inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 {checked
			? 'bg-control-accent'
			: 'bg-foreground/30'}"
	>
		<span
			class="absolute h-4 w-4 rounded-full shadow-sm bg-control-surface transition-transform duration-200 {checked
				? 'translate-x-[1.375rem]'
				: 'translate-x-1'}"
		></span>
	</span>
	{#if label}
		<span class="flex flex-col gap-0.5">
			<span class="text-sm font-medium leading-snug">{label}</span>
			{#if hint}
				<span class="text-xs text-foreground-secondary leading-snug">{hint}</span>
			{/if}
		</span>
	{/if}
</button>
