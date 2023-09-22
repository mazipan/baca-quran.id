<script lang="ts">
	import { fade } from 'svelte/transition';
	import { THEMES } from './constants';

	import { onMount } from 'svelte';
	import { activeTheme } from '../store';
	let show = false;

	const handleSwitchTheme = (theme: string) => {
		activeTheme.set(theme);
		// See app.html for window.__setActiveTheme implementation

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		window.__setActiveTheme(theme);
		show = false;
	};

	onMount(() => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		activeTheme.set(window.__theme);
	});
</script>

<div class="relative inline-block text-left">
	<div>
		<button
			type="button"
			class="theme-swither cursor-pointer p-2 rounded-md hover:bg-secondary focus:bg-secondary"
			id="menu-button"
			aria-expanded={show}
			aria-haspopup="true"
			on:click={() => (show = !show)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
				/>
			</svg>
		</button>
	</div>

	{#if show}
		<div
			class={`absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-secondary`}
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
			transition:fade={{ duration: 100 }}
		>
			<div class="p-1 flex flex-col gap-2" role="none">
				{#each THEMES as theme (theme.name)}
					<button
						type="submit"
						class={`flex gap-2 items-center justify-between rounded-md w-full px-4 py-2 text-left text-sm hover:bg-primary ${
							theme.name === $activeTheme ? 'border-2 border-blue-400' : ''
						}`}
						role="menuitem"
						tabindex="-1"
						id="menu-item-3"
						on:click={() => handleSwitchTheme(theme.name)}
					>
						<div class="flex items-center gap-2">
							<span
								class="flex w-6 h-6 rounded-full flex-shrink-0 border"
								style={`background-color: ${theme.bg}; border-color: ${
									theme.name === $activeTheme ? theme.border : theme.bg
								};`}
							/>
							{theme.name.toUpperCase()}
						</div>
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
