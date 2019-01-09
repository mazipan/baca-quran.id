import storageKey from '../constant/storage-key'
import { __isNotNull } from '../utils/index'
import { getItem, setItem } from '../utils/storage'
import { AppConstant } from '../constant/index'

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
    const cacheFavorite = getItem(storageKey.FAVORITE) || []
    commit(MutationType.SET_FAVORITE, cacheFavorite)
    const cacheLastRead = getItem(storageKey.LAST_READ) || {}
    commit(MutationType.SET_LAST_READ, cacheLastRead)
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
  setLastReadVerse ({ commit, state }, { surah, verse }) {
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
    const cache = getItem(storageKey.ALL_SURAH)
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
          setItem(storageKey.ALL_SURAH, indexedData, AppConstant.VERSION)
        })
    }
  },
  fetchSurahById ({ commit }, { id = 1, success = () => {} }) {
    const cache = getItem(storageKey.SURAH_BY_ID(id))
    const mutation = MutationType.SET_SURAH_DETAIL
    if (__isNotNull(cache)) {
      setDataToState(commit, mutation, cache, success)
    } else {
      getSurahById(id)
        .then(data => {
          const dataRes = data[id]
          setDataToState(commit, mutation, dataRes, success)
          setItem(storageKey.SURAH_BY_ID(id), dataRes, AppConstant.VERSION)
        })
    }
  },
  fetchAyatKursi ({ commit }, { success = () => {} }) {
    const cache = getItem(storageKey.AYAT_KURSI)
    const mutation = MutationType.SET_AYAT_KURSI
    if (__isNotNull(cache)) {
      setDataToState(commit, mutation, cache, success)
    } else {
      getAyatKursi()
        .then(data => {
          const dataRes = data.data
          setDataToState(commit, mutation, dataRes, success)
          setItem(storageKey.AYAT_KURSI, dataRes, AppConstant.VERSION)
        })
    }
  },
  fetchAsmaulHusna ({ commit }, { success = () => {} }) {
    const cache = getItem(storageKey.ASMAUL_HUSNA)
    const mutation = MutationType.SET_ASMAUL_HUSNA
    if (__isNotNull(cache)) {
      setDataToState(commit, mutation, cache, success)
    } else {
      getAsmaulHusna()
        .then(data => {
          const dataRes = data.data
          setDataToState(commit, mutation, dataRes, success)
          setItem(storageKey.ASMAUL_HUSNA, dataRes, AppConstant.VERSION)
        })
    }
  },
  fetchDailyDoa ({ commit }, { success = () => {} }) {
    const cache = getItem(storageKey.DAILY_DOA)
    const mutation = MutationType.SET_DAILY_DOA
    if (__isNotNull(cache)) {
      setDataToState(commit, mutation, cache, success)
    } else {
      getDailyDoa()
        .then(data => {
          const dataRes = data.data
          setDataToState(commit, mutation, dataRes, success)
          setItem(storageKey.DAILY_DOA, dataRes, AppConstant.VERSION)
        })
    }
  }
}
