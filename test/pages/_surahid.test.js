/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/_surahid.vue'

import Theme from '~/constant/theme'

import dummySurahInfo from './__mocks__/surah-info-item'
import dummySurahDetail from './__mocks__/surah-detail'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.LIGHT,
    surahDetail: dummySurahDetail,
    allSurahList: [dummySurahInfo]
  },
  mutations: {
    setHeaderTitle () {}
  },
  actions: {
    fetchAllSurah: jest.fn().mockResolvedValue([dummySurahInfo]),
    fetchSurahById: jest.fn().mockResolvedValue(dummySurahDetail)
  }
})

describe('pages _surahid.vue', () => {
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
