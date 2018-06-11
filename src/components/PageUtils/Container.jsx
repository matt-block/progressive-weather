/*
 * Progressive Weather
 * Copyright © 2018 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT
 * (https://github.com/matt-block/progressive-weather/blob/master/LICENSE)
 */

import React from 'react'
import PropTypes from 'prop-types'
import './Container.css'

/**
 * Container column that maintains a reasonable width across multiple
 * screen sizes to keep its content readable and comfortable to use.
 *
 * On wider screens (e.g. desktop monitors) it will be narrower than the
 * available screen width to prevent both text and general UI from
 * spreading excessively, while on smaller screen sizes its width will be
 * close or equal to the total available screen width.
 *
 * It is not intended to be nested within one another.
 * Instead, it must be used within another component as a wrapper around
 * its content.
 *
 * It is preferred that all main components (e.g. header navigation bars,
 * footers, pages, hero components) use Container so that ultimately all
 * content visible to the user is virtually contained in one unique column.
 *
 * @example
 * // A nav bar with background that stretches across all the screen width.
 * <nav style={{ width: '100%', backgroundColor: 'green' }}>
 *   <Container>
 *     // menu links, home button, login, etc.
 *   </Container>
 * </nav>
 *
 * @see https://university.webflow.com/article/container
 * @see https://baymard.com/blog/line-length-readability
 */
function Container({ children }) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
}

Container.defaultProps = {
  children: undefined,
}

export default Container