export type SurahInfoItem = {
	translation: string;
	arabic: string;
	latin: string;
	ayah_count: number;
	index: number;
	revelation?: number;
};

export type SurahInfoPage = {
	current: SurahInfoItem;
	next?: SurahInfoItem;
	prev?: SurahInfoItem;
};

export type SurahInfo = Record<string, SurahInfoItem>;

const surahInfo: SurahInfo = {
	'1': {
		translation: 'Pembukaan',
		arabic: 'الفاتحة',
		latin: 'Al-Fatihah',
		ayah_count: 7,
		index: 1
	},
	'2': {
		translation: 'Sapi',
		arabic: 'البقرة',
		latin: 'Al-Baqarah',
		ayah_count: 286,
		index: 2
	},
	'3': {
		translation: 'Keluarga Imran',
		arabic: 'اٰل عمران',
		latin: "Ali 'Imran",
		ayah_count: 200,
		index: 3
	},
	'4': {
		translation: 'Wanita',
		arabic: 'النساۤء',
		latin: "An-Nisa'",
		ayah_count: 176,
		index: 4
	},
	'5': {
		translation: 'Hidangan',
		arabic: 'الماۤئدة',
		latin: "Al-Ma'idah",
		ayah_count: 120,
		index: 5
	},
	'6': {
		translation: 'Binatang Ternak',
		arabic: 'الانعام',
		latin: "Al-An'am",
		ayah_count: 165,
		index: 6
	},
	'7': {
		translation: 'Tempat Tertinggi',
		arabic: 'الاعراف',
		latin: "Al-A'raf",
		ayah_count: 206,
		index: 7
	},
	'8': {
		translation: 'Rampasan Perang',
		arabic: 'الانفال',
		latin: 'Al-Anfal',
		ayah_count: 75,
		index: 8
	},
	'9': {
		translation: 'Pengampunan',
		arabic: 'التوبة',
		latin: 'At-Taubah',
		ayah_count: 129,
		index: 9
	},
	'10': {
		translation: 'Yunus',
		arabic: 'يونس',
		latin: 'Yunus',
		ayah_count: 109,
		index: 10
	},
	'11': {
		translation: 'Hud',
		arabic: 'هود',
		latin: 'Hud',
		ayah_count: 123,
		index: 11
	},
	'12': {
		translation: 'Yusuf',
		arabic: 'يوسف',
		latin: 'Yusuf',
		ayah_count: 111,
		index: 12
	},
	'13': {
		translation: 'Guruh',
		arabic: 'الرّعد',
		latin: "Ar-Ra'd",
		ayah_count: 43,
		index: 13
	},
	'14': {
		translation: 'Ibrahim',
		arabic: 'ابرٰهيم',
		latin: 'Ibrahim',
		ayah_count: 52,
		index: 14
	},
	'15': {
		translation: 'Hijr',
		arabic: 'الحجر',
		latin: 'Al-Hijr',
		ayah_count: 99,
		index: 15
	},
	'16': {
		translation: 'Lebah',
		arabic: 'النحل',
		latin: 'An-Nahl',
		ayah_count: 128,
		index: 16
	},
	'17': {
		translation: 'Memperjalankan Malam Hari',
		arabic: 'الاسراۤء',
		latin: "Al-Isra'",
		ayah_count: 111,
		index: 17
	},
	'18': {
		translation: 'Goa',
		arabic: 'الكهف',
		latin: 'Al-Kahf',
		ayah_count: 110,
		index: 18
	},
	'19': {
		translation: 'Maryam',
		arabic: 'مريم',
		latin: 'Maryam',
		ayah_count: 98,
		index: 19
	},
	'20': {
		translation: 'Taha',
		arabic: 'طٰهٰ',
		latin: 'Taha',
		ayah_count: 135,
		index: 20
	},
	'21': {
		translation: 'Para Nabi',
		arabic: 'الانبياۤء',
		latin: "Al-Anbiya'",
		ayah_count: 112,
		index: 21
	},
	'22': {
		translation: 'Haji',
		arabic: 'الحج',
		latin: 'Al-Hajj',
		ayah_count: 78,
		index: 22
	},
	'23': {
		translation: 'Orang-Orang Mukmin',
		arabic: 'المؤمنون',
		latin: "Al-Mu'minun",
		ayah_count: 118,
		index: 23
	},
	'24': {
		translation: 'Cahaya',
		arabic: 'النّور',
		latin: 'An-Nur',
		ayah_count: 64,
		index: 24
	},
	'25': {
		translation: 'Pembeda',
		arabic: 'الفرقان',
		latin: 'Al-Furqan',
		ayah_count: 77,
		index: 25
	},
	'26': {
		translation: 'Para Penyair',
		arabic: 'الشعراۤء',
		latin: "Asy-Syu'ara'",
		ayah_count: 227,
		index: 26
	},
	'27': {
		translation: 'Semut-semut',
		arabic: 'النمل',
		latin: 'An-Naml',
		ayah_count: 93,
		index: 27
	},
	'28': {
		translation: 'Kisah-Kisah',
		arabic: 'القصص',
		latin: 'Al-Qasas',
		ayah_count: 88,
		index: 28
	},
	'29': {
		translation: 'Laba-Laba',
		arabic: 'العنكبوت',
		latin: "Al-'Ankabut",
		ayah_count: 69,
		index: 29
	},
	'30': {
		translation: 'Romawi',
		arabic: 'الرّوم',
		latin: 'Ar-Rum',
		ayah_count: 60,
		index: 30
	},
	'31': {
		translation: 'Luqman',
		arabic: 'لقمٰن',
		latin: 'Luqman',
		ayah_count: 34,
		index: 31
	},
	'32': {
		translation: 'Sajdah',
		arabic: 'السّجدة',
		latin: 'As-Sajdah',
		ayah_count: 30,
		index: 32
	},
	'33': {
		translation: 'Golongan Yang Bersekutu',
		arabic: 'الاحزاب',
		latin: 'Al-Ahzab',
		ayah_count: 73,
		index: 33
	},
	'34': {
		translation: "Saba'",
		arabic: 'سبأ',
		latin: "Saba'",
		ayah_count: 54,
		index: 34
	},
	'35': {
		translation: 'Maha Pencipta',
		arabic: 'فاطر',
		latin: 'Fatir',
		ayah_count: 45,
		index: 35
	},
	'36': {
		translation: 'Yasin',
		arabic: 'يٰسۤ',
		latin: 'Yasin',
		ayah_count: 83,
		index: 36
	},
	'37': {
		translation: 'Barisan-Barisan',
		arabic: 'الصّٰۤفّٰت',
		latin: 'As-Saffat',
		ayah_count: 182,
		index: 37
	},
	'38': {
		translation: 'Sad',
		arabic: 'ص',
		latin: 'Sad',
		ayah_count: 88,
		index: 38
	},
	'39': {
		translation: 'Rombongan',
		arabic: 'الزمر',
		latin: 'Az-Zumar',
		ayah_count: 75,
		index: 39
	},
	'40': {
		translation: 'Maha Pengampun',
		arabic: 'غافر',
		latin: 'Gafir',
		ayah_count: 85,
		index: 40
	},
	'41': {
		translation: 'Yang Dijelaskan',
		arabic: 'فصّلت',
		latin: 'Fussilat',
		ayah_count: 54,
		index: 41
	},
	'42': {
		translation: 'Musyawarah',
		arabic: 'الشورى',
		latin: 'Asy-Syura',
		ayah_count: 53,
		index: 42
	},
	'43': {
		translation: 'Perhiasan',
		arabic: 'الزخرف',
		latin: 'Az-Zukhruf',
		ayah_count: 89,
		index: 43
	},
	'44': {
		translation: 'Kabut',
		arabic: 'الدخان',
		latin: 'Ad-Dukhan',
		ayah_count: 59,
		index: 44
	},
	'45': {
		translation: 'Berlutut',
		arabic: 'الجاثية',
		latin: 'Al-Jasiyah',
		ayah_count: 37,
		index: 45
	},
	'46': {
		translation: 'Bukit Pasir',
		arabic: 'الاحقاف',
		latin: 'Al-Ahqaf',
		ayah_count: 35,
		index: 46
	},
	'47': {
		translation: 'Muhammad',
		arabic: 'محمّد',
		latin: 'Muhammad',
		ayah_count: 38,
		index: 47
	},
	'48': {
		translation: 'Kemenangan',
		arabic: 'الفتح',
		latin: 'Al-Fath',
		ayah_count: 29,
		index: 48
	},
	'49': {
		translation: 'Kamar-Kamar',
		arabic: 'الحجرٰت',
		latin: 'Al-Hujurat',
		ayah_count: 18,
		index: 49
	},
	'50': {
		translation: 'Qaf',
		arabic: 'ق',
		latin: 'Qaf',
		ayah_count: 45,
		index: 50
	},
	'51': {
		translation: 'Angin yang Menerbangkan',
		arabic: 'الذّٰريٰت',
		latin: 'Az-Zariyat',
		ayah_count: 60,
		index: 51
	},
	'52': {
		translation: 'Bukit Tursina',
		arabic: 'الطور',
		latin: 'At-Tur',
		ayah_count: 49,
		index: 52
	},
	'53': {
		translation: 'Bintang',
		arabic: 'النجم',
		latin: 'An-Najm',
		ayah_count: 62,
		index: 53
	},
	'54': {
		translation: 'Bulan',
		arabic: 'القمر',
		latin: 'Al-Qamar',
		ayah_count: 55,
		index: 54
	},
	'55': {
		translation: 'Maha Pengasih',
		arabic: 'الرحمن',
		latin: 'Ar-Rahman',
		ayah_count: 78,
		index: 55
	},
	'56': {
		translation: 'Hari Kiamat',
		arabic: 'الواقعة',
		latin: "Al-Waqi'ah",
		ayah_count: 96,
		index: 56
	},
	'57': {
		translation: 'Besi',
		arabic: 'الحديد',
		latin: 'Al-Hadid',
		ayah_count: 29,
		index: 57
	},
	'58': {
		translation: 'Gugatan',
		arabic: 'المجادلة',
		latin: 'Al-Mujadalah',
		ayah_count: 22,
		index: 58
	},
	'59': {
		translation: 'Pengusiran',
		arabic: 'الحشر',
		latin: 'Al-Hasyr',
		ayah_count: 24,
		index: 59
	},
	'60': {
		translation: 'Wanita Yang Diuji',
		arabic: 'الممتحنة',
		latin: 'Al-Mumtahanah',
		ayah_count: 13,
		index: 60
	},
	'61': {
		translation: 'Barisan',
		arabic: 'الصّفّ',
		latin: 'As-Saff',
		ayah_count: 14,
		index: 61
	},
	'62': {
		translation: 'Jumat',
		arabic: 'الجمعة',
		latin: "Al-Jumu'ah",
		ayah_count: 11,
		index: 62
	},
	'63': {
		translation: 'Orang-Orang Munafik',
		arabic: 'المنٰفقون',
		latin: 'Al-Munafiqun',
		ayah_count: 11,
		index: 63
	},
	'64': {
		translation: 'Pengungkapan Kesalahan',
		arabic: 'التغابن',
		latin: 'At-Tagabun',
		ayah_count: 18,
		index: 64
	},
	'65': {
		translation: 'Talak',
		arabic: 'الطلاق',
		latin: 'At-Talaq',
		ayah_count: 12,
		index: 65
	},
	'66': {
		translation: 'Pengharaman',
		arabic: 'التحريم',
		latin: 'At-Tahrim',
		ayah_count: 12,
		index: 66
	},
	'67': {
		translation: 'Kerajaan',
		arabic: 'الملك',
		latin: 'Al-Mulk',
		ayah_count: 30,
		index: 67
	},
	'68': {
		translation: 'Pena',
		arabic: 'القلم',
		latin: 'Al-Qalam',
		ayah_count: 52,
		index: 68
	},
	'69': {
		translation: 'Hari Kiamat',
		arabic: 'الحاۤقّة',
		latin: 'Al-Haqqah',
		ayah_count: 52,
		index: 69
	},
	'70': {
		translation: 'Tempat Naik',
		arabic: 'المعارج',
		latin: "Al-Ma'arij",
		ayah_count: 44,
		index: 70
	},
	'71': {
		translation: 'Nuh',
		arabic: 'نوح',
		latin: 'Nuh',
		ayah_count: 28,
		index: 71
	},
	'72': {
		translation: 'Jin',
		arabic: 'الجن',
		latin: 'Al-Jinn',
		ayah_count: 28,
		index: 72
	},
	'73': {
		translation: 'Orang Yang Berselimut',
		arabic: 'المزّمّل',
		latin: 'Al-Muzzammil',
		ayah_count: 20,
		index: 73
	},
	'74': {
		translation: 'Orang Yang Berkemul',
		arabic: 'المدّثّر',
		latin: 'Al-Muddassir',
		ayah_count: 56,
		index: 74
	},
	'75': {
		translation: 'Hari Kiamat',
		arabic: 'القيٰمة',
		latin: 'Al-Qiyamah',
		ayah_count: 40,
		index: 75
	},
	'76': {
		translation: 'Manusia',
		arabic: 'الانسان',
		latin: 'Al-Insan',
		ayah_count: 31,
		index: 76
	},
	'77': {
		translation: 'Malaikat Yang Diutus',
		arabic: 'المرسلٰت',
		latin: 'Al-Mursalat',
		ayah_count: 50,
		index: 77
	},
	'78': {
		translation: 'Berita Besar',
		arabic: 'النبأ',
		latin: "An-Naba'",
		ayah_count: 40,
		index: 78
	},
	'79': {
		translation: 'Malaikat Yang Mencabut',
		arabic: 'النّٰزعٰت',
		latin: "An-Nazi'at",
		ayah_count: 46,
		index: 79
	},
	'80': {
		translation: 'Bermuka Masam',
		arabic: 'عبس',
		latin: "'Abasa",
		ayah_count: 42,
		index: 80
	},
	'81': {
		translation: 'Penggulungan',
		arabic: 'التكوير',
		latin: 'At-Takwir',
		ayah_count: 29,
		index: 81
	},
	'82': {
		translation: 'Terbelah',
		arabic: 'الانفطار',
		latin: 'Al-Infitar',
		ayah_count: 19,
		index: 82
	},
	'83': {
		translation: 'Orang-Orang Curang',
		arabic: 'المطفّفين',
		latin: 'Al-Mutaffifin',
		ayah_count: 36,
		index: 83
	},
	'84': {
		translation: 'Terbelah',
		arabic: 'الانشقاق',
		latin: 'Al-Insyiqaq',
		ayah_count: 25,
		index: 84
	},
	'85': {
		translation: 'Gugusan Bintang',
		arabic: 'البروج',
		latin: 'Al-Buruj',
		ayah_count: 22,
		index: 85
	},
	'86': {
		translation: 'Yang Datang Di Malam Hari',
		arabic: 'الطارق',
		latin: 'At-Tariq',
		ayah_count: 17,
		index: 86
	},
	'87': {
		translation: 'Maha Tinggi',
		arabic: 'الاعلى',
		latin: "Al-A'la",
		ayah_count: 19,
		index: 87
	},
	'88': {
		translation: 'Hari Kiamat',
		arabic: 'الغاشية',
		latin: 'Al-Gasyiyah',
		ayah_count: 26,
		index: 88
	},
	'89': {
		translation: 'Fajar',
		arabic: 'الفجر',
		latin: 'Al-Fajr',
		ayah_count: 30,
		index: 89
	},
	'90': {
		translation: 'Negeri',
		arabic: 'البلد',
		latin: 'Al-Balad',
		ayah_count: 20,
		index: 90
	},
	'91': {
		translation: 'Matahari',
		arabic: 'الشمس',
		latin: 'Asy-Syams',
		ayah_count: 15,
		index: 91
	},
	'92': {
		translation: 'Malam',
		arabic: 'الّيل',
		latin: 'Al-Lail',
		ayah_count: 21,
		index: 92
	},
	'93': {
		translation: 'Duha',
		arabic: 'الضحى',
		latin: 'Ad-Duha',
		ayah_count: 11,
		index: 93
	},
	'94': {
		translation: 'Lapang',
		arabic: 'الشرح',
		latin: 'Asy-Syarh',
		ayah_count: 8,
		index: 94
	},
	'95': {
		translation: 'Buah Tin',
		arabic: 'التين',
		latin: 'At-Tin',
		ayah_count: 8,
		index: 95
	},
	'96': {
		translation: 'Segumpal Darah',
		arabic: 'العلق',
		latin: "Al-'Alaq",
		ayah_count: 19,
		index: 96
	},
	'97': {
		translation: 'Kemuliaan',
		arabic: 'القدر',
		latin: 'Al-Qadr',
		ayah_count: 5,
		index: 97
	},
	'98': {
		translation: 'Bukti Nyata',
		arabic: 'البيّنة',
		latin: 'Al-Bayyinah',
		ayah_count: 8,
		index: 98
	},
	'99': {
		translation: 'Guncangan',
		arabic: 'الزلزلة',
		latin: 'Az-Zalzalah',
		ayah_count: 8,
		index: 99
	},
	'100': {
		translation: 'Kuda Yang Berlari Kencang',
		arabic: 'العٰديٰت',
		latin: "Al-'Adiyat",
		ayah_count: 11,
		index: 100
	},
	'101': {
		translation: 'Hari Kiamat',
		arabic: 'القارعة',
		latin: "Al-Qari'ah",
		ayah_count: 11,
		index: 101
	},
	'102': {
		translation: 'Bermegah-Megahan',
		arabic: 'التكاثر',
		latin: 'At-Takasur',
		ayah_count: 8,
		index: 102
	},
	'103': {
		translation: 'Asar',
		arabic: 'العصر',
		latin: "Al-'Asr",
		ayah_count: 3,
		index: 103
	},
	'104': {
		translation: 'Pengumpat',
		arabic: 'الهمزة',
		latin: 'Al-Humazah',
		ayah_count: 9,
		index: 104
	},
	'105': {
		translation: 'Gajah',
		arabic: 'الفيل',
		latin: 'Al-Fil',
		ayah_count: 5,
		index: 105
	},
	'106': {
		translation: 'Quraisy',
		arabic: 'قريش',
		latin: 'Quraisy',
		ayah_count: 4,
		index: 106
	},
	'107': {
		translation: 'Barang Yang Berguna',
		arabic: 'الماعون',
		latin: "Al-Ma'un",
		ayah_count: 7,
		index: 107
	},
	'108': {
		translation: 'Pemberian Yang Banyak',
		arabic: 'الكوثر',
		latin: 'Al-Kausar',
		ayah_count: 3,
		index: 108
	},
	'109': {
		translation: 'Orang-Orang kafir',
		arabic: 'الكٰفرون',
		latin: 'Al-Kafirun',
		ayah_count: 6,
		index: 109
	},
	'110': {
		translation: 'Pertolongan',
		arabic: 'النصر',
		latin: 'An-Nasr',
		ayah_count: 3,
		index: 110
	},
	'111': {
		translation: 'Api Yang Bergejolak',
		arabic: 'اللهب',
		latin: 'Al-Lahab',
		ayah_count: 5,
		index: 111
	},
	'112': {
		translation: 'Ikhlas',
		arabic: 'الاخلاص',
		latin: 'Al-Ikhlas',
		ayah_count: 4,
		index: 112
	},
	'113': {
		translation: 'Subuh',
		arabic: 'الفلق',
		latin: 'Al-Falaq',
		ayah_count: 5,
		index: 113
	},
	'114': {
		translation: 'Manusia',
		arabic: 'الناس',
		latin: 'An-Nas',
		ayah_count: 6,
		index: 114
	}
};

export default surahInfo;
