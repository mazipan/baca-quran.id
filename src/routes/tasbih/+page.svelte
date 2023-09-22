<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import SeoText from '$lib/SeoText.svelte';
	import { META_DESC_TASBIH, META_TITLE_TASBIH, TITLE_CONSTANTS } from '$lib/constants';
	import ChevronDownIcon from '$lib/icons/ChevronDownIcon.svelte';
	import ChevronUpIcon from '$lib/icons/ChevronUpIcon.svelte';
	import ResetIcon from '$lib/icons/ResetIcon.svelte';
	import Button from '$lib/ui/Button.svelte';
	import { toast } from '../../store/toast';

	let counter = 0;
	let target = 33;

	const handleIncrement = () => {
		if (counter <= target - 1) {
			counter = counter + 1;
			if (counter === target) {
				if (
					typeof window.navigator !== 'undefined' &&
					typeof window.navigator.vibrate !== 'undefined'
				) {
					window.navigator.vibrate([1000, 500, 1000]);

					toast.show({
						message: `Kamu telah mencapai target!`,
						type: 'success'
					});
				}
			}
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

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: '🏠 Beranda', href: '/' }]} />
</div>

<div class="px-4 flex flex-col gap-2">
	<div class="text-xl text-center">
		Goal: {target}
	</div>
	<div class="flex justify-center items-center gap-4">
		<div class="flex justify-center items-center">
			<Button
				variant="filled"
				class={`px-4 rounded-l-lg rounded-r-none border-2 border-secondary ${target === 11 ? 'bg-secondary' : ''}`}
				onClick={() => {
					handleSetTarget(11);
				}}
			>
				<span class="text-xl">11</span>
			</Button>
			<Button
				variant="filled"
				class={`px-4 rounded-none border-t-2 border-b-2 border-secondary ${target === 33 ? 'bg-secondary' : ''}`}
				onClick={() => {
					handleSetTarget(33);
				}}
			>
				<span class="text-xl">33</span>
			</Button>
			<Button
				variant="filled"
				class={`px-4 rounded-r-lg rounded-l-none border-2 border-secondary ${target === 99 ? 'bg-secondary' : ''}`}
				onClick={() => {
					handleSetTarget(99);
				}}
			>
				<span class="text-xl">99</span>
			</Button>
		</div>
		<input
			class="text-md border-0 rounded-lg focus:ring-2 focus:ring-blue-500 block p-2.5 placeholder-foreground-secondary w-20 bg-secondary"
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
		<div class="relative -mb-6 z-10 flex flex-col">
			<button
				on:click={handleReset}
				class="z-10 cursor-pointer p-2 rounded-full bg-secondary focus:ring-4 focus:ring-blue-500 border-4 border-primary"
			>
				<ResetIcon size="xl" />
			</button>
			{#if counter >= target}
				<span
					class="animate-ping z-0 absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-50"
				/>
			{/if}
		</div>
		<button
			on:click={handleIncrement}
			class="cursor-pointer p-2 rounded-full focus:ring-4 focus:ring-blue-500 border-4 bg-secondary border-primary outline-none"
		>
			<ChevronUpIcon size="xl" class="w-40 h-40" />
		</button>
		<button
			on:click={handleDecrement}
			class="-mt-6 z-10 cursor-pointer p-2 rounded-full focus:ring-4 focus:ring-blue-500 bg-secondary border-4 border-primary"
		>
			<ChevronDownIcon size="xl" />
		</button>
	</div>
</div>

<div class="mt-8">
	<SeoText variant="TASBIH" />
</div>
