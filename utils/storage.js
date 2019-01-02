import { __isNotNull } from './index'
import { AppConstant } from '../constant/index'

export const getItem = (key) => {
  if (process.client) {
    try {
      const v = AppConstant.VERSION
      const cache = localStorage.getItem(key)
      if (__isNotNull(cache)) {
        const dataInCache = JSON.parse(cache)
        // check cache version
        if (__isNotNull(dataInCache.version)) {
          const versionInCache = dataInCache.version
          if (v === versionInCache) {
            // return from value property
            return dataInCache.value
          }
        }
      }
    } catch (e) {
      return null
    }
  }

  return null
}

export const setItem = (key, value = '') => {
  if (process.client) {
    try {
      const v = AppConstant.VERSION
      const data = {
        version: v,
        value
      }
      const valString = JSON.stringify(data)
      localStorage.setItem(key, valString)
      return value
    } catch (e) {
      return null
    }
  }
  return null
}
