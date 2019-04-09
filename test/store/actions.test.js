/* eslint-env jest */
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { state } from '~/store/state'
import { mutations } from '~/store/mutations'
import { actions } from '~/store/actions'
import Theme from '~/constant/theme'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: state(),
  mutations,
  actions
})

jest.mock('~/services/index', () => ({
  getAllSurah: jest.fn(),
  getSurahById: jest.fn(),
  getAyatKursi: jest.fn(),
  getAsmaulHusna: jest.fn(),
  getDailyDoa: jest.fn()
}))

describe('store actions', () => {
  test('should dispatch setSettingTafsir correctly', (done) => {
    store.dispatch('setSettingTafsir', false)
    expect(store.state.settingShowTafsir).toBe(false)
    store.dispatch('setSettingTafsir', true)
    expect(store.state.settingShowTafsir).toBe(true)
    done()
  })
  test('should dispatch setSettingTranslation correctly', (done) => {
    store.dispatch('setSettingTranslation', false)
    expect(store.state.settingShowTranslation).toBe(false)
    store.dispatch('setSettingTranslation', true)
    expect(store.state.settingShowTranslation).toBe(true)
    done()
  })
  test('should dispatch setActiveTheme correctly', (done) => {
    store.dispatch('setActiveTheme', Theme.DARK)
    expect(store.state.settingActiveTheme).toEqual(Theme.DARK)
    store.dispatch('setActiveTheme', Theme.LIGHT)
    expect(store.state.settingActiveTheme).toEqual(Theme.LIGHT)
    done()
  })
  test('should dispatch initDataFromBrowserStorage correctly', (done) => {
    store.dispatch('initDataFromBrowserStorage')
    expect(store.state.settingShowTranslation).toBe(true)
    expect(store.state.settingShowTafsir).toBe(true)
    expect(store.state.settingActiveTheme).toEqual(Theme.LIGHT)
    done()
  })
  test('should dispatch showNotification correctly', (done) => {
    store.dispatch('showNotification', {
      title: 'title',
      message: 'message'
    })
    expect(store.state.notification).toEqual({
      show: true,
      title: 'title',
      message: 'message'
    })
    done()
  })
  test('should dispatch addToFavorite correctly', (done) => {
    const surahDummy = {
      translation: 'Pembukaan',
      arabic: 'الفاتحة',
      latin: 'Al-Fatihah',
      ayah_count: 7,
      index: 1
    }
    store.dispatch('addToFavorite', surahDummy)
    expect(store.state.surahFavorite).toEqual([surahDummy])
    done()
  })
  test('should dispatch removeFromFavorite correctly', (done) => {
    const surahDummy = {
      translation: 'Pembukaan',
      arabic: 'الفاتحة',
      latin: 'Al-Fatihah',
      ayah_count: 7,
      index: 1
    }
    store.dispatch('addToFavorite', surahDummy)
    expect(store.state.surahFavorite).toEqual([surahDummy])
    store.dispatch('removeFromFavorite', surahDummy)
    expect(store.state.surahFavorite).toEqual([])
    done()
  })
  test('should dispatch setLastReadVerse correctly', (done) => {
    const dataDummy = {
      surah: 1,
      verse: 1
    }
    store.dispatch('setLastReadVerse', dataDummy)
    expect(store.state.lastReadVerse).toEqual(dataDummy)
    done()
  })
  test('should dispatch setWebshareSupport correctly', (done) => {
    store.dispatch('setWebshareSupport', true)
    expect(store.state.isSupportWebShare).toBe(true)
    store.dispatch('setWebshareSupport', false)
    expect(store.state.isSupportWebShare).toBe(false)
    done()
  })
  test('should dispatch shareViaWebshare correctly', (done) => {
    const MockFn = jest.fn()
    global.navigator.share = MockFn
    const dataDummy = {
      title: 'title',
      text: 'text',
      url: 'url'
    }
    store.dispatch('setWebshareSupport', true)
    store.dispatch('shareViaWebshare', dataDummy)
    expect(MockFn).toBeCalled()
    done()
  })
  test('should dispatch shareViaWebshare correctly when web share unsupported', (done) => {
    const MockFn = jest.fn()
    global.navigator.share = MockFn
    const dataDummy = {
      title: 'title',
      text: 'text',
      url: 'url'
    }
    store.dispatch('setWebshareSupport', false)
    store.dispatch('shareViaWebshare', dataDummy)
    expect(MockFn).toBeCalledTimes(0)
    done()
  })
})
