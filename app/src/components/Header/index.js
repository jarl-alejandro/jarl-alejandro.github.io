import React from 'react'
import './header.css'

function Header (props) {
  return (
    <header className='Header'>
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
