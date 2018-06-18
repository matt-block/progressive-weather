/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import PropTypes from 'prop-types'
import './Widgets.css'

export function ToolbarShell(props) {
  return (
    <div className='header-shell__fixed-wrapper'>
      <header className='header-shell'>
        {props.children}
      </header>
    </div>
  )
}

ToolbarShell.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

ToolbarShell.defaultProps = {
  children: undefined,
}

export function ToolbarTitle({ title }) {
  return <h6 className='header-shell__title'>{title}</h6>
}

ToolbarTitle.propTypes = {
  title: PropTypes.string,
}

ToolbarTitle.defaultProps = {
  title: '',
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

ToolbarNavigation.propTypes = {
  children: PropTypes.element,
}

ToolbarNavigation.defaultProps = {
  children: undefined,
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

ToolbarSettings.propTypes = {
  children: PropTypes.element,
}

ToolbarSettings.defaultProps = {
  children: undefined,
}