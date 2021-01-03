const fs = require('fs')
const path = require('path')

const main = async () => {
  try {
    const content = await fs.readFileSync(path.resolve('./data/surah-info.json'), {
      encoding: 'utf-8'
    })
    const jsContent = JSON.parse(content)

    for (let index = 1; index <= 114; index++) {
      const current = jsContent.surah_info.find(i => i.index === index)
      const next = jsContent.surah_info.find(i => i.index === index + 1)
      const prev = jsContent.surah_info.find(i => i.index === index - 1)
      const contentFile = JSON.stringify({
        current,
        next,
        prev
      })
      fs.writeFile(
        path.resolve(`./data/surah-info/${index}.json`), contentFile,
        function (err) {
          if (err) {
            return console.log('❌ Error write file', err)
          }
          console.log('✅ Success write file')
        }
      )
    }
  } catch (error) {
    return console.log('❌ Error read', error)
  }
}

main()
