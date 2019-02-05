/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/components/SurahNavigation.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)
const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  }
})

const createWrapper = (propsData) => {
  return shallowMount(Component, {
    sync: false,
    store,
    router,
    i18n,
    localVue,
    propsData
  })
}

describe('component SurahNavigation.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })

  test('isHavePrev should return true', () => {
    const wrapper = createWrapper({
      surahId: 2
    })
    expect(wrapper.vm.isHavePrev).toBe(true)
  })

  test('isHavePrev should return false', () => {
    const wrapper = createWrapper({
      surahId: 1
    })
    expect(wrapper.vm.isHavePrev).toBe(false)
  })

  test('isHaveNext should return true', () => {
    const wrapper = createWrapper({
      surahId: 1
    })
    expect(wrapper.vm.isHaveNext).toBe(true)
  })

  test('isHaveNext should return false', () => {
    const wrapper = createWrapper({
      surahId: 114
    })
    expect(wrapper.vm.isHaveNext).toBe(false)
  })

  test('arrayAyah should generated correctly', () => {
    const wrapper = createWrapper({
      numberAyah: 5
    })
    expect(wrapper.vm.arrayAyah).toEqual([1, 2, 3, 4, 5])
  })
})
