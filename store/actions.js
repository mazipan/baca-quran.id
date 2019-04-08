import storageKey from '../constant/storage-key'
import Theme from '../constant/theme'
import { __isNotNull } from '../utils/index'
import { getItem, setItem } from '../utils/storage'
import MutationType from './mutation-type'

export default {
  initDataFromBrowserStorage({ commit }) {
    // data favorite surah
    const cacheFavorite = getItem(storageKey.FAVORITE, null) || []
    commit(MutationType.SET_FAVORITE, cacheFavorite)
    // data last read verse
    const cacheLastRead = getItem(storageKey.LAST_READ, null) || {}
    commit(MutationType.SET_LAST_READ, cacheLastRead)
    // data active theme
    const cacheTheme = getItem(storageKey.SETTING_THEME, null) || Theme.LIGHT
    commit(MutationType.SET_THEME, cacheTheme)
    // data translation
    const cacheTranslation = getItem(storageKey.SETTING_TRANSLATION, null)
    commit(MutationType.SET_SETTING_TRANSLATION, __isNotNull(cacheTranslation) ? cacheTranslation : true)
    // data tafsir
    const cacheTafsir = getItem(storageKey.SETTING_TAFSIR, null)
    commit(MutationType.SET_SETTING_TAFSIR, __isNotNull(cacheTafsir) ? cacheTafsir : true)
  },
  showNotification({ commit }, { title = '', message = '' }) {
    commit(MutationType.SET_NOTIFICATION, { show: true, title, message })
    setTimeout(() => {
      commit(MutationType.SET_NOTIFICATION, { show: false, title: '', message: '' })
    }, 3000)
  },
  addToFavorite({ commit, state }, surah) {
    const isExist = state.surahFavorite.find(item => item.index === surah.index)
    if (!isExist) {
      const newFavorite = [].concat(state.surahFavorite).concat([surah])
      commit(MutationType.SET_FAVORITE, newFavorite)
      setItem(storageKey.FAVORITE, newFavorite, null)
    }
  },
  removeFromFavorite({ commit, state }, surah) {
    const isExist = state.surahFavorite.find(item => item.index === surah.index)
    if (isExist) {
      const newFavorite = state.surahFavorite.filter(item => item.index !== surah.index) || []
      commit(MutationType.SET_FAVORITE, newFavorite)
      setItem(storageKey.FAVORITE, newFavorite, null)
    }
  },
  setLastReadVerse({ commit }, { surah, verse }) {
    const data = { surah, verse }
    commit(MutationType.SET_LAST_READ, data)
    setItem(storageKey.LAST_READ, data, null)
  },
  setWebshareSupport({ commit }, isSupport) {
    commit(MutationType.SET_SUPPORT_WEBSHARE, isSupport)
  },
  shareViaWebshare({ state }, { title, text, url }) {
    if (state.isSupportWebShare) {
      if (navigator.share) { /* eslint-disable-line no-undef */
        navigator.share({ /* eslint-disable-line no-undef */
          title,
          text,
          url
        })
      }
    }
  },
  setActiveTheme({ commit }, theme) {
    setItem(storageKey.SETTING_THEME, theme, null)
    commit(MutationType.SET_THEME, theme)
  },
  setSettingTranslation({ commit }, payload) {
    setItem(storageKey.SETTING_TRANSLATION, payload, null)
    commit(MutationType.SET_SETTING_TRANSLATION, payload)
  },
  setSettingTafsir({ commit }, payload) {
    setItem(storageKey.SETTING_TAFSIR, payload, null)
    commit(MutationType.SET_SETTING_TAFSIR, payload)
  }
}
