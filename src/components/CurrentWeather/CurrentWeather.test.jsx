import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CurrentWeatherBase } from './CurrentWeather'

Enzyme.configure({ adapter: new Adapter() })

describe('CurrentWeather', () => {
  test('renders correctly while fetching data', () => {
    const props = {
      isFetching: true,
    }
    const div = document.createElement('div')
    ReactDOM.render(<CurrentWeatherBase {...props} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('renders correctly the main widget', () => {
    const props = {
      currentData: {
        temperature: 23.34,
        temperatureMin: 17.34,
        temperatureMax: 28.01,
        humidity: 74.01,
        sunrise: moment('2010-10-20 4:30', 'YYYY-MM-DD HH:mm'),
        sunset: moment('2010-10-20 20:30', 'YYYY-MM-DD HH:mm'),
        description: 'Cloudy',
        icon: '04d',
        wind: 4,
      },
      isFetching: false,
    }
    const weather = mount(<CurrentWeatherBase {...props} />)

    const temp = weather.find('.current-weather-widget__main').text()
    const minMax = weather.find('.current-weather-widget__main-relatives').children()
    const description = weather.find('.current-weather-widget__description').text()
    const icon = weather.find('.wu-cloudy').length

    expect(temp).toEqual('23°')
    expect(minMax.first().text()).toBe('28°')
    expect(minMax.last().text()).toBe('17°')
    expect(icon).toBeTruthy()
    expect(description).toBe('Cloudy')

    weather.unmount()
  })

  test('renders correctly the secondary widget', () => {
    const props = {
      currentData: {
        locationName: 'Berlin',
        temperature: 23.34,
        temperatureMin: 17.34,
        temperatureMax: 28.01,
        humidity: 74.01,
        sunrise: moment('2010-10-20 4:30', 'YYYY-MM-DD HH:mm'),
        sunset: moment('2010-10-20 20:30', 'YYYY-MM-DD HH:mm'),
        description: 'Cloudy',
        icon: '04d',
        wind: 4,
      },
      isFetching: false,
    }
    const weather = mount(<CurrentWeatherBase {...props} />)

    const humid = weather.find('.secondary-current-weather-widget__humidity').text()
    const wind = weather.find('.secondary-current-weather-widget__wind').text()
    const sunsetSunrise = weather.find('.secondary-current-weather-widget__sunset').text()

    expect(humid).toBe('74 %')
    expect(wind).toBe('4 m/s')
    expect(sunsetSunrise).toBe('04:30 | 20:30')

    weather.unmount()
  })
})