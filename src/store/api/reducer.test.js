import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import moment from 'moment'
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
  fetchCurrentDataFor,
} from './actions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const currentDataResponseValid = {
  coord: {
    lon: 139,
    lat: 35,
  },
  sys: {
    country: 'JP',
    sunrise: 1369769524,
    sunset: 1369821049,
  },
  weather: [{
    id: 804,
    main: 'clouds',
    description: 'overcast clouds',
    icon: '04n',
  }],
  main: {
    temp: 289.5,
    humidity: 89,
    pressure: 1013,
    temp_min: 287.04,
    temp_max: 292.04,
  },
  wind: {
    speed: 7.31,
    deg: 187.002,
  },
  rain: { '3h': 0 },
  clouds: { all: 92 },
  dt: 1369824698,
  id: 1851632,
  name: 'Shuzenji',
  cod: 200,
}

describe('Api Reducer', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

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

  test('handles fetchCurrentDataFor correctly', () => {
    fetchMock
      .getOnce(
        /https:\/\/api.openweathermap.org\/data\/2.5\/weather/,
        { body: currentDataResponseValid },
      )

    const store = mockStore({
      api: {},
      app: { unit: 'metric' },
    })

    const expectedActions = [
      { type: 'API_START_FETCHING' },
      {
        type: 'API_ADD_DATA',
        currentData: {
          description: 'clouds',
          humidity: 89,
          icon: '04n',
          locationName: 'Shuzenji',
          sunrise: moment.unix(1369769524),
          sunset: moment.unix(1369821049),
          temperature: 289.5,
          temperatureMax: 292.04,
          temperatureMin: 287.04,
          wind: 7.31,
        },
      },
      { type: 'API_STOP_FETCHING' },
    ]

    return store.dispatch(fetchCurrentDataFor(12, 13)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  test('handles fetchCurrentDataFor invalid response', () => {
    fetchMock
      .getOnce(
        /https:\/\/api.openweathermap.org\/data\/2.5\/weather/,
        // Simulate an error 500.
        // Keep track of https://github.com/wheresrhys/fetch-mock/issues/295
        // for better solution in v7.
        () => { throw new Error('Failed to fetch') },
      )

    const store = mockStore({
      api: {},
      app: { unit: 'metric' },
    })

    const expectedActions = [
      { type: 'API_START_FETCHING' },
      {
        type: 'API_ADD_ERROR',
        error: 'Failed to fetch',
      },
      { type: 'API_STOP_FETCHING' },
    ]

    return store.dispatch(fetchCurrentDataFor(12, 13)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})