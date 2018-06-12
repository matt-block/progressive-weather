/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

const licensesReducer = (state = null, action) => {
  switch (action.type) {
    case 'LICENSES_ADD':
      return action.licenses
    default:
      return state
  }
}

export default licensesReducer