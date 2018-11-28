import { ApiPath, storageKey } from '../constant/index'
import { __isNotNull } from '../utils/index'
import { getItem, setItem } from '../utils/storage'

export default {
  fetchAllSurah ({ commit }, { success = () => {} }) {
    const cache = getItem(storageKey.ALL_SURAH)
    if (__isNotNull(cache)) {
      commit('setSurahList', cache)
      success && success(cache)
    } else {
      fetch(ApiPath.SURAH_INFO)
        .then(response => {
          return response.json()
        })
        .then(data => {
          const indexedData = data.surah_info.map((item, idx) => {
            return Object.assign({}, item, { index: idx + 1 })
          })
          setItem(storageKey.ALL_SURAH, indexedData)
          commit('setSurahList', indexedData)
          success && success(indexedData)
        })
    }
  },
  fetchSurahById ({ commit }, { id = 1, success = () => {} }) {
    const cache = getItem(storageKey.SURAH_BY_ID(id))
    if (__isNotNull(cache)) {
      commit('setSurahDetail', cache)
      success && success(cache)
    } else {
      fetch(ApiPath.SURAH_BY_ID(id))
        .then(response => {
          return response.json()
        })
        .then(data => {
          commit('setSurahDetail', data[id])
          setItem(storageKey.SURAH_BY_ID(id), data[id])
          success && success(data[id])
        })
    }
  },
  readDataFromStorage ({ commit }) {
    const cacheFavorite = getItem(storageKey.FAVORITE) || []
    commit('setSurahFavorite', cacheFavorite)
    const cacheLastRead = getItem(storageKey.LAST_READ) || {}
    commit('setLastReadVerse', cacheLastRead)
  },
  addToFavorite ({ commit, state }, surah) {
    const isExist = state.surahFavorite.find(item => item.index === surah.index)
    if (!isExist) {
      const newFavorite = [].concat(state.surahFavorite).concat([surah])
      commit('setSurahFavorite', newFavorite)
      setItem(storageKey.FAVORITE, newFavorite)
    }
  },
  removeFromFavorite ({ commit, state }, surah) {
    const isExist = state.surahFavorite.find(item => item.index === surah.index)
    if (isExist) {
      const newFavorite = state.surahFavorite.filter(item => item.index !== surah.index) || []
      commit('setSurahFavorite', newFavorite)
      setItem(storageKey.FAVORITE, newFavorite)
    }
  },
  setLastReadVerse ({ commit, state }, { surah, verse }) {
    const data = { surah, verse }
    commit('setLastReadVerse', data)
    setItem(storageKey.LAST_READ, data)
  },
  showNotification ({ commit }, { title = '', message = '' }) {
    commit('setNotification', { show: true, title, message })
    setTimeout(() => {
      commit('setNotification', { show: false, title: '', message: '' })
    }, 3000)
  }
}
