// Transliteration rules (Indonesian convention):
//   - "Allahumma" (not "Alloohumma" / "Allohumma")
//   - Long vowels: aa / ii / uu
//   - No diacriticals (ṣ ḥ ʿ) — plain ASCII for readability
//   - Tasydid (shaddah): double the consonant (e.g. "alladzii", not "aladzi")
//   - Hamzatul wasl elided: "wab'ats" not "wa ib'ats"
// Primary source: Hisnul Muslim by Sa'id ibn Ali ibn Wahf al-Qahtani

export type DoaCategory =
	| 'makan-minum'
	| 'tidur'
	| 'kebersihan'
	| 'keluar-masuk'
	| 'safar'
	| 'keluarga'
	| 'pelajaran'
	| 'kesehatan'
	| 'cuaca-alam'
	| 'perlindungan'
	| 'sholat'
	| 'umum';

export type DailyDoaItem = {
	id: string;
	title: string;
	titleEn: string;
	arabic: string;
	latin: string;
	translation: string;
	translationEn: string;
	categories: DoaCategory[];
	source: string;
	sourceUrl?: string;
	noteId?: string;
	noteEn?: string;
};

export const DOA_CATEGORIES: ReadonlyArray<{
	id: DoaCategory;
	emoji: string;
	i18nKey: string;
}> = [
	{ id: 'makan-minum', emoji: '🍽️', i18nKey: 'daily-doa.categories.makan-minum' },
	{ id: 'tidur', emoji: '😴', i18nKey: 'daily-doa.categories.tidur' },
	{ id: 'kebersihan', emoji: '🚿', i18nKey: 'daily-doa.categories.kebersihan' },
	{ id: 'keluar-masuk', emoji: '🚪', i18nKey: 'daily-doa.categories.keluar-masuk' },
	{ id: 'safar', emoji: '✈️', i18nKey: 'daily-doa.categories.safar' },
	{ id: 'keluarga', emoji: '👨‍👩‍👧', i18nKey: 'daily-doa.categories.keluarga' },
	{ id: 'pelajaran', emoji: '📚', i18nKey: 'daily-doa.categories.pelajaran' },
	{ id: 'kesehatan', emoji: '🏥', i18nKey: 'daily-doa.categories.kesehatan' },
	{ id: 'cuaca-alam', emoji: '🌦️', i18nKey: 'daily-doa.categories.cuaca-alam' },
	{ id: 'perlindungan', emoji: '🛡️', i18nKey: 'daily-doa.categories.perlindungan' },
	{ id: 'sholat', emoji: '🕌', i18nKey: 'daily-doa.categories.sholat' },
	{ id: 'umum', emoji: '🤲', i18nKey: 'daily-doa.categories.umum' }
];

const dailyDoa: DailyDoaItem[] = [
	// ── MAKAN & MINUM ──────────────────────────────────────────────────────────
	{
		id: 'doa-sebelum-makan',
		title: 'Doa Sebelum Makan',
		titleEn: 'Dua Before Eating',
		arabic: 'بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ',
		latin: "Bismillaahi wa 'alaa barakatillaah",
		translation: 'Dengan nama Allah dan atas berkah Allah.',
		translationEn: 'In the name of Allah and upon the blessings of Allah.',
		categories: ['makan-minum'],
		source: 'HR. Abu Dawud no. 3767; Hisnul Muslim §70'
	},
	{
		id: 'doa-sesudah-makan',
		title: 'Doa Sesudah Makan',
		titleEn: 'Dua After Eating',
		arabic: 'اَلْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
		latin: "Alhamdu lillaahil ladzii ath'amanaa wa saqaanaa wa ja'alanaa muslimiin",
		translation:
			'Segala puji bagi Allah yang telah memberi makan kami, memberi minum kami, dan menjadikan kami sebagai orang-orang Islam.',
		translationEn: 'All praise is for Allah Who has given us food and drink and made us Muslims.',
		categories: ['makan-minum'],
		source: 'HR. Abu Dawud no. 3850; Hisnul Muslim §76'
	},
	{
		id: 'doa-sesudah-minum-susu',
		title: 'Doa Sesudah Minum Susu',
		titleEn: 'Dua After Drinking Milk',
		arabic: 'اَللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ',
		latin: 'Allaahummaa baarik lanaa fiihi wa zidnaa minhu',
		translation: 'Ya Allah, berkahilah kami padanya dan tambahkanlah (rezeki) bagi kami darinya.',
		translationEn: 'O Allah, bless it for us and give us more of it.',
		categories: ['makan-minum'],
		source: 'HR. Abu Dawud no. 3730, Tirmidhi no. 3455; Hisnul Muslim §75',
		noteId: 'Dibaca setelah minum susu',
		noteEn: 'Recited after drinking milk'
	},
	{
		id: 'doa-lupa-basmalah-makan',
		title: 'Doa Lupa Membaca Sebelum Makan',
		titleEn: 'Dua When Forgetting Basmalah Before Eating',
		arabic: 'بِسْمِ اللَّهِ فِي أَوَّلِهِ وَآخِرِهِ',
		latin: 'Bismillaahi fii awwalihi wa aakhirihi',
		translation: 'Dengan nama Allah pada awal dan akhirnya.',
		translationEn: 'In the name of Allah at its beginning and its end.',
		categories: ['makan-minum'],
		source: 'HR. Abu Dawud no. 3767, Tirmidhi no. 1858; Hisnul Muslim §71',
		noteId: 'Dibaca ketika ingat bahwa belum membaca basmalah saat makan',
		noteEn: 'Recited when remembering that basmalah was not said at the start of eating'
	},
	{
		id: 'doa-berbuka-puasa',
		title: 'Doa Berbuka Puasa',
		titleEn: 'Dua for Breaking the Fast',
		arabic: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ',
		latin: "Dzahabazhzhama'u wabtallatil 'uruuqu wa tsabatal ajru in syaa'allaah",
		translation:
			'Telah hilang rasa haus, urat-urat telah basah, dan pahala telah ditetapkan, insya Allah.',
		translationEn:
			'The thirst has gone, the veins are moistened, and the reward is established, if Allah wills.',
		categories: ['makan-minum', 'umum'],
		source: 'HR. Abu Dawud no. 2357; Hisnul Muslim §59'
	},
	{
		id: 'doa-tamu-makan',
		title: 'Doa untuk Tuan Rumah yang Mengundang Makan',
		titleEn: 'Dua for the Host Who Invites to a Meal',
		arabic: 'اَللَّهُمَّ بَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ وَاغْفِرْ لَهُمْ وَارْحَمْهُمْ',
		latin: 'Allaahummaa baarik lahum fiimaa razaqtahum waghfir lahum warhamhum',
		translation:
			'Ya Allah, berkahilah mereka dalam rezeki yang telah Engkau berikan, ampunilah mereka, dan rahmatilah mereka.',
		translationEn:
			'O Allah, bless them in what You have provided for them, forgive them, and have mercy on them.',
		categories: ['makan-minum'],
		source: 'HR. Muslim no. 2042; Hisnul Muslim §74'
	},
	{
		id: 'doa-berbuka-di-rumah-orang',
		title: 'Doa Berbuka di Rumah Orang Lain',
		titleEn: "Dua for Breaking Fast at Someone's Home",
		arabic:
			'أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ وَصَلَّتْ عَلَيْكُمُ الْمَلَائِكَةُ',
		latin:
			"Aftara 'indakumushshaa'imuuna wa akala tha'aamakumul abraaru wa shallat 'alaikumul malaa'ikah",
		translation:
			'Semoga orang-orang yang berpuasa berbuka di tempat kalian, orang-orang yang baik memakan makanan kalian, dan para malaikat mendoakan kalian.',
		translationEn:
			'May the fasting break their fast with you, may the righteous eat your food, and may the angels pray for blessings upon you.',
		categories: ['makan-minum'],
		source: 'HR. Abu Dawud no. 3854, Ibn Majah no. 1747; Hisnul Muslim §72'
	},
	{
		id: 'doa-minum-air-zamzam',
		title: 'Doa Minum Air Zamzam',
		titleEn: 'Dua When Drinking Zamzam Water',
		arabic:
			'اَللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا وَاسِعًا وَشِفَاءً مِنْ كُلِّ دَاءٍ',
		latin:
			"Allaahummaa innii as'aluka 'ilman naafi'an wa rizqan waasi'an wa syifaa'an min kulli daa'",
		translation:
			'Ya Allah, sesungguhnya aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang luas, dan kesembuhan dari segala penyakit.',
		translationEn:
			'O Allah, I ask You for beneficial knowledge, a wide provision, and healing from all disease.',
		categories: ['makan-minum', 'kesehatan'],
		source: 'HR. al-Hakim no. 1739; dinisbatkan dalam kitab-kitab doa',
		noteId: 'Dibaca sambil menghadap kiblat saat minum air zamzam',
		noteEn: 'Recited while facing the qibla when drinking Zamzam water'
	},

	// ── TIDUR & BANGUN ─────────────────────────────────────────────────────────
	{
		id: 'doa-sebelum-tidur',
		title: 'Doa Sebelum Tidur',
		titleEn: 'Dua Before Sleeping',
		arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
		latin: 'Bismikallaahummaa amuutu wa ahyaa',
		translation: 'Dengan nama-Mu ya Allah, aku mati dan aku hidup.',
		translationEn: 'In Your name O Allah, I die and I live.',
		categories: ['tidur'],
		source: 'HR. Bukhari no. 6312, Muslim no. 2711; Hisnul Muslim §24'
	},
	{
		id: 'doa-bangun-tidur',
		title: 'Doa Bangun Tidur',
		titleEn: 'Dua Upon Waking Up',
		arabic: 'اَلْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
		latin: "Alhamdu lillaahil ladzii ahyaanaa ba'da maa amaatanaa wa ilaihinnusyuur",
		translation:
			'Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami (menidurkan), dan kepada-Nya lah kami dibangkitkan.',
		translationEn:
			'All praise is for Allah Who gave us life after having taken it from us and unto Him is the Resurrection.',
		categories: ['tidur'],
		source: 'HR. Bukhari no. 6312; Hisnul Muslim §27'
	},
	{
		id: 'doa-mimpi-buruk',
		title: 'Doa Saat Mimpi Buruk',
		titleEn: 'Dua When Having a Bad Dream',
		arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ وَمِنْ شَرِّ مَا رَأَيْتُ',
		latin: "A'uudzu billaahi minasy syaithaanirrajiimi wa min syarri maa ra'aitu",
		translation:
			'Aku berlindung kepada Allah dari setan yang terkutuk dan dari keburukan apa yang aku lihat (dalam mimpi).',
		translationEn:
			'I seek refuge in Allah from the accursed devil and from the evil of what I have seen (in my dream).',
		categories: ['tidur'],
		source: 'HR. Muslim no. 2262; Hisnul Muslim §34',
		noteId:
			'Meludah kecil ke kiri sebanyak 3 kali, kemudian tidak menceritakan mimpi buruk kepada siapapun',
		noteEn: 'Spit lightly to the left three times, then do not tell anyone about the bad dream'
	},
	{
		id: 'doa-tahajjud',
		title: 'Doa Bangun Malam (Tahajjud)',
		titleEn: 'Dua Upon Waking at Night (Tahajjud)',
		arabic:
			'اَللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ',
		latin:
			'Allaahummaa lakal hamdu anta nuurussamaawaati wal ardhi wa man fiihinnn, wa lakal hamdu anta qayyimussamaawaati wal ardhi wa man fiihinn',
		translation:
			'Ya Allah, milik-Mu segala puji, Engkau adalah cahaya langit dan bumi serta seisinya. Milik-Mu segala puji, Engkau adalah pemelihara langit dan bumi serta seisinya.',
		translationEn:
			'O Allah, to You belongs all praise. You are the Light of the heavens and earth and what they contain. To You belongs all praise. You are the Sustainer of the heavens and earth and what they contain.',
		categories: ['tidur', 'sholat'],
		source: 'HR. Bukhari no. 1120; Hisnul Muslim §30',
		noteId: 'Dibaca saat bangun untuk shalat malam (tahajjud)',
		noteEn: 'Recited upon waking for the night prayer (tahajjud)'
	},
	{
		id: 'doa-susah-tidur',
		title: 'Doa Saat Susah Tidur',
		titleEn: 'Dua When Unable to Sleep',
		arabic:
			'اَللَّهُمَّ غَارَتِ النُّجُومُ وَهَدَأَتِ الْعُيُونُ وَأَنْتَ حَيٌّ قَيُّومٌ لَا تَأْخُذُكَ سِنَةٌ وَلَا نَوْمٌ يَا حَيُّ يَا قَيُّومُ أَهْدِئْ لَيْلِي وَأَنِمْ عَيْنِي',
		latin:
			"Allaahummaa ghaarat nujuumu wa hada'atil 'uyuunu wa anta hayyun qayyuumun laa ta'khuduka sinatun wa laa nawmun, yaa hayyu yaa qayyuumu ahdi' lailii wa anim 'ainii",
		translation:
			'Ya Allah, bintang-bintang telah tenggelam, mata-mata telah tenang, sedangkan Engkau Maha Hidup dan Maha Berdiri Sendiri, tidak dihinggapi kantuk maupun tidur. Wahai Yang Maha Hidup, wahai Yang Maha Berdiri Sendiri, tenangkanlah malamku dan tidurkanlah mataku.',
		translationEn:
			'O Allah, the stars have set, the eyes have grown still, and You are the Ever-Living, Self-Sustaining, Who is not touched by slumber or sleep. O Ever-Living, O Self-Sustaining, calm my night and let my eyes sleep.',
		categories: ['tidur'],
		source: 'Riwayat dari al-Bazzar; Hisnul Muslim §32'
	},

	// ── KEBERSIHAN ─────────────────────────────────────────────────────────────
	{
		id: 'doa-masuk-wc',
		title: 'Doa Masuk Kamar Mandi / WC',
		titleEn: 'Dua Entering the Bathroom',
		arabic: 'اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
		latin: "Allaahummaa innii a'uudzu bika minal khubutsi wal khabaa'its",
		translation:
			'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari setan laki-laki dan setan perempuan.',
		translationEn: 'O Allah, I seek refuge in You from the male and female devils.',
		categories: ['kebersihan'],
		source: 'HR. Bukhari no. 142, Muslim no. 375; Hisnul Muslim §8',
		noteId: 'Dibaca sebelum masuk toilet/kamar mandi',
		noteEn: 'Recited before entering the bathroom/toilet'
	},
	{
		id: 'doa-keluar-wc',
		title: 'Doa Keluar Kamar Mandi / WC',
		titleEn: 'Dua Exiting the Bathroom',
		arabic: 'غُفْرَانَكَ',
		latin: 'Ghufraaanak',
		translation: '(Ya Allah,) aku memohon ampunan-Mu.',
		translationEn: '(O Allah,) I seek Your forgiveness.',
		categories: ['kebersihan'],
		source: 'HR. Abu Dawud no. 30, Tirmidhi no. 7, Ibn Majah no. 300; Hisnul Muslim §9'
	},
	{
		id: 'doa-sebelum-wudhu',
		title: 'Doa Sebelum Berwudhu',
		titleEn: 'Dua Before Wudhu',
		arabic: 'بِسْمِ اللَّهِ',
		latin: 'Bismillaah',
		translation: 'Dengan nama Allah.',
		translationEn: 'In the name of Allah.',
		categories: ['kebersihan', 'sholat'],
		source: 'HR. Abu Dawud no. 101, Ibn Majah no. 399; Hisnul Muslim §10',
		noteId: 'Dibaca sebelum memulai wudhu',
		noteEn: 'Recited before beginning wudhu'
	},
	{
		id: 'doa-sesudah-wudhu',
		title: 'Doa Sesudah Berwudhu',
		titleEn: 'Dua After Wudhu',
		arabic:
			'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اَللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ',
		latin:
			"Asyhadu allaa ilaaha illallaahu wahdahu laa syariika lahu wa asyhadu anna muhammadan 'abduhu wa rasuuluh. Allaahummaj'alnii minat tawwaabiin waj'alnii minal mutathahhiriin",
		translation:
			'Aku bersaksi bahwa tidak ada tuhan yang berhak disembah kecuali Allah semata, tidak ada sekutu bagi-Nya, dan aku bersaksi bahwa Muhammad adalah hamba dan Rasul-Nya. Ya Allah, jadikanlah aku termasuk orang-orang yang bertaubat dan jadikanlah aku termasuk orang-orang yang bersuci.',
		translationEn:
			'I bear witness that there is no deity worthy of worship except Allah alone, with no partner, and I bear witness that Muhammad is His slave and Messenger. O Allah, make me among those who repent and make me among those who purify themselves.',
		categories: ['kebersihan', 'sholat'],
		source: 'HR. Muslim no. 234, Tirmidhi no. 55; Hisnul Muslim §11'
	},
	{
		id: 'doa-istinja',
		title: "Doa Istinja'",
		titleEn: 'Dua for Istinja',
		arabic: 'اَللَّهُمَّ طَهِّرْ قَلْبِي مِنَ النِّفَاقِ وَحَصِّنْ فَرْجِي مِنَ الْفَوَاحِشِ',
		latin: 'Allaahummaa thahhir qalbii minan nifaaqi wa hashshin farjii minal fawaahisy',
		translation:
			'Ya Allah, sucikanlah hatiku dari kemunafikan dan jagalah kemaluanku dari perbuatan keji.',
		translationEn:
			'O Allah, purify my heart from hypocrisy and protect my private parts from indecencies.',
		categories: ['kebersihan'],
		source: 'Dinisbatkan dalam kitab doa; dikutip dalam Fiqh as-Sunnah',
		noteId: "Dibaca saat beristinja' (membersihkan diri setelah buang air)",
		noteEn: "Recited during istinja' (cleaning oneself after relieving oneself)"
	},

	// ── KELUAR & MASUK ─────────────────────────────────────────────────────────
	{
		id: 'doa-keluar-rumah',
		title: 'Doa Keluar Rumah',
		titleEn: 'Dua When Leaving the House',
		arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
		latin: "Bismillaah, tawakkaltu 'alallaah, laa hawla wa laa quwwata illaa billaah",
		translation:
			'Dengan nama Allah, aku bertawakkal kepada Allah, tidak ada daya dan kekuatan kecuali dengan pertolongan Allah.',
		translationEn:
			'In the name of Allah, I place my trust in Allah, and there is no power nor strength except with Allah.',
		categories: ['keluar-masuk'],
		source: 'HR. Abu Dawud no. 5095, Tirmidhi no. 3426; Hisnul Muslim §15'
	},
	{
		id: 'doa-masuk-rumah',
		title: 'Doa Masuk Rumah',
		titleEn: 'Dua When Entering the House',
		arabic:
			'بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
		latin: "Bismillaahi walajanaa wa bismillaahi kharajnaa wa 'alallaahi rabbinaa tawakkalnaa",
		translation:
			'Dengan nama Allah kami masuk, dengan nama Allah kami keluar, dan kepada Allah Tuhan kami kami bertawakkal.',
		translationEn:
			'In the name of Allah we enter, in the name of Allah we leave, and upon Allah our Lord we place our trust.',
		categories: ['keluar-masuk'],
		source: 'HR. Abu Dawud no. 5096; Hisnul Muslim §16'
	},
	{
		id: 'doa-masuk-masjid',
		title: 'Doa Masuk Masjid',
		titleEn: 'Dua Entering the Mosque',
		arabic: 'اَللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
		latin: 'Allaahummaf tah lii abwaaba rahmatik',
		translation: 'Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.',
		translationEn: 'O Allah, open for me the gates of Your mercy.',
		categories: ['keluar-masuk', 'sholat'],
		source: 'HR. Muslim no. 713; Hisnul Muslim §18'
	},
	{
		id: 'doa-keluar-masjid',
		title: 'Doa Keluar Masjid',
		titleEn: 'Dua Exiting the Mosque',
		arabic: 'اَللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
		latin: "Allaahumma innii as'aluka min fadhlak",
		translation: 'Ya Allah, sesungguhnya aku memohon kepada-Mu dari karunia-Mu.',
		translationEn: 'O Allah, I ask You of Your bounty.',
		categories: ['keluar-masuk', 'sholat'],
		source: 'HR. Muslim no. 713; Hisnul Muslim §19'
	},
	{
		id: 'doa-naik-kendaraan',
		title: 'Doa Naik Kendaraan',
		titleEn: 'Dua When Boarding a Vehicle',
		arabic:
			'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
		latin:
			'Subhaanal ladzii sakhkhara lanaa haadzaa wa maa kunnaa lahu muqriniin, wa innaa ilaa rabbinaa lamunqalibuun',
		translation:
			'Maha Suci (Allah) yang telah menundukkan semua ini bagi kami, padahal kami sebelumnya tidak mampu menguasainya, dan sesungguhnya kepada Tuhan kami kami akan kembali.',
		translationEn:
			'Glory be to Him Who has subjected these (means of transport) to us, though we were unable to subdue them, and indeed to our Lord we are returning.',
		categories: ['keluar-masuk', 'safar'],
		source: 'QS. Az-Zukhruf: 13-14; HR. Muslim no. 1342; Hisnul Muslim §198'
	},
	{
		id: 'doa-masuk-pasar',
		title: 'Doa Masuk Pasar',
		titleEn: 'Dua When Entering the Market',
		arabic:
			'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ حَيٌّ لَا يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
		latin:
			"Laa ilaaha illallaahu wahdahu laa syariika lahu, lahul mulku wa lahul hamdu, yuhyii wa yumiitu wa huwa hayyun laa yamuutu, bi yadihil khairu, wa huwa 'alaa kulli syai'in qadiir",
		translation:
			'Tidak ada tuhan yang berhak disembah kecuali Allah semata, tidak ada sekutu bagi-Nya. Milik-Nya segala kerajaan, milik-Nya segala pujian, Dia menghidupkan dan mematikan, Dia Maha Hidup yang tidak akan mati, di tangan-Nya segala kebaikan, dan Dia Maha Kuasa atas segala sesuatu.',
		translationEn:
			'There is no deity worthy of worship except Allah alone, with no partner. His is the dominion and to Him belongs all praise. He gives life and causes death. He is the Living Who does not die. In His hand is all good and He is Able to do all things.',
		categories: ['keluar-masuk'],
		source: 'HR. Tirmidhi no. 3428, Ibn Majah no. 2235; Hisnul Muslim §173'
	},

	// ── SAFAR (PERJALANAN) ─────────────────────────────────────────────────────
	{
		id: 'doa-safar',
		title: 'Doa Berangkat Safar',
		titleEn: 'Dua at the Start of a Journey',
		arabic:
			'اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ، اَللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى وَمِنَ الْعَمَلِ مَا تَرْضَى، اَللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ',
		latin:
			"Allaahu akbar (3×). Subhaanal ladzii sakhkhara lanaa haadzaa wa maa kunnaa lahu muqriniin wa innaa ilaa rabbinaa lamunqalibuun. Allaahummaa innaa nas'aluka fii safarinaa haadzal birra wat taqwaa wa minal 'amali maa tardhaa. Allaahummaa hawwin 'alainaa safaranaa haadzaa wathwi 'annaa bu'dah",
		translation:
			'Allah Maha Besar (3×). Maha Suci (Allah) yang telah menundukkan ini bagi kami, padahal kami tidak sanggup menguasainya, dan sesungguhnya kami akan kembali kepada Tuhan kami. Ya Allah, kami memohon kepada-Mu kebajikan dan ketakwaan dalam perjalanan ini serta amal yang Engkau ridhai. Ya Allah, mudahkanlah perjalanan ini bagi kami dan perpendeklah jaraknya.',
		translationEn:
			'Allah is the Greatest (3×). Glory be to Him Who has subjected this to us, though we were unable to subdue it, and indeed to our Lord we are returning. O Allah, we ask You for goodness and piety in this journey and for actions that please You. O Allah, make this journey easy for us and shorten its distance.',
		categories: ['safar'],
		source: 'HR. Muslim no. 1342; Hisnul Muslim §198'
	},
	{
		id: 'doa-singgah-safar',
		title: 'Doa Singgah di Tempat Perjalanan',
		titleEn: 'Dua When Stopping at a Place During Travel',
		arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
		latin: "A'uudzu bi kalimaatillaahit taammati min syarri maa khalaq",
		translation:
			'Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari segala keburukan yang Dia ciptakan.',
		translationEn:
			'I seek refuge in the perfect words of Allah from the evil of what He has created.',
		categories: ['safar', 'perlindungan'],
		source: 'HR. Muslim no. 2708; Hisnul Muslim §208',
		noteId: 'Dibaca 3 kali saat singgah di suatu tempat dalam perjalanan',
		noteEn: 'Recited 3 times when stopping at a place during travel'
	},
	{
		id: 'doa-kembali-safar',
		title: 'Doa Kembali dari Safar',
		titleEn: 'Dua Upon Returning from a Journey',
		arabic: 'آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ',
		latin: "Aa'ibuuna taa'ibuuna 'aabiduuna lirabbinaa haamiduun",
		translation: 'Kami kembali dengan bertaubat, beribadah, dan memuji Tuhan kami.',
		translationEn: 'We return repentant, worshipping, and praising our Lord.',
		categories: ['safar'],
		source: 'HR. Muslim no. 1342; Hisnul Muslim §201'
	},
	{
		id: 'doa-titip-orang-bepergian',
		title: 'Doa Menitipkan Orang yang Bepergian',
		titleEn: 'Dua for Someone Departing on a Journey',
		arabic: 'أَسْتَوْدِعُ اللَّهَ دِينَكَ وَأَمَانَتَكَ وَخَوَاتِيمَ عَمَلِكَ',
		latin: "Astawdi'ullaaha diinaka wa amaanataka wa khawaatiima 'amalika",
		translation: 'Aku menitipkan agamamu, amanahmu, dan akhir amalanmu kepada Allah.',
		translationEn:
			'I entrust your religion, your trustworthiness, and the seal of your deeds to Allah.',
		categories: ['safar'],
		source: 'HR. Tirmidhi no. 3443, Abu Dawud no. 2600; Hisnul Muslim §200',
		noteId: 'Dibaca oleh orang yang ditinggal kepada orang yang berangkat bepergian',
		noteEn: 'Recited by the one staying behind to the one departing'
	},

	// ── KELUARGA ───────────────────────────────────────────────────────────────
	{
		id: 'doa-untuk-orang-tua',
		title: 'Doa Untuk Orang Tua',
		titleEn: 'Dua for Parents',
		arabic: 'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
		latin: 'Rabbir hamhumaa kamaa rabbayaanii shagiiraa',
		translation:
			'Wahai Tuhanku, kasihanilah keduanya (orang tuaku) sebagaimana mereka mendidikku sewaktu kecil.',
		translationEn: 'My Lord, have mercy on them both as they raised me when I was small.',
		categories: ['keluarga'],
		source: 'QS. Al-Isra: 24'
	},
	{
		id: 'doa-keturunan-shalih',
		title: 'Doa Memohon Keturunan yang Shalih',
		titleEn: 'Dua for Righteous Offspring',
		arabic: 'رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ',
		latin: 'Rabbi hab lii minash shaalihiin',
		translation:
			'Wahai Tuhanku, anugerahkanlah kepadaku (keturunan) yang termasuk orang-orang shalih.',
		translationEn: 'My Lord, grant me (offspring) from among the righteous.',
		categories: ['keluarga'],
		source: 'QS. As-Saffat: 100'
	},
	{
		id: 'doa-menggauli-istri',
		title: 'Doa Menggauli Istri',
		titleEn: 'Dua Before Intimacy',
		arabic:
			'بِسْمِ اللَّهِ، اَللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا',
		latin: 'Bismillaah. Allaahummaa jannibnaasy syaithaana wa jannibisy syaithaana maa razaqtanaa',
		translation:
			'Dengan nama Allah. Ya Allah, jauhkanlah kami dari setan dan jauhkanlah setan dari apa yang Engkau anugerahkan kepada kami.',
		translationEn:
			'In the name of Allah. O Allah, keep us away from the devil and keep the devil away from what You bestow upon us.',
		categories: ['keluarga'],
		source: 'HR. Bukhari no. 141, Muslim no. 1434; Hisnul Muslim §81'
	},
	{
		id: 'doa-pengantin-baru',
		title: 'Doa untuk Pengantin Baru',
		titleEn: 'Dua for Newlyweds',
		arabic: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
		latin: "Baarakallaahu laka wa baaraka 'alaika wa jama'a bainakumaa fii khair",
		translation:
			'Semoga Allah memberkahimu, mencurahkan berkah atasmu, dan mengumpulkan kalian berdua dalam kebaikan.',
		translationEn:
			'May Allah bless you and shower blessings upon you, and may He unite you in goodness.',
		categories: ['keluarga'],
		source: 'HR. Abu Dawud no. 2130, Tirmidhi no. 1091; Hisnul Muslim §80',
		noteId: 'Diucapkan kepada pengantin baru',
		noteEn: 'Said to newlyweds'
	},
	{
		id: 'doa-kebaikan-keluarga',
		title: 'Doa Kebaikan Keluarga',
		titleEn: 'Dua for a Good Family',
		arabic:
			'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
		latin:
			"Rabbanaa hab lanaa min azwaajinaa wa dzurriyyaatinaa qurrata a'yunin waj'alnaa lil muttaqiina imaaman",
		translation:
			'Wahai Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan yang menyenangkan hati, dan jadikanlah kami pemimpin bagi orang-orang yang bertakwa.',
		translationEn:
			'Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us a leader for the righteous.',
		categories: ['keluarga'],
		source: 'QS. Al-Furqan: 74'
	},

	// ── PELAJARAN ──────────────────────────────────────────────────────────────
	{
		id: 'doa-tambah-ilmu',
		title: 'Doa Memohon Tambah Ilmu',
		titleEn: 'Dua for Increase in Knowledge',
		arabic: 'رَبِّ زِدْنِي عِلْمًا',
		latin: "Rabbi zidnii 'ilmaa",
		translation: 'Wahai Tuhanku, tambahkanlah ilmu kepadaku.',
		translationEn: 'My Lord, increase me in knowledge.',
		categories: ['pelajaran'],
		source: 'QS. Taha: 114'
	},
	{
		id: 'doa-kemudahan',
		title: 'Doa Memohon Kemudahan',
		titleEn: 'Dua for Ease',
		arabic:
			'اَللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا',
		latin:
			"Allaahummaa laa sahla illaa maa ja'altahu sahlaan wa anta taj'alul hazna idzaa syi'ta sahlaa",
		translation:
			'Ya Allah, tidak ada kemudahan kecuali apa yang Engkau mudahkan, dan Engkau menjadikan kesusahan itu mudah jika Engkau menghendakinya.',
		translationEn:
			'O Allah, there is no ease except what You make easy, and You make the difficult easy when You will.',
		categories: ['pelajaran', 'umum'],
		source: 'HR. Ibn Hibban no. 2427; Hisnul Muslim §118'
	},
	{
		id: 'doa-kaffarat-majlis',
		title: 'Doa Penutup Majelis (Kaffaratul Majlis)',
		titleEn: 'Dua to Close a Gathering (Kaffaratul Majlis)',
		arabic:
			'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
		latin:
			'Subhaanaka allaahummaa wa bihamdika asyhadu allaa ilaaha illaa anta astaghfiruka wa atuubu ilaik',
		translation:
			'Maha Suci Engkau ya Allah dan segala puji bagi-Mu. Aku bersaksi bahwa tidak ada tuhan yang berhak disembah kecuali Engkau. Aku memohon ampunan-Mu dan aku bertaubat kepada-Mu.',
		translationEn:
			'Glory and praise be to You, O Allah. I bear witness that there is no deity worthy of worship except You. I seek Your forgiveness and repent to You.',
		categories: ['pelajaran', 'umum'],
		source: 'HR. Abu Dawud no. 4858, Tirmidhi no. 3433; Hisnul Muslim §93',
		noteId: 'Dibaca di akhir setiap pertemuan / majelis / kajian',
		noteEn: 'Recited at the end of every gathering, study circle, or meeting'
	},
	{
		id: 'doa-sebelum-belajar',
		title: 'Doa Sebelum Belajar',
		titleEn: 'Dua Before Studying',
		arabic:
			'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي يَفْقَهُوا قَوْلِي',
		latin:
			"Rabbisyrah lii shadrii wa yassir lii amrii wahlul 'uqdatan min lisaanii yafqahuu qawlii",
		translation:
			'Wahai Tuhanku, lapangkanlah dadaku, mudahkanlah urusanku, dan lepaskanlah kekakuan lisanku agar mereka mengerti perkataanku.',
		translationEn:
			'My Lord, expand my chest, ease my task for me, and untie the knot of my tongue so they may understand my speech.',
		categories: ['pelajaran'],
		source: 'QS. Taha: 25-28'
	},

	// ── KESEHATAN ──────────────────────────────────────────────────────────────
	{
		id: 'doa-kunjungi-orang-sakit',
		title: 'Doa Mengunjungi Orang Sakit',
		titleEn: 'Dua When Visiting the Sick',
		arabic: 'لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ',
		latin: "Laa ba'sa, thahuurun in syaa'allaah",
		translation: 'Tidak apa-apa, semoga ini menjadi penghapus (dosa), insya Allah.',
		translationEn: 'Do not worry, it will be a purification (of sins), if Allah wills.',
		categories: ['kesehatan'],
		source: 'HR. Bukhari no. 3616; Hisnul Muslim §119',
		noteId: 'Diucapkan kepada orang yang sedang sakit',
		noteEn: 'Said to the person who is ill'
	},
	{
		id: 'doa-ketika-sakit',
		title: 'Doa Memohon Kesembuhan',
		titleEn: 'Dua for Healing',
		arabic:
			'اَللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا',
		latin:
			"Allaahummaa robban naasi adzhibilba'sa, isyfi, antasy syaafii, laa syifaa'a illaa syifaa'uka, syifaa'al laa yughaadirusaqamaa",
		translation:
			'Ya Allah, Tuhan manusia, hilangkanlah penyakit, sembuhkanlah. Engkaulah Yang Maha Menyembuhkan, tidak ada kesembuhan kecuali kesembuhan dari-Mu, kesembuhan yang tidak meninggalkan penyakit.',
		translationEn:
			'O Allah, Lord of mankind, remove the affliction, heal (them). You are the Healer, there is no cure except Your cure, a healing that leaves no illness behind.',
		categories: ['kesehatan'],
		source: 'HR. Bukhari no. 5743, Muslim no. 2191; Hisnul Muslim §120'
	},
	{
		id: 'doa-ruqyah-diri',
		title: 'Doa Ruqyah (Perlindungan Diri)',
		titleEn: 'Dua for Ruqyah (Self-Protection)',
		arabic:
			'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
		latin:
			"A'uudzu bi kalimaatillaahit taammati min kulli syaithaanin wa haammatin wa min kulli 'ainin laammah",
		translation:
			'Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari setiap setan, binatang berbisa, dan setiap pandangan mata yang jahat.',
		translationEn:
			'I seek refuge in the complete words of Allah from every devil, from every poisonous creature, and from every evil eye.',
		categories: ['kesehatan', 'perlindungan'],
		source: 'HR. Bukhari no. 3371; Hisnul Muslim §118'
	},
	{
		id: 'doa-tertimpa-musibah',
		title: 'Doa Saat Tertimpa Musibah',
		titleEn: 'Dua When Afflicted by Calamity',
		arabic:
			'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ، اَللَّهُمَّ أْجُرْنِي فِي مُصِيبَتِي وَأَخْلِفْ لِي خَيْرًا مِنْهَا',
		latin:
			"Innaa lillaahi wa innaa ilaihi raaji'uun. Allaahummaa'jurnii fii mushiibatii wa akhlif lii khairan minhaa",
		translation:
			'Sesungguhnya kami adalah milik Allah dan kepada-Nya kami kembali. Ya Allah, berikanlah pahala kepadaku dalam musibahku ini dan gantikanlah untukku yang lebih baik darinya.',
		translationEn:
			'Verily we belong to Allah and verily to Him we shall return. O Allah, reward me for my affliction and replace it for me with something better.',
		categories: ['kesehatan', 'umum'],
		source: 'HR. Muslim no. 918; Hisnul Muslim §115'
	},
	{
		id: 'doa-ruqyah-meruqyah',
		title: 'Doa Meruqyah Orang Sakit',
		titleEn: 'Dua When Performing Ruqyah on Someone',
		arabic:
			'بِسْمِ اللَّهِ أَرْقِيكَ مِنْ كُلِّ شَيْءٍ يُؤْذِيكَ مِنْ شَرِّ كُلِّ نَفْسٍ أَوْ عَيْنِ حَاسِدٍ اَللَّهُ يَشْفِيكَ بِسْمِ اللَّهِ أَرْقِيكَ',
		latin:
			"Bismillaahi arqiika min kulli syai'in yu'dziika min syarri kulli nafsin aw 'ainin haasidin, Allaahu yasyfiika, bismillaahi arqiik",
		translation:
			'Dengan nama Allah aku meruqyahmu dari segala sesuatu yang menyakitimu, dari kejahatan setiap jiwa dan mata yang hasad. Allah-lah yang menyembuhkanmu. Dengan nama Allah aku meruqyahmu.',
		translationEn:
			'In the name of Allah I perform ruqyah for you from everything that harms you, from the evil of every soul and every envious eye. May Allah heal you. In the name of Allah I perform ruqyah for you.',
		categories: ['kesehatan'],
		source: 'HR. Muslim no. 2186; Hisnul Muslim §122',
		noteId: 'Dibaca saat meruqyah orang yang sakit',
		noteEn: 'Recited when performing ruqyah on an ill person'
	},
	{
		id: 'doa-memohon-kesehatan',
		title: 'Doa Memohon Kesehatan dan Keselamatan',
		titleEn: 'Dua for Health and Safety',
		arabic: 'اَللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ',
		latin: "Allaahummaa innii as'alukal 'afwa wal 'aafiyata fid dunyaa wal aakhirah",
		translation:
			'Ya Allah, sesungguhnya aku memohon kepada-Mu maaf dan kesehatan di dunia dan akhirat.',
		translationEn: 'O Allah, I ask You for pardon and well-being in this world and the Hereafter.',
		categories: ['kesehatan', 'umum'],
		source: 'HR. Abu Dawud no. 5074, Ibn Majah no. 3871; Hisnul Muslim §120'
	},

	// ── CUACA & ALAM ───────────────────────────────────────────────────────────
	{
		id: 'doa-saat-hujan',
		title: 'Doa Saat Turun Hujan',
		titleEn: 'Dua When It Rains',
		arabic: 'اَللَّهُمَّ صَيِّبًا نَافِعًا',
		latin: "Allaahummaa shayyiban naafi'aa",
		translation: 'Ya Allah, jadikanlah hujan ini hujan yang bermanfaat.',
		translationEn: 'O Allah, make it a beneficial rain.',
		categories: ['cuaca-alam'],
		source: 'HR. Bukhari no. 1032; Hisnul Muslim §47'
	},
	{
		id: 'doa-sesudah-hujan',
		title: 'Doa Sesudah Turun Hujan',
		titleEn: 'Dua After Rain',
		arabic: 'مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ',
		latin: 'Muthirnaa bi fadhlillaahi wa rahmatih',
		translation: 'Kami diberi hujan dengan karunia dan rahmat Allah.',
		translationEn: 'We have been given rain through the grace and mercy of Allah.',
		categories: ['cuaca-alam'],
		source: 'HR. Bukhari no. 846, Muslim no. 71; Hisnul Muslim §48'
	},
	{
		id: 'doa-angin-kencang',
		title: 'Doa Saat Angin Kencang',
		titleEn: 'Dua When Strong Wind Blows',
		arabic:
			'اَللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا فِيهَا وَخَيْرَ مَا أُرْسِلَتْ بِهِ وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا فِيهَا وَشَرِّ مَا أُرْسِلَتْ بِهِ',
		latin:
			"Allaahummaa innii as'aluka khairahaa wa khairamaa fiihaa wa khairamaa ursilat bih, wa a'uudzu bika min syarrihaa wa syarri maa fiihaa wa syarri maa ursilat bih",
		translation:
			'Ya Allah, sesungguhnya aku memohon kepada-Mu kebaikannya, kebaikan yang ada padanya, dan kebaikan yang dibawanya. Dan aku berlindung kepada-Mu dari keburukannya, keburukan yang ada padanya, dan keburukan yang dibawanya.',
		translationEn:
			'O Allah, I ask You for its goodness, the goodness within it, and the goodness it was sent with. And I seek refuge in You from its evil, the evil within it, and the evil it was sent with.',
		categories: ['cuaca-alam'],
		source: 'HR. Muslim no. 899; Hisnul Muslim §49'
	},
	{
		id: 'doa-mendengar-petir',
		title: 'Doa Saat Mendengar Petir',
		titleEn: 'Dua When Hearing Thunder',
		arabic: 'سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ',
		latin: "Subhaanal ladzii yusabbihur ra'du bi hamdihii wal malaa'ikatu min khiifatih",
		translation:
			'Maha Suci (Allah) yang petir bertasbih memuji-Nya dan para malaikat (pun bertasbih) karena rasa takut kepada-Nya.',
		translationEn:
			'Glorified is He Whom the thunder glorifies with His praise, and the angels, from awe of Him.',
		categories: ['cuaca-alam'],
		source: 'HR. Malik dalam al-Muwaththa; Hisnul Muslim §50'
	},
	{
		id: 'doa-melihat-hilal',
		title: 'Doa Melihat Hilal (Bulan Baru)',
		titleEn: 'Dua When Sighting the New Crescent Moon',
		arabic:
			'اَللَّهُ أَكْبَرُ، اَللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ رَبِّي وَرَبُّكَ اللَّهُ',
		latin:
			"Allaahu akbar. Allaahummaa ahillahu 'alainaa bil amni wal iimaani was salaamati wal islaami, rabbii wa rabbukalllaah",
		translation:
			'Allah Maha Besar. Ya Allah, munculkanlah bulan ini atas kami dengan keamanan, keimanan, keselamatan, dan keislaman. Tuhanku dan Tuhanmu adalah Allah.',
		translationEn:
			'Allah is the Greatest. O Allah, bring this crescent upon us with security, faith, safety, and Islam. My Lord and your Lord is Allah.',
		categories: ['cuaca-alam', 'umum'],
		source: 'HR. Tirmidhi no. 3451, ad-Darimi; Hisnul Muslim §112'
	},

	// ── PERLINDUNGAN ───────────────────────────────────────────────────────────
	{
		id: 'doa-sayyidul-istighfar',
		title: 'Sayyidul Istighfar (Penghulu Istighfar)',
		titleEn: 'Sayyidul Istighfar (Master Supplication for Forgiveness)',
		arabic:
			'اَللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
		latin:
			"Allaahummaa anta rabbii laa ilaaha illaa anta, khalaqtanii wa anaa 'abduka wa anaa 'alaa 'ahdika wa wa'dika mastatha'tu, a'uudzu bika min syarri maa shana'tu, abuu'u laka bi ni'matika 'alayya wa abuu'u bidzanbii faghfirlii fa innahu laa yaghfirudzdzunuuba illaa anta",
		translation:
			'Ya Allah, Engkau adalah Tuhanku, tidak ada tuhan yang berhak disembah kecuali Engkau. Engkau telah menciptakanku dan aku adalah hamba-Mu. Aku berada di atas perjanjian dan janji-Mu semampu aku. Aku berlindung kepada-Mu dari kejelekan apa yang aku perbuat. Aku mengakui nikmat-Mu atas diriku dan aku mengakui dosaku. Maka ampunilah aku, karena sesungguhnya tidak ada yang mengampuni dosa kecuali Engkau.',
		translationEn:
			'O Allah, You are my Lord, none has the right to be worshipped except You. You created me and I am Your slave. I abide by Your covenant and promise to the best of my ability. I seek refuge in You from the evil of what I have done. I acknowledge Your blessings upon me and I acknowledge my sin, so forgive me, for verily none can forgive sins except You.',
		categories: ['perlindungan', 'umum'],
		source: 'HR. Bukhari no. 6306; Hisnul Muslim §55',
		noteId:
			'Dibaca pagi dan petang; keutamaan besar bagi yang membacanya lalu meninggal dunia hari itu',
		noteEn: 'Recited morning and evening; great virtue for one who recites it then dies that day'
	},
	{
		id: 'doa-bismillah-perlindungan',
		title: 'Doa Perlindungan dengan Bismillah',
		titleEn: 'Protection Dua with Bismillah',
		arabic:
			'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
		latin:
			"Bismillaahil ladzii laa yadhurru ma'asmihi syai'un fil ardhi wa laa fis samaa'i wa huwas samii'ul 'aliim",
		translation:
			'Dengan nama Allah yang dengan nama-Nya tidak ada sesuatu pun yang berbahaya di bumi maupun di langit, dan Dia Maha Mendengar lagi Maha Mengetahui.',
		translationEn:
			'In the name of Allah with whose name nothing can harm on earth nor in heaven, and He is the All-Hearing, the All-Knowing.',
		categories: ['perlindungan'],
		source: 'HR. Abu Dawud no. 5088, Tirmidhi no. 3388; Hisnul Muslim §30',
		noteId: 'Dibaca 3 kali di pagi dan petang hari',
		noteEn: 'Recited 3 times in the morning and evening'
	},
	{
		id: 'doa-perlindungan-empat-perkara',
		title: 'Doa Perlindungan dari Empat Perkara',
		titleEn: 'Dua for Protection from Four Things',
		arabic:
			'اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ وَمِنْ عَذَابِ النَّارِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
		latin:
			"Allaahummaa innii a'uudzu bika min 'adzaabil qabri wa min 'adzaabinnaari wa min fitnatil mahyaa wal mamaati wa min syarri fitnatil masiihid dajjaal",
		translation:
			'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari azab kubur, dari azab api neraka, dari fitnah kehidupan dan kematian, dan dari kejahatan fitnah Al-Masih Ad-Dajjal.',
		translationEn:
			'O Allah, I seek refuge in You from the torment of the grave, the torment of the Fire, the trials of life and death, and from the evil of the trial of the False Messiah.',
		categories: ['perlindungan', 'sholat'],
		source: 'HR. Muslim no. 588; Hisnul Muslim §66',
		noteId: 'Dibaca dalam tasyahud akhir sebelum salam',
		noteEn: 'Recited in the final tashahhud before the salam'
	},
	{
		id: 'doa-dari-gundah-sedih',
		title: 'Doa Berlindung dari Gundah dan Sedih',
		titleEn: 'Dua for Protection from Worry and Grief',
		arabic:
			'اَللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ',
		latin:
			"Allaahummaa innii a'uudzu bika minal hammi wal hazani wal 'ajzi wal kasali wal bukhli wal jubni wa dhala'iddaini wa ghalabatirrijaal",
		translation:
			'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari rasa gundah dan sedih, kelemahan dan kemalasan, kebakhilan dan sifat pengecut, lilitan hutang, dan tekanan dari orang lain.',
		translationEn:
			'O Allah, I seek refuge in You from worry and grief, from incapacity and laziness, from miserliness and cowardice, from being overcome by debt and from the overpowering of men.',
		categories: ['perlindungan'],
		source: 'HR. Bukhari no. 6369; Hisnul Muslim §120'
	},
	{
		id: 'doa-berlindung-dari-syetan',
		title: 'Doa Berlindung dari Setan Saat Marah',
		titleEn: 'Dua for Protection from Shaytan When Angry',
		arabic: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
		latin: "A'uudzu billaahi minasy syaithaanirrajiim",
		translation: 'Aku berlindung kepada Allah dari setan yang terkutuk.',
		translationEn: 'I seek refuge in Allah from the accursed devil.',
		categories: ['perlindungan'],
		source: 'HR. Bukhari no. 6115, Muslim no. 2610; Hisnul Muslim §119',
		noteId: 'Dibaca saat merasa marah untuk meredakan amarah',
		noteEn: 'Recited when feeling angry to calm the anger'
	},
	{
		id: 'doa-menghadapi-kesulitan',
		title: 'Doa Menghadapi Kesulitan',
		titleEn: 'Dua When Facing Hardship',
		arabic: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
		latin: "Hasbunallaahu wa ni'mal wakiil",
		translation: 'Cukuplah Allah bagi kami, dan Dia adalah sebaik-baik tempat bergantung.',
		translationEn: 'Allah is sufficient for us, and He is the best Disposer of affairs.',
		categories: ['perlindungan', 'umum'],
		source: 'QS. Ali Imran: 173; HR. Bukhari no. 4563'
	},
	{
		id: 'doa-berlindung-dari-hutang',
		title: 'Doa Berlindung dari Hutang',
		titleEn: 'Dua for Protection from Debt',
		arabic:
			'اَللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ',
		latin: "Allaahummak finii bi halaalika 'an haraamika wa aghninii bi fadhlika 'amman siwaak",
		translation:
			'Ya Allah, cukupkanlah aku dengan yang halal dari-Mu atas yang haram, dan kayakanlah aku dengan karunia-Mu dari selain-Mu.',
		translationEn:
			'O Allah, suffice me with what You have made lawful from what You have made unlawful, and enrich me with Your grace from all others besides You.',
		categories: ['perlindungan'],
		source: 'HR. Tirmidhi no. 3563; Hisnul Muslim §120'
	},
	{
		id: 'doa-laa-hawla',
		title: 'Hauqalah (Laa Hawla Wa Laa Quwwata)',
		titleEn: 'Hauqalah (There is No Power Except with Allah)',
		arabic: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
		latin: 'Laa hawla wa laa quwwata illaa billaah',
		translation: 'Tidak ada daya dan kekuatan kecuali dengan pertolongan Allah.',
		translationEn: 'There is no power nor strength except with Allah.',
		categories: ['perlindungan', 'umum'],
		source: 'HR. Bukhari no. 6384, Muslim no. 2704; Hisnul Muslim §120'
	},

	// ── SHOLAT ─────────────────────────────────────────────────────────────────
	{
		id: 'doa-iftitah',
		title: 'Doa Iftitah',
		titleEn: 'Opening Dua (Iftitah)',
		arabic:
			'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ',
		latin:
			"Subhaanika allaahummaa wa bihamdika wa tabaarakasmuka wa ta'aalaa jadduka wa laa ilaaha ghairuk",
		translation:
			'Maha Suci Engkau ya Allah dan segala puji bagi-Mu, Maha Berkah nama-Mu, Maha Tinggi keagungan-Mu, dan tidak ada tuhan yang berhak disembah selain Engkau.',
		translationEn:
			'Glory and praise be to You, O Allah. Blessed be Your name and exalted be Your majesty. There is no deity worthy of worship other than You.',
		categories: ['sholat'],
		source: 'HR. Abu Dawud no. 775, Tirmidhi no. 243; Hisnul Muslim §64',
		noteId: 'Dibaca setelah takbiratul ihram, sebelum membaca Al-Fatihah',
		noteEn: 'Recited after the opening takbir, before reciting Al-Fatihah'
	},
	{
		id: 'doa-ruku',
		title: 'Doa Ruku',
		titleEn: 'Dua in Ruku (Bowing)',
		arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
		latin: "Subhaana rabbiyal 'azhiim",
		translation: 'Maha Suci Tuhanku Yang Maha Agung.',
		translationEn: 'Glory be to my Lord, the Most Great.',
		categories: ['sholat'],
		source: 'HR. Muslim no. 772, Abu Dawud no. 869; Hisnul Muslim §64',
		noteId: 'Dibaca minimal 3 kali saat ruku',
		noteEn: 'Recited at least 3 times while in the bowing position'
	},
	{
		id: 'doa-itidal',
		title: "Doa I'tidal",
		titleEn: "Dua in I'tidal (Rising from Ruku)",
		arabic: 'رَبَّنَا وَلَكَ الْحَمْدُ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ',
		latin: 'Rabbanaa wa lakal hamdu hamdan katsiiran thayyiban mubaarakan fiih',
		translation:
			'Wahai Tuhan kami, milik-Mu segala puji, pujian yang banyak, baik, dan penuh berkah.',
		translationEn: 'Our Lord, to You belongs all praise — much, good, and blessed praise.',
		categories: ['sholat'],
		source: 'HR. Bukhari no. 795; Hisnul Muslim §64',
		noteId: "Dibaca setelah bangkit dari ruku (i'tidal)",
		noteEn: "Recited after rising from the bowing position (i'tidal)"
	},
	{
		id: 'doa-sujud',
		title: 'Doa Sujud',
		titleEn: 'Dua in Sujud (Prostration)',
		arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
		latin: "Subhaana rabbiyal a'laa",
		translation: 'Maha Suci Tuhanku Yang Maha Tinggi.',
		translationEn: 'Glory be to my Lord, the Most High.',
		categories: ['sholat'],
		source: 'HR. Muslim no. 482, Abu Dawud no. 870; Hisnul Muslim §64',
		noteId: 'Dibaca minimal 3 kali saat sujud',
		noteEn: 'Recited at least 3 times while in prostration'
	},
	{
		id: 'doa-antara-dua-sujud',
		title: 'Doa Antara Dua Sujud',
		titleEn: 'Dua Between Two Prostrations',
		arabic:
			'رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّي',
		latin:
			"Rabbighfir lii war hamnii wajburnii warfa'nii warzuqnii wahdinii wa 'aafinii wa'fu 'annii",
		translation:
			'Wahai Tuhanku, ampunilah aku, rahmatilah aku, perbaikilah keadaanku, angkatlah derajatku, berikanlah rezeki kepadaku, tunjukilah aku, sehatkanlah aku, dan maafkanlah aku.',
		translationEn:
			'My Lord, forgive me, have mercy on me, rectify my affairs, raise my rank, grant me provision, guide me, grant me well-being, and pardon me.',
		categories: ['sholat'],
		source: 'HR. Abu Dawud no. 874, Ibn Majah no. 898; Hisnul Muslim §64'
	},
	{
		id: 'doa-sesudah-salam',
		title: 'Doa Sesudah Salam Sholat',
		titleEn: 'Dua After the Prayer Salam',
		arabic:
			'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
		latin:
			"Laa ilaaha illallaahu wahdahu laa syariika lahu, lahul mulku wa lahul hamdu wa huwa 'alaa kulli syai'in qadiir",
		translation:
			'Tidak ada tuhan yang berhak disembah kecuali Allah semata, tidak ada sekutu bagi-Nya. Milik-Nya segala kerajaan dan milik-Nya segala pujian, dan Dia Maha Kuasa atas segala sesuatu.',
		translationEn:
			'None has the right to be worshipped except Allah alone, with no partner. His is the dominion and to Him belongs all praise, and He has power over all things.',
		categories: ['sholat'],
		source: 'HR. Muslim no. 591; Hisnul Muslim §67',
		noteId: 'Dibaca setelah salam pada setiap sholat',
		noteEn: 'Recited after the salam of every prayer'
	},
	{
		id: 'doa-qunut-witir',
		title: 'Doa Qunut Witir',
		titleEn: 'Dua Qunut in Witr Prayer',
		arabic:
			'اَللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ وَبَارِكْ لِي فِيمَا أَعْطَيْتَ وَقِنِي شَرَّ مَا قَضَيْتَ إِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ',
		latin:
			"Allaahummahdini fiiman hadaita wa 'aafinii fiiman 'aafaita wa tawallaniii fiiman tawallaita wa baarik lii fiimaa a'thaita wa qinii syarra maa qadhaitaa, innaka taqdhii wa laa yuqdaa 'alaika, wa innahu laa yadzillu man walaita, tabaarakta rabbanaa wa ta'aalaita",
		translation:
			'Ya Allah, tunjukilah aku di antara orang-orang yang telah Engkau tunjuki, ampunilah aku di antara orang-orang yang telah Engkau ampuni, lindungilah aku di antara orang-orang yang telah Engkau lindungi, berkahilah untukku apa yang telah Engkau berikan, dan peliharalah aku dari keburukan apa yang telah Engkau tetapkan. Sesungguhnya Engkau yang menetapkan dan tidak ada yang menetapkan atas-Mu. Sesungguhnya tidak akan hina orang yang Engkau lindungi. Maha Berkah Engkau wahai Tuhan kami dan Maha Tinggi.',
		translationEn:
			'O Allah, guide me among those whom You have guided, pardon me among those whom You have pardoned, protect me among those whom You have protected, bless me in what You have given me, and save me from the evil of what You have decreed. Verily You decree and none can decree against You, and indeed the one whom You protect is never humiliated. Blessed are You, our Lord, and Exalted.',
		categories: ['sholat'],
		source: 'HR. Abu Dawud no. 1425, Tirmidhi no. 464; Hisnul Muslim §65',
		noteId: 'Dibaca dalam sholat witir pada rakaat terakhir sebelum sujud',
		noteEn: "Recited in the witr prayer at the last rak'ah before prostration"
	},
	{
		id: 'doa-mendengar-adzan',
		title: 'Doa Sesudah Mendengar Adzan',
		titleEn: 'Dua After Hearing the Adhan',
		arabic:
			'اَللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ',
		latin:
			"Allaahummaa rabba haadzihid da'watit taammati wash shalaatil qaa'imati, aati muhammadanil wasiilata wal fadhiilata wab'atshu maqaamam mahmuudanil ladzii wa'adtah",
		translation:
			'Ya Allah, Tuhan seruan yang sempurna ini dan shalat yang akan didirikan, berikanlah kepada Muhammad al-wasilah (derajat tertinggi di surga) dan keutamaan, dan bangkitkanlah dia pada kedudukan yang terpuji yang telah Engkau janjikan.',
		translationEn:
			'O Allah, Lord of this perfect call and this prayer to be established, grant Muhammad the intercession and the distinguished rank, and resurrect him to the praised position that You have promised him.',
		categories: ['sholat', 'umum'],
		source: 'HR. Bukhari no. 614; Hisnul Muslim §22',
		noteId: 'Dibaca setelah selesai mendengarkan adzan',
		noteEn: 'Recited after the adhan is completed'
	},

	// ── UMUM ───────────────────────────────────────────────────────────────────
	{
		id: 'doa-sapu-jagad',
		title: 'Doa Sapu Jagad',
		titleEn: 'Dua for Goodness in Both Worlds',
		arabic:
			'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
		latin: "Rabbanaa aatinaa fid dunyaa hasanatan wa fil aakhirati hasanatan wa qinaa 'adzaabanaar",
		translation:
			'Wahai Tuhan kami, berikanlah kepada kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab api neraka.',
		translationEn:
			'Our Lord, give us in this world that which is good and in the Hereafter that which is good, and protect us from the punishment of the Fire.',
		categories: ['umum'],
		source: 'QS. Al-Baqarah: 201; Hisnul Muslim §188'
	},
	{
		id: 'doa-istighfar',
		title: 'Doa Istighfar',
		titleEn: 'Dua for Seeking Forgiveness (Istighfar)',
		arabic:
			'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
		latin:
			"Astaghfirul laahaal 'azhiiimal ladzii laa ilaaha illaa huwal hayyul qayyuumu wa atuubu ilaih",
		translation:
			'Aku memohon ampunan kepada Allah Yang Maha Agung, yang tidak ada tuhan yang berhak disembah kecuali Dia, Yang Maha Hidup lagi Maha Berdiri Sendiri, dan aku bertaubat kepada-Nya.',
		translationEn:
			'I ask forgiveness of Allah the Magnificent, other than Whom there is no deity, the Ever-Living, the Self-Sustaining, and I repent to Him.',
		categories: ['umum'],
		source: 'HR. Abu Dawud no. 1517, Tirmidhi no. 3577; Hisnul Muslim §120'
	},
	{
		id: 'doa-kabar-baik',
		title: 'Doa Saat Mendapat Kabar Baik',
		titleEn: 'Dua Upon Receiving Good News',
		arabic: 'اَلْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ',
		latin: "Alhamdu lillaahil ladzii bi ni'matihi tatimmuush shaalihaat",
		translation: 'Segala puji bagi Allah yang dengan nikmat-Nya segala kebaikan menjadi sempurna.',
		translationEn: 'All praise is for Allah through Whose blessings all good things are completed.',
		categories: ['umum'],
		source: 'HR. Ibn Majah no. 3803; Hisnul Muslim §117'
	},
	{
		id: 'doa-melihat-cermin',
		title: 'Doa Melihat Cermin',
		titleEn: 'Dua When Looking in the Mirror',
		arabic: 'اَللَّهُمَّ أَنْتَ حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي',
		latin: 'Allaahummaa anta hassanta khalqii fa hassin khuluqii',
		translation:
			'Ya Allah, sebagaimana Engkau telah memperindah rupaku, maka indahkanlah pula akhlakku.',
		translationEn:
			'O Allah, just as You have made my form beautiful, make my character beautiful too.',
		categories: ['umum'],
		source: 'HR. Ahmad no. 3823, Ibn Hibban; Hisnul Muslim §120'
	},
	{
		id: 'doa-bersin',
		title: 'Doa Ketika Bersin',
		titleEn: 'Dua When Sneezing',
		arabic: 'اَلْحَمْدُ لِلَّهِ',
		latin: 'Alhamdulillaah',
		translation: 'Segala puji bagi Allah.',
		translationEn: 'All praise is for Allah.',
		categories: ['umum'],
		source: 'HR. Bukhari no. 6224; Hisnul Muslim §115',
		noteId: 'Dibaca oleh orang yang bersin, lalu orang yang mendengar menjawab "Yarhamukallah"',
		noteEn: 'Recited by the one who sneezes; the listener then replies "Yarhamukallah"'
	},
	{
		id: 'doa-menjawab-bersin',
		title: 'Doa Menjawab Orang Bersin',
		titleEn: 'Dua Responding to a Sneeze',
		arabic: 'يَرْحَمُكَ اللَّهُ',
		latin: 'Yarhamukalllaah',
		translation: 'Semoga Allah merahmatimu.',
		translationEn: 'May Allah have mercy on you.',
		categories: ['umum'],
		source: 'HR. Bukhari no. 6224; Hisnul Muslim §115',
		noteId: 'Diucapkan oleh pendengar setelah orang yang bersin mengucapkan "Alhamdulillah"',
		noteEn: 'Said by the listener after the sneezer says "Alhamdulillah"'
	},
	{
		id: 'doa-memohon-kesabaran',
		title: 'Doa Memohon Kesabaran',
		titleEn: 'Dua for Patience',
		arabic:
			'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
		latin:
			"Rabbanaa afrigh 'alainaa shabran wa tsabbit aqdaamanaa wanshuurnaa 'alal qawmil kaafiriin",
		translation:
			'Wahai Tuhan kami, limpahkanlah kesabaran kepada kami, teguhkanlah langkah kami, dan tolonglah kami menghadapi kaum yang kafir.',
		translationEn:
			'Our Lord, pour upon us patience and plant firmly our feet and give us victory over the disbelieving people.',
		categories: ['umum'],
		source: 'QS. Al-Baqarah: 250'
	},
	{
		id: 'doa-subhanallah-bihamdih',
		title: 'Tasbih: Subhanallah wa Bihamdih',
		titleEn: 'Tasbih: Subhanallah wa Bihamdih',
		arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
		latin: 'Subhaanallaahi wa bihamdih',
		translation: 'Maha Suci Allah dan segala puji bagi-Nya.',
		translationEn: 'Glory be to Allah and all praise is His.',
		categories: ['umum', 'perlindungan'],
		source: 'HR. Bukhari no. 6405, Muslim no. 2731; Hisnul Muslim §120',
		noteId: 'Dibaca 100 kali di pagi hari; menghapus dosa sekalipun sebanyak buih lautan',
		noteEn:
			'Recited 100 times in the morning; erases sins even if they are like the foam of the sea'
	},
	{
		id: 'doa-husnul-khatimah',
		title: 'Doa Memohon Husnul Khatimah',
		titleEn: 'Dua for a Good End (Husnul Khatimah)',
		arabic:
			'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ',
		latin:
			"Rabbanaa laa tuzigh quluubanaa ba'da idz hadaitanaa wa hab lanaa min ladunka rahmatan innaka antal wahhaab",
		translation:
			'Wahai Tuhan kami, janganlah Engkau palingkan hati-hati kami setelah Engkau memberi petunjuk kepada kami, dan anugerahkanlah kepada kami rahmat dari sisi-Mu. Sesungguhnya Engkau Maha Pemberi.',
		translationEn:
			'Our Lord, do not let our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.',
		categories: ['umum'],
		source: 'QS. Ali Imran: 8'
	}
];

export default dailyDoa;
