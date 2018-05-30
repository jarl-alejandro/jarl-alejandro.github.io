import React from 'react'
import Item from './Item'
import './style.css'

function Projects (props) {
  return (
    <section className='Section ProjectsLayout'>
      <h2 className='Projects-title'>Proyectos</h2>
      <section className='Projects'>
        <Item name='DolceCoffe' />
        <Item name='Indigo desing' />
        <Item name='Rushbik' />
        <Item name='Jarl' />
      </section>
    </section>
  )
}

export default Projects
