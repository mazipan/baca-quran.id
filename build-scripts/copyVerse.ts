import path from 'path'
import appRootDir from 'app-root-dir'
import copy from 'cp-file'
import SurahConstant from './surah'

const copyFile = async (pathFile) => {
  const rootDir = appRootDir.get()
  const srcFile = path.resolve(`${rootDir}/dist/404.html`)
  const distFile = path.resolve(`${rootDir}/dist${pathFile}/index.html`)
  await copy(srcFile, distFile)
}

export default () => {
  for (let i = 1; i < 115; i++) {
    const surahObj = SurahConstant.find(item => item.index === i)
    if (surahObj) {
      for (let j = 1; j < surahObj.ayah_count + 1; j++) {
        copyFile(`/${i}/${j}`)
      }
    }
  }
  console.log('✅ Finish copied all verse')
}
