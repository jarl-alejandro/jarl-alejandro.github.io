import React from 'react'

function About (props) {
  return (
    <section className="Section">
      <article className="Section-box">
        <h2 className="Section-title">
          <span>S</span>
          <span>obre mi</span>
        </h2>

        <article>
          <div className="Section-typewriter">HOLA MUNDO</div>
          <div className="Section-subtitle">Soy un desarrollador web</div>
          <div className="Section-description">
            I'm a web desingner / developer based on web. I have a 
            passion for web desing and love to create for web  and mobile service
          </div>
        </article>
      </article>

      <article className="Secction-box">
        FOTO
      </article>
    </section>
  )
}

export default About