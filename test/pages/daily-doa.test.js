/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/daily-doa.vue'

import Theme from '~/constant/theme'

import dummydailyDoa from './__mocks__/daily-doa'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.LIGHT,
    dailyDoa: dummydailyDoa
  },
  mutations: {
    setHeaderTitle () {}
  },
  actions: {
    fetchDailyDoa: jest.fn().mockResolvedValue(dummydailyDoa)
  }
})

describe('pages daily-doa.vue', () => {
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
