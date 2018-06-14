/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

const initialState = {
  notification: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_NOTIFICATION_ON':
      return { ...state, notification: true }
    case 'APP_NOTIFICATION_OFF':
      return { ...state, notification: false }
    default:
      return state
  }
}

export default appReducer