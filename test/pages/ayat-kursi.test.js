/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/ayat-kursi.vue'

import Theme from '~/constant/theme'

import dummyAyatKursi from './__mocks__/ayat-kursi'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.LIGHT,
    ayatKursi: dummyAyatKursi
  },
  mutations: {
    setHeaderTitle () {}
  },
  actions: {
    fetchAyatKursi: jest.fn().mockResolvedValue(dummyAyatKursi)
  }
})

describe('pages ayat-kursi.vue', () => {
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
