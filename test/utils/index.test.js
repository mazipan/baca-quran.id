/* eslint-env jest */
import {
  __isNotNull,
  __isNotEmptyString,
  __isNotEmptyArray,
  __isFunction,
  __slugify
} from '../../utils/index'

describe('utils index', () => {
  test('__isNotNull should return false because undefined', () => {
    const result = __isNotNull()
    expect(result).toBe(false)
  })
  test('__isNotNull should return false', () => {
    const result = __isNotNull(null)
    expect(result).toBe(false)
  })
  test('__isNotNull should return true', () => {
    const result = __isNotNull('qwerty')
    expect(result).toBe(true)
  })
  test('__isNotNull should return true even with many parameter checking', () => {
    const obj = {
      state: {
        auth: {
          authUser: {
            data_JWT: {
              customer: {
                organization_name: 'qwerty'
              }
            }
          }
        }
      }
    }
    const result = __isNotNull(
      obj &&
        obj.state &&
        obj.state.auth &&
        obj.state.auth.authUser &&
        obj.state.auth.authUser.data_JWT &&
        obj.state.auth.authUser.data_JWT.customer &&
        obj.state.auth.authUser.data_JWT.customer.organization_name
    )
    expect(result).toBe(true)
  })
  test('__isNotNull should return false because many parameter have some null', () => {
    const obj = {
      state: {
        auth: {
          authUser: {
            data_JWT: null
          }
        }
      }
    }
    const result = __isNotNull(
      obj &&
        obj.state &&
        obj.state.auth &&
        obj.state.auth.authUser &&
        obj.state.auth.authUser.data_JWT &&
        obj.state.auth.authUser.data_JWT.customer &&
        obj.state.auth.authUser.data_JWT.customer.organization_name
    )
    expect(result).toBe(false)
  })
  test('__isNotEmptyString should return true', () => {
    const result = __isNotEmptyString('qwerty')
    expect(result).toBe(true)
  })
  test('__isNotEmptyString should return false', () => {
    const result = __isNotEmptyString('')
    expect(result).toBe(false)
  })
  test('__isNotEmptyArray should return true', () => {
    const result = __isNotEmptyArray([1, 2, 3, 4, 5])
    expect(result).toBe(true)
  })
  test('__isNotEmptyArray should return false because have no items', () => {
    const result = __isNotEmptyArray([])
    expect(result).toBe(false)
  })
  test('__isNotEmptyArray should return false because null', () => {
    const result = __isNotEmptyArray(null)
    expect(result).toBe(false)
  })
  test('__isNotEmptyArray should return false because undefined', () => {
    const result = __isNotEmptyArray()
    expect(result).toBe(false)
  })
  test('__isFunction should return true', () => {
    const result = __isFunction(() => {})
    expect(result).toBe(true)
  })
  test('__isFunction should return false', () => {
    const result = __isFunction('')
    expect(result).toBe(false)
  })
  test('__slugify should return slug string', () => {
    const result = __slugify('Sebuah Nama')
    expect(result).toEqual('sebuah-nama')
  })
  test('__slugify should return empty string', () => {
    const result = __slugify('')
    expect(result).toEqual('')
  })
})
