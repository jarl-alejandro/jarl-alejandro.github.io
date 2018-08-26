import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
      <header className={`Header ${sticky}`}>
        <img src={`${logo}`} className='Header-logo' />

        <nav className='Header-menu'>
          <ul className='Header-list'>
            <li className='Header-item'>
              <Link to='/'>Inicio</Link>
            </li>
            <li className='Header-item'>
              <Link to='/proyectos'>Proyectos</Link>
            </li>
            <li className='Header-item'>
              <Link to='/tecnologias'>Tecnologias</Link>
            </li>
            <li className='Header-item'>
              <Link to='/contacteme'>Contáctame</Link>
            </li>
          </ul>
        </nav>

      </header>
    )
  }
}

export default MenuAside
