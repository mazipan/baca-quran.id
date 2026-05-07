import config from './ayah-of-the-day-config.json';

export type AyahPick = {
	s: number;
	v: number;
};

export type Theme = {
	id: string;
	labelKey: string;
	emoji: string;
	hijriMonth: number;
	hijriDayRange?: [number, number];
	enabled?: boolean;
	pool: AyahPick[];
};

export const defaultPool: AyahPick[] = [
	{ s: 1, v: 1 },
	{ s: 1, v: 2 },
	{ s: 1, v: 5 },
	{ s: 2, v: 152 },
	{ s: 2, v: 153 },
	{ s: 2, v: 155 },
	{ s: 2, v: 156 },
	{ s: 2, v: 186 },
	{ s: 2, v: 216 },
	{ s: 2, v: 255 },
	{ s: 2, v: 286 },
	{ s: 3, v: 8 },
	{ s: 3, v: 26 },
	{ s: 3, v: 134 },
	{ s: 3, v: 139 },
	{ s: 3, v: 159 },
	{ s: 3, v: 173 },
	{ s: 3, v: 200 },
	{ s: 5, v: 32 },
	{ s: 6, v: 162 },
	{ s: 7, v: 199 },
	{ s: 9, v: 51 },
	{ s: 11, v: 6 },
	{ s: 13, v: 11 },
	{ s: 13, v: 28 },
	{ s: 14, v: 7 },
	{ s: 16, v: 97 },
	{ s: 17, v: 24 },
	{ s: 17, v: 80 },
	{ s: 18, v: 10 },
	{ s: 20, v: 114 },
	{ s: 21, v: 87 },
	{ s: 21, v: 107 },
	{ s: 25, v: 74 },
	{ s: 28, v: 24 },
	{ s: 29, v: 69 },
	{ s: 30, v: 21 },
	{ s: 33, v: 35 },
	{ s: 39, v: 53 },
	{ s: 40, v: 60 },
	{ s: 41, v: 30 },
	{ s: 49, v: 13 },
	{ s: 55, v: 13 },
	{ s: 65, v: 3 },
	{ s: 67, v: 2 },
	{ s: 89, v: 27 },
	{ s: 93, v: 5 },
	{ s: 94, v: 5 },
	{ s: 94, v: 6 },
	{ s: 103, v: 3 }
];

export const themes: Theme[] = [
	{
		id: 'ramadhan',
		labelKey: 'ayahOfTheDay.themes.ramadhan',
		emoji: '🌙',
		hijriMonth: 9,
		pool: [
			{ s: 2, v: 183 },
			{ s: 2, v: 184 },
			{ s: 2, v: 185 },
			{ s: 2, v: 186 },
			{ s: 2, v: 187 },
			{ s: 17, v: 78 },
			{ s: 25, v: 30 },
			{ s: 73, v: 20 },
			{ s: 96, v: 1 },
			{ s: 96, v: 2 },
			{ s: 96, v: 3 },
			{ s: 96, v: 4 },
			{ s: 96, v: 5 },
			{ s: 97, v: 1 },
			{ s: 97, v: 2 },
			{ s: 97, v: 3 },
			{ s: 97, v: 4 },
			{ s: 97, v: 5 }
		]
	}
];

export const forcedThemeId: string | null = config.forcedThemeId;
