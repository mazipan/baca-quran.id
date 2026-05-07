/**
 * Returns the Hijri (Umm al-Qura) month and day for a given Gregorian date.
 * Uses the engine's built-in Islamic calendar — no third-party deps.
 */
export function getHijriMonthDay(d: Date): { month: number; day: number } {
	const fmt = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
		month: 'numeric',
		day: 'numeric'
	});
	const parts = fmt.formatToParts(d);
	const month = Number(parts.find((p) => p.type === 'month')?.value);
	const day = Number(parts.find((p) => p.type === 'day')?.value);
	return { month, day };
}
