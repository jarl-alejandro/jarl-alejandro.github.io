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
      <header className={`Header ${sticky}`}>
        <div className="Header-content">
          <div className="Header-flex">
            <img src={`${logo}`} className='Header-logo' alt='Alejandro Rivas' />
            <h1 className="Header-title">Alejandro Rivas</h1>
          </div>

          <nav className='Header-menu'>
            <ul className='Header-list'>
              <li className='Header-item'>
                <a href='#alejandro'>Alejandro</a>
              </li>
              <li className='Header-item'>
                <a href='#servicios'>Servicios</a>
              </li>
              <li className='Header-item'>
                <a href='#experiencia'>Experiencia</a>
              </li>
              <li className='Header-item'>
                <a href='#tecnologias'>Tecnologias</a>
              </li>
             
            </ul>
          </nav>
        </div>

      </header>
    )
  }
}

export default MenuAside
