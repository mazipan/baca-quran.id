/* eslint-disable no-unused-vars */
import copyVerse from './build-scripts/copyVerse'

export default function copyStaticHtml () {
  this.nuxt.hook('modules:done', (moduleContainer) => {
    console.log('>>>>> 1. This will be called when all modules finished loading')
  })

  this.nuxt.hook('render:before', (renderer) => {
    console.log('>>>>> 2. Called after the renderer was created')
  })

  this.nuxt.hook('build:compile', async ({ name, compiler }) => {
    console.log('>>>>> 3. Called before the compiler (default: webpack) starts')
  })

  this.nuxt.hook('generate:before', async (generator) => {
    console.log('>>>>> 4. This will be called before Nuxt generates your pages')
  })

  this.nuxt.hook('generate:done', async (generator) => {
    console.log('>>>>> 5. This will be called after Nuxt generates your pages')
    await copyVerse();
  })
}
