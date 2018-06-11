/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// Airbnb coding style enforces to use the .jsx extension on all files that use
// JSX. However, `create-react-app` requires the entry point to use the .js
// extension.
//
// Keep track of https://github.com/facebook/create-react-app/pull/4012 as this
// situation might get solved in the near future.
//
// As a workaround, `App` is used with plain Javascript.
ReactDOM.render(
  React.createElement(App, null, null),
  document.getElementById('root'),
)

registerServiceWorker()