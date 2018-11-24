import React, { Fragment } from 'react'
import Item from './Item'
import data from './data'
import './style.css'

const style = {
  color: {
  }
}

const Technology = props => (
  <section className='TechnologyJarl' id="tecnologias">
    <article className='TechnologyJarl-container'>
      <h2 className='Service-title'>Tecnologias</h2>
      { data.map((item, index) => (
        <Fragment key={index}>
          <p className="Service-name">{ item.title }</p>
          <article className='TechnologyJarl-tech'>
            { item.data.map((tech, index) => (
              <Item item={tech} key={index} />
            )) }
          </article>
        </Fragment>
      )) }
    </article>
  </section>
)

export default Technology
