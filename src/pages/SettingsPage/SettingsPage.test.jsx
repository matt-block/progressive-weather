import React from 'react'
import Enzyme, { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16'
import { SettingsPageBase } from './SettingsPage'

Enzyme.configure({ adapter: new Adapter() })

describe('SettingsPage', () => {
  test('renders correctly without updates available', () => {
    const props = {
      unit: 'metric',
      changeTempUnit: () => {},
    }

    const page = mount(<Router><SettingsPageBase {...props} /></Router>)
    const updateButton = page.find('.settings__update-button-wrapper').length
    const select = page.find('.settings__select').getElement()

    expect(updateButton).toBeFalsy()
    expect(select.props.value).toBe('metric')

    page.unmount()
  })

  test('renders correctly with updates available', () => {
    const props = {
      notificationEnabled: true,
      unit: 'imperial',
      changeTempUnit: () => {},
    }

    const page = mount(<Router><SettingsPageBase {...props} /></Router>)
    const updateButton = page.find('.settings__update-button-wrapper').length
    const select = page.find('.settings__select').getElement()

    expect(updateButton).toBeTruthy()
    expect(select.props.value).toBe('imperial')

    page.unmount()
  })
})