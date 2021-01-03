/* eslint-env jest */
import VueMeta from 'vue-meta'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/settings.vue'

import { Types } from '~/store/types'
import Theme from '~/constant/theme'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueMeta, { keyName: 'head' })

const router = Helpers.initRouter(localVue)

const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.DARK,
    settingShowTranslation: false,
    settingShowTafsir: false,
    page: ''
  },
  mutations: {
    [Types.SET_HEADER_TITLE] (state, data) {
      state.headerTitle = data
    },
    [Types.SET_THEME] (state, data) {
      state.settingActiveTheme = data
    },
    [Types.SET_SETTING_TRANSLATION] (state, data) {
      state.settingShowTranslation = data
    },
    [Types.SET_SETTING_TAFSIR] (state, data) {
      state.settingShowTafsir = data
    },
    [Types.SET_PAGE] (state, data) {
      state.page = data
    }
  },
  actions: {
    setActiveTheme ({ commit }, theme) {
      commit(Types.SET_THEME, theme)
    },
    setSettingTranslation ({ commit }, payload) {
      commit(Types.SET_SETTING_TRANSLATION, payload)
    },
    setSettingTafsir ({ commit }, payload) {
      commit(Types.SET_SETTING_TAFSIR, payload)
    }
  }
})

const createWrapper = () => {
  return shallowMount(Component, {
    sync: false,
    store,
    router,

    localVue
  })
}

describe('pages settings.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })

  test('computed for meta should fired', (done) => {
    const wrapper = createWrapper()
    // trigger change state with commit via mutations
    wrapper.vm.$store.commit(Types.SET_THEME, Theme.DARK)
    const title = 'Halaman setelan | Baca-Quran.id'
    expect(wrapper.vm.metaHead.title).toEqual(title)
    done()
  })

  test('method onSelectTheme fired correctly', (done) => {
    const mockSetTheme = jest.fn()
    window.__setPreferredTheme = mockSetTheme
    const wrapper = createWrapper()
    wrapper.vm.onSelectTheme(Theme.DARK)
    expect(wrapper.vm.$store.state.settingActiveTheme).toEqual(Theme.DARK)
    expect(mockSetTheme).toBeCalled()
    done()
  })

  test.skip('method onChangeSettingTranslation fired correctly', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.onChangeSettingTranslation(true)
    expect(wrapper.vm.$store.state.settingShowTranslation).toBe(true)
    done()
  })

  test.skip('method onChangeSettingTafsir fired correctly', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.onChangeSettingTafsir(true)
    expect(wrapper.vm.$store.state.settingShowTafsir).toBe(true)
    done()
  })
})
