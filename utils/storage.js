import { __isNotNull } from './index'
import { AppConstant } from '../constant/index'

export const getItem = (key) => {
  if (process.client) {
    try {
      const v = AppConstant.VERSION
      const cache = localStorage.getItem(key)
      if (__isNotNull(cache)) {
        const dataInCache = JSON.parse(cache)
        if (__isNotNull(dataInCache.value)) {
          // check cache version
          if (__isNotNull(dataInCache.version)) {
            const versionInCache = dataInCache.version
            if (v === versionInCache) { // only return value when version was matched
              return dataInCache.value
            }
          } else return dataInCache.value // return value when version null without checking version
        }
      }
    } catch (e) {
      return null
    }
  }

  return null
}

export const setItem = (key, value = '', version = null) => {
  if (process.client) {
    try {
      const data = {
        version,
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
