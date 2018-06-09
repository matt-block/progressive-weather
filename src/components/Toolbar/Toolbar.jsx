/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import { connect } from 'react-redux'
import { push, goBack } from 'connected-react-router'
import { Container } from '../PageUtils'
import { ToolbarShell, ToolbarTitle, ToolbarNavigation, ToolbarSettings } from './Widgets'
import { NotificationDot, SettingsIcon, BackIcon } from '../Icons'

function Toolbar(props) {
  if (!props.currentData) { return null }

  let title = props.currentData.locationName
  let settingsIcon = (
    <div onClick={props.goToSettings}>
      <NotificationDot>
        <SettingsIcon />
      </NotificationDot>
    </div>
  )

  if (props.currentPath === '/settings') {
    settingsIcon = null
    title = 'Settings'
  }

  let backIcon = null

  if (props.currentPath !== '/') {
    backIcon = (
      <div onClick={props.goBack}>
        <BackIcon />
      </div>
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

const mapStateToProps = (state) => ({
  currentData: state.currentData,
  isFetching: state.isFetching,
  currentPath: state.router.location.pathname,
})

const mapDispatchToProps = (dispatch) => ({
  goToSettings() {
    return dispatch(push('/settings'))
  },
  goBack() {
    return dispatch(goBack())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)