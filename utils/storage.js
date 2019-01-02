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
      const valString = JSON.stringify(value)
      localStorage.setItem(key, valString)
      return value
    } catch (e) {
      return null
    }
  }
  return null
}
