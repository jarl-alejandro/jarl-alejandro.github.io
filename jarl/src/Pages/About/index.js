import React from 'react'

function About () {
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
        <img
          className="Section-logo"
          src="https://instagram.fgye12-1.fna.fbcdn.net/vp/c0eac531b653ec54505eca10ce8eb962/5DDF9DE5/t51.2885-15/e35/60203388_140627553682544_1125612956276383839_n.jpg?_nc_ht=instagram.fgye12-1.fna.fbcdn.net"
          alt="Alejandro Rivas"
        />
      </article>
    </section>
  )
}

export default About