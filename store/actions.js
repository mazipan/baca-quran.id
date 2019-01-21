import storageKey from '../constant/storage-key'
import Theme from '../constant/theme'
import { __isNotNull } from '../utils/index'
import { getItem, setItem } from '../utils/storage'
import CacheVersion from '../constant/cache-version'

import {
  getAllSurah,
  getSurahById,
  getAyatKursi,
  getAsmaulHusna,
  getDailyDoa
} from '../services/index'
import MutationType from './mutation-type'

const setDataToState = (commit, mutation, data, success) => {
  commit(mutation, data)
  success && success(data)
}

export default {
  initDataFromBrowserStorage ({ commit }) {
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
  showNotification ({ commit }, { title = '', message = '' }) {
    commit(MutationType.SET_NOTIFICATION, { show: true, title, message })
    setTimeout(() => {
      commit(MutationType.SET_NOTIFICATION, { show: false, title: '', message: '' })
    }, 3000)
  },
  addToFavorite ({ commit, state }, surah) {
    const isExist = state.surahFavorite.find(item => item.index === surah.index)
    if (!isExist) {
      const newFavorite = [].concat(state.surahFavorite).concat([surah])
      commit(MutationType.SET_FAVORITE, newFavorite)
      setItem(storageKey.FAVORITE, newFavorite, null)
    }
  },
  removeFromFavorite ({ commit, state }, surah) {
    const isExist = state.surahFavorite.find(item => item.index === surah.index)
    if (isExist) {
      const newFavorite = state.surahFavorite.filter(item => item.index !== surah.index) || []
      commit(MutationType.SET_FAVORITE, newFavorite)
      setItem(storageKey.FAVORITE, newFavorite, null)
    }
  },
  setLastReadVerse ({ commit }, { surah, verse }) {
    const data = { surah, verse }
    commit(MutationType.SET_LAST_READ, data)
    setItem(storageKey.LAST_READ, data, null)
  },
  setWebshareSupport ({ commit }, isSupport) {
    commit(MutationType.SET_SUPPORT_WEBSHARE, isSupport)
  },
  shareViaWebshare ({ state }, { title, text, url }) {
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
  fetchAllSurah ({ commit }, { success = () => {} }) {
    const cache = getItem(storageKey.ALL_SURAH, CacheVersion.LIST_OF_SURAH)
    const mutation = MutationType.SET_SURAH_LIST
    if (__isNotNull(cache)) {
      setDataToState(commit, mutation, cache, success)
    } else {
      getAllSurah()
        .then(data => {
          const indexedData = data.surah_info.map((item, idx) => {
            return Object.assign({}, item, { index: idx + 1 })
          })
          setDataToState(commit, mutation, indexedData, success)
          setItem(storageKey.ALL_SURAH, indexedData, CacheVersion.LIST_OF_SURAH)
        })
    }
  },
  fetchSurahById ({ commit }, { id = 1, success = () => {} }) {
    const cache = getItem(storageKey.SURAH_BY_ID(id), CacheVersion.SURAH_DETAIL)
    const mutation = MutationType.SET_SURAH_DETAIL
    if (__isNotNull(cache)) {
      setDataToState(commit, mutation, cache, success)
    } else {
      getSurahById(id)
        .then(data => {
          const dataRes = data[id]
          setDataToState(commit, mutation, dataRes, success)
          setItem(storageKey.SURAH_BY_ID(id), dataRes, CacheVersion.SURAH_DETAIL)
        })
    }
  },
  fetchAyatKursi ({ commit }, { success = () => {} }) {
    const cache = getItem(storageKey.AYAT_KURSI, CacheVersion.AYAT_KURSI)
    const mutation = MutationType.SET_AYAT_KURSI
    if (__isNotNull(cache)) {
      setDataToState(commit, mutation, cache, success)
    } else {
      getAyatKursi()
        .then(data => {
          const dataRes = data.data
          setDataToState(commit, mutation, dataRes, success)
          setItem(storageKey.AYAT_KURSI, dataRes, CacheVersion.AYAT_KURSI)
        })
    }
  },
  fetchAsmaulHusna ({ commit }, { success = () => {} }) {
    const cache = getItem(storageKey.ASMAUL_HUSNA, CacheVersion.ASMAUL_HUSNA)
    const mutation = MutationType.SET_ASMAUL_HUSNA
    if (__isNotNull(cache)) {
      setDataToState(commit, mutation, cache, success)
    } else {
      getAsmaulHusna()
        .then(data => {
          const dataRes = data.data
          setDataToState(commit, mutation, dataRes, success)
          setItem(storageKey.ASMAUL_HUSNA, dataRes, CacheVersion.ASMAUL_HUSNA)
        })
    }
  },
  fetchDailyDoa ({ commit }, { success = () => {} }) {
    const cache = getItem(storageKey.DAILY_DOA, CacheVersion.DAILY_DOA)
    const mutation = MutationType.SET_DAILY_DOA
    if (__isNotNull(cache)) {
      setDataToState(commit, mutation, cache, success)
    } else {
      getDailyDoa()
        .then(data => {
          const dataRes = data.data
          setDataToState(commit, mutation, dataRes, success)
          setItem(storageKey.DAILY_DOA, dataRes, CacheVersion.DAILY_DOA)
        })
    }
  },
  setActiveTheme ({ commit }, theme) {
    setItem(storageKey.SETTING_THEME, theme, null)
    commit(MutationType.SET_THEME, theme)
  },
  setSettingTranslation ({ commit }, payload) {
    setItem(storageKey.SETTING_TRANSLATION, payload, null)
    commit(MutationType.SET_SETTING_TRANSLATION, payload)
  },
  setSettingTafsir ({ commit }, payload) {
    setItem(storageKey.SETTING_TAFSIR, payload, null)
    commit(MutationType.SET_SETTING_TAFSIR, payload)
  }
}
