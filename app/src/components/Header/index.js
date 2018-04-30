import React from 'react'
import './header.css'

function Header (props) {
  return (
    <header className='Header'>
      <h1 className='Header-logo'>JARL</h1>
      <nav className='Header-menu'>
        <ul className='Header-list'>
          <li>Inicio</li>
          <li>Sobre mi</li>
          <li>Blog</li>
          <li>Proyectos</li>
          <li>Contactos</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
