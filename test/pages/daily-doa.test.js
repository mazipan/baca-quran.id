/* eslint-env jest */
import VueMeta from 'vue-meta'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import dummydailyDoa from './__mocks__/daily-doa'
import Helpers from '~/test/helper'
import Component from '~/pages/daily-doa.vue'

import { Types } from '~/store/types'
import Theme from '~/constant/theme'

const dummyComponent = {
  extends: Component,
  data () {
    return {
      dailyDoa: dummydailyDoa
    }
  }
}

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueMeta, { keyName: 'head' })

const router = Helpers.initRouter(localVue)

const mockAction = jest.fn().mockResolvedValue(dummydailyDoa)
const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.DARK,
    dailyDoa: dummydailyDoa,
    page: ''
  },
  mutations: {
    [Types.SET_HEADER_TITLE] (state, data) {
      state.headerTitle = data
    },
    [Types.SET_THEME] (state, data) {
      state.settingActiveTheme = data
    },
    [Types.SET_PAGE] (state, data) {
      state.page = data
    }
  },
  actions: {
    fetchDailyDoa: mockAction
  }
})

const createWrapper = () => {
  return shallowMount(dummyComponent, {
    sync: false,
    store,
    router,

    localVue,
    mocks: {
      dailyDoa: dummydailyDoa
    }
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
    wrapper.vm.$store.commit(Types.SET_THEME, Theme.DARK)
    const title = "Daftar lengkap do'a harian beserta terjemahan | Baca-Quran.id"
    expect(wrapper.vm.metaHead.title).toEqual(title)
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
