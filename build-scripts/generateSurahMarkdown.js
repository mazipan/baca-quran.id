const fs = require('fs')
const path = require('path')

const main = async () => {
  try {
    let fileContent = `
|No. | Nama Surah | Bahasa Arab | Arti | Jumlah Ayat |
|--- |--- |--- |--- |--- |
`
    const content = await fs.readFileSync(path.resolve('./static/data/surah-info.json'), {
      encoding: 'utf-8'
    })
    const jsContent = JSON.parse(content)
    // eslint-disable-next-line array-callback-return
    jsContent.surah_info.map((s) => {
      fileContent += `| ${s.index} | [${s.latin}](https://www.baca-quran.id/${s.index}/) | ${s.arabic} | ${s.translation} | ${s.ayah_count} |
`
    })
    fs.writeFile(
      path.resolve('./surah-markdown.md'), fileContent,
      function (err) {
        if (err) {
          return console.log('❌ Error write file', err)
        }
        console.log('✅ Success write file')
      }
    )
  } catch (error) {
    return console.log('❌ Error read', error)
  }
}

main()
