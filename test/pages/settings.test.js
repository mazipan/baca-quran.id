/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/settings.vue'

import Theme from '~/constant/theme'
import MutationType from '~/store/mutation-type'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.LIGHT,
    settingShowTranslation: false,
    settingShowTafsir: false
  },
  mutations: {
    [MutationType.SET_HEADER_TITLE] (state, data) {
      state.headerTitle = data
    },
    [MutationType.SET_THEME] (state, data) {
      state.settingActiveTheme = data
    },
    [MutationType.SET_SETTING_TRANSLATION]  (state, data) {
      state.settingShowTranslation = data
    },
    [MutationType.SET_SETTING_TAFSIR]  (state, data) {
      state.settingShowTafsir = data
    }
  },
  actions: {
    setActiveTheme ({ commit }, theme) {
      commit(MutationType.SET_THEME, theme)
    },
    setSettingTranslation ({ commit }, payload) {
      commit(MutationType.SET_SETTING_TRANSLATION, payload)
    },
    setSettingTafsir ({ commit }, payload) {
      commit(MutationType.SET_SETTING_TAFSIR, payload)
    }
  }
})

describe('pages settings.vue', () => {
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
