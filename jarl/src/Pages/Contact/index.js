import React, { PureComponent } from 'react'

import './style.scss'

class Contact extends PureComponent {

  render () {
    return (
      <section className="Contact">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="100" width="100%" viewBox="0 0 90 20" preserveAspectRatio="none">
          <path d="M0 15 H0 C0 15 35 20 45 20 S65 5 85 5 H90 V-5 H0z" stroke="transparent"/>
        </svg>
      </section>
    )
  }
}

export default Contact