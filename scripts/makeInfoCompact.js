import fs from 'node:fs';
import { globby } from 'globby';

const DATA_DIR = 'src/data/surah-info';

const allFiles = await globby(DATA_DIR, {
	expandDirectories: {
		extensions: ['ts']
	}
});

for (const filePath of allFiles) {
	const data = fs.readFileSync(filePath, { encoding: 'utf8' });
	const cleanedData = data.replace('export default ', '');
	const parsedData = JSON.parse(cleanedData);
	const current = parsedData.current;
	delete current.opening;
	delete current.closing;
	const prev = parsedData.prev || null;
	if (prev) {
		delete prev.opening;
		delete prev.closing;
	}
	const next = parsedData.next || null;
	if (next) {
		delete next.opening;
		delete next.closing;
	}

	fs.writeFileSync(
		filePath,
		`const current = ${JSON.stringify(current)};

const prev = ${JSON.stringify(prev)};

const next = ${JSON.stringify(next)};

const surahInfo = {
  current,
  prev,
  next,
};

export default surahInfo;`,
		{ encoding: 'utf-8' }
	);
}
