/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Widgets.css'
import { ExternalIcon } from '../../components/Icons'

export function Select({ value, onChange }) {
  return (
    <div className='settings__select-wrapper'>
      <select
        value={value}
        onChange={onChange}
        className='settings__select'
      >
        <option value='metric'>Celsius</option>
        <option value='imperial'>Fahrenheit</option>
      </select>
      <div className='settings__select-arrow'>▼</div>
    </div>
  )
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

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

SettingsRow.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.element,
}

SettingsRow.defaultProps = {
  subtitle: '',
  children: null,
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

SettingsRowLink.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  url: PropTypes.string.isRequired,
}

SettingsRowLink.defaultProps = {
  subtitle: '',
}

export function SettingsRowInternalLink({ title, subtitle, url }) {
  const subtitleText = subtitle ? <span className='settings__row-subtitle'>{subtitle}</span> : null

  return (
    <li className='settings__row'>
      <Link to={url} className='settings__row-link'>
        <div className='settings_row-title-wrapper'>
          <span className='settings__row-title'>{title}</span>
          {subtitleText}
        </div>
        <div className='settings__row-side-content' />
      </Link>
    </li>
  )
}

SettingsRowInternalLink.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  url: PropTypes.string.isRequired,
}

SettingsRowInternalLink.defaultProps = {
  subtitle: '',
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

SettingsGroup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
}

export function UpdateRow() {
  return (
    <div className='settings__update-button-wrapper'>
      <button onClick={() => window.location.reload()}>Update now</button>
    </div>
  )
}