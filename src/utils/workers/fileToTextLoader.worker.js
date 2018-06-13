/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

/* eslint-env worker */

/**
 * Service worker that retrieves a text file and
 * returns it's content as a string.
 */
onmessage = (event) => {
  const filePathOrUrl = event.data
  fetch(filePathOrUrl)
    .then(response => response.text())
    .then(text => postMessage(text))
}