import React, { PureComponent } from 'react'
import logo from '../../media/logo.png'

import './index.scss'

class Header extends PureComponent {

  render () {
    return (
      <header className="Header">
        <img className="Header-logo" src={logo} alt="Alejandro Rivas"/>
        <nav className="Header-nav">
          <ul className="Header-menu">
            <li className="Header-menu-item active">Alejandro Rivas</li>
            <li className="Header-menu-item">Servicios</li>
            <li className="Header-menu-item">Experiencia</li>
            <li className="Header-menu-item">Tecnologías</li>
            <li className="Header-menu-item">Contacto</li>
          </ul>
        </nav>
      </header>
    )
  }

}

export default Header