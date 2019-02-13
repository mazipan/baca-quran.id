/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/ayat-kursi.vue'

import MutationType from '~/store/mutation-type'
import Theme from '~/constant/theme'

import dummyAyatKursi from './__mocks__/ayat-kursi'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const mockAction = jest.fn().mockResolvedValue(dummyAyatKursi)
const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.LIGHT,
    ayatKursi: dummyAyatKursi
  },
  mutations: {
    [MutationType.SET_HEADER_TITLE] (state, data) {
      state.headerTitle = data
    },
    [MutationType.SET_THEME] (state, data) {
      state.settingActiveTheme = data
    }
  },
  actions: {
    fetchAyatKursi: mockAction
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

describe('pages ayat-kursi.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })

  test('computed for meta should fired', (done) => {
    const wrapper = createWrapper()
    // trigger change state with commit via mutations
    wrapper.vm.$store.commit(MutationType.SET_THEME, Theme.DARK)
    const title = wrapper.vm.$t('pageTitle.ayatKursi')
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

  test('method onMountedPage fired correctly', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.onMountedPage()
    expect(mockAction).toBeCalled()
    done()
  })

  test('method onSuccess', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.onSuccess()
    expect(wrapper.vm.loading).toBe(false)
    done()
  })
})
