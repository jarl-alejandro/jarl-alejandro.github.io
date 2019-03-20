import React, { PureComponent } from 'react'

import Project from './Project'
import Slider from './Slider'

import "./index.scss"

class Experiences extends PureComponent {

  render () {
    return (
      <section className="Experiences">
        <h2 className="Experiences-title">Experiencias</h2>

        <section className="Project">
          <h2 className="Project-title">Rushbik</h2>

          <section className="Project-box">
            <Slider />
            <Project />
          </section>
        </section>
      </section>
    )
  }
}

export default Experiences