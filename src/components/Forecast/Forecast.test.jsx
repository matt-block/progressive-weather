import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ForecastBase } from './Forecast'

Enzyme.configure({ adapter: new Adapter() })

describe('Forecast', () => {
  test('renders correctly while fetching data', () => {
    const props = {
      isFetching: true,
    }
    const div = document.createElement('div')
    ReactDOM.render(<ForecastBase {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('renders correctly multiple days', () => {
    const props = {
      forecastData: [
        {
          day: 3,
          icon: '11d',
          max: 23.14,
          min: 19.89,
        },
        {
          day: 4,
          icon: '01n',
          max: 10.14,
          min: 6.01,
        },
      ],
      isFetching: false,
    }
    const forecast = mount(<ForecastBase {...props} />)

    const days = forecast.find('.forecast-list__item')
    const firstDay = days.at(0)
    const secondDay = days.at(1)

    expect(days.length).toEqual(2)

    expect(firstDay.find('.forecast-list__item-day').text()).toBe('Wednesday')
    expect(firstDay.find('.wu-tstorms').length).toBeTruthy()
    expect(firstDay.find('.forecast-list__item-temperatures').text()).toBe('23° / 20°')

    expect(secondDay.find('.forecast-list__item-day').text()).toBe('Thursday')
    expect(secondDay.find('.wu-clear').length).toBeTruthy()
    expect(secondDay.find('.forecast-list__item-temperatures').text()).toBe('10° / 6°')

    forecast.unmount()
  })
})