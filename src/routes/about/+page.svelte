<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import {  LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import {  META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';
$: current = $languageStore


</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}about/`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">
		ℹ️
		{#if current == LANGUAGE_OPTIONS.ENGLISH.locale}
			About
		{:else}
			Tentang
	{/if}
		</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: `🏠${current == LANGUAGE_OPTIONS.ENGLISH.locale
						? ' Home'
						: 'Beranda'}`, href: '/' }]} />
</div>
		{#if current == LANGUAGE_OPTIONS.ENGLISH.locale}
		<article class="px-4">
	<p class="mb-4">
	
			Baca-Quran.id is a web application for reading the Quran through a browser, without the need to
			install additional applications, without ads, and without any analytics, making it safer for your
			data privacy.
		</p>

	<p class="mb-2">
Baca-Quran.id using various data sources, including:	
	</p>

	<ul class="list-decimal ml-6 mb-4">
		<li>
			<a
				class="underline"
				href="https://github.com/rioastamal/quran-json"
				target="_blank"
				rel="noopener">Quran Json</a
			>
by Rio Astamal for the data source of the Qur'anic verses.		</li>
		<li>
			<a
				class="underline"
				href="http://www.doaharianislami.com/2017/06/kumpulan-doa-sehari-hari-lengkap-dalam-bahasa-arab-latin-dan-artinya.html"
				target="_blank"
				rel="noopener">Islamic daily prayer</a
			>
for daily prayer data		</li>
		<li>
			<a class="underline" href="https://quran.kemenag.go.id/" target="_blank" rel="noopener"
				>quran.kemenag.go.id</a
			>
for murotal mp3 data from each verse		</li>
		<li>
			<a
				class="underline"
				href="https://islam.nu.or.id/post/read/107344/susunan-bacaan-tahlil-doa-arwah-lengkap-dan-terjemahannya"
				target="_blank"
				rel="noopener">islam.nu.or.id</a
			>
For tahlil reading, wirid and			<a
				class="underline"
				href="https://islam.nu.or.id/ubudiyah/99-asmaul-husna-dan-artinya-1T8jl"
				target="_blank"
				rel="noopener">Asmaul Husna</a
			>
		</li>
		<li>
			<a
				class="underline"
				href="https://aladhan.com/prayer-times-api"
				target="_blank"
				rel="noopener">aladhan.com</a
			>
For prayer schedules		</li>
		<li>
			<a
				class="underline"
				href="https://nominatim.org/release-docs/develop/api/Reverse/"
				target="_blank"
				rel="noopener">nominatim.org</a
			>
To get reverse geocoding information as part of the requirements to get schedule data
			pray		</li>
	</ul>

	<p class="mb-4">
		Source code from the read-Quran.id application is openly available for learning purposes,
		Please see at:
		<a
			href="https://github.com/mazipan/baca-quran.id"
			target="_blank"
			rel="noopener noreferrer"
			class="underline"
		>
			📦 Kode Sumber
		</a>
	</p>

	<p class="mb-4">
To donate to the development of Baca-Quran.id, you can get the information at:		<a
			href="https://mazipan.space/support"
			target="_blank"
			rel="noopener noreferrer"
			class="underline"
		>
			❤️ Laman Donasi
		</a>
	</p>

	<p class="mb-2">Some other links related to Baca-Quran.id:</p>

	<ul class="list-decimal ml-6 mb-4">
		<li>
			<a class="underline" href="https://twitter.com/BacaQuranID" target="_blank" rel="noopener"
				>Twitter Baca-Quran.id,
			</a>
publish one verse of choice every day		</li>
		<li>
			<a class="underline" href="https://www.baca-quran.id/tulisan" target="_blank" rel="noopener"
				>Blog Baca-Quran.id,
			</a>
Articles published by the Quran.id reading team		</li>
		<li>
			<a class="underline" href="https://www.baca-quran.id/stories" target="_blank" rel="noopener"
				>Baca-Quran.id: Stories,
			</a>
Mini Web Stories published by the Baca-Quran.id team		</li>
		<li>
			<a class="underline" href="/kebijakan-privasi/">Kebijakan Privasi, </a>
Privacy policy page from Baca-Quran.id		</li>
		<li>
			<a class="underline" href="/ketentuan-layanan/">Ketentuan Layanan, </a>
		page terms and conditions of service from Baca-Quran.id
		</li>
		<li>
			<a
				class="underline"
				href="https://neosense.bgnlab.id/status/GKEnf4FhEZdY?timeframe=hourly"
				target="_blank"
				rel="noopener"
				>Status Uptime,
			</a>
			status of server conditions Baca-Quran.id
		</li>
	</ul>

	<p class="mb-2">Other works:</p>

	<ul class="list-decimal ml-6 mb-4">
		<li>
			<a class="underline" href="https://ksana.in/" target="_blank" rel="noopener">Ksana.in, </a>
Easy and FREE Link Shorten		</li>
		<li>
			<a class="underline" href="https://www.tanyaaja.in/" target="_blank" rel="noopener"
				>TanyaAja.in,
			</a>
Collect questions anonymously from anyone easily		</li>
	</ul>
</article>

		
		{:else}

<article class="px-4">
	<p class="mb-4">
	
			Baca-Quran.id merupakan aplikasi untuk membaca Al-Quran melalui peramban (browser), tanpa perlu
			lagi install aplikasi tambahan, tanpa iklan dan tanpa analitik apapun sehingga lebih aman untuk
			privasi data Anda.
	</p>

	<p class="mb-2">
			Baca-Quran.id menggunakan berbagai sumber data, diantaranya:
	
	</p>

	<ul class="list-decimal ml-6 mb-4">
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
			untuk bacaan tahlil, wirid dan
			<a
				class="underline"
				href="https://islam.nu.or.id/ubudiyah/99-asmaul-husna-dan-artinya-1T8jl"
				target="_blank"
				rel="noopener">Asmaul Husna</a
			>
		</li>
		<li>
			<a
				class="underline"
				href="https://aladhan.com/prayer-times-api"
				target="_blank"
				rel="noopener">aladhan.com</a
			>
			untuk jadwal sholat
		</li>
		<li>
			<a
				class="underline"
				href="https://nominatim.org/release-docs/develop/api/Reverse/"
				target="_blank"
				rel="noopener">nominatim.org</a
			>
			untuk mendapatkan informasi reverse geocoding sebagai bagian dari syarat mendapatkan data jadwal
			sholat
		</li>
	</ul>

	<p class="mb-4">
		Kode sumber dari aplikasi Baca-Quran.id tersedia secara terbuka untuk kepentingan belajar,
		silahkan lihat di:
		<a
			href="https://github.com/mazipan/baca-quran.id"
			target="_blank"
			rel="noopener noreferrer"
			class="underline"
		>
			📦 Kode Sumber
		</a>
	</p>

	<p class="mb-4">
		Untuk berdonasi terhadap pengembangan Baca-Quran.id, kamu bisa mendapatkan informasinya di:
		<a
			href="https://mazipan.space/support"
			target="_blank"
			rel="noopener noreferrer"
			class="underline"
		>
			❤️ Laman Donasi
		</a>
	</p>

	<p class="mb-2">Beberapa tautan lain yang terkait dengan Baca-Quran.id:</p>

	<ul class="list-decimal ml-6 mb-4">
		<li>
			<a class="underline" href="https://twitter.com/BacaQuranID" target="_blank" rel="noopener"
				>Twitter Baca-Quran.id,
			</a>
			mempublikasikan satu ayat pilihan setiap harinya
		</li>
		<li>
			<a class="underline" href="https://www.baca-quran.id/tulisan" target="_blank" rel="noopener"
				>Blog Baca-Quran.id,
			</a>
			artikel yang dipublikasikan oleh tim Baca-Quran.id
		</li>
		<li>
			<a class="underline" href="https://www.baca-quran.id/stories" target="_blank" rel="noopener"
				>Baca-Quran.id: Stories,
			</a>
			mini web stories yang dipublikasikan oleh tim Baca-Quran.id
		</li>
		<li>
			<a class="underline" href="/kebijakan-privasi/">Kebijakan Privasi, </a>
			laman kebijakan privasi dari Baca-Quran.id
		</li>
		<li>
			<a class="underline" href="/ketentuan-layanan/">Ketentuan Layanan, </a>
			laman syarat dan ketentuan layanan dari Baca-Quran.id
		</li>
		<li>
			<a
				class="underline"
				href="https://neosense.bgnlab.id/status/GKEnf4FhEZdY?timeframe=hourly"
				target="_blank"
				rel="noopener"
				>Status Uptime,
			</a>
			status dari kondisi server Baca-Quran.id
		</li>
	</ul>

	<p class="mb-2">Karya lain:</p>

	<ul class="list-decimal ml-6 mb-4">
		<li>
			<a class="underline" href="https://ksana.in/" target="_blank" rel="noopener">Ksana.in, </a>
			Pemendek tautan yang mudah dan gratis
		</li>
		<li>
			<a class="underline" href="https://www.tanyaaja.in/" target="_blank" rel="noopener"
				>TanyaAja.in,
			</a>
			Kumpulkan pertanyaan secara anonim dari siapa saja dengan mudah
		</li>
	</ul>
</article>
{/if}
