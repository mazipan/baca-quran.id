<script lang="ts">
	import { fade } from 'svelte/transition';

	let show = false;
	import { onMount } from 'svelte';
	import { activeTheme } from '../store';

	const handleSwitchTheme = (e: string) => {
		if (e === 'light') {
			activeTheme.set('light');
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			window.__setPreferredTheme('light');
		} else if (e === 'light-blue') {
			activeTheme.set('dark');
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			window.__setPreferredTheme('dark');
		} else if (e === 'sepia') {
			activeTheme.set('sepia');
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			window.__setPreferredTheme('sepia');
		}
		else if (e === 'yellow') {
			activeTheme.set('yellow');
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			window.__setPreferredTheme('yellow');
		}
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
			class="theme-swither cursor-pointer p-2 rounded-md hover:bg-gray-100 focus:bg-gray-100 dark:hover:bg-blueish-700 dark:focus:bg-blueish-700"
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
					d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
				/>
			</svg>
		</button>
	</div>

	{#if show}
		<div
			class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
			transition:fade={{ duration: 100 }}
		>
			<div class="py-1" role="none">
				<button
					type="submit"
					class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
					role="menuitem"
					tabindex="-1"
					id="menu-item-3"
					on:click={() => handleSwitchTheme('light')}>Light</button
				>
				<button
					type="submit"
					class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
					role="menuitem"
					tabindex="-1"
					id="menu-item-3"
					on:click={() => handleSwitchTheme('light-blue')}>Light Blue</button
				>
				<button
					type="submit"
					class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
					role="menuitem"
					tabindex="-1"
					id="menu-item-3"
					on:click={() => handleSwitchTheme('sepia')}>Red</button
				>
				<button
					type="submit"
					class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
					role="menuitem"
					tabindex="-1"
					id="menu-item-3"
					on:click={() => handleSwitchTheme('yellow')}>Yellow</button
				>
			</div>
		</div>
	{/if}
</div>
