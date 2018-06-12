/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push, goBack } from 'connected-react-router'
import moment from 'moment'
import { Container } from '../PageUtils'
import { ToolbarShell, ToolbarTitle, ToolbarNavigation, ToolbarSettings } from './Widgets'
import { NotificationDot, SettingsIcon, BackIcon } from '../Icons'

function Toolbar(props) {
  if (!props.currentData) { return null }

  let title = props.currentData.locationName
  let settingsIcon = (
    <button onClick={props.goToSettings}>
      <NotificationDot>
        <SettingsIcon />
      </NotificationDot>
    </button>
  )

  if (props.currentPath === '/settings') {
    settingsIcon = null
    title = 'Settings'
  }

  if (props.currentPath === '/licenses') {
    settingsIcon = null
    title = 'Licenses'
  }

  let backIcon = null

  if (props.currentPath !== '/') {
    backIcon = (
      <button onClick={props.goBack}>
        <BackIcon />
      </button>
    )
  }

  return (
    <Container>
      <ToolbarShell>
        <ToolbarNavigation>
          {backIcon}
        </ToolbarNavigation>
        <ToolbarTitle title={title} />
        <ToolbarSettings>
          {settingsIcon}
        </ToolbarSettings>
      </ToolbarShell>
    </Container>
  )
}

Toolbar.propTypes = {
  currentData: PropTypes.shape({
    locationName: PropTypes.string,
    temperature: PropTypes.number,
    temperatureMin: PropTypes.number,
    temperatureMax: PropTypes.number,
    humidity: PropTypes.number,
    sunrise: PropTypes.instanceOf(moment),
    sunset: PropTypes.instanceOf(moment),
    description: PropTypes.string,
    icon: PropTypes.string,
    wind: PropTypes.number,
  }),
  currentPath: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
  goToSettings: PropTypes.func.isRequired,
}

Toolbar.defaultProps = {
  currentData: undefined,
}

const mapStateToProps = state => ({
  currentData: state.currentData,
  currentPath: state.router.location.pathname,
})

const mapDispatchToProps = dispatch => ({
  goToSettings() {
    return dispatch(push('/settings'))
  },
  goBack() {
    return dispatch(goBack())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)