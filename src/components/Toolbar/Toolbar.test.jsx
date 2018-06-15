import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Toolbar } from './Toolbar'

Enzyme.configure({ adapter: new Adapter() })

describe('NetworkError', () => {
  test('renders without crashing', () => {
    const props = {
      currentPath: '/',
      goToSettings: () => undefined,
      goBack: () => undefined,
    }
    const div = document.createElement('div')
    ReactDOM.render(<Toolbar {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('renders correctly on the main page', () => {
    const props = {
      currentData: {
        locationName: 'Berlin',
      },
      currentPath: '/',
      goToSettings: () => undefined,
      goBack: () => undefined,
    }
    const toolbar = mount(<Toolbar {...props} />)

    const title = toolbar.find('.header-shell__title').text()
    const settingsButton = toolbar.find('.icon-settings').length
    const backButton = toolbar.find('.icon-back').length

    expect(title).toEqual('Berlin')
    expect(settingsButton).toBeTruthy()
    expect(backButton).toBeFalsy()

    toolbar.unmount()
  })

  test('renders correctly on the settings page', () => {
    const props = {
      currentData: {
        locationName: 'Berlin',
      },
      currentPath: '/settings',
      goToSettings: () => undefined,
      goBack: () => undefined,
    }
    const toolbar = mount(<Toolbar {...props} />)

    const title = toolbar.find('.header-shell__title').text()
    const settingsButton = toolbar.find('.icon-settings').length
    const backButton = toolbar.find('.icon-back').length

    expect(title).toEqual('Settings')
    expect(settingsButton).toBeFalsy()
    expect(backButton).toBeTruthy()

    toolbar.unmount()
  })
})