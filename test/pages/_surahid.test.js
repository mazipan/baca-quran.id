/* eslint-env jest */
import VueMeta from 'vue-meta'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import dummySurahInfo from './__mocks__/surah-info-item'
import dummySurahDetail from './__mocks__/surah-detail'
import Component from '~/pages/_surahid/index.vue'

import { Types } from '~/store/types'
import Theme from '~/constant/theme'

const dummyComponent = {
  extends: Component,
  data () {
    return {
      allSurahList: [dummySurahInfo],
      surahDetail: dummySurahDetail
    }
  }
}

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueMeta, { keyName: 'head' })

const createStore = (dummyAllsurahList) => {
  let surahList = [dummySurahInfo]
  if (dummyAllsurahList) { surahList = dummyAllsurahList }
  return new Vuex.Store({
    state: {
      settingActiveTheme: Theme.DARK,
      surahDetail: dummySurahDetail,
      allSurahList: surahList,
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
      fetchAllSurah: jest.fn().mockResolvedValue([dummySurahInfo]),
      fetchSurahById: jest.fn().mockResolvedValue(dummySurahDetail)
    }
  })
}

const createWrapper = ($mockRoute, dummyAllsurahList) => {
  let $route = {
    path: '/',
    params: {
      surahid: 2
    }
  }

  if ($mockRoute) {
    $route = $mockRoute
  }

  return shallowMount(dummyComponent, {
    sync: false,
    store: createStore(dummyAllsurahList),
    localVue,
    mocks: {
      $route,
      metaTitle: 'Mock Title',
      allSurahList: [dummySurahInfo],
      currentSurah: dummySurahDetail
    }
  })
}

describe('pages _surahid.vue', () => {
  test('success mounting components', (done) => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
    expect(wrapper.vm.$route.params.surahid).toEqual(2)
    done()
  })

  test.skip('computed for meta should fired', (done) => {
    const wrapper = createWrapper()
    // trigger change state with commit via mutations
    wrapper.vm.$store.commit(Types.SET_THEME, Theme.DARK)
    expect(wrapper.vm.metaHead.title).toEqual('Mock Title')
    done()
  })

  test.skip('computed isValidSurah should return true', (done) => {
    const wrapper = createWrapper()
    expect(wrapper.vm.isValidSurah).toBe(true)
    done()
  })

  test.skip('computed isValidSurah should return false because too less', (done) => {
    const wrapper = createWrapper({
      path: '/',
      params: {
        surahid: 0
      }
    })
    expect(wrapper.vm.isValidSurah).toBe(false)
    done()
  })

  test.skip('computed isValidSurah should return false because bigger', (done) => {
    const wrapper = createWrapper({
      path: '/',
      params: {
        surahid: 145
      }
    })
    expect(wrapper.vm.isValidSurah).toBe(false)
    done()
  })

  test.skip('computed prevSurah should not return null', (done) => {
    const wrapper = createWrapper(null, [])
    expect(wrapper.vm.prevSurah).not.toBeNull()
    done()
  })

  test.skip('computed nextSurah should return undefined', (done) => {
    const wrapper = createWrapper(null, [])
    expect(wrapper.vm.nextSurah).toBeUndefined()
    done()
  })
})
