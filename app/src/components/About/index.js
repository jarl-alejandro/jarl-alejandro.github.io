import React from 'react'
import Know from './Know'
import './style.css'

function About (props) {
  return (
    <section className='Section About'>
      <article className='About-me'>
        <div className='About-container'>
          <h2 className='About-title'>Soy desarrollador web de Ecuador</h2>
          <p className='About-text'>
            Hola, soy Alejandro Rivas, soy un desarrollador de aplicaciones web y mobile,
            actualmente desarollo full-stack javascript tanto en el back-end como en el front-end
            y en la parte mobil con react native y web usando react.
          </p>
        </div>
      </article>
      <Know />
    </section>
  )
}

export default About
