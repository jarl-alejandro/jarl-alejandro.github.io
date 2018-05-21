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
            Hola me llamo Alejandro Rivas tengo 21 años de edad, me gusta programar,
            practicar cualquier tipo de deporte, soy autodicata aprender nuevas cosas
            cada día, aparte de la programacion tengo una gran atraccion hacia el estudio
            del universo
          </p>
        </div>
      </article>
      <Know />
    </section>
  )
}

export default About
