import { createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { state } from '../store/state'
import { mutations } from '../store/mutations'

import Dummy from './Dummy.vue'

const dummyRoutes = [
  { path: '/', name: 'home', component: Dummy },
  { path: '/foo', name: 'foo', component: Dummy },
  { path: '/bar', name: 'bar', component: Dummy }
]

export default {
  initRouter: (localVue = createLocalVue(), routes = dummyRoutes) => {
    localVue.use(VueRouter)

    const router = new VueRouter({ routes })
    return router
  },
  createNewState: () => Object.assign({}, state),
  createNewMutations: () => Object.assign({}, mutations)
}
