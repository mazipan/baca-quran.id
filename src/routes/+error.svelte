<script>
	import { page } from '$app/stores';
	import ArrowLeftIcon from '$lib/icons/ArrowLeftIcon.svelte';
	import Button from '$lib/ui/Button.svelte';
</script>

<div class="m-6 flex flex-col gap-2 justify-center items-center">
	<h1 class="text-5xl text-center font-bold">Ooops!</h1>
	<p class="mt-2 text-red-600 bg-red-50 p-2 rounded-lg">
		<span class="font-bold">Error Message: </span><span
			>{$page?.error?.message || 'tidak diketahui'}</span
		>
	</p>
	<img
		src="/images/illustrasion-error.svg"
		alt="The monsters eating your page"
		class="w-[80%] mt-8 mb-8"
	/>
	<Button
		onClick={() => {
			window.location.assign('/');
		}}
	>
		<ArrowLeftIcon />
		Kembali ke Beranda
	</Button>
</div>
