/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import icon from '../../assets/ic_loading.svg'
import './Spinner.css'

function Spinner() {
  return <div className='spinner'><img src={icon} alt='' /></div>
}

export default Spinner