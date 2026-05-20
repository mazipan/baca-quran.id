export type AdhkarPeriod = 'morning' | 'evening';

export interface AdhkarItem {
	id: string;
	period: AdhkarPeriod;
	order: number;
	arabic: string;
	latin: string;
	translation: string;
	translationEn: string;
	count: number;
	source: string;
	note?: string;
	noteEn?: string;
}

export const ADHKAR: readonly AdhkarItem[] = [
	{
		id: 'm-ayat-kursi',
		period: 'morning',
		order: 1,
		arabic:
			'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
		latin:
			"Allāhu lā ilāha illā huwa, al-ḥayyul-qayyūm. Lā ta'khużuhū sinatuw wa lā naum. Lahū mā fis-samāwāti wa mā fil-arḍ. Man żallażī yasyfa'u 'indahū illā bi-iżnih. Ya'lamu mā baina aidīhim wa mā khalfahum, wa lā yuḥīṭūna bisyai'im min 'ilmihī illā bimā syā'. Wasi'a kursiyyuhus-samāwāti wal-arḍ, wa lā ya'ūduhū ḥifẓuhumā, wa huwal-'aliyyul-'aẓīm.",
		translation:
			'Allah, tidak ada Tuhan selain Dia, Yang Mahahidup, Yang terus-menerus mengurus (makhluk-Nya). Tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan di bumi. (QS. Al-Baqarah: 255)',
		translationEn:
			'The Verse of the Throne — Allah, there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. (QS. Al-Baqarah: 255)',
		count: 1,
		source: 'HR. Al-Hakim & An-Nasa’i (shahih)',
		note: 'Barangsiapa membacanya ketika pagi, dilindungi dari (gangguan) jin sampai sore.',
		noteEn: 'Whoever recites it in the morning is protected from jinn until evening.'
	},
	{
		id: 'm-al-ikhlas-falaq-nas',
		period: 'morning',
		order: 2,
		arabic:
			'قُلْ هُوَ اللَّهُ أَحَدٌ • قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ • قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
		latin: 'Qul huwallāhu aḥad… • Qul a’ūżu birabbil-falaq… • Qul a’ūżu birabbin-nās…',
		translation:
			'Surat Al-Ikhlas, Al-Falaq, dan An-Nas. Dibaca tiga kali, mencukupi seseorang dari segala sesuatu.',
		translationEn:
			'Recite Surah Al-Ikhlas, Al-Falaq, and An-Nas — three times each suffices a person from everything.',
		count: 3,
		source: 'HR. Abu Dawud & At-Tirmidzi (shahih)'
	},
	{
		id: 'm-sayyidul-istighfar',
		period: 'morning',
		order: 3,
		arabic:
			'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
		latin:
			"Allāhumma anta rabbī lā ilāha illā anta, khalaqtanī wa anā 'abduka, wa anā 'alā 'ahdika wa wa'dika mastaṭa'tu, a'ūżu bika min syarri mā ṣana'tu, abū'u laka bi-ni'matika 'alayya, wa abū'u biżanbī, fagfir lī, fa-innahū lā yagfiruż-żunūba illā anta.",
		translation:
			'Ya Allah, Engkau Tuhanku, tidak ada tuhan selain Engkau. Engkau menciptakanku dan aku hamba-Mu… Ampunilah aku, sesungguhnya tidak ada yang mengampuni dosa kecuali Engkau.',
		translationEn:
			'O Allah, You are my Lord, there is no god but You. You created me and I am Your servant… So forgive me, for none forgives sins but You.',
		count: 1,
		source: 'HR. Al-Bukhari',
		note: 'Sayyidul Istighfar — penghulu istighfar.',
		noteEn: 'The chief of supplications for forgiveness.'
	},
	{
		id: 'm-asbahna',
		period: 'morning',
		order: 4,
		arabic:
			'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
		latin:
			"Aṣbaḥnā wa aṣbaḥal-mulku lillāh, walḥamdu lillāh, lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamdu wa huwa 'alā kulli syai'in qadīr.",
		translation:
			'Kami telah memasuki waktu pagi dan kerajaan hanyalah milik Allah, segala puji bagi Allah. Tidak ada tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya.',
		translationEn:
			'We have entered the morning and the dominion belongs to Allah; all praise is for Allah. There is no god but Allah, alone, with no partner.',
		count: 1,
		source: 'HR. Muslim'
	},
	{
		id: 'm-bismillah',
		period: 'morning',
		order: 5,
		arabic:
			'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
		latin:
			"Bismillāhillażī lā yaḍurru ma'asmihī syai'un fil-arḍi wa lā fis-samā'i wa huwas-samī'ul-'alīm.",
		translation:
			'Dengan nama Allah yang dengan menyebut nama-Nya tidak akan ada sesuatu pun di bumi maupun di langit yang membahayakan. Dia Maha Mendengar lagi Maha Mengetahui.',
		translationEn:
			'In the name of Allah, with whose name nothing on earth or in heaven can cause harm — He is the All-Hearing, the All-Knowing.',
		count: 3,
		source: 'HR. Abu Dawud & At-Tirmidzi (shahih)'
	},
	{
		id: 'm-radhitu',
		period: 'morning',
		order: 6,
		arabic:
			'رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا',
		latin:
			"Raḍītu billāhi rabbā, wa bil-islāmi dīnā, wa bi-Muḥammadin ṣallallāhu 'alaihi wa sallama nabiyyā.",
		translation: 'Aku ridha Allah sebagai Tuhan, Islam sebagai agama, dan Muhammad ﷺ sebagai Nabi.',
		translationEn:
			'I am pleased with Allah as my Lord, Islam as my religion, and Muhammad ﷺ as my Prophet.',
		count: 3,
		source: 'HR. Abu Dawud & At-Tirmidzi (hasan shahih)'
	},
	{
		id: 'm-hasbiyallah',
		period: 'morning',
		order: 7,
		arabic:
			'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
		latin: "Ḥasbiyallāhu lā ilāha illā huwa, 'alaihi tawakkaltu wa huwa rabbul-'arsyil-'aẓīm.",
		translation:
			'Cukuplah Allah bagiku, tidak ada Tuhan selain Dia. Hanya kepada-Nya aku bertawakal, dan Dia Tuhan pemilik Arsy yang agung.',
		translationEn:
			'Allah is sufficient for me. There is no god but Him. I rely upon Him, and He is the Lord of the Great Throne.',
		count: 7,
		source: 'HR. Abu Dawud (hasan)'
	},
	{
		id: 'm-subhanallah-wa-bihamdihi',
		period: 'morning',
		order: 8,
		arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
		latin: 'Subḥānallāhi wa biḥamdih.',
		translation: 'Mahasuci Allah, dan dengan memuji-Nya.',
		translationEn: 'Glory to Allah and praise be to Him.',
		count: 100,
		source: 'HR. Al-Bukhari & Muslim',
		note: 'Siapa membacanya 100x dalam sehari, terhapus dosa-dosanya meski sebanyak buih di lautan.',
		noteEn:
			'Whoever recites it 100 times daily, his sins are forgiven though they be as much as the foam of the sea.'
	},
	// EVENING
	{
		id: 'e-ayat-kursi',
		period: 'evening',
		order: 1,
		arabic:
			'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
		latin:
			"Allāhu lā ilāha illā huwa, al-ḥayyul-qayyūm. Lā ta'khużuhū sinatuw wa lā naum. (QS. Al-Baqarah: 255)",
		translation:
			'Ayat Kursi. Barangsiapa membacanya di petang hari, dilindungi dari (gangguan) jin hingga pagi.',
		translationEn:
			'The Verse of the Throne. Whoever recites it in the evening is protected from jinn until morning.',
		count: 1,
		source: 'HR. Al-Hakim & An-Nasa’i (shahih)'
	},
	{
		id: 'e-al-ikhlas-falaq-nas',
		period: 'evening',
		order: 2,
		arabic:
			'قُلْ هُوَ اللَّهُ أَحَدٌ • قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ • قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
		latin: 'Qul huwallāhu aḥad… • Qul a’ūżu birabbil-falaq… • Qul a’ūżu birabbin-nās…',
		translation:
			'Surat Al-Ikhlas, Al-Falaq, dan An-Nas. Dibaca tiga kali, mencukupi seseorang dari segala sesuatu.',
		translationEn:
			'Surahs Al-Ikhlas, Al-Falaq, and An-Nas — three times each suffices a person from everything.',
		count: 3,
		source: 'HR. Abu Dawud & At-Tirmidzi (shahih)'
	},
	{
		id: 'e-sayyidul-istighfar',
		period: 'evening',
		order: 3,
		arabic:
			'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
		latin:
			"Allāhumma anta rabbī lā ilāha illā anta, khalaqtanī wa anā 'abduka, wa anā 'alā 'ahdika wa wa'dika mastaṭa'tu, a'ūżu bika min syarri mā ṣana'tu, abū'u laka bi-ni'matika 'alayya, wa abū'u biżanbī, fagfir lī, fa-innahū lā yagfiruż-żunūba illā anta.",
		translation: 'Sayyidul Istighfar — penghulu istighfar.',
		translationEn: 'The chief of supplications for forgiveness.',
		count: 1,
		source: 'HR. Al-Bukhari'
	},
	{
		id: 'e-amsayna',
		period: 'evening',
		order: 4,
		arabic:
			'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
		latin:
			"Amsainā wa amsal-mulku lillāh, walḥamdu lillāh, lā ilāha illallāhu waḥdahū lā syarīka lah, lahul-mulku wa lahul-ḥamdu wa huwa 'alā kulli syai'in qadīr.",
		translation:
			'Kami telah memasuki waktu sore dan kerajaan hanyalah milik Allah, segala puji bagi Allah.',
		translationEn:
			'We have entered the evening and the dominion belongs to Allah; all praise is for Allah.',
		count: 1,
		source: 'HR. Muslim'
	},
	{
		id: 'e-bismillah',
		period: 'evening',
		order: 5,
		arabic:
			'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ',
		latin:
			"Bismillāhillażī lā yaḍurru ma'asmihī syai'un fil-arḍi wa lā fis-samā'i wa huwas-samī'ul-'alīm.",
		translation:
			'Dengan nama Allah, yang dengan nama-Nya tidak akan ada sesuatu pun yang membahayakan, baik di bumi maupun di langit. Dia Maha Mendengar lagi Maha Mengetahui.',
		translationEn:
			'In the name of Allah, with whose name nothing on earth or in heaven can cause harm — He is the All-Hearing, the All-Knowing.',
		count: 3,
		source: 'HR. Abu Dawud & At-Tirmidzi (shahih)'
	},
	{
		id: 'e-audzu-bi-kalimatillah',
		period: 'evening',
		order: 6,
		arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
		latin: "A'ūżu bikalimātillāhit-tāmmāti min syarri mā khalaq.",
		translation:
			'Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan apa yang Dia ciptakan.',
		translationEn:
			'I seek refuge in the perfect words of Allah from the evil of what He has created.',
		count: 3,
		source: 'HR. Muslim',
		note: 'Khusus dibaca di waktu petang.',
		noteEn: 'Recited specifically in the evening.'
	},
	{
		id: 'e-hasbiyallah',
		period: 'evening',
		order: 7,
		arabic:
			'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',
		latin: "Ḥasbiyallāhu lā ilāha illā huwa, 'alaihi tawakkaltu wa huwa rabbul-'arsyil-'aẓīm.",
		translation: 'Cukuplah Allah bagiku, tidak ada Tuhan selain Dia.',
		translationEn: 'Allah is sufficient for me. There is no god but Him.',
		count: 7,
		source: 'HR. Abu Dawud (hasan)'
	},
	{
		id: 'e-subhanallah-wa-bihamdihi',
		period: 'evening',
		order: 8,
		arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
		latin: 'Subḥānallāhi wa biḥamdih.',
		translation: 'Mahasuci Allah, dan dengan memuji-Nya.',
		translationEn: 'Glory to Allah and praise be to Him.',
		count: 100,
		source: 'HR. Al-Bukhari & Muslim'
	}
];

export function getAdhkarFor(period: AdhkarPeriod): AdhkarItem[] {
	return ADHKAR.filter((item) => item.period === period).sort((a, b) => a.order - b.order);
}
