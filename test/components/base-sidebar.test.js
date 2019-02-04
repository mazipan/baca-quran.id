/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/components/BaseSidebar.vue'

import MutationType from '~/store/mutation-type'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)
const store = new Vuex.Store({
  state: {
    isShowSidebar: false
  },
  mutations: {
    [MutationType.SET_SHOW_SIDEBAR] (state, data) {
      state.isShowSidebar = data
    }
  },
  actions: {
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

describe('component BaseSidebar.vue', () => {
  test('success mounting components', (done) => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
    done()
  })

  test('navigateTo should change state  isShowSidebar', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.$store.commit(MutationType.SET_SHOW_SIDEBAR, true)
    expect(wrapper.vm.$store.state.isShowSidebar).toBe(true)
    wrapper.vm.navigateTo({
      preventDefault: () => {}
    })
    expect(wrapper.vm.$store.state.isShowSidebar).toBe(false)
    done()
  })

  test('hideSidebar should change state  isShowSidebar', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.$store.commit(MutationType.SET_SHOW_SIDEBAR, true)
    expect(wrapper.vm.$store.state.isShowSidebar).toBe(true)
    wrapper.vm.hideSidebar()
    expect(wrapper.vm.$store.state.isShowSidebar).toBe(false)
    done()
  })
})
