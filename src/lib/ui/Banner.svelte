<script lang="ts">
	import CheckCircleIcon from '$lib/icons/CheckCircleIcon.svelte';
	import InformationCircleIcon from '$lib/icons/InformationCircleIcon.svelte';
	import ExclamationTriangleIcon from '$lib/icons/ExclamationTriangleIcon.svelte';
	import FireIcon from '$lib/icons/FireIcon.svelte';
	import XMarkIcon from '$lib/icons/XMarkIcon.svelte';

	type BannerType = 'info' | 'success' | 'warn' | 'error';

	interface Props {
		type?: BannerType;
		title?: string;
		dismissible?: boolean;
		onDismiss?: () => void;
		ariaLabelClose?: string;
		children?: import('svelte').Snippet;
		class?: string;
	}

	let {
		type = 'info',
		title = '',
		dismissible = false,
		onDismiss,
		ariaLabelClose = 'Close',
		children,
		class: clazz = ''
	}: Props = $props();

	const CLASS_MAP = {
		info: 'border-blue-400 bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
		success: 'border-green-400 bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-100',
		warn: 'border-orange-400 bg-orange-50 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
		error: 'border-red-400 bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-100'
	};
</script>

<div
	role={type === 'error' || type === 'warn' ? 'alert' : 'status'}
	data-component="banner"
	data-type={type}
	class={`flex items-start gap-3 p-3 rounded-md border-l-4 ${CLASS_MAP[type]} ${clazz}`}
>
	<div class="flex-shrink-0 mt-0.5" aria-hidden="true">
		{#if type === 'info'}
			<InformationCircleIcon size="sm" />
		{:else if type === 'success'}
			<CheckCircleIcon size="sm" />
		{:else if type === 'warn'}
			<ExclamationTriangleIcon size="sm" />
		{:else if type === 'error'}
			<FireIcon size="sm" />
		{/if}
	</div>

	<div class="flex-1 min-w-0 text-sm">
		{#if title}
			<div class="font-semibold mb-0.5">{title}</div>
		{/if}
		{@render children?.()}
	</div>

	{#if dismissible}
		<button
			type="button"
			onclick={() => onDismiss?.()}
			aria-label={ariaLabelClose}
			class="flex-shrink-0 -m-1 p-1 rounded hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
		>
			<XMarkIcon size="sm" />
		</button>
	{/if}
</div>
