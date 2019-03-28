import React, { PureComponent } from 'react'

import './style.scss'

class Technology extends PureComponent {

  render () {
    return (
      <section className="Technology">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="100" width="100%" viewBox="0 0 90 20" preserveAspectRatio="none">
          <path d="M0 5 H5 C25 5 25 20 45 20 S65 5 85 5 H90 V-5 H0z" stroke="transparent"/>
        </svg>
      </section>
    )
  }
}

export default Technology