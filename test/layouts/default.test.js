/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/layouts/default.vue'

import Theme from '~/constant/theme'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const store = new Vuex.Store({
  state: {
    isShowSidebar: false,
    settingActiveTheme: Theme.LIGHT
  },
  mutations: {
    setShowSidebar () {}
  },
  actions: {
    initDataFromBrowserStorage () {},
    setWebshareSupport () {}
  }
})

describe('layouts default.vue', () => {
  test('success mounting components', () => {
    const wrapper = shallowMount(Component, {
      sync: false,
      store,
      router,
      i18n,
      localVue
    })
    expect(wrapper).toBeTruthy()
  })
})
