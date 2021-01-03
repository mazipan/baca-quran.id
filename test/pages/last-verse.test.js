/* eslint-env jest */
import VueMeta from 'vue-meta'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import dummySurahInfo from './__mocks__/surah-info-item'
import Helpers from '~/test/helper'
import Component from '~/pages/last-verse.vue'

import { Types } from '~/store/types'
import Theme from '~/constant/theme'

const dummyComponent = {
  extends: Component,
  data () {
    return {
      allSurahList: [dummySurahInfo]
    }
  }
}

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueMeta, { keyName: 'head' })

const router = Helpers.initRouter(localVue)

const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.DARK,
    allSurahList: [dummySurahInfo],
    lastReadVerse: { surah: 1, verse: 1 },
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
    fetchAllSurah: jest.fn().mockResolvedValue([dummySurahInfo])
  }
})

const createWrapper = () => {
  return shallowMount(dummyComponent, {
    sync: false,
    store,
    router,

    localVue,
    mocks: {
      allSurahList: [dummySurahInfo]
    }
  })
}

describe('pages last-verse.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })

  test('computed for meta should fired', (done) => {
    const wrapper = createWrapper()
    // trigger change state with commit via mutations
    wrapper.vm.$store.commit(Types.SET_THEME, Theme.DARK)
    const title = 'Ayat terakhir dibaca | Baca-Quran.id'
    expect(wrapper.vm.metaHead.title).toEqual(title)
    done()
  })
})
