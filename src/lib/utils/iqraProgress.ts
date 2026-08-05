import { CONSTANTS } from '$lib/constants';

const KEY = CONSTANTS.STORAGE_KEY.IQRA_PROGRESS;

export interface IqraBookmark {
	pageIndex: number;
	updatedAt: string;
}

export interface IqraProgress {
	levels: Record<number, boolean[]>;
	completedAt: Record<number, string>;
	bookmarks: Record<number, IqraBookmark>;
}

export const LESSON_COUNT: Record<number, number> = {
	1: 31,
	2: 28,
	3: 3,
	4: 3,
	5: 3,
	6: 3
};

function empty(): IqraProgress {
	return { levels: {}, completedAt: {}, bookmarks: {} };
}

export function loadProgress(): IqraProgress {
	if (typeof localStorage === 'undefined') return empty();
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return empty();
		const parsed = JSON.parse(raw) as Partial<IqraProgress>;
		return {
			levels: parsed.levels ?? {},
			completedAt: parsed.completedAt ?? {},
			bookmarks: parsed.bookmarks ?? {}
		};
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
	const done = (p.levels[jilid] ?? []).slice(0, total).filter(Boolean).length;
	return { completed: done, total };
}

export function isLevelComplete(jilid: number): boolean {
	const p = loadProgress();
	const total = LESSON_COUNT[jilid] ?? 0;
	const lessons = (p.levels[jilid] ?? []).slice(0, total);
	return lessons.length >= total && lessons.every(Boolean);
}

export function resetJilidProgress(jilid: number): void {
	const p = loadProgress();
	delete p.levels[jilid];
	delete p.completedAt[jilid];
	delete p.bookmarks[jilid];
	save(p);
}

export function resetProgress(): void {
	if (typeof localStorage === 'undefined') return;
	localStorage.removeItem(KEY);
}

export function setBookmark(jilid: number, pageIndex: number): IqraProgress {
	const p = loadProgress();
	p.bookmarks[jilid] = { pageIndex, updatedAt: new Date().toISOString() };
	save(p);
	return p;
}

export function clearBookmark(jilid: number): IqraProgress {
	const p = loadProgress();
	delete p.bookmarks[jilid];
	save(p);
	return p;
}

export function getBookmark(jilid: number): IqraBookmark | undefined {
	return loadProgress().bookmarks[jilid];
}

export function getLatestBookmark(): {
	jilid: number;
	pageIndex: number;
	updatedAt: string;
} | null {
	const p = loadProgress();
	let latest: { jilid: number; pageIndex: number; updatedAt: string } | null = null;
	for (const [jilidStr, bookmark] of Object.entries(p.bookmarks)) {
		if (!latest || bookmark.updatedAt > latest.updatedAt) {
			latest = {
				jilid: Number(jilidStr),
				pageIndex: bookmark.pageIndex,
				updatedAt: bookmark.updatedAt
			};
		}
	}
	return latest;
}
