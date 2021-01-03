/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/components/SurahNavigation.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)

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

    localVue,
    propsData
  })
}

describe('component SurahNavigation.vue', () => {
  test('isHavePrev should return true', () => {
    const wrapper = createWrapper({
      surahId: 2,
      verseCount: 100,
      nextSurah: {
        arabic: 'next surah dummy'
      },
      prevSurah: {
        arabic: 'prev surah dummy'
      }
    })
    expect(wrapper.vm.isHavePrev).toBe(true)
  })

  test('isHavePrev should false, isHaveNext should true', () => {
    const wrapper = createWrapper({
      surahId: 1,
      verseCount: 100,
      nextSurah: {
        arabic: 'next surah dummy'
      },
      prevSurah: null
    })
    expect(wrapper.vm.isHavePrev).toBe(false)
    expect(wrapper.vm.isHaveNext).toBe(true)
  })

  test('isHaveNext should return false, isHavePrev should true', () => {
    const wrapper = createWrapper({
      surahId: 114,
      verseCount: 100,
      nextSurah: null,
      prevSurah: {
        arabic: 'prev surah dummy'
      }
    })
    expect(wrapper.vm.isHaveNext).toBe(false)
    expect(wrapper.vm.isHavePrev).toBe(true)
  })

  test('arrayAyah should generated correctly', () => {
    const wrapper = createWrapper({
      verseCount: 5,
      surahId: 2,
      nextSurah: {
        arabic: 'next surah dummy'
      },
      prevSurah: {
        arabic: 'prev surah dummy'
      }
    })
    expect(wrapper.vm.arrayAyah).toEqual([1, 2, 3, 4, 5])
  })
})
