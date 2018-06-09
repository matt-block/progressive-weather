/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from '../PageUtils'
import { ToolbarShell, ToolbarTitle, ToolbarNavigation, ToolbarSettings } from './Widgets'
import { NotificationDot, SettingsIcon } from '../Icons'

class Toolbar extends Component {
  render() {
    if (!this.props.currentData) { return null }

    let title = this.props.currentData.locationName
    let settingsIcon = (
      <NotificationDot>
        <SettingsIcon />
      </NotificationDot>
    )

    if (this.props.currentPath === '/settings') {
      settingsIcon = null
      title = 'Settings'
    }

    return (
      <Container>
        <ToolbarShell>
          <ToolbarNavigation />
          <ToolbarTitle title={title} />
          <ToolbarSettings>
            {settingsIcon}
          </ToolbarSettings>
        </ToolbarShell>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  currentData: state.currentData,
  isFetching: state.isFetching,
  currentPath: state.router.location.pathname,
})

export default connect(mapStateToProps)(Toolbar)