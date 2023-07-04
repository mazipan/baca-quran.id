<script lang="ts">
	import Drawer from '$lib/Drawer.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import { onMount } from 'svelte';
	import { CONSTANTS, settingAudio, settingMuqadimah, settingTafsir, settingTranslation } from '../store';

	import '../app.css';

  let isDrawerOpen = false;

  let handleToggleDrawer = () => {
    isDrawerOpen = !isDrawerOpen
  }

  onMount(() => {
    // Make sure it's only run on the client
    if (typeof window !== 'undefined') {
      if (typeof localStorage !== 'undefined') {
        const storageAudio = localStorage.getItem(CONSTANTS.STORAGE_KEY.AUDIO)
        settingAudio.set(!!(storageAudio && storageAudio === 'y'))

        const storageMukadimah = localStorage.getItem(CONSTANTS.STORAGE_KEY.MUKADIMAH)
        settingMuqadimah.set(!!(storageMukadimah && storageMukadimah === 'y'))

        const storageTafsir = localStorage.getItem(CONSTANTS.STORAGE_KEY.TAFSIR)
        settingTafsir.set(!!(storageTafsir && storageTafsir === 'y'))

        const storageTranslation = localStorage.getItem(CONSTANTS.STORAGE_KEY.TRANSLATION)
        settingTranslation.set(!!(storageTranslation && storageTranslation === 'y'))
      }
    }
  })
</script>

<div>
	<div class="relative container mx-auto max-w-[500px]">
    <Drawer open={isDrawerOpen} onToggle={handleToggleDrawer} />
		<Header onToggleDrawer={handleToggleDrawer} />
		<!-- <Gradient variant="top" /> -->
		<main class="min-h-[70vh]">
			<slot />
		</main>
		<!-- <Gradient variant="bottom" /> -->
		<Footer />
	</div>
</div>
