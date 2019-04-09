/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/components/BaseToast.vue'

import { Types } from '~/store/types'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)
const store = new Vuex.Store({
  state: {
    notification: {
      show: false,
      title: '',
      message: ''
    }
  },
  mutations: {
    [Types.SET_NOTIFICATION](state, data) {
      state.notification = data
    }
  },
  actions: {
  }
})

const createWrapper = () => {
  return shallowMount(Component, {
    sync: false,
    store,
    router,
    i18n,
    localVue
  })
}

describe('component BaseToast.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })
  test('visibleNotification should reflect to state', () => {
    const wrapper = createWrapper()
    wrapper.vm.$store.commit(Types.SET_NOTIFICATION, { show: false })
    expect(wrapper.vm.visibleNotification).toBe(false)

    wrapper.vm.$store.commit(Types.SET_NOTIFICATION, { show: true })
    expect(wrapper.vm.visibleNotification).toBe(true)
  })
})
