/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React, { Component } from 'react'
import { Container } from '../../components/PageUtils'
import { SettingsRow, SettingsGroup } from './Widgets';

class SettingsPage extends Component {
  render() {
    return (
      <Container>
        <SettingsGroup title='About'>
          <SettingsRow
            title='Version'
            subtitle='1.0.0'
          />
        </SettingsGroup>
      </Container>
    )
  }
}

export default SettingsPage