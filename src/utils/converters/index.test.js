import {
  kelvinToCelsius,
  celsiusToKelvin,
  kelvinToFahrenheit,
  fahrenheitToKelvin,
} from './index'

describe('Unit converters', () => {
  test('convert Kelvin to Celsius', () => {
    const kelvinTemps = [273.15, 300, 310.15]
    const expectedCelsius = [0, 26.85, 37]

    kelvinTemps.map((kelvin, index) => {
      expect(kelvinToCelsius(kelvin)).toBeCloseTo(expectedCelsius[index], 1)
      return kelvin
    })
  })

  test('convert Celsius to Kelvin', () => {
    const celsiusTemps = [0, 26.85, 37]
    const expectedKelvin = [273.15, 300, 310.15]

    celsiusTemps.map((celsius, index) => {
      expect(celsiusToKelvin(celsius)).toBeCloseTo(expectedKelvin[index], 1)
      return celsius
    })
  })

  test('convert Kelvin to Fahrenheit', () => {
    const kelvinTemps = [0, 272.04, 300.09]
    const expectedFahrenheit = [-459.67, 30, 80.5]

    kelvinTemps.map((kelvin, index) => {
      expect(kelvinToFahrenheit(kelvin)).toBeCloseTo(expectedFahrenheit[index], 1)
      return kelvin
    })
  })

  test('convert Fahrenheit to Kelvin', () => {
    const fahrenheitTemps = [-459.67, 30, 80.5]
    const expectedKelvin = [0, 272.04, 300.09]

    fahrenheitTemps.map((celsius, index) => {
      expect(fahrenheitToKelvin(celsius)).toBeCloseTo(expectedKelvin[index], 1)
      return celsius
    })
  })
})