/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 *
 * @flow
 */

export function kelvinToCelsius(value: number) {
  return value - 273.15
}

export function celsiusToKelvin(value: number) {
  return value + 273.15
}

export function kelvinToFahrenheit(value: number) {
  return (value * (9 / 5)) - 459.67
}

export function fahrenheitToKelvin(value: number) {
  return (value + 459.67) * (5 / 9)
}