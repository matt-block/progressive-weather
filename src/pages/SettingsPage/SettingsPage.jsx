/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React, { Component } from 'react'
import { Container } from '../../components/PageUtils'
import { SettingsRow, SettingsGroup, SettingsRowLink } from './Widgets'
import { APP_REPO_LINK, APP_VERSION } from '../../config'

class SettingsPage extends Component {
  render() {
    return (
      <Container>
        <SettingsGroup title='About'>
          <SettingsRow
            title='Version'
            subtitle={APP_VERSION}
          />
          <SettingsRowLink
            title='Source code'
            subtitle='Explore the source code on GitHub'
            url={APP_REPO_LINK}
          />
        </SettingsGroup>
      </Container>
    )
  }
}

export default SettingsPage