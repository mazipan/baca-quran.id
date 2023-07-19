<script lang="ts">
	import XMarkIcon from './icons/XMarkIcon.svelte';
	import { toast } from '../store/toast';
	import FireIcon from './icons/FireIcon.svelte';
	import CheckCircleIcon from './icons/CheckCircleIcon.svelte';
	import ExclamationTriangleIcon from './icons/ExclamationTriangleIcon.svelte';
	import InformationCircleIcon from './icons/InformationCircleIcon.svelte';

	const handleClose = () => {
		toast.hide();
	};

	let CLASS_MAP = {
		info: 'text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200',
		warn: 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200',
		success: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
		error: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200'
	};
</script>

<div class="relative">
	<div
		id="toast-message"
		class={`fixed top-0 right-0 z-20 m-4 transition-all duration-500 transform flex items-center p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 ${
			$toast.show ? 'translate-y-[110%]' : '-translate-y-[130%]'
		}`}
		role="alert"
	>
		<div
			class={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${
				CLASS_MAP[$toast.type]
			}`}
		>
			{#if $toast.type === 'success'}
				<CheckCircleIcon />
			{:else if $toast.type === 'warn'}
				<ExclamationTriangleIcon />
			{:else if $toast.type === 'info'}
				<InformationCircleIcon />
			{:else if $toast.type === 'error'}
				<FireIcon />
			{/if}
		</div>
		<div class="ml-3 text-sm font-normal">{@html $toast.message}</div>
		<button
			type="button"
			class="ml-3 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
			data-dismiss-target="#toast-message"
			aria-label="Close"
			on:click={handleClose}
		>
			<XMarkIcon />
		</button>
	</div>
</div>
