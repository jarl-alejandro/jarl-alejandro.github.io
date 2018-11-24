import React from 'react'
import './style.css'

const Service = () => (
  <section className="Service" id="servicios">
    <h1 className='Service-title'>¿Quieres mi ayuda?</h1>
    <p className='Service-text'>
      Puedo brindar <span className='bold'>asesoría, talleres y desarrollo de software </span>para su empresa o startup.
    </p>
    <p className="Service-text">La siguiente es una lista de servicios (con la ultima tecnologia y seguridad) con las que puedo ayudar en el desarrollo de:</p>
    <ul className="Service-list">
      <li className="Service-item">landing page (paginas estaticas)</li>
      <li className="Service-item">Aplicaciones web dinamicas</li>
      <li className="Service-item">Aplicaciones contables</li>
      <li className="Service-item">Aplicaciones mobiles (react native)</li>
      <li className="Service-item">Gestion de servidores (devOps)</li>
      <li className="Service-item">diseño y maquetacion de aplicaciones</li>
    </ul>
  </section>
)

export default Service