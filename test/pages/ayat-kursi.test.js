/* eslint-env jest */
import VueMeta from 'vue-meta'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import dummyAyatKursi from './__mocks__/ayat-kursi'
import Helpers from '~/test/helper'
import Component from '~/pages/ayat-kursi.vue'

import { Types } from '~/store/types'
import Theme from '~/constant/theme'

const dummyComponent = {
  extends: Component,
  data () {
    return {
      ayatKursi: dummyAyatKursi
    }
  }
}

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueMeta, { keyName: 'head' })

const router = Helpers.initRouter(localVue)

const mockAction = jest.fn().mockResolvedValue(dummyAyatKursi)
const store = new Vuex.Store({
  state: {
    settingActiveTheme: Theme.DARK,
    ayatKursi: dummyAyatKursi,
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
    fetchAyatKursi: mockAction
  }
})

const createWrapper = () => {
  return shallowMount(dummyComponent, {
    sync: false,
    store,
    router,
    localVue,
    mocks: {
      ayatKursi: dummyAyatKursi
    }
  })
}

describe('pages ayat-kursi.vue', () => {
  test('success mounting components', () => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
  })

  test('computed for meta should fired', (done) => {
    const wrapper = createWrapper()
    // trigger change state with commit via mutations
    wrapper.vm.$store.commit(Types.SET_THEME, Theme.DARK)
    const title = 'Bacaan ayat kursi beserta terjemahan | Baca-Quran.id'
    expect(wrapper.vm.metaHead.title).toEqual(title)
    done()
  })
})
