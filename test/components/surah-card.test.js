/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/components/SurahCard.vue'

import MutationType from '~/store/mutation-type'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)
const store = new Vuex.Store({
  state: {
    surahFavorite: []
  },
  mutations: {
    [MutationType.SET_FAVORITE] (state, data) {
      state.surahFavorite = data
    }
  },
  actions: {
    addToFavorite: () => jest.fn(),
    removeFromFavorite: () => jest.fn(),
    showNotification: () => jest.fn()
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

describe('component SurahCard.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })
  test('getSurahDetailUrl should return correct url', () => {
    const wrapper = createWrapper()
    const res = wrapper.vm.getSurahDetailUrl(2)
    expect(res).toBe('/2')
  })
  test('goToSurahDetail should change route', () => {
    const wrapper = createWrapper()
    wrapper.vm.goToSurahDetail(2)
    expect(wrapper.vm.$route.path).toBe('/2')
  })
})
