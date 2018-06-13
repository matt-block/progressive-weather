/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import history from '../history'
import apiReducer from './api/reducer'
import licensesReducer from './licenses/reducer'

const rootReducer = combineReducers({
  api: apiReducer,
  licenses: licensesReducer,
})

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(
    thunk,
    routerMiddleware(history),
  )),
)

export default store