export const __isNotNull = (variable) => {
  if (typeof variable !== 'undefined' && variable !== null) {
    return true
  }
  return false
}

export const __isNotEmptyString = (str) => {
  if (__isNotNull(str) && str.trim() !== '') {
    return true
  }
  return false
}

export const __isNotEmptyArray = (array) => {
  if (__isNotNull(array) && array.length > 0) {
    return true
  }
  return false
}

export const __isFunction = (fn) => {
  if (__isNotNull(fn) && typeof fn === 'function') {
    return true
  }
  return false
}

export const __slugify = (val) => {
  if (val === null || val === '') return ''
  const url = val.toString()
    .toLowerCase()
    .trim()
    .replace(' / ', ' ')
    .replace(' & ', '-')
    .replace(/ /g, '-')
    .replace(/--/g, '-')
    .replace(/[^\w.]/g, '-')
    .replace(/--/g, '-')
    .replace(/-_/g, '_')

  return url
}

export const __normalizeText = (text) => {
  return text.toLowerCase().replace(/[\W_]+/g, '')
}

export const __makeThreeDigit = (numberText) => {
  let res = '000'
  const numParam = parseInt(numberText, 10)
  if (numParam < 10) {
    res = `00${numberText}`
  } else if (numParam >= 10 && numParam < 100) {
    res = `0${numberText}`
  } else {
    res = `${numberText}`
  }
  return res
}
