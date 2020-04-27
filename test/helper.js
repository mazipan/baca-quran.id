import { createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { state } from '../store/state'
import { mutations } from '../store/mutations'

export default {
  initRouter: (localVue = createLocalVue(), routes) => {
    localVue.use(VueRouter)

    const router = new VueRouter({ routes })
    return router
  },
  createNewState: () => Object.assign({}, state),
  createNewMutations: () => Object.assign({}, mutations)
}
