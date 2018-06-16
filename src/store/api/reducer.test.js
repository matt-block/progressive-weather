import apiReducer from './reducer'
import {
  addApiData,
  addApiForecast,
  removeApiData,
  removeApiForecast,
  startApiFetching,
  stopApiFetching,
  addApiError,
  removeApiError,
} from './actions'

describe('Api Reducer', () => {
  test('returns the initial state', () => {
    const initialState = apiReducer(undefined, {})

    expect(initialState).toEqual({
      currentData: undefined,
      forecastData: undefined,
      isFetching: false,
      error: undefined,
    })
  })

  test('handles API_ADD_DATA', () => {
    const reducerState = apiReducer(undefined, addApiData({
      locationName: 'Berlin',
      temperature: 25,
      temperatureMin: 21.56,
      temperatureMax: 27.88,
    }))

    expect(reducerState).toEqual({
      currentData: {
        locationName: 'Berlin',
        temperature: 25,
        temperatureMin: 21.56,
        temperatureMax: 27.88,
      },
      forecastData: undefined,
      isFetching: false,
      error: undefined,
    })
  })

  test('handles API_REMOVE_DATA', () => {
    const reducerState = apiReducer({
      currentData: {
        locationName: 'Berlin',
        temperature: 25,
        temperatureMin: 21.56,
        temperatureMax: 27.88,
      },
      forecastData: undefined,
      isFetching: false,
      error: undefined,
    }, removeApiData())

    expect(reducerState).toEqual({
      currentData: undefined,
      forecastData: undefined,
      isFetching: false,
      error: undefined,
    })
  })

  test('handles API_ADD_FORECAST', () => {
    const reducerState = apiReducer(undefined, addApiForecast([
      {
        day: 3,
        icon: '03n',
        max: 12,
        min: 9,
      },
      {
        day: 4,
        icon: '03n',
        max: 14,
        min: 11,
      },
    ]))

    expect(reducerState).toEqual({
      currentData: undefined,
      forecastData: [
        {
          day: 3,
          icon: '03n',
          max: 12,
          min: 9,
        },
        {
          day: 4,
          icon: '03n',
          max: 14,
          min: 11,
        },
      ],
      isFetching: false,
      error: undefined,
    })
  })

  test('handles API_REMOVE_FORECAST', () => {
    const reducerState = apiReducer({
      currentData: undefined,
      forecastData: [
        {
          day: 3,
          icon: '03n',
          max: 12,
          min: 9,
        },
        {
          day: 4,
          icon: '03n',
          max: 14,
          min: 11,
        },
      ],
      isFetching: true,
      error: undefined,
    }, removeApiForecast())

    expect(reducerState).toEqual({
      currentData: undefined,
      forecastData: undefined,
      isFetching: true,
      error: undefined,
    })
  })

  test('handles API_START_FETCHING', () => {
    const reducerState = apiReducer(undefined, startApiFetching())

    expect(reducerState).toEqual({
      currentData: undefined,
      forecastData: undefined,
      isFetching: true,
      error: undefined,
    })
  })

  test('handles API_STOP_FETCHING', () => {
    const reducerState = apiReducer({
      currentData: undefined,
      forecastData: undefined,
      isFetching: true,
      error: undefined,
    }, stopApiFetching())

    expect(reducerState).toEqual({
      currentData: undefined,
      forecastData: undefined,
      isFetching: false,
      error: undefined,
    })
  })

  test('handles API_ADD_ERROR', () => {
    const reducerState = apiReducer(undefined, addApiError('Something went wrong'))

    expect(reducerState).toEqual({
      currentData: undefined,
      forecastData: undefined,
      isFetching: false,
      error: 'Something went wrong',
    })
  })

  test('handles API_REMOVE_ERROR', () => {
    const reducerState = apiReducer({
      currentData: undefined,
      forecastData: undefined,
      isFetching: true,
      error: 'Something went wrong',
    }, removeApiError())

    expect(reducerState).toEqual({
      currentData: undefined,
      forecastData: undefined,
      isFetching: true,
      error: undefined,
    })
  })
})