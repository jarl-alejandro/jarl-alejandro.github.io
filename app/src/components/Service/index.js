import React from 'react'
import Base from '../Base'
import './style.css'

const Service = () => (
  <Base>
    <section className="Service">
      <h1 className='Service-title'>¿Quieres mi ayuda?</h1>
      <p className='Service-text'>
        Puedo brindar <span className='bold'>asesoría, talleres y desarrollo de software </span>para su empresa o startup.
      </p>
      <p className="Service-text">La siguiente es una lista de tecnologías con las que puedo ayudar:</p>
      <ul className="Service-list">
        <li className="Service-item">JavaScript</li>
        <li className="Service-item">React.js</li>
        <li className="Service-item">Next.js</li>
        <li className="Service-item">Node.js</li>
        <li className="Service-item">GraphQL</li>
        <li className="Service-item">Arquitectura Frontend</li>
      </ul>
      <p className="Service-text">Si está interesado envíeme un correo electrónico a </p>
      <p className="Service-email">jarlalejor@gmail.com</p>
    </section>
  </Base>
)

export default Service