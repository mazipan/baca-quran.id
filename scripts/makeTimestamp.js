import fs from 'node:fs';

const TARGET_PATH = 'static/timestamp.json';

const DATENOW = new Date();
const TIMESTAMP = DATENOW.toISOString().split('T')[0];

fs.writeFileSync(
	TARGET_PATH,
	JSON.stringify(
		{
			schemaVersion: 1,
			label: 'Last Deployed',
			message: TIMESTAMP,
			color: 'brightgreen',
			cacheSeconds: 86400
		},
		null,
		2
	)
);
