import React from 'react'

import './style.scss'

function Portfolio () {
  return (
    <section className="Section" style={{ display: 'block', paddingTop: '2rem' }}>
      <h2 className="Section-title PortfolioGrid-title">
        <span>P</span>
        <span>ortafolio</span>
      </h2>

      <section className="PortfolioGrid">
        { new Array(5).fill(5).map((item, index) => (
          <article className="ProjectItem" key={index}>
            <div className="ProjectItem-boxContent">
              <h2 className="ProjectItem-title">Agicla</h2>
             <div className="ProjectItem-content">
                La nueva plataforma de la productividad
                Agicla (Beta) es una sola aplicación para gestionar
                efectivamente tus:
             </div>
            </div>

            <div className="ProjectItem-boxLogo">
              <img
                alt="foto"
                className="ProjectItem-logo"
                src="https://instagram.fgye12-1.fna.fbcdn.net/vp/42a0df4994cdc88455db8c44384f39d6/5E1022DD/t51.2885-15/e35/60619198_2283353238650019_9110278551377145951_n.jpg?_nc_ht=instagram.fgye12-1.fna.fbcdn.net"
              />
            </div>
          </article>
        )) }
        
      </section>
    </section>
  )
}

export default Portfolio