import React, { Component } from 'react'
import logo from './logo.png'

import './style.css'

class MenuAside extends Component {
  constructor (props) {
    super(props)
    this.state = {
      setState: false
    }

    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll, false)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onScroll, false)
  }

  onScroll () {
    if (window.scrollY >= 60 && !this.state.sticky) {
      this.setState({ sticky: true })
    } else if (window.scrollY < 60 && this.state.sticky) {
      this.setState({ sticky: false })
    }
  }

  render () {
    const sticky = this.state.sticky && 'sticky'
    
    return (
      <header className='Header'>
        <img src={logo} className='Header-logo' />

        <nav className='Header-menu'>
          <ul className='Header-list'>
            <li className='Header-item'>
              <a href="#inicio">Inicio</a>
            </li>
            <li className='Header-item'>
              <a href="#inicio">Proyectos</a>
            </li>
            <li className='Header-item'>
              <a href="#inicio">Tecnologias</a>
            </li>
            <li className='Header-item'>
              <a href="#inicio">Contáctame</a>
            </li>
          </ul>
        </nav>

      </header>
    )
  }
}

export default MenuAside
