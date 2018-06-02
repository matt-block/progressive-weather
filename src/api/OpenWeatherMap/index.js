/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 *
 * @flow
 */

type Unit = '' | 'metric' | 'imperial'
type Format = '' | 'xml' | 'html'

/**
 * OpenWeatherMap API wrapper.
 *
 * @see https://openweathermap.org/api
 */
class OpenWeatherMap {
  API_ENDPOINT_BASE = 'https://api.openweathermap.org/data/2.5'
  API_KEY: string
  UNIT: Unit
  FORMAT: Format

  constructor(apiKey: string, unit: Unit = '', format: Format = '') {
    this.API_KEY = apiKey
    this.UNIT = unit
    this.FORMAT = format
  }

  /**
   * Get the current weather data for a set of geographical coordinates.
   *
   * @param {number} latitude North–south position of a point on the Earth's
   * surface. Must be between -90 and 90 (inclusive).
   * @param {number} longitude East-west position of a point on the Earth's
   * surface. Must be between -180 and 180 (inclusive).
   */
  async getCurrentByCoordinates(latitude: number, longitude: number): any {
    const options = { method: 'GET' }
    const data = await fetch(
      `${this.API_ENDPOINT_BASE}/weather?lat=${latitude}&lon=${longitude}&appid=${this.API_KEY}&units=${this.UNIT}&mode=${this.FORMAT}`,
      options)
    return await data.json()
  }

  /**
   * Get the forecast data for 5 days with data every 3 hours for a set of
   * geographical coordinates.
   *
   * @param {number} latitude North–south position of a point on the Earth's
   * surface. Must be between -90 and 90 (inclusive).
   * @param {number} longitude East-west position of a point on the Earth's
   * surface. Must be between -180 and 180 (inclusive).
   */
  async getForecasatByCoordinates(latitude: number, longitude: number): any {
    const options = { method: 'GET' }
    const data = await fetch(
      `${this.API_ENDPOINT_BASE}/forecast?lat=${latitude}&lon=${longitude}&appid=${this.API_KEY}&units=${this.UNIT}&mode=${this.FORMAT}`,
      options)
    return await data.json()
  }
}

export default OpenWeatherMap