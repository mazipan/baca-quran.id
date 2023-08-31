export const makeThreeDigit = (numberText: string) => {
	let res = '000';
	const numParam = parseInt(numberText, 10);
	if (numParam < 10) {
		res = `00${numberText}`;
	} else if (numParam >= 10 && numParam < 100) {
		res = `0${numberText}`;
	} else {
		res = `${numberText}`;
	}
	return res;
};

export type ReciterKey = '1' | '2' | '3' | '4' | '5';

export const RECITER_1 = {
	id: '1',
	name: 'Sheikh Abdurrahman As-Sudais',
	url: 'Abdurrahmaan_As-Sudais_192kbps'
};

export const RECITER_2 = {
	id: '2',
	name: 'Sheikh Mahmoud Khalil Al-Hussary',
	url: 'Husary_128kbps'
};

export const RECITER_3 = {
	id: '3',
	name: 'Sheikh Mishary Rashid Alafasy',
	url: 'Alafasy_128kbps'
};

export const RECITER_4 = {
	id: '4',
	name: 'Sheikh Nasser Al Qatami',
	url: 'Nasser_Alqatami_128kbps'
};

export const RECITER_5 = {
	id: '5',
	name: 'Sheikh Akram Al Alaqimy',
	url: 'Akram_AlAlaqimy_128kbps'
};

export const RECITER_6 = {
	id: '6',
	name: 'Abu Bakr al-Shatri',
	url: 'Abu_Bakr_Ash-Shaatree_128kbps'
};

export const RECITER_MAP = {
	'1': RECITER_1,
	'2': RECITER_2,
	'3': RECITER_3,
	'4': RECITER_4,
	'5': RECITER_5
};

export const RECITER_ARRAY = [RECITER_1, RECITER_2, RECITER_3, RECITER_4, RECITER_5];
/**
 * Return a string of Audio URL from every ayah
 *
 * Sample Full Audio URL from Every Ayah
 * - https://everyayah.com/data/Abdurrahmaan_As-Sudais_192kbps/001001.mp3
 * - https://everyayah.com/data/Husary_128kbps/001001.mp3
 * - https://everyayah.com/data/Alafasy_128kbps/001001.mp3
 */
export const getAudioFromEveryAyah = (reciterId: string, surahId: string, verseId: string) => {
	const surahThreeDigit = makeThreeDigit(surahId);
	const verseThreeDigit = makeThreeDigit(verseId);
	const BASE_URL = 'https://everyayah.com/data/';
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const reciter = RECITER_MAP[reciterId] || RECITER_MAP[1];

	return `${BASE_URL}/${reciter.url}/${surahThreeDigit}${verseThreeDigit}.mp3`;
};

export function formatAudioTime(time: number) {
	const min = Math.floor(time / 60);
	const sec = Math.floor(time % 60);
	return min + ':' + (sec < 10 ? '0' + sec : sec);
}
