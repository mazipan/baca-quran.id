import fs from 'node:fs';
import { globby } from 'globby';

const DATA_DIR = 'src/data';

const allJsonFiles = await globby(DATA_DIR, {
	expandDirectories: {
		extensions: ['json']
	}
});

for (const filePath of allJsonFiles) {
	const data = fs.readFileSync(filePath, { encoding: 'utf8' });
	const targetPath = filePath.replace('.json', '.ts');
	fs.writeFileSync(targetPath, `export default ${data}`, { encoding: 'utf-8' });
}
