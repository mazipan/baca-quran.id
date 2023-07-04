<script>
	import Footer from '$lib/Footer.svelte';
  import Gradient from '$lib/Gradient.svelte';
	import Header from '$lib/Header.svelte';

  import "../app.css";
</script>

<div class="container mx-auto max-w-[500px] relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
  <Gradient variant="top" />
  <Header/>
  <main class="min-h-screen">
    <slot />
  </main>
  <Gradient variant="bottom" />
  <Footer />
</div>
