import { ActionTree } from 'vuex'
import { Types } from './types'
import { StateType } from './state'
import storageKey from '~/constant/storage-key'
import Theme from '~/constant/theme'
import { __isNotNull } from '~/utils/index'
import { getItem, setItem } from '~/utils/storage'

export const actions: ActionTree<StateType, StateType> = {
  initDataFromBrowserStorage ({ commit }) {
    // data favorite surah
    const cacheFavorite = getItem(storageKey.FAVORITE, null) || []
    commit(Types.SET_FAVORITE, cacheFavorite)
    // data last read verse
    const cacheLastRead = getItem(storageKey.LAST_READ, null) || {}
    commit(Types.SET_LAST_READ, cacheLastRead)
    // data active theme
    const cacheTheme = getItem(storageKey.SETTING_THEME, storageKey.VERSION) || Theme.DARK
    commit(Types.SET_THEME, cacheTheme)
    // data translation
    const cacheTranslation = getItem(storageKey.SETTING_TRANSLATION, storageKey.VERSION)
    commit(Types.SET_SETTING_TRANSLATION, __isNotNull(cacheTranslation) ? cacheTranslation : false)
    // data tafsir
    const cacheTafsir = getItem(storageKey.SETTING_TAFSIR, storageKey.VERSION)
    commit(Types.SET_SETTING_TAFSIR, __isNotNull(cacheTafsir) ? cacheTafsir : false)
    // data muqaddimah
    const cacheMuqaddimah = getItem(storageKey.SETTING_MUQADDIMAH, storageKey.VERSION)
    commit(Types.SET_SETTING_MUQADDIMAH, __isNotNull(cacheMuqaddimah) ? cacheMuqaddimah : true)
    console.info('Read all data from storage...')
  },
  showNotification ({ commit }, { title = '', message = '' }) {
    commit(Types.SET_NOTIFICATION, { show: true, title, message })
    setTimeout(() => {
      commit(Types.SET_NOTIFICATION, { show: false, title: '', message: '' })
    }, 3000)
  },
  addToFavorite ({ commit, state }, surah) {
    const isExist = state.surahFavorite.find(item => item.index === surah.index)
    if (!isExist) {
      // @ts-ignore: Unreachable code error
      const newFavorite = [].concat(state.surahFavorite).concat([surah])
      commit(Types.SET_FAVORITE, newFavorite)
      // @ts-ignore: Unreachable code error
      setItem(storageKey.FAVORITE, newFavorite, null)
    }
  },
  removeFromFavorite ({ commit, state }, surah) {
    const isExist = state.surahFavorite.find(item => item.index === surah.index)
    if (isExist) {
      const newFavorite = state.surahFavorite.filter(item => item.index !== surah.index) || []
      commit(Types.SET_FAVORITE, newFavorite)
      // @ts-ignore: Unreachable code error
      setItem(storageKey.FAVORITE, newFavorite, null)
    }
  },
  setLastReadVerse ({ commit }, { surah, verse }) {
    const data = { surah, verse }
    commit(Types.SET_LAST_READ, data)
    // @ts-ignore: Unreachable code error
    setItem(storageKey.LAST_READ, data, null)
  },
  setWebshareSupport ({ commit }, isSupport) {
    commit(Types.SET_SUPPORT_WEBSHARE, isSupport)
  },
  shareViaWebshare ({ state }, { title, text, url }) {
    if (state.isSupportWebShare) {
      // @ts-ignore: Unreachable code error
      if (window.navigator.share) { /* eslint-disable-line no-undef */
        try {
          // @ts-ignore: Unreachable code error
          window.navigator.share({ /* eslint-disable-line no-undef */
            title,
            text,
            url
          })
        } catch (error) {
          console.error('Error using native share API', error)
        }
      }
    }
  },
  setActiveTheme ({ commit }, theme) {
    setItem(storageKey.SETTING_THEME, theme, storageKey.VERSION)
    commit(Types.SET_THEME, theme)
  },
  setSettingTranslation ({ commit }, payload) {
    setItem(storageKey.SETTING_TRANSLATION, payload, storageKey.VERSION)
    commit(Types.SET_SETTING_TRANSLATION, payload)
  },
  setSettingTafsir ({ commit }, payload) {
    setItem(storageKey.SETTING_TAFSIR, payload, storageKey.VERSION)
    commit(Types.SET_SETTING_TAFSIR, payload)
  },
  setSettingMuqaddimah ({ commit }, payload) {
    setItem(storageKey.SETTING_MUQADDIMAH, payload, storageKey.VERSION)
    commit(Types.SET_SETTING_MUQADDIMAH, payload)
  }
}
