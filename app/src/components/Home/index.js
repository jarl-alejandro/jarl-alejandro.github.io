import React from 'react'
import Base from '../Base'

import './style.css'

const Home = props => (
  <Base>
    <section className='HomeJarl'>
      <p className='HomeJarl-title'>
        Soy <span className='bold'>Alejandro Rivas, </span>
        <span className="italic bold">Software Developer </span>
        <span className="italic">
          Engineer node.js and architect front-end
        </span>
      </p>

      <ul className="HomeJarl-social">
        <li className="HomeJarl-social--item">
          <a href="https://www.instagram.com/rivasalexx/" target='_blank'>
            <i className="icon-instagram"></i>
          </a>
        </li>
        <li className="HomeJarl-social--item">
          <a href="https://codepen.io/jarl/" target='_blank'>
            <i className="icon-codepen"></i>
          </a>
        </li>
        <li className="HomeJarl-social--item">
          <a href="https://github.com/jarl-alejandro/" target='_blank'>
            <i className="icon-github"></i>
          </a>
        </li>
      </ul>
    </section>
  </Base>
)

export default Home
