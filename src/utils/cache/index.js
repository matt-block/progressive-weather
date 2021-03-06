/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

export function getCache() {
  return JSON.parse(window.localStorage.getItem('cache'))
}

export function updateCache(cache) {
  window.localStorage.setItem('cache', JSON.stringify(cache))
}

export function clearCache() {
  window.localStorage.removeItem('cache')
}