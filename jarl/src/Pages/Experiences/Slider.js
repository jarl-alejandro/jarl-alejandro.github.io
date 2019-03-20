import React, { PureComponent } from 'react'
import "./index.scss"

class Slider extends PureComponent {

  render () {
    return (
      <article className="ProjectSlider">
        <div className="ProjectSlider-arrows">
          <a href="#">
            <i className="material-icons">arrow_back</i>
          </a>
          <a href="#">
            <i className="material-icons">arrow_forward</i>
          </a>
        </div>
        <div className="ProjectSlider-images">
          <img className="ProjectSlider-images-img" src="http://riccardozanutta.com/img/cerasa-ui.png" alt="Rushbik"/>
        </div>
      </article>
    )
  }
}

export default Slider