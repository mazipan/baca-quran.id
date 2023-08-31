export interface PrayerTimeResponse {
	code: number;
	status: string;
	data: PrayerTimeData[];
}

export interface PrayerTimeData {
	timings: PrayerTimings;
	date: PrayerDate;
	meta: PrayerMeta;
}

export interface PrayerTimings {
	Fajr: string;
	Sunrise: string;
	Dhuhr: string;
	Asr: string;
	Sunset: string;
	Maghrib: string;
	Isha: string;
	Imsak: string;
	Midnight: string;
	Firstthird: string;
	Lastthird: string;
}

export interface PrayerDate {
	readable: string;
	timestamp: string;
	gregorian: PrayerCal;
	hijri: PrayerCal;
}

export interface PrayerCal {
	date: string;
	format: string;
	day: string;
	weekday: PrayerCalWeekday;
	month: PrayerCalMonth;
	year: string;
	designation: PrayerDesignation;
	holidays?: any[];
}

export interface PrayerCalWeekday {
	en: string;
	ar: string;
}

export interface PrayerCalMonth {
	number: number;
	en: string;
}

export interface PrayerDesignation {
	abbreviated: string;
	expanded: string;
}

export interface PrayerMeta {
	latitude: number;
	longitude: number;
	timezone: string;
	method: PrayerMetaMethod;
}

export interface PrayerMetaMethod {
	id: number;
	name: string;
	params: PrayerMetaParams;
}

export interface PrayerMetaParams {
	shafaq: string;
}
