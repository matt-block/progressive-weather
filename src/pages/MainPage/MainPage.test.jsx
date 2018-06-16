import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MainPageBase } from './MainPage'

Enzyme.configure({ adapter: new Adapter() })

describe('MainPage', () => {
  test('renders correctly when offline', () => {
    const props = {
      error: 'Failed to fetch',
    }

    const page = mount(<MainPageBase {...props} />)
    const networkError = page.find('.network-error').length

    expect(networkError).toBeTruthy()

    page.unmount()
  })

  test('renders widgets when online', () => {
    const page = shallow(<MainPageBase />)
    const hasCurrentWeatherWidget = page.text().includes('Connect(CurrentWeatherBase)')
    const hasForecastWidget = page.text().includes('Connect(ForecastBase)')

    expect(hasCurrentWeatherWidget).toBe(true)
    expect(hasForecastWidget).toBe(true)

    page.unmount()
  })
})