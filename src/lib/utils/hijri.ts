/**
 * Hijri (Umm al-Qura) date helpers — pure JS, no external deps.
 *
 * Note: Umm al-Qura may differ by ±1 day from Indonesian government
 * rukyat-based dates, especially around Idul Fitri and Idul Adha.
 */

export const HIJRI_MONTHS_ID = [
	'Muharram',
	'Safar',
	"Rabi'ul Awal",
	"Rabi'ul Akhir",
	'Jumadil Awal',
	'Jumadil Akhir',
	'Rajab',
	"Sya'ban",
	'Ramadan',
	'Syawal',
	"Dzulqa'dah",
	'Dzulhijjah'
] as const;

export const HIJRI_MONTHS_EN = [
	'Muharram',
	'Safar',
	"Rabi' al-Awwal",
	"Rabi' al-Thani",
	'Jumada al-Awwal',
	'Jumada al-Thani',
	'Rajab',
	"Sha'ban",
	'Ramadan',
	'Shawwal',
	"Dhu al-Qi'dah",
	'Dhu al-Hijjah'
] as const;

export const HIJRI_MONTHS_AR = [
	'محرم',
	'صفر',
	'ربيع الأول',
	'ربيع الثاني',
	'جمادى الأولى',
	'جمادى الآخرة',
	'رجب',
	'شعبان',
	'رمضان',
	'شوال',
	'ذو القعدة',
	'ذو الحجة'
] as const;

/**
 * Returns the Hijri (Umm al-Qura) month and day for a given Gregorian date.
 * Kept for backwards compatibility with existing callers (dailyPick, etc.).
 */
export function getHijriMonthDay(d: Date): { month: number; day: number } {
	const { month, day } = getHijriDate(d);
	return { month, day };
}

/**
 * Returns the full Hijri (Umm al-Qura) year/month/day for a given Gregorian date.
 */
export function getHijriDate(d: Date): { year: number; month: number; day: number } {
	const fmt = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric'
	});
	const parts = fmt.formatToParts(d);
	const yearRaw = parts.find((p) => p.type === 'year')?.value ?? '0';
	const monthRaw = parts.find((p) => p.type === 'month')?.value ?? '0';
	const dayRaw = parts.find((p) => p.type === 'day')?.value ?? '0';
	const year = Number(yearRaw.replace(/\D/g, ''));
	const month = Number(monthRaw);
	const day = Number(dayRaw);
	return { year, month, day };
}

/**
 * Format a Gregorian Date as a localized Hijri string, e.g. "15 Ramadan 1447 H".
 */
export function formatHijriDate(d: Date, locale: 'id' | 'en'): string {
	const { year, month, day } = getHijriDate(d);
	const months = locale === 'en' ? HIJRI_MONTHS_EN : HIJRI_MONTHS_ID;
	const suffix = locale === 'en' ? 'AH' : 'H';
	return `${day} ${months[month - 1]} ${year} ${suffix}`;
}
