import type { AyahPick, Theme } from '$data/ayah-of-the-day';
import { getHijriMonthDay } from './hijri';

const FALLBACK_SEED = 1846203715;

export function hashString(s: string): number {
	let h = 0;
	for (let i = 0; i < s.length; i++) {
		h = ((h << 5) - h + s.charCodeAt(i)) | 0;
	}
	return Math.abs(h);
}

export function getActiveTheme(
	date: Date,
	themes: Theme[],
	forcedThemeId: string | null
): Theme | null {
	if (forcedThemeId) {
		const forced = themes.find((t) => t.id === forcedThemeId);
		if (forced && forced.enabled !== false) return forced;
	}
	const { month, day } = getHijriMonthDay(date);
	for (const t of themes) {
		if (t.enabled === false) continue;
		if (t.hijriMonth !== month) continue;
		if (t.hijriDayRange) {
			const [from, to] = t.hijriDayRange;
			if (day < from || day > to) continue;
		}
		return t;
	}
	return null;
}

function toLocalYYYYMMDD(d: Date): string {
	const y = d.getFullYear();
	const m = String(d.getMonth() + 1).padStart(2, '0');
	const day = String(d.getDate()).padStart(2, '0');
	return `${y}${m}${day}`;
}

function getMonthKey(d: Date): string {
	return String(d.getMonth() + 1).padStart(2, '0');
}

export function pickAyahForDate(
	date: Date,
	seeds: Record<string, number>,
	themes: Theme[],
	defaultPool: AyahPick[],
	forcedThemeId: string | null
): { pick: AyahPick; theme: Theme | null } {
	const theme = getActiveTheme(date, themes, forcedThemeId);
	const pool = theme?.pool ?? defaultPool;
	const seed = seeds[getMonthKey(date)] ?? FALLBACK_SEED;
	const index = hashString(toLocalYYYYMMDD(date) + String(seed)) % pool.length;
	return { pick: pool[index], theme };
}
