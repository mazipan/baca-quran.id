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
    console.log('cache', cache)
    if (__isNotNull(cache)) {
      commit('setSurahDetail', cache)
      success && success(cache)
    } else {
      fetch(ApiPath.SURAH_BY_ID(id))
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log('fetch', data[id])
          commit('setSurahDetail', data[id])
          setItem(storageKey.SURAH_BY_ID(id), data[id])
          success && success(data[id])
        })
    }
  }
}
