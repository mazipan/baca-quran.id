<script lang="ts">
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { META_DESC_TASBIH, META_TITLE_TASBIH, TITLE_CONSTANTS } from '$lib/constants';
	import ChevronDownIcon from '$lib/icons/ChevronDownIcon.svelte';
	import ChevronUpIcon from '$lib/icons/ChevronUpIcon.svelte';
	import ResetIcon from '$lib/icons/ResetIcon.svelte';
	import Button from '$lib/ui/Button.svelte';

	let counter = 0;
	let target = 33;

	const handleIncrement = () => {
		if (counter <= target - 1) {
			counter = counter + 1;
		}
	};

	const handleDecrement = () => {
		if (counter > 0) {
			counter = counter - 1;
		}
	};

	const handleReset = () => {
		counter = 0;
	};

	const handleSetTarget = (newTarget: number) => {
		target = newTarget;
	};
</script>

<svelte:head>
	<MetaTag
		title={META_TITLE_TASBIH}
		desc={META_DESC_TASBIH}
		url={`${TITLE_CONSTANTS.PATH}tasbih/`}
	/>
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">📿 Tasbih</h1>
</div>

<div class="px-4 flex flex-col gap-2">
	<div class="text-xl text-center">
		Goal: {target}
	</div>
	<div class="flex justify-center items-center gap-4">
		<Button
			variant="filled"
			class={`px-4 ${target === 11 ? 'bg-gray-300 dark:bg-blueish-500' : ''}`}
			onClick={() => {
				handleSetTarget(11);
			}}
		>
			<span class="text-xl">11</span>
		</Button>
		<Button
			variant="filled"
			class={`px-4 ${target === 33 ? 'bg-gray-300 dark:bg-blueish-500' : ''}`}
			onClick={() => {
				handleSetTarget(33);
			}}
		>
			<span class="text-xl">33</span>
		</Button>
		<Button
			variant="filled"
			class={`px-4 ${target === 99 ? 'bg-gray-300 dark:bg-blueish-500' : ''}`}
			onClick={() => {
				handleSetTarget(99);
			}}
		>
			<span class="text-xl">99</span>
		</Button>
		<input
			class="text-md bg-gray-50 border-0 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 block p-2.5 dark:bg-blueish-700 dark:placeholder-gray-400 dark:text-white w-20"
			bind:value={target}
			type="number"
		/>
	</div>

	<div
		class={`text-8xl text-center font-bold mt-6 ${
			counter >= target ? 'animate-pulse text-red-600' : ''
		}`}
	>
		{counter}
	</div>

	<div class="relative mt-6 flex flex-col items-center">
		<button
			on:click={handleReset}
			class="-mb-6 z-10 cursor-pointer p-2 rounded-full bg-gray-100 focus:ring-4 focus:ring-blue-500 dark:bg-blueish-700 border-4 border-white dark:border-blueish-600"
		>
			<ResetIcon size="xl" />
		</button>
		<button
			on:click={handleIncrement}
			class="cursor-pointer p-2 rounded-full bg-gray-100 focus:ring-4 focus:ring-blue-500 dark:bg-blueish-700 border-4 border-white dark:border-blueish-600"
		>
			<ChevronUpIcon size="xl" class="w-40 h-40" />
		</button>
		<button
			on:click={handleDecrement}
			class="-mt-6 z-10 cursor-pointer p-2 rounded-full bg-gray-100 focus:ring-4 focus:ring-blue-500 dark:bg-blueish-700 border-4 border-white dark:border-blueish-600"
		>
			<ChevronDownIcon size="xl" />
		</button>
	</div>

	{#if counter >= target}
		<div class={`text-sm text-center text-red-600`}>
			<small>Kamu sudah mencapai target!</small><br />
			<small>Mulai lagi dengan <strong>klik tombol reset</strong>.</small>
		</div>
	{/if}
</div>

<div class="mt-8">
  <SeoText variant="TASBIH" />
</div>
