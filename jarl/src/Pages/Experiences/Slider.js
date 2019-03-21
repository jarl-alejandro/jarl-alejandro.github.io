import React, { PureComponent } from 'react'
import "./index.scss"

class Slider extends PureComponent {

  render () {
    return (
      <article className="ProjectSlider">
        <div className="ProjectSlider-arrows">
          
        </div>
        <div className="ProjectSlider-images">
          <img className="ProjectSlider-images-img" src="http://riccardozanutta.com/img/lafrancesca-ui.png" alt="Rushbik"/>
        </div>
      </article>
    )
  }
}

export default Slider