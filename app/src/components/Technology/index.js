import React, { Fragment } from 'react'
import Item from './Item'
import data from './data'
import './style.css'
import { Typography } from '@material-ui/core'
import Base from '../Base'

const style = {
  color: {
  }
}

const Technology = props => (
  <Base>
    <section className='TechnologyJarl'>
      <article className='TechnologyJarl-container'>
        <h1 className='Project-title'>Tecnologias</h1>
        { data.map((item, index) => (
          <Fragment key={index}>
            <p style={style.color}>{ item.title }</p>
            <article className='TechnologyJarl-tech'>
              { item.data.map((tech, index) => (
                <Item item={tech} key={index} />
              )) }
            </article>
          </Fragment>
        )) }
      </article>
    </section>
  </Base>
)

export default Technology
