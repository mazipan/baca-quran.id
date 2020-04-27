/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/components/LastReadCard.vue'

import { state } from '~/store/state'
import { mutations } from '~/store/mutations'
import { actions } from '~/store/actions'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

const createWrapper = () => {
  return shallowMount(Component, {
    sync: false,
    store,
    router,

    localVue
  })
}

describe('component LastReadVerse.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })
  test('getSurahDetailUrl should return correct url', () => {
    const wrapper = createWrapper()
    const res = wrapper.vm.getSurahDetailUrl(5, 10)
    expect(res).toBe('/5#verse-10')
  })
  test('goToSurahDetail should change route', () => {
    const wrapper = createWrapper()
    wrapper.vm.goToSurahDetail(5, 10)
    expect(wrapper.vm.$route.path).toBe('/5')
  })
})
