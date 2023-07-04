<script>
	import Footer from '$lib/Footer.svelte';
	// import Gradient from '$lib/Gradient.svelte';
	import Header from '$lib/Header.svelte';

	import '../app.css';
</script>

<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
	<div class="relative container mx-auto max-w-[500px]">
		<Header />
		<!-- <Gradient variant="top" /> -->
		<main class="min-h-screen">
			<slot />
		</main>
		<!-- <Gradient variant="bottom" /> -->
		<Footer />
	</div>
</div>
