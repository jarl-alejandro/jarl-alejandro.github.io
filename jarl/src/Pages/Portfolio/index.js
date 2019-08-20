import React from 'react'

function Portfolio (props) {
  return (
    <section className="Section">
      <article className="Section-box">
        <h2 className="Section-title">
          <span>P</span>
          <span>ortfolio</span>
        </h2>
      </article>

      <article className="Secction-box">
        <article className="ProjectItem">
          <img src="" alt="foto" className="ProjectItem-logo" />
          <div className="ProjectItem-title">Agicla</div>
        </article>
        <article className="ProjectItem">
          <img src="" alt="foto" className="ProjectItem-logo" />
          <div className="ProjectItem-title">Agicla</div>
        </article>
        <article className="ProjectItem">
          <img src="" alt="foto" className="ProjectItem-logo" />
          <div className="ProjectItem-title">Agicla</div>
        </article>
        <article className="ProjectItem">
          <img src="" alt="foto" className="ProjectItem-logo" />
          <div className="ProjectItem-title">Agicla</div>
        </article>
        <article className="ProjectItem">
          <img src="" alt="foto" className="ProjectItem-logo" />
          <div className="ProjectItem-title">Agicla</div>
        </article>
      </article>
    </section>
  )
}

export default Portfolio