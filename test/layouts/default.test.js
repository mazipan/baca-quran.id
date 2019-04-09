/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/layouts/default.vue'

import Theme from '~/constant/theme'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const mockMutations = jest.fn()
const store = new Vuex.Store({
  state: {
    isShowSidebar: false,
    settingActiveTheme: Theme.LIGHT
  },
  mutations: {
    setShowSidebar: mockMutations
  },
  actions: {
    initDataFromBrowserStorage() {},
    setWebshareSupport() {}
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

describe('layouts default.vue', () => {
  test('success mounting components', (done) => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
    done()
  })

  test('hideSidebar should trigger mutations', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.hideSidebar()
    expect(mockMutations).toHaveBeenCalled()
    done()
  })

  test('handleScroll should return false', (done) => {
    global.pageYOffset = 100
    const wrapper = createWrapper()
    wrapper.vm.handleScroll()
    expect(wrapper.vm.showArrowToTop).toBe(false)
    done()
  })

  test('handleScroll should return true', (done) => {
    global.pageYOffset = 2001
    const wrapper = createWrapper()
    wrapper.vm.handleScroll()
    expect(wrapper.vm.showArrowToTop).toBe(true)
    done()
  })

  test('destroy component should success', (done) => {
    const wrapper = createWrapper()
    wrapper.destroy()
    done()
  })
})
