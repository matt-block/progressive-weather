/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import './NotificationDot.css'

/**
 * Wrapper component that adds a notification dot to an icon.
 *
 * @param {boolean} isActive Flag for setting the notification dot on or off.
 * @param {Object} children Inner children, Ideally an Icon component.
 */
export function NotificationDot({ isActive, children }) {
  const dotClass = isActive ? 'icon-notification__dot' : 'icon-notification__dot icon-notification__dot--inactive'
  return (
    <div className='icon-notification'>
      <div className={dotClass}/>
      {children}
    </div>
  )
}