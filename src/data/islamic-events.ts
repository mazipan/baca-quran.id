export interface IslamicEvent {
	id: string;
	hijriMonth: number;
	hijriDay: number;
	nameId: string;
	nameEn: string;
	type: 'holiday' | 'fasting' | 'observance';
}

export const ISLAMIC_EVENTS: readonly IslamicEvent[] = [
	{
		id: 'tahun-baru-hijriyah',
		hijriMonth: 1,
		hijriDay: 1,
		nameId: 'Tahun Baru Hijriyah',
		nameEn: 'Islamic New Year',
		type: 'holiday'
	},
	{
		id: 'asyura',
		hijriMonth: 1,
		hijriDay: 10,
		nameId: 'Hari Asyura',
		nameEn: 'Day of Ashura',
		type: 'fasting'
	},
	{
		id: 'maulid-nabi',
		hijriMonth: 3,
		hijriDay: 12,
		nameId: 'Maulid Nabi Muhammad',
		nameEn: 'Mawlid an-Nabi',
		type: 'observance'
	},
	{
		id: 'isra-miraj',
		hijriMonth: 7,
		hijriDay: 27,
		nameId: "Isra' Mi'raj",
		nameEn: "Isra' and Mi'raj",
		type: 'observance'
	},
	{
		id: 'nisfu-syaban',
		hijriMonth: 8,
		hijriDay: 15,
		nameId: "Nisfu Sya'ban",
		nameEn: "Mid-Sha'ban",
		type: 'observance'
	},
	{
		id: 'awal-ramadan',
		hijriMonth: 9,
		hijriDay: 1,
		nameId: 'Awal Ramadan',
		nameEn: 'Start of Ramadan',
		type: 'fasting'
	},
	{
		id: 'nuzulul-quran',
		hijriMonth: 9,
		hijriDay: 17,
		nameId: "Nuzulul Qur'an",
		nameEn: "Nuzul al-Qur'an",
		type: 'observance'
	},
	{
		id: 'idul-fitri',
		hijriMonth: 10,
		hijriDay: 1,
		nameId: 'Idul Fitri',
		nameEn: 'Eid al-Fitr',
		type: 'holiday'
	},
	{
		id: 'tarwiyah',
		hijriMonth: 12,
		hijriDay: 8,
		nameId: 'Hari Tarwiyah',
		nameEn: 'Day of Tarwiyah',
		type: 'fasting'
	},
	{
		id: 'arafah',
		hijriMonth: 12,
		hijriDay: 9,
		nameId: 'Hari Arafah',
		nameEn: 'Day of Arafah',
		type: 'fasting'
	},
	{
		id: 'idul-adha',
		hijriMonth: 12,
		hijriDay: 10,
		nameId: 'Idul Adha',
		nameEn: 'Eid al-Adha',
		type: 'holiday'
	},
	{
		id: 'tasyrik-1',
		hijriMonth: 12,
		hijriDay: 11,
		nameId: 'Hari Tasyrik',
		nameEn: 'Days of Tashriq',
		type: 'observance'
	},
	{
		id: 'tasyrik-2',
		hijriMonth: 12,
		hijriDay: 12,
		nameId: 'Hari Tasyrik',
		nameEn: 'Days of Tashriq',
		type: 'observance'
	},
	{
		id: 'tasyrik-3',
		hijriMonth: 12,
		hijriDay: 13,
		nameId: 'Hari Tasyrik',
		nameEn: 'Days of Tashriq',
		type: 'observance'
	}
];

// Note: lookup is by Umm al-Qura calendar — official Indonesian holiday dates
// (Kemenag rukyat) may shift ±1 day, especially for Idul Fitri / Idul Adha.
export function getEventsForHijriDate(month: number, day: number): IslamicEvent[] {
	return ISLAMIC_EVENTS.filter((e) => e.hijriMonth === month && e.hijriDay === day);
}
