export interface IqraNewLetter {
	withFathah: string;
	name: string;
	bunyi: string;
}

export interface IqraHalaman {
	id: number;
	newLetters: IqraNewLetter[];
	// Each inner array is one row displayed right-to-left.
	// Element [0] is the rightmost letter (first read in Arabic RTL order).
	rows: string[][];
}

// Jilid 1: fathah only. 14 halaman, 2 new letters each = all 28 hijaiyah.
// Halaman 1 layout verified from source; others follow standard Iqra progression.
export const IQRA_1_HALAMAN: IqraHalaman[] = [
	{
		id: 1,
		newLetters: [
			{ withFathah: 'اَ', name: 'Alif', bunyi: 'a' },
			{ withFathah: 'بَ', name: 'Ba', bunyi: 'ba' }
		],
		rows: [
			['بَ', 'اَ', 'بَ', 'بَ', 'اَ', 'بَ'],
			['اَ', 'اَ', 'بَ', 'اَ', 'اَ', 'بَ'],
			['بَ', 'بَ', 'اَ', 'بَ', 'بَ', 'اَ'],
			['اَ', 'بَ', 'اَ', 'اَ', 'بَ', 'اَ'],
			['بَ', 'اَ', 'اَ', 'بَ', 'اَ'],
			['اَبَ', 'اَبَ', 'اَبَ']
		]
	},
	{
		id: 2,
		newLetters: [
			{ withFathah: 'تَ', name: 'Ta', bunyi: 'ta' },
			{ withFathah: 'ثَ', name: 'Tsa', bunyi: 'tsa' }
		],
		rows: [
			['تَ', 'ثَ', 'تَ', 'ثَ', 'تَ', 'ثَ'],
			['اَ', 'تَ', 'بَ', 'ثَ', 'اَ', 'تَ'],
			['ثَ', 'اَ', 'تَ', 'بَ', 'ثَ', 'اَ'],
			['بَ', 'تَ', 'اَ', 'ثَ', 'بَ', 'تَ'],
			['تَ', 'بَ', 'ثَ', 'اَ', 'تَ'],
			['اَبَ', 'اَتَ', 'اَثَ']
		]
	},
	{
		id: 3,
		newLetters: [
			{ withFathah: 'جَ', name: 'Jim', bunyi: 'ja' },
			{ withFathah: 'حَ', name: 'Ha', bunyi: 'ha' }
		],
		rows: [
			['جَ', 'حَ', 'جَ', 'حَ', 'جَ', 'حَ'],
			['اَ', 'جَ', 'بَ', 'حَ', 'تَ', 'جَ'],
			['حَ', 'ثَ', 'جَ', 'اَ', 'حَ', 'بَ'],
			['جَ', 'اَ', 'حَ', 'تَ', 'جَ', 'ثَ'],
			['حَ', 'جَ', 'اَ', 'بَ', 'حَ'],
			['اَجَ', 'اَحَ', 'اَجَ']
		]
	},
	{
		id: 4,
		newLetters: [
			{ withFathah: 'خَ', name: 'Kha', bunyi: 'kha' },
			{ withFathah: 'دَ', name: 'Dal', bunyi: 'da' }
		],
		rows: [
			['خَ', 'دَ', 'خَ', 'دَ', 'خَ', 'دَ'],
			['اَ', 'خَ', 'بَ', 'دَ', 'جَ', 'خَ'],
			['دَ', 'حَ', 'خَ', 'تَ', 'دَ', 'اَ'],
			['خَ', 'اَ', 'دَ', 'بَ', 'خَ', 'ثَ'],
			['دَ', 'خَ', 'جَ', 'حَ', 'دَ'],
			['اَخَ', 'اَدَ', 'اَخَ']
		]
	},
	{
		id: 5,
		newLetters: [
			{ withFathah: 'ذَ', name: 'Dzal', bunyi: 'dza' },
			{ withFathah: 'رَ', name: 'Ra', bunyi: 'ra' }
		],
		rows: [
			['ذَ', 'رَ', 'ذَ', 'رَ', 'ذَ', 'رَ'],
			['اَ', 'ذَ', 'بَ', 'رَ', 'خَ', 'ذَ'],
			['رَ', 'دَ', 'ذَ', 'جَ', 'رَ', 'اَ'],
			['ذَ', 'اَ', 'رَ', 'حَ', 'ذَ', 'بَ'],
			['رَ', 'ذَ', 'تَ', 'ثَ', 'رَ'],
			['اَذَ', 'اَرَ', 'اَذَ']
		]
	},
	{
		id: 6,
		newLetters: [
			{ withFathah: 'زَ', name: 'Zai', bunyi: 'za' },
			{ withFathah: 'سَ', name: 'Sin', bunyi: 'sa' }
		],
		rows: [
			['زَ', 'سَ', 'زَ', 'سَ', 'زَ', 'سَ'],
			['اَ', 'زَ', 'بَ', 'سَ', 'رَ', 'زَ'],
			['سَ', 'ذَ', 'زَ', 'خَ', 'سَ', 'اَ'],
			['زَ', 'اَ', 'سَ', 'دَ', 'زَ', 'بَ'],
			['سَ', 'زَ', 'حَ', 'جَ', 'سَ'],
			['اَزَ', 'اَسَ', 'اَزَ']
		]
	},
	{
		id: 7,
		newLetters: [
			{ withFathah: 'شَ', name: 'Syin', bunyi: 'sya' },
			{ withFathah: 'صَ', name: 'Shad', bunyi: 'sha' }
		],
		rows: [
			['شَ', 'صَ', 'شَ', 'صَ', 'شَ', 'صَ'],
			['اَ', 'شَ', 'بَ', 'صَ', 'سَ', 'شَ'],
			['صَ', 'زَ', 'شَ', 'رَ', 'صَ', 'اَ'],
			['شَ', 'اَ', 'صَ', 'ذَ', 'شَ', 'بَ'],
			['صَ', 'شَ', 'خَ', 'دَ', 'صَ'],
			['اَشَ', 'اَصَ', 'اَشَ']
		]
	},
	{
		id: 8,
		newLetters: [
			{ withFathah: 'ضَ', name: 'Dhad', bunyi: 'dha' },
			{ withFathah: 'طَ', name: 'Tha', bunyi: 'tha' }
		],
		rows: [
			['ضَ', 'طَ', 'ضَ', 'طَ', 'ضَ', 'طَ'],
			['اَ', 'ضَ', 'بَ', 'طَ', 'صَ', 'ضَ'],
			['طَ', 'شَ', 'ضَ', 'سَ', 'طَ', 'اَ'],
			['ضَ', 'اَ', 'طَ', 'زَ', 'ضَ', 'بَ'],
			['طَ', 'ضَ', 'رَ', 'ذَ', 'طَ'],
			['اَضَ', 'اَطَ', 'اَضَ']
		]
	},
	{
		id: 9,
		newLetters: [
			{ withFathah: 'ظَ', name: 'Zha', bunyi: 'zha' },
			{ withFathah: 'عَ', name: 'Ain', bunyi: "'a" }
		],
		rows: [
			['ظَ', 'عَ', 'ظَ', 'عَ', 'ظَ', 'عَ'],
			['اَ', 'ظَ', 'بَ', 'عَ', 'طَ', 'ظَ'],
			['عَ', 'ضَ', 'ظَ', 'صَ', 'عَ', 'اَ'],
			['ظَ', 'اَ', 'عَ', 'شَ', 'ظَ', 'بَ'],
			['عَ', 'ظَ', 'سَ', 'زَ', 'عَ'],
			['اَظَ', 'اَعَ', 'اَظَ']
		]
	},
	{
		id: 10,
		newLetters: [
			{ withFathah: 'غَ', name: 'Ghain', bunyi: 'gha' },
			{ withFathah: 'فَ', name: 'Fa', bunyi: 'fa' }
		],
		rows: [
			['غَ', 'فَ', 'غَ', 'فَ', 'غَ', 'فَ'],
			['اَ', 'غَ', 'بَ', 'فَ', 'عَ', 'غَ'],
			['فَ', 'ظَ', 'غَ', 'طَ', 'فَ', 'اَ'],
			['غَ', 'اَ', 'فَ', 'ضَ', 'غَ', 'بَ'],
			['فَ', 'غَ', 'صَ', 'شَ', 'فَ'],
			['اَغَ', 'اَفَ', 'اَغَ']
		]
	},
	{
		id: 11,
		newLetters: [
			{ withFathah: 'قَ', name: 'Qaf', bunyi: 'qa' },
			{ withFathah: 'كَ', name: 'Kaf', bunyi: 'ka' }
		],
		rows: [
			['قَ', 'كَ', 'قَ', 'كَ', 'قَ', 'كَ'],
			['اَ', 'قَ', 'بَ', 'كَ', 'فَ', 'قَ'],
			['كَ', 'غَ', 'قَ', 'عَ', 'كَ', 'اَ'],
			['قَ', 'اَ', 'كَ', 'ظَ', 'قَ', 'بَ'],
			['كَ', 'قَ', 'طَ', 'ضَ', 'كَ'],
			['اَقَ', 'اَكَ', 'اَقَ']
		]
	},
	{
		id: 12,
		newLetters: [
			{ withFathah: 'لَ', name: 'Lam', bunyi: 'la' },
			{ withFathah: 'مَ', name: 'Mim', bunyi: 'ma' }
		],
		rows: [
			['لَ', 'مَ', 'لَ', 'مَ', 'لَ', 'مَ'],
			['اَ', 'لَ', 'بَ', 'مَ', 'كَ', 'لَ'],
			['مَ', 'قَ', 'لَ', 'فَ', 'مَ', 'اَ'],
			['لَ', 'اَ', 'مَ', 'غَ', 'لَ', 'بَ'],
			['مَ', 'لَ', 'عَ', 'ظَ', 'مَ'],
			['اَلَ', 'اَمَ', 'اَلَ']
		]
	},
	{
		id: 13,
		newLetters: [
			{ withFathah: 'نَ', name: 'Nun', bunyi: 'na' },
			{ withFathah: 'وَ', name: 'Waw', bunyi: 'wa' }
		],
		rows: [
			['نَ', 'وَ', 'نَ', 'وَ', 'نَ', 'وَ'],
			['اَ', 'نَ', 'بَ', 'وَ', 'مَ', 'نَ'],
			['وَ', 'لَ', 'نَ', 'كَ', 'وَ', 'اَ'],
			['نَ', 'اَ', 'وَ', 'قَ', 'نَ', 'بَ'],
			['وَ', 'نَ', 'فَ', 'غَ', 'وَ'],
			['اَنَ', 'اَوَ', 'اَنَ']
		]
	},
	{
		id: 14,
		newLetters: [
			{ withFathah: 'هَ', name: 'Ha', bunyi: 'ha' },
			{ withFathah: 'يَ', name: 'Ya', bunyi: 'ya' }
		],
		rows: [
			['هَ', 'يَ', 'هَ', 'يَ', 'هَ', 'يَ'],
			['اَ', 'هَ', 'بَ', 'يَ', 'وَ', 'هَ'],
			['يَ', 'نَ', 'هَ', 'مَ', 'يَ', 'اَ'],
			['هَ', 'اَ', 'يَ', 'لَ', 'هَ', 'بَ'],
			['يَ', 'هَ', 'كَ', 'قَ', 'يَ'],
			['اَهَ', 'اَيَ', 'اَهَ']
		]
	}
];

export const IQRA_LEVELS = [
	{
		jilid: 1,
		title: 'Huruf Hijaiyah',
		desc: 'Mengenal 28 huruf hijaiyah dengan harakat fathah',
		available: true
	},
	{
		jilid: 2,
		title: 'Huruf Sambung',
		desc: 'Belajar bentuk huruf di awal, tengah, dan akhir kata',
		available: false
	},
	{
		jilid: 3,
		title: 'Harakat Lengkap',
		desc: 'Kasra, Dhammah, dan bacaan panjang (Mad)',
		available: false
	},
	{
		jilid: 4,
		title: 'Tanwin & Syaddah',
		desc: 'Harakat ganda, penekanan, dan huruf mati',
		available: false
	},
	{
		jilid: 5,
		title: 'Tajwid Dasar',
		desc: 'Hukum Nun Sukun, Mim Sukun, dan tanda waqaf',
		available: false
	},
	{
		jilid: 6,
		title: 'Tajwid Lanjutan',
		desc: "Qalqalah, Mad bertingkat, dan huruf muqatta'at",
		available: false
	}
];
