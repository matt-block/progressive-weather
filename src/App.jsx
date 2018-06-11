/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store from './store'
import history from './history'
import GeoHandler from './components/GeoHandler'
import Toolbar from './components/Toolbar'
import MainPage from './pages/MainPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <GeoHandler />
        <Toolbar />
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/settings' component={SettingsPage} />
            <Redirect to='/' />
          </Switch>
        </ConnectedRouter>
      </React.Fragment>
    </Provider>
  )
}

export default App