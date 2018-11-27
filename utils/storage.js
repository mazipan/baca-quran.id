import { __isNotNull } from './index'

export const getItem = (key) => {
  if (process.client) {
    try {
      const cache = localStorage.getItem(key)
      if (__isNotNull(cache)) {
        return JSON.parse(cache)
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
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      return false
    }
  }
}
