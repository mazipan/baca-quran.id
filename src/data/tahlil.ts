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
		title: 'Tawassul — Nabi Muhammad',
		arabic:
			'إِلَى حَضْرَةِ النَّبِيِّ الْمُصْطَفَى سَيِّدِنَا مُحمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَاٰلِهِ وَأَزْوَاجِهِ وَأَوْلَادِهِ وَذُرِّيَّاتِهِ الْفَاتِحَةُ',
		latin:
			'Ilaa hadlratin-nabiyyil-musthafaa sayyidinaa Muhammadin shallallaahu ’alayhi wa sallama wa aalihi wa azwaajihi wa awlaadihii wa dzurriyyaatihii, al-Faatihah',
		translation:
			'Kepada yang terhormat Nabi Muhammad saw, segenap keluarga, istri-istrinya, anak-anaknya, dan keturunannya. Al-Fatihah.',
		translationEn:
			'To the honored presence of Prophet Muhammad saw, his family, wives, children, and descendants. Al-Fatihah.',
		count: 1
	},
	{
		id: 2,
		order: 2,
		title: 'Tawassul — Para Nabi & Ulama NU',
		arabic:
			'ثُمَّ إِلَى حَضْرَةِ إِخْوَانِهِ مِنَ الْأَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالْأَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ وَالْعُلَمَاءِ الْعَامِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِ الْمَلَائِكَةِ الْمُقَرَّبِيْنَ، خُصُوْصًا إِلَى سَيِّدِنَا الشَّيْخِ عَبْدِ الْقَادِرِ الْجِيْلَانِي وَخُصُوْصًا إِلَى مُؤَسِّسِيْ جَمْعِيَّةِ نَهْضَةِ الْعُلَمَاءِ الْفَاتِحَةُ',
		latin:
			'Tsumma ilaa hadlrati ikhwaanihi minal-anbiyaa’i wal-mursaliina wal-awliyaa’i wasy-syuhadaa’i wash-shaalibiina wash-shahaabati wat-taabi’iina wal-’ulama’il-’aamiliina wal-mushannifiiinal-mukhlashiina wa jamii’il-malaa’ikatil-muqarrabiina, khushushishan ilaa sayyidinasy-syaikhi ’abdil qaadir al-jiilanii wa khushushishan ilaa muaassisii jam’iyyah nahdlatil-’ulama, al-Faatihah',
		translation:
			'Lalu kepada segenap saudara beliau dari kalangan para nabi, rasul, wali, syuhada, orang-orang saleh, sahabat, tabi’in, ulama yang mengamalkan ilmunya, ulama penulis yang ikhlas, semua malaikat Muqarrabin; khusus Syekh Abdul Qadir al-Jilani dan para pendiri Nahdlatul Ulama. Al-Fatihah.',
		translationEn:
			'Then to his brothers from among the prophets, messengers, saints, martyrs, righteous ones, companions, tabi’in, working scholars, sincere authors, all Muqarrabin angels; especially Shaikh Abdul Qadir al-Jilani and the founders of Nahdlatul Ulama. Al-Fatihah.',
		count: 1
	},
	{
		id: 3,
		order: 3,
		title: 'Tawassul — Semua Ahli Kubur',
		arabic:
			'ثُمَّ إِلَى جَمِيْعِ أَهْلِ الْقُبُوْرِ مِنَ الْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ مِنْ مَشَارِقِ الْأَرْضِ إِلَى مَغَارِبِهَا بَرِّهَا وَبَحْرِهَا خُصُوْصًا إِلَى اٰبَائِنَا وَأُمَّهَاتِنَا وَأَجْدَادِنَا وَجَدَّاتِنَا وَمَشَايِخِنَا وَمَشَايِخِ مَشَايِخِنَا وَأَسَاتِذَةِ أَسَاتِذَتِنَا وَلِمَنْ أَحْسَنَ إِلَيْنَا وَلِمَنِ اجْتَمَعْنَا هٰهُنَا بِسَبَبِهِ الْفَاتِحَةُ',
		latin:
			'Tsumma ilaa jamii’i ahlil-qubuuri minal-muslimiina wal-muslimaat wal-mu’miniina wal-mu’minaat min masyaariqil-ardli ilaa maghaaribihaa barrihaa wa bahrihaa khushushishan ilaa aabaa’inaa wa ummahaaatinaa wa ajdaadinaa wa jaddaatinaa wa masyaayikhinaa wa masyaayikhi masyaayikhinaa wa asaatid-zati asaatidzatinaa wa liman ahsana ilaynaa wa limanij-tama’naa haahunaa bisababihi, al-Faatihah',
		translation:
			'Kemudian kepada semua ahli kubur Muslimin dan Muslimat dari seluruh penjuru bumi, khususnya kepada orang tua, kakek-nenek, guru-guru kami, dan semua yang telah berbuat baik kepada kami. Al-Fatihah.',
		translationEn:
			'Then to all deceased Muslims from the east and west of the earth, especially our parents, grandparents, teachers, and all who have done good to us. Al-Fatihah.',
		count: 1
	},
	{
		id: 4,
		order: 4,
		title: 'Tawassul — Arwah yang Didoakan',
		arabic:
			'ثُمَّ إِلَى جَمِيْعِ أهْلِ الْقُبُوْرِ مِمَّنْ ذُكِرَتْ أَسْمَاؤُهُ فِيْ هٰذِهِ الرِّسَالَةِ حَضْرَةِ رُوْحِ … وَحَضْرَةِ رُوْحِ … رَحِمَهُمُ اللهُ وَغَفَرَهُمْ، الْفَاتِحَةُ',
		latin:
			'Tsumma ilaa jamii’i ahlil-qubuuri mimman dzukirat asmaa’uhu fii haadzihir-risaalati hadlrati ruuhi … wa hadlrati ruuhi … rahimahumullahu wa ghafarahum, al-Faatihah',
		translation:
			'Kemudian kepada semua ahli kubur yang namanya disebutkan dalam majelis ini, kepada arwah … dan arwah …. Semoga Allah merahmati dan mengampuni mereka. Al-Fatihah.',
		translationEn:
			'Then to all the deceased whose names are mentioned in this gathering, to the soul of … and the soul of …. May Allah have mercy on them and forgive them. Al-Fatihah.',
		count: 1,
		note: 'Sebutkan nama arwah yang didoakan',
		noteEn: 'Mention the names of the souls being remembered'
	},
	{
		id: 5,
		order: 5,
		title: 'Surat Al-Ikhlas',
		arabic:
			'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. قُلْ هُوَ اللّٰهُ أَحَدٌ. اللّٰهُ الصَّمَدُ. لَمْ يَلِدْ وَلَمْ يُوْلَدْ. وَلَمْ يَكُنْ لَّهُ كُفُوًا أَحَدٌ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Qul huwallaahu ahad. Allaahush-shamad. Lam yalid wa lam yuulad. Wa lam yakul lahuu kufuwan ahad',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu. Dia tiada beranak dan tiada pula diperanakkan. Dan tidak ada seorang pun yang setara dengan Dia.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born. Nor is there to Him any equivalent.',
		count: 3
	},
	{
		id: 6,
		order: 6,
		title: 'Tahlil & Takbir',
		arabic: 'لَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ',
		latin: 'Laa ilaaha illallaahu wallaahu akbar',
		translation: 'Tiada tuhan selain Allah. Allah Maha Besar.',
		translationEn: 'There is no deity but Allah. Allah is the Greatest.',
		count: 1
	},
	{
		id: 7,
		order: 7,
		title: 'Surat Al-Falaq',
		arabic:
			'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ. مِنْ شَرِّ مَا خَلَقَ. وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ. وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ. وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Qul a’uudzu bi rabbil-falaq. Min syarri maa khalaq. Wa min syarri ghaasiqin idzaa waqab. Wa min syarrin-naffaatsaati fil-’uqad. Wa min syarri haasidin idzaa hasad',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Tuhan yang menguasai subuh, dari kejahatan makhluk-Nya, dari kejahatan malam apabila telah gelap gulita, dari kejahatan penyihir yang meniup pada buhul-buhul, dan dari kejahatan pendengki bila ia dengki.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge in the Lord of daybreak, from the evil of that which He created, from the evil of darkness when it settles, from the evil of the blowers in knots, and from the evil of an envier when he envies.',
		count: 1
	},
	{
		id: 8,
		order: 8,
		title: 'Tahlil & Takbir',
		arabic: 'لَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ',
		latin: 'Laa ilaaha illallaahu wallaahu akbar',
		translation: 'Tiada tuhan selain Allah. Allah Maha Besar.',
		translationEn: 'There is no deity but Allah. Allah is the Greatest.',
		count: 1
	},
	{
		id: 9,
		order: 9,
		title: 'Surat An-Nas',
		arabic:
			'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. قُلْ أَعُوذُ بِرَبِّ النَّاسِ. مَلِكِ النَّاسِ. إِلَهِ النَّاسِ. مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ. الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ. مِنَ الْجِنَّةِ وَالنَّاسِ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Qul a’uudzu bi rabbin-naas. Malikin-naas. Ilaahin-naas. Min syarril-waswaasil-khannaas. Alladzii yuwaswisu fii shuduurin-naas. Minal-jinnati wan-naas',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Aku berlindung kepada Tuhan manusia, Raja manusia, Sembahan manusia, dari kejahatan bisikan setan yang biasa bersembunyi, yang membisikkan kejahatan ke dalam dada manusia, dari golongan jin dan manusia.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer who whispers in the breasts of mankind, from among the jinn and mankind.',
		count: 1
	},
	{
		id: 10,
		order: 10,
		title: 'Tahlil & Takbir',
		arabic: 'لَا إِلٰهَ إِلَّا اللهُ وَاللهُ أَكْبَرُ',
		latin: 'Laa ilaaha illallaahu wallaahu akbar',
		translation: 'Tiada tuhan selain Allah. Allah Maha Besar.',
		translationEn: 'There is no deity but Allah. Allah is the Greatest.',
		count: 1
	},
	{
		id: 11,
		order: 11,
		title: 'Al-Fatihah',
		arabic:
			'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ. الرَّحْمٰنِ الرَّحِيْمِ. مٰلِكِ يَوْمِ الدِّيْنِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِيْنُ. اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ. صِرَاطَ الَّذِيْنَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ. آمِيْنَ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Al-hamdu lillaahi rabbil-’aalamiin. Ar-rahmaanir-rahiim. Maaliki yawmid-diin. Iyyaaka na’budu wa iyyaaka nasta’iin. Ihdinash-shiraathal-mustaqiim. Shiraathal-ladziina an’amta ’alayhim ghayril-maghdhuubi ’alayhim wa ladhdh-dhaalliin. Aamiin',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah, Tuhan semesta alam. Yang Maha Pengasih lagi Maha Penyayang. Yang menguasai hari pembalasan. Hanya kepada-Mu kami menyembah dan hanya kepada-Mu kami memohon pertolongan. Tunjukkanlah kami ke jalan yang lurus, yaitu jalan orang-orang yang Engkau beri nikmat, bukan jalan mereka yang dimurkai dan bukan pula jalan mereka yang sesat. Amin.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. All praise is due to Allah, Lord of the worlds. The Most Gracious, the Most Merciful. Sovereign of the Day of Recompense. It is You we worship and You we ask for help. Guide us to the straight path — the path of those You have blessed, not those who incurred anger nor those who went astray. Amen.',
		count: 1
	},
	{
		id: 12,
		order: 12,
		title: 'Awal Al-Baqarah (1–5)',
		arabic:
			'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ. الۤمۤ. ذَالِكَ الْكِتَابُ لَا رَيْبَ فِيْهِ هُدًى لِّلْمُتَّقِيْنَ. الَّذِيْنَ يُؤْمِنُوْنَ بِالْغَيْبِ وَيُقِيْمُوْنَ الصَّلٰوةَ وَمِمَّا رَزَقْنٰهُمْ يُنْفِقُوْنَ. وَالَّذِيْنَ يُؤْمِنُوْنَ بِمَآ اُنْزِلَ اِلَيْكَ وَمَآ اُنْزِلَ مِنْ قَبْلِكَ وَبِالْاٰخِرَةِ هُمْ يُوْقِنُوْنَ. اُولٰۤىِٕكَ عَلٰى هُدًى مِّنْ رَّبِّهِمْ وَاُولٰۤىِٕكَ هُمُ الْمُفْلِحُوْنَ',
		latin:
			'Bismillaahir-rahmaanir-rahiim. Alif laam miim. Dzaalikal-kitaabu laa rayba fiih, hudal lil-muttaqiin. Alladziina yu’minuuna bil-ghaybi wa yuqiimuunas-shalaata wa mimmaa razaqnaahum yunfiquun. Walladziina yu’minuuna bimaa unzila ilayka wa maa unzila min qablik, wa bil-aakhirati hum yuuqinuun. Ulaa’ika ’alaa hudam mir rabbihim wa ulaa’ika humul-muflihuun',
		translation:
			'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Alif Lam Mim. Kitab ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa. Yaitu mereka yang beriman kepada yang ghaib, yang mendirikan shalat, dan menafkahkan sebagian rezeki yang Kami anugerahkan. Dan mereka yang beriman kepada Al-Quran’ yang diturunkan kepadamu dan kitab-kitab sebelumnya, serta mereka yakin akan adanya akhirat. Merekalah yang tetap mendapat petunjuk dari Tuhan mereka dan merekalah orang-orang yang beruntung.',
		translationEn:
			'In the name of Allah, the Most Gracious, the Most Merciful. Alif Lam Mim. This Book — there is no doubt about it — is guidance for those conscious of Allah. Who believe in the unseen, establish prayer, and spend from what We have provided; and who believe in what was revealed to you and what was revealed before you, and of the Hereafter they are certain. Those are upon guidance from their Lord, and it is those who are the successful.',
		count: 1
	},
	{
		id: 13,
		order: 13,
		title: 'Al-Baqarah 163',
		arabic: 'وَإِلَهُكُمْ إِلَهٌ وَّاحِدٌ لَّا إِلَهَ إِلَّا هُوَ الرَّحْمٰنُ الرَّحِيْمُ',
		latin: 'Wa ilaahukum ilaahuw waahid, laa ilaaha illaa huwar-rahmaanur-rahiim',
		translation:
			'Dan Tuhanmu adalah Tuhan Yang Maha Esa; tidak ada tuhan selain Dia, Yang Maha Pengasih lagi Maha Penyayang.',
		translationEn:
			'And your god is one God. There is no deity except Him, the Entirely Merciful, the Especially Merciful.',
		count: 1
	},
	{
		id: 14,
		order: 14,
		title: 'Ayat Kursi (Al-Baqarah 255)',
		arabic:
			'اللّٰهُ لَآ اِلٰهَ اِلَّا هُوَ الْحَيُّ الْقَيُّوْمُ لَا تَأْخُذُهُ سِنَةٌ وَّلَا نَوْمٌ لَهُ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهُ اِلَّا بِاِذْنِهِ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهِ اِلَّا بِمَا شَاۤءَ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَ وَلَا يَـُٔوْدُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيْمُ',
		latin:
			'Allaahu laa ilaaha illaa huwal-hayyul-qayyuum, laa ta’khudzuhu sinatuw wa laa naum, lahuu maa fis-samaawaati wa maa fil-ardl, man dzal-ladzii yasyfa ’u ’indahu illaa bi-idznih, ya’lamu maa bayna aydiihim wa maa khalfahum, wa laa yuhiithuuna bisyay ’im min ’ilmihii illaa bimaa syaa’, wasi’a kursiyyuhus-samaawaati wal-ardl, wa laa ya’uuduhuu hifzhuhumaa, wa huwal-’aliyyul-’azhiim',
		translation:
			'Allah, tidak ada tuhan selain Dia, Yang Maha Hidup lagi terus-menerus mengurus makhluk-Nya. Tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang ada di hadapan dan di belakang mereka. Mereka tidak mengetahui sesuatu dari ilmu-Nya kecuali apa yang dikehendaki-Nya. Kursi-Nya meliputi langit dan bumi. Dia tidak merasa berat menjaga keduanya. Dialah Yang Maha Tinggi lagi Maha Agung.',
		translationEn:
			'Allah — there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and earth. Who can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.',
		count: 1
	},
	{
		id: 15,
		order: 15,
		title: 'Surat Yasin',
		arabic:
			'يٰسۤ. وَالْقُرْاٰنِ الْحَكِيْمِ. اِنَّكَ لَمِنَ الْمُرْسَلِيْنَ. عَلٰى صِرَاطٍ مُّسْتَقِيْمٍ ...',
		latin:
			'Yaa siin. Wal-qur’aanil-hakiim. Innaka laminal-mursaliin. ’alaa shiraathim mustaqiim ...',
		translation:
			'Ya Sin. Demi Al-Quran’ yang penuh hikmah. Sesungguhnya kamu adalah salah seorang dari para rasul. Yang berada di atas jalan yang lurus ...',
		translationEn:
			'Ya Sin. By the Quran, full of wisdom. Indeed you are from among the messengers. On a straight path ...',
		count: 1,
		note: 'Baca Surat Yasin secara lengkap sebagai bagian utama Tahlil',
		noteEn: 'Read Surah Yasin in full as a main part of Tahlil',
		href: '/36'
	},
	{
		id: 16,
		order: 16,
		title: 'Istighfar',
		arabic: 'أَسْتَغْفِرُ اللهَ الْعَظِيْمَ',
		latin: 'Astaghfirullahal-’azhiim',
		translation: 'Aku mohon ampun kepada Allah Yang Maha Agung.',
		translationEn: 'I seek forgiveness from Allah the Almighty.',
		count: 3
	},
	{
		id: 17,
		order: 17,
		title: 'Afdlalul Dzikir',
		arabic: 'أَفْضَلُ الذِّكْرِ فَاعْلَمْ أَنَّهُ لَا إِلٰهَ إِلَّا اللهُ، حَيٌّ مَوْجُوْدٌ',
		latin: 'Afdlaludz-dzikri fa’lam annahu laa ilaaha illallaahu, hayyum mawjuud',
		translation:
			'Sebaik-baik dzikir — ketahuilah — adalah La ilaha illallah, tiada tuhan selain Allah, Yang Maha Hidup dan Ada.',
		translationEn:
			'The best of remembrance — know that it is La ilaha illallah, there is no deity but Allah, the Ever-Living and Present.',
		count: 1
	},
	{
		id: 18,
		order: 18,
		title: 'La ilaha illallahu — hayyun ma’bud',
		arabic: 'لَا إِلٰهَ إِلَّا اللهُ، حَيٌّ مَعْبُوْدٌ',
		latin: 'Laa ilaaha illallaahu, hayyum ma’buud',
		translation: 'Tiada tuhan selain Allah, Yang Maha Hidup dan disembah.',
		translationEn: 'There is no deity but Allah, the Ever-Living Who is worshipped.',
		count: 1
	},
	{
		id: 19,
		order: 19,
		title: 'La ilaha illallahu — hayyun baaq',
		arabic: 'لَا إِلٰهَ إِلَّا اللهُ، حَيٌّ بَاقٍ',
		latin: 'Laa ilaaha illallaahu, hayyum baaq',
		translation: 'Tiada tuhan selain Allah, Yang Maha Hidup dan kekal.',
		translationEn: 'There is no deity but Allah, the Ever-Living and Eternal.',
		count: 1
	},
	{
		id: 20,
		order: 20,
		title: 'Tahlil — La ilaha illallah',
		arabic: 'لَا إِلٰهَ إِلَّا اللهُ',
		latin: 'Laa ilaaha illallaah',
		translation: 'Tiada tuhan selain Allah.',
		translationEn: 'There is no deity but Allah.',
		count: 100
	},
	{
		id: 21,
		order: 21,
		title: 'Shalawat Nabi',
		arabic: 'اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ اَللّٰهُمَّ صَلِّ عَلَيْهِ وَسَلِّمْ',
		latin: 'Allaahumma shalli ’alaa sayyidinaa Muhammadin, Allaahumma shalli ’alayhi wa sallim',
		translation:
			'Ya Allah, limpahkanlah rahmat kepada junjungan kami Nabi Muhammad. Ya Allah, limpahkanlah rahmat dan keselamatan kepada beliau.',
		translationEn:
			'O Allah, send blessings upon our master Muhammad. O Allah, send blessings and peace upon him.',
		count: 2
	},
	{
		id: 22,
		order: 22,
		title: 'Tasbih — Adada ma Khalaq',
		arabic: 'سُبْحَانَ اللهِ عَدَدَ مَا خَلَقَ اللهُ',
		latin: 'Subhaanallaahi ’adada maa khalaqallaahu',
		translation: 'Maha Suci Allah sebanyak makhluk yang Allah ciptakan.',
		translationEn: 'Glory be to Allah as many times as the number of His creation.',
		count: 7
	},
	{
		id: 23,
		order: 23,
		title: 'Tasbih — Subhanallah wa Bihamdihi',
		arabic: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ سُبْحَانَ اللهِ الْعَظِيْمِ',
		latin: 'Subhaanallaahi wa bihamdihii subhaanallaahil-’azhiim',
		translation: 'Maha Suci Allah dengan segala pujian untuk-Nya. Maha Suci Allah Yang Maha Agung.',
		translationEn: 'Glory be to Allah and all praise is for Him. Glory be to Allah the Almighty.',
		count: 33
	},
	{
		id: 24,
		order: 24,
		title: 'Shalawat Habibika',
		arabic:
			'اَللّٰهُمَّ صَلِّ عَلَى حَبِيْبِكَ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلِّمْ',
		latin:
			'Allaahumma shalli ’alaa habiibika sayyidinaa Muhammadin wa ’alaa aalihi wa shahbihi wa sallim',
		translation:
			'Ya Allah, limpahkanlah rahmat kepada kekasih-Mu junjungan kami Nabi Muhammad, beserta keluarga dan sahabatnya, dan limpahkanlah keselamatan kepada mereka.',
		translationEn:
			'O Allah, send blessings upon Your beloved, our master Muhammad, his family and companions, and grant them peace.',
		count: 2
	},
	{
		id: 25,
		order: 25,
		title: 'Shalawat — wa Barik wa Sallim',
		arabic:
			'اَللّٰهُمَّ صَلِّ عَلَى حَبِيْبِكَ سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَبَارِكْ وَسَلِّمْ أَجْمَعِيْنَ',
		latin:
			'Allaahumma shalli ’alaa habiibika sayyidinaa Muhammadin wa ’alaa aalihi wa shahbihi wa baarik wa sallim ajma’iin',
		translation:
			'Ya Allah, limpahkanlah rahmat kepada kekasih-Mu junjungan kami Nabi Muhammad, beserta keluarga dan sahabatnya. Limpahkanlah pula berkah dan keselamatan kepada mereka semua.',
		translationEn:
			'O Allah, send blessings upon Your beloved our master Muhammad, his family and companions. Bestow upon them all blessings and peace.',
		count: 1
	},
	{
		id: 26,
		order: 26,
		title: 'Doa Tahlil',
		arabic:
			'أَعُوْذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ، بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ، اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ، حَمْدَ الشَّاكِرِيْنَ حَمْدَ النَّاعِمِيْنَ، حَمْدًا يُّوَافِي نِعَمَهُ وَيُكَافِئُ مَزِيْدَهُ، يَا رَبَّنَا لَكَ الْحَمْدُ كَمَا يَنْبَغِيْ لِجَلَالِ وَجْهِكَ وَعَظِيْمِ سُلْطَانِكَ، اَللّٰهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَّعَلَى اٰلِ سَيِّدِنَا مُحمَّدٍ. اَللّٰهُمَّ تَقَبَّلْ وَأَوْصِلْ ثَوَابَ مَا قَرَاْنَاهُ مِنَ الْقُرْآنِ الْعَظِيْمِ وَمَا هَلَّلْنَا وَمَا سَبَّحْنَا وَمَا اسْتَغْفَرْنَا وَمَا صَلَّيْنَا عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ هَدِيَّةً وَاصِلَةً وَرَحْمَةً نَازِلَةً وَبَرَكَةً شَامِلَةً إِلَى حَضَرَةِ حَبِيْبِنَا وَشَفِيْعِنَا وَقُرَّةِ أَعْيُنِنَا سَيِّدِنَا وَمَوْلَانَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَإِلَى جَمِيْعِ إِخْوَانِهِ مِنَ الْأَنْبِيَاءِ وَالْمُرْسَلِيْنَ وَالْأَوْلِيَاءِ وَالشُّهَدَاءِ وَالصَّالِحِيْنَ وَالصَّحَابَةِ وَالتَّابِعِيْنَ وَالْعُلَمَاءِ الْعَامِلِيْنَ وَالْمُصَنِّفِيْنَ الْمُخْلِصِيْنَ وَجَمِيْعِ الْمُجَاهِدِيْنَ فِي سَبِيْلِ اللهِ رَبِّ الْعَلَمِيْنَ وَالْمَلَائِكَةِ الْمُقَرَّبِيْن، خُصُوْصًا إِلَى سَيِّدِنَا الشَّيْخِ عَبْدِ الْقَادِرِ الْجِيْلَانِيّ، ثُمَّ إِلَى أَرْوَاحِ جَمِيْعِ أَهْلِ الْقُبُوْرِ مِنَ الْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ مِنْ مَشَارِقِ الْأَرْضِ وَمَغَارِبِهَا بَرِّهَا وَبَحْرِهَا خُصُوْصًا إِلَى آبَائِنَا وَاُمَّهَاتِنَا وَأَجْدَادِنَا وَجَدَّاتِنَا، وَنَخَصُّ خَصُوْصًا إِلَى مَنِ اجْتَمَعْنَا هٰهُنَا بِسَبَبِهِ وَلِأَجْلِهِ',
		latin:
			'A’uudzubillaahi minasy-syaithoonir-rajiim, bismillaahir-rahmaanir-rahiim, alhamdulillaahi rabbil-’aalamiin, hamdasysyaakiriin hamdan-naaPOSimiin, hamdan yuwaafii ni’amahu wa yukaafi ’u maziiidah, yaa rabbanaa lakal-hamdu kamaa yanbaghi lijalali wajhika wa ’azhiimi sulthaanaka, allaahumma shalli ’alaa sayyidinaa muhammadin wa ’alaa aali sayyidinaa muhammadin. Allaahumma taqabbal wa awshil tsawaaba maa qara’naahu minal-qur ’aanil-’azhiim wa maa hallalnaa wa maa sabbahnaa wa maa staghfarnaa wa maa shallaynaa ’alaa sayyidinaa muhammadin shallallaahu ’alayhi wa sallama hadiyyatan waashilatan wa rahmatan naazilatan wa barakatan syaamilatan ilaa hadlrati habiibinaa wa syafii’inaa wa qurrati a’yuninaa sayyidinaa wa mawlaanaa muhammadin shallallaahu ’alayhi wa sallama, wa ilaa jamii’i ikhwaanihi minal-anbiyaa’i wal-mursaliina wal-awliyaa’i wasy-syuhadaa’i wash-shaalihiina wash-shahaabati wat-taabi’iina wal-’ulama’il-’aamiliina wal-mushannifiinal-mukhlashiina wa jamii’il-mujaahidiina fii sabiilillaahi rabbil-’aalamiin wal-malaa’ikatil-muqarrabiin, khushushishan ilaa sayyidinasy-syaikhi ’abdil qaadir al-jiilanii, tsumma ilaa arwaahi jamii’i ahlil-qubuuri minal-muslimiiina wal-muslimaat wal-mu’miniina wal-mu’minaat min masyaariqil-ardli wa maghaaribihaa barrihaa wa bahrihaa khushushishan ilaa aabaa’inaa wa ummahaaatinaa wa ajdaadinaa wa jaddaatinaa, wa nakhushshshu khushushishan ilaa man ijtama’naa haahunaa bisababihi wa li’ajlih',
		translation:
			'Aku berlindung kepada Allah dari setan yang terkutuk. Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang. Segala puji bagi Allah Tuhan semesta alam. Ya Allah, terimalah dan sampaikanlah pahala bacaan Al-Quran’ yang agung, tahlil, tasbih, istighfar, dan shalawat yang kami baca kepada Nabi Muhammad saw sebagai hadiah yang sampai, rahmat yang turun, dan berkah yang merata — kepada kekasih kami Nabi Muhammad saw, kepada semua para nabi, rasul, wali, syuhada, sahabat, ulama, dan khusus Syekh Abdul Qadir al-Jilani. Kemudian kepada arwah seluruh ahli kubur kaum Muslim dari seluruh penjuru bumi, khusus kepada orang tua dan kakek-nenek kami, dan terutama kepada arwah yang menjadi sebab pertemuan ini.',
		translationEn:
			'I seek refuge in Allah from the accursed devil. In the name of Allah the Most Gracious the Most Merciful. All praise be to Allah. O Allah, accept and convey the reward of what we have recited of the Noble Quran, our tahlil, tasbih, istighfar, and salawat to our master Muhammad saw — as a gift that reaches, a descending mercy, and an encompassing blessing — to him, all prophets, messengers, saints, martyrs, companions, scholars, especially Shaikh Abdul Qadir al-Jilani, and to the souls of all Muslims in their graves, especially our parents and grandparents, and especially to the souls remembered in this gathering.',
		count: 1
	},
	{
		id: 27,
		order: 27,
		title: 'Doa Arwah',
		arabic:
			'اَللّٰهُمَّ اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَعَافِهِمْ وَاعْفُ عَنْهُمْ، اَللّٰهُمَّ أَنْزِلِ الرَّحْمَةَ وَالْمَغْفِرَةَ عَلَى أَهْلِ الْقُبُوْرِ مِنْ أَهْلِ لَا إِلٰهَ إِلَّا اللهُ مُحَمَّدٌ رَّسُوْلُ اللهِ',
		latin:
			'Allaahummagh-fir lahum warhamhum wa ’aafihim wa ’fu ’anhum, allaahumma anzilir-rahmata wal-maghfirata ’alaa ahlil-qubuuri min ahli laa ilaaha illallaahu muhammadur-rasuulullaah',
		translation:
			'Ya Allah, ampunilah mereka, kasihanilah mereka, berilah mereka afiat, dan maafkanlah mereka. Ya Allah, turunkanlah rahmat dan ampunan kepada ahli kubur dari kalangan yang mengucapkan La ilaha illallah Muhammad Rasulullah.',
		translationEn:
			'O Allah, forgive them, have mercy on them, grant them wellbeing, and pardon them. O Allah, send down mercy and forgiveness upon the people of the graves among those who said La ilaha illallah Muhammad Rasulullah.',
		count: 1
	},
	{
		id: 28,
		order: 28,
		title: 'Doa Penutup',
		arabic:
			'رَبَّنَا أَرِنَا الْحَقَّ حَقًّا وَّارْزُقْنَا اتِّبَاعَهُ، وَأَرِنَا الْبَاطِلَ بَاطِلًا وَّارْزُقْنَا اجْتِنَابَهُ، رَبَّنَا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَّفِي الْآخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ، سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ وَسَلَامٌ عَلَى الْمُرْسَلِيْنَ وَالْحَمْدُ لِلّٰهِ رَبِّ الْعَلَمِيْنَ، اَلْفَاتِحَة',
		latin:
			'Rabbanaa arinal-haqqa haqqan warzuqnat-tibaa’ah, wa arinal-baathila baathilan warzuqnaj-tinaabah. Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa ’adzaban-naar. Subhaana rabbika rabbil-’izzati ’ammaa yashifuun wa salaamun ’alal-mursaliina wal-hamdulillaahi rabbil-’aalamiin. Al-Faatihah.',
		translation:
			'Ya Tuhan kami, tunjukkanlah kami kebenaran sebagai kebenaran dan jadikanlah kami mengikutinya. Tunjukkanlah kami kebatilan sebagai kebatilan dan jadikanlah kami menjauhinya. Ya Tuhan kami, berikanlah kami kebaikan di dunia dan di akhirat, dan jagalah kami dari siksa api neraka. Maha Suci Tuhanmu dari apa yang mereka sifatkan. Semoga keselamatan terlimpah atas para rasul. Dan segala puji bagi Allah Tuhan semesta alam. Al-Fatihah.',
		translationEn:
			'Our Lord, show us truth as truth and grant us to follow it. Show us falsehood as falsehood and grant us to avoid it. Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire. Glory be to your Lord, the Lord of Might, above what they describe. Peace upon the messengers. And all praise be to Allah, Lord of the worlds. Al-Fatihah.',
		count: 1
	}
];

const tahlil = {
	data: tahlilData,
	basedOn,
	source
};

export default tahlil;
