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
		id: 1,
		title: 'Pengantar Al-Fatihah',
		arabic:
			'اِلَى حَضْرَةِ النَّبِيِّ صَلَّى اللهُ عَلَيهِ وَسَلَّمَ وَاَلِهِ وصَحْبِهِ شَيْءٌ لِلهِ لَهُمُ الْفَاتِحَةُ',
		translation:
			'Dengan nama Allah yang maha pengasih lagi maha penyayang. Untuk yang terhormat Nabi Muhammad SAW, segenap keluarga, dan para sahabatnya. Bacaan Al-Fatihah ini kami tujukan kepada Allah dan pahalanya untuk mereka semua. Al-Fatihah…'
	},
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
	},
	{
		id: 14,
		title: 'Surat Hud ayat 73 (3 kali)',
		arabic: 'ارْحَمْنَا، يَا اَرْحَمَ الرَّاحِمِيْنَ',
		translation: 'Kasihani kami, wahai Tuhan yang maha kasih. (3 kali)'
	},
	{
		id: 15,
		title: 'Surat Hud ayat 73',
		arabic: 'رَحْمَتُ اللهِ وَبَرَكَاتُهُ عَلَيْكُمْ اَهْلَ الْبَيْتِ اِنَّهُ حَمِيْدٌ مَّجِيْدٌ',
		translation:
			'Dan rahmat Allah serta berkah-Nya (kami harapkan) melimpah di atas kamu sekalian wahai ahlul bait. Sungguh Dia maha terpuji lagi maha pemurah'
	},
	{
		id: 16,
		title: 'Surat Al-Ahzab ayat 33',
		arabic:
			'اِنَّمَا يُريِدُ اللهُ لِيُذْهِبَ عَنْكُمُ الرِّجْسَ اَهْلَ الْبَيْتِ وَيُطَهِّرَكُمْ تَطْهِيْرًا',
		translation:
			'Sungguh Allah berkehendak menghilangkan segala kotoran padamu, wahai ahlul bait, dan menyucikanmu sebersih-bersihnya'
	},
	{
		id: 17,
		title: 'Surat Al-Ahzab ayat 56',
		arabic:
			'اِنَّ اللهَ وَمَلاَئِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ، يَا أَيُّهَا الَّذِيْنَ آمَنُوْا صَلُّوْا عَلَيْهِ وَسَلِّمُوا تَسْلِيْمًا',
		translation:
			'Sungguh Allah dan para malaikat-Nya bershalawat untuk nabi. Wahai orang-orang yang beriman, bacalah shalawat untuknya dan ucapkanlah salam penghormatan kepadanya'
	},
	{
		id: 18,
		title: 'Shalawat Nabi (3 kali)',
		arabic:
			'اَلَّلهُمَّ صَلِّ أَفْضَلَ صَلَاةٍ عَلَى أَسْعَدِ مَخْلُوْقَاتِكَ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اَلِهِ وَصَحْبِهِ وَسَلِّمْ، عَدَدَ مَعْلُوْمَاتِكَ وَمِدَادَ كَلِمَاتِكَ كُلَّمَا ذَكَرَكَ الذَّاكِرُوْنَ وَغَفَلَ عَنْ ذِكْرِكَ الْغَافِلُوْنَ',
		translation:
			'Ya Allah, tambahkanlah rahmat dan kesejahteraan untuk pemimpin dan tuan kami Nabi Muhammad SAW, serta keluarganya, sebanyak pengetahuan-Mu dan sebanyak tinta kalimat-kalimat-Mu pada saat zikir orang-orang yang ingat dan pada saat lengah orang-orang yang lalai berzikir kepada-Mu'
	},
	{
		id: 19,
		title: 'Salam Nabi',
		arabic:
			'وَسَلِّمْ وَرَضِيَ اللهُ تَعَالَى عَنْ اَصْحَابِ سَيِّدِنَا رَسُوْلِ اللهِ اَجْمَعِيْنَ',
		translation:
			'Semoga Allah yang maha suci dan tinggi meridhai para sahabat dari pemimpin kami (Rasulullah)'
	},
	{
		id: 20,
		title: 'Surat Ali Imran ayat 173 dan Surat Al-Anfal ayat 40',
		arabic: 'حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيْلُ. نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرُ',
		translation:
			'Cukup Allah bagi kami. Dia sebaik-baik wakil. (Surat Ali Imran ayat 173). Dia sebaik-baik pemimpin dan penolong,” (Surat Al-Anfal ayat 40)'
	},
	{
		id: 21,
		title: 'Hauqalah',
		arabic: 'وَلَاحَوْلَ وَلَا قُوَّةَ اِلَّا بِاللهِ العَلِيِّ الْعَظِيْمِ',
		translation:
			'Tidak ada daya dan kekuatan kecuali dengan pertolongan Allah yang maha tinggi dan agung'
	},
	{
		id: 22,
		title: 'Istighfar (3 kali)',
		arabic: 'اَسْتَغْفِرُاللهَ الْعَظِيْمَ',
		translation:
			'Saya mohon ampun kepada Allah yang maha agung.” (3 kali). (Allah) yang tiada tuhan selain Dia yang maha hidup, lagi terjaga. Aku bertobat kepada-Nya'
	},
	{
		id: 23,
		title: 'Hadits Keutamaan Tahlil',
		arabic:
			'الَّذِيْ لَا اِلَهَ اِلَّا هُوَ الحَيُّ القَيُّوْمُ وَأَتُوْبُ إِلَيْهِ، اَفْضَلُ الذِّكْرِ فَاعْلَمْ اَنَّهُ لَااِلَهَ اِلَّا اللهُ، حَيٌّ مَوْجُوْدٌ',
		translation:
			'Sebaik-baik zikir–ketahuilah–adalah lafal ‘La ilāha illallāh’, tiada tuhan selain Allah, zat yang hidup dan ujud'
	},
	{
		id: 24,
		title: 'Hadits Keutamaan Tahlil',
		arabic: 'لَااِلَهَ اِلَّا اللهُ، حَيٌّ مَعْبُوْدٌ',
		translation: 'Tiada tuhan selain Allah, zat yang hidup dan disembah'
	},
	{
		id: 25,
		title: 'Hadits Keutamaan Tahlil',
		arabic: 'لَااِلَهَ اِلَّا اللهُ، حَىٌّ بَاقٍ الَّذِيْ لَا يَمُوْتُ',
		translation: 'Tiada tuhan selain Allah, zat kekal yang takkan mati'
	},
	{
		id: 26,
		title: 'Tahlil 160 kali',
		arabic: 'لَااِلَهَ اِلَّا اللهُ',
		translation: 'Tiada tuhan selain Allah.” (160 kali)'
	},
	{
		id: 27,
		title: 'Dua Kalimat Syahadat',
		arabic: 'لَا اِلَهَ اِلَّا اللهُ مُحَمَّدٌ رَّسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ',
		translation: 'Tiada tuhan selain Allah. Nabi Muhammad SAW utusan-Nya'
	},
	{
		id: 28,
		title: 'Doa Tahlil',
		arabic:
			'الْحَمْدُ لِلهِ رَبِّ الْعَالَمِيْنَ حَمْدًا يُّوَافِى نِعَمَهُ وَيُكَافِىءُ مَزِيْدَهُ، يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِيْ لِجَلَالِ وَجْهِكَ وَعَظِيْمِ سُلْطَانِكَ، سُبْحَانَكَ لَا نُحْصِى ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ، فَلَكَ الحَمْدُ قَبْلَ الرِّضَى وَلَكَ الحَمْدُ بَعْدَ الرِّضَى وَلَكَ الحَمْدُ إِذَا رَضِيْتَ عَنَّا دَائِمًا أَبَدًا',
		translation:
			'Aku berlindung kepada Allah dari setan yang dilontar. Dengan nama Allah yang maha pengasih, lagi maha penyayang. Segala puji bagi Allah, Tuhan seru sekalian alam sebagai pujian orang yang bersyukur, pujian orang yang memperoleh nikmat sama memuji, pujian yang memadai nikmat-Nya, dan pujian yang memungkinkan tambahannya. Tuhan kami, hanya bagi-Mu segala puji sebagaimana pujian yang layak bagi kemuliaan dan keagungan kekuasaan-Mu. Maha suci Engkau, kami tidak (dapat) menghitung pujian atas diri-Mu sebagaimana Kaupuji diri sendiri. Hanya bagi-Mu pujian sebelum ridha. Hanya bagi-Mu pujian setelah ridha. Hanya bagi-Mu pujian ketika Kau meridhai kami selamanya'
	},
	{
		id: 29,
		title: 'Shalawat Zat Mukammalah',
		arabic:
			'اللَّهُمَّ صَلِّ علَى الذَّاتِ المُكَمَّلَةِ وَالرَّحْمَةِ المُنَزَّلَةِ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اَلِهِ وَصَحْبِهِ وَسَلِّمْ',
		translation:
			'Ya Allah, limpahkan shalawat dan salam untuk zat yang disempurnakan dan rahmat yang diturunkan, yaitu Nabi Muhammad SAW, keluarga, dan sahabatnya'
	},
	{
		id: 30,
		title: 'Shalawat Zat Mukammalah',
		arabic: 'وَصَلِّ اللَّهُمَّ عَلَيْهِ يَا ذَا البَهَاءِ وَالجَلَالِ بُكْرَةً وَأَصِيْلًا',
		translation:
			'Ya Allah, wahai zat yang indah dan agung, limpahkanlah shalawat kepada Nabi Muhammad SAW pada pagi dan sore hari'
	},
	{
		id: 31,
		title: 'Doa Kebaikan Lahir dan Batin',
		arabic:
			'اللَّهُمَّ كَمَا خَصَّصْتَنَا بِكِتَابِكَ الكَرِيْمِ وَهَدَيْتَنَا إِلَى صِرَاطكَ المُسْتَقِيْمِ، وأَصْلِحْ بِهِ مِنَّا جَمِيْعَ مَا فَسَدَ، وَطَهِّرْ بِهِ مِنَّا مَا ظَهَرَ وَمَا بَطَنَ',
		translation:
			'Ya Allah, sebagaimana Kaumuliakan kami dengan Kitab suci-Mu yang mulia dan Kautunjuki kami ke jalan yang lurus, maka berikanlah kemaslahatan untuk kami sebagai pengganti mafsadat dan sucikan kami dari kotoran yang tampak dan tersembunyi'
	},
	{
		id: 32,
		title: 'Doa Keberkahan Al-Qur‘an',
		arabic:
			'اللَّهُمَّ اشْرَحْ بِالقُرْآنِ صُدُوْرَنَا وَيَسِّرْ بِهِ أُمُوْرَنَا وَعَظِّمْ بِهِ أُجُوْرَنَا وَحَسِّنْ بِهِ أَخْلَاقَنَا وَوَسِّعْ بِهِ أَرْزَاقَنَا وَنَوِّرْ بِهِ قُبُوْرَنَا',
		translation:
			'Ya Allah, dengan Al-Qur’an lapangkanlah hati kami, mudahkan urusan kami, lipatgandakanlah pahala kami, perbaiki akhlak kami, luaskan rezeki kami, dan terangilah kubur kami'
	},
	{
		id: 33,
		title: 'Doa Wahbah untuk Para Sahabat Rasul dan Wali Allah',
		arabic:
			'اللَّهُمَّ اجْعَلْ ثَوَاَبَ مَا قَرَأْنَاهُ وَبَرَكَةَ مَا تَلَوْنَاهُ وَصَلَّيْنَاهُ عَلَى نَبِيِّكَ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَمَا هَلَلْنَا هَدِيَّةً بَالِغَةً وَرَحْمَةً مِنْكَ نَازِلَةً نُقَدِّمُهَا وَنُهْدِيْهَا اِلَى حَضَرَاتِ النَّبِيِّ الأَكْرَمِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، ثُمَّ اِلَى أَرْوَاحِ آبَائِهِ وَإِخْوَانِهِ مِنَ النَّبِيِّيْنَ وَالمُرْسَلِيْنَ وَإِلَى مَلَائِكَةِ اللهِ الْمُقَرَّبِيْنَ وَالكَرُّوْبِيِّيْنَ، وَاِلَى أَرْوَاحِ سَادَاتِنَا أَبِي بَكْرٍ وَعُمَرَ وَعُثْمَانَ وَعَلِيٍّ، وَإِلَى البَقِيَّةِ العَشْرَةِ المُبَشَّرَةِ بِالجَنَّةِ وَسَائِرِ الصَّحَابَةِ وَالقَرَابَةِ وَالتَّابِعِيْنَ وَإِلَى أَرْوَاحِ الحَسَنِ وَالحُسَيْنِ وَأُمِّهِمَا سَيِّدَتِنَا فَاطِمَةَ الزَّهْرَاءِ وَسَيِّدَتِنَا خَدِيْجَةَ الكُبْرَى وَسَيِّدِنَا حَمْزَةَ وَالعَبَّاسِ وَالشُّهَدَاءِ البَدْرِيِّيْنَ وَالأُحُدِيِّيْنَ وَإِلَى أَرْوَاحِ الخِضْرِ وَإِلْيَاسَ وَسَيِّدِنَا عَبْدِ اللهِ ابْنِ عَبَّاسٍ وَإِلَى أَرْوَاحِ الأَرْبَعَةِ الأَئِمَّةِ المُجْتَهِدِيْنَ وَمُقَلِّدِيْهِمْ فِي الدِّيْنِ وَإِلَى أَرْوَاحِ العُلَمَاءِ العَامِلِيْنَ وَالقُرَّاءِ وَأَئِمَّةِ الحَدِيْثِ وَالمُفَسِّرِيْنَ وَسَادَاتِنَا الصُّوْفِيَّةِ المُحَقِّقِيْنَ وَإِلَى رُوْحِ القُطْبِ الرَّبَّانِيِّ وَالعَارِفِ الصَّمَدَانِيِّ سَيِّدِيْ عَبْدِ القَادِرِ الجَيْلَانِيّ وَسَيِّدِيْ أَحْمَدَ البَدَوِيِّ وَسَيِّدِيْ أَحْمَدَ الرِّفَاعِيِّ وَسَيِّدِيْ إِبْرَاهِيْمَ الدَّسُوْقِيِّ وَسَيِّدِيْ أَبِي القَاسِمِ الجُنَيْدِ البَغْدَادِيِّ وَسَيِّدِيْ أَحْمَدَ ابْنِ عَلْوَانَ وَسَيِّدِيْ أَبِي طَالِبٍ المَكِّيِّ وَإِلَى أَرْوَاحِ كُلِّ وَلِيٍّ وَوَلِيَّةٍ لِلهِ مِنْ مَشَارِقِ الأَرْضِ وَمَغَارِبِهَا بَرِّهَا وَبَحْرِهَا أَيْنَمَا كَانُوْا وَكَانَ الكَائِنُ فِي عِلْمِكَ وَحَلَّتْ أَرْوَاحُهُمْ يَا رَبَّ العَالَمِيْنَ',
		translation:
			'Ya Allah, jadikanlah pahala dan keberkahan bacaan kami, shalawat kami, dan tahlil kami sebagai hadiah yang sampai dan rahmat-Mu yang turun, yang kami persembahkan dan hadiahkan untuk Nabi Muhammad SAW termulia, arwah bapak moyangnya, saudaranya dari kalangan para nabi dan rasul, malaikat muqarrabin dan karubiyyin, pemimpin kami Abu Bakar RA, Umar RA, Ustman RA, Ali RA, sepuluh sahabat yang dijanjikan masuk surge, seluruh sahabat, kerabat, tabi‘in, arwah Hasan, Husein, Ibu keduanya yaitu Sayyidah Fathimah Az-Zahra, Sayyidah Khadijah Al-Kubra, Sayyidina Hamzah, Abbas RA, syuhada Badar dan Uhud, arwah Khidhir, Ilyas, Sayyidina Abdullah bin Abbas RA, arwah empat imam mujtahid dan pengikut mereka perihal agama, arwah ulama, ahli qira‘ah, imam hadits, mufasir, pemuka sufi ahli hakikat, roh quthub rabbani dan arif as-shamadani Syekh Abdul Qadir Al-Jailani, Sayyid Ahmad Badawi, Sayyid Ahmad Ar-Rifa‘i, Sayyid Ibrahim Ad-Dasuqi, Sayyid Abul Qasim Al-Junaid Al-Baghdadi, Sayyid Ahmad bin Alwan, Sayyid Abu Thalib Al-Makki, seluruh wali Allah baik laki-laki dan perempuan dari Timur ke Barat baik di daratan maupun di lautan; di mana saja mereka dan roh mereka berada. Sementara semua yang ada berada dalam pengetahuan-Mu, waha Tuhan sekalian alam'
	},
	{
		id: 34,
		title:
			'Doa untuk Arwah Penghuni Makam Mualla, Syubaikah, Baqi‘, dan Mereka yang Tidak Pernah Diziarahi',
		arabic:
			'وَإِلَى أَرْوَاحِ سَادَاتِنَا أَهْلِ المُعَلَّا وَالشُّبَيْكَةِ وَالبَقِيْعِ وَأَمْوَاتِ المُسْلِمِيْنَ كَافَّةً عَامَّةً وَفِي صَحَائِفِ مَنْ لَا زَائِرَ لَهُ وَلَا ذَاكِرَ لَهُ عُمَّ الجَمِيْعَ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ',
		translation:
			'Dan kepada arwah pemimpin kami, yaitu ahli kubur Mualla, Syubaikah, Baqi‘, semua arwah umat Islam, dan pada lembaran ahli kubur yang tidak diziarahi dan tidak diingat, ratakanlah semuanya dengan rahmat-Mu, wahai zat yang maha penyayang'
	},
	{
		id: 35,
		title: 'Doa Permohonan Rahmat Berkah Al-Qur’an',
		arabic:
			'اللَّهُمَّ ارْحَمْهُ بِالقُرْآنِ العَظِيْمِ رَحْمَةً وَاسِعَةً، وَاغْفِرْ لَهُ مَغْفِرَةً جَامِعَةً يَا مَالِكَ الدُّنْيَا وَالآخِرَةِ يَا رَبَّ العَالَمِيْنَ',
		translation:
			'Ya Allah, turunkanlah rahmat yang luas kepadanya (arwah ahli kubur) dengan berkat Al-Qur’an yang agung, ampunilah ia dengan ampunan yang luas, wahai Penguasa dunia dan akhirat, Tuhan sekalian alam'
	},
	{
		id: 36,
		title: 'Doa Ketenteraman untuk Ahli Kubur',
		arabic:
			'اللَّهُمَّ أَنْزِلْ فِيْ قَبْرِهِ الرَّحْمَةَ وَالضِّيَاءَ وَالنُّوْرَ، وَالبَهْجَةَ وَالرَوْحَ وَالرَيْحَانَ وَالسُّرُوْرَ، مِنْ يَوْمِنَا هَذَا إِلَى يَوْمِ البَعْثِ وَالنُّشُوْرِ، إِنَّكَ مَلِكٌ رَبٌّ غَفُوْرٌ',
		translation:
			'Ya Allah, turunkanlah di kuburnya (almarhum fulan) rahmat, sinar, cahaya, kegembiraan, kesenangan, keharuman, dan kebahagiaan sejak hari ini hingga hari kebangunan dan kebangkitan. Sungguh, Kau penguasa, tuhan yang maha pengampun'
	},
	{
		id: 37,
		title: 'Doa Meminta Syafa‘at Al-Qur’an',
		arabic:
			'اللَّهُمَّ اجْعَلِ القُرْآنَ العَظِيْمَ فِي قَبْرِهِ مُؤْنِسًا، وَفِي القِيَامَةِ شَافِعًا، وَفِي الحَشْرِ ضِيَاءً وَظِلًّا وَدَلِيْلًا، وَفِي المِيْزَانِ رَاجِحًا، وَعَلَى الصِّرَاطِ نُوْرًا وَقَائِدًا، وَعَنِ النَّارِ سِتْرًا وَحِجَابًا، وَفِي الجَنَّةِ رَفِيْقًا',
		translation:
			'Ya Allah, jadikanlah Al-Qur’an di kuburnya sebagai teman, di Hari Kiamat sebagai pemberi syafaat, di tempat berkumpul (mahsyar) kelak sebagai sinar, naungan, dan petunjuk, di mizan sebagai pemberat timbangan amal baik, di sirath sebagai cahaya dan penuntun, dari api neraka sebagai tabir dan hijab, dan di surga sebagai kawan'
	},
	{
		id: 38,
		title: 'Doa Pengantar untuk Penghuni Baru Kubur',
		arabic:
			'اللَّهُمَّ عَبْدُكَ وَابْنَ عَبْدَيْكَ خَرَجَ مِنْ رَّوْحِ الدُّنْيَا وَسَعَتِهَا وَمَحْبُوْبِهِ وَاَحِبَّائِهِ فِيْهَا اِلَى ظـُـلْمَةِ اْلقَبْرِ وَمَا هُوَ لَا قِيْهِ كـَانَ يَشْهَـدُ اَنْ لَا اِلَهَ اِلَّا اَنْتَ وَاَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُوْلـُـكَ وَاَنْتَ اَعْلَمُ بِهِ',
		translation:
			'Ya Allah, ini hamba-Mu dan anak dari kedua hamba-Mu. Ia keluar dari kebahagiaan dan keluasan dunia, orang yang dicintai, dan para kekasihnya di dunia menuju kegelapan kubur dan apa yang akan ia jumpai di dalamnya. Ia dulu pernah bersaksi bahwa tiada tuhan selain Engkau dan Nabi Muhammad SAW adalah hamba dan utusan-Mu. Kau pun lebih tahu akan hal ini'
	},
	{
		id: 39,
		title: 'Doa Kelapangan Kubur',
		arabic:
			'اللَّهُمَّ اِنَّهُ نَزَلَ بِكَ وَاَنْتَ خَيْرُ مَنْزُوْلٍ بِهِ وَاَصْبَحَ فـَـقِـيْرًا اِلـَى رَحْمَتِكَ، وَاَنْتَ غَنِيٌّ عَنْ عَذَابِهِ وَقـَـدْ جِئْنَاكَ رَاغِبِيْنَ اِلـَـيْكَ شُفـَـعَاءَ لـَـهُ، اللـّٰهُمَّ اِنْ كَانَ مُحْسِنًا فَزِدْ فِيْ اِحْسَانِهِ وَاِنْ كـَانَ مُسِيْئًا فَتَجَاوَزْ عَنْهُ وَلـَـقـِّـهِ بِرَحْمَتِكَ رِضَاكَ وَقِهِ فِتْنَةَ اْلقـَـبْرِ وَعَــَذابَهُ وَافْسَحْ لـَـهُ فِيْ قـَــبْرِهِ وَجَافِ اْلاَرْضَ عَنْ جَنْبَيْهِ وَلـَــقـِّـهِ بِرَحْمَتِكَ اْلاَمْنَ مِنْ عَذَابِكَ حَتَّى تَبْعَثَــهُ آمِنًا اِلـَى جَنَّتِكَ بِرَحْمَتِكَ يَااَرْحَمَ الرَّاحِمِيْنَ',
		translation:
			'Ya Allah, dia kembali kepada-Mu. Engkau adalah sebaik-baik tempat kembali. Ia membutuhkan rahmat-Mu. Sementara Engkau tidak perlu menyiksanya. Kami mendatangi-Mu seraya mengharap kepada-Mu agar dapat memberikan syafa’at baginya. Ya Allah, jika ia orang baik, maka tambahkanlah kebaikannya. Jika ia orang jahat, maka maafkanlah keburukannya. Pertemukan ia dan ridha-Mu berkat rahmat-Mu. Peliharalah ia dari fitnah dan azab kubur. Lapangkanlah kuburnya. Jauhkanlah dinding bumi dari kedua sisi badannya. Pertemukanlah ia dan keamanan berkat rahmat-Mu dari azab-Mu hingga Engkau membangkitkannya dalam keadaan aman menuju surga-Mu berkat rahmat-Mu, wahai Zat Yang Maha Pengasih'
	},
	{
		id: 40,
		title: 'Doa untuk Ahli Kubur (laki-laki)',
		arabic: 'اللهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ يَا رَبَّ العَالَمِيْنَ',
		translation:
			'Ya Allah, ampunilah dirinya, kasihanilah dirinya, afiatkan dirinya, dan maafkanlah dirinya, wahai Tuhan sekalian alam'
	},
	{
		id: 41,
		title: 'Doa untuk Ahli Kubur (perempuan)',
		arabic: 'اللهُمَّ اغْفِرْ لَها وَارْحَمْها وَعَافِها وَاعْفُ عَنْها يَا رَبَّ العَالَمِيْنَ',
		translation:
			'Ya Allah, ampunilah dirinya (perempuan), kasihanilah dirinya, afiatkan dirinya, dan maafkanlah dirinya, wahai Tuhan sekalian alam'
	},
	{
		id: 42,
		title: 'Doa Khusus untuk Ahli Kubur yang Diziarahi',
		arabic:
			'وَاجْعَلِ اللهُمَّ ثَوَابًا مِثْلَ ثَوَابِ ذَالِكَ فِي صَحَائِفِنَا وَفِي صَحَائِفِ وَالِدِيْنَا وَمَشَائِخِنَا وَالسَّادَاتِ الحَاضِرِيْنَ وَوَالِدِيْهِمْ وَمَشَائِخِهِمْ خَاصَّةً وَإِلَى أَمْوَاتِ المُسْلِمِيْنَ عَامَّةً',
		translation:
			'Ya Allah, jadikanlah pahala ini sebagaimana pahala demikian yang tercatat pada lembaran kami, lembaran orang tua kami, guru kami, para pemuka yang hadir, orang tua mereka, dan guru mereka khususnya, dan arwah umat Islam secara umum'
	},
	{
		id: 43,
		title: 'Doa agar Ingat dan Paham Al-Qur’an',
		arabic:
			'اللهُمَّ ذَكِّرْنَا مِنْهُ مَا نَسِيْنَا وَعَلِّمْنَاهُ مَا جَهِلْنَا وَارْزُقْنَا تِلَاوَتَهُ آنَاءَ اللَّيْلِ وَأَطْرَافَ النَّهَارِ، وَاجْعَلْهُ حُجَّةً لَّنَا وَلَا تَجْعَلْهُ حُجَّةً عَلَيْنَا',
		translation:
			'Ya Allah, ingatkan kami ayat-ayat Al-Qur‘an yang kami terlupa. Beritahukan kami sesuatu yang kami tidak ketahui. Anugerahkan kami kesempatan untuk membacanya sepanjang malam dan di tepi-tepi siang. Jadikanlah Al-Qur‘an sebagai pembela kami. Jangan jadikan Al-Qur‘an sebagai penghujat kami kelak'
	},
	{
		id: 44,
		title: 'Doa Kemurahan dan Keridhaan Allah',
		arabic:
			'اللهُمَّ بِفَضْلِكَ عُمَّنَا، وَبِلُطْفِكَ حُفَّنَا، وَعَلَى الإِسْلَامِ وَالإِيْمَانِ جَمْعًا تَوَفَّنَا وَأَنْتَ رَاضٍ عَنَّا، وَاخْتِمْ بِالصَّالِحَاتِ أَعْمَالَنَا. رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ، بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِيْنَ، وَالحَمْدُ لِلهِ رَبِّ العَالَمِيْنَ',
		translation:
			'Ya Allah, ratakanlah keutamaan-Mu. Selimuti kami dengan kelembutan-Mu. Atas Islam dan iman sekaligus, matikanlah kami sementara Kaumeridhai kami. Akhiri amal kami dengan kesalehan. Tuhan kami, berikanlah kami kebaikan di dunia, dan kebaikan di akhirat. Lindungilah kami dari siksa neraka, dengan rahmat-Mu wahai Tuhan maha penyayang. Segala puji bagi Allah, Tuhan sekalian alam'
	}
];

export default {
	source,
	basedOn,
	data: tahlilData
};
