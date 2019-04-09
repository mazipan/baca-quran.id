/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/settings.vue'

import { Types } from '~/store/types'
import Theme from '~/constant/theme'

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
    [Types.SET_HEADER_TITLE](state, data) {
      state.headerTitle = data
    },
    [Types.SET_THEME](state, data) {
      state.settingActiveTheme = data
    },
    [Types.SET_SETTING_TRANSLATION](state, data) {
      state.settingShowTranslation = data
    },
    [Types.SET_SETTING_TAFSIR](state, data) {
      state.settingShowTafsir = data
    }
  },
  actions: {
    setActiveTheme({ commit }, theme) {
      commit(Types.SET_THEME, theme)
    },
    setSettingTranslation({ commit }, payload) {
      commit(Types.SET_SETTING_TRANSLATION, payload)
    },
    setSettingTafsir({ commit }, payload) {
      commit(Types.SET_SETTING_TAFSIR, payload)
    }
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

describe('pages settings.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })

  test('computed for meta should fired', (done) => {
    const wrapper = createWrapper()
    // trigger change state with commit via mutations
    wrapper.vm.$store.commit(Types.SET_THEME, Theme.DARK)
    const title = wrapper.vm.$t('pageTitle.setting')
    const expected = {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'theme-color', name: 'theme-color', content: '#333' }
      ]
    }
    expect(wrapper.vm.metaHead).toEqual(expected)
    done()
  })

  test('method setDefaultSetting fired correctly', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.setDefaultSetting()
    expect(wrapper.vm.modelSettingTranslation).toBe(false)
    expect(wrapper.vm.modelSettingTafsir).toBe(false)
    done()
  })

  test('method onSelectTheme fired correctly', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.onSelectTheme(Theme.DARK)
    expect(wrapper.vm.$store.state.settingActiveTheme).toEqual(Theme.DARK)
    done()
  })

  test('method onChangeSettingTranslation fired correctly', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.onChangeSettingTranslation(true)
    expect(wrapper.vm.$store.state.settingShowTranslation).toBe(true)
    done()
  })

  test('method onChangeSettingTafsir fired correctly', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.onChangeSettingTafsir(true)
    expect(wrapper.vm.$store.state.settingShowTafsir).toBe(true)
    done()
  })
})
