<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import { META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';
	import InformationCircleIcon from '$lib/icons/InformationCircleIcon.svelte';
	import ShieldCheckIcon from '$lib/icons/ShieldCheckIcon.svelte';
const current = $derived(languageStore) ;


</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}ketentuan-layanan`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">
		🤝 {$current === LANGUAGE_OPTIONS.ENGLISH.locale ? 'Terms of Service' : 'Ketentuan Layanan'}
	</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{
				text: $current === LANGUAGE_OPTIONS.ENGLISH.locale ? '🏠 Home' : '🏠 Beranda',
				href: '/'
			}
		]}
	/>
</div>

{#if $current === LANGUAGE_OPTIONS.ENGLISH.locale}
<article class="px-4">
	<div class="flex gap-2 mb-4">
		<a
			href="/kebijakan-privasi/"
			class="flex items-center gap-2 cursor-pointer p-2 rounded-md bg-secondary"
		>
			<ShieldCheckIcon />
			Privacy Policy</a
		>
		<a
			href="/ketentuan-layanan/"
			class="flex items-center gap-2 cursor-pointer p-2 rounded-md bg-secondary"
		>
			<InformationCircleIcon />
			Terms of Service</a
		>
	</div>

	<section class="mb-4">
		<p class="mb-4">
			Thank you for using Baca-Quran.id. These terms of service are a binding agreement and govern your use of Baca-Quran.id and access to the Baca-Quran.id website. By using any Baca-Quran.id services, or accessing any of our websites, you agree to be bound by the following terms of service.
		</p>

		<p class="mb-4">
			If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity, its affiliates, and all users who access our services through your account. In such case, the terms "you" or "your" refer to the company or legal entity and users associated with it. If you do not have such authority, do not agree to these terms and conditions on behalf of a company or other legal entity.
		</p>

		<p class="mb-4">
			If you do not agree to these terms of service, <b>do not accept the terms, and do not use the services.</b>
		</p>

		<p class="mb-4">
			We reserve the right to update and change the terms of service from time to time without notice. Any new features that augment or enhance the current services, including the release of new tools and resources, shall be subject to the terms of service. Continued use of the service after any such changes shall constitute your consent to such changes. You can review the most current version of the terms of service at any time here.
		</p>

		<p class="mb-4">
			Violation of any of the terms below will result in the termination of your account. While we prohibit certain conduct and content on the service, you understand and agree that we cannot be responsible for the content posted on the service and you may be exposed to such materials. You agree to use the service at your own risk.
		</p>
	</section>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">🔹 Privacy Terms</h2>
		<p>
			We respect your privacy. A complete statement of our <a
				href="/kebijakan-privasi/"
				class="underline">privacy policy</a> can be found on the privacy policy page. Our privacy policy is expressly incorporated into this agreement by reference.
		</p>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">🔹 Account Requirements</h2>
		<div>
			<p class="mb-4">To use this service, you must:</p>
			<ol class="list-disc ml-6">
				<li class="mb-4">
					Be 11 years of age or older and be a human. Accounts registered by "bots" or other automated methods are not permitted. Provide your official full name, a valid email address, and any other information requested to complete the registration process.
				</li>
				<li class="mb-4">
					You are responsible for maintaining the security of your account and password.
				</li>
				<li class="mb-4">
					We cannot and will not be liable for any loss or damage from your failure to comply with this security obligation. Your login may only be used by one person – a single login shared by multiple people is not permitted. You may create separate logins for as many people as your plan allows.
				</li>
				<li class="mb-4">
					You are responsible for all content posted and activity that occurs under your account (even when content is posted by others who have accounts under your account).
				</li>
				<li class="mb-4">
					You may not use the service for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction (including but not limited to copyright or trademark laws).
				</li>
			</ol>
		</div>
	</CardShadow>

	<CardShadow class="mb-4">
		<h2 class="mb-2 text-xl font-bold">🔹 Copyright and Content Ownership</h2>
		<div>
			<ol class="list-disc ml-6">
				<li class="mb-4">
					We claim no intellectual property rights over the material you provide to the service. Your profile and materials uploaded remain yours. However, if you set your content to be viewed publicly, you agree to allow others to view your content.
				</li>
				<li class="mb-4">
					We do not pre-screen content, but we have the right (but not the obligation) in our sole discretion to refuse or remove any content that is available via the service.
				</li>
			</ol>
		</div>
	</CardShadow>

	<p class="mb-4">
		Questions about our terms of service may be sent to mazipanneh@gmail.com
	</p>

	<p class="mb-4">
		<small><i>Last updated July 31, 2023</i></small>
	</p>
</article>
{:else}
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
{/if}
