/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/pages/daily-doa.vue'

import MutationType from '~/store/mutation-type'
import Theme from '~/constant/theme'

import dummydailyDoa from './__mocks__/daily-doa'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

const mockAction = jest.fn().mockResolvedValue(dummydailyDoa)
const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.LIGHT,
    dailyDoa: dummydailyDoa
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
    fetchDailyDoa: mockAction
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

describe('pages daily-doa.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })

  test('computed for meta should fired', (done) => {
    const wrapper = createWrapper()
    // trigger change state with commit via mutations
    wrapper.vm.$store.commit(MutationType.SET_THEME, Theme.DARK)
    const title = wrapper.vm.$t('pageTitle.dailyDoa')
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

  test('isExpanded should return true', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.expandedData = {
      title: 'dummy'
    }
    expect(wrapper.vm.isExpanded('dummy')).toBe(true)
    done()
  })

  test('isExpanded should return true', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.expandedData = {
      title: 'dummy'
    }
    expect(wrapper.vm.isExpanded('dummy-1')).toBe(false)
    done()
  })

  test('onClickDoa should change expandedData', (done) => {
    const wrapper = createWrapper()
    const itemDummy = {
      title: 'dummy'
    }
    wrapper.vm.expandedData = {
      title: ''
    }
    wrapper.vm.onClickDoa(itemDummy)
    expect(wrapper.vm.expandedData).toEqual(itemDummy)
    done()
  })

  test('onClickDoa should reset expandedData', (done) => {
    const wrapper = createWrapper()
    const itemDummy = {
      title: 'dummy'
    }
    wrapper.vm.expandedData = itemDummy
    wrapper.vm.onClickDoa(itemDummy)
    expect(wrapper.vm.expandedData).toEqual({
      title: ''
    })
    done()
  })

  test('computed filteredDailyDoa should triggered', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.searchText = 'Doa Sebelum Makan'
    expect(wrapper.vm.filteredDailyDoa).toEqual(dummydailyDoa)
    done()
  })
  test('computed filteredDailyDoa should triggered when search < 3 word', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.searchText = 'Do'
    expect(wrapper.vm.filteredDailyDoa).toEqual(dummydailyDoa)
    done()
  })
  test('computed filteredDailyDoa should triggered when search empty word', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.searchText = ''
    expect(wrapper.vm.filteredDailyDoa).toEqual(dummydailyDoa)
    done()
  })
})
