import { updateCache, clearCache, getCache } from './index'

describe('Cache', () => {
  afterEach(() => {
    window.localStorage.clear()
  })

  test('is written to localStorage', () => {
    const dataToCache = {
      locationName: 'Berlin',
      temp: 26,
    }

    updateCache(dataToCache)
    expect(JSON.parse(window.localStorage.getItem('cache'))).toEqual(dataToCache)
  })

  test('is updated to localStorage', () => {
    const outdatedCache = {
      locationName: 'Berlin',
      temp: 26,
    }

    const freshCache = {
      locationName: 'Frankfurt',
      temp: 23.5,
    }

    window.localStorage.setItem('cache', JSON.stringify(outdatedCache))
    updateCache(freshCache)
    expect(JSON.parse(window.localStorage.getItem('cache'))).toEqual(freshCache)
  })

  test('is fetched from localStorage', () => {
    const currentCache = {
      locationName: 'Berlin',
      temp: 26,
    }

    window.localStorage.setItem('cache', JSON.stringify(currentCache))

    expect(getCache()).toEqual(currentCache)
  })

  test('is removed from localStorage', () => {
    const currentCache = {
      locationName: 'Berlin',
      temp: 26,
    }

    window.localStorage.setItem('cache', JSON.stringify(currentCache))
    clearCache()
    expect(window.localStorage.getItem('cache')).toBeNull()
  })
})