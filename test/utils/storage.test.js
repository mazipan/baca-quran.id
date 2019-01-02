/* eslint-env jest */
import { getItem, setItem } from '../../utils/storage'

describe('utils storage', () => {
  test('getItem should return null', () => {
    const result = getItem('neversetted')
    expect(result).toBeNull()
  })
  test('setItem should return null', () => {
    const result = setItem('test', 'abc')
    expect(result).toBeNull()
  })
})
