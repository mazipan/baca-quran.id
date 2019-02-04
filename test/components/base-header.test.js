/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/components/BaseHeader.vue'

import { AppConstant } from '~/constant/index'
import MutationType from '~/store/mutation-type'

import DummyComponent from '../Dummy.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue, [{
  path: '/',
  component: DummyComponent
}, {
  path: '/home',
  component: DummyComponent
}, {
  path: '/abc',
  component: DummyComponent
}])

const i18n = Helpers.initI18n(localVue)
const store = new Vuex.Store({
  state: {
    isShowSidebar: false,
    headerTitle: AppConstant.TITLE
  },
  mutations: {
    [MutationType.SET_HEADER_TITLE] (state, data) {
      state.headerTitle = data
    },
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

describe('component BaseHeader.vue', () => {
  test('success mounting components', (done) => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
    done()
  })
  test('isHomepage should return correct value', (done) => {
    const wrapper = createWrapper()
    expect(wrapper.vm.isHomePage).toBe(true)
    wrapper.vm.$store.commit(MutationType.SET_HEADER_TITLE, 'dummy-title')
    expect(wrapper.vm.isHomePage).toBe(false)
    done()
  })
  test('navigateTo should change route', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.navigateTo('/home')
    expect(wrapper.vm.$route.path).toBe('/home')
    done()
  })
  test('toggleMenuRight should change isShowMenu', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.isShowMenu = false
    wrapper.vm.toggleMenuRight()
    expect(wrapper.vm.isShowMenu).toBe(true)
    done()
  })
  test('toggleSidebar should change isShowMenu', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.$store.commit(MutationType.SET_SHOW_SIDEBAR, false)
    wrapper.vm.toggleSidebar()
    expect(wrapper.vm.$store.state.isShowSidebar).toBe(true)
    done()
  })
  test.skip('backToPreviousPage should change router', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.$router.push('/')
    wrapper.vm.$router.push('/home')
    wrapper.vm.$router.push('/abc')
    expect(wrapper.vm.$route.path).toBe('/abc')

    wrapper.vm.backToPreviousPage()
    process.nextTick(() => {
      expect(wrapper.vm.$route.path).toBe('/abc')
      done()
    })
  })
})
