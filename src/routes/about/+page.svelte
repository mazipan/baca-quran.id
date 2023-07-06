<script lang="ts">
	import MetaTag from '$lib/MetaTag.svelte';
	import { META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';
</script>

<svelte:head>
  <MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">ℹ️ Tentang</h1>
</div>

<article class="px-4">
  <p class="mb-4">
    Baca-Quran.id merupakan aplikasi untuk membaca Al-Quran melalui peramban (browser), tanpa perlu lagi install aplikasi tambahan, tanpa iklan dan tanpa analitik apapun sehingga lebih aman untuk privasi data Anda.
  </p>

  <p class="mb-2">Baca-Quran.id menggunakan berbagai sumber data, diantaranya:</p>
	<ul class="list-decimal ml-6">
		<li>
			<a
				class="underline"
				href="https://github.com/rioastamal/quran-json"
				target="_blank"
				rel="noopener">Quran Json</a
			>
			oleh Rio Astamal untuk sumber data ayat-ayat Al Qur'an.
		</li>
		<li>
			<a
				class="underline"
				href="https://jagad.id/99-asmaul-husna-latin-arab-dan-terjemahan-indonesia-inggris/"
				target="_blank"
				rel="noopener">Jagad.id</a
			>
			untuk data Asmaul Husna
		</li>
		<li>
			<a
				class="underline"
				href="http://www.doaharianislami.com/2017/06/kumpulan-doa-sehari-hari-lengkap-dalam-bahasa-arab-latin-dan-artinya.html"
				target="_blank"
				rel="noopener">Doa Harian Islami</a
			>
			untuk data doa-doa harian
		</li>
		<li>
			<a class="underline" href="https://quran.kemenag.go.id/" target="_blank" rel="noopener"
				>quran.kemenag.go.id</a
			>
			untuk data mp3 murotal dari setiap ayat
		</li>
		<li>
			<a
				class="underline"
				href="https://islam.nu.or.id/post/read/107344/susunan-bacaan-tahlil-doa-arwah-lengkap-dan-terjemahannya"
				target="_blank"
				rel="noopener">islam.nu.or.id</a
			>
			untuk bacaan tahlil dan wirid
		</li>
	</ul>
</article>
