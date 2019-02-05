/* eslint-env jest */
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import state from '~/store/state'
import mutations from '~/store/mutations'
import MutationType from '~/store/mutation-type'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions: {}
})

describe('store mutations', () => {
  test('SET_SHOW_SIDEBAR should change state isShowSidebar', (done) => {
    store.commit(MutationType.SET_SHOW_SIDEBAR, true)
    expect(store.state.isShowSidebar).toBe(true)
    done()
  })

  test('SET_SUPPORT_WEBSHARE should change state isSupportWebShare', (done) => {
    store.commit(MutationType.SET_SUPPORT_WEBSHARE, true)
    expect(store.state.isSupportWebShare).toBe(true)
    done()
  })

  test('SET_HEADER_TITLE should change state headerTitle', (done) => {
    store.commit(MutationType.SET_HEADER_TITLE, 'dummy')
    expect(store.state.headerTitle).toBe('dummy')
    done()
  })

  test('SET_SURAH_LIST should change state allSurahList', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(MutationType.SET_SURAH_LIST, expected)
    expect(store.state.allSurahList).toEqual(expected)
    done()
  })

  test('SET_SURAH_DETAIL should change state surahDetail', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(MutationType.SET_SURAH_DETAIL, expected)
    expect(store.state.surahDetail).toEqual(expected)
    done()
  })

  test('SET_LAST_READ should change state lastReadVerse', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(MutationType.SET_LAST_READ, expected)
    expect(store.state.lastReadVerse).toEqual(expected)
    done()
  })

  test('SET_FAVORITE should change state surahFavorite', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(MutationType.SET_FAVORITE, expected)
    expect(store.state.surahFavorite).toEqual(expected)
    done()
  })

  test('SET_NOTIFICATION should change state notification', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(MutationType.SET_NOTIFICATION, expected)
    expect(store.state.notification).toEqual(expected)
    done()
  })

  test('SET_AYAT_KURSI should change state ayatKursi', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(MutationType.SET_AYAT_KURSI, expected)
    expect(store.state.ayatKursi).toEqual(expected)
    done()
  })

  test('SET_ASMAUL_HUSNA should change state asmaulHusna', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(MutationType.SET_ASMAUL_HUSNA, expected)
    expect(store.state.asmaulHusna).toEqual(expected)
    done()
  })

  test('SET_DAILY_DOA should change state dailyDoa', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(MutationType.SET_DAILY_DOA, expected)
    expect(store.state.dailyDoa).toEqual(expected)
    done()
  })

  test('SET_THEME should change state settingActiveTheme', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(MutationType.SET_THEME, expected)
    expect(store.state.settingActiveTheme).toEqual(expected)
    done()
  })

  test('SET_SETTING_TRANSLATION should change state settingShowTranslation', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(MutationType.SET_SETTING_TRANSLATION, expected)
    expect(store.state.settingShowTranslation).toEqual(expected)
    done()
  })

  test('SET_SETTING_TAFSIR should change state settingShowTafsir', (done) => {
    const expected = [{ a: 'b', c: 'd' }]
    store.commit(MutationType.SET_SETTING_TAFSIR, expected)
    expect(store.state.settingShowTafsir).toEqual(expected)
    done()
  })
})
