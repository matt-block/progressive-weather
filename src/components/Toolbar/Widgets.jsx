/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import './Widgets.css'

export function ToolbarShell(props) {
  return (
    <header className='header-shell'>
      {props.children}
    </header>
  )
}

export function ToolbarTitle({ title }) {
  return <h6 className='header-shell__title'>{title}</h6>
}

/**
 * Backward navigation button wrapper.
 */
export function ToolbarNavigation({ children }) {
  return (
    <div className='header-shell__navigation-wrapper'>
      {children}
    </div>
  )
}

/**
 * Settings button wrapper.
 */
export function ToolbarSettings({ children }) {
  return (
    <div className='header-shell__settings-wrapper'>
      {children}
    </div>
  )
}