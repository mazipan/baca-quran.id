/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/components/VerseCard.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)

const mockActionSetLastReadVerse = jest.fn()
const mockActionShowNotification = jest.fn()
const mockActionShareViaWebShare = jest.fn()

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    setLastReadVerse: mockActionSetLastReadVerse,
    showNotification: mockActionShowNotification,
    shareViaWebshare: mockActionShareViaWebShare
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

describe('component BaseHeader.vue', () => {
  test('success mounting components', (done) => {
    const wrapper = createWrapper()
    expect(wrapper).toBeTruthy()
    done()
  })
})
