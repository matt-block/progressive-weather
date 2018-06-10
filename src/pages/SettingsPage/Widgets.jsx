/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import './Widgets.css'
import { ExternalIcon } from '../../components/Icons';

export function SettingsRow({ title, subtitle, children }) {
  const subtitleText = subtitle ? <span className='settings__row-subtitle'>{subtitle}</span> : null

  return (
    <li className='settings__row'>
      <div className='settings_row-title-wrapper'>
        <span className='settings__row-title'>{title}</span>
        {subtitleText}
      </div>
      <div className='settings__row-side-content'>
        {children}
      </div>
    </li>
  )
}

export function SettingsRowLink({ title, subtitle, url }) {
  const subtitleText = subtitle ? <span className='settings__row-subtitle'>{subtitle}</span> : null

  return (
    <li className='settings__row'>
      <a className='settings__row-link' href={url} target='_blank'>
        <div className='settings_row-title-wrapper'>
          <span className='settings__row-title'>{title}</span>
          {subtitleText}
        </div>
        <div className='settings__row-side-content'>
          <div className='settings__row-link-icon'>
            <ExternalIcon />
          </div>
        </div>
      </a>
    </li>
  )
}

export function SettingsGroup({ title, children }) {
  return (
    <React.Fragment>
      <span className='settings__group-title'>{title}</span>
      <ul className='settings__group'>
        {children}
      </ul>
    </React.Fragment>
  )
}