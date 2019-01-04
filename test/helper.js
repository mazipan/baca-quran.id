import { createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

export default {
  initRouter: (localVue = createLocalVue(), routes) => {
    localVue.use(VueRouter)

    const router = new VueRouter({ routes })
    return router
  }
}
