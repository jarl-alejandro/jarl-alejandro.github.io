import React, { PureComponent } from 'react'
import "./index.scss"

class Project extends PureComponent {

  render () {
    return (
      <article className="Project-container">
        <div className="Project-description">
          <p>
          Como Desarrollador de Front-end , fui responsable de crear la IU completa para el nuevo sitio web, redefinir la Experiencia del usuario y estudiar las nuevas interacciones entre el Usuario y la Interfaz.
          </p>
          <p>
          Una de las experiencias más emocionantes fue la integración de todo el sistema frontal con la aplicación Ruby on Rails y la animación de cambio de página.
          </p>
        </div>

        <ul className="Project-tags">
          <li className="Project-tags-item">React.js</li>
          <li className="Project-tags-item">MongoDB</li>
          <li className="Project-tags-item">ES6</li>
          <li className="Project-tags-item">Redux</li>
          <li className="Project-tags-item">Express</li>
        </ul>
      </article>
    )
  }
}

export default Project