export type WiridItem = {
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
};

const source = 'https://islam.nu.or.id/shalat/susunan-bacaan-wirid-sesudah-shalat-lima-waktu';
const basedOn = 'Majmu’ Syarif (NU)';

const wiridData: WiridItem[] = [
	{
		id: 1,
		order: 1,
		title: 'Istighfar',
		arabic:
			'’أَسْتَغْفِرُ اللهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
		latin:
			'Astaghfirullaahal-’azhiim alladzii laa ilaaha illaa huwal hayyul qayyuumu wa atuubu ilaih',
		translation:
			'Aku memohon ampun kepada Allah Yang Maha Agung, tiada Tuhan selain Dia, yang Maha Hidup lagi Maha Berdiri Sendiri, dan aku bertaubat kepada-Nya.',
		translationEn:
			'I seek forgiveness from Allah the Almighty, besides Whom there is no deity, the Ever-Living, the Sustainer of existence, and I repent to Him.',
		count: 3
	},
	{
		id: 2,
		order: 2,
		title: 'Allahumma Antas Salam',
		arabic:
			'اَللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
		latin: 'Allaahumma antas-salaamu wa minkas-salaam, tabaarakta yaa dzal-jalaali wal-ikraam',
		translation:
			'Ya Allah, Engkau adalah As-Salam, dan dari-Mu datang keselamatan. Maha Berkah Engkau wahai Pemilik keagungan dan kemuliaan.',
		translationEn:
			'O Allah, You are As-Salam (the source of peace), and from You comes peace. Blessed are You, O Possessor of majesty and honor.',
		count: 1
	},
	{
		id: 3,
		order: 3,
		title: 'Allahumma Laa Mani’a',
		arabic:
			'اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ',
		latin:
			'Allaahumma laa maani’a limaa a’thaita, wa laa mu’thiya limaa mana’ta, wa laa yanfa’u dzal-jaddi minkal-jadd',
		translation:
			'Ya Allah, tidak ada yang bisa menghalangi apa yang Engkau berikan, dan tidak ada yang bisa memberi apa yang Engkau cegah, dan kekayaan orang kaya tidak bermanfaat di sisi-Mu.',
		translationEn:
			'O Allah, none can withhold what You have given, none can give what You have withheld, and no wealth of the wealthy can avail them before You.',
		count: 1
	},
	{
		id: 4,
		order: 4,
		title: 'Allahumma A’inni',
		arabic: 'اَللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
		latin: 'Allaahumma a’innii ’alaa dzikrika wa syukrika wa husni ’ibaadatik',
		translation:
			'Ya Allah, bantulah aku dalam mengingat-Mu, bersyukur kepada-Mu, dan beribadah kepada-Mu dengan baik.',
		translationEn:
			'O Allah, help me to remember You, to thank You, and to worship You in the best manner.',
		count: 1
	},
	{
		id: 5,
		order: 5,
		title: 'Tahlil',
		arabic:
			'لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
		latin:
			'Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu, yuhyii wa yumiitu wa huwa ’alaa kulli syay’in qadiir',
		translation:
			'Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan segala pujian. Dia yang menghidupkan dan mematikan, dan Dia Maha Kuasa atas segala sesuatu.',
		translationEn:
			'There is no deity but Allah alone, without partner. To Him belongs the kingdom and all praise. He gives life and causes death, and He is Able to do all things.',
		count: 3,
		note: 'Dibaca 3x setiap selesai shalat fardhu, khusus setelah Maghrib dan Subuh 10x',
		noteEn: 'Read 3x after each obligatory prayer; 10x after Maghrib and Fajr'
	},
	{
		id: 6,
		order: 6,
		title: 'Allahumma Ajirni Minan Nar',
		arabic: 'اَللَّهُمَّ أَجِرْنِي مِنَ النَّارِ',
		latin: 'Allaahumma ajirni minan-naar',
		translation: 'Ya Allah, selamatkanlah aku dari api neraka.',
		translationEn: 'O Allah, protect me from the Fire of Hell.',
		count: 7,
		note: 'Dibaca 7x setelah Maghrib dan Subuh',
		noteEn: 'Read 7x after Maghrib and Fajr'
	},
	{
		id: 7,
		order: 7,
		title: 'Ayat Kursi (Al-Baqarah: 255)',
		arabic:
			'اَللهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ',
		latin:
			'Allaahu laa ilaaha illaa huwal-hayyul-qayyuum, laa ta’khudzuhu sinatuw wa laa naum, lahuu maa fis-samaawaati wa maa fil-ardh, man dzal-ladzii yasyfa’u ’indahuu illaa bi’idznih, ya’lamu maa bayna aydiihim wa maa khalfahum, wa laa yuhiithuuna bisyay’im min ’ilmihii illaa bimaa syaa’, wasi’a kursiyyuhus-samaawaati wal-ardha, wa laa ya’uuduhu hifzhuhumaa, wa huwal-’aliyyul-’azhiim',
		translation:
			'Allah, tiada Tuhan selain Dia, yang Maha Hidup lagi Maha Berdiri Sendiri. Tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tidak ada yang dapat memberi syafaat kecuali dengan izin-Nya. Kursi-Nya meliputi langit dan bumi. Menjaga keduanya tidak memberatkan-Nya. Dan Dialah yang Maha Tinggi lagi Maha Agung.',
		translationEn:
			'Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and on the earth. His Kursi extends over the heavens and the earth, and their preservation tires Him not. He is the Most High, the Most Great.',
		count: 1
	},
	{
		id: 8,
		order: 8,
		title: 'Al-Baqarah ayat 285-286',
		arabic:
			'آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ وَقَالُوا سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
		latin:
			'Aamanar-rasuulu bimaa unzila ilayhi mir-rabbihii wal-mu’minuun, kullun aamana billaahi wa malaa’ikatihii wa kutubihii wa rusulih, laa nufarriqu bayna ahadin mir-rusulih, wa qaaluu sami’naa wa atha’naa, ghufraanaka rabbanaa wa ilaykal-masiir. Rabbanaa laa tu’aakhidznaa in nasiinaa aw akhtha’naa, wa’fu ’annaa waghfir lanaa warhamnaa, anta mawlaanaa fanshurnaa ’alal-qawmil-kaafiriin',
		translation:
			'Rasul telah beriman kepada apa yang diturunkan kepadanya dari Tuhannya, dan demikian pula orang-orang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, dan rasul-rasul-Nya. Ya Tuhan kami, ampuni kami, sayangi kami. Engkaulah pelindung kami, tolonglah kami menghadapi orang-orang kafir.',
		translationEn:
			'The Messenger has believed in what was revealed to him from his Lord, and so have the believers. Our Lord, forgive us, have mercy upon us. You are our protector, so give us victory over the disbelieving people.',
		count: 1
	},
	{
		id: 9,
		order: 9,
		title: 'Ali Imran 18 & 26-27',
		arabic:
			'شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ لَا إِلَٰهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ إِنَّ الدِّينَ عِندَ اللَّهِ الْإِسْلَامُ. قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ تُؤْتِي الْمُلْكَ مَن تَشَاءُ وَتَنزِعُ الْمُلْكَ مِمَّن تَشَاءُ وَتُعِزُّ مَن تَشَاءُ وَتُذِلُّ مَن تَشَاءُ بِيَدِكَ الْخَيْرُ إِنَّكَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ تُولِجُ اللَّيْلَ فِي النَّهَارِ وَتُولِجُ النَّهَارَ فِي اللَّيْلِ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَتَرْزُقُ مَن تَشَاءُ بِغَيْرِ حِسَابٍ',
		latin:
			'Syahidallaahu annahuu laa ilaaha illaa huwa wal-malaa’ikatu wa ulul-’ilmi qaa’iman bil-qisth, laa ilaaha illaa huwal-’aziizul-hakiim, innad-diina ’indallaahil-islaam. Qulillaahuma maalikal-mulki tu’til-mulka man tasyaa’u, wa tu’izzu man tasyaa’u wa tudzillu man tasyaa’u, biyadikal-khayr, innaka ’alaa kulli syay’in qadiir. Tuulijul-layla fin-nahaari wa tuulijun-nahaara fil-layl, wa tarzuqu man tasyaa’u bighayri hisaab',
		translation:
			'Allah menyatakan bahwa tiada Tuhan selain Dia, dan para malaikat serta orang-orang berilmu menegakkan keadilan. Tiada Tuhan selain Dia yang Maha Perkasa lagi Maha Bijaksana. Katakanlah: Ya Allah, Pemilik kerajaan, Engkau berikan kerajaan kepada siapa yang Engkau kehendaki. Engkau masukkan malam ke dalam siang dan siang ke dalam malam. Engkau beri rezeki tanpa batas.',
		translationEn:
			'Allah witnesses that there is no deity except Him, and so do the angels and those of knowledge. There is no deity except Him, the Exalted in Might, the Wise. Say: O Allah, Owner of Sovereignty, You give sovereignty to whom You will. You cause the night to enter the day and You give sustenance without account.',
		count: 1
	},
	{
		id: 10,
		order: 10,
		title: 'Surat Al-Ikhlas',
		arabic:
			'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. قُلْ هُوَ اللَّهُ أَحَدٌ. اللَّهُ الصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُولَدْ. وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Qul huwallaahu ahad. Allaahus-shamad. Lam yalid wa lam yuulad. Wa lam yakul lahuu kufuwan ahad',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah Tuhan yang bergantung kepada-Nya segala urusan. Dia tiada beranak dan tiada pula diperanakkan. Dan tidak ada seorangpun yang setara dengan Dia.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent.',
		count: 1
	},
	{
		id: 11,
		order: 11,
		title: 'Surat Al-Falaq',
		arabic:
			'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ. مِن شَرِّ مَا خَلَقَ. وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ. وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ. وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Qul a’uudzu birabbil-falaq. Min syarri maa khalaq. Wa min syarri ghaasiqin idzaa waqab. Wa min syarrin-naffaatsaati fil-’uqad. Wa min syarri haasidin idzaa hasad',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Tuhan yang menguasai fajar. Dari kejahatan makhluk-Nya, dari kejahatan malam apabila telah gelap gulita, dari kejahatan wanita-wanita tukang sihir, dan dari kejahatan orang yang dengki apabila ia dengki.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge in the Lord of daybreak from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies.',
		count: 1
	},
	{
		id: 12,
		order: 12,
		title: 'Surat An-Nas',
		arabic:
			'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. قُلْ أَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. إِلَٰهِ النَّاسِ. مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Qul a’uudzu birabbin-naas. Malikin-naas. Ilaahin-naas. Min syarril-waswaasil-khannaas. Alladzii yuwaswisu fii shuduurin-naas. Minal-jinnati wan-naas',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Tuhan manusia, Raja manusia, Sembahan manusia, dari kejahatan bisikan setan yang biasa bersembunyi, yang membisikkan kejahatan ke dalam dada manusia, dari golongan jin dan manusia.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer who whispers in the breasts of mankind, from among the jinn and mankind.',
		count: 1
	},
	{
		id: 13,
		order: 13,
		title: 'Surat Al-Fatihah',
		arabic:
			'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. الرَّحْمَٰنِ الرَّحِيمِ. مَالِكِ يَوْمِ الدِّينِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ. اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ. صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Alhamdu lillaahi rabbil-’aalamiin. Ar-rahmaanir-rahiim. Maaliki yawmid-diin. Iyyaaka na’budu wa iyyaaka nasta’iin. Ihdinash-shiraathal-mustaqiim. Shiraathal-ladziina an’amta ’alayhim, ghayril-maghdhuubi ’alayhim wa ladhdhaalliin',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang Maha Pengasih lagi Maha Penyayang. Yang menguasai hari pembalasan. Hanya kepada-Mu kami menyembah, dan hanya kepada-Mu kami memohon pertolongan. Tunjukkanlah kami ke jalan yang lurus. Yaitu jalan orang-orang yang Engkau beri nikmat, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, Lord of the worlds. The Most Gracious, the Most Merciful. Sovereign of the Day of Recompense. It is You we worship and You we ask for help. Guide us to the straight path — the path of those upon whom You have bestowed favor, not of those who have earned anger or of those who are astray.',
		count: 1
	},
	{
		id: 14,
		order: 14,
		title: 'Tasbih — Subhanallah',
		arabic: 'سُبْحَانَ اللهِ',
		latin: 'Subhaanallaah',
		translation: 'Maha Suci Allah.',
		translationEn: 'Glory be to Allah.',
		count: 33
	},
	{
		id: 15,
		order: 15,
		title: 'Tahmid — Alhamdulillah',
		arabic: 'اَلْحَمْدُ لِلهِ',
		latin: 'Alhamdulillaah',
		translation: 'Segala puji bagi Allah.',
		translationEn: 'All praise is due to Allah.',
		count: 33
	},
	{
		id: 16,
		order: 16,
		title: 'Takbir — Allahu Akbar',
		arabic: 'اَللهُ أَكْبَرُ',
		latin: 'Allaahu Akbar',
		translation: 'Allah Maha Besar.',
		translationEn: 'Allah is the Greatest.',
		count: 33
	},
	{
		id: 17,
		order: 17,
		title: 'Allahu Akbar Kabira',
		arabic:
			'اَللهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلهِ كَثِيرًا وَسُبْحَانَ اللهِ بُكْرَةً وَأَصِيلًا لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ',
		latin:
			'Allaahu Akbaru kabiiraa, walhamdu lillaahi katsiiraa, wa subhaanallaahi bukrataw wa ashiilaa. Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu, yuhyii wa yumiitu wa huwa ’alaa kulli syay’in qadiir. Wa laa hawla wa laa quwwata illaa billaahil-’aliyyil-’azhiim',
		translation:
			'Allah Maha Besar dengan kebesaran yang sempurna, segala puji bagi Allah dengan pujian yang banyak, dan Maha Suci Allah di waktu pagi dan petang. Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Tiada daya dan kekuatan kecuali dengan pertolongan Allah Yang Maha Tinggi lagi Maha Agung.',
		translationEn:
			'Allah is truly the Greatest, all praise in abundance is due to Allah, and glory be to Allah in the morning and evening. There is no deity but Allah alone, without partner. And there is no might or power except with Allah, the Most High, the Most Great.',
		count: 1
	},
	{
		id: 18,
		order: 18,
		title: 'Tahlil — Laa Ilaaha Illallah',
		arabic: 'لَا إِلَهَ إِلَّا اللهُ',
		latin: 'Laa ilaaha illallaah',
		translation: 'Tiada Tuhan selain Allah.',
		translationEn: 'There is no deity but Allah.',
		count: 100,
		note: 'Dibaca 300x bakda Subuh, 100x bakda Isya, 50x bakda Dhuhur, 50x bakda Ashar, dan 100x bakda Maghrib',
		noteEn:
			'Read 300x after Fajr, 100x after Isha, 50x after Dhuhr, 50x after Asr, and 100x after Maghrib'
	},
	{
		id: 19,
		order: 19,
		title: 'Shalawat — Shallallahu ’ala Muhammad',
		arabic: 'صَلَّى اللهُ عَلَى مُحَمَّدٍ',
		latin: 'Shallallaahu ’alaa Muhammadin',
		translation: 'Semoga Allah mencurahkan rahmat kepada Nabi Muhammad.',
		translationEn: 'May Allah bestow blessings upon Muhammad.',
		count: 100,
		note: 'Dibaca 300x atau 100x bakda Subuh',
		noteEn: 'Read 300x or 100x after Fajr'
	},
	{
		id: 20,
		order: 20,
		title: 'Penutup',
		arabic: 'لَا إِلَهَ إِلَّا اللهُ مُحَمَّدٌ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ',
		latin: 'Laa ilaaha illallaahu Muhammadur-rasuulullaahi shallallaahu ’alayhi wa sallam',
		translation:
			'Tiada Tuhan selain Allah, Muhammad adalah utusan Allah, semoga Allah mencurahkan shalawat dan salam kepada beliau.',
		translationEn:
			'There is no deity but Allah, Muhammad is the Messenger of Allah, may Allah bestow peace and blessings upon him.',
		count: 1
	}
];

export default {
	source,
	basedOn,
	data: wiridData
};
