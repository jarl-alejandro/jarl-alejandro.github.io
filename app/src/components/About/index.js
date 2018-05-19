import React from 'react'
import './style.css'

function About (props) {
  return (
    <section className='Section About'>
      <article className='About-me'>
        <h2 className='About-title'>Soy desarrollador web de Ecuador</h2>
        <p className='About-text'>
          Hola me llamo Alejandro Rivas tengo 21 años de edad, me gusta programar,
          practicar cualquier tipo de deporte, soy autodicata aprender nuevas cosas
          cada día, aparte de la programacion tengo una gran atraccion hacia el estudio
          del universo
        </p>
      </article>
      <article className='About-know'>
        <div className='About-normal'>
          <h2 className='About-title'>Conocimientos</h2>
          <ul className='About-list'>
            <li className='About-item'>Responsive & Adaptive Design</li>
            <li className='About-item'>HTML5</li>
            <li className='About-item'>CSS3</li>
            <li className='About-item'>JavaScript / ES</li>
            <li className='About-item'>React.js</li>
            <li className='About-item'>Node.js</li>
            <li className='About-item'>Python / Django</li>
            <li className='About-item'>Mongodb</li>
            <li className='About-item'>Mysql</li>
            <li className='About-item'>Webpack</li>
            <li className='About-item'>Git / Github / Gitlan</li>
          </ul>
        </div>
      </article>
    </section>
  )
}

export default About
