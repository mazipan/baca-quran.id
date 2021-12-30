import path from 'path'
import fs from 'fs'
import appRootDir from 'app-root-dir'

const rootDir = appRootDir.get()
const TARGET_PATH = path.resolve(rootDir, 'static/timestamp.json')

const DATENOW = new Date()
const TIMESTAMP = DATENOW.toISOString().split('T')[0]

function doGenerate () {
  fs.writeFileSync(TARGET_PATH, JSON.stringify({
    schemaVersion: 1,
    label: 'Last Deployed',
    message: TIMESTAMP,
    color: 'brightgreen',
    cacheSeconds: 86400
  }))
}

export default doGenerate
