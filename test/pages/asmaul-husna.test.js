/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/asmaul-husna.vue'

import Theme from '~/constant/theme'

import dummyAsmaulHusna from './__mocks__/asmaul-husna'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.LIGHT,
    asmaulHusna: [dummyAsmaulHusna]
  },
  mutations: {
    setHeaderTitle () {}
  },
  actions: {
    fetchAsmaulHusna: jest.fn().mockResolvedValue([dummyAsmaulHusna])
  }
})

describe('pages asmaul-husna.vue', () => {
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
