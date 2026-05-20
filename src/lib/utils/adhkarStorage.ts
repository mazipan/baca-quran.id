import type { AdhkarPeriod } from '../../data/adhkar';
import { CONSTANTS } from '../constants';

export type AdhkarLog = Record<string, Record<AdhkarPeriod, Record<string, number>>>;

const KEY = CONSTANTS.STORAGE_KEY.ADHKAR_LOG;

function safeParse(raw: string | null): AdhkarLog {
	if (!raw) return {};
	try {
		const parsed = JSON.parse(raw);
		if (parsed && typeof parsed === 'object') return parsed as AdhkarLog;
		return {};
	} catch {
		return {};
	}
}

export function loadAdhkarLog(): AdhkarLog {
	if (typeof localStorage === 'undefined') return {};
	return safeParse(localStorage.getItem(KEY));
}

function persist(log: AdhkarLog) {
	if (typeof localStorage === 'undefined') return;
	localStorage.setItem(KEY, JSON.stringify(log));
}

export function getCount(log: AdhkarLog, date: string, period: AdhkarPeriod, id: string): number {
	return log[date]?.[period]?.[id] ?? 0;
}

export function increment(
	log: AdhkarLog,
	date: string,
	period: AdhkarPeriod,
	id: string,
	target: number
): AdhkarLog {
	const day = log[date] ?? ({} as Record<AdhkarPeriod, Record<string, number>>);
	const slot = day[period] ?? {};
	const current = slot[id] ?? 0;
	const next = Math.min(current + 1, target);
	const updated: AdhkarLog = {
		...log,
		[date]: {
			...day,
			[period]: {
				...slot,
				[id]: next
			}
		} as Record<AdhkarPeriod, Record<string, number>>
	};
	persist(updated);
	return updated;
}

export function reset(log: AdhkarLog, date: string, period: AdhkarPeriod, id?: string): AdhkarLog {
	const day = log[date];
	if (!day) return log;
	const slot = day[period];
	if (!slot) return log;
	let nextSlot: Record<string, number>;
	if (id) {
		nextSlot = { ...slot, [id]: 0 };
	} else {
		nextSlot = {};
	}
	const updated: AdhkarLog = {
		...log,
		[date]: {
			...day,
			[period]: nextSlot
		} as Record<AdhkarPeriod, Record<string, number>>
	};
	persist(updated);
	return updated;
}

export function pruneOldDays(log: AdhkarLog, maxDays = 14): AdhkarLog {
	const keys = Object.keys(log).sort();
	if (keys.length <= maxDays) return log;
	const keep = new Set(keys.slice(-maxDays));
	const next: AdhkarLog = {};
	for (const k of keys) {
		if (keep.has(k)) next[k] = log[k];
	}
	persist(next);
	return next;
}
