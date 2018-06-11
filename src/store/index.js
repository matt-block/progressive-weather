/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import { createStore, compose, applyMiddleware } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import history from '../history'
import apiReducer from './reducers'

const store = createStore(
  connectRouter(history)(apiReducer),
  compose(applyMiddleware(
    thunk,
    routerMiddleware(history),
  )),
)

export default store