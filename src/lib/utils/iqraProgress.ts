import { CONSTANTS } from '$lib/constants';

const KEY = CONSTANTS.STORAGE_KEY.IQRA_PROGRESS;

export interface IqraProgress {
	levels: Record<number, boolean[]>;
	completedAt: Record<number, string>;
}

export const LESSON_COUNT: Record<number, number> = {
	1: 28,
	2: 28,
	3: 3,
	4: 3,
	5: 3,
	6: 3
};

function empty(): IqraProgress {
	return { levels: {}, completedAt: {} };
}

export function loadProgress(): IqraProgress {
	if (typeof localStorage === 'undefined') return empty();
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return empty();
		return JSON.parse(raw) as IqraProgress;
	} catch {
		return empty();
	}
}

function save(p: IqraProgress): void {
	if (typeof localStorage === 'undefined') return;
	localStorage.setItem(KEY, JSON.stringify(p));
}

export function markLessonDone(jilid: number, lessonIndex: number): IqraProgress {
	const p = loadProgress();
	const total = LESSON_COUNT[jilid] ?? 0;
	if (!p.levels[jilid]) p.levels[jilid] = new Array(total).fill(false);
	p.levels[jilid][lessonIndex] = true;
	if (p.levels[jilid].every(Boolean) && !p.completedAt[jilid]) {
		p.completedAt[jilid] = new Date().toISOString();
	}
	save(p);
	return p;
}

export function getLevelStats(jilid: number): { completed: number; total: number } {
	const p = loadProgress();
	const total = LESSON_COUNT[jilid] ?? 0;
	const done = (p.levels[jilid] ?? []).filter(Boolean).length;
	return { completed: done, total };
}

export function isLevelComplete(jilid: number): boolean {
	const p = loadProgress();
	const lessons = p.levels[jilid];
	return !!lessons && lessons.length >= (LESSON_COUNT[jilid] ?? 0) && lessons.every(Boolean);
}

export function resetProgress(): void {
	if (typeof localStorage === 'undefined') return;
	localStorage.removeItem(KEY);
}
