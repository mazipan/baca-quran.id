import fs from 'node:fs';
import { globby } from 'globby';

const DATA_DIR = 'src/data';

const allJsonFiles = await globby(DATA_DIR, {
	expandDirectories: {
		extensions: ['json']
	}
});

for (const filePath of allJsonFiles) {
	fs.unlinkSync(filePath);
}
