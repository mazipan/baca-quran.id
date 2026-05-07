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

const MS_PER_DAY = 86_400_000;
// 1 Muharram 1 AH ≈ 16 July 622 CE (Julian) → ~19 July 622 CE Gregorian.
// Used only as a starting estimate for the bisection.
const HIJRI_EPOCH_MS = Date.UTC(622, 6, 19);
// Mean Hijri year length, used only for the initial estimate.
const MEAN_HIJRI_YEAR_DAYS = 354.367;

/**
 * Normalize a Hijri (year, month) pair after applying ±delta months.
 * Months are in 1–12 range.
 */
export function shiftHijriMonth(
	year: number,
	month: number,
	delta: number
): { year: number; month: number } {
	const total = year * 12 + (month - 1) + delta;
	const y = Math.floor(total / 12);
	const m = total - y * 12 + 1;
	return { year: y, month: m };
}

/**
 * Find the Gregorian Date corresponding to a given Hijri (Umm al-Qura) Y/M/D.
 * Bisection over Gregorian dates using getHijriDate(); ~25 Intl calls.
 */
export function hijriToGregorian(year: number, month: number, day: number): Date {
	const cmp = (h: { year: number; month: number; day: number }): number => {
		if (h.year !== year) return h.year - year;
		if (h.month !== month) return h.month - month;
		return h.day - day;
	};
	const estDays = Math.round((year - 1) * MEAN_HIJRI_YEAR_DAYS + (month - 1) * 29.5 + (day - 1));
	const estimateMs = HIJRI_EPOCH_MS + estDays * MS_PER_DAY;
	let lo = estimateMs - 365 * MS_PER_DAY;
	let hi = estimateMs + 365 * MS_PER_DAY;
	while (cmp(getHijriDate(new Date(lo))) > 0) lo -= 365 * MS_PER_DAY;
	while (cmp(getHijriDate(new Date(hi))) < 0) hi += 365 * MS_PER_DAY;
	while (lo <= hi) {
		const midDays = Math.floor((lo + hi) / (2 * MS_PER_DAY));
		const mid = midDays * MS_PER_DAY;
		const c = cmp(getHijriDate(new Date(mid)));
		if (c === 0) return new Date(mid);
		if (c < 0) lo = mid + MS_PER_DAY;
		else hi = mid - MS_PER_DAY;
	}
	return new Date(lo);
}

/**
 * Number of days in a given Hijri month (Umm al-Qura): 29 or 30.
 */
export function getDaysInHijriMonth(year: number, month: number): number {
	const next = shiftHijriMonth(year, month, 1);
	const a = hijriToGregorian(year, month, 1);
	const b = hijriToGregorian(next.year, next.month, 1);
	return Math.round((b.getTime() - a.getTime()) / MS_PER_DAY);
}
