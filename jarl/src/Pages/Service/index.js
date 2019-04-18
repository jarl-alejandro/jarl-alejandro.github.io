import React, { PureComponent } from 'react'

import './style.scss'

class Service extends PureComponent {

  render () {
    return (
      <section className="Service">
        <svg version="1.1" className="uncode-row-divider uncode-row-divider-swoosh-opacity" x="0px" y="0px" width="100%" height="70%" viewBox="0 0 240 24" enableBackground="new 0 0 240 24" preserveAspectRatio="none">
          <path d="M240,24V3.72c-51.797,0-69.883,11.64-94.707,14.021c-24.691,2.359-43.872-3.25-63.765-3.17 c-19.17,0.109-31.196,3.6-51.309,6.529C15.552,23.209,4.321,22.47,0,22.029V24H240z"></path>
        </svg>
      </section>
    )
  }
}

export default Service
