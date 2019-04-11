/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/asmaul-husna.vue'

import { Types } from '~/store/types'
import Theme from '~/constant/theme'

import dummyAsmaulHusna from './__mocks__/asmaul-husna'

const dummyComponent = {
  extends: Component,
  data() {
    return {
      asmaulHusna: dummyAsmaulHusna
    }
  }
}

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const mockAction = jest.fn().mockResolvedValue(dummyAsmaulHusna)
const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.LIGHT,
    asmaulHusna: dummyAsmaulHusna
  },
  mutations: {
    [Types.SET_HEADER_TITLE](state, data) {
      state.headerTitle = data
    },
    [Types.SET_THEME](state, data) {
      state.settingActiveTheme = data
    }
  },
  actions: {
    fetchAsmaulHusna: mockAction
  }
})

const createWrapper = () => {
  return shallowMount(dummyComponent, {
    sync: false,
    store,
    router,
    i18n,
    localVue,
    mocks: {
      asmaulHusna: dummyAsmaulHusna
    }
  })
}

describe('pages asmaul-husna.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })

  test('computed for meta should fired', (done) => {
    const wrapper = createWrapper()
    // trigger change state with commit via mutations
    wrapper.vm.$store.commit(Types.SET_THEME, Theme.DARK)
    const title = wrapper.vm.$t('pageTitle.asmaulHusna')
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
  test('computed filteredAsmaulHusna should triggered', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.searchText = 'Ar rahman'
    expect(wrapper.vm.filteredAsmaulHusna).toEqual(dummyAsmaulHusna)
    done()
  })
  test('computed filteredAsmaulHusna should triggered when search < 3 word', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.searchText = 'Ar'
    expect(wrapper.vm.filteredAsmaulHusna).toEqual(dummyAsmaulHusna)
    done()
  })
  test('computed filteredAsmaulHusna should triggered when search empty word', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.searchText = ''
    expect(wrapper.vm.filteredAsmaulHusna).toEqual(dummyAsmaulHusna)
    done()
  })
})
