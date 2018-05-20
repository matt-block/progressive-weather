/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiReducer } from './reducers'

export const store = createStore(apiReducer, applyMiddleware(thunk))