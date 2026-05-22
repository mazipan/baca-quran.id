export type TahlilItem = {
	id: number;
	order: number;
	title: string;
	arabic: string;
	latin: string;
	translation: string;
	translationEn: string;
	count: number;
	note?: string;
	noteEn?: string;
	href?: string;
};

const source =
	'https://islam.nu.or.id/tahlil/susunan-bacaan-tahlil-doa-arwah-lengkap-dan-terjemahannya';
const basedOn = 'Majmu’ Syarif (NU)';

const tahlilData: TahlilItem[] = [
	{
		id: 1,
		order: 1,
		title: 'Al-Fatihah — Tawassul',
		arabic:
			'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. الرَّحْمَٰنِ الرَّحِيمِ. مَالِكِ يَوْمِ الدِّينِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ. اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ. صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ. آمِينْ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Alhamdu lillaahi rabbil-’aalamiin. Ar-rahmaanir-rahiim. Maaliki yawmid-diin. Iyyaaka na’budu wa iyyaaka nasta’iin. Ihdinash-shiraathal-mustaqiim. Shiraathal-ladziina an’amta ’alayhim, ghayril-maghdhuubi ’alayhim wa ladhdhaalliin. Aamiin',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang Maha Pengasih lagi Maha Penyayang. Yang menguasai hari pembalasan. Hanya kepada-Mu kami menyembah, dan hanya kepada-Mu kami memohon pertolongan. Tunjukkanlah kami ke jalan yang lurus. Yaitu jalan orang-orang yang Engkau beri nikmat; bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat. Amin.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, Lord of the worlds. The Most Gracious, the Most Merciful. Sovereign of the Day of Recompense. It is You we worship and You we ask for help. Guide us to the straight path — the path of those upon whom You have bestowed favor, not of those who have earned anger or of those who are astray. Amen.',
		count: 1,
		note: 'Pahalanya dihadiahkan kepada Nabi Muhammad SAW, keluarga, sahabat, dan arwah yang didoakan',
		noteEn:
			'Its reward is dedicated to the Prophet, his family, companions, and the souls being remembered'
	},
	{
		id: 2,
		order: 2,
		title: 'Surat Al-Ikhlas',
		arabic:
			'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. قُلْ هُوَ اللَّهُ أَحَدٌ. اللَّهُ الصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُولَدْ. وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Qul huwallaahu ahad. Allaahus-shamad. Lam yalid wa lam yuulad. Wa lam yakul lahuu kufuwan ahad',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu. Dia tiada beranak dan tiada pula diperanakkan. Dan tidak ada seorang pun yang setara dengan Dia.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent.',
		count: 3
	},
	{
		id: 3,
		order: 3,
		title: 'Tahlil — La ilaha illallah',
		arabic: 'لَا إِلَهَ إِلَّا اللَّهُ',
		latin: 'Laa ilaaha illallaah',
		translation: 'Tiada Tuhan selain Allah',
		translationEn: 'There is no deity except Allah',
		count: 3
	},
	{
		id: 4,
		order: 4,
		title: 'Surat Al-Falaq',
		arabic:
			'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ. مِنْ شَرِّ مَا خَلَقَ. وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ. وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ. وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Qul a’uudzu bi rabbil-falaq. Min syarri maa khalaq. Wa min syarri ghaasiqin idzaa waqab. Wa min syarrin-naffaatsaati fil-’uqad. Wa min syarri haasidin idzaa hasad',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Tuhan yang menguasai subuh. Dari kejahatan makhluk-Nya. Dan dari kejahatan malam apabila telah gelap gulita. Dan dari kejahatan wanita-wanita tukang sihir yang menghembus pada buhul-buhul. Dan dari kejahatan pendengki bila ia dengki.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge in the Lord of daybreak. From the evil of that which He created. And from the evil of darkness when it settles. And from the evil of the blowers in knots. And from the evil of an envier when he envies.',
		count: 1
	},
	{
		id: 5,
		order: 5,
		title: 'Surat An-Nas',
		arabic:
			'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. قُلْ أَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. إِلَهِ النَّاسِ. مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Qul a’uudzu bi rabbin-naas. Malikin-naas. Ilaahin-naas. Min syarril-waswaasil-khannaas. Alladzii yuwaswisu fii shuduurin-naas. Minal-jinnati wan-naas',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Tuhan manusia. Raja manusia. Sembahan manusia. Dari kejahatan bisikan setan yang biasa bersembunyi. Yang membisikkan kejahatan ke dalam dada manusia. Dari golongan jin dan manusia.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge in the Lord of mankind. The Sovereign of mankind. The God of mankind. From the evil of the retreating whisperer. Who whispers in the breasts of mankind. From among the jinn and mankind.',
		count: 1
	},
	{
		id: 6,
		order: 6,
		title: 'Al-Fatihah — Penutup Pembukaan',
		arabic:
			'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. الرَّحْمَٰنِ الرَّحِيمِ. مَالِكِ يَوْمِ الدِّينِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ. اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ. صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ. آمِينْ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Alhamdu lillaahi rabbil-’aalamiin. Ar-rahmaanir-rahiim. Maaliki yawmid-diin. Iyyaaka na’budu wa iyyaaka nasta’iin. Ihdinash-shiraathal-mustaqiim. Shiraathal-ladziina an’amta ’alayhim, ghayril-maghdhuubi ’alayhim wa ladhdhaalliin. Aamiin',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang Maha Pengasih lagi Maha Penyayang. Yang menguasai hari pembalasan. Hanya kepada-Mu kami menyembah, dan hanya kepada-Mu kami memohon pertolongan. Tunjukkanlah kami ke jalan yang lurus. Yaitu jalan orang-orang yang Engkau beri nikmat; bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat. Amin.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, Lord of the worlds. The Most Gracious, the Most Merciful. Sovereign of the Day of Recompense. It is You we worship and You we ask for help. Guide us to the straight path — the path of those upon whom You have bestowed favor, not of those who have earned anger or of those who are astray. Amen.',
		count: 1
	},
	{
		id: 7,
		order: 7,
		title: 'Awal Al-Baqarah (1–5)',
		arabic:
			'الم. ذَالِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ. الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَوٰةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ. وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ. أُوْلَـٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ وَأُوْلَـٰئِكَ هُمُ الْمُفْلِحُونَ',
		latin:
			'Alif laam miim. Dzaalikal-kitaabu laa rayba fiih, hudal lil-muttaqiin. Alladziina yu’minuuna bil-ghaybi wa yuqiimuunas-shalaata wa mimmaa razaqnaahum yunfiquun. Walladziina yu’minuuna bimaa unzila ilayka wa maa unzila min qablik, wa bil-aakhirati hum yuuqinuun. Ulaa’ika ’alaa hudam mir rabbihim wa ulaa’ika humul-muflihuun',
		translation:
			'Alif Lam Mim. Kitab ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa. Yaitu mereka yang beriman kepada yang gaib, yang mendirikan shalat, dan menafkahkan sebagian rezeki yang Kami anugerahkan kepada mereka. Dan mereka yang beriman kepada Kitab yang telah diturunkan kepadamu dan Kitab-kitab yang telah diturunkan sebelummu, serta mereka yakin akan adanya kehidupan akhirat. Mereka itulah yang tetap mendapat petunjuk dari Tuhan mereka, dan merekalah orang-orang yang beruntung.',
		translationEn:
			'Alif Lam Mim. This is the Book about which there is no doubt, a guidance for those conscious of Allah — who believe in the unseen, establish prayer, and spend out of what We have provided for them, and who believe in what has been revealed to you and what was revealed before you, and of the Hereafter they are certain. Those are upon guidance from their Lord, and it is those who are the successful.',
		count: 1
	},
	{
		id: 8,
		order: 8,
		title: 'Al-Baqarah 163',
		arabic: 'وَإِلَهُكُمْ إِلَهٌ وَاحِدٌ لَّا إِلَهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ',
		latin: 'Wa ilaahukum ilaahuw waahid, laa ilaaha illaa huwar-rahmaanur-rahiim',
		translation:
			'Dan Tuhanmu adalah Tuhan Yang Maha Esa; tidak ada tuhan selain Dia, Yang Maha Pengasih lagi Maha Penyayang.',
		translationEn:
			'And your god is one God. There is no deity except Him, the Entirely Merciful, the Especially Merciful.',
		count: 1
	},
	{
		id: 9,
		order: 9,
		title: 'Ayat Kursi (Al-Baqarah 255)',
		arabic:
			'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ',
		latin:
			'Allaahu laa ilaaha illaa huwal-hayyul-qayyuum, laa ta’khudzuhu sinatuw wa laa naum, lahuu maa fis-samaawaati wa maa fil-ardh, man dzalladzii yasyfa’u ’indahu illaa bi-idznih, ya’lamu maa bayna aydiihim wa maa khalfahum, wa laa yuhiithuuna bisyay’im min ’ilmihii illaa bimaa syaa’, wasi’a kursiyyuhus-samaawaati wal-ardh, wa laa ya’uuduhuu hifzhuhumaa, wa huwal-’aliyyul-’azhiim',
		translation:
			'Allah, tidak ada tuhan selain Dia, Yang Maha Hidup lagi terus-menerus mengurus makhluk-Nya. Dia tidak dilanda oleh kantuk dan tidak pula oleh tidur. Milik-Nya apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang ada di hadapan mereka dan apa yang ada di belakang mereka, dan mereka tidak mengetahui sesuatu pun dari ilmu-Nya kecuali apa yang dikehendaki-Nya. Kursi-Nya meliputi langit dan bumi, dan Dia tidak merasa berat memelihara keduanya. Dialah Yang Maha Tinggi lagi Maha Agung.',
		translationEn:
			'Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.',
		count: 1
	},
	{
		id: 10,
		order: 10,
		title: 'Al-Baqarah 284–286',
		arabic:
			'لِلَّهِ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ وَإِن تُبْدُوا مَا فِي٠ أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ اللَّهُ فَيَغْفِرُ لِمَن يَشَاءُ وَيُعَذِّبُ مَن يَشَاءُ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ. آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ كُلْ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
		latin:
			'Lillaahi maa fis-samaawaati wa maa fil-ardh, wa in tubduu maa fii anfusikum aw tukhfuuhu yuhaasibkum bihillaah, fa yaghfiru liman yasyaa’ wa yu’adzdzibu man yasyaa’, wallaahu ’alaa kulli syay’in qadiir. Aamanar-rasuulu bimaa unzila ilayhi mir rabbihii wal-mu’minuun, kullun aamana billaahi wa malaa’ikatihii wa kutubihii wa rusulih, laa nufarriqu bayna ahadim min rusulih, wa qaaluu sami’naa wa atha’naa, ghufraanaka rabbanaa wa ilaykal-mashiir. Laa yukallifullahu nafsan illaa wus’ahaa, lahaa maa kasabat wa ’alayhaa maktasabat, rabbanaa laa tu’aakhidznaa in nasiinaa aw akhtha’naa, rabbanaa wa laa tahmil ’alaynaa ishran kamaa hamaltahuu ’alal-ladziina min qablinaa, rabbanaa wa laa tuhammilnaa maa laa thaaqata lanaa bih, wa’fu ’annaa waghfir lanaa warhamnaa anta mawlaanaa fanshurnaa ’alal-qawmil-kaafiriin',
		translation:
			'Kepunyaan Allah-lah segala apa yang ada di langit dan di bumi. Dan jika kamu melahirkan apa yang ada di dalam hatimu atau kamu menyembunyikannya, niscaya Allah akan membuat perhitungan dengan kamu tentang perbuatanmu itu. Maka Allah mengampuni siapa yang dikehendaki-Nya dan menyiksa siapa yang dikehendaki-Nya. Rasul telah beriman kepada Al-Qur’an yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami bersalah. Ya Tuhan kami, ampunilah kami dan rahmatilah kami. Engkaulah penolong kami, maka tolonglah kami terhadap kaum yang kafir.',
		translationEn:
			'To Allah belongs whatever is in the heavens and whatever is in the earth. Whether you show what is within yourselves or conceal it, Allah will bring you to account for it. Then He will forgive whom He wills and punish whom He wills, and Allah is over all things competent. The Messenger has believed in what was revealed to him from his Lord, and so have the believers. Allah does not burden a soul beyond that it can bear. Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, forgive us, have mercy upon us. You are our protector, so give us victory over the disbelieving people.',
		count: 1
	},
	{
		id: 11,
		order: 11,
		title: 'Al-Ahzab 56 + Shalawat Ibrahim',
		arabic:
			'إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا. اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى سَيِّدِنَا إِبْرَاهِيمَ وَعَلَى آلِ سَيِّدِنَا إِبْرَاهِيمَ فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَّجِيدٌ',
		latin:
			'Innallaaha wa malaa’ikatahuu yushalluuna ’alan-nabiyy, yaa ayyuhal-ladziina aamanuu shalluu ’alayhi wa sallimuu tasliimaa. Allaahumma shalli ’alaa sayyidinaa Muhammadin wa ’alaa aali sayyidinaa Muhammadin kamaa shallayta ’alaa sayyidinaa Ibraahiima wa ’alaa aali sayyidinaa Ibraahiima, wa baarik ’alaa sayyidinaa Muhammadin wa ’alaa aali sayyidinaa Muhammadin kamaa baarakta ’alaa sayyidinaa Ibraahiima wa ’alaa aali sayyidinaa Ibraahiima fil-’aalamiina innaka hamiidumm majiid',
		translation:
			'Sesungguhnya Allah dan para malaikat-Nya bershalawat untuk Nabi. Wahai orang-orang yang beriman, bershalawatlah kamu untuk Nabi dan ucapkanlah salam penghormatan kepadanya. Ya Allah, limpahkanlah shalawat kepada junjungan kami Muhammad dan kepada keluarga Muhammad, sebagaimana Engkau telah melimpahkan shalawat kepada junjungan kami Ibrahim dan kepada keluarga Ibrahim. Dan limpahkanlah berkat kepada junjungan kami Muhammad dan kepada keluarga Muhammad, sebagaimana Engkau telah melimpahkan berkat kepada junjungan kami Ibrahim dan kepada keluarga Ibrahim, di seluruh alam semesta. Sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.',
		translationEn:
			'Indeed, Allah and His angels send blessing upon the Prophet. O you who have believed, ask blessing upon him and ask Him to grant him peace. O Allah, send prayers upon our master Muhammad and upon the family of our master Muhammad, as You sent prayers upon our master Ibrahim and upon the family of Ibrahim. And bless our master Muhammad and the family of our master Muhammad, as You blessed our master Ibrahim and the family of Ibrahim, among all the worlds. Indeed, You are Praiseworthy and Majestic.',
		count: 1
	},
	{
		id: 12,
		order: 12,
		title: 'Surat Yasin',
		arabic:
			'يٰسٓ. وَالْقُرْاٰنِ الْحَكِيْمِ. اِنَّكَ لَمِنَ الْمُرْسَلِيْنَ. عَلٰى صِرَاطٍ مُّسْتَقِيْمٍ ...',
		latin:
			'Yaa siin. Wal-qur’aanil-hakiim. Innaka laminal-mursaliin. ’alaa shiraathim mustaqiim ...',
		translation:
			'Ya Sin. Demi Al-Qur’an yang penuh hikmah. Sesungguhnya kamu adalah salah seorang dari para rasul. Yang berada di atas jalan yang lurus ...',
		translationEn:
			'Ya Sin. By the Qur’an, full of wisdom. Indeed you, are from among the messengers. On a straight path ...',
		count: 1,
		note: 'Surat Yasin dibaca lengkap sebagai bagian utama Tahlil',
		noteEn: 'Surah Yasin is read in full as a main part of Tahlil',
		href: '/36'
	},
	{
		id: 13,
		order: 13,
		title: 'Tahlil — La ilaha illallah',
		arabic: 'لَا إِلَهَ إِلَّا اللَّهُ',
		latin: 'Laa ilaaha illallaah',
		translation: 'Tiada Tuhan selain Allah',
		translationEn: 'There is no deity except Allah',
		count: 33,
		note: 'Dibaca 33x atau 100x sesuai kebiasaan',
		noteEn: 'Recited 33x or 100x according to custom'
	},
	{
		id: 14,
		order: 14,
		title: 'Doa Tahlil',
		arabic:
			'اللَّهُمَّ أَوْصِلْ ثَوَابَ مَا قَرَأْنَاهُ مِنَ الْقُرْآنِ الْعَظِيمِ وَمَا هَلَّلْنَا وَمَا سَبَّحْنَا وَمَا اسْتَغْفَرْنَا وَمَا صَلَّيْنَا إِلَى رُوحِ سَيِّدِنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ وَإِلَى أَرْوَاحِ آبَائِنَا وَأُمَّهَاتِنَا وَأُسْتَاذِنَا وَمَشَايِخِنَا وَمَنْ أَحسَنَ إِلَيْنَا وَإِلَى جَمِيعِ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ الْأَحَياءِ مِنْهُمْ وَالْأَمْوَاتِ',
		latin:
			'Allaahumma awshil tsawaaba maa qara’naahu minal-qur’aanil-’azhiim wa maa hallalnaa wa maa sabbahnaa wa masta-ghfarnaa wa maa shallaynaa ilaa ruuhi sayyidinaa Muhammadin shallallaahu ’alayhi wa sallam wa ilaa arwaahi aabaainaa wa ummahaaatinaa wa asaatidzi-naa wa masyaayikhinaa wa man ahsana ilaynaa wa ilaa jamii’il-muslimiinawal-muslimaat al-ahyaai minhum wal-amwaat',
		translation:
			'Ya Allah, sampaikanlah pahala dari apa yang telah kami baca dari Al-Qur’an yang agung, tahlil, tasbih, istighfar, dan shalawat kepada ruh junjungan kami Muhammad SAW, kepada arwah ayah-ibu kami, guru-guru kami, masyayikh kami, orang-orang yang telah berbuat baik kepada kami, dan kepada seluruh muslimin dan muslimat, yang masih hidup maupun yang sudah meninggal.',
		translationEn:
			'O Allah, convey the reward of what we have recited from the Noble Qur’an, our tahlil, tasbih, istighfar, and salawat, to the soul of our master Muhammad (peace be upon him), to the souls of our fathers and mothers, our teachers, our scholars, those who have been good to us, and to all Muslim men and women, both the living and the deceased.',
		count: 1
	}
];

const tahlil = {
	data: tahlilData,
	basedOn,
	source
};

export default tahlil;
