import simpleAmpify from 'simple-ampify'

export default function ampify () {
  // @ts-ignore
  this.nuxt.hook('generate:page', (page) => {
    if (/^\/amp/gi.test(page.route)) {
      console.log('>>> processing amp html: ', page.route)
      page.html = simpleAmpify(page.html)
    }
  })
}
