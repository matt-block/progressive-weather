/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

const initialState = {
  currentData: undefined,
  forecastData: undefined,
  isFetching: false,
  error: undefined,
}

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'API_ADD_DATA':
      return { ...state, currentData: action.currentData }
    case 'API_REMOVE_DATA':
      return { ...state, currentData: undefined }
    case 'API_ADD_FORECAST':
      return { ...state, forecastData: action.forecastData }
    case 'API_REMOVE_FORECAST':
      return { ...state, forecastData: undefined }
    case 'API_START_FETCHING':
      return { ...state, isFetching: true }
    case 'API_STOP_FETCHING':
      return { ...state, isFetching: false }
    case 'API_ADD_ERROR':
      return { ...state, error: action.error }
    case 'API_REMOVE_ERROR':
      return { ...state, error: undefined }
    default:
      return state
  }
}

export default apiReducer