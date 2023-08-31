import fs from 'node:fs';

const SURAH_INFO = 'src/data/surah-info.ts';

const data = fs.readFileSync(SURAH_INFO, { encoding: 'utf8' });
const cleanedData = data.replace('export default ', '');
const parsedData = JSON.parse(cleanedData);
const surah_info = parsedData.surah_info;

const newSurahInfo = {};

for (let index = 0; index < surah_info.length; index++) {
	const surah = surah_info[index];
	const opening = surah.opening;
	const closing = surah.closing;
	fs.writeFileSync(
		`src/data/surah-opening/${index + 1}.ts`,
		`const opening = \`${opening}\`;

const closing = \`${closing}\`;

const openingClosing = {
  opening,
  closing,
};

export default openingClosing;`,
		{ encoding: 'utf-8' }
	);

	newSurahInfo[index + 1] = {
		translation: surah.translation,
		arabic: surah.arabic,
		latin: surah.latin,
		ayah_count: surah.ayah_count,
		index: surah.index
	};
}

fs.writeFileSync(
	`src/data/surah-info-compact.ts`,
	`const surahInfo = ${JSON.stringify(newSurahInfo)};
export default surahInfo;`,
	{ encoding: 'utf-8' }
);
