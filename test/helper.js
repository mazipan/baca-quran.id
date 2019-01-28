import { createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import locale from '../locale/id'
import state from '../store/state'
import mutations from '../store/mutations'

export default {
  initRouter: (localVue = createLocalVue(), routes) => {
    localVue.use(VueRouter)

    const router = new VueRouter({ routes })
    return router
  },
  initI18n: (localVue = createLocalVue(), messages = { id: locale }) => {
    localVue.use(VueI18n)
    const i18n = new VueI18n({
      // You can use store for locale
      locale: 'id',
      fallbackLocale: 'id',
      messages
    })
    return i18n
  },
  createNewState: () => Object.assign({}, state),
  createNewMutations: () => Object.assign({}, mutations)
}
