import { LANGUAGE_OPTIONS, languageStore } from '$lib/checkLanguaguage';

export type DailyDoaItem = {
	title: string;
	arabic: string;
	latin: string;
	translation: string;
};
import { get } from 'svelte/store';
const current = get(languageStore);

const dailyDoa: DailyDoaItem[] = [
	{
		title: `${current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'Doa Before Eating' : 'Doa Sebelum Makan'}`,
		arabic: 'اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
		latin: "Alloohumma barik lanaa fiimaa razatanaa waqinaa 'adzaa bannar",
		translation:
			'Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka'
	},
	{
		title: `${current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'Doa After Eating' : 'Doa Sesudah Makan'}`,
		arabic: 'اَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ',
		latin: "Alhamdu lillaahil ladzii ath'amanaa wa saqoonaa wa ja'alnaa muslimiin",
		translation:
			'Segala puji bagi Allah yang telah memberi makan kami dan minuman kami, serta menjadikan kami sebagai orang-orang islam'
	},
	{
		title: `${current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'Doa After Drinking' : 'Doa Sesudah Minum'}`,
		arabic:
			'اَلْحَمْدُ ِللهِ الَّذِىْ جَعَلَهُ عَذْبًا فُرَاتًا بِرَحْمَتِهِ وَلَمْ يَجْعَلْهُ مِلْحًا اُجَاجًا بِذُنُوْبِنَا',
		latin:
			"Alhamdu lillaahil ladzi ja'alahuu 'adzbam furootam birohmatihii wa lamyaj'alhu milhan ujaajam bidzunuubinaa",
		translation:
			'Segala puji bagi Allah yang telah menjadikan air ini (minuman) segar dan menggiatkan dengan rahmat-Nya dan tidak menjadikan air ini (minuman) asin lagi pahit karena dosa-dosa kami'
	},
	{
		title: `${current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'Doa When Forgetting to Recite Before Eating' : 'Doa Lupa Membaca Sebelum Makan'}`,
		arabic: 'بِسْمِ اللهِ فِىِ أَوَّلِهِ وَآخِرِهِ',
		latin: 'Bismillaahi fii awwalihi wa aakhirihi',
		translation: 'Dengan menyebut nama Allah pada awal dan akhirnya'
	},
	{
		title: `${current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'Doa Before Sleeping' : 'Doa Sebelum Tidur'}`,
		arabic: 'بِسْمِكَ اللّٰهُمَّ اَحْيَا وَاَمُوْتُ',
		latin: 'Bismikallohumma ahya wa amuutu',
		translation: 'Dengan menyebut nama-Mu ya Allah, aku hidup dan aku mati'
	},

	{
		title: `${current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'Doa Upon Waking Up' : 'Doa Bangun Tidur'}`,
		arabic: 'اَلْحَمْدُ ِللهِ الَّذِىْ اَحْيَانَا بَعْدَمَآ اَمَاتَنَا وَاِلَيْهِ النُّشُوْرُ',
		latin: "Alhamdu lillahil ladzii ahyaanaa ba'da maa amaa tanaa wa ilahin nusyuuru",
		translation:
			'Segala puji bagi Allah yang telah menghidupkan kami sesudah kami mati (membangunkan dari tidur) dan hanya kepada-Nya kami dikembalikan'
	},
	{
		title: `${current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'Doa Entering the Bathroom or Toilet' : 'Doa Masuk Kamar Mandi'}`,
		arabic: 'اَللّٰهُمَّ اِنّىْ اَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَآئِثِ',
		latin: "Alloohumma Innii a'uudzubika minal khubutsi wal khoaaitsi",
		translation:
			'Ya Allah, aku berlindung pada-Mu dari godaan syetan  laki-laki dan setan perempuan'
	},
	{
		title: `${current == LANGUAGE_OPTIONS.ENGLISH.locale ? 'Doa Istinja' : 'Doa Istinja'}`,
		arabic: 'اَللّٰهُمَّ حَسِّنْ فَرْجِىْ مِنَ الْفَوَاخِشِ وَظَهِّرْ قَلْبِيْ مِنَ النِّفَاقِ',
		latin: 'Alloohumma thahhir qolbii minan nifaaqi wa hashshin fajrii minal fawaahisyi',
		translation:
			'Wahai Tuhanku, sucikanlah hatiku dari sifat kepura-puraan (munafiq) serta peliharalah kemaluanku dari perbuatan keji'
	}
	// ...continue for all other items, using the same pattern:
	// title: `${current==LANGUAGE_OPTIONS.ENGLISH.locale?'Doa ... (English)':'Doa ... (Indonesian)'}`
	// For titles that are proper names or should not be translated, just use the same string for both.
];

export default dailyDoa;
