export type TahlilItem = {
	id: number;
	title: string;
	arabic: string;
	translation: string;
};

const source =
	'https://islam.nu.or.id/post/read/107344/susunan-bacaan-tahlil-doa-arwah-lengkap-dan-terjemahannya';
const basedOn = "Majmu' Syarif";
const tahlilData: TahlilItem[] = [
	{
		id: 2,
		title: 'Al-Fatihah',
		arabic:
			'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ . اَلْحَمْدُ لِلهِ رَبِّ الْعَالَمِيْنَ . اَلرَّحْمَنِ الرَّحِيْمِ. مَالِكِ يَوْمِ الدِّيْنِ . اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ . اِهْدِنَا الصِّرَاطَ الَّمُسْتَقِيْمَ . صِرَاطَ الَّذِ يْنَ اَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّالِّيْنَ . اَمِينْ',
		translation:
			'Aku berlindung kepada Allah dari setan yang terlontar. Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang maha pengasih lagi maha penyayang. Yang menguasai hari pembalasan. Hanya kepada-Mu kami menyembah. Hanya kepada-Mu pula kami memohon pertolongan. Tunjukkanlah kami ke jalan yang lurus, yaitu jalan orang-orang yang telah Kauanugerahi nikmat kepada mereka, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat. Semoga Kau kabulkan permohonan kami'
	},
	{
		id: 3,
		title: 'Surat Al-Ikhlas (3 kali)',
		arabic:
			'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ . قُلْ هُوَ اللهُ اَحَدٌ . اَللهُ الصَّمَدُ . لَمْ يَلِدْ وَلَمْ يُوْلَدْ . وَلَمْ يَكٌنْ لَهُ كُفُوًا اَحَدٌ',
		translation:
			'Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah, ‘Dialah yang maha esa. Allah adalah tuhan tempat bergantung oleh segala sesuatu. Dia tidak beranak dan tidak diperanakkan. Dan tidak ada seorangpun yang setara dengan-Nya’. (3 kali)'
	},
	{
		id: 4,
		title: 'Tahlil dan Takbir',
		arabic: 'لاَ اِلَهَ اِلاَّ اللهُ وَاللهُ اَكْبَرُ',
		translation: 'Tiada tuhan yang layak disembah kecuali Allah. Allah maha besar'
	},
	{
		id: 5,
		title: 'Surat Al-Falaq',
		arabic:
			'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِ. مِنْ شَرِّ مَا خَلَقَ. وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَ. وَمِنْ شَرِّ النَّفَاثاتِ فِى الْعُقَدِ. وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ',
		translation:
			'Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah, ‘Aku berlindung kepada tuhan yang menguasai waktu subuh dari kejahatan makhluk-Nya. Dari kejahatan malam apabila telah gelap gulita. Dan dari kejahatan wanita-wanita tukang sihir yang mengembus nafasnya pada buhul-buhul. Dan dari kejahatan orang-orang yang dengki apabila ia mendengki.’'
	},
	{
		id: 6,
		title: 'Tahlil dan Takbir',
		arabic: 'لاَ اِلَهَ اِلاَّ اللهُ وَاللهُ اَكْبَرُ',
		translation: 'Tiada tuhan yang layak disembah kecuali Allah. Allah maha besar'
	},
	{
		id: 7,
		title: 'Surat An-Nas',
		arabic:
			'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. قُلْ اَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. اِلَهِ النَّاسِ. مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِى يُوَسْوِسُ فِى صُدُوْرِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ',
		translation:
			'Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Katakanlah, ‘Aku berlindung kepada tuhan manusia, raja manusia. Sesembahan manusia, dari kejahatan bisikan setan yang biasa bersembunyi. Yang membisikkan kejahatan ke dalam dada manusia. Dari setan dan manusia.’'
	},
	{
		id: 8,
		title: 'Tahlil dan Takbir',
		arabic: 'لاَ اِلَهَ اِلاَّ اللهُ وَاللهُ اَكْبَرُ',
		translation: 'Tiada tuhan yang layak disembah kecuali Allah. Allah maha besar'
	},
	{
		id: 9,
		title: 'Al-Fatihah',
		arabic:
			'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ . اَلْحَمْدُ لِلهِ رَبِّ الْعَالَمِيْنَ . اَلرَّحْمَنِ الرَّحِيْمِ. مَالِكِ يَوْمِ الدِّيْنِ . اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُ . اِهْدِنَا الصِّرَاطَ الَّمُسْتَقِيْمَ . صِرَاطَ الَّذِ يْنَ اَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّالِّيْنَ . اَمِينْ',
		translation:
			'Aku berlindung kepada Allah dari setan yang terlontar. Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang maha pengasih lagi maha penyayang. Yang menguasai hari pembalasan. Hanya kepada-Mu kami menyembah. Hanya kepada-Mu pula kami memohon pertolongan. Tunjukkanlah kami ke jalan yang lurus, yaitu jalan orang-orang yang telah Kauanugerahi nikmat kepada mereka, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat. Semoga Kau kabulkan permohonan kami'
	},
	{
		id: 10,
		title: 'Awal Surat Al-Baqarah',
		arabic:
			'بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ. المّ. ذَلِكَ الكِتابُ لاَرَيْبَ فِيْهِ هُدَى لِلْمُتَّقِيْنَ. الَّذِيْنَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيْمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ. وَالَّذِيْنَ يُؤْمِنُونَ بِمَا اُنْزِلَ اِلَيْكَ وَمَا اُنْزِلَ مِن قَبْلِكَ وَبِالْاَخِرَةِ هُمْ يُوقِنُونَ. اُولَئِكَ عَلَى هُدًى مِّن رَّبِّهِمْ، وَاُولَئِكَ هُمُ الْمُفْلِحُونَ',
		translation:
			'Dengan menyebut nama Allah yang maha pengasih lagi maha penyayang. Alif lam mim. Demikian itu kitab ini tidak ada keraguan padanya. Sebagai petunjuk bagi mereka yang bertakwa. Yaitu mereka yang beriman kepada yang ghaib, yang mendirikan shalat, dan menafkahkan sebagian rezeki yang kami anugerahkan kepada mereka. Dan mereka yang beriman kepada kitab Al-Qur’an yang telah diturunkan kepadamu (Muhammad SAW) dan kitab-kitab yang telah diturunkan sebelumnya, serta mereka yakin akan adanya kehidupan akhirat. Mereka itulah yang tetap mendapat petunjuk dari tuhannya. Merekalah orang orang yang beruntung'
	},
	{
		id: 11,
		title: 'Surat Al-Baqarah ayat 163',
		arabic: 'وَاِلَهُكُمْ اِلَهٌ وَّاحِدٌ لاَ اِلَهَ اِلاَّ هُوَ الرَّحْمَنُ الرَّحِيمُ',
		translation:
			'Dan Tuhan kalian adalah Tuhan yang maha esa. Tiada tuhan yang layak disembah kecuali Dia yang maha pengasih lagi maha penyayang'
	},
	{
		id: 12,
		title: 'Ayat Kursi (Surat Al-Baqarah ayat 255)',
		arabic:
			'اللهُ لاَ اِلَهَ اِلاَّ هُوَ الْحَىُّ الْقَيُّومُ، لاَ تَاْ خُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَّهُ مَا فِى السَّمَوَاتِ وَمَا فِى الْاَرْضِ، مَنْ ذَا الَّذِى يَشْفَعُ عِنْدَهُ اِلاَّ بِاِذْنِهِ، يَعْلَمُ مَا بَينَ اَيْدِيْهِمِ وَمَا خَلْفَهُمْ، وَلاَ يُحْيِطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ اِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالْاَرْضَ، وَلاَ يَئُودُهُ حِفْظُهُمُا، وَهُوَ الْعَلِىُّ الْعَظِيْمُ',
		translation:
			'Allah, tiada yang layak disembah kecuali Dia yang hidup kekal lagi berdiri sendiri. Tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tiada yang dapat memberikan syafa’at di sisi-Nya kecuali dengan izin-Nya. Dia mengetahui apa yang ada di hadapan dan di belakang mereka. Mereka tidak mengetahui sesuatu dari ilmu-Nya kecuali apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat menjaga keduanya. Dia maha tinggi lagi maha agung'
	},
	{
		id: 13,
		title: 'Surat Al-Baqarah ayat 284-286',
		arabic:
			'لِلَّهِ مَا فِى السَّمَوَاتِ وَمَا فِى الْاَرْضِ. وَاِنْ تُبْدُوْا مَا فِى اَنْفُسِكُمْ اَوْ تَخْفُوْهُ يُحَاسِبْكُمْ بِهِ اللهُ. فَيَغْفِرُ لَمِنْ يَّشَاءُ وَيُعْذِّبُ مَنْ يَّشَاءُ. وَاللهُ عَلَى كُلِّ شَىْءٍ قَدِيْرٌ. اَمَنَ الرَّسُوْلُ بِمَا اُنْزِلَ اِلَيْهِ مِنْ رَّبِّهِ وَالْمُؤْمِنُوْنَ. كُلٌّ اَمَنَ بِاللهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ. لَانًفَرِّقُ بَيْنَ اَحَدٍ مِّنْ رُّسُلِهِ. وَقَالُوْا سَمِعْنَا وَاَطَعْنَا غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ الْمَصِيْرُ. لَا يُكَلِّفُ اللهُ نَفْسًا اِلَّا وُسْعَهَا. لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكَتْسَبَتْ. رَبَّنَا لَا تُؤَاخِذْنَا اِنْ نَسِيْنَا اَوْ اَخْطَاْنَا. رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا اِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِيْنَ مِنْ قَبْلِنَا. رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ. وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا اَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِيْنَ',
		translation:
			'Hanya milik Allah segala yang ada di langit dan yang ada di bumi. Jika kamu menyatakan atau merahasiakan apa saja yang di hatimu, maka kamu dengan itu semua tetap akan diperhitungkan oleh Allah. Dia akan mengampuni dan menyiksa orang yang dikehendaki. Allah maha kuasa atas segala sesuatu. Rasulullah dan orang-orang yang beriman mempercayai apa saja yang diturunkan kepadanya dari Tuhannya. Semuanya beriman kepada Allah, para malaikat-Nya, kitab-kitab-Nya, dan kepada para utusan-Nya. ‘Kami tidak membeda-bedakan seorang rasul dari lainnya.’ Mereka berkata, ‘Kami mendengar dan kami menaati. Ampunan-Mu, wahai Tuhan kami, yang kami harapkan. Hanya kepada-Mu tempat kembali.’ Allah tidak membebani seseorang kecuali dengan kemampuannya. Ia mendapat balasan atas apa yang dia perbuat dan siksaan dari apa yang dia lakukan. ‘Tuhan kami, janganlah Kau siksa kami jika kami terlupa atau salah. Tuhan kami, jangan Kau tanggungkan pada kami dengan beban berat sebagaimana Kaubebankan kaum sebelum kami. Jangan pula Kaubebankan pada kami sesuatu yang kami tidak mampu. Ampunilah kami. Kasihanilah kami. Kau pemimpin kami. Tolonglah kami menghadapi golongan kafir'
	}
];

export default {
	source,
	basedOn,
	data: tahlilData
};
