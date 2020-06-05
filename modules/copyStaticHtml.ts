/* eslint-disable no-unused-vars */
// import copyVerse from '~/build-scripts/copyVerse'

export default function copyStaticHtml () {
  // @ts-ignore
  this.nuxt.hook('generate:done', () => {
    console.log('>>>>> Running modules copyStaticHtml')
    // await copyVerse()
  })
}
