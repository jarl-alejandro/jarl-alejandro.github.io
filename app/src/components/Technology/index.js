import React from 'react'
import { Typography }  from '@material-ui/core'

import Item from './Item'
import data from './data'

import './style.css'

const Technology = props => (
  <section className='TechnologyJarl'>
    <Typography
      variant='title'
      component='h2'
      className='TechnologyJarl-title'
    > Tecnologias
    </Typography>
    <article className='TechnologyJarl-container'>
      { data.map((item, index) => (
        <Item key={index} item={item} />
      )) }
    </article>
  </section>
)

export default Technology
