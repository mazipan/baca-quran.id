/* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Helpers from '~/test/helper'
import Component from '~/components/VerseCard.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = Helpers.initRouter(localVue)
const i18n = Helpers.initI18n(localVue)

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
    i18n,
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

  test('onClickAudioIcon should change clickedAudioIcon', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.onClickAudioIcon({ a: 'b' })
    expect(wrapper.vm.clickedAudioIcon).toEqual({ a: 'b' })
    done()
  })

  test('getTranslation should return correct value', (done) => {
    const wrapper = createWrapper({
      translations: {
        id: {
          text: {
            '2': 'dummy'
          }
        }
      }
    })
    const res = wrapper.vm.getTranslation('2')
    expect(res).toEqual('dummy')
    done()
  })

  test('getTafsir should return correct value', (done) => {
    const wrapper = createWrapper({
      tafsir: {
        id: {
          kemenag: {
            text: {
              '2': 'dummy'
            }
          }
        }
      }
    })
    const res = wrapper.vm.getTafsir('2')
    expect(res).toEqual('dummy')
    done()
  })

  test('doSetLastReadVerse should trigger action in vuex', (done) => {
    const wrapper = createWrapper()
    wrapper.vm.doSetLastReadVerse({ a: 'b' })
    expect(mockActionSetLastReadVerse).toHaveBeenCalled()
    expect(mockActionShowNotification).toHaveBeenCalled()
    done()
  })

  test('shareVerse should trigger action in vuex', (done) => {
    const wrapper = createWrapper({
      translations: {
        id: {
          text: {
            '2': 'dummy'
          }
        }
      }
    })
    wrapper.vm.shareVerse('dummy-verse', '2')
    expect(mockActionShareViaWebShare).toHaveBeenCalled()
    done()
  })
})
