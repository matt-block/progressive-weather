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
import Container from '../PageUtils'
import { ToolbarShell, ToolbarTitle, ToolbarNavigation, ToolbarSettings } from './Widgets'
import { NotificationDot, SettingsIcon, BackIcon } from '../Icons'

function Toolbar(props) {
  const backIcon = (
    <button onClick={props.goBack}>
      <BackIcon />
    </button>
  )

  const settingsIcon = (
    <button onClick={props.goToSettings}>
      <NotificationDot isActive={props.notificationEnabled}>
        <SettingsIcon />
      </NotificationDot>
    </button>
  )

  let title = props.currentData ? props.currentData.locationName : ''
  if (props.currentPath === '/settings') { title = 'Settings' }
  if (props.currentPath === '/licenses') { title = 'Licenses' }

  return (
    <Container>
      <ToolbarShell>
        <ToolbarNavigation>
          {props.currentPath !== '/' ? backIcon : null}
        </ToolbarNavigation>
        <ToolbarTitle title={title} />
        <ToolbarSettings>
          {props.currentPath === '/' ? settingsIcon : null}
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
  notificationEnabled: PropTypes.bool,
  currentPath: PropTypes.string.isRequired,
  goBack: PropTypes.func.isRequired,
  goToSettings: PropTypes.func.isRequired,
}

Toolbar.defaultProps = {
  currentData: undefined,
  notificationEnabled: false,
}

const mapStateToProps = state => ({
  currentData: state.api.currentData,
  currentPath: state.router.location.pathname,
  notificationEnabled: state.app.notification,
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