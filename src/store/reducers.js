/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */
const initialState = {
  currentData: undefined,
  isFetching: false
}

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'API_ADD_DATA':
      return { ...state, currentData: action.currentData }
    case 'API_REMOVE_DATA':
      return { ...state, currentData: undefined }
    case 'API_START_FETCHING':
      return { ...state, isFetching: true }
    case 'API_STOP_FETCHING':
      return { ...state, isFetching: false }
    default:
      return state
  }
}