export interface HijaiyahLetter {
	id: number;
	arabic: string;
	withFathah: string;
	name: string;
	bunyi: string;
}

export const HIJAIYAH_LETTERS: HijaiyahLetter[] = [
	{ id: 1, arabic: 'ا', withFathah: 'اَ', name: 'Alif', bunyi: 'a' },
	{ id: 2, arabic: 'ب', withFathah: 'بَ', name: 'Ba', bunyi: 'ba' },
	{ id: 3, arabic: 'ت', withFathah: 'تَ', name: 'Ta', bunyi: 'ta' },
	{ id: 4, arabic: 'ث', withFathah: 'ثَ', name: 'Tsa', bunyi: 'tsa' },
	{ id: 5, arabic: 'ج', withFathah: 'جَ', name: 'Jim', bunyi: 'ja' },
	{ id: 6, arabic: 'ح', withFathah: 'حَ', name: 'Ha', bunyi: 'ha' },
	{ id: 7, arabic: 'خ', withFathah: 'خَ', name: 'Kha', bunyi: 'kha' },
	{ id: 8, arabic: 'د', withFathah: 'دَ', name: 'Dal', bunyi: 'da' },
	{ id: 9, arabic: 'ذ', withFathah: 'ذَ', name: 'Dzal', bunyi: 'dza' },
	{ id: 10, arabic: 'ر', withFathah: 'رَ', name: 'Ra', bunyi: 'ra' },
	{ id: 11, arabic: 'ز', withFathah: 'زَ', name: 'Zai', bunyi: 'za' },
	{ id: 12, arabic: 'س', withFathah: 'سَ', name: 'Sin', bunyi: 'sa' },
	{ id: 13, arabic: 'ش', withFathah: 'شَ', name: 'Syin', bunyi: 'sya' },
	{ id: 14, arabic: 'ص', withFathah: 'صَ', name: 'Shad', bunyi: 'sha' },
	{ id: 15, arabic: 'ض', withFathah: 'ضَ', name: 'Dhad', bunyi: 'dha' },
	{ id: 16, arabic: 'ط', withFathah: 'طَ', name: 'Tha', bunyi: 'tha' },
	{ id: 17, arabic: 'ظ', withFathah: 'ظَ', name: 'Zha', bunyi: 'zha' },
	{ id: 18, arabic: 'ع', withFathah: 'عَ', name: 'Ain', bunyi: "'a" },
	{ id: 19, arabic: 'غ', withFathah: 'غَ', name: 'Ghain', bunyi: 'gha' },
	{ id: 20, arabic: 'ف', withFathah: 'فَ', name: 'Fa', bunyi: 'fa' },
	{ id: 21, arabic: 'ق', withFathah: 'قَ', name: 'Qaf', bunyi: 'qa' },
	{ id: 22, arabic: 'ك', withFathah: 'كَ', name: 'Kaf', bunyi: 'ka' },
	{ id: 23, arabic: 'ل', withFathah: 'لَ', name: 'Lam', bunyi: 'la' },
	{ id: 24, arabic: 'م', withFathah: 'مَ', name: 'Mim', bunyi: 'ma' },
	{ id: 25, arabic: 'ن', withFathah: 'نَ', name: 'Nun', bunyi: 'na' },
	{ id: 26, arabic: 'و', withFathah: 'وَ', name: 'Waw', bunyi: 'wa' },
	{ id: 27, arabic: 'ه', withFathah: 'هَ', name: 'Ha', bunyi: 'ha' },
	{ id: 28, arabic: 'ي', withFathah: 'يَ', name: 'Ya', bunyi: 'ya' }
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
