/* eslint-env jest */
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { state } from '~/store/state'
import { mutations } from '~/store/mutations'
import { Types } from '~/store/types'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions: {}
})

describe('store mutations', () => {
  test('SET_SHOW_SIDEBAR should change state isShowSidebar', (done) => {
    store.commit(Types.SET_SHOW_SIDEBAR, true)
    expect(store.state.isShowSidebar).toBe(true)
    done()
  })

  test('SET_SUPPORT_WEBSHARE should change state isSupportWebShare', (done) => {
    store.commit(Types.SET_SUPPORT_WEBSHARE, true)
    expect(store.state.isSupportWebShare).toBe(true)
    done()
  })

  test('SET_HEADER_TITLE should change state headerTitle', (done) => {
    store.commit(Types.SET_HEADER_TITLE, 'dummy')
    expect(store.state.headerTitle).toBe('dummy')
    done()
  })

  test('SET_LAST_READ should change state lastReadVerse', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(Types.SET_LAST_READ, expected)
    expect(store.state.lastReadVerse).toEqual(expected)
    done()
  })

  test('SET_FAVORITE should change state surahFavorite', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(Types.SET_FAVORITE, expected)
    expect(store.state.surahFavorite).toEqual(expected)
    done()
  })

  test('SET_NOTIFICATION should change state notification', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(Types.SET_NOTIFICATION, expected)
    expect(store.state.notification).toEqual(expected)
    done()
  })

  test('SET_THEME should change state settingActiveTheme', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(Types.SET_THEME, expected)
    expect(store.state.settingActiveTheme).toEqual(expected)
    done()
  })

  test('SET_SETTING_TRANSLATION should change state settingShowTranslation', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(Types.SET_SETTING_TRANSLATION, expected)
    expect(store.state.settingShowTranslation).toEqual(expected)
    done()
  })

  test('SET_SETTING_TAFSIR should change state settingShowTafsir', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(Types.SET_SETTING_TAFSIR, expected)
    expect(store.state.settingShowTafsir).toEqual(expected)
    done()
  })
})
