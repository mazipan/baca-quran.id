<script lang="ts">
	import Breadcrumb from '$lib/Breadcrumb.svelte';
	import CardShadow from '$lib/CardShadow.svelte';
	import MetaTag from '$lib/MetaTag.svelte';
	import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';
	import { META_DESC, META_TITLE, TITLE_CONSTANTS } from '$lib/constants';
	import InformationCircleIcon from '$lib/icons/InformationCircleIcon.svelte';
	import ShieldCheckIcon from '$lib/icons/ShieldCheckIcon.svelte';
	const current = $derived(languageStore);
</script>

<svelte:head>
	<MetaTag title={META_TITLE} desc={META_DESC} url={`${TITLE_CONSTANTS.PATH}kebijakan-privasi`} />
</svelte:head>

<div class="flex gap-2 px-4 mb-4">
	<h1 class="text-3xl font-bold">
		{$current == LANGUAGE_OPTIONS.ENGLISH.locale ? '🤝 Privacy Policy' : '🤝 Kebijakan Privasi'}
	</h1>
</div>

<div class="px-4 mb-4">
	<Breadcrumb
		items={[
			{
				text: $current == LANGUAGE_OPTIONS.ENGLISH.locale ? '🏠 Home' : '🏠 Beranda',
				href: '/'
			}
		]}
	/>
</div>

{#if $current == LANGUAGE_OPTIONS.ENGLISH.locale}
	<article class="px-4">
		<div class="flex gap-2 mb-4">
			<a
				href="/kebijakan-privasi/"
				class="flex items-center gap-2 cursor-pointer p-2 rounded-md bg-secondary"
			>
				<ShieldCheckIcon />
				Privacy Policy
			</a>
			<a
				href="/ketentuan-layanan/"
				class="flex items-center gap-2 cursor-pointer p-2 rounded-md bg-secondary"
			>
				<InformationCircleIcon />
				Terms of Service
			</a>
		</div>

		<p class="mb-4">
			At Baca-Quran.id, we recognize that you expect privacy and security regarding information that
			personally identifies you and allows you to be individually contacted ("Personal
			Information"). We have adopted the following online privacy policy because we understand the
			need to protect the information you may provide to us on our website.
		</p>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Why Baca-Quran.id asks for information about you</h2>
			<p>
				Baca-Quran.id collects and stores Personal Information about you only when you have
				communicated with us via email (we will collect your email address), when you register to
				use Baca-Quran.id services (we will ask for your name and email address), and when you sign
				up for paid services (we will request general information such as your name, email address,
				billing address, and credit card information). We use this information to transact business
				with you and provide requested services from time to time, as well as for service
				improvements, contact, and research.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 How Baca-Quran.id protects your information</h2>
			<p>
				The information we receive from you is protected from unauthorized access after we receive
				it. We restrict access to your information only to employees who have a business reason to
				access it. When collecting financial information from you, we use secure socket layer (SSL)
				software. Despite our ongoing and evolving efforts to protect your personal information, we
				cannot guarantee the security of your Personal Information. You acknowledge and agree that
				we do not provide such a guarantee.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Data storage</h2>
			<p>
				We do not use third-party vendors and hosting partners to provide the hardware, software,
				networking, storage, and related technology required to run Baca-Quran.id. We own the code,
				databases, and all rights to the Baca-Quran.id application, and you retain all rights to
				your data.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Use of Cookies</h2>
			<p>
				We use cookies. Cookies are small pieces of information stored by your browser on your
				computer's hard drive. We use cookies so that our website can remember you and provide the
				content you are most likely to request. We also use cookies to collect statistical
				information about our website, such as the time users spend on a site and the pages they
				visit most often. Such statistics do not contain Personal Information. We will also use
				cookies for advertising and remarketing purposes.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Links to other websites</h2>
			<p>
				Our website may contain links to and from other websites. Some links may be in the form of
				display advertisements. We cannot guarantee that websites other than our own will respect
				and protect your Personal Information as we do. For your own protection, you should visit
				and read the privacy statements/policies of other websites when you visit them. We are not
				responsible for the content of websites other than our own.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Your consent</h2>
			<p>
				When you provide us with Personal Information, you consent to the collection and use of this
				information by Baca-Quran.id.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Disclosure</h2>
			<p>
				We will not sell or distribute your Personal Information except to provide products or
				services you request, if we have permission, or as required to share information to
				investigate, prevent, or take action regarding illegal activities, suspected fraud,
				situations involving potential threats to the physical safety of any person, violations of
				the Terms of Service, or as required by law.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Business Transfers</h2>
			<p>
				If Baca-Quran.id, or substantially all of its assets are acquired, or in the unlikely event
				that we go out of business or enter bankruptcy, Personal Information would be one of the
				assets transferred or acquired by a third party. You acknowledge that such transfers may
				occur, and that any acquirer of Baca-Quran.id may continue to use Personal Information as
				set forth in this policy.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Changes</h2>
			<p>
				We may update this policy from time to time. We will notify you about significant changes in
				the way we treat personal information by sending a notice to the primary email address
				specified in your main Baca-Quran.id account or by placing a prominent notice on our site.
			</p>
		</CardShadow>

		<p class="mb-4">Questions about our privacy policy may be directed to mazipanneh@gmail.com</p>

		<p class="mb-4">
			<small><i>Last updated on July 31, 2023</i></small>
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
				Kebijakan Privasi
			</a>
			<a
				href="/ketentuan-layanan/"
				class="flex items-center gap-2 cursor-pointer p-2 rounded-md bg-secondary"
			>
				<InformationCircleIcon />
				Ketentuan Layanan
			</a>
		</div>

		<p class="mb-4">
			Kami di Baca-Quran.id menyadari bahwa Anda mengharapkan privasi dan keamanan dalam hal
			informasi yang mengidentifikasi Anda secara pribadi dan memungkinkan Anda untuk dihubungi
			secara individu ("Informasi Pribadi"). Kami mengadopsi kebijakan privasi online berikut karena
			kami memahami kebutuhan untuk melindungi informasi yang mungkin Anda berikan kepada kami di
			situs web kami.
		</p>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">
				🔹 Mengapa Baca-Quran.id meminta informasi tentang Anda
			</h2>
			<p>
				Baca-Quran.id mengumpulkan dan menyimpan Informasi Pribadi tentang Anda hanya ketika Anda
				telah berkomunikasi dengan kami melalui email (kami akan mengumpulkan alamat email Anda),
				ketika Anda mendaftar untuk menggunakan layanan Baca-Quran.id (kami akan menanyakan nama dan
				alamat email Anda), dan saat Anda mendaftar untuk layanan berbayar (kami akan meminta
				informasi umum seperti nama, alamat email, alamat penagihan, dan informasi kartu kredit
				Anda). Kami menggunakan informasi tersebut untuk bertransaksi bisnis dengan Anda dan
				memberikan layanan yang diminta dari waktu ke waktu, serta peningkatan layanan, kontak, dan
				penelitian.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Bagaimana Baca-Quran.id melindungi informasi Anda</h2>
			<p>
				Informasi yang kami terima dari Anda dilindungi dari akses tidak sah setelah kami
				menerimanya. Kami membatasi akses ke informasi Anda hanya untuk karyawan yang memiliki
				alasan bisnis untuk mengaksesnya. Saat mengumpulkan informasi keuangan dari Anda, kami
				menggunakan perangkat lunak lapisan soket aman (SSL). Terlepas dari upaya kami yang terus
				menerus dan berkembang untuk melindungi informasi pribadi Anda, kami tidak dapat menjamin
				keamanan Informasi Pribadi Anda. Anda mengakui dan setuju bahwa kami tidak memberikan
				jaminan seperti itu.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Penyimpanan data</h2>
			<p>
				Kami tidak menggunakan vendor pihak ketiga dan mitra hosting untuk menyediakan perangkat
				keras, perangkat lunak, jaringan, penyimpanan, dan teknologi terkait yang diperlukan untuk
				menjalankan Baca-Quran.id. Kami memiliki kode, database, dan semua hak atas aplikasi
				Baca-Quran.id, Anda memegang semua hak atas data Anda.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Pengunaan Cookies</h2>
			<p>
				Kami menggunakan cookie. Cookies adalah bagian kecil dari informasi yang disimpan oleh
				browser Anda di hard drive komputer Anda. Kami menggunakan cookie sehingga situs web kami
				dapat mengingat Anda dan menyediakan konten yang paling mungkin Anda minta. Kami juga
				menggunakan cookie untuk mengumpulkan informasi statistik tentang situs web kami, seperti
				waktu yang dihabiskan pengguna di suatu situs dan halaman yang paling sering mereka
				kunjungi. Statistik tersebut tidak mengandung Informasi Pribadi. Kami juga akan menggunakan
				cookie untuk tujuan periklanan dan pemasaran ulang.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Tautan ke situs web lain</h2>
			<p>
				Situs web kami mungkin berisi tautan ke dan dari situs web lain. Beberapa tautan mungkin
				dalam bentuk iklan tampilan. Kami tidak dapat menjamin bahwa situs web selain situs web kami
				akan menghormati dan melindungi Informasi Pribadi Anda seperti yang kami lakukan. Untuk
				perlindungan Anda sendiri, Anda harus mengunjungi dan membaca pernyataan / kebijakan privasi
				situs web lain saat Anda mengunjunginya. Kami tidak bertanggung jawab atas konten situs web
				selain situs web kami.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Persetujuan Anda</h2>
			<p>
				Ketika Anda memberikan Informasi Pribadi kepada kami, Anda menyetujui pengumpulan dan
				penggunaan informasi ini oleh Baca-Quran.id.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Penyingkapan</h2>
			<p>
				Kami tidak akan menjual atau mendistribusikan Informasi Pribadi Anda kecuali untuk
				menyediakan produk atau layanan yang Anda minta, jika kami memiliki izin, atau diperlukan
				untuk berbagi informasi untuk menyelidiki, mencegah, atau mengambil tindakan terkait
				aktivitas ilegal, dugaan penipuan, situasi yang melibatkan potensi ancaman terhadap keamanan
				fisik siapa pun, pelanggaran Persyaratan Layanan, atau sebagaimana diwajibkan oleh hukum.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Transfer Bisnis</h2>
			<p>
				Jika Baca-Quran.id, atau secara substansial semua asetnya diakuisisi, atau dalam hal yang
				tidak mungkin terjadi ketika kami keluar dari bisnis atau dinyatakan pailit, Informasi
				Pribadi akan menjadi salah satu aset yang dialihkan atau diakuisisi oleh pihak ketiga. Anda
				mengakui bahwa transfer tersebut dapat terjadi, dan bahwa setiap pihak yang mengakuisisi
				Baca-Quran.id dapat terus menggunakan Informasi Pribadi sebagaimana diatur dalam kebijakan
				ini.
			</p>
		</CardShadow>

		<CardShadow class="mb-4">
			<h2 class="mb-2 text-xl font-bold">🔹 Perubahan</h2>
			<p>
				Kami mungkin memperbarui kebijakan ini secara berkala. Kami akan memberi tahu Anda tentang
				perubahan signifikan dalam cara kami memperlakukan informasi pribadi dengan mengirimkan
				pemberitahuan ke alamat email utama yang ditentukan di akun pemegang akun utama
				Baca-Quran.id Anda atau dengan menempatkan pemberitahuan yang mencolok di situs kami.
			</p>
		</CardShadow>

		<p class="mb-4">
			Pertanyaan tentang kebijakan privasi kami dapat ditujukan ke mazipanneh@gmail.com
		</p>

		<p class="mb-4">
			<small><i>Terakhir diperbarui pada 31 Juli 2023</i></small>
		</p>
	</article>
{/if}
