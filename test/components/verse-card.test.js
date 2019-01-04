/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/components/VerseCard.vue'

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

describe('component BaseHeader.vue', () => {
  test('success mounting components', () => {
    const wrapper = shallowMount(Component, {
      sync: false,
      store,
      router,
      localVue
    })
    expect(wrapper).toBeTruthy()
  })
})
