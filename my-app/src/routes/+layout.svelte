<script lang="ts">
	import Drawer from '$lib/Drawer.svelte';
	import Footer from '$lib/Footer.svelte';
	// import Gradient from '$lib/Gradient.svelte';
	import Header from '$lib/Header.svelte';

	import '../app.css';

  let isDrawerOpen = false;

  let handleToggleDrawer = () => {
    isDrawerOpen = !isDrawerOpen
  }
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
