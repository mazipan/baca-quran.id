<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import { META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';
	import InformationCircleIcon from '$lib/icons/InformationCircleIcon.svelte';
	import ShieldCheckIcon from '$lib/icons/ShieldCheckIcon.svelte';
</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}ketentuan-layanan`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">🤝 Ketentuan Layanan</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb items={[{ text: '🏠 Beranda', href: '/' }]} />
</div>

<article class="px-4">
	<div class="flex gap-2 mb-4">
		<a
			href="/kebijakan-privasi/"
			class="flex items-center gap-2 cursor-pointer p-2 rounded-md bg-secondary"
		>
			<ShieldCheckIcon />
			Kebijakan Privasi</a
		>
		<a
			href="/ketentuan-layanan/"
			class="flex items-center gap-2 cursor-pointer p-2 rounded-md bg-secondary"
		>
			<InformationCircleIcon />
			Ketentuan Layanan</a
		>
	</div>

	<section class="mb-4">
		<p class="mb-4">
			Terima kasih telah menggunakan Baca-Quran.id. Persyaratan layanan ini merupakan perjanjian
			yang mengikat dan mengatur penggunaan Anda atas Baca-Quran.id dan akses ke situs web
			Baca-Quran.id. Dengan menggunakan salah satu layanan Baca-Quran.id, atau mengakses salah satu
			situs web kami, Anda setuju untuk terikat oleh persyaratan layanan berikut.
		</p>

		<p class="mb-4">
			Jika Anda memasuki perjanjian ini atas nama perusahaan atau badan hukum lainnya, Anda
			menyatakan bahwa Anda memiliki kewenangan untuk mengikat entitas tersebut, afiliasinya, semua
			pengguna yang mengakses layanan kami melalui akun Anda. Dalam kasus tersebut, istilah "Anda"
			atau "milik Anda" merujuk pada perusahaan atau entitas hukum, dan pengguna yang terkait
			dengannya. Jika Anda tidak memiliki kewenangan, jangan setuju dengan syarat dan ketentuan ini
			atas nama perusahaan atau badan hukum lainnya.
		</p>

		<p class="mb-4">
			Jika Anda tidak setuju dengan persyaratan layanan ini, <b
				>jangan terima persyaratannya, dan jangan gunakan layanannya.</b
			>
		</p>

		<p class="mb-4">
			Kami berhak memperbarui dan mengubah persyaratan layanan dari waktu ke waktu tanpa
			pemberitahuan sebelumnya. Setiap fitur baru yang menambah atau meningkatkan layanan saat ini,
			termasuk rilis alat dan sumber daya baru, harus tunduk pada persyaratan layanan. Penggunaan
			berkelanjutan atas layanan setelah perubahan tersebut merupakan persetujuan Anda untuk
			perubahan tersebut. Anda dapat meninjau versi terbaru dari persyaratan layanan kapan saja di
			sini.
		</p>

		<p class="mb-4">
			Pelanggaran salah satu persyaratan di bawah ini akan mengakibatkan penghentian akun Anda.
			Meskipun kami melarang perilaku dan konten tertentu di layanan, Anda memahami dan setuju bahwa
			kami tidak dapat bertanggung jawab atas konten yang diposting di layanan dan Anda mungkin akan
			melihat materi tersebut. Anda setuju untuk menggunakan layanan dengan risiko Anda sendiri.
		</p>
	</section>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">🔹 Ketentuan Privasi</h2>
		<p>
			Kami menghormati privasi Anda. Pernyataan lengkap tentang <a
				href="/kebijakan-privasi/"
				class="underline">kebijakan privasi</a
			> kami dapat ditemukan di halaman kebijakan privasi. Kebijakan privasi kami secara tegas dimasukkan
			sebagai referensi ke dalam perjanjian ini.
		</p>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">🔹 Persyaratan Akun</h2>
		<div>
			<p class="mb-4">Untuk menggunakan layanan ini, Anda harus:</p>
			<ol class="list-disc ml-6">
				<li class="mb-4">
					Berusia 11 tahun atau lebih dan jadilah manusia. Akun yang didaftarkan oleh "bot" atau
					metode otomatis lainnya tidak diizinkan. berikan nama lengkap resmi Anda, alamat email
					yang valid, dan informasi lainnya yang diminta untuk menyelesaikan proses pendaftaran.
				</li>
				<li class="mb-4">
					Anda bertanggung jawab untuk menjaga keamanan akun dan kata sandi Anda.
				</li>
				<li class="mb-4">
					Kami tidak dapat dan tidak akan bertanggung jawab atas kehilangan atau kerusakan akibat
					kegagalan Anda untuk mematuhi kewajiban keamanan ini. Login Anda hanya dapat digunakan
					oleh satu orang - satu login yang digunakan bersama oleh banyak orang tidak diizinkan.
					Anda dapat membuat login terpisah untuk sebanyak mungkin orang sesuai rencana Anda.
				</li>
				<li class="mb-4">
					Anda bertanggung jawab atas semua konten yang diposting dan aktivitas yang terjadi di
					bawah akun Anda (bahkan ketika konten diposting oleh orang lain yang memiliki akun di
					bawah akun Anda).
				</li>
				<li class="mb-4">
					Anda tidak boleh menggunakan layanan untuk tujuan ilegal atau tidak sah. Anda tidak boleh,
					dalam penggunaan layanan, melanggar hukum apa pun di yurisdiksi Anda (termasuk namun tidak
					terbatas pada undang-undang hak cipta atau merek dagang)
				</li>
			</ol>
		</div>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">🔹 Hak Cipta dan Kepemilikan Konten</h2>
		<div>
			<ol class="list-disc ml-6">
				<li class="mb-4">
					Kami tidak mengklaim hak kekayaan intelektual atas materi yang Anda berikan ke layanan.
					Profil dan materi yang Anda unggah tetap menjadi milik Anda. Namun, jika Anda mengatur
					konten Anda untuk dilihat secara publik, Anda setuju untuk mengizinkan orang lain untuk
					melihat konten Anda.
				</li>
				<li class="mb-4">
					Kami tidak menyaring konten, tetapi kami memiliki hak (tetapi bukan kewajiban) atas
					kebijakan kami sendiri untuk menolak atau menghapus konten apa pun yang tersedia melalui
					layanan.
				</li>
			</ol>
		</div>
	</CardShadow>

	<p class="mb-4">
		Pertanyaan tentang ketentuan layanan kami dapat ditujukan ke mazipanneh@gmail.com
	</p>

	<p class="mb-4">
		<small><i>Terakhir diperbarui pada 31 Juli 2023</i></small>
	</p>
</article>
