/* eslint-env jest */
import { getAllSurah, getSurahById, getAyatKursi, getAsmaulHusna, getDailyDoa } from '~/services/index'

beforeEach(() => {
  jest.resetAllMocks()
})

afterAll(() => {
  jest.resetAllMocks()
})

describe('service index', () => {
  test('getAllSurah should return response', async (done) => {
    const expectedResponse = {
      data: 'dummy'
    }
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => expectedResponse
    })
    const response = await getAllSurah()
    expect(response).toEqual(expectedResponse)
    done()
  })

  test('getSurahById should return response', async (done) => {
    const expectedResponse = {
      data: 'dummy'
    }
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => expectedResponse
    })
    const response = await getSurahById('some-id')
    expect(response).toEqual(expectedResponse)
    done()
  })

  test('getAyatKursi should return response', async (done) => {
    const expectedResponse = {
      data: 'dummy'
    }
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => expectedResponse
    })
    const response = await getAyatKursi()
    expect(response).toEqual(expectedResponse)
    done()
  })

  test('getAsmaulHusna should return response', async (done) => {
    const expectedResponse = {
      data: 'dummy'
    }
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => expectedResponse
    })
    const response = await getAsmaulHusna()
    expect(response).toEqual(expectedResponse)
    done()
  })

  test('getDailyDoa should return response', async (done) => {
    const expectedResponse = {
      data: 'dummy'
    }
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => expectedResponse
    })
    const response = await getDailyDoa()
    expect(response).toEqual(expectedResponse)
    done()
  })
})
