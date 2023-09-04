<script lang="ts">
	import DrawerMenus from './DrawerMenus.svelte';

	export let open: boolean;
	export let onToggle: () => void;
</script>

<div
	class={`fixed top-0 left-auto z-20 w-[250px] h-full transition-all duration-500 transform shadow-lg bg-secondary ${
		open ? 'translate-x-0' : '-translate-x-full'
	}`}
>
	<div class="p-4 h-full flex flex-col justify-between">
		<div>
			<div class="flex justify-end gap-2">
				<button
					on:click={onToggle}
					class="cursor-pointer p-2 rounded-md hover:bg-primary focus:bg-primary"
				>
					{#if open}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					{:else}
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
								d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
							/>
						</svg>
					{/if}
				</button>
			</div>
			<DrawerMenus />
		</div>
		<div class="py-2">
			<small class="text-sm">
				<a href="/" class="underline" data-sveltekit-reload>Baca-Quran.id</a>
			</small>
		</div>
	</div>
</div>

<div
	on:click={onToggle}
	class={`fixed z-10 top-0 bottom-0 left-0 right-0 w-full h-full bg-gray-500 opacity-50 transition-all duration-500 transform ${
		open ? 'translate-x-0' : '-translate-x-full'
	}`}
	role="presentation"
/>
