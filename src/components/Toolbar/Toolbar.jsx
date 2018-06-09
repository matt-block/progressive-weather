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

    return (
      <Container>
        <ToolbarShell>
          <ToolbarNavigation />
          <ToolbarTitle title={this.props.currentData.locationName} />
          <ToolbarSettings>
            <NotificationDot>
              <SettingsIcon />
            </NotificationDot>
          </ToolbarSettings>
        </ToolbarShell>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  currentData: state.currentData,
  isFetching: state.isFetching
})

export default connect(mapStateToProps)(Toolbar)